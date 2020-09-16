---
title: 实现多方语音通话
---
# 实现多方语音通话

本章将介绍如何实现多方语音通话，多方语音通话的 API 调用时序见下图：

![../../../../\_images/multiaudioworkflow.png](../../../../_images/multiaudioworkflow.png)

## 初始化

调用
[JCMediaDevice.create()](/portal/reference/V2.1/windows/html/cb59bc27-6528-9dbf-c996-de857096f847.htm)
和
[JCMediaChannel.create()](/portal/reference/V2.1/windows/html/03ba7506-bd05-93a0-ddd6-605eea7c7ee6.htm)
以初始化实现多方通话需要的模块:

``````csharp
/// 声明对象
JCMediaDevice mMediaDevice;
JCMediaChannel mMediaChannel;

/// 初始化函数
public bool initialize(Context context) {

    /// 1. 媒体类
    mMediaDevice = JCMediaDevice.create(mClient, this);
    /// 2. 媒体通道类
    mMediaChannel = JCMediaChannel.create(client, mediaDevice, this);
}
``````

其中：

- JCMediaDevice create 方法中的 this 为实现
    [JCMediaDeviceCallback](/portal/reference/V2.1/windows/html/3a00aa12-4e18-cf90-4610-b2c9c63b7a7b.htm)
    接口的对象，用于将媒体设备相关的事件通知给上层。

JCMediaDeviceCallback 中的主要方法如下

``````csharp
//摄像头变化
public void onCameraUpdate()
{
}
//音频输出变化
public void onAudioOutputTypeChange(string audioOutputType)
{
}
``````

- JCMediaChannel create 方法中的 this 为实现
    [JCMediaChannelCallback](/portal/reference/V2.1/windows/html/e21fadeb-6230-0f07-efdc-6f953cf790bc.htm)
    接口的对象，用于将频道中的相关事件通知给上层

JCMediaChannelCallback 中的主要方法如下

``````csharp
//自身状态变化回调
public void onMediaChannelStateChange(JCMediaChannelState state, JCMediaChannelState oldState)
{
}
//频道属性变化
public void onMediaChannelPropertyChange(JCMediaChannel.PropChangeParam propChangeParam)
{
}
//加入频道结果回调
public void onJoin(bool result, JCMediaChannelReason reason, string channelId)
{
}
//离开频道结果回调
public void onLeave(JCMediaChannelReason reason, string channelId)
{
}
//解散频道结果回调
public void onStop(bool result, JCMediaChannelReason reason)
{
}
//查询频道结果回调
public void onQuery(int operationId, bool result, JCMediaChannelReason reason, JCMediaChannelQueryInfo queryInfo)
{
}
//成员加入回调
public void onParticipantJoin(JCMediaChannelParticipant participant)
{
}
//成员离开回调
public void onParticipantLeft(JCMediaChannelParticipant participant)
{
}
//成员更新回调
public void onParticipantUpdate(JCMediaChannelParticipant participant, JCMediaChannelParticipant.ChangeParam changeParam)
{
}
//成员声音变化
public void onParticipantVolumeChange(JCMediaChannelParticipant participant)
{
}
``````

## 加入频道

\#. 调用
[enableUploadAudioStream()](/portal/reference/V2.1/windows/html/70f2d136-ebf6-12fc-eb1e-2a90622caca7.htm)
开启音频流。

``````csharp
/// 1. 开启音频流
mMediaDeviceChannel.enableUploadAudioStream(true);
``````

1. 创建并加入频道，需要传入 `channelIdOrUri` 和
    [JCMediaChannel.JoinParam](/portal/reference/V2.1/windows/html/af4ac634-bbe3-76e3-d1f8-120213ef2fff.htm)
    。

      - `channelIdOrUri` 表示频道 ID 或频道 Uri。

      - `JCMediaChannelJoinParam` 中 `uriMode` 参数设置为 true 时表示传入频道
        Uri，设置其他参数时表示传入频道 ID。传入相同的频道 ID 或相同的频道 Uri 的用户会进入同一个频道。

    ``````csharp
    mMediaChannel.join("222", null);
    ``````

\#. 加入频道后收到
[onJoin()](/portal/reference/V2.1/windows/html/535cbae7-841e-ca31-32ea-87c1a840eff1.htm)
回调。

``````csharp
public void onJoin(bool result, JCMediaChannelReason reason, String channelId) {
    if (result) {
        /// 加入频道成功
    } else {
        /// 加入频道失败
    }
}
``````

## 离开频道

调用
[leave()](/portal/reference/V2.1/windows/html/7f034b94-15ee-8d49-48e3-905fff27f31f.htm)
方法可以离开当前频道。

``````csharp
mMediaChannel.leave();
``````

离开频道后，自身收到
[onLeave()](/portal/reference/V2.1/windows/html/f356aba3-ebed-a72c-4e34-02a684925a15.htm)
回调，其他成员同时收到
[onParticipantLeft()](/portal/reference/V2.1/windows/html/89a35b12-8c2c-247d-e90c-ebe04f3e4521.htm)
回调

``````csharp
/// 离开频道结果回调

public void onLeave(JCMediaChannelReason reason, String channelId) {
    ...
}
``````

## 解散频道

如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。

``````csharp
/// 结束频道
mMediaChannel.stop();
``````

解散频道后，发起结束的成员收到
[onStop()](/portal/reference/V2.1/windows/html/d3732af7-2770-2d00-e4cb-e8f658da6c48.htm)
回调，其他成员同时收到
[onLeave()](/portal/reference/V2.1/windows/html/f356aba3-ebed-a72c-4e34-02a684925a15.htm)
回调。 解散失败原因枚举值请参考
[MediaChannelReason](/portal/reference/V2.1/windows/html/4481d778-9d4d-43fe-f94d-fdfa690dd939.htm)
。

``````csharp
public void onStop(bool result, JCMediaChannelReason reason) {
    ...
}
``````
