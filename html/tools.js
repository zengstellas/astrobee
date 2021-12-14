var tools =
[
    [ "Calibration", "calibration.html", [
      [ "Package Overview", "calibration.html#autotoc_md509", null ],
      [ "Camera Target Based Intrinsics Calibration", "calibration.html#autotoc_md510", [
        [ "The program 'roslaunch/rosrun' is currently not installed", "sim-issues.html#autotoc_md489", null ],
        [ "[Sim.launch] is neither a launch file in package [astrobee] ...", "sim-issues.html#autotoc_md490", null ],
        [ "Rospack Error Finding Package", "sim-issues.html#autotoc_md491", null ],
        [ "Issues Starting up the Simulator", "sim-issues.html#autotoc_md492", null ],
        [ "Robot Body Does Not Show up in RVIZ", "sim-issues.html#autotoc_md493", null ],
        [ "No Image message in RVIZ", "sim-issues.html#autotoc_md494", null ],
        [ "Heartbeat Fault Detected", "sim-issues.html#autotoc_md495", [
          [ "DDS ROS Bridge", "sim-issues.html#autotoc_md496", null ],
          [ "Multiple Heartbeat Failures", "sim-issues.html#autotoc_md497", null ]
        ] ],
        [ "Command Fails due to Robot State", "sim-issues.html#autotoc_md498", null ],
        [ "Tolerance Violated Errors", "sim-issues.html#autotoc_md499", null ],
        [ "Keep in Zone Violation", "sim-issues.html#autotoc_md500", null ],
        [ "Unable to Plan a Segment", "sim-issues.html#autotoc_md501", null ],
        [ "Couldn't Configure the Mobility Node", "sim-issues.html#autotoc_md502", null ],
        [ "Could Not Query the Pose of Robot", "sim-issues.html#autotoc_md503", null ],
        [ "Dock Action Server Not Connected", "sim-issues.html#autotoc_md504", null ],
        [ "GDS Node - Process has Died", "sim-issues.html#autotoc_md505", null ],
        [ "The Robot is Spinning, Flying Higher Than the World, or Jumping Around Erratically", "sim-issues.html#autotoc_md506", [
          [ "Teleop Tool Reports No Publisher for Acks Topic", "sim-issues.html#autotoc_md507", null ],
          [ "Bumble not in repository", "sim-issues.html#autotoc_md508", null ]
        ] ],
        [ "Example Usage", "calibration.html#autotoc_md511", [
          [ "Generate target detections from bagfiles", "calibration.html#autotoc_md512", null ],
          [ "View target detection coverage in image space", "calibration.html#autotoc_md513", null ],
          [ "Calibrate", "calibration.html#autotoc_md514", [
            [ "Calibration Parameters", "calibration.html#autotoc_md515", null ],
            [ "Run Calibration", "calibration.html#autotoc_md516", null ],
            [ "Calibration Output", "calibration.html#autotoc_md517", null ],
            [ "Judging Calibration Results", "calibration.html#autotoc_md518", null ]
          ] ]
        ] ]
      ] ],
      [ "Tools", "calibration.html#autotoc_md522", [
        [ "create_undistorted_images", "calibration.html#autotoc_md523", null ],
        [ "run_camera_target_based_intrinsics_calibrator", "calibration.html#autotoc_md524", null ]
      ] ],
      [ "Scripts", "calibration.html#autotoc_md525", [
        [ "calibrate_intrinsics_and_save_results.py", "calibration.html#autotoc_md526", null ],
        [ "copy_calibration_params_to_config.py", "calibration.html#autotoc_md527", null ],
        [ "get_bags_with_topic.py", "calibration.html#autotoc_md528", null ],
        [ "make_error_histograms.py", "calibration.html#autotoc_md529", null ],
        [ "save_images_with_target_detections.py", "calibration.html#autotoc_md530", null ],
        [ "view_all_detections.py", "calibration.html#autotoc_md531", null ]
      ] ]
    ] ],
    [ "EKF Bag", "ekfbag.html", [
      [ "ekf_graph", "ekfbag.html#autotoc_md532", null ],
      [ "rosbag_to_csv", "ekfbag.html#autotoc_md533", null ],
      [ "sparse_map_eval", "ekfbag.html#autotoc_md534", null ],
      [ "ekf_diff", "ekfbag.html#autotoc_md535", null ],
      [ "streamlit webserver", "ekfbag.html#autotoc_md536", null ],
      [ "parameter_sweep.py", "ekfbag.html#autotoc_md537", null ],
      [ "create_plots.py", "ekfbag.html#autotoc_md538", null ],
      [ "bag_sweep.py", "ekfbag.html#autotoc_md539", null ],
      [ "bag_and_parameter_sweep.py", "ekfbag.html#autotoc_md540", null ],
      [ "create_average_plots.py", "ekfbag.html#autotoc_md541", null ]
    ] ],
    [ "EKF Video", "ekfvideo.html", null ],
    [ "GNC Visualizer", "gncvisualizer.html", "gncvisualizer" ],
    [ "Graph Bag", "graphbag.html", [
      [ "Package Overview", "graphbag.html#autotoc_md559", null ],
      [ "Tools", "graphbag.html#autotoc_md560", [
        [ "ROS Mode", "gncvisualizer.html#autotoc_md542", null ],
        [ "DDS Mode", "gncvisualizer.html#autotoc_md543", [
          [ "On-orbit activities", "gncvisualizer.html#autotoc_md544", null ]
        ] ],
        [ "Dependencies", "gncvisualizer.html#autotoc_md545", [
          [ "If used along with the Astrobee Robot Software", "gncvisualizer.html#autotoc_md546", null ],
          [ "If using as a standalone tool", "gncvisualizer.html#autotoc_md547", null ]
        ] ],
        [ "Installing dependencies", "gncvisualizer.html#autotoc_md548", [
          [ "Installing Python", "gncvisualizer.html#autotoc_md549", null ],
          [ "Installing PIP", "gncvisualizer.html#autotoc_md550", null ],
          [ "Installing the RTI connector (DDS Only)", "gncvisualizer.html#autotoc_md551", null ],
          [ "Installing QT in standalone mode", "gncvisualizer.html#autotoc_md552", null ]
        ] ],
        [ "Platform support", "gncvisualizer.html#autotoc_md553", null ],
        [ "GraphBag", "graphbag.html#autotoc_md561", null ],
        [ "BagImuFilterer", "graphbag.html#autotoc_md562", null ]
      ] ],
      [ "Scripts", "graphbag.html#autotoc_md563", [
        [ "bag_sweep", "graphbag.html#autotoc_md564", null ],
        [ "check_bags_for_gaps", "graphbag.html#autotoc_md565", null ],
        [ "imu_analyzer_main", "graphbag.html#autotoc_md566", null ],
        [ "merge_bags", "graphbag.html#autotoc_md567", null ],
        [ "run_graph_bag_and_plot_results", "graphbag.html#autotoc_md568", null ],
        [ "make_groundtruth.py", "graphbag.html#autotoc_md569", null ],
        [ "make_groundtruth_map.py", "graphbag.html#autotoc_md570", null ],
        [ "groundtruth_sweep.py", "graphbag.html#autotoc_md571", null ]
      ] ]
    ] ],
    [ "Imu Bias Tester", "imubiastester.html", [
      [ "Inputs", "imubiastester.html#autotoc_md573", null ],
      [ "Outputs", "imubiastester.html#autotoc_md574", null ]
    ] ],
    [ "Localization Rviz Plugins", "localizationrvizplugins.html", [
      [ "Package Overview", "localizationrvizplugins.html#autotoc_md575", [
        [ "ImuBiasTester", "imubiastester.html#autotoc_md572", null ],
        [ "Plugins", "localizationrvizplugins.html#autotoc_md576", null ],
        [ "Localization Graph Display", "localizationrvizplugins.html#autotoc_md577", null ],
        [ "Localization Graph Panel", "localizationrvizplugins.html#autotoc_md578", null ],
        [ "Imu Augmentor Display", "localizationrvizplugins.html#autotoc_md579", null ],
        [ "Pose Display", "localizationrvizplugins.html#autotoc_md580", null ]
      ] ]
    ] ],
    [ "DDS Profile and Types", "dds_profile.html", null ]
];