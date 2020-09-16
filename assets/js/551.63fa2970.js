(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1033:function(t,a,s){"use strict";s.r(a);var e=s(29),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"prepare-the-development-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-development-environment"}},[t._v("#")]),t._v(" Prepare the Development Environment")]),t._v(" "),s("p",[t._v("This chapter will introduce how to integrate the SDK into a project you\ncreated.")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Android SDK API level 16 or above")])]),t._v(" "),s("li",[s("p",[t._v("Android Studio 3.5 and above")])]),t._v(" "),s("li",[s("p",[t._v("Supports mobile devices with Android 4.1 or above")])]),t._v(" "),s("li",[s("p",[t._v("Effective Juphoon Developer Account ("),s("a",{attrs:{href:"http://developer.juphoon.com/signup",target:"_blank",rel:"noopener noreferrer"}},[t._v("free sign\nup"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("Efficient Juphoon "),s("a",{attrs:{href:"/cn/document/V2.1/create-application.php"}},[t._v("AppKey")])])])]),t._v(" "),s("h2",{attrs:{id:"create-an-android-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-android-project"}},[t._v("#")]),t._v(" Create an Android project")]),t._v(" "),s("p",[t._v("Follow the steps below to create an Android project. If you already have\nan Android project, you can directly check the step of integrating JC\nSDK.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Follow the steps below to create an Android project. If you already\nhave an Android project, you can directly check the step of\nintegrating JC SDK.")])]),t._v(" "),s("li",[s("p",[t._v("On the Select a Project Template interface, select Phone and\nTablet\\Empty Activity, and then click Next.")])]),t._v(" "),s("li",[s("p",[t._v("On the Configure Your Project interface, fill in the following in\norder:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Name: The name of your Android project, such as HelloJuphoon")])]),t._v(" "),s("li",[s("p",[t._v("Package name: The name of your project package, such as\nio.helloJuphoon.")])]),t._v(" "),s("li",[s("p",[t._v("Save location: the storage path of the project")])]),t._v(" "),s("li",[s("p",[t._v("Language: the programming language of the project, such as\nJava")])]),t._v(" "),s("li",[s("p",[t._v("Minimum API level: The minimum API level of the project")])])])]),t._v(" "),s("li",[s("p",[t._v("Then click Finish. Follow the on-screen instructions to install\nplug-ins that may be required.")])])]),t._v(" "),s("h2",{attrs:{id:"integrate-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-sdk"}},[t._v("#")]),t._v(" Integrate SDK")]),t._v(" "),s("p",[t._v("You can integrate the JC SDK in one of two ways:")]),t._v(" "),s("h3",{attrs:{id:"method-1-use-jcenter-to-automatically-integrate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-1-use-jcenter-to-automatically-integrate"}},[t._v("#")]),t._v(" Method 1: Use JCenter to automatically integrate")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This method is only applicable to JC SDK integration of version 2.1 and\nabove.")])]),t._v(" "),s("p",[t._v("In the "),s("code",[t._v("/app/build.gradle")]),t._v(" file of the project, add the following line:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ndependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The latest version number can be obtained through JC SDK release instructions")]),t._v("\n    implementation "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.JuphoonCloud:JC-SDK:2.1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"method-2-manually-import-jc-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-2-manually-import-jc-sdk"}},[t._v("#")]),t._v(" Method 2: Manually import JC SDK")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"/portal/cn/downloadsdk/download_sdk.php?filename=JC-SDK-Android-V2_1.tar.gz"}},[t._v("Download JC\nSDK")]),t._v("\nand unpack it.")])]),t._v(" "),s("li",[s("p",[t._v("Copy "),s("code",[t._v("arm64-v8a")]),t._v(" , "),s("code",[t._v("armeabi-v7a")]),t._v(" , "),s("code",[t._v("x86")]),t._v(" , "),s("code",[t._v("x86_64")]),t._v(" , "),s("code",[t._v("JCSDK.jar")]),t._v(" ,\n"),s("code",[t._v("mtc.jar")]),t._v(" , and "),s("code",[t._v("zmf.jar")]),t._v(" in the "),s("code",[t._v("libs")]),t._v(" folder to the libs directory\nin your project directory.")])]),t._v(" "),s("li",[s("p",[t._v("To make sure you can connect to the "),s("code",[t._v("so")]),t._v(" library, you need to add\nSettings in the build.Gradle of your module:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("sourceSets "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    main "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        jniLibs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcDirs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'libs’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"add-project-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-project-permissions"}},[t._v("#")]),t._v(" Add project permissions")]),t._v(" "),s("p",[t._v("According to the needs of scenarios, add the following line in the\n"),s("code",[t._v("/app/src/main/AndroidManifest.xml")]),t._v(" file to obtain the corresponding\ndevice permissions:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("feature android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.hardware.camera"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("feature android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.hardware.camera.autofocus"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.INTERNET"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.ACCESS_NETWORK_STATE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.ACCESS_WIFI_STATE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.READ_PHONE_STATE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.WAKE_LOCK"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.CAMERA"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.RECORD_AUDIO"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.MODIFY_AUDIO_SETTINGS"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.WRITE_EXTERNAL_STORAGE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.VIBRATE"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.BLUETOOTH"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("permission android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.permission.SYSTEM_ALERT_WINDOW"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When you configure permissions in AndroidManifest, please make sure that\nyou can get permission to open the camera, audio and video recording and\nother related permissions.")])]),t._v(" "),s("h2",{attrs:{id:"set-obfuscation-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-obfuscation-rules"}},[t._v("#")]),t._v(" Set obfuscation rules")]),t._v(" "),s("p",[t._v("Add the related classes of JC SDK to the unobfuscated list in the\nproguard-rules.pro file:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dontwarn com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("juphoon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keep "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("juphoon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bottom layer sdk")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dontwarn com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("justalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keep "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("justalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keepattributes "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerClasses")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keep "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);