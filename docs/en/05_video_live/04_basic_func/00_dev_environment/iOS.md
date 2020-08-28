---
title: Prepare the Development Environment
---
# Prepare the Development Environment

This chapter will introduce how to integrate the SDK into a project you
created.

## Prerequisites

- Support iOS 8.0 or above iOS **real device**

- Effective Juphoon Developer Account ([free sign
    up](http://developer.juphoon.com/signup))

- Efficient Juphoon [AppKey](https://developer.juphoon.com/cn/document/V2.1/create-application.php)

## Create an iOS Project

Follow the steps below to create an iOS project. If you have an iOS
project, you can directly check the step of integrating JC SDK.

- Open Xcode and click Create a new Xcode project.

- Select the project type as Single View App and click Next.

- Enter the project information, such as project name, development
    team information, organization name and language, and click Next.

::: tip

If you have not added the information of development team, click Xcode
\Preferences… \Accounts, click the plus sign in the lower left
corner and follow the on-screen prompts to log in your Apple ID. After
that, you can choose your account as the development team.

:::

- Select the project storage path and click Create.

- Connect your iOS device to the computer.

- Go to the TARGETS \Project Name \Signing & Capabilities menu and
    check Automatically manage signing.

## Integrate SDK

You can integrate JC SDK in any of the following three ways:

### Method 1: Automatically import static libraries through CocoaPods

Version 2.0 and above support you to import the SDK through CocoaPods.
Before importing, CocoaPods environment needs to be installed, please
refer to [CocoaPods official](https://cocoapods.org) website for
installation method.

After the CocoaPods environment is installed, take the following steps:

1. Open Terminal, cd to the project root directory.

2. Execute pod init, a Podfile text file will be generated under the
    project folder.

3. Run open -e Podfile.

4. Add import configuration `pod 'JuphoonCloudSDK_iOS', '2.1'` .

5. Execute `pod install` .After successful installation, Pod
    installation complete\! will be displayed in Terminal. At this time,
    an xcworkspace file will be generated under the project folder.

6. Double-click to open the `xcworkspace` file.

The revised content is as follows. Pay attention to replace Your App
with your Target name:

``````default
platform :ios, '9.0'
#use_frameworks!
target 'Your App' do
pod 'JuphoonCloudSDK_iOS', '2.1'
end
``````

::: tip

`Version 2.1` is the latest version currently released, please refer to
the pod specification for the specific version.

If you need to update the local library version, execute the pod update
command before executing pod install.

:::

### Method 2: Manually import static library

1. Unpack and open the downloaded JC SDK static library. The sdk file
    directory consists of four folders including include, lib,
    JCSDKOC.framework and JCCloudWrapper.framework.

2. Copy the `sdk` folder to the directory where your project is
    located.

3. Import SDK

    Open Xcode, go to TARGETS \Project Name \Build Phases \Link
    Binary with Libraries menu, click the ‘+’ symbol, and import
    `JCSDKOC.framework` in the sdk folder and `libmtc.a` and
    `libzmf.a` files in the lib folder.

4. Import SDK dependency library

    Continue to click the ‘+’ symbol to import the following system
    dependency libraries:

      - AssetsLibrary.framework

      - AudioToolbox.framework

      - VideoToolBox.framework

      - AVFoundation.framework

      - CFNetwork.framework

      - CoreMedia.framework

      - CoreMotion.framework

      - CoreVideo.framework

      - GLKit.framework

      - PushKit.framework(used by Push Function)

      - ReplayKit.framework

      - Security.framework

      - SystemConfiguration.framework

      - libc++.tbd

      - libz.tbd

      - libresolv.tbd

5. Set path

    Click ‘Build Settings’, find Search Paths, set Framework Search
    Paths, Header Search Paths (header file path) and Library Search
    Paths (library file path):

      - Framework Search Paths:$(PROJECT\_DIR)/../sdk

      - Header Search Paths:$(PROJECT\_DIR)/../sdk/include

      - Library Search Paths:$(PROJECT\_DIR)/../sdk/lib/ios

    ::: tip

    After importing JCSDKOC.framework and two .a files in Step 1,
    Xcode will automatically generate the path. If Xcode does not
    automatically generate the path, the user should manually set the
    path according to the directory where JCSDKOC.framework, include,
    and lib files are located.

    :::

6. Set Enable Bitcode to NO

    Enter Target \Build Settings \Enable Bitcode in the project
    and set this item to NO.

7. Set the parameters of Other Linker Flags to -ObjC

    Go to Target \Build Settings \Other Linker Flags in the
    project and add -ObjC to this item.

8. Set Preprocessor Macros

    Click ‘Build Settings’, find Preprocessor Macros, and enter
    ZPLATFORM=ZPLATFORM\_IOS on the right.

    If APNs push is set, you also need to enter DEBUG in Debug under
    Preprocessor Macros, as shown below:

    ![../../../../\_images/pushset.png](../../../../_images/pushset.png)

    ::: tip

    The purpose of DEBUG Preprocessor Macros is to distinguish whether
    the push environment is release or debug. If the environment is
    wrong, the push will fail.

    :::

9. Set Documentation Comments to NO

    Click ‘Build Settings’, find Documentation Comments and set to NO.

10. Set the background operation mode

    Enter Target \Signing & Capabilities \Background Modes of the
    project, check the following two items:

      - Audio, AirPlay, and Picture in Picture

      - Voice over IP

### Method 3: Manually import the dynamic library

1. Unpack and open the downloaded JC SDK dynamic library. The sdk file
    directory includes the JCSDKOC.framework file.

2. Copy the `sdk` folder to the directory where your project is
    located.

3. Import SDK

    Open Xcode, go to TARGETS\Project Name\General, click the “+”
    symbol in the “Embedded Binaries” column, and then import
    JCSDKOC.framework under the JCSDK folder.

4. Import SDK dependency library

    Continue to click the ‘+’ symbol to import the following system
    dependency libraries:

      - AssetsLibrary.framework

      - AudioToolbox.framework

      - VideoToolBox.framework

      - AVFoundation.framework

      - CFNetwork.framework

      - CoreMedia.framework

      - CoreMotion.framework

      - CoreVideo.framework

      - GLKit.framework

      - PushKit.framework(used by Push Function)

      - ReplayKit.framework

      - Security.framework

      - SystemConfiguration.framework

      - libc++.tbd

      - libz.tbd

      - libresolv.tbd

5. Set path

    Click ‘Build Settings’, find Search Paths, set Framework Search
    Paths, Header Search Paths (header file path) and Library Search
    Paths (library file path):

      - Framework Search Paths:$(PROJECT\_DIR)/../sdk

    ::: tip

    After importing JCSDKOC.framework and two .a files in step 1,
    Xcode will automatically generate the path. If Xcode does not
    automatically generate the path, the user should manually set the
    path according to the directory where the `JCSDKOC.framework` file
    is located.

    :::

6. Set Enable Bitcode to NO

    Enter Target \Build Settings \Enable Bitcode in the project
    and set this item to NO.

7. Set the parameters of Other Linker Flags to -ObjC

    Go to Target \Build Settings \Other Linker Flags in the
    project and add -ObjC to this item.

8. Set Preprocessor Macros

    Click ‘Build Settings’, find Preprocessor Macros, and enter
    ZPLATFORM=ZPLATFORM\_IOS on the right.

    If APNs push is set, you also need to enter DEBUG in Debug under
    Preprocessor Macros, as shown below:

    ![../../../../\_images/pushset.png](../../../../_images/pushset.png)

    ::: tip

    The purpose of DEBUG Preprocessor Macros is to distinguish whether
    the push environment is release or debug. If the environment is
    wrong, the push will fail.

    :::

9. Set Documentation Comments to NO

    Click ‘Build Settings’, find Documentation Comments and set to NO.

10. Set the background operation mode

    Enter Target \Signing & Capabilities \Background Modes of the
    project, check the following two items:

      - Audio, AirPlay, and Picture in Picture

      - Voice over IP

## Add project permissions

Audio and video calls require camera and microphone permissions. Please
add the following key values in the info.plist of the project:

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Key</p></th>
<th><p>Type</p></th>
<th><p>Value</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Privacy - Microphone Usage Description</p></td>
<td><p>String</p></td>
<td><p>Use the microphone for purposes like voice calls.</p></td>
</tr>
<tr class="even">
<td><p>Privacy - Camera Usage Description</p></td>
<td><p>String</p></td>
<td><p>Use the camera for purposes like video calls.</p></td>
</tr>
</tbody>
</table>
