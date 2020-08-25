---
title:  平台概述
---
# 平台概述

欢迎来到菊风云平台！

菊风云为开发者提供专业稳定的实时音视频通信云服务。开发者通过集成 Juphoon Cloud SDK(JC SDK)，即可轻松快速实现全行业多场景应用，应用领域覆盖社交、直播、教育、智能硬件、金融、医疗、政企、会议、呼叫中心等。

JC SDK 在音视频编解码、图像处理、回声消除等方面具有独特的技术优势，为开发者带来高清流畅的通话体验的同时，极大简化了音视频会话应用开发的研发过程。开发者只需调用相应的 API，便能快速开发具有优异性能的音视频应用。

在这里您将学习如何集成 JC SDK。让我们开启音视频集成开发之旅吧！

Juphoon Cloud SDK (JC SDK) - Usable, Simple, Elegent !

## SDK 产品

| 产品         | 实现功能                    | 描述                                                         |
| :----------- | :-------------------------- | :----------------------------------------------------------- |
| 语音通话 SDK | 一对一语音通话 多方语音通话 | 消回声、强降噪，适配纯音频场景应用                           |
| 视频通话 SDK | 一对一视频通话 多方视频通话 | 高清视频，智能降噪，包含语音和视频功能                       |
| 互动直播 SDK | 语音互动直播 视频互动直播   | 低延时，高并发，高清音视频实时连麦互动，可搭配弹幕等各种直播消息应用 |
| 录制插件     | 云端录制 本地服务端录制     | 同步记录音视频通话、直播过程中的音频及视频，可选择音频、视频或音视频录制 |

## SDK 集成流程

SDK 集成流程如下图所示

![img](https://developer.juphoon.com/style/images/document/index/sdkflow@2x.png)

您需要先注册菊风开发者账号，然后创建应用获取 AppKey，AppKey 是应用在 菊风云平台 中的唯一标识。在初始化 SDK 的时候会使用。

创建应用后，您可以进行应用的相关配置，如推送配置。应用创建完成后即可下载 SDK，进行 SDK 的配置以及初始化。所有的业务都需要在登录状态下才能进行，因此需要首先集成登录，然后在进行业务的集成。