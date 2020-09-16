(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{1078:function(e,t,o){"use strict";o.r(t);var i=o(29),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"integrate-sdk-in-one-minute"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integrate-sdk-in-one-minute"}},[e._v("#")]),e._v(" Integrate SDK in One Minute")]),e._v(" "),o("p",[e._v("This chapter will introduce how to integrate the SDK into a project you\ncreated.")]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Support iOS 8.0 or above iOS "),o("strong",[e._v("real device")])])]),e._v(" "),o("li",[o("p",[e._v("Effective Juphoon Developer Account ("),o("a",{attrs:{href:"http://developer.juphoon.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("free sign\nup"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("li",[o("p",[e._v("Efficient Juphoon "),o("a",{attrs:{href:"/cn/document/V2.1/create-application.php"}},[e._v("AppKey")])])])]),e._v(" "),o("h2",{attrs:{id:"create-an-ios-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-an-ios-project"}},[e._v("#")]),e._v(" Create an iOS project")]),e._v(" "),o("p",[e._v("Follow the steps below to create an iOS project. If you have an iOS\nproject, you can directly check the step of integrating JC SDK.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Open Xcode and click "),o("strong",[e._v("Create a new Xcode project")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the project type as "),o("strong",[e._v("Single View App")]),e._v(" and click "),o("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Enter the project information, such as project name, development\nteam information, organization name and language, and click\n"),o("strong",[e._v("Next")]),e._v(".")])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("If you have not added the information of development team, click "),o("strong",[e._v("Xcode\n\\Preferences… \\Accounts")]),e._v(", click the plus sign in the lower left\ncorner and follow the on-screen prompts to log in your Apple ID. After\nthat, you can choose your account as the development team.")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Select the project storage path and click "),o("strong",[e._v("Create")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Connect your iOS device to the computer.")])]),e._v(" "),o("li",[o("p",[e._v("Go to the "),o("strong",[e._v("TARGETS \\Project Name \\Signing & Capabilities")]),e._v(" menu\nand check "),o("strong",[e._v("Automatically manage signing")]),e._v(".")])])]),e._v(" "),o("h2",{attrs:{id:"integrate-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integrate-sdk"}},[e._v("#")]),e._v(" Integrate SDK")]),e._v(" "),o("p",[e._v("You can integrate JC SDK in any of the following three ways:")]),e._v(" "),o("h3",{attrs:{id:"method-1-automatically-import-static-libraries-through-cocoapods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#method-1-automatically-import-static-libraries-through-cocoapods"}},[e._v("#")]),e._v(" Method 1: Automatically import static libraries through CocoaPods")]),e._v(" "),o("p",[e._v("Version 2.0 and above support you to import the SDK through CocoaPods.\nBefore importing, CocoaPods environment needs to be installed, please\nrefer to "),o("a",{attrs:{href:"https://cocoapods.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("CocoaPods official"),o("OutboundLink")],1),e._v(" website for\ninstallation method.")]),e._v(" "),o("p",[e._v("After the CocoaPods environment is installed, take the following steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open Terminal, cd to the project root directory.")])]),e._v(" "),o("li",[o("p",[e._v("Execute pod init, a Podfile text file will be generated under the\nproject folder.")])]),e._v(" "),o("li",[o("p",[e._v("Run open -e Podfile.")])]),e._v(" "),o("li",[o("p",[e._v("Add import configuration "),o("code",[e._v("pod 'JuphoonCloudSDK_iOS', '2.1'")]),e._v(" .")])]),e._v(" "),o("li",[o("p",[e._v("Execute "),o("code",[e._v("pod install")]),e._v(" .After successful installation, Pod\ninstallation complete! will be displayed in Terminal. At this time,\nan xcworkspace file will be generated under the project folder.")])]),e._v(" "),o("li",[o("p",[e._v("Double-click to open the "),o("code",[e._v("xcworkspace")]),e._v(" file.")])])]),e._v(" "),o("p",[e._v("The revised content is as follows. Pay attention to replace Your App\nwith your Target name:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("platform :ios, '9.0'\n#use_frameworks!\ntarget 'Your App' do\npod 'JuphoonCloudSDK_iOS', '2.1'\nend\n")])])]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[o("code",[e._v("Version 2.1")]),e._v(" is the latest version currently released, please refer to\nthe pod specification for the specific version.")]),e._v(" "),o("p",[e._v("If you need to update the local library version, execute the pod update\ncommand before executing pod install.")])]),e._v(" "),o("h3",{attrs:{id:"method-2-manually-import-static-library"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#method-2-manually-import-static-library"}},[e._v("#")]),e._v(" Method 2: Manually import static library")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Unpack and open the downloaded JC SDK static library. The sdk file\ndirectory consists of four folders including include, lib,\nJCSDKOC.framework and JCCloudWrapper.framework.")])]),e._v(" "),o("li",[o("p",[e._v("Copy the "),o("code",[e._v("sdk")]),e._v(" folder to the directory where your project is\nlocated.")])]),e._v(" "),o("li",[o("p",[e._v("Import SDK")]),e._v(" "),o("p",[e._v("Open Xcode, go to TARGETS \\Project Name \\Build Phases \\Link\nBinary with Libraries menu, click the ‘+’ symbol, and import\n"),o("code",[e._v("JCSDKOC.framework")]),e._v(" in the sdk folder and "),o("code",[e._v("libmtc.a")]),e._v(" and\n"),o("code",[e._v("libzmf.a")]),e._v(" files in the lib folder.")])]),e._v(" "),o("li",[o("p",[e._v("Import SDK dependency library")]),e._v(" "),o("p",[e._v("Continue to click the ‘+’ symbol to import the following system\ndependency libraries:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("AssetsLibrary.framework")])]),e._v(" "),o("li",[o("p",[e._v("AudioToolbox.framework")])]),e._v(" "),o("li",[o("p",[e._v("VideoToolBox.framework")])]),e._v(" "),o("li",[o("p",[e._v("AVFoundation.framework")])]),e._v(" "),o("li",[o("p",[e._v("CFNetwork.framework")])]),e._v(" "),o("li",[o("p",[e._v("CoreMedia.framework")])]),e._v(" "),o("li",[o("p",[e._v("CoreMotion.framework")])]),e._v(" "),o("li",[o("p",[e._v("CoreVideo.framework")])]),e._v(" "),o("li",[o("p",[e._v("GLKit.framework")])]),e._v(" "),o("li",[o("p",[e._v("ReplayKit.framework")])]),e._v(" "),o("li",[o("p",[e._v("Security.framework")])]),e._v(" "),o("li",[o("p",[e._v("SystemConfiguration.framework")])]),e._v(" "),o("li",[o("p",[e._v("libc++.tbd")])]),e._v(" "),o("li",[o("p",[e._v("libz.tbd")])]),e._v(" "),o("li",[o("p",[e._v("libresolv.tbd")])])])]),e._v(" "),o("li",[o("p",[e._v("Set path")]),e._v(" "),o("p",[e._v("Click ‘Build Settings’, find Search Paths, set Framework Search\nPaths, Header Search Paths (header file path) and Library Search\nPaths (library file path):")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Framework Search Paths:$(PROJECT_DIR)/../sdk")])]),e._v(" "),o("li",[o("p",[e._v("Header Search Paths:$(PROJECT_DIR)/../sdk/include")])]),e._v(" "),o("li",[o("p",[e._v("Library Search Paths:$(PROJECT_DIR)/../sdk/lib/ios")])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("After importing JCSDKOC.framework and two .a files in Step 1,\nXcode will automatically generate the path. If Xcode does not\nautomatically generate the path, the user should manually set the\npath according to the directory where JCSDKOC.framework, include,\nand lib files are located.")])])]),e._v(" "),o("li",[o("p",[e._v("Set Enable Bitcode to NO")]),e._v(" "),o("p",[e._v("Enter Target \\Build Settings \\Enable Bitcode in the project\nand set this item to NO.")])]),e._v(" "),o("li",[o("p",[e._v("Set the parameters of Other Linker Flags to -ObjC")]),e._v(" "),o("p",[e._v("Go to Target \\Build Settings \\Other Linker Flags in the\nproject and add -ObjC to this item.")])]),e._v(" "),o("li",[o("p",[e._v("Set Preprocessor Macros")]),e._v(" "),o("p",[e._v("Click ‘Build Settings’, find Preprocessor Macros, and enter\nZPLATFORM=ZPLATFORM_IOS on the right.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("The purpose of DEBUG Preprocessor Macros is to distinguish whether\nthe push environment is release or debug. If the environment is\nwrong, the push will fail.")])])]),e._v(" "),o("li",[o("p",[e._v("Set Documentation Comments to NO")]),e._v(" "),o("p",[e._v("Click ‘Build Settings’, find Documentation Comments and set to NO.")])]),e._v(" "),o("li",[o("p",[e._v("Set the background operation mode")]),e._v(" "),o("p",[e._v("Enter Target \\Signing & Capabilities \\Background Modes of the\nproject, check the following two items:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Audio, AirPlay, and Picture in Picture")])]),e._v(" "),o("li",[o("p",[e._v("Voice over IP")])])])])]),e._v(" "),o("h3",{attrs:{id:"method-3-manually-import-the-dynamic-library"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#method-3-manually-import-the-dynamic-library"}},[e._v("#")]),e._v(" Method 3: Manually import the dynamic library")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Unpack and open the downloaded JC SDK dynamic library. The sdk file\ndirectory includes the JCSDKOC.framework file.")])]),e._v(" "),o("li",[o("p",[e._v("Copy the "),o("code",[e._v("sdk")]),e._v(" folder to the directory where your project is\nlocated.")])]),e._v(" "),o("li",[o("p",[e._v("Import SDK")]),e._v(" "),o("p",[e._v("Open Xcode, go to TARGETS\\Project Name\\General, click the “+”\nsymbol in the “Embedded Binaries” column, and then import\nJCSDKOC.framework under the JCSDK folder.")])]),e._v(" "),o("li",[o("p",[e._v("Import SDK dependency library")]),e._v(" "),o("p",[e._v("Continue to click the ‘+’ symbol to import the following system\ndependency libraries:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("AssetsLibrary.framework")])]),e._v(" "),o("li",[o("p",[e._v("AudioToolbox.framework")])]),e._v(" "),o("li",[o("p",[e._v("VideoToolBox.framework")])]),e._v(" "),o("li",[o("p",[e._v("AVFoundation.framework")])]),e._v(" "),o("li",[o("p",[e._v("CFNetwork.framework")])]),e._v(" "),o("li",[o("p",[e._v("CoreMedia.framework")])]),e._v(" "),o("li",[o("p",[e._v("CoreMotion.framework")])]),e._v(" "),o("li",[o("p",[e._v("CoreVideo.framework")])]),e._v(" "),o("li",[o("p",[e._v("GLKit.framework")])]),e._v(" "),o("li",[o("p",[e._v("ReplayKit.framework")])]),e._v(" "),o("li",[o("p",[e._v("Security.framework")])]),e._v(" "),o("li",[o("p",[e._v("SystemConfiguration.framework")])]),e._v(" "),o("li",[o("p",[e._v("libc++.tbd")])]),e._v(" "),o("li",[o("p",[e._v("libz.tbd")])]),e._v(" "),o("li",[o("p",[e._v("libresolv.tbd")])])])]),e._v(" "),o("li",[o("p",[e._v("Set path")]),e._v(" "),o("p",[e._v("Click ‘Build Settings’, find Search Paths, set Framework Search\nPaths, Header Search Paths (header file path) and Library Search\nPaths (library file path):")]),e._v(" "),o("ul",[o("li",[e._v("Framework Search Paths:$(PROJECT_DIR)/../sdk")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("After importing JCSDKOC.framework and two .a files in step 1,\nXcode will automatically generate the path. If Xcode does not\nautomatically generate the path, the user should manually set the\npath according to the directory where the "),o("code",[e._v("JCSDKOC.framework")]),e._v(" file\nis located.")])])]),e._v(" "),o("li",[o("p",[e._v("Set Enable Bitcode to NO")]),e._v(" "),o("p",[e._v("Enter Target \\Build Settings \\Enable Bitcode in the project\nand set this item to NO.")])]),e._v(" "),o("li",[o("p",[e._v("Set the parameters of Other Linker Flags to -ObjC")]),e._v(" "),o("p",[e._v("Go to Target \\Build Settings \\Other Linker Flags in the\nproject and add -ObjC to this item.")])]),e._v(" "),o("li",[o("p",[e._v("Set Preprocessor Macros")]),e._v(" "),o("p",[e._v("Click ‘Build Settings’, find Preprocessor Macros, and enter\nZPLATFORM=ZPLATFORM_IOS on the right.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("The purpose of DEBUG Preprocessor Macros is to distinguish whether\nthe push environment is release or debug. If the environment is\nwrong, the push will fail.")])])]),e._v(" "),o("li",[o("p",[e._v("Set Documentation Comments to NO")]),e._v(" "),o("p",[e._v("Click ‘Build Settings’, find Documentation Comments and set to NO.")])]),e._v(" "),o("li",[o("p",[e._v("Set the background operation mode")]),e._v(" "),o("p",[e._v("Enter Target \\Signing & Capabilities \\Background Modes of the\nproject, check the following two items:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Audio, AirPlay, and Picture in Picture")])]),e._v(" "),o("li",[o("p",[e._v("Voice over IP")])])])])]),e._v(" "),o("h2",{attrs:{id:"add-project-permissions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-project-permissions"}},[e._v("#")]),e._v(" Add project permissions")]),e._v(" "),o("p",[e._v("Audio and video calls require camera and microphone permissions. Please\nadd the following key values in the info.plist of the project:")]),e._v(" "),o("table",{staticStyle:{width:"99%"}},[o("colgroup",[o("col",{staticStyle:{width:"33%"}}),e._v(" "),o("col",{staticStyle:{width:"33%"}}),e._v(" "),o("col",{staticStyle:{width:"33%"}})]),e._v(" "),o("thead",[o("tr",{staticClass:"header"},[o("th",[o("p",[e._v("Key")])]),e._v(" "),o("th",[o("p",[e._v("Type")])]),e._v(" "),o("th",[o("p",[e._v("Value")])])])]),e._v(" "),o("tbody",[o("tr",{staticClass:"odd"},[o("td",[o("p",[e._v("Privacy - Microphone Usage Description")])]),e._v(" "),o("td",[o("p",[e._v("String")])]),e._v(" "),o("td",[o("p",[e._v("Use the microphone for purposes like voice calls.")])])]),e._v(" "),o("tr",{staticClass:"even"},[o("td",[o("p",[e._v("Privacy - Camera Usage Description")])]),e._v(" "),o("td",[o("p",[e._v("String")])]),e._v(" "),o("td",[o("p",[e._v("Use the camera for purposes like video calls.")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);