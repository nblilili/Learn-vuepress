---
title: 客户端 API
---
# 客户端 API

## 概览

- [JCClient](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html) 类用于初始化sdk以及登录 Juphoon Cloud 平台
- [JCClientCallback](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client_callback.html) 用于回调登录相关事件
- [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html) 类用于管理设备
- [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device_callback.html) 用于回调设备相关事件
- [JCCall](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html) 类用于管理一对一通话
- [JCCallCallback](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call_callback.html) 用于回调一对一通话相关事件
- [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html) 类用于管理媒体频道
- [JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html) 用于回调媒体频道相关事件

## 登录管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [createJCClient](https://developer.juphoon.com/portal/reference/V2.3/c++/group___xE7_x99_xBB_xE5_xBD_x95_xE6_xA8_xA1_xE5_x9D_x97.html#ga2d6fc4f203884536ff69bfe0e0ed300f) | 创建 [JCClient](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html) 对象 |
| [destroyJCClient](https://developer.juphoon.com/portal/reference/V2.3/c++/group___xE7_x99_xBB_xE5_xBD_x95_xE6_xA8_xA1_xE5_x9D_x97.html#ga1ffd007a058115a0676a84a7d5f42dbf) | 销毁 [JCClient](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html) 对象 |
| [getServerAddress](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#af2e726707f53bb0712b5876ca807344f) | 获取登录服务器地址                                           |
| [setDisplayName](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#adf9a101b1cb0744d7857570fd97847af) | 设置昵称                                                     |
| [getDisplayName](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#a075736b286c05ff52cc635774b456fba) | 获取昵称                                                     |
| [getUserId](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#ae2c63b8bae1b189b3b6e09bf8d3058b9) | 获得用户标识                                                 |
| [getState](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#a9c45eac84e61df792573e9a1431c2c1d) | 获取当前状态                                                 |
| [getAppkey](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#aca4d5642f60d6842ea739501821e4f42) | 获取Appkey                                                   |
| [getCreateParam](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#a42545af6e531d52d03ea6cc67c4d2936) | 获取创建参数                                                 |
| [getLoginParam](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#a235b867cf189da9e767eeb2bd0bca9de) | 获取登录参数                                                 |
| [login](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#a580669b0424bf7e22db3ccbe059dddba) | 登录 Juphoon Cloud 平台                                      |
| [logout](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client.html#abac015a13078c84b06afac69dcd392ff) | 登出 Juphoon Cloud 平台                                      |

## 登录事件

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [onLogin](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client_callback.html#ab2deb2e2d3c95f848d9dc2baa7c6daff) | 登录结果回调     |
| [onLogout](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client_callback.html#a28b0af754882f73b08bb6ea65b03f81c) | 登出回调         |
| [onClientStateChange](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_client_callback.html#ace087f907d2f8a2413f10d34cfb47337) | 登录状态变化通知 |

## 设备管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [createJCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/c++/group___xE8_xAE_xBE_xE5_xA4_x87_xE6_xA8_xA1_xE5_x9D_x97.html#ga96a10766264f3c12af531b70cb9c9749) | 创建 [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html) 对象 |
| [destroyJCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/c++/group___xE8_xAE_xBE_xE5_xA4_x87_xE6_xA8_xA1_xE5_x9D_x97.html#ga6b14094d4ae4aa265fee79dc65074225) | 销毁 [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html) 对象 |
| [startCameraVideo](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a9369379c0d753bf34923ab2618ecb90e) | 开始自身视频渲染                                             |
| [startVideo](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a148a565d8a6204ca69f3d45c203f22e3) | 开始其他端的视频渲染                                         |
| [stopVideo](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a2db87561046eedda073d2fd52b8adce8) | 停止视频渲染                                                 |
| [startAudio](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a3e5dbd693aa7d245377e78cb78902018) | 启动音频                                                     |
| [stopAudio](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a007283dc73188577ae32b50849d3d3fd) | 停止音频                                                     |
| [startCamera](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a8980c035521b9c5c20afa34fad23293e) | 开启摄像头                                                   |
| [stopCamera](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a201fd2352117c7fbdc03ef10837fc701) | 关闭摄像头                                                   |
| [switchCamera](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a0716deb7c816c605444f2bb3202e9ef5) | 切换摄像头(指定摄像头)                                       |
| [setCameraProperty](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a2ec180f6fc51367007b854dd0bc2866b) | 设置摄像头采集属性                                           |
| [setScreenCaptureProperty](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a03f381b320fa23d0476207a7d00e0f34) | 设置屏幕共享采集属性                                         |
| [startVideoFile](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a7606984cdfd5de27d53399304eee67bf) | 开启视频文件作为视频输入源                                   |
| [setVideoFileFrame](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a3ba1260942cdc3a13cb4823ca2c5c4fe) | 逐帧采集视频画面                                             |
| [stopVideoFile](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a9c6ff0dba1b9f665e530250d01a938fc) | 关闭逐帧采集画面                                             |
| [getVideoFileId](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a81003ef7a37a5bdfb923b3912f951bd0) | 获取文件视频源渲染id                                         |
| [isCameraOpen](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#ac182570741d286e0939a504f6b0b1dd5) | 摄像头是否已打开                                             |
| [isVideoFileOpen](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a3ca8412131b75ec61ad80d0f030c5b9c) | 文件视频源是否已开启                                         |
| [getCamera](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#acb427f7249ef1e384b1a910c90c31190) | 获取当前的摄像头                                             |
| [getCameras](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#af5d7b21bf998890a10bbf4ea5c3984da) | 获取摄像头列表                                               |
| [getAudioInputs](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#ab177fc54d666d727ece18588268fd203) | 获得当前音频输入设备                                         |
| [getAudioOutputs](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a72ba20f63202cbc61bf2cfc8170045b3) | 获得当前音频输出设备                                         |
| [getWindows](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#aec338b2eea709884722f7c426c924653) | 获得当前窗口列表                                             |
| [getDesktops](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a8cbda493ef14c4b97ff022948bb15bf1) | 获得当前桌面列表                                             |
| [isAudioStart](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#a58437ca0b56ea8a5741411fb53713845) | 音频是否已打开                                               |
| [getAudioParam](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device.html#ac9126bc9409520132bc21abfebec07c8) | 获得音频参数                                                 |

## 设备事件

| 事件                                                         | 描述           |
| ------------------------------------------------------------ | -------------- |
| [onCameraUpdate](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device_callback.html#a2e1d495e5443274eba03c0962f6c338f) | 摄像头变化     |
| [onRenderReceived](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device_callback.html#a85449b5373956c78cded7e2f019d3876) | 收到第一帧数据 |
| [onRenderStart](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_device_callback.html#a48192f3dcd9d007b9ee9a91de9975286) | 渲染开始       |

## 一对一通话管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [createJCCall](https://developer.juphoon.com/portal/reference/V2.3/c++/group___xE4_xB8_x80_xE5_xAF_xB9_xE4_xB8_x80_xE9_x80_x9A_xE8_xAF_x9D_xE6_xA8_xA1_xE5_x9D_x97.html#ga29320972a659ce8eaf4994576103a62c) | 创建 [JCCall](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html) 对象 |
| [destroyJCCall](https://developer.juphoon.com/portal/reference/V2.3/c++/group___xE4_xB8_x80_xE5_xAF_xB9_xE4_xB8_x80_xE9_x80_x9A_xE8_xAF_x9D_xE6_xA8_xA1_xE5_x9D_x97.html#gac72b359f2dde4051c10587703c7bc2ee) | 销毁 [JCCall](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html) 对象 |
| [call](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a6ba5c96565197a35b847a5d8452cbc66) | 发起一对一呼叫                                               |
| [term](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a168fd884512bfd5451ffa5fac83c598b) | 挂断                                                         |
| [answer](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a8e44cef3051dba33a600042c7a5bf987) | 接听                                                         |
| [mute](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a62d7c7454fae84422579e3a6275af243) | 静音                                                         |
| [hold](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#aae536642d3d5c785c2ce7d9275f8653a) | 呼叫保持                                                     |
| [audioRecord](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a058fb76428f0a77f4bbbb8670eec2868) | 语音通话录音                                                 |
| [videoRecord](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a21823c0309710331f4cad2aee7429c37) | 视频通话录制                                                 |
| [becomeActive](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#ae45d0744f3df39cc2c6dc3bb00bb7354) | 切换活跃通话                                                 |
| [enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#adcd6dd97b6737909ae0348a0e714d754) | 开启关闭视频流发送                                           |
| [getCallItems](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a34e8adf7b93e4943c83b39de5f5675bf) | 获得通话对象列表                                             |
| [getActiveCallItem](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a4b5e8afc43bd12f877e37a97fec2ff7a) | 获得当前活跃的通话                                           |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a94e37abb045b901e1703b7534f4cc379) | 通过通话建立的通道发送数据                                   |
| [getStatistics](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#ae5de3fe2c6d7f16d95e4c79d7389b133) | 获得当前通话统计信息                                         |
| [updateMediaConfig](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#aca5e69754bbc89fa94916dcfebfe084c) | 更新媒体参数                                                 |
| [getMediaConfig](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#aa6392b58272a396a10d3d857f4704d6a) | 获得当前的媒体参数                                           |
| [sendDtmf](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call.html#a1dd4d26b9ba6685b57dcbcf698a021c6) | 发送DTMF信息                                                 |

## 一对一通话事件

| 事件                                                         | 描述                     |
| ------------------------------------------------------------ | ------------------------ |
| [onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call_callback.html#a2188f777767ca071c145d4a50687ce63) | 新增通话回调             |
| [onCallItemRemove](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call_callback.html#a8fb115155d6bc25139a165310069f92b) | 移除通话回调             |
| [onCallItemUpdate](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18) | 通话状态更新回调         |
| [onMessageReceive](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call_callback.html#afb8281abd54bc8c18b77aadfe234a882) | 通话中收到消息的回调     |
| [onMissedCallItem](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call_callback.html#a6e46494780a74ede3c32eac1a64c0190) | 上报服务器拉取的未接来电 |
| [onDtmfReceived](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_call_callback.html#ac2bb26f070f0235e19ea4671abe83df4) | 通话中收到DTMF回调       |

## 频道管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [createJCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/c++/group___xE5_xAA_x92_xE4_xBD_x93_xE9_xA2_x91_xE9_x81_x93_xE6_xA8_xA1_xE5_x9D_x97.html#gacaca886fc345f798056ff2b9c2ee11ac) | 创建 [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html) 对象 |
| [destroyJCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/c++/group___xE5_xAA_x92_xE4_xBD_x93_xE9_xA2_x91_xE9_x81_x93_xE6_xA8_xA1_xE5_x9D_x97.html#ga52a42d0cba9bfcb85d678aaa8f75b024) | 销毁 [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html) 对象 |
| [getChannelId](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a3221538f7b3247036b5ac6c257b2eb6d) | 获得频道标识                                                 |
| [getChannelUri](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a3b3f681d12751fafd7445ccd22d9854f) | 获得频道 Uri                                                 |
| [getChannelNumber](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#aa3627122b2260f7caf17a45f9b302c81) | 获得频道号                                                   |
| [getState](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a4085f2a7dc5c265f5b4ef08d2819002c) | 返回当前在频道中的状态                                       |
| [getUploadLocalAudio](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a0a2dcea81b4416b076d626301c1560de) | 获取本地音频数据是否在上传                                   |
| [getUploadLocalVideo](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a509d42f6e791d90835d8fcd55604fc17) | 获取本地视频数据是否在上传                                   |
| [getAudioOutput](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a3f00a46f5527b53939b0b08d6f60faf2) | 获取音频是否输出                                             |
| [getTitle](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a197cc14d94441bedcbef5cb9a97b2abd) | 返回频道标题                                                 |
| [getScreenRenderId](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a12e6030f5453414ab9e39c67de816c65) | 获取屏幕共享渲染标识                                         |
| [getScreenUserId](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#aff3c7fa29f09322d33fefc7789b2bb51) | 获取开启屏幕共享的用户标识                                   |
| [getRecordState](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a4ae61bc03acd8cf80cd800e343369b24) | 获取视频录制状态                                             |
| [getCdnState](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a53d757667a36bf9bd8d4174ffab4bd89) | 获得cdn推流状态                                              |
| [getSelfParticipant](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#afeb3c17dc9d0827fe27fa189cd0a5c9e) | 获得自身 [JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_participant.html) 对象 |
| [getPassword](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a0c50e7d35a9a7a8a9cf61f7b673b7f7b) | 获得频道密码                                                 |
| [getDeliveryUri](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a2092459c266594ed1e24a1c37528f0c3) | 获取推流录制器成员                                           |
| [getCustomProperty](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#ac45452e8507697cc1e8c6fb7fd8d7f53) | 获取自定义频道属性                                           |
| [getCustomRole](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a2c672a36367e0664f8882b19f68faa33) | 获得自定义角色                                               |
| [getCustomState](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#ad155c1da6a05be33d7d6aa81eee4e736) | 获得自定义状态                                               |
| [inviteSipUser](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#acd44cb564943ffde1ec7d5d4168e4191) | 邀请Sip用户                                                  |
| [query](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#af7ccf465a6ddb05aa4ff22f5f61eab10) | 查询频道相关信息                                             |
| [join](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#acfdb1da52955cf8b01d95527eb28890b) | 加入频道                                                     |
| [leave](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a93c19137044fec1568f73f1f6dbfee84) | 离开频道                                                     |
| [stop](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a75e1efd53ded5329e957e76079cfcdaf) | 关闭频道                                                     |
| [enableUploadAudioStream](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a2b08d87b38fe2fd7a394e2786241cc4c) | 开启关闭发送本地音频流                                       |
| [enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a2b74210bdc3f25810b901542844aee33) | 开启关闭发送本地视频流                                       |
| [setVideoCapture](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a0de25ae40ac1c208e08f429e4b469300) | 设置本地视频文件替代摄像头                                   |
| [enableAudioOutput](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#ad165e3c09e8cc4d2c17d6ad871c2fb44) | 开启关闭音频输出                                             |
| [requestVideo](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a86fafab80af2c51a70da0c62aaa3d136) | 请求频道中其他用户的视频流                                   |
| [enableScreenOrWindowShare](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a8ad6d27084abf660aad7a7f84fd3b9e0) | 开启关闭桌面屏幕共享                                         |
| [requestScreenVideo](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a59f139e31c8ef2190dfc4c976dcf445d) | 请求屏幕共享的视频流                                         |
| [enableCdn](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a8bbaf596f564ad3281429470d112c8dc) | 开关Cdn推流                                                  |
| [enableRecord](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#ae42f44157b2182115f92f88bb89a113f) | 开关视频录制                                                 |
| [getParticipant](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a0fd6477db77a60df91fa615b814ac796) | 获取频道成员                                                 |
| [getParticipants](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a3baccb9d05486fb20ff8d206284f609e) | 获得所有频道中的成员                                         |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#aa67711141ad0883ad8f2dce0ea631b48) | 发送消息                                                     |
| [getStatistics](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a6fe15675d841a9c068bfd3afd18b3e90) | 获取统计信息                                                 |
| [sendCommand](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a449c0e611118f0c46d22b26c1494caac) | 发送指令                                                     |
| [sendCommandToDelivery](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a49336d3aa083b45c5dd1768dd43ed0b1) | 发送命令给推流或录制器                                       |
| [setCustomProperty](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#ac3190b318a7dcca80a613cea7a93b664) | 设置频道自定义属性                                           |
| [setCustomRole](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a7b6b97e8193f2cf7f2819ec3ca49b813) | 设置自定义角色                                               |
| [setCustomState](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a86b930607cb3cfaf4ba5c51feb0e6146) | 设置自定义状态                                               |
| [kick](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#aa5ee1e5334beb9ca63a8dc7110aaf6c0) | 将成员踢出会议                                               |
| [enableSelfVideoRatio](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a72e9cae1a64875ff632e3a17f51a0dd1) | 设置自身视频宽高比                                           |
| [startScreenShareVideo](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a79abca7633c9b01713bc6b4db1ed72d3) | 启动屏幕分享视频渲染                                         |
| [stopScreenShareVideo](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel.html#a3e449ced4d562de27e4909cd556cdaa4) | 停止屏幕分享视频渲染                                         |

## 频道事件

| 事件                                                         | 描述                    |
| ------------------------------------------------------------ | ----------------------- |
| [onMediaChannelStateChange](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#aab5950490321f2c6bd4d9748106973ee) | 自身状态变化回调        |
| [onMediaChannelPropertyChange](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a8ce6d3f4ac16fd55c500f8b4e27f52bb) | 属性变化回调            |
| [onJoin](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a430bd78b28e189ee3c9564ddb7db213d) | 加入频道结果回调        |
| [onLeave](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71) | 离开频道结果回调        |
| [onStop](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a61a1d5a81563d34f80e70541a114a74a) | 解散频道结果回调        |
| [onQuery](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a864db3251f12affc38f7c95c7fdccab1) | 查询频道信息结果回调    |
| [onParticipantJoin](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#adf004e70eb654a1afbf0f3f64a76e8b8) | 新成员加入回调          |
| [onParticipantLeft](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a5888058878f3aaa382b3ede94228a6e8) | 成员离开回调            |
| [onParticipantUpdate](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a6cfa3d92848a80daa60ebc74a54c7042) | 成员更新回调            |
| [onMessageReceive](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a6f6b72922ebc576d94f55dc153b1209d) | 接收频道消息的回调      |
| [onInviteSipUserResult](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#a25085c8e32313847c986582d45753357) | 邀请Sip用户操作结果回调 |
| [onParticipantVolumeChange](https://developer.juphoon.com/portal/reference/V2.3/c++/class_j_c_media_channel_callback.html#adea3e7e31e00251081ade1adb2e23f31) | 成员声音变化            |
