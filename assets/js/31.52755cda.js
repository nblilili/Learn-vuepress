(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1129:function(e,t,a){"use strict";a.r(t);var r=a(29),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"prepare-the-development-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-development-environment"}},[e._v("#")]),e._v(" Prepare the Development Environment")]),e._v(" "),r("p",[e._v("This chapter will introduce how to integrate the SDK into a project you\ncreated.")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Supports macOS 10.10 or above")])]),e._v(" "),r("li",[r("p",[e._v("Effective Juphoon Developer Account ("),r("a",{attrs:{href:"http://developer.juphoon.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("free sign\nup"),r("OutboundLink")],1),e._v(" )")])]),e._v(" "),r("li",[r("p",[e._v("Efficient Juphoon "),r("a",{attrs:{href:"/cn/document/V2.1/create-application.php"}},[e._v("AppKey")])])])]),e._v(" "),r("h2",{attrs:{id:"create-a-macos-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-macos-project"}},[e._v("#")]),e._v(" Create a macOS project")]),e._v(" "),r("p",[e._v("Follow the steps below to create a macOS project. If you already have a\nmacOS project, you can directly check the step of integrating JC SDK.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Open Xcode and click Create a new Xcode project.")])]),e._v(" "),r("li",[r("p",[e._v("Select the project type as Cocoa App and click Next.")])]),e._v(" "),r("li",[r("p",[e._v("Enter the project information, such as project name, development\nteam information, organization name and language, and click Next.")])])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("If you have not added the information of development team, click\n[Xcode] \\Preferences… \\Accounts, click the plus sign in the lower\nleft corner and follow the on-screen prompts to log in your Apple ID.\nAfter that, you can choose your account as the development team.")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Select the project storage path and click Create.")])]),e._v(" "),r("li",[r("p",[e._v("Go to the TARGETS\\Project Name\\Signing & Capabilities menu and\ncheck Automatically manage signing.")])])]),e._v(" "),r("h2",{attrs:{id:"integrate-sdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#integrate-sdk"}},[e._v("#")]),e._v(" Integrate SDK")]),e._v(" "),r("p",[e._v("The dynamic library used on the mac integrates SDK.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Unpack and open the downloaded JC SDK dynamic library, including the\nJCSDKOC.framework file in the sdk file directory.")])]),e._v(" "),r("li",[r("p",[e._v("Copy the "),r("code",[e._v("sdk")]),e._v(" folder to the directory where your project is\nlocated.")])]),e._v(" "),r("li",[r("p",[e._v("Import SDK")]),e._v(" "),r("p",[e._v("Click ‘General’ and the ‘+’ symbol in the “Embedded Binaries”\ncolumn, then import JCSDKOC.framework under the JCSDK folder.")])]),e._v(" "),r("li",[r("p",[e._v("Import SDK dependency library")]),e._v(" "),r("p",[e._v("Continue to click the ‘+’ symbol to import the following system\ndependency libraries:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("AudioToolbox.framework")])]),e._v(" "),r("li",[r("p",[e._v("VideoToolBox.framework")])]),e._v(" "),r("li",[r("p",[e._v("AVFoundation.framework")])]),e._v(" "),r("li",[r("p",[e._v("CFNetwork.framework")])]),e._v(" "),r("li",[r("p",[e._v("CoreMedia.framework")])]),e._v(" "),r("li",[r("p",[e._v("CoreVideo.framework")])])]),e._v(" "),r("p",[e._v("The effect after importing is as follows:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(371),alt:"../../../../_images_en/macdyliblist.png"}})])]),e._v(" "),r("li",[r("p",[e._v("Set path")]),e._v(" "),r("p",[e._v("Click ‘Build Settings’, find Search Paths, set Framework Search\nPaths, Header Search Paths (header file path) and Library Search\nPaths (library file path):")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Framework Search Paths:$(PROJECT_DIR)/../sdk")])]),e._v(" "),r("li",[r("p",[e._v("Header Search Paths:$(PROJECT_DIR)/../sdk/include")])]),e._v(" "),r("li",[r("p",[e._v("Library Search Paths:$(PROJECT_DIR)/../sdk/lib/ios")])])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("After completing the first step to import JCSDKOC.framework and\ntwo .a files, Xcode will automatically generate the path. If Xcode\ndoes not automatically generate the path, the user should manually\nset the path according to the directory where JCSDKOC.framework,\ninclude and lib files are located.")])])]),e._v(" "),r("li",[r("p",[e._v("Set Enable Bitcode to NO")]),e._v(" "),r("p",[e._v("Enter Target \\Build Settings \\Enable Bitcode in the project\nand set this item to NO.")])]),e._v(" "),r("li",[r("p",[e._v("Set the parameters of Other Linker Flags to -ObjC")]),e._v(" "),r("p",[e._v("Click ‘Build Settings’, find Other Linker Flags and add the\nparameter -ObjC.")])]),e._v(" "),r("li",[r("p",[e._v("Set Preprocessor Macros")]),e._v(" "),r("p",[e._v("Click ‘Build Settings’, find Preprocessor Macros, and enter\nZPLATFORM=ZPLATFORM_OSX on the right.")])])]),e._v(" "),r("h2",{attrs:{id:"add-project-permissions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-project-permissions"}},[e._v("#")]),e._v(" Add project permissions")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Get device permissions")]),e._v(" "),r("p",[e._v("If your project has enabled App Sandbox or Hardened Runtime\nsettings, you need to check the following to obtain the\ncorresponding device permissions:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(372),alt:"../../../../_images_en/sandboxset.png"}}),e._v(" "),r("img",{attrs:{src:a(373),alt:"../../../../_images_en/hardrunset.png"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("According to official Apple requirements:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("For software released on the Mac App Store, the App Sandbox\nsetting needs to be enabled. See "),r("a",{attrs:{href:"https://developer.apple.com/app-sandboxing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple’s\nofficial"),r("OutboundLink")],1),e._v("\nstatement for details.")])]),e._v(" "),r("li",[r("p",[e._v("For software that is not released on the Mac App Store, the\nHardened Runtime setting needs to be enabled. See "),r("a",{attrs:{href:"https://developer.apple.com/news/?id=09032019a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple’s\nofficial"),r("OutboundLink")],1),e._v("\nstatement for details.")])]),e._v(" "),r("li",[r("p",[e._v("Library Validation in the Hardened Runtime settings will\nprevent app from loading frameworks, plugins or libraries\nunless the framework, plugin or library is signed by Apple or\nthe same team ID as the app. When encountering a scenario\nwhere the security restriction needs to be removed (for\nexample, it cannot be enumerated to a third-party virtual\ncamera), check Hardened Runtime \\Runtime Exceptions >\nDisable Library Validation.")])])])])]),e._v(" "),r("li",[r("p",[e._v("Add the following keys to the info.plist of the project:")])])]),e._v(" "),r("table",{staticStyle:{width:"99%"}},[r("colgroup",[r("col",{staticStyle:{width:"33%"}}),e._v(" "),r("col",{staticStyle:{width:"33%"}}),e._v(" "),r("col",{staticStyle:{width:"33%"}})]),e._v(" "),r("thead",[r("tr",{staticClass:"header"},[r("th",[r("p",[e._v("Key")])]),e._v(" "),r("th",[r("p",[e._v("Type")])]),e._v(" "),r("th",[r("p",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",{staticClass:"odd"},[r("td",[r("p",[e._v("Privacy - Microphone Usage Description")])]),e._v(" "),r("td",[r("p",[e._v("String")])]),e._v(" "),r("td",[r("p",[e._v("Use the microphone for purposes like voice call s.")])])]),e._v(" "),r("tr",{staticClass:"even"},[r("td",[r("p",[e._v("Privacy - Camera Usage Description")])]),e._v(" "),r("td",[r("p",[e._v("String")])]),e._v(" "),r("td",[r("p",[e._v("Use the camera for purposes like video calls.")])])])])])])}),[],!1,null,null,null);t.default=o.exports},371:function(e,t,a){e.exports=a.p+"assets/img/macdyliblist.ea5c36d8.png"},372:function(e,t,a){e.exports=a.p+"assets/img/sandboxset.e2d787cc.png"},373:function(e,t,a){e.exports=a.p+"assets/img/hardrunset.9488e88d.png"}}]);