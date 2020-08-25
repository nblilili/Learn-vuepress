---
title: 实现多方通话
---
# 实现多方通话

本章将介绍如何实现多方音视频通话，多方通话的 API 调用时序见下图：

![../../../../\_images/multiaudioworkflow.png](../../../../_images/multiaudioworkflow.png)

## 初始化

调用 [JCMediaDevice
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:)
和 [JCMediaChannel
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/create:mediaDevice:callback:)
以初始化实现多方通话需要的模块：

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
    [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html)
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
``````

- JCMediaChannel create 方法中的 callback 为
    [JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html)
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

1. 调用
    [JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html)
    中的
    [enableUploadAudioStream](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadAudioStream:)
    开启音频流。返回 true 表示正常执行调用流程，false 表示调用异常。

    ``````objectivec
    // 1. 开启音频流
    [mediaDeviceChannel enableUploadAudioStream:true];
    ``````

2. 调用
    [join](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/join:joinParam:)
    方法创建并加入频道。您需要在该方法中传入如下参数：

<!-- end list -->

- channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道
    Uri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。

- joinParam：加入参数，没有则填 nil。 详见
    [JCMediaChannelJoinParam](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannelJoinParam.html)
    对象。

``````objectivec
// 加入频道
[mediaChannel join:@"222" joinParam:nil];
``````

3. 加入频道后收到
    [onJoin](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onJoin:reason:channelId:)
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

## 离开频道

调用
[leave](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/leave)
方法离开当前频道。

``````objectivec
[mediaChannel leave];
``````

离开频道后，自身收到
[onLeave](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:)
回调，其他成员同时收到
[onParticipantLeft](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onParticipantLeft:)
回调。

## 解散频道

如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。

``````objectivec
// 结束频道
[mediaChannel stop];
``````

解散频道后，发起结束的成员收到
[onStop](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onStop:reason:)
回调，其他成员同时收到
[onLeave](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:)
回调。 解散失败原因枚举值请参考
[JCMediaChannelReason](https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCMediaChannelReason.html)
。
