---
title: 实现多方通话
---
# 实现多方通话

本章将介绍如何实现多方视频通话，多方视频通话的 API 调用时序见下图：

![../../../../\_images/multivideoworkflow.png](../../../../_images/multivideoworkflow.png)

## 初始化

首先继承
[JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html)
对象和
[JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html)
对象，并实现这两个对象中的纯虚函数。

``````cpp
class JCManager : public JCMediaDeviceCallback, public JCMediaChannelCallback
{
public:

    //自身状态变化回调
    virtual void onMediaChannelStateChange(JCMediaChannelState state, JCMediaChannelState oldState);
    //频道属性变化回调
    virtual void onMediaChannelPropertyChange(JCMediaChannelPropChangeParam propChangeParam);
    //加入频道结果回调
    virtual void onJoin(bool result, JCMediaChannelReason reason, const char* channelId);
    //离开频道结果回调
    virtual void onLeave(JCMediaChannelReason reason, const char* channelId);
    //解散频道结果回调
    virtual void onStop(bool result, JCMediaChannelReason reason);
    //查询频道结果回调
    virtual void onQuery(int operationId, bool result, JCMediaChannelReason reason, JCMediaChannelQueryInfo* queryInfo);
    //新成员加入回调
    virtual void onParticipantJoin(JCMediaChannelParticipant* participant);
    //成员离开回调
    virtual void onParticipantLeft(JCMediaChannelParticipant* participant);
    //成员更新回调
    virtual void onParticipantUpdate(JCMediaChannelParticipant* participant, JCMediaChannelParticipant::ChangeParam changeParam);
    //频道中收到消息回调
    virtual void onMessageReceive(const char* type, const char* content, const char* fromUserId);
    //邀请sip成员结果回调
    virtual void onInviteSipUserResult(int operationId, bool result, JCMediaChannelReason reason);
    //成员声音变化
    virtual void onParticipantVolumeChange(JCMediaChannelParticipant* participant);

public:
    //媒体设备对象
    JCMediaDevice* mediaDevice;
    //媒体通道对象
    JCMediaChannel* mediaChannel;
};
``````

