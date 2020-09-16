(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{799:function(s,a,t){"use strict";t.r(a);var r=t(29),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"准备开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备开发环境"}},[s._v("#")]),s._v(" 准备开发环境")]),s._v(" "),t("p",[s._v("本章将介绍如何将 JC SDK 集成到您自己创建的项目中。")]),s._v(" "),t("h2",{attrs:{id:"前提条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Android SDK API 等级 16 或以上")])]),s._v(" "),t("li",[t("p",[s._v("Android Studio 3.5及以上版本")])]),s._v(" "),t("li",[t("p",[s._v("支持 Android 4.1 或以上版本的移动设备")])]),s._v(" "),t("li",[t("p",[s._v("有效的菊风开发者账号（"),t("a",{attrs:{href:"http://developer.juphoon.com/signup",target:"_blank",rel:"noopener noreferrer"}},[s._v("免费注册"),t("OutboundLink")],1),s._v(" ）")])]),s._v(" "),t("li",[t("p",[s._v("有效的菊风 "),t("a",{attrs:{href:"/cn/document/V2.1/create-application.php"}},[s._v("AppKey")])])])]),s._v(" "),t("h2",{attrs:{id:"创建-android-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-android-项目"}},[s._v("#")]),s._v(" 创建 Android 项目")]),s._v(" "),t("p",[s._v("参考以下步骤创建一个 Android 项目。若已有 Android 项目，可以直接查看【集成 SDK】。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("打开 "),t("strong",[s._v("Android Studio")]),s._v("，点击 "),t("strong",[s._v("Start a new Android Studio project")]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("在 "),t("strong",[s._v("Select a Project Template")]),s._v(" 界面，选择 "),t("strong",[s._v("Phone and Tablet \\Empty\nActivity")]),s._v("，然后点击 "),t("strong",[s._v("Next")]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("在 "),t("strong",[s._v("Configure Your Project")]),s._v(" 界面，依次填入以下内容：")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("Name")]),s._v("：您的 Android 项目名称，如 HelloJuphoon。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Package name")]),s._v("：您的项目包的名称，如 io.helloJuphoon。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Save location")]),s._v("：项目的存储路径")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Language")]),s._v("：项目的编程语言，如 Java")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Minimum API level")]),s._v("：项目的最低 API 等级")])])])]),s._v(" "),t("li",[t("p",[s._v("然后点击 "),t("strong",[s._v("Finish")]),s._v("。根据屏幕提示，安装可能需要的插件。")])])]),s._v(" "),t("h2",{attrs:{id:"集成-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成-sdk"}},[s._v("#")]),s._v(" 集成 SDK")]),s._v(" "),t("p",[s._v("您可以通过以下两种方式中任意一种集成 JC SDK：")]),s._v(" "),t("h3",{attrs:{id:"方法一：使用-jcenter-自动集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一：使用-jcenter-自动集成"}},[s._v("#")]),s._v(" 方法一：使用 JCenter 自动集成")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("该方法仅适用于 2.1 及以上版本的 JC SDK 集成。")])]),s._v(" "),t("p",[s._v("在项目的 "),t("strong",[s._v("/app/build.gradle")]),s._v(" 文件中，添加如下行：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\ndependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可通过 JC SDK 发版说明取得最新版本号")]),s._v("\n    implementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.JuphoonCloud:JC-SDK:2.1'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"方法二：手动导入-jc-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二：手动导入-jc-sdk"}},[s._v("#")]),s._v(" 方法二：手动导入 JC SDK")]),s._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"/portal/cn/downloadsdk/download_sdk.php?filename=JC-SDK-Android-V2_1.tar.gz"}},[s._v("下载 JC\nSDK")]),s._v("\n并解压。")])]),s._v(" "),t("li",[t("p",[s._v("拷贝 libs 文件夹内的 "),t("strong",[s._v("arm64-v8a、armeabi-v7a、x86、x86_64、JCSDK.jar、mtc.jar\n和 zmf.jar")]),s._v(" 到您工程目录中的 "),t("strong",[s._v("libs")]),s._v(" 目录下。")])]),s._v(" "),t("li",[t("p",[s._v("为确保能够连接到 "),t("strong",[s._v("so 库")]),s._v("，需要在 "),t("strong",[s._v("module")]),s._v(" 的 "),t("strong",[s._v("build.gradle")]),s._v(" 中添加设置:")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("sourceSets "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    main "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        jniLibs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("srcDirs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("'libs’"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"添加项目权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加项目权限"}},[s._v("#")]),s._v(" 添加项目权限")]),s._v(" "),t("p",[s._v("根据场景需要，在 "),t("strong",[s._v("/app/src/main/AndroidManifest.xml")]),s._v(" 文件中添加如下行，获取相应的设备权限：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("feature android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.hardware.camera"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("feature android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.hardware.camera.autofocus"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.INTERNET"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.ACCESS_NETWORK_STATE"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.ACCESS_WIFI_STATE"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.READ_PHONE_STATE"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.WAKE_LOCK"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.CAMERA"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.RECORD_AUDIO"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.MODIFY_AUDIO_SETTINGS"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.WRITE_EXTERNAL_STORAGE"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.VIBRATE"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.BLUETOOTH"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.SYSTEM_ALERT_WINDOW"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("您在 "),t("strong",[s._v("AndroidManifest")]),s._v(" 中进行权限配置时，请确保您能够获得打开摄像头、音视频录制等相关权限。")])]),s._v(" "),t("h2",{attrs:{id:"设置混淆规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置混淆规则"}},[s._v("#")]),s._v(" 设置混淆规则")]),s._v(" "),t("p",[s._v("在 "),t("strong",[s._v("proguard-rules.pro")]),s._v(" 文件，将 JC SDK 相关类加入不混淆名单。")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dontwarn com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("juphoon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("*\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("juphoon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//底层sdk")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dontwarn com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("justalk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("*\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("justalk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keepattributes "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InnerClasses")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("keep "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("R")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);