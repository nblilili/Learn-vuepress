---
title: Integrate SDK in One Minute
---
# Integrate SDK in One Minute

This chapter will introduce how to integrate the SDK into a project you
created.

## Prerequisites

- Microsoft Visual Studio 2013 or above

- Support Windows 7 or above

- Efficient Juphoon developer account ([free sign
    up](https://developer.juphoon.com/en/signup))

- Efficient Juphoon [AppKey](../../../../cn/juphoon_platform/03_console_description/03_应用管理.md)

## Create a Windows project

Refer to the following steps to create a Windows project. If you already
have a Windows project, you can directly check the integrated SDK:

1. Open **Microsoft Visual Studio** and click new project.

2. Enter the **Create a New Project** window, select the project type
    as **MFC Application**, enter the project name, select the project
    storage path, and click **Confirm**.

3. Enter the **MFC Application** window, select the application type as
    **Dialog based**, and click Finish.

## Integrate SDK

1. Copy SDK

Copy the downloaded SDK folder to your project folder. The SDK contains
include and x86 folders.

Among them, the directory in `x86` contains `JCSDK.lib` ，`mtcdll.lib`
，`zmfdii.lib` ， `bzip2.dll` ，`JCSDK.dll` ， `jssmme.dll` ，`mtc.dll` and
`zmf.dll` .

2. Configure project properties

In the **Solution Explorer** window, right-click the project name and
click \[Property\] to do the following configuration, and click \[OK\]
after the configuration is completed.

Go to **C/C++\> General\> Additional Include Directories** menu, click
**Edit**, and enter ../SDK/include in the pop-up window.

Go to the **Linker\> General\> Additional Library Directories** menu,
click **Edit**, and enter ../SDK/x86 in the pop-up window.

::: tip

The SDK path is a relative path, and developers need to adjust it
according to the path where the SDK is actually stored.

:::