然后调用
[createJCMediaDevice](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_device_8h.html#a96a10766264f3c12af531b70cb9c9749)
和
[createJCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_8h.html#acaca886fc345f798056ff2b9c2ee11ac)
以初始化多方视频通话需要的模块：

``````cpp
//初始化
bool JCManager::initialize()
{
    //1. 媒体类
    mediaDevice = createJCMediaDevice(client, this);
    //1. 媒体通道类
    mediaChannel = createJCMediaChannel(client, mediaDevice, this);
    return true;
}
``````

其中：

- JCMediaDevice create 方法中的 this 为
    [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html)
    的派生类，该类于将媒体设备相关的事件通知给上层。因此需要先创建 JCMediaDeviceCallback
    的派生类，然后在该派生类中实现 JCMediaDeviceCallback
    的纯虚函数。

- JCMediaChannel create 方法中的 this 为
    [JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html)
    的派生类，该类用于将频道中的相关事件通知给上层。因此需要先创建 JCMediaChannelCallback
    的派生类，然后在该派生类中实现 JCMediaChannelCallback
    的纯虚函数。

::: tip

回调中的对象只能在该回调中使用，不能保存，上层可通过对应的方法获取通话对象。

:::

## 加入频道

JC SDK 默认不上传本地音频流，因此如果需要进入会议中就能听到彼此的声音，需要在加入频道前预打开音频流上传的标识:

1\. 调用
[enableUploadAudioStream](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a2b08d87b38fe2fd7a394e2786241cc4c)
开启音频流。

``````cpp
// 开启音频流
JCManager::shared()->mediaChannel->enableUploadAudioStream(true);
``````

::: tip

该接口可以在加入频道之前调用，也可以在加入频道之后调用。两者区别具体如下。

如果在加入频道前调用，只是打开或关闭“上传音频”的标识，但不会发送数据，当加入频道成功时会根据 enableUploadAudioStream
设定的值来确定是否上传音频数据。同时，频道中的其他成员会收到该成员“是否上传音频“的状态变化回调(onParticipantUpdate)。

如果在加入频道后调用，则会开启或者关闭发送本地音频流数据，服务器也会根据 enableUploadAudioStream
设定的值来确定是否上传音频数据。同时，频道中的其他成员会收到该成员“是否上传音频“的状态变化回调(onParticipantUpdate)。

此外，此方法还可以实现开启或关闭静音的功能。当 enable 值为 false
，将会停止发送本地音频流，此时您可以听到其他成员的声音，但是其他成员将听不到您的声音，从而实现静音功能。

:::

2. 调用
    [join](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#acfdb1da52955cf8b01d95527eb28890b)
    方法加入频道。你需要在该方法中传入如下参数：

<!-- end list -->

- channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道
    Uri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。

- joinParam：加入参数，没有则填 NULL。详见
    [JCMediaChannelJoinParam](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_join_param.html)
    对象。

``````cpp
// 加入频道
JCManager::shared()->mediaChannel->join("频道 ID", NULL);
``````

3\. 加入频道后会收到
[onJoin](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a430bd78b28e189ee3c9564ddb7db213d)
回调。

``````cpp
// 加入频道结果回调
void JCManager::onJoin(bool result, JCMediaChannelReason reason, const char* channelId)
{
    if (result) {
    //加入成功的逻辑
    ...
    } else {
    //加入失败的逻辑
    ...
    }
}
``````

## 创建本地视频画面

1\. 加入频道后，调用
[JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html)
中的
[getSelfParticipant](http://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#afeb3c17dc9d0827fe27fa189cd0a5c9e)
方法获取频道内自身对象。该方法返回
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
对象

``````cpp
// 1. 获得频道成员自身对象
JCMediaChannelParticipant* participant = JCManager::shared()->mediaChannel->getSelfParticipant();
``````

2. 调用
    [JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
    类中的
    [startVideo](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a238fccab8cc09e1ef843a43aad4ffac9)
    方法打开本地视频预览。该方法会返回一个
    [JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html)
    对象，该对象用于将视频渲染到画布上，并管理渲染的方式。（调用此方法会打开摄像头）

示例代码

``````cpp
// 2. 打开本地视频预览
JCMediaDeviceVideoCanvas* mConfSelfCanvas;
if (mediaChannel->getUploadLocalVideo() && mConfSelfCanvas == NULL)
            {
                    if (strlen(JCManager::shared()->mediaDevice->getCamera().cameraId) > 0)
                    {
            //创建本地视频画面
                            mConfSelfCanvas = mediaChannel->getSelfParticipant()->startVideo(
                                            mWndConfSelfVideo.m_hWnd,
                                            JCMediaDeviceRenderModeFullContent,
                                            JCMediaChannelPictureSizeLarge);

                    }
            }
``````

## 创建远端视频画面

视频通话中，通常需要看到其他用户。通过
[JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html)
中的 participants 属性获取频道内所有成员对象。

然后调用
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
类中的
[startVideo](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a238fccab8cc09e1ef843a43aad4ffac9)
方法设置远端用户的视图。调用该方法会返回一个
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html)
对象，该对象用于将视频渲染到画布上，并管理渲染的方式。

示例代码

``````cpp
//取频道内所有成员对象
JCMediaDeviceVideoCanvas* mConfOtherCanvas;
std::list<JCMediaChannelParticipant*>* participants = NULL;
JCMediaChannelParticipant* other = NULL;
participants = mediaChannel->getParticipants();
for (JCMediaChannelParticipant* participant : *participants) {
    if (!participant->isSelf())
    {
        other = participant;
        break;
    }
}
if (other != NULL && other->isVideo())
{
    if (mConfOtherCanvas == NULL)
    {
        //创建远端画面
        mConfOtherCanvas = participant->startVideo(
                        mWndConfOtherVideo.m_hWnd,
                        JCMediaDeviceRenderModeFullContent,
                        JCMediaChannelPictureSizeLarge);
    }
}
``````

## 离开频道

调用
[leave](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a93c19137044fec1568f73f1f6dbfee84)
方法离开当前频道。

``````cpp
JCManager::shared()->mediaChannel->leave();
``````

离开频道后，自身收到
[onLeave](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71)
回调，其他成员同时收到
[onParticipantLeft](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a5888058878f3aaa382b3ede94228a6e8)
回调。

``````cpp
// 离开频道回调
void JCManager::onLeave(JCMediaChannelReason reason, const char* channelId);
{
    //离开频道的逻辑
}
``````

## 销毁本地和远端视频画面

在视频挂断后，调用
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
里的
[stopVideo](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a5076a035465e7f5c307679a6bf60fb8c)
销毁本地和远端视频画面。

示例代码

``````cpp
if (!mediaChannel->getUploadLocalVideo() && mConfSelfCanvas != NULL)
{
    //销毁本地视频画面
    mediaChannel->getSelfParticipant()->stopVideo();
    mConfSelfCanvas = NULL;
    mWndConfSelfVideo.Invalidate();
}
if (mConfOtherCanvas != NULL)
{
    for (JCMediaChannelParticipant* participant : *participants)
    {
        if (!participant->isSelf())
        {
            //销毁远端视频画面
            participant->stopVideo();
        }
    }
    mConfOtherCanvas = NULL;
    mWndConfOtherVideo.Invalidate();
}
``````

## 解散频道

如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。

``````cpp
// 结束频道
JCManager::shared()->mediaChannel->stop();
``````

解散频道后，发起结束的成员收到
[onStop](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a61a1d5a81563d34f80e70541a114a74a)
回调，其他成员同时收到
[onLeave](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71)
回调。 解散失败原因枚举值请参考
[JCMediaChannelReason](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_constants_8h.html#a24a2154e4bb2db63c75b31cd2b021fc3)
。

``````cpp
void JCManager::onStop(bool result, JCMediaChannelReason reason)
{
    //结束频道的处理逻辑
}
``````

解散频道后，同样需要调用
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
里的
[stopVideo](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a5076a035465e7f5c307679a6bf60fb8c)
销毁本地和远端视频画面。

至此，您已经完成基础的多方视频通话功能。
