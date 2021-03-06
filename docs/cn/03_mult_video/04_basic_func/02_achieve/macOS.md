---
title: 实现多方通话
---
# 实现多方通话

本章介绍如何实现多方音视频通话，多方通话的 API 调用时序见下图：

![../../../../\_images/multivideoworkflow.png](../../../../_images/multivideoworkflow.png)

## 初始化

调用 [JCMediaDevice
create](/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:)
和 [JCMediaChannel
create](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/create:mediaDevice:callback:)
以初始化实现多方通话需要的模块。

``````objectivec
//初始化
-(bool)initialize {
   //1. 媒体类
   JCMediaDevice *mediaDevice = [JCMediaDevice create:client callback:self];
   //2. 媒体通道类
   JCMediaChannel *mediaChannel = [JCMediaChannel create:client mediaDevice:mediaDevice callback:self];
   return client.state == JCClientStateLogined;
}
``````

其中：

- JCMediaDevice create 方法中的 callback 为
    [JCMediaDeviceCallback](/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html)
    协议的代理对象，该协议用于将媒体设备相关的事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现
    JCMediaDeviceCallback 的方法。

JCMediaDeviceCallback 中的主要方法如下

``````objectivec
//摄像头变化
-(void)onCameraUpdate;

//音频输出变化
-(void)onAudioOutputTypeChange:(NSString*)audioOutputType;

//声音中断恢复
-(void)onAudioInerruptAndResume:(BOOL)interrupt;

//收到第一帧数据
-(void)onRenderReceived:(JCMediaDeviceVideoCanvas*)canvas;

//渲染开始
-(void)onRenderStart:(JCMediaDeviceVideoCanvas*)canvas;
``````

- JCMediaChannel create 方法中的 callback 为
    [JCMediaChannelCallback](/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html)
    协议的代理对象，该协议用于将频道中的相关事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现
    JCMediaChannelCallback 的方法。

JCMediaChannel 中的主要方法如下

``````objectivec
//自身状态变化回调
-(void)onMediaChannelStateChange:(JCMediaChannelState)state oldState:(JCMediaChannelState)oldState;

