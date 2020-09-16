(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{359:function(t,e,r){t.exports=r.p+"assets/img/pushset.94eb1ea7.png"},748:function(t,e,r){"use strict";r.r(e);var o=r(29),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"准备开发环境"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#准备开发环境"}},[t._v("#")]),t._v(" 准备开发环境")]),t._v(" "),o("p",[t._v("本章将介绍如何将 SDK 集成到您自己创建的项目中。")]),t._v(" "),o("h2",{attrs:{id:"前提条件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("支持 iOS 8.0 或以上版本的 iOS "),o("strong",[t._v("真机")]),t._v(" 设备")])]),t._v(" "),o("li",[o("p",[t._v("有效的菊风开发者账号（"),o("a",{attrs:{href:"http://developer.juphoon.com/signup",target:"_blank",rel:"noopener noreferrer"}},[t._v("免费注册"),o("OutboundLink")],1),t._v(" ）")])]),t._v(" "),o("li",[o("p",[t._v("有效的菊风 "),o("a",{attrs:{href:"/cn/document/V2.1/create-application.php"}},[t._v("AppKey")])])])]),t._v(" "),o("h2",{attrs:{id:"创建-ios-项目"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#创建-ios-项目"}},[t._v("#")]),t._v(" 创建 iOS 项目")]),t._v(" "),o("p",[t._v("参考以下步骤创建一个 iOS 项目。若已有 iOS 项目，可以直接查看集成 JC SDK。")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("打开 Xcode 并点击 "),o("strong",[t._v("Create a new Xcode project")]),t._v("。")])]),t._v(" "),o("li",[o("p",[t._v("选择项目类型为 "),o("strong",[t._v("Single View App")]),t._v("，并点击 "),o("strong",[t._v("Next")]),t._v("。")])]),t._v(" "),o("li",[o("p",[t._v("输入项目信息，如项目名称、开发团队信息、组织名称和语言，并点击 "),o("strong",[t._v("Next")]),t._v("。")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("如果您没有添加过开发团队信息，点击 "),o("strong",[t._v("Xcode \\Preferences… >\nAccounts")]),t._v("，点击左下角加号并按照屏幕提示登入 Apple\nID，完成后即可选择您的账户作为开发团队。")])])]),t._v(" "),o("li",[o("p",[t._v("选择项目存储路径，并点击 "),o("strong",[t._v("Create")]),t._v("。")])]),t._v(" "),o("li",[o("p",[t._v("进入 "),o("strong",[t._v("TARGETS \\Project Name \\Signing & Capabilities")]),t._v(" 菜单，勾选\n"),o("strong",[t._v("Automatically manage signing")]),t._v("。")])])]),t._v(" "),o("h2",{attrs:{id:"集成-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#集成-sdk"}},[t._v("#")]),t._v(" 集成 SDK")]),t._v(" "),o("p",[t._v("您可以通过以下三种方式中任意一种集成 JC SDK：")]),t._v(" "),o("h3",{attrs:{id:"方法一：通过-cocoapods-自动导入静态库"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#方法一：通过-cocoapods-自动导入静态库"}},[t._v("#")]),t._v(" 方法一：通过 CocoaPods 自动导入静态库")]),t._v(" "),o("p",[o("code",[t._v("V2.0")]),t._v(" 及以上的版本支持使用 CocoaPods 导入 SDK。 导入前需要安装 CocoaPods 环境，安装方式参照\n"),o("a",{attrs:{href:"https://cocoapods.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("CocoaPods 官网"),o("OutboundLink")],1),t._v(" 。")]),t._v(" "),o("p",[t._v("CocoaPods 环境安装好后，执行以下操作：")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("打开 Terminal ，"),o("code",[t._v("cd")]),t._v(" 至项目根目录")])]),t._v(" "),o("li",[o("p",[t._v("执行 "),o("code",[t._v("pod init")]),t._v(" ，项目文件夹下会生成一个 Podfile 文本文件")])]),t._v(" "),o("li",[o("p",[t._v("执行 "),o("code",[t._v("open -e Podfile")])])]),t._v(" "),o("li",[o("p",[t._v("添加导入配置 "),o("code",[t._v("pod 'JuphoonCloudSDK_iOS', '2.1'")])])]),t._v(" "),o("li",[o("p",[t._v("执行 "),o("code",[t._v("pod install")]),t._v("，成功安装后，Terminal 中会显示 "),o("code",[t._v("Pod installation complete!")]),t._v("\n，此时项目文件夹下会生成一个 xcworkspace 文件")])]),t._v(" "),o("li",[o("p",[t._v("双击打开 xcworkspace 文件")])])]),t._v(" "),o("p",[t._v("修改后内容如下所示，注意将 "),o("code",[t._v("Your App")]),t._v(" 替换为您的 Target 名称。")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("platform :ios, '9.0'\n#use_frameworks!\ntarget 'Your App' do\npod 'JuphoonCloudSDK_iOS', '2.1'\nend\n")])])]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[o("code",[t._v("V2.1")]),t._v(" 为当前发布的最新版本，关于指定具体版本请参考 "),o("a",{attrs:{href:"https://guides.cocoapods.org/using/the-podfile.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("pod\n使用规范"),o("OutboundLink")],1),t._v(" 。")]),t._v(" "),o("p",[t._v("如果需要更新本地库版本，请先执行 "),o("code",[t._v("pod update")]),t._v(" 命令，再执行 "),o("code",[t._v("pod install")]),t._v(" 命令。")])]),t._v(" "),o("h3",{attrs:{id:"方法二：手动导入静态库"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#方法二：手动导入静态库"}},[t._v("#")]),t._v(" 方法二：手动导入静态库")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("解压并打开下载的 JC SDK 静态库，在 "),o("strong",[t._v("sdk")]),t._v(" 文件目录下包含\n"),o("strong",[t._v("include、lib、JCSDKOC.framework 和 JCCloudWrapper.framework")]),t._v("\n四个文件夹。")])]),t._v(" "),o("li",[o("p",[t._v("将 "),o("strong",[t._v("sdk")]),t._v(" 文件夹拷贝到您工程所在的目录下。")])]),t._v(" "),o("li",[o("p",[t._v("导入 SDK")]),t._v(" "),o("p",[t._v("打开 Xcode，进入 "),o("strong",[t._v("TARGETS \\Project Name \\Build Phases \\Link\nBinary with Libraries")]),t._v(" 菜单，点击 "),o("strong",[t._v("+")]),t._v(" 符号，导入 "),o("strong",[t._v("sdk")]),t._v(" 文件夹下的\n"),o("code",[t._v("JCSDKOC.framework")]),t._v(" 和 "),o("strong",[t._v("sdk \\lib")]),t._v(" 文件夹下的 "),o("code",[t._v("libmtc.a")]),t._v(" 、 "),o("code",[t._v("libzmf.a")]),t._v("\n文件。")])]),t._v(" "),o("li",[o("p",[t._v("继续点击 "),o("strong",[t._v("+")]),t._v(" 符号，导入如下系统依赖的库。")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("- AssetsLibrary.framework\n- AudioToolbox.framework\n- VideoToolBox.framework\n- AVFoundation.framework\n- CFNetwork.framework\n- CoreMedia.framework\n- CoreMotion.framework\n- CoreVideo.framework\n- GLKit.framework\n- ReplayKit.framework\n- Security.framework\n- SystemConfiguration.framework\n- libc++.tbd\n- libz.tbd\n- libresolv.tbd\n")])])])]),t._v(" "),o("li",[o("p",[t._v("点击 Build Settings ，找到 Search Paths，设置 Framework Search Paths 、Header\nSearch Paths（头文件路径） 和 Library Search Paths（库文件路径）。")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Framework Search Paths："),o("code",[t._v("$(PROJECT_DIR)/../sdk")])])]),t._v(" "),o("li",[o("p",[t._v("Header Search Paths："),o("code",[t._v("$(PROJECT_DIR)/../sdk/include")])])]),t._v(" "),o("li",[o("p",[t._v("Library Search Paths："),o("code",[t._v("$(PROJECT_DIR)/../sdk/lib/ios")])])])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("在完成第 1 步导入 JCSDKOC.framework 和两个 .a 文件后，Xcode 会自动生成该路径，如果 Xcode\n没有自动生成路径，用户要根据 "),o("code",[t._v("JCSDKOC.framework")]),t._v(" 、"),o("code",[t._v("include")]),t._v(" 和 "),o("code",[t._v("lib")]),t._v("\n文件所在目录，手动设置路径。")])])]),t._v(" "),o("li",[o("p",[t._v("进入工程中 "),o("strong",[t._v("Target \\Build Settings \\Enable Bitcode")]),t._v("，将此项设置为 NO。")])]),t._v(" "),o("li",[o("p",[t._v("进入工程中的 "),o("strong",[t._v("Target \\Build Settings \\Other Linker Flags")]),t._v("，在此项中添加\n-ObjC。")])]),t._v(" "),o("li",[o("p",[t._v("点击 Build Settings，找到 Preprocessor Macros，在右侧输入\nZPLATFORM=ZPLATFORM_IOS 。")])]),t._v(" "),o("li",[o("p",[t._v("点击 Build Settings，找到 Documentation Comments 并设置为 NO。")])]),t._v(" "),o("li",[o("p",[t._v("设置后台运行模式")]),t._v(" "),o("p",[t._v("进入工程的 "),o("strong",[t._v("Target \\Signing & Capabilities \\Background\nModes")]),t._v("，勾选如下两项内容:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Audio, AirPlay, and Picture in Picture")])]),t._v(" "),o("li",[o("p",[t._v("Voice over IP")])])])])]),t._v(" "),o("h3",{attrs:{id:"方法三：手动导入动态库"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#方法三：手动导入动态库"}},[t._v("#")]),t._v(" 方法三：手动导入动态库")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("解压并打开下载的 JC SDK 动态库，在 "),o("strong",[t._v("sdk")]),t._v(" 文件目录下包含 "),o("code",[t._v("JCSDKOC.framework")]),t._v(" 文件。")])]),t._v(" "),o("li",[o("p",[t._v("将 "),o("strong",[t._v("sdk")]),t._v(" 文件夹拷贝到您工程所在的目录下。")])]),t._v(" "),o("li",[o("p",[t._v("打开 Xcode，进入 "),o("strong",[t._v("TARGETS \\Project Name \\General")]),t._v(" ，在 Embedded\nBinaries 一栏，点击 "),o("strong",[t._v("+")]),t._v(" 符号，然后导入 JCSDK 文件夹下的 JCSDKOC.framework。")])]),t._v(" "),o("li",[o("p",[t._v("继续点击 "),o("strong",[t._v("+")]),t._v(" 符号，导入如下系统依赖的库。")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("- AssetsLibrary.framework\n- AudioToolbox.framework\n- VideoToolBox.framework\n- AVFoundation.framework\n- CFNetwork.framework\n- CoreMedia.framework\n- CoreMotion.framework\n- CoreVideo.framework\n- GLKit.framework\n- ReplayKit.framework\n- Security.framework\n- SystemConfiguration.framework\n- libc++.tbd\n- libz.tbd\n- libresolv.tbd\n")])])])]),t._v(" "),o("li",[o("p",[t._v("点击 Build Settings，找到 Search Paths，设置 Framework Search Paths：")]),t._v(" "),o("ul",[o("li",[t._v("Framework Search Paths："),o("code",[t._v("$(PROJECT_DIR)/../sdk")])])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("在完成第 1 步导入 JCSDKOC.framework 文件后，Xcode 会自动生成该路径，如果 Xcode\n没有自动生成路径，用户要根据 "),o("code",[t._v("JCSDKOC.framework")]),t._v("\n文件所在目录，手动设置路径。")])])]),t._v(" "),o("li",[o("p",[t._v("进入工程中 "),o("strong",[t._v("Target \\Build Settings \\Enable Bitcode")]),t._v("，将此项设置为 NO。")])]),t._v(" "),o("li",[o("p",[t._v("进入工程中的 "),o("strong",[t._v("Target \\Build Settings \\Other Linker Flags")]),t._v("，在此项中添加\n-ObjC。")])]),t._v(" "),o("li",[o("p",[t._v("点击 Build Settings，找到 Preprocessor Macros，在右侧输入\nZPLATFORM=ZPLATFORM_IOS 。如果设置了 APNs 推送，则还需要在 Preprocessor Macros 下的\nDebug 中输入 DEBUG，如下图：")]),t._v(" "),o("p",[o("img",{attrs:{src:r(359),alt:"../../../../_images/pushset.png"}})])]),t._v(" "),o("li",[o("p",[t._v("点击 Build Settings，找到 Documentation Comments 并设置为 NO。")])]),t._v(" "),o("li",[o("p",[t._v("进入工程的 "),o("strong",[t._v("Target \\Signing & Capabilities \\Background\nModes")]),t._v("，勾选如下两项内容:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Audio, AirPlay, and Picture in Picture")])]),t._v(" "),o("li",[o("p",[t._v("Voice over IP")])])])])]),t._v(" "),o("h2",{attrs:{id:"添加项目权限"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#添加项目权限"}},[t._v("#")]),t._v(" 添加项目权限")]),t._v(" "),o("p",[t._v("音视频通话需要用到摄像头和麦克风权限，请在工程的 info.plist 中添加如下键值:")]),t._v(" "),o("table",{staticStyle:{width:"99%"}},[o("colgroup",[o("col",{staticStyle:{width:"33%"}}),t._v(" "),o("col",{staticStyle:{width:"33%"}}),t._v(" "),o("col",{staticStyle:{width:"33%"}})]),t._v(" "),o("thead",[o("tr",{staticClass:"header"},[o("th",[o("p",[t._v("Key")])]),t._v(" "),o("th",[o("p",[t._v("Type")])]),t._v(" "),o("th",[o("p",[t._v("Value")])])])]),t._v(" "),o("tbody",[o("tr",{staticClass:"odd"},[o("td",[o("p",[t._v("Privacy - Microphone Usage Description")])]),t._v(" "),o("td",[o("p",[t._v("String")])]),t._v(" "),o("td",[o("p",[t._v("使用麦克风的目的，如语音通话。")])])]),t._v(" "),o("tr",{staticClass:"even"},[o("td",[o("p",[t._v("Privacy - Camera Usage Description")])]),t._v(" "),o("td",[o("p",[t._v("String")])]),t._v(" "),o("td",[o("p",[t._v("使用摄像头的目的，如视频通话。")])])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);