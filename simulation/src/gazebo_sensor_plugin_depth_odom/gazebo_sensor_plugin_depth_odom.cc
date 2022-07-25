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

// General messages
#include <sensor_msgs/PointCloud2.h>

// FSW messages
#include <ff_msgs/CameraRegistration.h>
#include <ff_msgs/DepthOdometry.h>
#include <ff_msgs/SetBool.h>

// STL includes
#include <string>

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

    // Create a publisher for the feature messages
    depth_odometry_pub_ = nh->advertise<ff_msgs::DepthOdometry>(TOPIC_LOCALIZATION_DEPTH_ODOM, 10);

    msg_do_.header.frame_id = std::string(FRAME_NAME_WORLD);
  }

  // Only send measurements when extrinsics are available
  void OnExtrinsicsReceived(ros::NodeHandle *nh) {
    // Service for enabling depth odom
    srv_enable_ = nh->advertiseService(SERVICE_LOCALIZATION_DO_ENABLE,
      &GazeboSensorPluginDepthOdom::EnableService, this);

    // Timer triggers message
    timer_ = nh->createTimer(ros::Duration(0.8 / rate_),
      &GazeboSensorPluginDepthOdom::SendDepthOdom, this, true, false);
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
    if (!active_) return;
    depth_odometry_pub_.publish(msg_do_);
  }
 
 private:
  config_reader::ConfigReader config_;
  ros::Publisher depth_odometry_pub_;
  ros::ServiceServer srv_enable_;
  ros::Timer timer_;
  bool active_;
  ff_msgs::DepthOdometry msg_do_;
  double rate_;
  uint16_t id_;
};

GZ_REGISTER_SENSOR_PLUGIN(GazeboSensorPluginDepthOdom)

}   // namespace gazebo