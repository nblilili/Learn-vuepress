---
title: Prepare the Development Environment
---
# Prepare the Development Environment

This chapter will introduce how to integrate the SDK into a project you
created.

## Prerequisites

- Android SDK API level 16 or above

- Android Studio 3.5 and above

- Supports mobile devices with Android 4.1 or above

- Effective Juphoon Developer Account ([free sign
    up](http://developer.juphoon.com/signup))

- Efficient Juphoon [AppKey](https://developer.juphoon.com/cn/document/V2.1/create-application.php)

## Create an Android project

Follow the steps below to create an Android project. If you already have
an Android project, you can directly check the step of integrating JC
SDK.

1. Follow the steps below to create an Android project. If you already
    have an Android project, you can directly check the step of
    integrating JC SDK.

2. On the Select a Project Template interface, select Phone and
    Tablet\Empty Activity, and then click Next.

3. On the Configure Your Project interface, fill in the following in
    order:

      - Name: The name of your Android project, such as HelloJuphoon

      - Package name: The name of your project package, such as
        io.helloJuphoon.

      - Save location: the storage path of the project

      - Language: the programming language of the project, such as
        Java

      - Minimum API level: The minimum API level of the project

4. Then click Finish. Follow the on-screen instructions to install
    plug-ins that may be required.

## Integrate SDK

You can integrate the JC SDK in one of two ways:

### Method 1: Use JCenter to automatically integrate

::: tip

This method is only applicable to JC SDK integration of version 2.1 and
above.

:::

In the `/app/build.gradle` file of the project, add the following line:

``````java
...
dependencies {
    ...
    // The latest version number can be obtained through JC SDK release instructions
    implementation 'com.JuphoonCloud:JC-SDK:2.1'
}
``````

### Method 2: Manually import JC SDK

1. [Download JC
    SDK](https://developer.juphoon.com/portal/cn/downloadsdk/download_sdk.php?filename=JC-SDK-Android-V2_1.tar.gz)
    and unpack it.

2. Copy `arm64-v8a` , `armeabi-v7a` , `x86` , `x86_64` , `JCSDK.jar` ,
    `mtc.jar` , and `zmf.jar` in the `libs` folder to the libs directory
    in your project directory.

3. To make sure you can connect to the `so` library, you need to add
    Settings in the build.Gradle of your module:

    ``````java
    sourceSets {
        main {
            jniLibs.srcDirs = ['libs’]
        }
    }
    ``````

## Add project permissions

According to the needs of scenarios, add the following line in the
`/app/src/main/AndroidManifest.xml` file to obtain the corresponding
device permissions:

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

When you configure permissions in AndroidManifest, please make sure that
you can get permission to open the camera, audio and video recording and
other related permissions.

:::

## Set obfuscation rules

Add the related classes of JC SDK to the unobfuscated list in the
proguard-rules.pro file:

``````java
-dontwarn com.juphoon.*
-keep class com.juphoon.**{*;}
// bottom layer sdk
-dontwarn com.justalk.*
-keep class com.justalk.**{*;}
-keepattributes InnerClasses
-keep class **.R$* {*;}
``````
