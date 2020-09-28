---
title: 客户端 API
---
# 客户端 API

## 概览

- [JCClient](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html) 类用于初始化sdk以及登录 Juphoon Cloud 平台
- [JCClientCallback](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_client_callback-p.html) 用于回调登录相关事件
- [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html) 类用于管理媒体设备
- [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_device_callback-p.html) 用于回调媒体设备相关事件
- [JCCall](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html) 类用于管理一对一通话
- [JCCallCallback](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_call_callback-p.html) 用于回调一对一通话相关事件
- [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html) 类用于管理媒体频道
- [JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html) 用于回调媒体频道相关事件
- [JCAccount](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html) 类用于管理账号
- [JCAccountCallback](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_account_callback-p.html) 用于回调账号相关事件
- [JCStorage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html) 类用于管理文件存储
- [JCStorageCallback](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_storage_callback-p.html) 用于回调文件存储相关事件
- [JCGroup](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html) 类用于管理群组
- [JCGroupCallback](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html) 用于回调群组相关事件
- [JCMessageChannel](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html) 类用于管理消息通道
- [JCMessageChannelCallback](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html) 用于回调消息通道相关事件

## 登录管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#a5815574e0923b89a74bfe34d11a737fd) | 创建 [JCClient](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#a50afe46970ec86e129af3d8585334334) | 销毁 [JCClient](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html) 对象 |
| [login](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#aeab901abd7d38c3fd527c6a330d1e95c) | 登录 Juphoon Cloud 平台                                      |
| [logout](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#a0d4434928223e0dd2b288e9cb527a314) | 登出 Juphoon Cloud 平台                                      |
| [appkey](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#a19b3f00c5f4a51d8d008a0af49878292) | 获取Appkey                                                   |
| [displayName](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#a73d7c50285ac7afcb6f1e1bbd94851e1) | 设置/获取昵称                                                |
| [userId](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#adafb7d2be56855d494b696d578db7234) | 获得用户标识                                                 |
| [serverAddress](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#ade9766726cb31848c3afa720b6e7472a) | 获取登录服务器地址                                           |
| [state](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#af428728decbaf19a2ac6552a07351a65) | 获取当前状态                                                 |
| [createParam](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#a2df352ba1e2764058f49404d32dd041b) | 获取创建参数                                                 |
| [loginParam](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#a4c7a7e5dd921478ee8c5f6e59818f7c6) | 获取登录参数                                                 |
| [serverUid](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_client.html#a30719cf88f438e003688e2b6962fa28c) | 获取自己在服务器上的 uid                                     |

## 登录事件

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [onLogin](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_client_callback-p.html#aa367a4ec84f6cf5b0d0ef22f83522df2) | 登录结果回调     |
| [onLogout](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_client_callback-p.html#ab6bdf870c036c4ee85aeb6ffcd97e08a) | 登出回调         |
| [onClientStateChange](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_client_callback-p.html#ae5a357773fd0a93159fe7d6fd05cf6fc) | 登录状态变化通知 |

## 设备管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a85936ee95b592ac75252c97851f9cc3f) | 创建 [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a2006a5a278ea92653d9d947112b44a60) | 销毁 [JCMediaDevice](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html) 对象 |
| [startCameraVideo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#ab302cf2e643b76ec40968609d7304f55) | 开始自身视频渲染                                             |
| [startVideo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#aef1b8e413778008e2dec313e0b407cdf) | 开始其他端的视频渲染                                         |
| [stopVideo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#ac77ad46a4ac0a226b2da155f2f797fc0) | 停止视频渲染                                                 |
| [audioStart](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#ad37b4e6a77db2ffc8de0d21113df5234) | 音频是否已打开                                               |
| [startAudio](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a66c2c78f2c722a483c902d1e91512122) | 启动音频                                                     |
| [stopAudio](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#ac169efc20dfed3266d93d3a700f33c72) | 停止音频                                                     |
| [startCamer](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a45761d678b774b0dc275db3f8f01bf69) | 开启摄像头                                                   |
| [stopCamera](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#abd3c4c16bd84011a4d5b89e1fe74ac5e) | 关闭摄像头                                                   |
| [switchCamera](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a76b0a85f43b74b3d90c5e2c32ab60088) | 切换摄像头                                                   |
| [switchCamera2](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a6f72ec5fb1f5f0cca8585b12b09eb524) | 切换摄像头(指定摄像头)                                       |
| [setCameraProperty](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a7793b267dc9c810772295275402fb02f) | 设置摄像头采集属性                                           |
| [setScreenCaptureProperty](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a1d625bdf5aa2dbb422805152cdfb1a1b) | 设置屏幕共享采集属性                                         |
| [startVideoFile](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a9c1cdea77c0ba985fb8d4a134bc99d57) | 开启视频文件作为视频输入源                                   |
| [setVideoFileFrame](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a50b25e3483943c3c1580eee83b847341) | 逐帧采集视频画面                                             |
| [stopVideoFile](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a7642ae134b19a7626d0f1c19e24ad3f4) | 关闭逐帧采集画面                                             |
| [cameraOpen](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a3409eea29b0a4f1abb20236e49116532) | 摄像头是否已打开                                             |
| [camera](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#aa26bd62b1189821023178a91196f8af2) | 获取当前的摄像头                                             |
| [cameras](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a011a216aa0d0f861045554584fc6c273) | 获取摄像头列表                                               |
| [videoFileOpen](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a4b87583f19d3ed15bf92cf518786e6ff) | 文件视频源是否已开启                                         |
| [videoFileId](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a73298097557a68e40cfa310d3904144b) | 获取文件视频源渲染id                                         |
| [videoAngle](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a5db9ccc9795dd55218664d6cd2dce1d9) | 设置/获取视频窗体角度                                        |
| [isSpeakerOn](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#ad7d3f47faa205d9b593c5112cf8847cc) | 扬声器是否已打开                                             |
| [enableSpeaker](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a4cfd5ed9b3b9cdf14d15474f6c3db210) | 开启关闭扬声器                                               |
| [getAudioRouteType](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_device.html#a3044b6a4a03a2e3d803df12389a9d3c8) | 获得当前音频类型                                             |

## 设备事件

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [onCameraUpdate](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_device_callback-p.html#a2a08a9fc361554aad9a0a49ef2c0a789) | 摄像头变化       |
| [onAudioOutputTypeChange](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_device_callback-p.html#aa8df70b612ef571afcdef6f66ba4556c) | 音频输出类型变化 |
| [onRenderReceived](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_device_callback-p.html#ae50d0697924ff8e10d81d7550a6ba416) | 收到第一帧数据   |
| [onRenderStart](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_device_callback-p.html#acc3c990d5e47398c39f7f4463193278b) | 渲染开始         |

## 一对一通话管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a943ec3fd266edb3757cfea2f2ff21a92) | 创建 [JCCall](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#ae5ffd75dfdb8ace0d69e3a38601718e7) | 销毁 [JCCall](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html) 对象 |
| [call](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#ae9d354eabdaad1c5991062ae6aa05680) | 发起一对一呼叫                                               |
| [term](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a34ca9d3be1e72777c7f1cb6e4a5d5bde) | 挂断                                                         |
| [answer](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a0af0e53f6b9a3a99b0fa52449c83f3a4) | 接听                                                         |
| [mute](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a333d090ca2e527a83079254cdca43a12) | 静音                                                         |
| [hold](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a7352eadea5100ab196f1216718cbf928) | 呼叫保持                                                     |
| [audioRecord](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a9e5565cec989f194468ec79d30c3eecc) | 语音通话录音                                                 |
| [videoRecord](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a8909575711a38e53bf8828287cde102c) | 视频通话录制                                                 |
| [becomeActive](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a339389df45deb533a2678f52a8eabe7f) | 切换活跃通话                                                 |
| [enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a22c70e83e914c3e770cdc5b77b60071b) | 开启关闭视频流发送                                           |
| [callItems](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#adf7f1abfa3320f26a6626db6d5231d1a) | 获得通话对象列表                                             |
| [getActiveCallItem](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a3dc7a03082e93852fbad73a79107ea69) | 获得当前活跃的通话                                           |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#ac62efb5cb2a21913a78c706352ef2ee8) | 通过通话建立的通道发送数据                                   |
| [getStatistics](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a5b5237786fb504ce0cc3d1c2eef59883) | 获得当前通话统计信息                                         |
| [mediaConfig](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#a1a2c64a0ffd590fd669096f04b13a167) | 更新/获取媒体参数                                            |
| [sendDtmf](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_call.html#aa9697181987370e46f5dead272ea2869) | 发送DTMF信息                                                 |

## 一对一通话事件

| 事件                                                         | 描述                     |
| ------------------------------------------------------------ | ------------------------ |
| [onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_call_callback-p.html#a1ab9e15212ef163f7f8d3c009d05f2e9) | 新增通话回调             |
| [onCallItemRemove](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_call_callback-p.html#a0e18348bea90de9e9fbfbb4d960d04be) | 移除通话回调             |
| [onCallItemUpdate](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_call_callback-p.html#a7c127c64f0f2742b37668c3626661604) | 通话状态更新回调         |
| [onMessageReceive](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_call_callback-p.html#a9c37cc6b1c2bbb33aad99ea06e4c74d5) | 通话中收到消息的回调     |
| [onMissedCallItem](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_call_callback-p.html#a61754f5e134af2e0b465a40f9cf575fd) | 上报服务器拉取的未接来电 |
| [onDtmfReceived](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_call_callback-p.html#af12205b3e5ccaaaa32ae9eaec5228bb3) | 通话中收到DTMF回调       |

## 频道管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#adcd6f2df492d8961ca35471311311dbb) | 创建 [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a02812bf42303ee865d23e9bebd531496) | 销毁 [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html) 对象 |
| [channelUri](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a95d38657f312acb8975f83e5edbddff3) | 获得频道 Uri                                                 |
| [channelId](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a9ec8a0a382105daa2fa68cc1d67140a6) | 获得频道标识                                                 |
| [confId](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a508a06d19f5ad3767911052afe5e54b9) | 获得confId                                                   |
| [password](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a03fd9357811dcd0b0b4d0c9a63979b75) | 获得频道密码                                                 |
| [channelNumber](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#ae369b43c1416966346c5b0e812f6b3c1) | 获得频道号                                                   |
| [title](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a3f95e9ce419edb0b89301455b75dba4e) | 返回频道标题                                                 |
| [state](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a38cdd34e0ae753b9f49fa36809aa1437) | 返回当前在频道中的状态                                       |
| [participants](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#aa1aac4cfe9687c8643facedf0758ea43) | 获得所有频道中的成员                                         |
| [uploadLocalAudio](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a07b9c934f8bd40ce2fed419befd58f42) | 获取本地音频数据是否在上传                                   |
| [uploadLocalVideo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a2f9f270cd0360febc083eaf84ece5e91) | 获取本地视频数据是否在上传                                   |
| [audioOutput](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#ad050a05ae000da5132b6034c66b12bb9) | 获取音频是否输出                                             |
| [screenRenderId](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a501cd5147754987a2796fb3b88f74c80) | 获取屏幕共享渲染标识                                         |
| [screenUserId](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a0100882cd7322da94f248efa86641c65) | 获取开启屏幕共享的用户标识                                   |
| [recordState](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a625a6dd3a5d0ae9df25698aebc96a2f2) | 获取视频录制状态                                             |
| [cdnState](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a5c421ef380fbe19dd2bbb8226272cf63) | 获得cdn推流状态                                              |
| [query](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#adbcf56921812241efff844203504b1e6) | 查询频道相关信息                                             |
| [join](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#aae7c111f87465ec2dbac767b63f484aa) | 加入频道                                                     |
| [leave](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a464117e54a77bccbfd513ccff533708b) | 离开频道                                                     |
| [stop](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#ac2905c2f6c51c4c01c61f5f4d6c39a49) | 关闭频道                                                     |
| [enableUploadAudioStream](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#acfdb1bfa7e079a552a4441050e816560) | 开启关闭发送本地音频流                                       |
| [enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a12d0c37563fc883d624c1e52c70d380a) | 开启关闭发送本地视频流                                       |
| [enableAudioOutput](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a4bbd99b56e5f38a26cceaccb69776618) | 开启关闭音频输出                                             |
| [requestVideo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a1b44d999a8f89309df3580efc9ef9225) | 请求频道中其他用户的视频流                                   |
| [requestScreenVideo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#ad3e33762ee2a89b6232485f66f9b54a7) | 请求频道成员屏幕共享的视频流                                 |
| [enableCdn](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a615bf5d67e360c8d84b92496cf884e92) | 开关Cdn推流                                                  |
| [enableRecord](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a5ef724d64936c83f2d68346314755e9f) | 开关视频录制                                                 |
| [enableScreenShare](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a79b28b8dada5450c5f25e2844962b7d0) | 开关屏幕分享                                                 |
| [getParticipant](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a2feaf09ec144035583ec829291f85f22) | 获取频道成员                                                 |
| [getStatistics](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a4cf23f3d19b23f8658c8b8ab275d2aae) | 获取统计信息                                                 |
| [customProperty](https://developer.juphoon.com/portal/reference/V2.3/ios/index.html) | 设置/获取频道自定义属性                                      |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a7617239966ea595482eb11beb0b8ff4a) | 发送消息                                                     |
| [sendCommand](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#ab1d66a2c12211d3f6913237904e115da) | 发送指令                                                     |
| [inviteSipUser](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a40d38e8ba39a92370ea614fdd4baafe8) | 邀请Sip用户                                                  |
| [setCustomRole](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a9777d3af4a484672273ca4a766b32e58) | 设置自定义角色                                               |
| [getCustomRole](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#af87e398452edac3b76ad96ae2c0c00ba) | 获得自定义角色                                               |
| [setCustomState](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#adae24eb1c040e18d0ca98ddcab18da21) | 设置自定义状态                                               |
| [getCustomState](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a217cd598c99384ab0f4293af6b7b6141) | 获得自定义状态                                               |
| [kick](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#acd1a648db825b4c5d32afd7403ad9114) | 将成员踢出会议                                               |
| [sendCommandToDelivery](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#af8b6019fa2b0982d7822cef8cd9df6c4) | 发送命令给推流或录制器                                       |
| [enableSelfVideoRatio](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a2e9c87899585ac3e730a273f20ed1aea) | 设置自身视频宽高比                                           |
| [startScreenShareVideo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a816c2a4794b157fd6a17cd2cd1196ae8) | 启动频道成员的屏幕分享视频渲染                               |
| [stopScreenShareVideo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#a704cf64d9a0cc2f3c4cdd12348b278ce) | 停止屏幕分享视频渲染                                         |
| [selfParticipant](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel.html#aafc27fec7e4946b5154f43dbdc4e595d) | 获得自身 [JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_media_channel_participant.html) 对象 |

## 频道事件

| 事件                                                         | 描述                    |
| ------------------------------------------------------------ | ----------------------- |
| [onMediaChannelStateChange](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#a12ada003140a0c5a44c0c5f69702acf7) | 自身状态变化回调        |
| [onMediaChannelPropertyChange](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#a8f10fcd984b93e9d9ae2ab14b848ba32) | 属性变化回调            |
| [onJoin](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#ac442c8c1d360ba3b38788ee428424ed2) | 加入频道结果回调        |
| [onLeave](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#a0397acf71428976f43c72effbec2a0ad) | 离开频道结果回调        |
| [onStop](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#af0ed7f8f42ae29eb21a2197afa00f4c3) | 解散频道结果回调        |
| [onQuery](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#a4a80b6bbb7da129d67cf1596a14c54e5) | 查询频道信息结果回调    |
| [onParticipantJoin](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#aa5342368f4be4ded2a96c1516d117196) | 新成员加入回调          |
| [onParticipantLeft](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#af2ae73586c030e4f3a6886cd66f11a73) | 成员离开回调            |
| [onParticipantUpdate](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#ab971c654c6ec7b55706aaa2c9a84bb87) | 成员更新回调            |
| [onMessageReceive](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#a9a7440b88ef2f90f3eaa3473c2048cd8) | 接收频道消息的回调      |
| [onInviteSipUserResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#ad149be58b9ecd0b4e046c23c1d34f475) | 邀请Sip用户操作结果回调 |
| [onParticipantVolumeChange](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_media_channel_callback-p.html#a8d281027a9b2f66ffec782022e8642a2) | 成员声音变化            |

## 账号管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html#a0e03454598a73cf1f05f0b97a2630b2b) | 创建 [JCAccount](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html#afdfece0c7f4aa39fdc3b3d178f0a29c9) | 销毁 [JCAccount](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html) 对象 |
| [queryUserStatus](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html#aec0e112ba7baa03dd867d5f92ad12c85) | 查询账号状态                                                 |
| [queryServerUid](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html#aec4ea63f41f105074c1b73aacf721a73) | 查询账号 uid                                                 |
| [queryUserId](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html#ad13684e2e2a2d4cbb5792a1f3b42a2d9) | 查询账号 userId                                              |
| [refreshContacts](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html#aa49db7cf1881f5cad36426e8be3af9c1) | 查询所有的联系人                                             |
| [dealContact](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html#ac05c24d2e855e935273eac7911b411b9) | 操作联系人                                                   |
| [setDnd](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_account.html#a504f22174b3a914a88403229522e5dc1) | 设置免打扰                                                   |

## 账号事件

| 事件                                                         | 描述                        |
| ------------------------------------------------------------ | --------------------------- |
| [onQueryUserStatusResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_account_callback-p.html#aaf37440dc773151f27983be6816fab1f) | 查询账号状态结果回调        |
| [onQueryServerUidResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_account_callback-p.html#a736fcbd0388c57bcea5f34da736481d9) | 查询账号 ServerUid 结果回调 |
| [onQueryUserIdResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_account_callback-p.html#aacfe3ae5f27159ca032f76633c3b4420) | 查询账号 UserId 结果回调    |
| [onRefreshContacts](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_account_callback-p.html#a6da9e43480c4e1be1fd1b7a8f1eb131f) | 查询网络联系人列表结果回调  |
| [onDealContact](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_account_callback-p.html#a6ce3db1f8a3209301cffc52006493718) | 处理联系人结果回调          |
| [onContactsChange](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_account_callback-p.html#a7329d6adf383ae4f8a947081c9952ce1) | 服务器联系人变化回调        |
| [onSetContactDnd](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_account_callback-p.html#a97029797275298a3fa223d3d23a1556d) | 设置免打扰回调              |

## 文件存储管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html#ae49efaa195466115f07b20ae07bee4a8) | 创建 [JCStorage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html#a845f5e55177573aad2972ab1edf32002) | 销毁 [JCStorage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html) 对象 |
| [uploadFileByExpireTime](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html#a179729e095c867fa7624fd1eb3e44a79) | 上传文件                                                     |
| [downloadFile](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html#a4edb9dbd883adbb92c151bc0ef5f5e15) | 下载文件                                                     |
| [cancelFile](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html#a2bf695039cbaaf8e57f4ab5515af2de6) | 取消正在进行的文件上传下载                                   |
| [cancelFileByCookie](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_storage.html#aa50915f7b3606dd3146c9074ad8cecb4) | 通过cookie取消正在进行的文件上传下载                         |

## 文件存储事件

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [onFileUpdate](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_storage_callback-p.html#aedb19f5b9c167fae30966c5e34b22afb) | 文件传输结果回调 |
| [onFileResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_storage_callback-p.html#a086c6c8b7e0e0188d8e8954b0288fd54) | 文件状态更新回调 |

## 群组管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#a46c9376d41cf9861b253d8ebf88a0c50) | 创建 [JCGroup](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#a4a7b35b69b04406fa72742a875e5a652) | 销毁 [JCGroup](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html) 对象 |
| [fetchGroups](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#af7639cf24c5e1c88790285d3bc7e5191) | 获取当前用户加入的群列表                                     |
| [fetchGroupInfo](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#a5852968846cd872b8abb796a35a8aa6b) | 刷新群组信息                                                 |
| [createGroup](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#a4851fb5f628bf635045cb360539975b1) | 创建群                                                       |
| [updateGroup](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#aca22882b3e29cbbd3763f0c354dfccd5) | 更新群                                                       |
| [dissolve](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#a6276a1b810c0976954e6ba0086670f4a) | 解散群组                                                     |
| [leave](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#a3f04930622631092ea1a39ea8694f591) | 离开群组                                                     |
| [dealMembers](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#a084e2dcd50a98ba94b88f5028fdecb3d) | 操作成员                                                     |
| [updateGroupComment](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#ad519604f281f0e74374c47d2ae419faa) | 更新群备注信息                                               |
| [setDnd](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_group.html#a2a24aae91e07f13a687707ea8a56b8d4) | 设置免打扰                                                   |

## 群组事件

| 事件                                                         | 描述                 |
| ------------------------------------------------------------ | -------------------- |
| [onFetchGroups](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#ae6e687f4b4349ea98d79aa7c7e9ce0f0) | 拉取群列表结果回调   |
| [onFetchGroupInfo](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#ad38bdbe71d9575e059a3d846f1eab545) | 拉取群详情结果回调   |
| [onGroupListChange](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#aafde2601c8e09fcc9bd3c4a008cae517) | 群列表更新           |
| [onGroupInfoChange](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#a8a57e78eb154aed067907f2ee1b0c31a) | 群信息更新           |
| [onCreateGroup](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#a40ab12f45bba248f056294c4afbad6ba) | 创建群回调           |
| [onUpdateGroup](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#a5a90c0d5379ad8ad14cd0e8317c9ab6e) | 更新群信息调用回调   |
| [onDissolve](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#a70e3b55fe7570585bfc3ef4ecb1b63df) | 解散群组回调         |
| [onLeave](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#a2ae35fc1044a6ef84d0b7ccc0f87f556) | 离开群组回调         |
| [onDealMembers](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#af0afec355b3cb89cc6e8a1b1f724f323) | 操作成员结果回调     |
| [onUpdateGroupComment](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#a9feddc8ebff5c96b43b5041dc610eebc) | 更新备注信息结果回调 |
| [onSetGroupDnd](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_group_callback-p.html#ac55516ed86db2fe06472de2ec3a9fcec) | 设置免打扰回调       |

## 消息通道管理

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [create](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#ad9690d124324d7feda64df75723ec595) | 创建 [JCMessageChannel](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html) 对象 |
| [destroy](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#a78e87696e1dffb30a286f33fb6011bd7) | 销毁 [JCMessageChannel](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html) 对象 |
| [sendMessage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#ab84f3affc5ddc36f40cd23cfb97b18ee) | 发送文本消息                                                 |
| [sendFile](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#a0fecaa87aaa6be8e27173c6f9225c054) | 发送文件消息                                                 |
| [refreshConversation](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#a56565c7d1d12ed4518da619d1493f2d5) | 获取消息会话                                                 |
| [fetchMessages](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#aabdc7f5d60b3a7b2cc2396922d3b6575) | 获取历史消息                                                 |
| [markReadMessage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#a2c6195a64ec54b63011129bcf221b3be) | 标志消息为已读                                               |
| [markRecvMessage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#a817de33a2a86fcd0d1c30648e9c000f2) | 标志消息为已收                                               |
| [withdrawalMessage](https://developer.juphoon.com/portal/reference/V2.3/ios/interface_j_c_message_channel.html#a826f73531b0ff987b856022403d07d2d) | 撤回消息                                                     |

## 消息通道事件

| 事件                                                         | 描述                 |
| ------------------------------------------------------------ | -------------------- |
| [onMessageSendUpdate](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#ad43a1826244ac807b4d546ad47181791) | 消息发送状态更新回调 |
| [onMessageRecv](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#a5b1a06dbd6ef028e202951d089833ea7) | 收到消息回调         |
| [onRefreshConversation](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#aa7c03f499a147afe54d42cfbc49b9614) | 刷新消息结果回调     |
| [onFetchMessageResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#a867c21568aa9c37cb78c7b6d6db4b5ed) | 拉取消息结果回调     |
| [onMarkReadResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#ad362d43fde62e1264204788b8763af2a) | 标志消息已读结果回调 |
| [onMarkRecvResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#a0a365fcdc004e47db56794e84b236b94) | 标志消息已收结果回调 |
| [onReceiveMarkRecv](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#a473710b30a2ce3cf50d067731198f1e4) | 对方已收消息回执回调 |
| [onReceiveMarkRead](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#a93920ea4aa54fd574fc351cfb805f948) | 对方已读消息回执回调 |
| [onMessageListRecv](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#aee44157985022495491624681c2f4ab7) | 拉取历史消息回调     |
| [onWithdrawalMessageResult](https://developer.juphoon.com/portal/reference/V2.3/ios/protocol_j_c_message_channel_callback-p.html#aba72ea7f5832917b9189d2b5d0fd3f27) | 撤回消息结果回调     |
