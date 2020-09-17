---
title: 一分钟集成 SDK
---
# 一分钟集成 SDK

本章将介绍如何将 JC SDK 集成到您自己创建的项目中。

## 前提条件

- Android SDK API 等级 16 或以上

- Android Studio 3.5及以上版本

- 支持 Android 4.1 或以上版本的移动设备

- 有效的菊风开发者账号（[免费注册](http://developer.juphoon.com/signup) ）

- 有效的菊风 [AppKey](../../../juphoon_platform/03_console_description/03_应用管理.md)

## 创建 Android 项目

参考以下步骤创建一个 Android 项目。若已有 Android 项目，可以直接查看【集成 SDK】。

- 打开 **Android Studio**，点击 **Start a new Android Studio project**。

- 在 **Select a Project Template** 界面，选择 **Phone and Tablet \Empty
    Activity**，然后点击 **Next**。

- 在 **Configure Your Project** 界面，依次填入以下内容：

  - **Name**：您的 Android 项目名称，如 HelloJuphoon。

  - **Package name**：您的项目包的名称，如 io.helloJuphoon。

  - **Save location**：项目的存储路径

  - **Language**：项目的编程语言，如 Java

  - **Minimum API level**：项目的最低 API 等级

- 然后点击 **Finish**。根据屏幕提示，安装可能需要的插件。

## 集成 SDK

您可以通过以下两种方式中任意一种集成 JC SDK：

### 方法一：使用 JCenter 自动集成

::: tip

该方法仅适用于 2.1 及以上版本的 JC SDK 集成。

:::

在项目的 **/app/build.gradle** 文件中，添加如下行：

``````java
...
dependencies {
    ...
    // 可通过 JC SDK 发版说明取得最新版本号
    implementation 'com.JuphoonCloud:JC-SDK:2.1'
}
``````

### 方法二：手动导入 JC SDK

1. [下载 JC
    SDK](https://developer.juphoon.com/portal/cn/downloadsdk/download_sdk.php?filename=JC-SDK-Android-V2_1.tar.gz)
    并解压。

2. 拷贝 libs 文件夹内的 **arm64-v8a、armeabi-v7a、x86、x86\_64、JCSDK.jar、mtc.jar
    和 zmf.jar** 到您工程目录中的 **libs** 目录下。

3. 为确保能够连接到 **so 库**，需要在 **module** 的 **build.gradle** 中添加设置:

    ``````java
    sourceSets {
        main {
            jniLibs.srcDirs = ['libs’]
        }
    }
    ``````

## 添加项目权限

根据场景需要，在 **/app/src/main/AndroidManifest.xml** 文件中添加如下行，获取相应的设备权限：

``````java
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.VIBRATE"/>
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
``````

::: tip

您在 **AndroidManifest** 中进行权限配置时，请确保您能够获得打开摄像头、音视频录制等相关权限。

:::

## 设置混淆规则

在 **proguard-rules.pro** 文件，将 JC SDK 相关类加入不混淆名单。

``````java
-dontwarn com.juphoon.*
-keep class com.juphoon.**{*;}
//底层sdk
-dontwarn com.justalk.*
-keep class com.justalk.**{*;}
-keepattributes InnerClasses
-keep class **.R$* {*;}
``````
