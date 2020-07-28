---
title: 实现互动直播
---
# 实现互动直播

本章将介绍如何实现互动直播，互动直播的 API 调用时序见下图：

![../../../../\_images/multivideoworkflow.png](../../../../_images/multivideoworkflow.png)



## 初始化

调用 [JCMediaDevice
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:)
和 [JCMediaChannel
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/create:mediaDevice:callback:)
以初始化实现多方通话需要的模块：:



```objective
//初始化
-(bool)initialize {
   //1. 媒体类
   JCMediaDevice *mediaDevice = [JCMediaDevice create:client callback:self];
   //2. 媒体通道类
   JCMediaChannel *mediaChannel = [JCMediaChannel create:client mediaDevice:mediaDevice callback:self];
   return client.state == JCClientStateLogined;
}
```



其中：

  - JCMediaDevice create 方法中的 callback 为
    [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html)
    协议的代理对象，该协议用于将媒体设备相关的事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现
    JCMediaDeviceCallback 的方法。

JCMediaDeviceCallback 中的主要方法如下



```objective
//摄像头变化
-(void)onCameraUpdate;

//音频输出变化
-(void)onAudioOutputTypeChange:(NSString*)audioOutputType;

//声音中断恢复
-(void)onAudioInerruptAndResume:(BOOL)interrupt;
```



  - JCMediaChannel create 方法中的 callback 为
    [<span id="id9" class="problematic">|JCMediaChannelCallback|</span>](#id8)
    协议的代理对象，该协议用于将频道中的相关事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现
    JCMediaChannelCallback 的方法。

JCMediaChannel 中的主要方法如下



```objective
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
```







## 角色设置

直播有两种用户角色：主播和观众。加入频道前要先进行角色的设置。默认的角色为观众。其中主播可以上传本地音视频流，观众只能看到主播的画面、听到主播的声音。

角色值可以根据
[JCMediaChannelCustomRole](https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCMediaChannelCustomRole.html)
枚举值进行自定义，例如



```objective
//自定义主播角色
JCMediaChannelCustomRole ROLE_BROASCASTER = JCMediaChannelCustomRole0;
//自定义观众角色
JCMediaChannelCustomRole ROLE_AUDIENCE = JCMediaChannelCustomRole1;
```



调用
[setCustomRole](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/setCustomRole:participant:)
设置自己的角色以进入频道。



```objective
// 设置角色，participant(第二个参数） 值为 nil 代表设置自身的角色
[mediaChannel setCustomRole:ROLE_BROASCASTER participant:nil];
```







## 加入频道

加入频道前需根据成员角色进行音视频流上传的控制，语音互动直播中，主播只需要上传本地音频流，观众则不需要。

1\. 调用
[enableUploadAudioStream](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadAudioStream:)
开启音频流。



```objective
-(void)joinRoom:(JCMediaChannelCustomRole)customRole {
    //根据角色上传本地音视频流
    [mediaChannel enableUploadVideoStream:false];
    [mediaChannel enableUploadAudioStream:customRole == ROLE_BROASCASTER];
    [mediaChannel enableAudioOutput:true];
}
```



2.  角色设置后，调用
    [join](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/join:joinParam:)
    方法创建并加入频道。您需要在该方法中传入如下参数：

<!-- end list -->

  - channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道
    Uri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。

  - joinParam：加入参数，没有则填 nil。 详见
    [JCMediaChannelJoinParam](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannelJoinParam.html)
    对象。



```objective
[mediaChannel join:@"222" joinParam:nil];
```



3.  加入频道后收到
    [onJoin](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onJoin:reason:channelId:)
    回调。
    
    
    
    ```objective
    // 加入频道结果回调
    -(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId
    {
        if (result) {
          // 加入成功
        } else {
          // 加入失败
        }
    }
    ```
    
    





## 离开频道

调用
[leave](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/leave)
方法离开当前频道。



```objective
[mediaChannel leave];
```



离开频道后，自身收到
[onLeave](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:)
回调，其他成员同时收到
[onParticipantLeft](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onParticipantLeft:)
回调。





## 解散频道

如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。



```objective
// 结束频道
[mediaChannel stop];
```



解散频道后，发起结束的成员收到
[onStop](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onStop:reason:)
回调，其他成员同时收到
[onLeave](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:)
回调。 解散失败原因枚举值请参考
[JCMediaChannelReason](https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCMediaChannelReason.html)
。

解散频道后，同样需要调用
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html)
里的
[stopVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/stopVideo:)
销毁本地和远端视频画面。














