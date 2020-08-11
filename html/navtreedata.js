/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "NASA Astrobee Robot Software", "index.html", [
    [ "Astrobee Robot Software - Flight Software repository", "index.html", [
      [ "About", "index.html#autotoc_md324", null ],
      [ "Usage instructions", "index.html#autotoc_md325", null ],
      [ "Contributors", "index.html#autotoc_md326", null ],
      [ "Documentation", "index.html#autotoc_md327", null ],
      [ "Guest Science", "index.html#autotoc_md331", null ],
      [ "License", "index.html#autotoc_md332", null ]
    ] ],
    [ "Conventions", "conventions.html", null ],
    [ "Generate releases and synching with Github", "md_doc_gitrelease.html", [
      [ "Create a release branch", "md_doc_gitrelease.html#autotoc_md2", null ],
      [ "Propagate a release/hotfix to Github", "md_doc_gitrelease.html#autotoc_md3", [
        [ "Quaternions", "conventions.html#autotoc_md0", null ],
        [ "Add remote (only if first time)", "md_doc_gitrelease.html#autotoc_md4", null ],
        [ "Sync the repos", "md_doc_gitrelease.html#autotoc_md5", null ]
      ] ]
    ] ],
    [ "Debians management for deployment on the physical robots", "managing_debians.html", null ],
    [ "Setting up a new robot", "new_robot.html", null ],
    [ "Documentation", "doc.html", [
      [ "Tools used for FSW documentation", "doc.html#autotoc_md24", [
        [ "Build Astrobee Debian", "managing_debians.html#autotoc_md6", [
          [ "Astrobee Software Concepts", "index.html#autotoc_md328", null ],
          [ "Localization method", "index.html#autotoc_md329", null ],
          [ "Astrobee platform", "index.html#autotoc_md330", null ],
          [ "Update the release version", "managing_debians.html#autotoc_md7", null ],
          [ "Push the changelog", "managing_debians.html#autotoc_md8", null ],
          [ "Create an official release", "managing_debians.html#autotoc_md9", null ],
          [ "Create the Debian package", "managing_debians.html#autotoc_md10", null ]
        ] ],
        [ "Build Avionics Debian", "managing_debians.html#autotoc_md11", [
          [ "Update changelog", "managing_debians.html#autotoc_md12", null ],
          [ "Push the new changelog", "managing_debians.html#autotoc_md13", null ],
          [ "Create the Debian package", "managing_debians.html#autotoc_md14", null ]
        ] ],
        [ "Common steps: staging and snapshoting", "managing_debians.html#autotoc_md15", [
          [ "Stage the Debian on volar", "managing_debians.html#autotoc_md16", null ],
          [ "Update the Debian mirror on volar", "managing_debians.html#autotoc_md17", null ],
          [ "Sign the Debian", "managing_debians.html#autotoc_md18", null ],
          [ "Push Debian to the server", "managing_debians.html#autotoc_md19", null ]
        ] ],
        [ "Build FSW dependencies Debians packages", "managing_debians.html#autotoc_md20", null ],
        [ "Create a new \"custom\" image for the robot", "new_robot.html#autotoc_md21", null ],
        [ "Calibrate the sensors", "new_robot.html#autotoc_md22", null ],
        [ "Create a new robot config", "new_robot.html#autotoc_md23", null ],
        [ "Code documentation", "doc.html#autotoc_md25", null ],
        [ "UML diagraming", "doc.html#autotoc_md26", null ],
        [ "ROS Messages, Services and Actions", "doc.html#autotoc_md27", null ]
      ] ],
      [ "ROS Unit Tests", "doc.html#autotoc_md28", null ]
    ] ],
    [ "Subsystems", "subsystems.html", "subsystems" ],
    [ "Teleoperation Tool Instructions", "md_management_executive_teleop_tool.html", [
      [ "Basic Usage", "md_management_executive_teleop_tool.html#autotoc_md188", [
        [ "Dock", "md_management_executive_teleop_tool.html#autotoc_md189", null ],
        [ "Move", "md_management_executive_teleop_tool.html#autotoc_md190", null ],
        [ "Stop", "md_management_executive_teleop_tool.html#autotoc_md191", null ],
        [ "Undock", "md_management_executive_teleop_tool.html#autotoc_md192", null ],
        [ "Get Position", "md_management_executive_teleop_tool.html#autotoc_md193", null ],
        [ "Get State", "md_management_executive_teleop_tool.html#autotoc_md194", null ],
        [ "Reset Ekf", "md_management_executive_teleop_tool.html#autotoc_md195", null ]
      ] ],
      [ "Advanced Usage", "md_management_executive_teleop_tool.html#autotoc_md196", [
        [ "Namespace", "md_management_executive_teleop_tool.html#autotoc_md197", null ],
        [ "Reset Bias", "md_management_executive_teleop_tool.html#autotoc_md198", null ],
        [ "Reset Bias", "md_management_executive_teleop_tool.html#autotoc_md199", null ],
        [ "Get Faults", "md_management_executive_teleop_tool.html#autotoc_md200", null ],
        [ "Set Planner", "md_management_executive_teleop_tool.html#autotoc_md201", null ],
        [ "Get Planner", "md_management_executive_teleop_tool.html#autotoc_md202", null ],
        [ "Set Face Forward", "md_management_executive_teleop_tool.html#autotoc_md203", null ],
        [ "Get Face Forward", "md_management_executive_teleop_tool.html#autotoc_md204", null ],
        [ "Set Operating Limits", "md_management_executive_teleop_tool.html#autotoc_md205", null ],
        [ "Get Operating Limits", "md_management_executive_teleop_tool.html#autotoc_md206", null ]
      ] ]
    ] ],
    [ "Astrobee", "astrobee.html", [
      [ "Folder description", "astrobee.html#autotoc_md228", null ],
      [ "Environment variables", "astrobee.html#autotoc_md229", null ],
      [ "Context determination", "astrobee.html#autotoc_md230", null ],
      [ "Default contexts", "astrobee.html#autotoc_md231", null ],
      [ "Remotely launching nodes", "astrobee.html#autotoc_md232", null ],
      [ "Launching only specific nodes", "astrobee.html#autotoc_md233", null ],
      [ "Launch file examples", "astrobee.html#autotoc_md234", null ],
      [ "Roslaunch, [machine] tags, env scripts and environment variables", "astrobee.html#autotoc_md235", [
        [ "Takeaway points:", "astrobee.html#autotoc_md236", null ]
      ] ]
    ] ],
    [ "Description", "urdf.html", null ],
    [ "Astrobee Robot Software - Multimedia", "md_description_media_readme.html", [
      [ "About", "md_description_media_readme.html#autotoc_md238", null ],
      [ "Change Log", "md_description_media_readme.html#autotoc_md239", null ],
      [ "Usage Guidelines", "md_description_media_readme.html#autotoc_md240", null ],
      [ "Instructions", "md_description_media_readme.html#autotoc_md241", null ]
    ] ],
    [ "Simulation", "sim.html", "sim" ],
    [ "Tools", "tools.html", "tools" ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"ADT7410_8cc.html",
"VisualeyezCalibration_8msg.html",
"camera__params_8h.html",
"classalgebra__3d_1_1Plane3d.html#a143c080329bb0ad1d1c9f18087809657",
"classconfig__reader_1_1ConfigReader.html#aa56c64a5010ff8b1d57f75018f55b0d8",
"classdock_1_1DockNodelet.html#ac83781453a14bdc4c8974767ac6ec817",
"classeps__driver_1_1EPS.html#a22b5a1f8ea85a84e1a30f7d684c89758",
"classepson__imu_1_1G362P.html#a2c66169e435484994d1206aaa3f88e2e",
"classexecutive_1_1ExecutiveActionClient.html#acf6fc9efcd7e4450ee46e4e7bffa4c71",
"classff_1_1RosTelemetryRapidTelemetry.html#ac4c9e16076165f020d786d07d402cf1e",
"classff__util_1_1State.html",
"classgazebo_1_1GazeboSensorPluginHandrailDetect.html#a748982924c40f572747e02d1957589a7",
"classimage__sampler_1_1ImageSampler.html#aaa03ff23bccbbc549b9180bed606354b",
"classjsonloader_1_1Segment.html#ad6c56f0ee51b0402c7c82fc4f48e5286",
"classoctoclass_1_1IndexedOcTreeKey.html#a6040ffdb6a3e65556157fcbc4c1169e2",
"classperching__arm_1_1PerchingArm.html#ad444d1b512cb35c8bf3f629d8ae797b5",
"classsampled__traj_1_1SampledTrajectory3D.html#ae76cea86abdd0cc3f297f17da32a2401",
"classsmart__dock_1_1SmartDock.html#ac99d4ccbe161a168e22dfa33d67e7568a0eb8eb1039b5d40281eb939047887ec0",
"classtraj__opt_1_1CostFunction.html#ab819fcbac8dbb54ce912255fed528b5c",
"classtraj__opt_1_1TrajectoryVisual.html#a62eeaa6afccf714326a1f3e2e758cc18",
"dir_073488e28fa2e3da5ff0727c9850e93a.html",
"dir_aa46fafe786843ed14f44dc1d6ecc336.html",
"eps__driver__tool_8cc.html#a6ca4468ebc8b17729caed78da6aee8cd",
"ff__flight_8cc.html#a002b2f4894492820fe708b1b7e7c5e70",
"ff__names_8h.html#ab7252ff6d6d77704c9ad3b8490c4df8e",
"gazebo__model__plugin__mlp__cpu__monitor_8cc.html",
"hardware_2vive_2include_2vive_2vive_8h.html#a6ffa408903b9e46c212e12a49a08df51",
"light__flow_8h.html#ac4b841d156895d99162ac92f4febe1e3",
"msg__conversions_8cc.html#a20799404350de0e16f49f44fcb1cfd8d",
"namespacemembers_w.html",
"perching__arm_8cc.html",
"pmc__autotrim__node_8cc.html#a10509ea78365a90434847403dd41b396",
"serial_8h.html#ad4d796b98c583d49e83adabd74a63bf6",
"sparse__map__bag_8cc.html#a3c04138a5bfe5d72780bb7e82a18e627",
"structPmcActuatorData.html#a8608558724e192d451dbc35b61affb86",
"structperching__arm_1_1PerchingArm_1_1____attribute____.html#a6b80638add370cc2fe5b6f421af426a6",
"structvive__localization_1_1Lighthouse.html#a79ccc559f946639f4ff9cf86cce710bb",
"test__build__db_8cxx.html",
"traj__opt__basic_2src_2polynomial__basis_8cpp.html#a8740d232ad2b02b5739ed12d7d0b80b3",
"vive__dev__tracker_8h.html#ab1c163f794d015d26729b5c96f0b2dcb"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';