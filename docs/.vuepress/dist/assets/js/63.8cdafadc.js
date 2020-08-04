(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{308:function(e,o,t){e.exports=t.p+"assets/img/pushset.94eb1ea7.png"},729:function(e,o,t){"use strict";t.r(o);var r=t(43),a=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"准备开发环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备开发环境"}},[e._v("#")]),e._v(" 准备开发环境")]),e._v(" "),r("p",[e._v("本章将介绍如何将 SDK 集成到您自己创建的项目中。")]),e._v(" "),r("h2",{attrs:{id:"前提条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[e._v("#")]),e._v(" 前提条件")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("支持 iOS 8.0 或以上版本的 iOS "),r("strong",[e._v("真机")]),e._v(" 设备")])]),e._v(" "),r("li",[r("p",[e._v("有效的菊风开发者账号（"),r("a",{attrs:{href:"http://developer.juphoon.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("免费注册"),r("OutboundLink")],1),e._v(" ）")])]),e._v(" "),r("li",[r("p",[e._v("有效的菊风 "),r("a",{attrs:{href:"https://developer.juphoon.com/cn/document/V2.1/create-application.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppKey"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"创建-ios-项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建-ios-项目"}},[e._v("#")]),e._v(" 创建 iOS 项目")]),e._v(" "),r("p",[e._v("参考以下步骤创建一个 iOS 项目。若已有 iOS 项目，可以直接查看集成 JC SDK。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("打开 Xcode 并点击 Create a new Xcode project。")])]),e._v(" "),r("li",[r("p",[e._v("选择项目类型为 Single View App，并点击 Next。")])]),e._v(" "),r("li",[r("p",[e._v("输入项目信息，如项目名称、开发团队信息、组织名称和语言，并点击 Next。")])])]),e._v(" "),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("如果您没有添加过开发团队信息，点击 Xcode > Preferences… > Accounts，点击左下角加号并按照屏幕提示登入\nApple ID，完成后即可选择您的账户作为开发团队。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("选择项目存储路径，并点击 Create。")])]),e._v(" "),r("li",[r("p",[e._v("将您的 iOS 设备连接至电脑。")])]),e._v(" "),r("li",[r("p",[e._v("进入 TARGETS > Project Name > Signing & Capabilities 菜单，勾选\nAutomatically manage signing。")])])]),e._v(" "),r("h2",{attrs:{id:"集成-sdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集成-sdk"}},[e._v("#")]),e._v(" 集成 SDK")]),e._v(" "),r("p",[e._v("您可以通过以下三种方式中任意一种集成 JC SDK：")]),e._v(" "),r("h3",{attrs:{id:"方法一：通过-cocoapods-自动导入静态库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法一：通过-cocoapods-自动导入静态库"}},[e._v("#")]),e._v(" 方法一：通过 CocoaPods 自动导入静态库")]),e._v(" "),r("p",[r("code",[e._v("2.0")]),e._v(" 及以上的版本支持使用 CocoaPods 导入 SDK。 导入前需要安装 CocoaPods 环境，安装方式参照\n"),r("a",{attrs:{href:"https://cocoapods.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("CocoaPods 官网"),r("OutboundLink")],1),e._v(" 。")]),e._v(" "),r("p",[e._v("CocoaPods 环境安装好后，执行以下操作：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("打开 Terminal，cd 至项目根目录")])]),e._v(" "),r("li",[r("p",[e._v("执行 pod init，项目文件夹下会生成一个 Podfile 文本文件")])]),e._v(" "),r("li",[r("p",[e._v("执行 open -e Podfile")])]),e._v(" "),r("li",[r("p",[e._v("添加导入配置 "),r("code",[e._v("pod 'JuphoonCloudSDK_iOS', '2.1'")])])]),e._v(" "),r("li",[r("p",[e._v("执行 "),r("code",[e._v("pod install")]),e._v("，成功安装后，Terminal 中会显示 Pod installation\ncomplete!，此时项目文件夹下会生成一个 xcworkspace 文件。")])]),e._v(" "),r("li",[r("p",[e._v("双击打开 "),r("code",[e._v("xcworkspace")]),e._v(" 文件。")])])]),e._v(" "),r("p",[e._v("修改后内容如下所示，注意将 Your App 替换为您的 Target 名称。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("platform :ios, '9.0'\n#use_frameworks!\ntarget 'Your App' do\npod 'JuphoonCloudSDK_iOS', '2.1'\nend\n")])])]),r("p",[e._v("Note")]),e._v(" "),r("p",[r("code",[e._v("2.1")]),e._v(" 为当前发布的最新版本，关于指定具体版本请参考 "),r("a",{attrs:{href:"https://guides.cocoapods.org/using/the-podfile.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("pod\n使用规范"),r("OutboundLink")],1),e._v(" 。")]),e._v(" "),r("p",[e._v("如果需要更新本地库版本，在执行 pod install 之前执行 pod update 命令。")]),e._v(" "),r("h3",{attrs:{id:"方法二：手动导入静态库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法二：手动导入静态库"}},[e._v("#")]),e._v(" 方法二：手动导入静态库")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("解压并打开下载的 JC SDK 静态库，在 sdk 文件目录下包含 include、lib、JCSDKOC.framework 和\nJCCloudWrapper.framework 四个文件夹。")])]),e._v(" "),r("li",[r("p",[e._v("将 "),r("code",[e._v("sdk")]),e._v(" 文件夹拷贝到您工程所在的目录下。")])]),e._v(" "),r("li",[r("p",[e._v("导入 SDK")]),e._v(" "),r("blockquote",[r("p",[e._v("打开 Xcode，进入 TARGETS > Project Name > Build Phases > Link Binary\nwith Libraries 菜单，点击 ‘+’ 符号，导入 sdk 文件夹下的 "),r("code",[e._v("JCSDKOC.framework")]),e._v("、lib\n文件夹下的 "),r("code",[e._v("libmtc.a")]),e._v(" 和 "),r("code",[e._v("libzmf.a")]),e._v(" 文件。")])])]),e._v(" "),r("li",[r("p",[e._v("导入 SDK 依赖的库")]),e._v(" "),r("blockquote",[r("p",[e._v("继续点击 ‘+’ 符号，导入如下系统依赖的库:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("- AssetsLibrary.framework\n- AudioToolbox.framework\n- VideoToolBox.framework\n- AVFoundation.framework\n- CFNetwork.framework\n- CoreMedia.framework\n- CoreMotion.framework\n- CoreVideo.framework\n- GLKit.framework\n- PushKit.framework（推送使用）\n- ReplayKit.framework\n- Security.framework\n- SystemConfiguration.framework\n- libc++.tbd\n- libz.tbd\n- libresolv.tbd\n")])])])])]),e._v(" "),r("li",[r("p",[e._v("设置路径")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Search Paths，设置 Framework Search Paths\n、Header Search Paths（头文件路径） 和 Library Search Paths（库文件路径）:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("- Framework Search Paths：$(PROJECT_DIR)/../sdk\n- Header Search Paths：$(PROJECT_DIR)/../sdk/include\n- Library Search Paths：$(PROJECT_DIR)/../sdk/lib/ios\n")])])]),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("在完成第 1 步导入 JCSDKOC.framework 和两个 .a 文件后，Xcode 会自动生成该路径，如果 Xcode\n没有自动生成路径，用户要根据 "),r("code",[e._v("JCSDKOC.framework")]),e._v(" 、"),r("code",[e._v("include")]),e._v(" 和 "),r("code",[e._v("lib")]),e._v("\n文件所在目录，手动设置路径。")])])]),e._v(" "),r("li",[r("p",[e._v("设置 Enable Bitcode 为 NO")]),e._v(" "),r("blockquote",[r("p",[e._v("进入工程中 Target -> Build Settings -> Enable Bitcode，将此项设置为 NO。")])])]),e._v(" "),r("li",[r("p",[e._v("设置 Other Linker Flags 的参数为 -ObjC")]),e._v(" "),r("blockquote",[r("p",[e._v("进入工程中的 Target -> Build Settings -> Other Linker Flags，在此项中添加\n-ObjC。")])])]),e._v(" "),r("li",[r("p",[e._v("设置预处理宏定义")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Preprocessor Macros，在右侧输入\nZPLATFORM=ZPLATFORM_IOS 。")]),e._v(" "),r("p",[r("strong",[e._v("如果设置了 APNs 推送")]),e._v("，则还需要在 Preprocessor Macros 下的 Debug 中输入\nDEBUG，如下图：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(308),alt:"../../../../_images/pushset.png"}})]),e._v(" "),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("DEBUG 宏定义的目的是为了区分推送环境是 release 还是 debug，环境不对会导致推送失败。")])])]),e._v(" "),r("li",[r("p",[e._v("设置 Documentation Comments 为 NO")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Documentation Comments 并设置为 NO。")])])]),e._v(" "),r("li",[r("p",[e._v("设置后台运行模式")]),e._v(" "),r("blockquote",[r("p",[e._v("进入工程的 Target -> Signing & Capabilities -> Background\nModes，勾选如下两项内容:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Audio, AirPlay, and Picture in Picture")])]),e._v(" "),r("li",[r("p",[e._v("Voice over IP")])])])])])]),e._v(" "),r("h3",{attrs:{id:"方法三：手动导入动态库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法三：手动导入动态库"}},[e._v("#")]),e._v(" 方法三：手动导入动态库")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("解压并打开下载的 JC SDK 动态库，在 sdk 文件目录下包含 JCSDKOC.framework 文件。")])]),e._v(" "),r("li",[r("p",[e._v("将 "),r("code",[e._v("sdk")]),e._v(" 文件夹拷贝到您工程所在的目录下。")])]),e._v(" "),r("li",[r("p",[e._v("导入 SDK")]),e._v(" "),r("blockquote",[r("p",[e._v("打开 Xcode，进入 TARGETS > Project Name > General，在 “Embedded\nBinaries” 一栏，点击 ‘+’ 符号，然后导入 JCSDK 文件夹下的 JCSDKOC.framework。")])])]),e._v(" "),r("li",[r("p",[e._v("导入 SDK 依赖的库")]),e._v(" "),r("blockquote",[r("p",[e._v("继续点击 ‘+’ 符号，导入如下系统依赖的库:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("- AssetsLibrary.framework\n- AudioToolbox.framework\n- VideoToolBox.framework\n- AVFoundation.framework\n- CFNetwork.framework\n- CoreMedia.framework\n- CoreMotion.framework\n- CoreVideo.framework\n- GLKit.framework\n- PushKit.framework（推送使用）\n- ReplayKit.framework\n- Security.framework\n- SystemConfiguration.framework\n- libc++.tbd\n- libz.tbd\n- libresolv.tbd\n")])])])])]),e._v(" "),r("li",[r("p",[e._v("设置路径")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Search Paths，设置 Framework Search Paths\n、Header Search Paths（头文件路径） 和 Library Search Paths（库文件路径）:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("- Framework Search Paths：$(PROJECT_DIR)/../sdk\n")])])]),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("在完成第 1 步导入 JCSDKOC.framework 和两个 .a 文件后，Xcode 会自动生成该路径，如果 Xcode\n没有自动生成路径，用户要根据 "),r("code",[e._v("JCSDKOC.framework")]),e._v(" 文件所在目录，手动设置路径。")])])]),e._v(" "),r("li",[r("p",[e._v("设置 Enable Bitcode 为 NO")]),e._v(" "),r("blockquote",[r("p",[e._v("进入工程中 Target -> Build Settings -> Enable Bitcode，将此项设置为 NO。")])])]),e._v(" "),r("li",[r("p",[e._v("设置 Other Linker Flags 的参数为 -ObjC")]),e._v(" "),r("blockquote",[r("p",[e._v("进入工程中的 Target -> Build Settings -> Other Linker Flags，在此项中添加\n-ObjC。")])])]),e._v(" "),r("li",[r("p",[e._v("设置预处理宏定义")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Preprocessor Macros，在右侧输入\nZPLATFORM=ZPLATFORM_IOS 。")]),e._v(" "),r("p",[r("strong",[e._v("如果设置了 APNs 推送")]),e._v("，则还需要在 Preprocessor Macros 下的 Debug 中输入\nDEBUG，如下图：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(308),alt:"../../../../_images/pushset.png"}})]),e._v(" "),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("DEBUG 宏定义的目的是为了区分推送环境是 release 还是 debug，环境不对会导致推送失败。")])])]),e._v(" "),r("li",[r("p",[e._v("设置 Documentation Comments 为 NO")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Documentation Comments 并设置为 NO。")])])]),e._v(" "),r("li",[r("p",[e._v("设置后台运行模式")]),e._v(" "),r("blockquote",[r("p",[e._v("进入工程的 Target -> Signing & Capabilities -> Background\nModes，勾选如下两项内容:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Audio, AirPlay, and Picture in Picture")])]),e._v(" "),r("li",[r("p",[e._v("Voice over IP")])])])])])]),e._v(" "),r("h2",{attrs:{id:"添加项目权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加项目权限"}},[e._v("#")]),e._v(" 添加项目权限")]),e._v(" "),r("p",[e._v("音视频通话需要用到摄像头和麦克风权限，请在工程的 info.plist 中添加如下键值:")]),e._v(" "),r("table",{staticStyle:{width:"99%"}},[r("colgroup",[r("col",{staticStyle:{width:"33%"}}),e._v(" "),r("col",{staticStyle:{width:"33%"}}),e._v(" "),r("col",{staticStyle:{width:"33%"}})]),e._v(" "),r("thead",[r("tr",{staticClass:"header"},[r("th",[r("p",[e._v("Key")])]),e._v(" "),r("th",[r("p",[e._v("Type")])]),e._v(" "),r("th",[r("p",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",{staticClass:"odd"},[r("td",[r("p",[e._v("Privacy - Microphone Usage Description")])]),e._v(" "),r("td",[r("p",[e._v("String")])]),e._v(" "),r("td",[r("p",[e._v("使用麦克风的目的，如语音通话。")])])]),e._v(" "),r("tr",{staticClass:"even"},[r("td",[r("p",[e._v("Privacy - Camera Usage Description")])]),e._v(" "),r("td",[r("p",[e._v("String")])]),e._v(" "),r("td",[r("p",[e._v("使用摄像头的目的，如视频通话。")])])])])])])}),[],!1,null,null,null);o.default=a.exports}}]);