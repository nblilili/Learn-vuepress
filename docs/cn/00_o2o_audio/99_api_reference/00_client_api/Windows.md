---
title: 客户端 API
---
# 客户端 API

 概览

- [JCClient](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html) 类用于初始化sdk以及登录 Juphoon Cloud 平台
- [JCClientCallback](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client_callback.html) 用于回调登录相关事件
- [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html) 类用于管理媒体设备
- [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device_callback.html) 用于回调媒体设备相关事件
- [JCCall](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html) 类用于管理一对一通话
- [JCCallCallback](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call_callback.html) 用于回调一对一通话相关事件
- [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html) 类用于管理媒体频道
- [JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html) 用于回调媒体频道相关事件
- [JCAccount](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_account_1_1_j_c_account.html) 类用于管理账号
- [JCAccountCallback](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_account_1_1_j_c_account_callback.html) 用于回调账号相关事件
- [JCStorage](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage.html) 类用于管理文件存储
- [JCStorageCallback](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage_callback.html) 用于回调文件存储相关事件
- [JCGroup](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html) 类用于管理群组
- [JCGroupCallback](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html) 用于回调群组相关事件
- [JCMessageChannel](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel.html) 类用于管理消息通道
- [JCMessageChannelCallback](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel_callback.html) 用于回调消息通道相关事件

