var tools =
[
    [ "Calibration", "calibration.html", [
      [ "Package Overview", "calibration.html#autotoc_md534", null ],
      [ "Camera Target Based Intrinsics Calibration", "calibration.html#autotoc_md535", [
        [ "The program 'roslaunch/rosrun' is currently not installed", "sim-issues.html#autotoc_md514", null ],
        [ "[Sim.launch] is neither a launch file in package [astrobee] ...", "sim-issues.html#autotoc_md515", null ],
        [ "Rospack Error Finding Package", "sim-issues.html#autotoc_md516", null ],
        [ "Issues Starting up the Simulator", "sim-issues.html#autotoc_md517", null ],
        [ "Robot Body Does Not Show up in RVIZ", "sim-issues.html#autotoc_md518", null ],
        [ "No Image message in RVIZ", "sim-issues.html#autotoc_md519", null ],
        [ "Heartbeat Fault Detected", "sim-issues.html#autotoc_md520", [
          [ "DDS ROS Bridge", "sim-issues.html#autotoc_md521", null ],
          [ "Multiple Heartbeat Failures", "sim-issues.html#autotoc_md522", null ]
        ] ],
        [ "Command Fails due to Robot State", "sim-issues.html#autotoc_md523", null ],
        [ "Tolerance Violated Errors", "sim-issues.html#autotoc_md524", null ],
        [ "Keep in Zone Violation", "sim-issues.html#autotoc_md525", null ],
        [ "Unable to Plan a Segment", "sim-issues.html#autotoc_md526", null ],
        [ "Couldn't Configure the Mobility Node", "sim-issues.html#autotoc_md527", null ],
        [ "Could Not Query the Pose of Robot", "sim-issues.html#autotoc_md528", null ],
        [ "Dock Action Server Not Connected", "sim-issues.html#autotoc_md529", null ],
        [ "GDS Node - Process has Died", "sim-issues.html#autotoc_md530", null ],
        [ "The Robot is Spinning, Flying Higher Than the World, or Jumping Around Erratically", "sim-issues.html#autotoc_md531", [
          [ "Teleop Tool Reports No Publisher for Acks Topic", "sim-issues.html#autotoc_md532", null ],
          [ "Bumble not in repository", "sim-issues.html#autotoc_md533", null ]
        ] ],
        [ "Example Usage", "calibration.html#autotoc_md536", [
          [ "Generate target detections from bagfiles", "calibration.html#autotoc_md537", null ],
          [ "View target detection coverage in image space", "calibration.html#autotoc_md538", null ],
          [ "Calibrate", "calibration.html#autotoc_md539", [
            [ "Calibration Parameters", "calibration.html#autotoc_md540", null ],
            [ "Run Calibration", "calibration.html#autotoc_md541", null ],
            [ "Calibration Output", "calibration.html#autotoc_md542", null ],
            [ "Judging Calibration Results", "calibration.html#autotoc_md543", null ]
          ] ]
        ] ]
      ] ],
      [ "Tools", "calibration.html#autotoc_md547", [
        [ "create_undistorted_images", "calibration.html#autotoc_md548", null ],
        [ "run_camera_target_based_intrinsics_calibrator", "calibration.html#autotoc_md549", null ]
      ] ],
      [ "Scripts", "calibration.html#autotoc_md550", [
        [ "calibrate_intrinsics_and_save_results.py", "calibration.html#autotoc_md551", null ],
        [ "copy_calibration_params_to_config.py", "calibration.html#autotoc_md552", null ],
        [ "get_bags_with_topic.py", "calibration.html#autotoc_md553", null ],
        [ "make_error_histograms.py", "calibration.html#autotoc_md554", null ],
        [ "save_images_with_target_detections.py", "calibration.html#autotoc_md555", null ],
        [ "view_all_detections.py", "calibration.html#autotoc_md556", null ]
      ] ]
    ] ],
    [ "EKF Bag", "ekfbag.html", [
      [ "ekf_graph", "ekfbag.html#autotoc_md557", null ],
      [ "rosbag_to_csv", "ekfbag.html#autotoc_md558", null ],
      [ "sparse_map_eval", "ekfbag.html#autotoc_md559", null ],
      [ "ekf_diff", "ekfbag.html#autotoc_md560", null ],
      [ "streamlit webserver", "ekfbag.html#autotoc_md561", null ],
      [ "parameter_sweep.py", "ekfbag.html#autotoc_md562", null ],
      [ "create_plots.py", "ekfbag.html#autotoc_md563", null ],
      [ "bag_sweep.py", "ekfbag.html#autotoc_md564", null ],
      [ "bag_and_parameter_sweep.py", "ekfbag.html#autotoc_md565", null ],
      [ "create_average_plots.py", "ekfbag.html#autotoc_md566", null ]
    ] ],
    [ "EKF Video", "ekfvideo.html", null ],
    [ "GNC Visualizer", "gncvisualizer.html", "gncvisualizer" ],
    [ "Graph Bag", "graphbag.html", [
      [ "Package Overview", "graphbag.html#autotoc_md584", null ],
      [ "Tools", "graphbag.html#autotoc_md585", [
        [ "ROS Mode", "gncvisualizer.html#autotoc_md567", null ],
        [ "DDS Mode", "gncvisualizer.html#autotoc_md568", [
          [ "On-orbit activities", "gncvisualizer.html#autotoc_md569", null ]
        ] ],
        [ "Dependencies", "gncvisualizer.html#autotoc_md570", [
          [ "If used along with the Astrobee Robot Software", "gncvisualizer.html#autotoc_md571", null ],
          [ "If using as a standalone tool", "gncvisualizer.html#autotoc_md572", null ]
        ] ],
        [ "Installing dependencies", "gncvisualizer.html#autotoc_md573", [
          [ "Installing Python", "gncvisualizer.html#autotoc_md574", null ],
          [ "Installing PIP", "gncvisualizer.html#autotoc_md575", null ],
          [ "Installing the RTI connector (DDS Only)", "gncvisualizer.html#autotoc_md576", null ],
          [ "Installing QT in standalone mode", "gncvisualizer.html#autotoc_md577", null ]
        ] ],
        [ "Platform support", "gncvisualizer.html#autotoc_md578", null ],
        [ "GraphBag", "graphbag.html#autotoc_md586", null ],
        [ "BagImuFilterer", "graphbag.html#autotoc_md587", null ]
      ] ],
      [ "Scripts", "graphbag.html#autotoc_md588", [
        [ "bag_sweep", "graphbag.html#autotoc_md589", null ],
        [ "check_bags_for_gaps", "graphbag.html#autotoc_md590", null ],
        [ "imu_analyzer_main", "graphbag.html#autotoc_md591", null ],
        [ "merge_bags", "graphbag.html#autotoc_md592", null ],
        [ "run_graph_bag_and_plot_results", "graphbag.html#autotoc_md593", null ],
        [ "make_groundtruth.py", "graphbag.html#autotoc_md594", null ],
        [ "make_groundtruth_map.py", "graphbag.html#autotoc_md595", null ],
        [ "groundtruth_sweep.py", "graphbag.html#autotoc_md596", null ]
      ] ]
    ] ],
    [ "Imu Bias Tester", "imubiastester.html", [
      [ "Inputs", "imubiastester.html#autotoc_md598", null ],
      [ "Outputs", "imubiastester.html#autotoc_md599", null ]
    ] ],
    [ "Localization Rviz Plugins", "localizationrvizplugins.html", [
      [ "Package Overview", "localizationrvizplugins.html#autotoc_md600", [
        [ "ImuBiasTester", "imubiastester.html#autotoc_md597", null ],
        [ "Plugins", "localizationrvizplugins.html#autotoc_md601", null ],
        [ "Localization Graph Display", "localizationrvizplugins.html#autotoc_md602", null ],
        [ "Localization Graph Panel", "localizationrvizplugins.html#autotoc_md603", null ],
        [ "Imu Augmentor Display", "localizationrvizplugins.html#autotoc_md604", null ],
        [ "Pose Display", "localizationrvizplugins.html#autotoc_md605", null ]
      ] ]
    ] ],
    [ "DDS Profile and Types", "dds_profile.html", null ],
    [ "Interactive Marker Teleop", "interactive_marker_teleop.html", null ]
];