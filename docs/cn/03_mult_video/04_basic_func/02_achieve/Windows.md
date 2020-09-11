---
title: 实现多方视频通话
---
# 实现多方视频通话

本章将介绍如何实现多方音视频通话，多方视频通话的 API 调用时序见下图：

![../../../../\_images/multivideoworkflow.png](../../../../_images/multivideoworkflow.png)

## 初始化

调用
[JCMediaDevice.create()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/cb59bc27-6528-9dbf-c996-de857096f847.htm)
和
[JCMediaChannel.create()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/03ba7506-bd05-93a0-ddd6-605eea7c7ee6.htm)
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
    [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/html/3a00aa12-4e18-cf90-4610-b2c9c63b7a7b.htm)
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
    [JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/html/e21fadeb-6230-0f07-efdc-6f953cf790bc.htm)
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
[enableUploadAudioStream()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/70f2d136-ebf6-12fc-eb1e-2a90622caca7.htm)
开启音频流。调用
[enableUploadVideoStream()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/75fc5ba5-75a9-c704-5bd2-bf011fb8a082.htm)
开启视频流。

``````csharp
/// 1. 开启音频流
mMediaDeviceChannel.enableUploadAudioStream(true);
/// 2. 开启视频流
mMediaDeviceChannel.enableUploadVIdeoStream(true);
``````

1. 创建并加入频道，需要传入 `channelIdOrUri` 和
    [JCMediaChannel.JoinParam](https://developer.juphoon.com/portal/reference/V2.1/windows/html/af4ac634-bbe3-76e3-d1f8-120213ef2fff.htm)
    。

      - `channelIdOrUri` 表示频道 ID 或频道 Uri。

      - `JCMediaChannelJoinParam` 中 `uriMode` 参数设置为 true 时表示传入频道
        Uri，设置其他参数时表示传入频道 ID。传入相同的频道 ID 或相同的频道 Uri 的用户会进入同一个频道。

    ``````csharp
    mMediaChannel.join("222", null);
    ``````

\#. 加入频道后收到
[onJoin()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/535cbae7-841e-ca31-32ea-87c1a840eff1.htm)
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

## 创建本地视频画面

加入频道后，调用
[JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/windows/html/8289e4bf-8045-497b-f584-fc76cad8f8a1.htm)
中的
[getParticipant()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/9e72c43b-5c57-187c-b062-c766eb43e8c9.htm)
获取频道内自身对象， 然后调用
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/html/8ad58616-3028-b8d3-8106-81b8b805c1ea.htm)
中的
[startVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6243f463-7566-cc48-dd7f-1b29ea2604cb.htm)
方法打开本地视频预览。返回对象为
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6a5b853c-d890-c30e-d236-5728d789ace1.htm)。（调用此方法会打开摄像头）

``````csharp
/// 打开本地视频预览
mMediaChannel.getSelfParticipant().startVideo(JCMediaDeviceRenderMode.FULLCONTENT, JCMediaChannelPictureSize.None);
``````

## 创建远端视频画面

加入频道后，调用
[JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/windows/html/8289e4bf-8045-497b-f584-fc76cad8f8a1.htm)
中的
[getParticipants()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6be8ebb1-fe3c-fd9f-c72f-10b99e327ff6.htm)
获取频道内所有成员对象。

然后调用
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/html/8ad58616-3028-b8d3-8106-81b8b805c1ea.htm)
类中的
[startVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6243f463-7566-cc48-dd7f-1b29ea2604cb.htm)
获取远端视频画面。返回对象为
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6a5b853c-d890-c30e-d236-5728d789ace1.htm)。

[startVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6243f463-7566-cc48-dd7f-1b29ea2604cb.htm)
方法调用后，还需要调用
[JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/windows/html/8289e4bf-8045-497b-f584-fc76cad8f8a1.htm)
中的
[requestVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/1a89408a-468e-73b8-6b6c-376811a18dda.htm)
方法请求频道中其他用户的视频流。

``````csharp
/// 获取所有成员对象
List<JCMediaChannelParticipantparticipants = mMediaChannel.getSelfParticipant();
/// 调用创建视频画面的方法
participants.get(0).startVideo(JCMediaDeviceRenderMode.FULLCONTENT, JCMediaChannelPictureSize.None);
/// 请求远端视频流, 此处调用大尺寸视频窗口
mMediaChannel.requestVideo(participants.get(0), Large);
``````

## 离开频道

调用
[leave()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/7f034b94-15ee-8d49-48e3-905fff27f31f.htm)
方法可以离开当前频道。

``````csharp
mMediaChannel.leave();
``````

在多方视频通话中，离开频道还需要调用
[stopVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/851cc6d3-1b5a-8e26-ce3c-a3c1780936d2.htm)
移除视频画面。

``````csharp
mParticipant.stopVideo();
``````

离开频道后，自身收到
[onLeave()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/f356aba3-ebed-a72c-4e34-02a684925a15.htm)
回调，其他成员同时收到
[onParticipantLeft()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/89a35b12-8c2c-247d-e90c-ebe04f3e4521.htm)
回调

``````csharp
/// 离开频道结果回调

public void onLeave(JCMediaChannelReason reason, String channelId) {
    ...
    /// 销毁视频画面
    mParticipant.stopVideo();
}
``````

## 销毁本地和远端视频画面

在视频挂断后，调用
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/html/8ad58616-3028-b8d3-8106-81b8b805c1ea.htm)
里的
[stopVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/851cc6d3-1b5a-8e26-ce3c-a3c1780936d2.htm)
销毁本地和远端视频画面。

``````csharp
mParticipant.stopVideo();
``````

## 解散频道

如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。

``````csharp
/// 结束频道
mMediaChannel.stop();
``````

在多方视频通话中，离开频道还需要调用
[stopVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/851cc6d3-1b5a-8e26-ce3c-a3c1780936d2.htm)
移除视频画面。

``````csharp
mParticipant.stopVideo();
``````

解散频道后，发起结束的成员收到
[onStop()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/d3732af7-2770-2d00-e4cb-e8f658da6c48.htm)
回调，其他成员同时收到
[onLeave()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/f356aba3-ebed-a72c-4e34-02a684925a15.htm)
回调。 解散失败原因枚举值请参考
[MediaChannelReason](https://developer.juphoon.com/portal/reference/V2.1/windows/html/4481d778-9d4d-43fe-f94d-fdfa690dd939.htm)
。

``````csharp
public void onStop(bool result, JCMediaChannelReason reason) {
    /// 销毁视频， canvas 为 JCMediaDeviceVideoCanvas 对象实例
    mParticipant.stopVideo();
    canvas = null;
}
``````