//加入频道结果回调
-(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId;

//离开频道结果回调
-(void)onLeave:(JCMediaChannelReason)reason channelId:(NSString*)channelId;

//解散频道结果回调
-(void)onStop:(bool)result reason:(JCMediaChannelReason)reason;

//新成员加入回调
-(void)onParticipantJoin:(JCMediaChannelParticipant*)participant;

//成员离开回调
-(void)onParticipantLeft:(JCMediaChannelParticipant*)participant;

//成员更新回调
-(void)onParticipantUpdate:(JCMediaChannelParticipant*)participant participantChangeParam:(JCMediaChannelParticipantChangeParam *)participantChangeParam;

//成员声音变化
-(void)onParticipantVolumeChange:(JCMediaChannelParticipant*)participant;
``````

## 加入频道

1\. 调用
[enableUploadAudioStream](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadAudioStream:)
开启音频流。调用
[enableUploadVideoStream](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadVideoStream:)
开启视频流。

``````objectivec
// 1. 开启音频流
[mediaDeviceChannel enableUploadAudioStream:true];
// 2. 开启视频流
[mediaDeviceChannel enableUploadVIdeoStream:true];
``````

2. 调用
    [join](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/join:joinParam:)
    方法加入频道。您需要在该方法中传入如下参数：

<!-- end list -->

- channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道
    Uri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。

- joinParam：加入参数，没有则填 nil。 详见
    [JCMediaChannelJoinParam](/portal/reference/V2.1/ios/Classes/JCMediaChannelJoinParam.html)
    对象。

``````objectivec
// 加入频道
[mediaChannel join:@"222" joinParam:nil];
``````

3. 加入频道后收到
    [onJoin](/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onJoin:reason:channelId:)
    回调。

    ``````objectivec
    // 加入频道结果回调
    -(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId
    {
        if (result) {
          // 加入成功
        } else {
          // 加入失败
        }
    }
    ``````

## 创建本地视频画面

1\. 加入频道后，通过
[JCMediaChannel](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html)
中的 selfParticipant 属性获取频道内自身对象。

``````objectivec
// 1. 获得频道成员自身对象
JCMediaChannelParticipant *participant = mediaChannel.selfParticipant;
``````

2. 调用
    [JCMediaChannelParticipant](/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html)
    类中的
    [startVideo](/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/startVideo:renderType:)
    方法打开本地视频预览。该方法会返回一个
    [JCMediaDeviceVideoCanvas](/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html)
    对象，该对象用于将视频渲染到画布上，并管理渲染的方式。（调用此方法会打开摄像头）

示例代码:

``````objectivec
// 2. 打开本地视频预览
JCMediaDeviceVideoCanvas *localCanvas = [participant startVideo:JCMediaDeviceRenderFullScreen pictureSize:JCMediaChannelPictureSizeLarge];
``````

## 创建远端视频画面

视频通话中，通常需要看到其他用户。通过
[JCMediaChannel](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html)
中的 participants 属性获取频道内所有成员对象。

然后调用
[JCMediaChannelParticipant](/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html)
类中的
[startVideo](/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/startVideo:renderType:)
方法设置远端用户的视图。调用该方法会返回一个
[JCMediaDeviceVideoCanvas](/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html)
对象，该对象用于将视频渲染到画布上，并管理渲染的方式。

[startVideo](/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/startVideo:renderType:)
方法调用后，还需要调用
[JCMediaChannel](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html)
中的
[requestVideo](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/requestVideo:pictureSize:)
方法请求频道中其他用户的视频流。

示例代码:

``````objectivec
//取频道内所有成员对象
NSArray* participants = mediaChannel.participants;
for (JCMediaChannelParticipant* participant in participants) {
if (participant.video) {
    //创建远端画面
    JCMediaDeviceVideoCanvas *remoteCanvas = [participant startVideo:JCMediaDeviceRenderFullScreen pictureSize:JCMediaChannelPictureSizeLarge];
    //请求远端视频流
    mediaChannel.requestVideo:participant pictureSize:JCMediaChannelPictureSizeLarge];
}
``````

更多步骤

- 上传本地音频流

由于 SDK 默认不上传本地音频流，因此其他成员将听不到您的声音，如果想让频道中的其他成员听到您的声音，需要调用
[JCMediaChannel](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html)
中的
[enableUploadAudioStream](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadAudioStream:)
方法上传本地音频流。

``````objectivec
// 发送本地音频流
[mediaChannel enableUploadAudioStream:true];
``````

## 离开频道

调用
[leave](/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/leave)
方法离开当前频道。

``````objectivec
[mediaChannel leave];
``````

离开频道后，自身收到
[onLeave](/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:)
回调，其他成员同时收到
[onParticipantLeft](/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onParticipantLeft:)
回调。

## 销毁本地和远端视频画面

在视频挂断后，调用
[JCMediaChannelParticipant](/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html)
里的
[stopVideo](/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/stopVideo:)
销毁本地和远端视频画面。

示例代码:

``````objectivec
-(void)onLeave:(JCMediaChannelReason)reason channelId:(NSString*)channelId {
    if (localCanvas != nil) { // 本地视频销毁
        [participant stopVideo];
    }
    if (remoteCanvas != nil) { // 远端视频销毁
        [participant stopVideo];
    }
}
``````

## 解散频道

如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。

``````objectivec
// 结束频道
[mediaChannel stop];
``````

解散频道后，发起结束的成员收到
[onStop](/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onStop:reason:)
回调，其他成员同时收到
[onLeave](/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:)
回调。 解散失败原因枚举值请参考
[JCMediaChannelReason](/portal/reference/V2.1/ios/Constants/JCMediaChannelReason.html)
。

解散频道后，同样需要调用
[JCMediaChannelParticipant](/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html)
里的
[stopVideo](/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/stopVideo:)
销毁本地和远端视频画面。
