var tools =
[
    [ "Calibration", "calibration.html", [
      [ "Package Overview", "calibration.html#autotoc_md572", null ],
      [ "Camera Target Based Intrinsics Calibration", "calibration.html#autotoc_md573", [
        [ "Example Usage", "calibration.html#autotoc_md574", [
          [ "Generate target detections from bagfiles", "calibration.html#autotoc_md575", null ],
          [ "View target detection coverage in image space", "calibration.html#autotoc_md576", null ],
          [ "Calibrate", "calibration.html#autotoc_md577", [
            [ "Calibration Parameters", "calibration.html#autotoc_md578", null ],
            [ "Run Calibration", "calibration.html#autotoc_md579", null ],
            [ "Calibration Output", "calibration.html#autotoc_md580", null ],
            [ "Judging Calibration Results", "calibration.html#autotoc_md581", null ]
          ] ]
        ] ]
      ] ],
      [ "Tools", "calibration.html#autotoc_md585", [
        [ "create_undistorted_images", "calibration.html#autotoc_md586", null ],
        [ "run_camera_target_based_intrinsics_calibrator", "calibration.html#autotoc_md587", null ]
      ] ],
      [ "Scripts", "calibration.html#autotoc_md588", [
        [ "calibrate_intrinsics_and_save_results.py", "calibration.html#autotoc_md589", null ],
        [ "copy_calibration_params_to_config.py", "calibration.html#autotoc_md590", null ],
        [ "get_bags_with_topic.py", "calibration.html#autotoc_md591", null ],
        [ "make_error_histograms.py", "calibration.html#autotoc_md592", null ],
        [ "save_images_with_target_detections.py", "calibration.html#autotoc_md593", null ],
        [ "view_all_detections.py", "calibration.html#autotoc_md594", null ]
      ] ]
    ] ],
    [ "EKF Bag", "ekfbag.html", [
      [ "ekf_graph", "ekfbag.html#autotoc_md595", null ],
      [ "rosbag_to_csv", "ekfbag.html#autotoc_md596", null ],
      [ "sparse_map_eval", "ekfbag.html#autotoc_md597", null ],
      [ "ekf_diff", "ekfbag.html#autotoc_md598", null ],
      [ "streamlit webserver", "ekfbag.html#autotoc_md599", null ],
      [ "parameter_sweep.py", "ekfbag.html#autotoc_md600", null ],
      [ "create_plots.py", "ekfbag.html#autotoc_md601", null ],
      [ "bag_sweep.py", "ekfbag.html#autotoc_md602", null ],
      [ "bag_and_parameter_sweep.py", "ekfbag.html#autotoc_md603", null ],
      [ "create_average_plots.py", "ekfbag.html#autotoc_md604", null ]
    ] ],
    [ "EKF Video", "ekfvideo.html", null ],
    [ "GNC Visualizer", "gncvisualizer.html", "gncvisualizer" ],
    [ "Imu Bias Tester", "imubiastester.html", [
      [ "Usage", "imubiastester.html#autotoc_md623", null ],
      [ "Inputs", "imubiastester.html#autotoc_md624", null ],
      [ "Outputs", "imubiastester.html#autotoc_md625", null ]
    ] ],
    [ "Localization Analysis", "localizationanalysis.html", [
      [ "Package Overview", "localizationanalysis.html#autotoc_md626", [
        [ "ROS Mode", "gncvisualizer.html#autotoc_md605", null ],
        [ "DDS Mode", "gncvisualizer.html#autotoc_md606", [
          [ "On-orbit activities", "gncvisualizer.html#autotoc_md607", null ]
        ] ],
        [ "Dependencies", "gncvisualizer.html#autotoc_md608", [
          [ "If used along with the Astrobee Robot Software", "gncvisualizer.html#autotoc_md609", null ],
          [ "If using as a standalone tool", "gncvisualizer.html#autotoc_md610", null ]
        ] ],
        [ "Installing dependencies", "gncvisualizer.html#autotoc_md611", [
          [ "Installing Python", "gncvisualizer.html#autotoc_md612", null ],
          [ "Installing PIP", "gncvisualizer.html#autotoc_md613", null ],
          [ "Installing the RTI connector (DDS Only)", "gncvisualizer.html#autotoc_md614", null ],
          [ "Installing QT in standalone mode", "gncvisualizer.html#autotoc_md615", null ]
        ] ],
        [ "Platform support", "gncvisualizer.html#autotoc_md616", null ],
        [ "ImuBiasTester", "imubiastester.html#autotoc_md622", null ],
        [ "Usage Instructions", "localizationanalysis.html#autotoc_md627", null ]
      ] ],
      [ "Tools", "localizationanalysis.html#autotoc_md628", [
        [ "<tt>convert_depth_msg</tt>", "localizationanalysis.html#autotoc_md629", null ],
        [ "<tt>run_bag_imu_filterer</tt>", "localizationanalysis.html#autotoc_md630", null ],
        [ "<tt>run_depth_odometry_adder</tt>", "localizationanalysis.html#autotoc_md631", null ],
        [ "<tt>run_graph_bag</tt>", "localizationanalysis.html#autotoc_md632", null ],
        [ "<tt>run_imu_bias_tester_adder</tt>", "localizationanalysis.html#autotoc_md633", null ],
        [ "<tt>run_sparse_mapping_pose_adder</tt>", "localizationanalysis.html#autotoc_md634", null ]
      ] ],
      [ "Scripts", "localizationanalysis.html#autotoc_md635", [
        [ "<tt>bag_and_parameter_sweep</tt>", "localizationanalysis.html#autotoc_md636", null ],
        [ "<tt>bag_sweep</tt>", "localizationanalysis.html#autotoc_md637", null ],
        [ "<tt>depth_odometry_parameter_sweep</tt>", "localizationanalysis.html#autotoc_md638", null ],
        [ "<tt>get_average_opt_and_update_times</tt>", "localizationanalysis.html#autotoc_md639", null ],
        [ "<tt>groundtruth_sweep</tt>", "localizationanalysis.html#autotoc_md640", null ],
        [ "<tt>imu_analyzer</tt>", "localizationanalysis.html#autotoc_md641", null ],
        [ "<tt>make_groundtruth</tt>", "localizationanalysis.html#autotoc_md642", null ],
        [ "<tt>make_map</tt>", "localizationanalysis.html#autotoc_md643", null ],
        [ "<tt>parameter_sweep</tt>", "localizationanalysis.html#autotoc_md644", null ],
        [ "<tt>plot_all_results</tt>", "localizationanalysis.html#autotoc_md645", null ],
        [ "<tt>plot_results</tt>", "localizationanalysis.html#autotoc_md646", null ],
        [ "<tt>run_graph_bag_and_plot_results</tt>", "localizationanalysis.html#autotoc_md647", null ]
      ] ]
    ] ],
    [ "Localization Rviz Plugins", "localizationrvizplugins.html", [
      [ "Package Overview", "localizationrvizplugins.html#autotoc_md648", [
        [ "Plugins", "localizationrvizplugins.html#autotoc_md649", null ],
        [ "Localization Graph Display", "localizationrvizplugins.html#autotoc_md650", null ],
        [ "Localization Graph Panel", "localizationrvizplugins.html#autotoc_md651", null ],
        [ "Imu Augmentor Display", "localizationrvizplugins.html#autotoc_md652", null ],
        [ "Pose Display", "localizationrvizplugins.html#autotoc_md653", null ]
      ] ]
    ] ],
    [ "DDS Profile and Types", "dds_profile.html", null ],
    [ "Interactive Marker Teleop", "interactive_marker_teleop.html", null ],
    [ "Performance Tester", "performance_tester.html", null ]
];