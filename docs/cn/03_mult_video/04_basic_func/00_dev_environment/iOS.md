---
title: 准备开发环境
---
# 准备开发环境

本章将介绍如何将 SDK 集成到您自己创建的项目中。

## 前提条件

- 支持 iOS 8.0 或以上版本的 iOS **真机** 设备

- 有效的菊风开发者账号（[免费注册](http://developer.juphoon.com/signup) ）

- 有效的菊风 [AppKey](https://developer.juphoon.com/cn/document/V2.1/create-application.php)

## 创建 iOS 项目

参考以下步骤创建一个 iOS 项目。若已有 iOS 项目，可以直接查看集成 JC SDK。

- 打开 Xcode 并点击 **Create a new Xcode project**。

- 选择项目类型为 **Single View App**，并点击 **Next**。

- 输入项目信息，如项目名称、开发团队信息、组织名称和语言，并点击 **Next**。

::: tip

如果您没有添加过开发团队信息，点击 **Xcode \Preferences… \Accounts**，点击左下角加号并按照屏幕提示登入
Apple ID，完成后即可选择您的账户作为开发团队。

:::

- 选择项目存储路径，并点击 **Create**。

- 进入 **TARGETS \Project Name \Signing & Capabilities** 菜单，勾选
    **Automatically manage signing**。

## 集成 SDK

您可以通过以下三种方式中任意一种集成 JC SDK：

### 方法一：通过 CocoaPods 自动导入静态库

`V2.0` 及以上的版本支持使用 CocoaPods 导入 SDK。 导入前需要安装 CocoaPods 环境，安装方式参照
[CocoaPods 官网](https://cocoapods.org) 。

CocoaPods 环境安装好后，执行以下操作：

1. 打开 Terminal，cd 至项目根目录

2. 执行 pod init，项目文件夹下会生成一个 Podfile 文本文件

3. 执行 open -e Podfile

4. 添加导入配置 `pod 'JuphoonCloudSDK_iOS', '2.1'`

5. 执行 `pod install`，成功安装后，Terminal 中会显示 Pod installation
    complete\!，此时项目文件夹下会生成一个 xcworkspace 文件。

6. 双击打开 `xcworkspace` 文件。

修改后内容如下所示，注意将 Your App 替换为您的 Target 名称：

``````default
platform :ios, '9.0'
#use_frameworks!
target 'Your App' do
pod 'JuphoonCloudSDK_iOS', '2.1'
end
``````

::: tip

`V2.1` 为当前发布的最新版本，关于指定具体版本请参考 [pod
使用规范](https://guides.cocoapods.org/using/the-podfile.html) 。

如果需要更新本地库版本，在执行 pod install 之前执行 pod update 命令。

:::

### 方法二：手动导入静态库

1. 解压并打开下载的 JC SDK 静态库，在 sdk 文件目录下包含 include、lib、JCSDKOC.framework 和
    JCCloudWrapper.framework 四个文件夹。

2. 将 `sdk` 文件夹拷贝到您工程所在的目录下。

3. - 导入 SDK  
        打开 Xcode，进入 TARGETS \Project Name \Build Phases \Link
        Binary with Libraries 菜单，点击 ‘+’ 符号，导入 sdk 文件夹下的
        `JCSDKOC.framework`、lib 文件夹下的 `libmtc.a` 和 `libzmf.a` 文件。

4. - 导入 SDK 依赖的库  
        继续点击 ‘+’ 符号，导入如下系统依赖的库： - AssetsLibrary.framework -
        AudioToolbox.framework - VideoToolBox.framework -
        AVFoundation.framework - CFNetwork.framework -
        CoreMedia.framework - CoreMotion.framework - CoreVideo.framework
        - GLKit.framework - PushKit.framework（推送使用） -
        ReplayKit.framework - Security.framework -
        SystemConfiguration.framework - libc++.tbd - libz.tbd -
        libresolv.tbd

5. - 设置路径  
        点击 ‘Build Settings’，找到 Search Paths，设置 Framework Search Paths
        、Header Search Paths（头文件路径） 和 Library Search Paths（库文件路径）：

          - Framework Search Paths：$(PROJECT\_DIR)/../sdk

          - Header Search Paths：$(PROJECT\_DIR)/../sdk/include

          - Library Search Paths：$(PROJECT\_DIR)/../sdk/lib/ios

        ::: tip

        在完成第 1 步导入 JCSDKOC.framework 和两个 .a 文件后，Xcode 会自动生成该路径，如果 Xcode
        没有自动生成路径，用户要根据 `JCSDKOC.framework` 、`include` 和 `lib`
        文件所在目录，手动设置路径。

6. 设置 Enable Bitcode 为 NO

    进入工程中 Target -\Build Settings -\Enable Bitcode，将此项设置为 NO。

7. 设置 Other Linker Flags 的参数为 -ObjC

    进入工程中的 Target -\Build Settings -\Other Linker Flags，在此项中添加
    -ObjC。

8. 设置预处理宏定义

    点击 ‘Build Settings’，找到 Preprocessor Macros，在右侧输入
    ZPLATFORM=ZPLATFORM\_IOS 。

    **如果设置了 APNs 推送**，则还需要在 Preprocessor Macros 下的 Debug 中输入
    DEBUG，如下图：

    ![../../../../\_images/pushset.png](../../../../_images/pushset.png)

    ::: tip

    DEBUG 宏定义的目的是为了区分推送环境是 release 还是 debug，环境不对会导致推送失败。

    :::

9. 设置 Documentation Comments 为 NO

    点击 ‘Build Settings’，找到 Documentation Comments 并设置为 NO。

10. 设置后台运行模式

    进入工程的 Target -\Signing & Capabilities -\Background
    Modes，勾选如下两项内容:

      - Audio, AirPlay, and Picture in Picture

      - Voice over IP

:::

### 方法三：手动导入动态库

1. 解压并打开下载的 JC SDK 动态库，在 sdk 文件目录下包含 JCSDKOC.framework 文件。

2. 将 `sdk` 文件夹拷贝到您工程所在的目录下。

3. 导入 SDK

    打开 Xcode，进入 TARGETS \Project Name \General，在 “Embedded
    Binaries” 一栏，点击 ‘+’ 符号，然后导入 JCSDK 文件夹下的 JCSDKOC.framework。

4. 导入 SDK 依赖的库

    继续点击 ‘+’ 符号，导入如下系统依赖的库：

      - AssetsLibrary.framework

      - AudioToolbox.framework

      - VideoToolBox.framework

      - AVFoundation.framework

      - CFNetwork.framework

      - CoreMedia.framework

      - CoreMotion.framework

      - CoreVideo.framework

      - GLKit.framework

      - PushKit.framework（推送使用）

      - ReplayKit.framework

      - Security.framework

      - SystemConfiguration.framework

      - libc++.tbd

      - libz.tbd

      - libresolv.tbd

5. 设置路径

    点击 ‘Build Settings’，找到 Search Paths，设置 Framework Search Paths
    、Header Search Paths（头文件路径） 和 Library Search Paths（库文件路径）：

      - Framework Search Paths：$(PROJECT\_DIR)/../sdk

    ::: tip

    在完成第 1 步导入 JCSDKOC.framework 和两个 .a 文件后，Xcode 会自动生成该路径，如果 Xcode
    没有自动生成路径，用户要根据 `JCSDKOC.framework` 文件所在目录，手动设置路径。

    :::

6. 设置 Enable Bitcode 为 NO

    进入工程中 Target -\Build Settings -\Enable Bitcode，将此项设置为 NO。

7. 设置 Other Linker Flags 的参数为 -ObjC

    进入工程中的 Target -\Build Settings -\Other Linker Flags，在此项中添加
    -ObjC。

8. 设置预处理宏定义

    点击 ‘Build Settings’，找到 Preprocessor Macros，在右侧输入
    ZPLATFORM=ZPLATFORM\_IOS 。

    **如果设置了 APNs 推送**，则还需要在 Preprocessor Macros 下的 Debug 中输入
    DEBUG，如下图：

    ![../../../../\_images/pushset.png](../../../../_images/pushset.png)

    ::: tip

    DEBUG 宏定义的目的是为了区分推送环境是 release 还是 debug，环境不对会导致推送失败。

    :::

9. 设置 Documentation Comments 为 NO

    点击 ‘Build Settings’，找到 Documentation Comments 并设置为 NO。

10. 设置后台运行模式

    进入工程的 Target -\Signing & Capabilities -\Background
    Modes，勾选如下两项内容:

      - Audio, AirPlay, and Picture in Picture

      - Voice over IP

## 添加项目权限

音视频通话需要用到摄像头和麦克风权限，请在工程的 info.plist 中添加如下键值:

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
<td><p>使用麦克风的目的，如语音通话。</p></td>
</tr>
<tr class="even">
<td><p>Privacy - Camera Usage Description</p></td>
<td><p>String</p></td>
<td><p>使用摄像头的目的，如视频通话。</p></td>
</tr>
</tbody>
</table>
