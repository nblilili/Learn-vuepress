---
title: 一分钟集成 SDK
---
# 一分钟集成 SDK



## 前提条件

  - Microsoft Visual Studio 2013 或以上版本

  - 支持 Windows 7 或以上版本的 Windows 设备

  - 有效的菊风开发者账号（[免费注册](http:///developer.juphoon.com/signup) ）

  - 有效的菊风 [AppKey](https://developer.juphoon.com/cn/document/V2.1/create-application.php)





## 创建 WPF 项目

参考以下步骤创建一个 Winform 项目。若已有 Winform 项目，可以直接查看集成 SDK。

  - 在【开始】窗口上，选择【创建新项目】 。

  - 在【创建新项目】屏幕上，搜索【WPF】，选择【WPF 应用(.NET Core)】，然后选择【下一步】 。

  - 在下一个界面中，为项目指定名称【项目名称】，然后选择【创建】。





## 集成 SDK

1.  将 bin 目录中的 zmfmanaged.dll, zmf.dll, Newtonsoft.Json.dll,
    mtcwrap.dll, mtcmanaged.dll, mtc.dll, jssmme.dll, JCSDK.dll,
    bzip2.dll 等九个文件放到应用程序 `../bin/Debug/` 下。（这是默认路径）

2.  点击【项目】\>【添加引用】–\>【浏览】–\>【选择dll放置路径】后点击“确定”。

3.  确认输出路径与 dll 库所在文件夹一致。

![../../../../\_images/windows\_5.png](../../../../_images/windows_5.png)

编译成功则完成集成内容。











[Next
](../C++/index.html "快速入门")
[
Previous](00_run_demo.html "一分钟跑通 Demo")



-----



© Copyright 2020 宁波菊风系统软件有限公司



Built with [Sphinx](http://sphinx-doc.org/) using a
[theme](https://github.com/rtfd/sphinx_rtd_theme) provided by [Read the
Docs](https://readthedocs.org).