## 登录管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#acc9ff155cfdb0579add9b87f9d951b58) | 创建 [JCClient](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#a89cf88dca81e5cc7a95218f1d2003cbc) | 销毁 [JCClient](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html) 对象 |
| [login](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#aa8973952c3eb5770ff01decf6e64a446) | 登录 Juphoon Cloud 平台                                      |
| [logout](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#a3b915efa9def2f560b41dec873ca8023) | 登出 Juphoon Cloud 平台                                      |
| [appkey](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#ac81aa6d461226adb64a8218e051b9ec1) | 获取Appkey                                                   |
| [displayName](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#a242ae22a34c4ed31311a0a0aa9da8218) | 设置/获取昵称                                                |
| [userId](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#a1e924fb8225bd48e81a5fe6b999c163c) | 获得用户标识                                                 |
| [serverAddress](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#a5efee3e54dbdf2aaaa2088df7b9b7c14) | 获取登录服务器地址                                           |
| [state](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#a8b114554ece8a6e4e03dd8f91812b802) | 获取当前状态                                                 |
| [createParam](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#a3a725b0b0de9f7fc043c72b1810432ef) | 获取创建参数                                                 |
| [loginParam](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#af730e7b9ebc32dc63ed81b54cb672040) | 获取登录参数                                                 |
| [serverUid](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client.html#ac224bcca52933922cddcf77f8d526259) | 获取自己在服务器上的 uid                                     |

## 登录事件

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [onLogin](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client_callback.html#a1fcb2cca41cc7030e32de7df7c2c35c5) | 登录结果回调     |
| [onLogout](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client_callback.html#a024c5388fdd7fef805d780739a69a16d) | 登出回调         |
| [onClientStateChange](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_client_1_1_j_c_client_callback.html#a85e3361745e1cfc3dcc406161a42642c) | 登录状态变化通知 |

## 设备管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#aff164c84a0268bc6c38891d520af8fb4) | 创建 [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#ac5b0c4dce1b4f120347f076781de5181) | 销毁 [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html) 对象 |
| [startCameraVideo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a77a644fd6e050a762267aa97386cdb71) | 开始自身视频渲染                                             |
| [startVideo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a24254086c972e5268150e0d1b5cb9121) | 开始其他端的视频渲染                                         |
| [stopVideo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a658da30cfd135ae7e96d02621519716b) | 停止视频渲染                                                 |
| [audioStart](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#aa32081a08e88508c6f2faec0fffa7d6c) | 音频是否已打开                                               |
| [startAudio](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a9071a217c42c87c73b148e8039241fb8) | 启动音频                                                     |
| [stopAudio](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a858f82b86963d7a9ce25db60fc539ea1) | 停止音频                                                     |
| [startCamer](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a981aa10325417284d5b48d74a120e0e1) | 开启摄像头                                                   |
| [stopCamera](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a0a3b5626a6f402b9a7627a71140891ed) | 关闭摄像头                                                   |
| [switchCamera](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a6060ab0db34ce874e23b90c3668aa69e) | 切换摄像头                                                   |
| [setCameraProperty](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a679543664b494b362fb05c4de51b3358) | 设置摄像头采集属性                                           |
| [setScreenCaptureProperty](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#ae21e4220ee7f04165162d4f634b49fe0) | 设置屏幕共享采集属性                                         |
| [startVideoFile](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a5742e9679ab121f72c5dfd38f393a2c8) | 开启视频文件作为视频输入源                                   |
| [setVideoFileFrame](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a99994500b2472e67df6dccb26eb3b215) | 逐帧采集视频画面                                             |
| [stopVideoFile](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a6e90dfb83bd635647cab1b11685a0d6f) | 关闭逐帧采集画面                                             |
| [cameraOpen](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a163debf3319df5dddfc26ad4ebb2a151) | 摄像头是否已打开                                             |
| [camera](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a407939ed9968223101768da45cb73408) | 获取当前的摄像头                                             |
| [cameras](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a381d6478637fe8e9a25e726057676628) | 获取摄像头列表                                               |
| [videoFileOpen](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#ab412bd5f61c7a45f99c9ea7bcb7c98c8) | 文件视频源是否已开启                                         |
| [videoFileId](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device.html#a3396cc1def614f95cfa85719c0fa75ea) | 获取文件视频源渲染id                                         |

## 设备事件

| 事件                                                         | 描述           |
| ------------------------------------------------------------ | -------------- |
| [onCameraUpdate](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device_callback.html#a1c301ec3cbb57e73ff0e78de53117aba) | 摄像头变化     |
| [onRenderReceived](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device_callback.html#ac6bb7eb6403213087262fbe0cbe6afad) | 收到第一帧数据 |
| [onRenderStart](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_device_1_1_j_c_media_device_callback.html#a2c3a2e3d1ed65324481999c286c8a8f6) | 渲染开始       |

## 一对一通话管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a7113be647cbbd4d7c257490f5ed30c54) | 创建 [JCCall](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#ad6124f1e16adb8a6c22f486cb9121746) | 销毁 [JCCall](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html) 对象 |
| [call](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#ad85706a0b3f5c3ea8c5978ce653678d9) | 发起一对一呼叫                                               |
| [term](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#ae7d588bb4248d723f23da413bf6997ad) | 挂断                                                         |
| [answer](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a484645bde4791c46bd9d9996744fbd7c) | 接听                                                         |
| [mute](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#af8ecead56f755b7bf9baf1ccf1b23cde) | 静音                                                         |
| [hold](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a29a5e901dd52d7b76eab3c655a4d3606) | 呼叫保持                                                     |
| [audioRecord](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a0e308e69522c9ef8349c4e575c28139b) | 语音通话录音                                                 |
| [videoRecord](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a5b0968f0d7217ae0c3263c7ef01478f9) | 视频通话录制                                                 |
| [becomeActive](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#aa9beab963c86ad451690725d37561075) | 切换活跃通话                                                 |
| [enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#adadc4606cace5c827c940ae5e5c6ebcf) | 开启关闭视频流发送                                           |
| [callItems](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a1873d3e982abb3d2804be82e4e4c22ea) | 获得通话对象列表                                             |
| [getActiveCallItem](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a98279ae188805122b28d621830f8428c) | 获得当前活跃的通话                                           |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#abd39b0b928955044951ff98f2e41364a) | 通过通话建立的通道发送数据                                   |
| [getStatistics](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#ac7b587f27b369b6a18ebcce93e71400b) | 获得当前通话统计信息                                         |
| [mediaConfig](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a1de1823eae7088f270206e16c0166c8a) | 更新/获取媒体参数                                            |
| [sendDtmf](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call.html#a3a67925d76a2d54db55d8d1e7b09f6dc) | 发送DTMF信息                                                 |

## 一对一通话事件

| 事件                                                         | 描述                     |
| ------------------------------------------------------------ | ------------------------ |
| [onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call_callback.html#a60bb6e2895d62647d3ec4804f95b6739) | 新增通话回调             |
| [onCallItemRemove](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call_callback.html#a805063e9a8782ced7e0c4314cb02385a) | 移除通话回调             |
| [onCallItemUpdate](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call_callback.html#a68145b559d05790734ee2333a8711505) | 通话状态更新回调         |
| [onMessageReceive](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call_callback.html#a41e6c8f649bbb8501a50c7a704a8cc41) | 通话中收到消息的回调     |
| [onMissedCallItem](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call_callback.html#ab002fa6c69a3f886a035df3b96fe1b4e) | 上报服务器拉取的未接来电 |
| [onDtmfReceived](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_call_1_1_j_c_call_callback.html#adbe8fe22651ef89ce9c0f3f1ca932445) | 通话中收到DTMF回调       |

## 频道管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a273d6d6852698c5cc81b907ba6787a07) | 创建 [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a28190faf9d74c8909699f152c1585f15) | 销毁 [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html) 对象 |
| [channelUri](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a11c2a67b480517aa2b5d4918d26a7c57) | 获得频道 Uri                                                 |
| [channelId](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a263cf4ddd6cacd59c53cb7a5a3fb8f0a) | 获得频道标识                                                 |
| [confId](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a9e0cbf39e27394926b324f6e5d3323bf) | 获得confId                                                   |
| [password](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#ab6a5dcfc41c7f2a63ac564a64f5b0485) | 获得频道密码                                                 |
| [channelNumber](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a8af073cb712f87330da2e19c092beafd) | 获得频道号                                                   |
| [title](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#ad908880e1247395afdd7a843a1be887a) | 返回频道标题                                                 |
| [state](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a323710cbbb1737a2a375f3959491e82f) | 返回当前在频道中的状态                                       |
| [participants](https://developer.juphoon.com/portal/reference/V2.3/windows/index.html) | 获得所有频道中的成员                                         |
| [uploadLocalAudio](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a48ae640ccee47605de99d08307461170) | 获取本地音频数据是否在上传                                   |
| [uploadLocalVideo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#aeef8f7d17e187c0e010275089f751066) | 获取本地视频数据是否在上传                                   |
| [audioOutput](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a1b96b562e8f9b421fe1478f9155fdddd) | 获取音频是否输出                                             |
| [screenRenderId](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a8bae432246e32530364e8d6712e2e4aa) | 获取屏幕共享渲染标识                                         |
| [screenUserId](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a1343c8c5f28e90f2139f145e62b12737) | 获取开启屏幕共享的用户标识                                   |
| [recordState](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#afaaa80ebde523c64d9a7113f8c48eccf) | 获取视频录制状态                                             |
| [cdnState](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#aa2dfb2c84eb384f573eba9d839625fc3) | 获得cdn推流状态                                              |
| [query](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a70733aacd3cfb07525129c9ba551610f) | 查询频道相关信息                                             |
| [join](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#abf6d8cf2a0c09b0870343e704175d6f4) | 加入频道                                                     |
| [leave](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#ab8bd2b73d39d33959f2214b298dc4579) | 离开频道                                                     |
| [stop](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#ad241abc5692625fb65d41f8ac70328dd) | 关闭频道                                                     |
| [enableUploadAudioStream](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a2fddcd31b55e2de363668e4a02a9bb48) | 开启关闭发送本地音频流                                       |
| [enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a1ede80c3f03fb308bd7af79d9a87a5cb) | 开启关闭发送本地视频流                                       |
| [enableAudioOutput](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a71c424c3a3edb2160406cdab9e93ddaf) | 开启关闭音频输出                                             |
| [requestVideo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a39941571d90d9f6550152dcc52e21d87) | 请求频道中其他用户的视频流                                   |
| [requestScreenVideo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a4f2c8a2b9cba0180b21e0697ab3a49ef) | 请求频道成员屏幕共享的视频流                                 |
| [enableCdn](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a2be0d75bbdf74c26aed3c6e26877efb4) | 开关Cdn推流                                                  |
| [enableRecord](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#ac2d3b8ebd9c6712799119989e1fc8bcd) | 开关视频录制                                                 |
| [enableScreenOrWindowShare](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#abc9400b483feba260a3b9f23d4186d8c) | 开关屏幕分享                                                 |
| [getParticipant](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a4dae252ee8aa2631cd87b20fa2288ac0) | 获取频道成员                                                 |
| [getStatistics](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#aab96da51fe4f9bd138611c5033955bf9) | 获取统计信息                                                 |
| [customProperty](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#af1ca33db3adb384f503a8f110d74ca91) | 设置/获取频道自定义属性                                      |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a4a049113155708a09be3d72b6f595a2d) | 发送消息                                                     |
| [sendCommand](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a15683bb7145a7df285552d5bcaee2f7a) | 发送指令                                                     |
| [inviteSipUser](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#aec0b92938a5fdfbc3ab7d0a154e9e508) | 邀请Sip用户                                                  |
| [setCustomRole](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#af799e5a0983b33df5b6bc954e13106b0) | 设置自定义角色                                               |
| [getCustomRole](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#ac29c2c5625a3e6d22982941c39280b45) | 获得自定义角色                                               |
| [setCustomState](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a9d3ec7d6875f0c2b7387cd9b7a8a896a) | 设置自定义状态                                               |
| [getCustomState](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#aa419ef68f470053b1979fe2f756564c6) | 获得自定义状态                                               |
| [kick](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#ac63225562c4b6a6233dbaafd36665418) | 将成员踢出会议                                               |
| [sendCommandToDelivery](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a4319fcd6ad8bd954780d653e8b97b619) | 发送命令给推流或录制器                                       |
| [enableSelfVideoRatio](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a001cdfebd12d166688892172f22e3f69) | 设置自身视频宽高比                                           |
| [startScreenShareVideo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a964faa05949c34d2e46cc31439464cca) | 启动频道成员的屏幕分享视频渲染                               |
| [stopScreenShareVideo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#af6f8a9b4eacfd02b268fc667ccfa821b) | 停止屏幕分享视频渲染                                         |
| [selfParticipant](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel.html#a95672dd878989b7aed5fb96e6b6b79e0) | 获得自身 JCMediaChannelParticipant 对象                      |

## 频道事件

| 事件                                                         | 描述                    |
| ------------------------------------------------------------ | ----------------------- |
| [onMediaChannelStateChange](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#ab014f3ec038d8abe13b7c0d63d66f9a7) | 自身状态变化回调        |
| [onMediaChannelPropertyChange](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#a3e5def0199b22c76a8e5e0f69508e0c3) | 属性变化回调            |
| [onJoin](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#a13c03cd2a9e179eb2e53f936538a6c5b) | 加入频道结果回调        |
| [onLeave](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#a7047427bbb7433037dd20bd24fcda6e9) | 离开频道结果回调        |
| [onStop](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#a628b26da0412c22a4ad32a1b8e422f2c) | 解散频道结果回调        |
| [onQuery](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#a5058da3473ec04211aae62d40d98ee70) | 查询频道信息结果回调    |
| [onParticipantJoin](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#ad832f5650185c7ed2e599bd60d21edbf) | 新成员加入回调          |
| [onParticipantLeft](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#a1681876e22caf825d6e0a29b095586d0) | 成员离开回调            |
| [onParticipantUpdate](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#a742c4faad421cf18f991dc954374931f) | 成员更新回调            |
| [onMessageReceive](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#af4a177c86b12bcc1df453e4a660f91ce) | 接收频道消息的回调      |
| [onInviteSipUserResult](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#afe1a8da40d4e3b4ac085760a0d37cb51) | 邀请Sip用户操作结果回调 |
| [onParticipantVolumeChange](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_media_channel_1_1_j_c_media_channel_callback.html#a82151747e97c7f0cc121263fd048739a) | 成员声音变化            |

## 账号管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_account_1_1_j_c_account.html#a24e947d313c450fccfe49da30433483d) | 创建 [JCAccount](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_account_1_1_j_c_account.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_account_1_1_j_c_account.html#a7f1b804526a191a3fe6acb57b6824919) | 销毁 [JCAccount](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_account_1_1_j_c_account.html) 对象 |
| [queryUserStatus](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_account_1_1_j_c_account.html#ab3fa428498791085a98ec26432eb7957) | 查询账号状态                                                 |

## 账号事件

| 事件                                                         | 描述                 |
| ------------------------------------------------------------ | -------------------- |
| [onQueryUserStatusResult](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_account_1_1_j_c_account_callback.html#adf4310447b761238243d0e8a24c5500e) | 查询账号状态结果回调 |

## 文件存储管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage.html#ad90e77837802a2b335d08e6b4b7b2e1b) | 创建 [JCStorage](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage.html#a3e683685a653a6bbcbba830eac1d2c43) | 销毁 [JCStorage](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage.html) 对象 |
| [uploadFile](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage.html#a4d64ec1c9f9aec64c18ef4deba23d47d) | 上传文件                                                     |
| [downloadFile](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage.html#a2adc8024de1652eff25bcdb0c4afa0bb) | 下载文件                                                     |
| [cancelFile](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage.html#a5714d6a2908ef5f5a948713ee5bcc926) | 取消正在进行的文件上传下载                                   |

## 文件存储事件

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [onFileUpdate](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage_callback.html#a44d54e9469563f97c8d34b323f84cd1f) | 文件传输结果回调 |
| [onFileResult](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_storage_1_1_j_c_storage_callback.html#aa22870b6e1d297adabe9e3a0ba8e6b06) | 文件状态更新回调 |

## 群组管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#a9ad47e94d528b9035006bb93919adb67) | 创建 [JCGroup](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#a5058f0cfe33b300ce90c1719ef2a6e6d) | 销毁 [JCGroup](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html) 对象 |
| [fetchGroups](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#ad7e9fc54439fbb45ef3fdb717871a4d8) | 获取当前用户加入的群列表                                     |
| [fetchGroupInfo](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#ac8def08f834d98ea580e7de2cd32be56) | 刷新群组信息                                                 |
| [createGroup](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#a00441757f70d788a1b249d8b0678cfe3) | 创建群                                                       |
| [updateGroup](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#a08ed7c4b58fe0cb44d92f927fc94fe94) | 更新群                                                       |
| [dissolve](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#a5b4509723874f0e1268a29eb13031556) | 解散群组                                                     |
| [leave](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#a7cd6f8e88ac5acb99e076545ea28e7fe) | 离开群组                                                     |
| [dealMembers](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group.html#a2dc2bb38b3a9471f7835b05b8bdac30a) | 操作成员                                                     |

## 群组事件

| 事件                                                         | 描述               |
| ------------------------------------------------------------ | ------------------ |
| [onFetchGroups](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#aa092cadac209f16eae90b8d7caa0b01c) | 拉取群列表结果回调 |
| [onFetchGroupInfo](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#af02518fd608699e7bb60dc3f01853028) | 拉取群详情结果回调 |
| [onGroupListChange](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#ae8659e76db7c8a89e652314534eabda7) | 群列表更新         |
| [onGroupInfoChange](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#a6d8247d496606798b391645ffe93fe09) | 群信息更新         |
| [onCreateGroup](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#afb2cbc9ee132fe8313c7b27ed8c1e336) | 创建群回调         |
| [onUpdateGroup](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#a53d08bc0a636f7ae2ef0f2349e421ce4) | 更新群信息调用回调 |
| [onDissolve](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#a6cf29e9330aa917be6b07093d851c2c4) | 解散群组回调       |
| [onLeaveGroup](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#abd3dbe990f29159c3aa3a3ba801bf034) | 离开群组回调       |
| [onDealMembers](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_group_1_1_j_c_group_callback.html#ab28521927e4cd15c954f548bc3f6df33) | 操作成员结果回调   |

## 消息通道管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel.html#a54110362aac59f79a39c88ac1d7b6ac1) | 创建 [JCMessageChannel](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel.html#a8896a94170640b8d8fbd7bd40217ee93) | 销毁 [JCMessageChannel](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel.html) 对象 |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel.html#a0f70b647d53817bac681563d4f266696) | 发送文本消息                                                 |
| [sendFile](https://developer.juphoon.com/portal/reference/V2.3/windows/class_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel.html#a5b6a8ac2da04e05940b21bb577561c3f) | 发送文件消息                                                 |

## 消息通道事件

| 事件                                                         | 描述                 |
| ------------------------------------------------------------ | -------------------- |
| [onMessageSendUpdate](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel_callback.html#a4d925186f27b0bdfd685b2cbd505fc5a) | 消息发送状态更新回调 |
| [onMessageRecv](https://developer.juphoon.com/portal/reference/V2.3/windows/interface_j_c_s_d_k_1_1_j_c_message_channel_1_1_j_c_message_channel_callback.html#a0932ceb99f512e621994351f856ac1c9) | 收到消息回调         |
