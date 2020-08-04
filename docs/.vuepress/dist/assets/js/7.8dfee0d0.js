(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{314:function(e,t,a){e.exports=a.p+"assets/img/macdyliblist.ea5c36d8.png"},315:function(e,t,a){e.exports=a.p+"assets/img/sandboxset.e2d787cc.png"},316:function(e,t,a){e.exports=a.p+"assets/img/hardrunset.9488e88d.png"},499:function(e,t,a){"use strict";a.r(t);var r=a(43),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"准备开发环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备开发环境"}},[e._v("#")]),e._v(" 准备开发环境")]),e._v(" "),r("p",[e._v("本章将介绍如何将 SDK 集成到您自己创建的项目中。")]),e._v(" "),r("h2",{attrs:{id:"前提条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[e._v("#")]),e._v(" 前提条件")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("支持 macOS 10.10 或以上版本的 macOS 设备")])]),e._v(" "),r("li",[r("p",[e._v("有效的菊风开发者账号（"),r("a",{attrs:{href:"http://developer.juphoon.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("免费注册"),r("OutboundLink")],1),e._v(" ）")])]),e._v(" "),r("li",[r("p",[e._v("有效的菊风 "),r("a",{attrs:{href:"https://developer.juphoon.com/cn/document/V2.1/create-application.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppKey"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"创建-macos-项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建-macos-项目"}},[e._v("#")]),e._v(" 创建 macOS 项目")]),e._v(" "),r("p",[e._v("参考以下步骤创建一个 macOS 项目。若已有 macOS 项目，可以直接查看集成 JC SDK。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("打开 Xcode 并点击 Create a new Xcode project。")])]),e._v(" "),r("li",[r("p",[e._v("选择项目类型为 Cocoa App，并点击 Next。")])]),e._v(" "),r("li",[r("p",[e._v("输入项目信息，如项目名称、开发团队信息、组织名称和语言，并点击 Next。")])])]),e._v(" "),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("如果您没有添加过开发团队信息，点击 Xcode > Preferences… > Accounts，点击左下角加号并按照屏幕提示登入\nApple ID，完成后即可选择您的账户作为开发团队。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("选择项目存储路径，并点击 Create。")])]),e._v(" "),r("li",[r("p",[e._v("进入 TARGETS > Project Name > Signing & Capabilities 菜单，勾选\nAutomatically manage signing。")])])]),e._v(" "),r("h2",{attrs:{id:"集成sdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集成sdk"}},[e._v("#")]),e._v(" 集成SDK")]),e._v(" "),r("p",[e._v("mac 端使用的动态库集成 SDK。")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("解压并打开下载的 JC SDK 动态库，在 sdk 文件目录下包含 JCSDKOC.framework 文件。")])]),e._v(" "),r("li",[r("p",[e._v("将 "),r("code",[e._v("sdk")]),e._v(" 文件夹拷贝到您工程所在的目录下。")])]),e._v(" "),r("li",[r("p",[e._v("导入 SDK")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘General’，在 “Embedded Binaries” 一栏，点击 ‘+’ 符号，然后导入 JCSDK 文件夹下的\nJCSDKOC.framework。")])])]),e._v(" "),r("li",[r("p",[e._v("导入 SDK 依赖的库")]),e._v(" "),r("blockquote",[r("p",[e._v("继续点击 ‘+’ 符号，导入如下系统依赖的库：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("AudioToolbox.framework")])]),e._v(" "),r("li",[r("p",[e._v("VideoToolBox.framework")])]),e._v(" "),r("li",[r("p",[e._v("AVFoundation.framework")])]),e._v(" "),r("li",[r("p",[e._v("CFNetwork.framework")])]),e._v(" "),r("li",[r("p",[e._v("CoreMedia.framework")])]),e._v(" "),r("li",[r("p",[e._v("CoreVideo.framework")])])]),e._v(" "),r("p",[e._v("导入完后的效果如下图：")]),e._v(" "),r("p",[r("img",{attrs:{src:a(314),alt:"../../../../_images/macdyliblist.png"}})])])]),e._v(" "),r("li",[r("p",[e._v("设置路径")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Search Paths，设置 Framework Search Paths\n、Header Search Paths（头文件路径） 和 Library Search Paths（库文件路径）:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("- Framework Search Paths：$(PROJECT_DIR)/../sdk\n- Header Search Paths：$(PROJECT_DIR)/../sdk/include\n- Library Search Paths：$(PROJECT_DIR)/../sdk/lib/ios\n")])])]),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("在完成第 1 步导入 JCSDKOC.framework 和两个 .a 文件后，Xcode 会自动生成该路径，如果 Xcode\n没有自动生成路径，用户要根据 "),r("code",[e._v("JCSDKOC.framework")]),e._v(" 、"),r("code",[e._v("include")]),e._v(" 和 "),r("code",[e._v("lib")]),e._v("\n文件所在目录，手动设置路径。")])])]),e._v(" "),r("li",[r("p",[e._v("设置 Enable Bitcode 为 NO")]),e._v(" "),r("blockquote",[r("p",[e._v("进入工程中 Target -> Build Settings -> Enable Bitcode，将此项设置为 NO。")])])]),e._v(" "),r("li",[r("p",[e._v("设置 Other Linker Flags 的参数为 -ObjC")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Other Linker Flags 并添加参数 -ObjC。")])])]),e._v(" "),r("li",[r("p",[e._v("设置预处理宏定义")]),e._v(" "),r("blockquote",[r("p",[e._v("点击 ‘Build Settings’，找到 Preprocessor Macros，在右侧输入\nZPLATFORM=ZPLATFORM_OSX。")])])])]),e._v(" "),r("h2",{attrs:{id:"添加项目权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加项目权限"}},[e._v("#")]),e._v(" 添加项目权限")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("获取设备权限")]),e._v(" "),r("blockquote",[r("p",[e._v("若您的项目已启用 App Sandbox 或 Hardened Runtime 设置，则需勾选如下内容，获取相应的设备权限：")]),e._v(" "),r("p",[r("img",{attrs:{src:a(315),alt:"../../../../_images/sandboxset.png"}}),e._v(" "),r("img",{attrs:{src:a(316),alt:"../../../../_images/hardrunset.png"}})]),e._v(" "),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("根据 Apple 官方要求：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("对于在 Mac App Store 发布的软件，需要启用 App Sandbox 设置。详见 "),r("a",{attrs:{href:"https://developer.apple.com/app-sandboxing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple\n官方声明"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("对于不在 Mac App Store 发布的软件，需要启用 Hardened Runtime 设置。详见 "),r("a",{attrs:{href:"https://developer.apple.com/news/?id=09032019a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple\n官方声明"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("Hardened Runtime 设置中的 Library Validation 会阻止 app\n加载框架、插件或库，除非框架、插件或库是由 Apple 或是与\napp 相同的团队 ID 签名的。当遇到需要取消该安全限制的场景（例如无法枚举到第三方虚拟摄像头）时，请勾选\nHardened Runtime -> Runtime Exceptions -> Disable Library\nValidation。")])])])])]),e._v(" "),r("li",[r("p",[e._v("在工程的 info.plist 中添加如下键值:")])])]),e._v(" "),r("table",{staticStyle:{width:"99%"}},[r("colgroup",[r("col",{staticStyle:{width:"33%"}}),e._v(" "),r("col",{staticStyle:{width:"33%"}}),e._v(" "),r("col",{staticStyle:{width:"33%"}})]),e._v(" "),r("thead",[r("tr",{staticClass:"header"},[r("th",[r("p",[e._v("Key")])]),e._v(" "),r("th",[r("p",[e._v("Type")])]),e._v(" "),r("th",[r("p",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",{staticClass:"odd"},[r("td",[r("p",[e._v("Privacy - Microphone Usage Description")])]),e._v(" "),r("td",[r("p",[e._v("String")])]),e._v(" "),r("td",[r("p",[e._v("使用麦克风的目的，如语音通话。")])])]),e._v(" "),r("tr",{staticClass:"even"},[r("td",[r("p",[e._v("Privacy - Camera Usage Description")])]),e._v(" "),r("td",[r("p",[e._v("String")])]),e._v(" "),r("td",[r("p",[e._v("使用摄像头的目的，如视频通话。")])])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);