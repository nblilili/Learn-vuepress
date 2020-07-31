---
title: 一分钟集成 SDK
---
# 一分钟集成 SDK

本章将介绍如何将 SDK 集成到您自己创建的项目中。



## 前提条件

  - Microsoft Visual Studio 2013 或以上版本

  - 支持 Windows 7 或以上版本的 Windows 设备

  - 有效的菊风开发者账号（[免费注册](http:///developer.juphoon.com/signup) ）

  - 有效的菊风 [AppKey](https://developer.juphoon.com/cn/document/V2.1/create-application.php)





## 创建 Windows 项目

参考以下步骤创建一个 Windows 项目。若已有 Windows 项目，可以直接查看集成 SDK。

  - 打开 **Microsoft Visual Studio** 并点击新建项目。

  - 进入 **新建项目** 窗口，选择项目类型为 **MFC 应用程序**，输入项目名称，选择项目存储路径，并点击 **确认**。

  - 进入 **MFC 应用程序** 窗口，选择应用程序类型为 **基于对话框**，并点击完成。





## 集成 SDK

**1. 拷贝 SDK**

将下载的 SDK 文件夹复制到你的项目文件夹下，SDK 中包含 include 和 x86 两个文件夹。

其中， x86 中的目录中包含
`JCSDK.lib，mtcdll.lib，zmfdii.lib，bzip2.dll，JCSDK.dll，jssmme.dll，mtc.dll，zmf.dll`
八个文件。

**2. 配置项目属性**

在 **解决方案资源管理器** 窗口中，右击项目名称并点击属性进行以下配置，配置完成后点击确定。

进入 **C/C++ \> 常规 \> 附加包含目录** 菜单，点击 **编辑**，并在弹出窗口中输入 ../SDK/include。

进入 **链接器 \> 常规 \> 附加库目录** 菜单，点击 **编辑**，并在弹出窗口中输入 ../SDK/x86。



Note

SDK 路径为相对路径，开发者需要根据 SDK 实际存放的路径进行调整。













[Next
](../../04_basic_func/index.html "多方语音通话")
[
Previous](00_run_demo.html "一分钟跑通 Demo")



-----



© Copyright 2020 宁波菊风系统软件有限公司



Built with [Sphinx](http://sphinx-doc.org/) using a
[theme](https://github.com/rtfd/sphinx_rtd_theme) provided by [Read the
Docs](https://readthedocs.org).








