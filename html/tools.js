var tools =
[
    [ "Bag Processing", "bag_processing.html", [
      [ "Package Overview", "bag_processing.html#autotoc_md567", null ],
      [ "Usage Instructions", "bag_processing.html#autotoc_md568", null ],
      [ "Scripts", "bag_processing.html#autotoc_md569", [
        [ "<tt>apply_histogram_equalization_to_images</tt>", "bag_processing.html#autotoc_md570", null ],
        [ "<tt>bmr_renumber_enum</tt>", "bag_processing.html#autotoc_md571", null ],
        [ "<tt>check_bag_for_gaps</tt>", "bag_processing.html#autotoc_md572", null ],
        [ "<tt>clock_skew</tt>", "bag_processing.html#autotoc_md573", null ],
        [ "<tt>convert_bayer</tt>", "bag_processing.html#autotoc_md574", null ],
        [ "<tt>convert_all_bayer_bags</tt>", "bag_processing.html#autotoc_md575", null ],
        [ "<tt>csv_join</tt>", "bag_processing.html#autotoc_md576", null ],
        [ "<tt>get_msg_stats</tt>", "bag_processing.html#autotoc_md577", null ],
        [ "<tt>merge_bags</tt>", "bag_processing.html#autotoc_md578", null ],
        [ "<tt>merge_all_bags</tt>", "bag_processing.html#autotoc_md579", null ],
        [ "<tt>rosbag_detect_bad_topics</tt>", "bag_processing.html#autotoc_md580", null ],
        [ "<tt>rosbag_fix_all</tt>", "bag_processing.html#autotoc_md581", null ],
        [ "<tt>rosbag_rewrite_types</tt>", "bag_processing.html#autotoc_md582", null ],
        [ "<tt>rosbag_topic_filter</tt>", "bag_processing.html#autotoc_md583", null ],
        [ "<tt>splice_bag</tt>", "bag_processing.html#autotoc_md584", null ],
        [ "<tt>trim_bag</tt>", "bag_processing.html#autotoc_md585", null ]
      ] ]
    ] ],
    [ "Calibration", "calibration.html", [
      [ "Package Overview", "calibration.html#autotoc_md586", null ],
      [ "Camera Target Based Intrinsics Calibration", "calibration.html#autotoc_md587", [
        [ "Example Usage", "calibration.html#autotoc_md588", [
          [ "Generate target detections from bagfiles", "calibration.html#autotoc_md589", null ],
          [ "View target detection coverage in image space", "calibration.html#autotoc_md590", null ],
          [ "Calibrate", "calibration.html#autotoc_md591", [
            [ "Calibration Parameters", "calibration.html#autotoc_md592", null ],
            [ "Run Calibration", "calibration.html#autotoc_md593", null ],
            [ "Calibration Output", "calibration.html#autotoc_md594", null ],
            [ "Judging Calibration Results", "calibration.html#autotoc_md595", null ]
          ] ]
        ] ]
      ] ],
      [ "Tools", "calibration.html#autotoc_md599", [
        [ "create_undistorted_images", "calibration.html#autotoc_md600", null ],
        [ "run_camera_target_based_intrinsics_calibrator", "calibration.html#autotoc_md601", null ]
      ] ],
      [ "Scripts", "calibration.html#autotoc_md602", [
        [ "calibrate_intrinsics_and_save_results.py", "calibration.html#autotoc_md603", null ],
        [ "copy_calibration_params_to_config.py", "calibration.html#autotoc_md604", null ],
        [ "get_bags_with_topic.py", "calibration.html#autotoc_md605", null ],
        [ "make_error_histograms.py", "calibration.html#autotoc_md606", null ],
        [ "save_images_with_target_detections.py", "calibration.html#autotoc_md607", null ],
        [ "view_all_detections.py", "calibration.html#autotoc_md608", null ]
      ] ]
    ] ],
    [ "GNC Visualizer", "gncvisualizer.html", "gncvisualizer" ],
    [ "IMU Bias Tester", "imubiastester.html", [
      [ "Usage", "imubiastester.html#autotoc_md627", null ],
      [ "Inputs", "imubiastester.html#autotoc_md628", null ],
      [ "Outputs", "imubiastester.html#autotoc_md629", null ]
    ] ],
    [ "Localization Analysis", "localizationanalysis.html", [
      [ "Package Overview", "localizationanalysis.html#autotoc_md630", [
        [ "ROS Mode", "gncvisualizer.html#autotoc_md609", null ],
        [ "DDS Mode", "gncvisualizer.html#autotoc_md610", [
          [ "On-orbit activities", "gncvisualizer.html#autotoc_md611", null ]
        ] ],
        [ "Dependencies", "gncvisualizer.html#autotoc_md612", [
          [ "If used along with the Astrobee Robot Software", "gncvisualizer.html#autotoc_md613", null ],
          [ "If using as a standalone tool", "gncvisualizer.html#autotoc_md614", null ]
        ] ],
        [ "Installing dependencies", "gncvisualizer.html#autotoc_md615", [
          [ "Installing Python", "gncvisualizer.html#autotoc_md616", null ],
          [ "Installing PIP", "gncvisualizer.html#autotoc_md617", null ],
          [ "Installing the RTI connector (DDS Only)", "gncvisualizer.html#autotoc_md618", null ],
          [ "Installing QT in standalone mode", "gncvisualizer.html#autotoc_md619", null ]
        ] ],
        [ "Platform support", "gncvisualizer.html#autotoc_md620", null ],
        [ "ImuBiasTester", "imubiastester.html#autotoc_md626", null ],
        [ "Usage Instructions", "localizationanalysis.html#autotoc_md631", null ]
      ] ],
      [ "Tools", "localizationanalysis.html#autotoc_md632", [
        [ "<tt>convert_depth_msg</tt>", "localizationanalysis.html#autotoc_md633", null ],
        [ "<tt>run_bag_imu_filterer</tt>", "localizationanalysis.html#autotoc_md634", null ],
        [ "<tt>run_depth_odometry_adder</tt>", "localizationanalysis.html#autotoc_md635", null ],
        [ "<tt>run_graph_bag</tt>", "localizationanalysis.html#autotoc_md636", null ],
        [ "<tt>run_imu_bias_tester_adder</tt>", "localizationanalysis.html#autotoc_md637", null ],
        [ "<tt>run_sparse_mapping_pose_adder</tt>", "localizationanalysis.html#autotoc_md638", null ]
      ] ],
      [ "Scripts", "localizationanalysis.html#autotoc_md639", [
        [ "<tt>bag_and_parameter_sweep</tt>", "localizationanalysis.html#autotoc_md640", null ],
        [ "<tt>bag_sweep</tt>", "localizationanalysis.html#autotoc_md641", null ],
        [ "<tt>depth_odometry_parameter_sweep</tt>", "localizationanalysis.html#autotoc_md642", null ],
        [ "<tt>get_average_opt_and_update_times</tt>", "localizationanalysis.html#autotoc_md643", null ],
        [ "<tt>groundtruth_sweep</tt>", "localizationanalysis.html#autotoc_md644", null ],
        [ "<tt>imu_analyzer</tt>", "localizationanalysis.html#autotoc_md645", null ],
        [ "<tt>make_groundtruth</tt>", "localizationanalysis.html#autotoc_md646", null ],
        [ "<tt>make_map</tt>", "localizationanalysis.html#autotoc_md647", null ],
        [ "<tt>parameter_sweep</tt>", "localizationanalysis.html#autotoc_md648", null ],
        [ "<tt>plot_all_results</tt>", "localizationanalysis.html#autotoc_md649", null ],
        [ "<tt>plot_results</tt>", "localizationanalysis.html#autotoc_md650", null ],
        [ "<tt>run_graph_bag_and_plot_results</tt>", "localizationanalysis.html#autotoc_md651", null ]
      ] ]
    ] ],
    [ "Localization Rviz Plugins", "localizationrvizplugins.html", [
      [ "Package Overview", "localizationrvizplugins.html#autotoc_md652", [
        [ "Plugins", "localizationrvizplugins.html#autotoc_md653", null ],
        [ "Localization Graph Display", "localizationrvizplugins.html#autotoc_md654", null ],
        [ "Localization Graph Panel", "localizationrvizplugins.html#autotoc_md655", null ],
        [ "Imu Augmentor Display", "localizationrvizplugins.html#autotoc_md656", null ],
        [ "Pose Display", "localizationrvizplugins.html#autotoc_md657", null ]
      ] ]
    ] ],
    [ "DDS Profile and Types", "dds_profile.html", null ],
    [ "Interactive Marker Teleop", "interactive_marker_teleop.html", null ],
    [ "Performance Tester", "performance_tester.html", null ]
];