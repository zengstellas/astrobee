/* Copyright (c) 2017, United States Government, as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 *
 * All rights reserved.
 *
 * The Astrobee platform is licensed under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

// ROS includes
#include <ros/ros.h>

// Sensor plugin interface
#include <astrobee_gazebo/astrobee_gazebo.h>

// FSW includes
#include <config_reader/config_reader.h>
#include <msg_conversions/msg_conversions.h>

// General messages
#include <sensor_msgs/PointCloud2.h>

// FSW messages
#include <ff_msgs/CameraRegistration.h>
#include <ff_msgs/DepthOdometry.h>
#include <ff_msgs/SetBool.h>

// STL includes
#include <string>

#include <tf2/LinearMath/Transform.h>
#include <tf2_geometry_msgs/tf2_geometry_msgs.h>
#include <tf2_eigen/tf2_eigen.h>

namespace gazebo {

class GazeboSensorPluginDepthOdom : public FreeFlyerSensorPlugin {
 public:
  GazeboSensorPluginDepthOdom() :
    FreeFlyerSensorPlugin("depth_odometry_nodelet", "perch_cam", true),
      active_(true), id_(0) {}

  ~GazeboSensorPluginDepthOdom() {}

 protected:
  // Called when plugin is loaded into gazebo
  void LoadCallback(ros::NodeHandle *nh,
    sensors::SensorPtr sensor, sdf::ElementPtr sdf) {
    // Get a link to the parent sensor
    sensor_ = std::dynamic_pointer_cast<sensors::DepthCameraSensor>(sensor);
    if (!sensor_) {
      gzerr << "GazeboSensorPluginPerchCam requires a parent camera sensor.\n";
      return;
    }
    // Get a link to the depth camera
    camera_ = sensor_->DepthCamera();
    if (!camera_) {
      gzerr << "GazeboSensorPluginPerchCam can't get rendering object.\n";
      return;
    }
    
    // Build the Camera Model
    config_.AddFile("cameras.config");
    config_.AddFile("simulation/simulation.config");
    config_.AddFile("transforms.config");
    config_.AddFile("geometry.config");
    config_.AddFile("localization/depth_odometry.config");

    if (!config_.ReadFiles()) {
        ROS_ERROR("Failed to read config files.");
        return;
    }

    if (!config_.GetReal("perch_cam_rate", &rate_))
      ROS_FATAL("Could not read the perch_cam_rate parameter.");

    // Set as first time, used for setting prev_pose_
    first_ = true;
    
    // Create a publisher for the feature messages
    depth_odometry_pub_ = nh->advertise<ff_msgs::DepthOdometry>(TOPIC_LOCALIZATION_DEPTH_ODOM, 10);

    // Get the perch camera transform
    body_T_perch_cam_ = msg_conversions::LoadEigenTransform(config_, "perch_cam_transform");

    // Create a shape for collision testing
    #if GAZEBO_MAJOR_VERSION > 7
    GetWorld()->Physics()->InitForThread();
    shape_ = boost::dynamic_pointer_cast<physics::RayShape>(GetWorld()
        ->Physics()->CreateShape("ray", physics::CollisionPtr()));
    #else
    GetWorld()->GetPhysicsEngine()->InitForThread();
    shape_ = boost::dynamic_pointer_cast<physics::RayShape>(GetWorld()
        ->GetPhysicsEngine()->CreateShape("ray", physics::CollisionPtr()));
    #endif

    msg_do_.header.frame_id = std::string(FRAME_NAME_WORLD);
  }

  // Only send measurements when extrinsics are available
  void OnExtrinsicsReceived(ros::NodeHandle *nh) {
    // Service for enabling depth odom
    srv_enable_ = nh->advertiseService(SERVICE_LOCALIZATION_DO_ENABLE,
      &GazeboSensorPluginDepthOdom::EnableService, this);

    // Timer triggers message
    timer_ = nh->createTimer(ros::Duration(rate_),
      &GazeboSensorPluginDepthOdom::SendDepthOdom, this, false, true);
  }

  // Enable or disable the feature timer
  bool EnableService(ff_msgs::SetBool::Request & req,
                     ff_msgs::SetBool::Response & res) {
    active_ = req.enable;
    res.success = true;
    return true;
  }

  // Send depth odometry output
  void SendDepthOdom(ros::TimerEvent const& event) {
    ROS_ERROR("SendDepthOdom");
    if (!active_) return;

    // msg_do_.camera_id++;
    ros::spinOnce();

    // Get the current pose as a Transform object
    #if GAZEBO_MAJOR_VERSION > 7
      curr_pose_ = tf2::Transform(
          tf2::Quaternion(
            GetModel()->WorldPose().Rot().W(),
            GetModel()->WorldPose().Rot().X(),
            GetModel()->WorldPose().Rot().Y(),
            GetModel()->WorldPose().Rot().Z()),
          tf2::Vector3(
            GetModel()->WorldPose().Pos().X(),
            GetModel()->WorldPose().Pos().Y(),
            GetModel()->WorldPose().Pos().Z()));
    #else
      curr_pose_ = tf2::Transform(
          tf2::Quaternion(
            GetModel()->GetWorldPose().rot.w,
            GetModel()->GetWorldPose().rot.x,
            GetModel()->GetWorldPose().rot.y,
            GetModel()->GetWorldPose().rot.z),
          tf2::Vector3(
            GetModel()->GetWorldPose().pos.x,
            GetModel()->GetWorldPose().pos.y,
            GetModel()->GetWorldPose().pos.z));
    #endif
    
    if (first_) {
      // First time, just use current pose
      diff_ = tf2::Transform(curr_pose_); 
      first_ = false;

    } else {
      // Find the difference between current and previous pose
      diff_ = prev_pose_.inverseTimes(curr_pose_);
    }

    // Convert to a message
    tf2::toMsg(diff_, sensor_pose_msg_);

    // Calculate pose relative to body from sensor
    // tf2::toMsg(body_T_perch_cam_ * tf2::transformToEigen(sensor_pose_msg_) * body_T_perch_cam_.inverse(), body_pose_msg_);
    body_pose_msg_ = tf2::toMsg(body_T_perch_cam_) * sensor_pose_msg_ * tf2::toMsg(body_T_perch_cam_.inverse());

    msg_do_.odometry.sensor_F_source_T_target.pose = sensor_pose_msg_;
    msg_do_.odometry.body_F_source_T_target.pose = body_pose_msg_;

    // const auto source_T_target = lc::InvertPoseWithCovariance(*target_T_source);
    // auto sensor_F_source_T_target = PoseWithCovarianceAndCorrespondences(source_T_target, N*correspondencesN, previous_timestamp_, latest_timestamp_);
    
    // const localization_common::PoseWithCovariance body_F_source_T_target = localization_common::FrameChangeRelativePoseWithCovariance(
    //     sensor_F_source_T_target->pose_with_covariance, body_T_perch_cam_);
    // msg_do_ = DepthOdometryMsg(sensor_F_source_T_target, body_F_source_T_target, timer_.last_value()); //*sensor ??
  
    msg_do_.header.stamp = ros::Time::now();
    depth_odometry_pub_.publish(msg_do_);

    // Save current pose
    prev_pose_ = tf2::Transform(curr_pose_); 
  }
 
 private:
  config_reader::ConfigReader config_;
  sensors::DepthCameraSensorPtr sensor_;
  rendering::DepthCameraPtr camera_;
  ros::Publisher depth_odometry_pub_;
  Eigen::Isometry3d body_T_perch_cam_;
  ros::ServiceServer srv_enable_;
  ros::Timer timer_;
  gazebo::physics::RayShapePtr shape_;
  bool active_;
  geometry_msgs::Pose sensor_pose_msg_;
  geometry_msgs::Pose body_pose_msg_;
  tf2::Transform prev_pose_;
  tf2::Transform curr_pose_;
  tf2::Transform diff_;
  ff_msgs::DepthOdometry msg_do_;
  bool first_;
  double rate_;
  uint16_t id_;
};

GZ_REGISTER_SENSOR_PLUGIN(GazeboSensorPluginDepthOdom)

}   // namespace gazebo