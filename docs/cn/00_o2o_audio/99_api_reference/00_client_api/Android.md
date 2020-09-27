---
title: 客户端 API
---
# 客户端 API

## 概览

- [JCClient](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html) 类用于初始化sdk以及登录 Juphoon Cloud 平台
- [JCClientCallback](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_client_callback.html) 用于回调登录相关事件
- [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html) 类用于管理设备
- [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_device_callback.html) 用于回调设备相关事件
- [JCCall](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html) 类用于管理一对一通话
- [JCCallCallback](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_call_callback.html) 用于回调一对一通话相关事件
- [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html) 类用于管理媒体频道
- [JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html) 用于回调媒体频道相关事件

## 登录管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#a52b98d4205d6982b4824315e0a8af3b9) | 创建 [JCClient](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#abd2650179703143c962702443a844ab0) | 销毁 [JCClient](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html) 对象 |
| [getAppkey](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#aa1c8cc260d41c28c02d30cc4e333f650) | 获取Appkey                                                   |
| [setDisplayName](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#a8555e9f1e2c67bd813c5cbf28ec24c78) | 设置昵称                                                     |
| [getDisplayName](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#a2bee19ad81ecdd45585a33afe5ba19e8) | 获取昵称                                                     |
| [setForeground](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#ac46c21831cafc985e09b2555363c1b75) | 设置是否为前台                                               |
| [getUserId](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#a5882f7356ba93b8413b9b8654973cca6) | 获得用户标识                                                 |
| [getServerAddress](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#a49f7f20bd91ae9534bd7ca9d67f89efb) | 获取登录服务器地址                                           |
| [getState](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#a9662a6f13921508ebefa58b0d684f6cd) | 获取当前状态                                                 |
| [getCreateParam](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#a472dce74c754f48b5f1438889ec4ecf1) | 获取创建参数                                                 |
| [getLoginParam](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#afc8322301e634ad964780c75683c92fe) | 获取登录参数                                                 |
| [login](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#a50016ca73cd0dacf5c26aafc5839260f) | 登录 Juphoon Cloud 平台                                      |
| [logout](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_client.html#aba212cd8810310f5cc43303c14501b7a) | 登出 Juphoon Cloud 平台                                      |
| setServerUid                                                 | 设置自己在服务器上的 uid                                     |
| getServerUid                                                 | 获取自己在服务器上的 uid                                     |

## 登录事件

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [onLogin](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_client_callback.html#a140787dfdb6fe710bb346af98c84a88f) | 登录结果回调     |
| [onLogout](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_client_callback.html#a72ef9659ee44469d1925b03700a9fc98) | 登出回调         |
| [onClientStateChange](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_client_callback.html#a28cc841ad49d3e41884d7079baaa8a77) | 登录状态变化通知 |

## 设备管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#aedb95a1069976d111da0c715535287eb) | 创建 [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a4bc101745ce305aba24bb9fefb13342d) | 销毁 [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html) 对象 |
| [isCameraOpen](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#aca69570135f6e2d983794b437d4b7b4b) | 摄像头是否已打开                                             |
| [isSpeakerOn](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a0922f59b37870f25861b78fbe72f3c02) | 扬声器是否已打开                                             |
| [getCamera](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a364a8db444d8e267a3c261c371bc54fc) | 获取当前的摄像头                                             |
| [getCameras](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a86a6f96e2d32c3b2058395a72883f765) | 获取摄像头列表                                               |
| [startCameraVideo](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a4c2bfbf3c089bcbb2f0ded6e7eb825d6) | 开始自身视频渲染                                             |
| [startVideo](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#ade176f00edb42e33280a1cbf676a9711) | 开始其他端的视频渲染                                         |
| [stopVideo](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a559b5d7aa44004ad51e0c347f7626909) | 停止视频渲染                                                 |
| [isAudioStart](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#ac90d6b4be17b00f75fea098a724d0e79) | 音频是否已打开                                               |
| [startAudio](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#aeed4180a139e0edfbe0f863e2f7732ba) | 启动音频                                                     |
| [stopAudio](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a17a76db85f30b9c626ce6f47346afe4a) | 停止音频                                                     |
| [startCamera](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#af813173c47ba5b29d211055a4bbae373) | 开启摄像头                                                   |
| [stopCamera](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#abe5008eb8df6e96da8768ca3f3a6375f) | 关闭摄像头                                                   |
| [switchCamera](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#ae3b326d8c27277b9585a3c30261f0cdd) | 切换摄像头                                                   |
| [switchCamera2](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#afa8014e225de94e664524e242aea874a) | 切换摄像头(指定摄像头)                                       |
| [setCameraProperty](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a624652da47592d62ee0e5cd78f44da5d) | 设置摄像头采集属性                                           |
| [setScreenCaptureProperty](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a32122b568bcec8c43d73e978af552bb2) | 设置屏幕共享采集属性                                         |
| [getCameraType](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#ac5f57524e04e90717906335448d6ec38) | 获得摄像头类型                                               |
| [enableSpeaker](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a658f0984fe833bb94e32fb8dde4ba514) | 开启关闭扬声器                                               |
| [isVideoFileOpen](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a85b6f05b1aae9c82be0755057222911c) | 文件视频源是否已开启                                         |
| [getVideoFileId](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a537459a89752968e857665147567c149) | 获取文件视频源渲染id                                         |
| [startVideoFile](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a18e9ff72e541e04598ee5eb88608da18) | 开启视频文件作为视频输入源                                   |
| [setVideoFileFrame](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a842314f714ab2c20994069af48909e0e) | 逐帧采集视频画面                                             |
| [stopVideoFile](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#ab207e92a4cfd48ad009930e579024629) | 关闭逐帧采集画面                                             |
| [getAudioRouteType](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a9d601d607fbf27f44b53708696587d9f) | 音频路由类型                                                 |
| [setVideoAngle](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a508da59a475ec6cbc9ce196ea2a32a93) | 设置视频窗体角度                                             |
| [getVideoAngle](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_device.html#a9d3d6cdbcda87c083909bdead4ca3483) | 获取视频窗体角度                                             |
| enableScreenCapture                                          | 开启/关闭屏幕采集                                            |

## 设备事件

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [onCameraUpdate](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_device_callback.html#a320c02b007d3ff85f4092ff3f4f17ff9) | 摄像头变化       |
| [onAudioOutputTypeChange](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_device_callback.html#a26c6eb600205acfa9d19f49861b4071d) | 音频输出类型变化 |
| [onRenderReceived](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_device_callback.html#ae8c06ac300131fea7d92a293def83301) | 收到第一帧数据   |
| [onRenderStart](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_device_callback.html#acccaa420def78f673f7abb1439aec221) | 渲染开始         |

## 一对一通话管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#ada1487c4d60e230342e5ec6d8fed9336) | 创建 [JCCall](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a0138f52e1b9269ba6e0d632413de8f3c) | 销毁 [JCCall](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html) 对象 |
| [call](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a59d130b9ceee810c6b805db53a78c9c4) | 发起一对一呼叫                                               |
| [term](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#aa2344dec3c7546baf03cd32df50e9a74) | 挂断                                                         |
| [answer](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#ad9dca9006e45ac4109c59fa3967c3a06) | 接听                                                         |
| [mute](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a9cfb5674a2012aad7bfe51a10adaa45e) | 静音                                                         |
| [hold](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#aaa0a30ccc4a44efa60c6b3df1f6f5d6f) | 呼叫保持                                                     |
| [audioRecord](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a294f97208c03c03b4c874814d6dc871c) | 语音通话录音                                                 |
| [videoRecord](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a9fc85c75eae30fd8bea7f988b29057c0) | 视频通话录制                                                 |
| [becomeActive](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a3ed0b6599df2ef8f6b8f9d1f0d6e7d16) | 切换活跃通话                                                 |
| [enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a9ba40ec3d7405b52c0a3f4efa211955a) | 开启关闭视频流发送                                           |
| [getCallItems](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a1538ccb7589d23797ab747d735b5b049) | 获得通话对象列表                                             |
| [getActiveCallItem](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a25d16f56b68f8dabc722fae64a27f78f) | 获得当前活跃的通话                                           |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#ac03e15ed27a4e81864fec517828d17d2) | 通过通话建立的通道发送数据                                   |
| [getStatistics](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a908ee5e65cf4aac3248684893ffbc004) | 获得当前通话统计信息                                         |
| [updateMediaConfig](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a1b818d9210a07b6e65ac9fd2b287b6ea) | 更新媒体参数                                                 |
| [getMediaConfig](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a7fee892082a244cfea907537fb31ad38) | 获得当前的媒体参数                                           |
| [sendDtmf](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_call.html#a2616d70a6d3a8469bafc24b37960e4a5) | 发送DTMF信息                                                 |

## 一对一通话事件

| 事件                                                         | 描述                     |
| ------------------------------------------------------------ | ------------------------ |
| [onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_call_callback.html#af5561939aa3961e2a425151ba398f600) | 新增通话回调             |
| [onCallItemRemove](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_call_callback.html#a323ce4ac238fca2822d7f4bab9f8747e) | 移除通话回调             |
| [onCallItemUpdate](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_call_callback.html#a9e0fa5b37577616b1171eb07a151193d) | 通话状态更新回调         |
| [onMessageReceive](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_call_callback.html#a0474d1a84a7306e491f2cb20ec586d4d) | 通话中收到消息的回调     |
| [onMissedCallItem](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_call_callback.html#a56e5445b186863088bd640be11976c80) | 上报服务器拉取的未接来电 |
| [onDtmfReceived](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_call_callback.html#a37fbe0bc16344976fc394efc3d56c97e) | 通话中收到DTMF回调       |

## 频道管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a4011cabb7d8a04776881b8a9ed03fce7) | 创建 [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#af4f8a14e25e6c79dadb67a6b72cabf6f) | 销毁 [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html) 对象 |
| [getChannelUri](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a4cb63365a467413868595b33946505ee) | 获得频道 Uri                                                 |
| [getChannelId](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a796ec035329a92aa84f62cdd359d44b3) | 获得频道标识                                                 |
| [getPassword](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#adc32f5f1a9a3251eb11bc7526295c5df) | 获得频道密码                                                 |
| [getChannelNumber](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a8599c2181a85b41fe49b71284cf3880e) | 获得频道号                                                   |
| [getTitle](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ad16f78b3de772d0078173101591868d8) | 返回频道标题                                                 |
| [getState](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a97dc748fd942467b394d46639b50a776) | 返回当前在频道中的状态                                       |
| [getParticipants](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a10bdacf1ca905fa2c283c04b5fab3f39) | 获得所有频道中的成员                                         |
| [getUploadLocalAudio](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ac039ae9624b0a5c15645781d4bd75553) | 获取本地音频数据是否在上传                                   |
| [getUploadLocalVideo](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ab7eba61b4d7fb52d7250452c0cef4601) | 获取本地视频数据是否在上传                                   |
| [getAudioOutput](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a118e22e49ff5a04e88522eca56b2f380) | 获取音频是否输出                                             |
| [getScreenRenderId](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a448443adb1c29fad33e304c0e8e5af50) | 获取屏幕共享渲染标识                                         |
| [getScreenUserId](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#adac01b6b6140b6559c09dd8c3dc7191d) | 获取开启屏幕共享的用户标识                                   |
| [getRecordState](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#af0532c8e2afa5798b6485ac12d96eb86) | 获取视频录制状态                                             |
| [getCdnState](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ad494e4539b6265cf625c350c98bf186a) | 获得cdn推流状态                                              |
| [query](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a36951e9695e252e544896a97406a838e) | 查询频道相关信息                                             |
| [join](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ad8914349661b483beb573152f63023b8) | 加入频道                                                     |
| [leave](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#aaa09df96d8b8806a19fb98c9f5045523) | 离开频道                                                     |
| [stop](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a062142b17504c0993c9fe9937e1e0ed8) | 关闭频道                                                     |
| [enableUploadAudioStream](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a4df8d6b57b14428f727dd719f8c30bff) | 开启关闭发送本地音频流                                       |
| [enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a73b8a3acd6409aa02f43a6a765f90ee4) | 开启关闭发送本地视频流                                       |
| [enableAudioOutput](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ac93ccca58d367e299181a9388fd06d80) | 开启关闭音频输出                                             |
| [requestVideo](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ab400bef1ce7e434857125a4aa3957924) | 请求频道中其他用户的视频流                                   |
| [requestScreenVideo](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ab500ef3741521174c78c3b2c50577e11) | 请求屏幕共享的视频流                                         |
| [enableCdn](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#aebff7256b3931e9652d19ce1d0f8f354) | 开关Cdn推流                                                  |
| [enableRecord](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#acc6118d7b4837d036bb2ed42740fcd37) | 开关视频录制                                                 |
| [enableScreenShare](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a9a9bae0925b37c2194325b9a8652c8ff) | 开关屏幕分享                                                 |
| [getParticipant](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a94a05630b4e884eced2518eef877c3a9) | 获取频道成员                                                 |
| [getStatistics](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#af95ae9bc5f9c45a2ddee7e660fe7c68d) | 获取统计信息                                                 |
| [setCustomProperty](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ab76130e76d177155d6334119d5eb0352) | 设置频道自定义属性                                           |
| [getCustomProperty](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a0c31f762b0a0de25067e7a5de553401f) | 获取自定义频道属性                                           |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a9dad808ba5781679ba39e07cf7b01ec8) | 发送消息                                                     |
| [sendCommand](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a98b49d5681acefb36f807ee7f06f6790) | 发送指令                                                     |
| [inviteSipUser](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a4d1aae53d998cf56d1a1559559c70cce) | 邀请Sip用户                                                  |
| [setCustomRole](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a933724c3410df611bb703e56a496f705) | 设置自定义角色                                               |
| [getCustomRole](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#ad429771ea3720e2bdede8f64496558d0) | 获得自定义角色                                               |
| [setCustomState](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a120469f39303cd0e643c1ed6e924276c) | 设置自定义状态                                               |
| [getCustomState](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#aa3ffba25949c5ba2bd433d569d619bbb) | 获得自定义状态                                               |
| [kick](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a2c722abe8538208cc5f22f6c8b282b53) | 将成员踢出会议                                               |
| [sendCommandToDelivery](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a7301aa1cf6f31fba8d00b33604588e6c) | 发送命令给推流或录制器                                       |
| [enableSelfVideoRatio](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#adebb10cae13d0896743c664f79010948) | 设置自身视频宽高比                                           |
| [startScreenShareVideo](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a1b4551ab4d4e9b5910619fb3580e77f4) | 启动屏幕分享视频渲染                                         |
| [stopScreenShareVideo](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a60b3dabb43a7384de3a29d966757bd4c) | 停止屏幕分享视频渲染                                         |
| [getSelfParticipant](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel.html#a5d590ba6e057177608d063381e70dc0b) | 获得自身 [JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.3/Android/classcom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_participant.html) 对象 |

## 频道事件

| 事件                                                         | 描述                    |
| ------------------------------------------------------------ | ----------------------- |
| [onMediaChannelStateChange](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#a449d20d84531222a3a142784832dc8ce) | 自身状态变化回调        |
| [onMediaChannelPropertyChange](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#af3daf76ff45ad17429a6368635f58ada) | 属性变化回调            |
| [onJoin](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#a1140260778c295fb4ef221d1f5628547) | 加入频道结果回调        |
| [onLeave](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#a401e65e86af16582226270c10dcd68e6) | 离开频道结果回调        |
| [onStop](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#a828fbbf024c39568ae41b1bf4471023b) | 解散频道结果回调        |
| [onQuery](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#a7a1c787a810c33a9c9dd989280456e89) | 查询频道信息结果回调    |
| [onParticipantJoin](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#ad6ec3fda93775f7ea6da4b616d47a903) | 新成员加入回调          |
| [onParticipantLeft](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#aab3b68a6cf75c96ca94a7434b675eb6a) | 成员离开回调            |
| [onParticipantUpdate](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#a4537db9e65ece9322b5a89ccab087ac8) | 成员更新回调            |
| [onMessageReceive](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#afdb30c050d271605b14fab9b63ee63c4) | 接收频道消息的回调      |
| [onInviteSipUserResult](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#aaae8ac9c5070f247b07c3b3880e8ed17) | 邀请Sip用户操作结果回调 |
| [onParticipantVolumeChange](https://developer.juphoon.com/portal/reference/V2.3/Android/interfacecom_1_1juphoon_1_1cloud_1_1_j_c_media_channel_callback.html#a16680913fe7305b850286d9cbeb4d18f) | 成员声音变化            |