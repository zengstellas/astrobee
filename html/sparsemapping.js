var sparsemapping =
[
    [ "Creation of sparse maps for robot localization", "sparsemapping.html#autotoc_md363", [
      [ "What is a map", "sparsemapping.html#autotoc_md364", null ],
      [ "Map files", "sparsemapping.html#autotoc_md365", null ],
      [ "ROS node", "sparsemapping.html#autotoc_md366", [
        [ "Residuals", "optimizationcommon.html#autotoc_md315", null ],
        [ "SE3 Local Parameterization", "optimizationcommon.html#autotoc_md316", null ],
        [ "Utilities", "optimizationcommon.html#autotoc_md317", null ],
        [ "PointToPlaneICP", "pointcloudcommon.html#autotoc_md319", null ],
        [ "PointCloudWithKnownCorrespondencesAligner", "pointcloudcommon.html#autotoc_md320", null ],
        [ "Utilities", "pointcloudcommon.html#autotoc_md321", null ],
        [ "Inputs", "sparsemapping.html#autotoc_md367", null ],
        [ "Outputs", "sparsemapping.html#autotoc_md368", null ]
      ] ],
      [ "The environment", "sparsemapping.html#autotoc_md369", null ],
      [ "Tools and procedures", "sparsemapping.html#autotoc_md370", [
        [ "Record a bag", "sparsemapping.html#autotoc_md371", null ],
        [ "Filter the bag", "sparsemapping.html#autotoc_md372", null ],
        [ "Copy the bag from the robot", "sparsemapping.html#autotoc_md373", null ],
        [ "Merging bags", "sparsemapping.html#autotoc_md374", null ],
        [ "Extracting images", "sparsemapping.html#autotoc_md375", null ],
        [ "Building a map", "sparsemapping.html#autotoc_md376", null ],
        [ "Visualization", "sparsemapping.html#autotoc_md377", null ],
        [ "Localize a single frame", "sparsemapping.html#autotoc_md378", null ],
        [ "Testing localization using two maps", "sparsemapping.html#autotoc_md379", null ],
        [ "Testing localization using a bag", "sparsemapping.html#autotoc_md380", null ],
        [ "Extract sub-maps", "sparsemapping.html#autotoc_md381", null ],
        [ "Merge maps", "sparsemapping.html#autotoc_md382", null ],
        [ "How to build a map efficiently", "sparsemapping.html#autotoc_md383", null ],
        [ "Map strategy for the space station", "sparsemapping.html#autotoc_md384", null ],
        [ "Growing a map when more images are acquired", "sparsemapping.html#autotoc_md385", null ],
        [ "Reducing the number of images in a map", "sparsemapping.html#autotoc_md386", null ]
      ] ]
    ] ],
    [ "Map building", "map_building.html", [
      [ "Detailed explanation", "map_building.html#autotoc_md323", [
        [ "Summary", "map_building.html#autotoc_md322", null ],
        [ "Setup the environment", "map_building.html#autotoc_md324", null ],
        [ "Reduce the number of images", "map_building.html#autotoc_md325", null ],
        [ "Building a map", "map_building.html#autotoc_md326", [
          [ "Map building pipeline", "map_building.html#autotoc_md327", [
            [ "Detect interest points", "map_building.html#autotoc_md328", null ],
            [ "Match images", "map_building.html#autotoc_md329", null ],
            [ "Build tracks", "map_building.html#autotoc_md330", null ],
            [ "Incremental bundle adjustment", "map_building.html#autotoc_md331", null ],
            [ "Bundle adjustment", "map_building.html#autotoc_md332", null ],
            [ "Map rebuilding", "map_building.html#autotoc_md333", null ],
            [ "Vocabulary database", "map_building.html#autotoc_md334", null ]
          ] ],
          [ "Building a SURF map only", "map_building.html#autotoc_md335", null ],
          [ "Additional options", "map_building.html#autotoc_md336", null ]
        ] ],
        [ "Map registration", "map_building.html#autotoc_md337", [
          [ "Registration in the granite lab", "map_building.html#autotoc_md338", null ],
          [ "Registration on the ISS", "map_building.html#autotoc_md339", null ],
          [ "Registration in the MGTF", "map_building.html#autotoc_md340", null ]
        ] ],
        [ "Map verification", "map_building.html#autotoc_md341", null ],
        [ "Sparse map performance and quality evaluation on the robot", "map_building.html#autotoc_md342", [
          [ "Stage the new map", "map_building.html#autotoc_md343", [
            [ "Copy the new map on the robot MLP (preferably in /data):", "map_building.html#autotoc_md344", null ],
            [ "On the MLP, move the current map aside:", "map_building.html#autotoc_md345", null ]
          ] ],
          [ "Stage the bag with images:", "map_building.html#autotoc_md347", null ],
          [ "Stage the feature counter utility (should be added to the install at one point):", "map_building.html#autotoc_md348", null ],
          [ "Launch the localization node on LLP", "map_building.html#autotoc_md349", null ],
          [ "Enable localization and the mapped landmark production (on MLP)", "map_building.html#autotoc_md350", null ],
          [ "Play the bags (on MLP)", "map_building.html#autotoc_md351", null ],
          [ "Examine the performance and features on MLP", "map_building.html#autotoc_md352", [
            [ "Look at the load with htop", "map_building.html#autotoc_md353", null ],
            [ "Watch the frequency of feature production", "map_building.html#autotoc_md354", null ],
            [ "Watch the number of features being produced:", "map_building.html#autotoc_md355", null ]
          ] ]
        ] ],
        [ "Verify localization against a sparse map on a local machine", "map_building.html#autotoc_md356", null ],
        [ "Evaluating the map without running the localization node", "map_building.html#autotoc_md357", null ]
      ] ]
    ] ],
    [ "Total Station", "total_station.html", [
      [ "Doing a Survey with the Total Station", "total_station.html#autotoc_md396", null ]
    ] ],
    [ "Granite Lab Registration", "granite_lab_registration.html", [
      [ "Locations of the control points in the granite lab used for registration", "granite_lab_registration.html#autotoc_md358", [
        [ "Point 1", "granite_lab_registration.html#autotoc_md359", null ],
        [ "Point 2", "granite_lab_registration.html#autotoc_md360", null ],
        [ "Point 3", "granite_lab_registration.html#autotoc_md361", null ],
        [ "Point 4", "granite_lab_registration.html#autotoc_md362", null ]
      ] ]
    ] ],
    [ "Faro", "faro.html", null ],
    [ "Building a map with Theia", "theia_map.html", [
      [ "Install Theia's prerequisites", "theia_map.html#autotoc_md387", null ],
      [ "Fetch and build Theia", "theia_map.html#autotoc_md388", null ],
      [ "Hide the conda environment", "theia_map.html#autotoc_md389", null ],
      [ "Set up the environment for Theia and Astrobee", "theia_map.html#autotoc_md390", null ],
      [ "Prepare the data", "theia_map.html#autotoc_md391", null ],
      [ "Run the Astrobee wrapper around the Theia tools", "theia_map.html#autotoc_md392", null ],
      [ "Command line options", "theia_map.html#autotoc_md393", null ],
      [ "Next steps", "theia_map.html#autotoc_md394", null ],
      [ "Auxiliary import_map tool", "theia_map.html#autotoc_md395", null ]
    ] ]
];