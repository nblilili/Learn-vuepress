---
title: 实现语音互动直播
---
# 实现语音互动直播

本章将介绍如何实现语音互动直播，实现互动直播的 API 调用时序见下图：

![../../../../\_images/multiaudioworkflow.png](../../../../_images/multiaudioworkflow.png)



## 初始化

调用
[JCMediaDevice.create()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaDevice.html#create-com.juphoon.cloud.JCClient-com.juphoon.cloud.JCMediaDeviceCallback-)
和
[JCMediaChannel.create()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#create-com.juphoon.cloud.JCClient-com.juphoon.cloud.JCMediaDevice-com.juphoon.cloud.JCMediaChannelCallback-)
以初始化实现多方通话需要的模块：:



```java 
// 声明对象
JCMediaDevice mMediaDevice;
JCMediaChannel mMediaChannel;

// 初始化函数
public boolean initialize(Context context) {

    //1. 媒体类
    mMediaDevice = JCMediaDevice.create(mClient, new JCMediaDeviceCallback() {
        @Override
        public void onCameraUpdate() {

        }
        @Override
        public void onAudioOutputTypeChange(int i) {

        }
        @Override
        public void onRenderReceived(JCMediaDeviceVideoCanvas jcMediaDeviceVideoCanvas) {

        }
        @Override
        public void onRenderStart(JCMediaDeviceVideoCanvas jcMediaDeviceVideoCanvas) {

        }
    });
    // 2. 媒体通道类
    mMediaChannel = JCMediaChannel.create(client, mediaDevice, new JCMediaChannelCallback() {
        @Override
        public void onMediaChannelStateChange(int i, int i1) {

        }
        @Override
        public void onMediaChannelPropertyChange(JCMediaChannel.PropChangeParam propChangeParam) {

        }
        @Override
        public void onJoin(boolean b, int i, String s) {

        }
        @Override
        public void onLeave(int i, String s) {

        }
        @Override
        public void onStop(boolean b, int i) {

        }
        @Override
        public void onQuery(int i, boolean b, int i1, JCMediaChannelQueryInfo jcMediaChannelQueryInfo) {

        }
        @Override
        public void onParticipantJoin(JCMediaChannelParticipant jcMediaChannelParticipant) {

        }
        @Override
        public void onParticipantLeft(JCMediaChannelParticipant jcMediaChannelParticipant) {

        }
        @Override
        public void onParticipantUpdate(JCMediaChannelParticipant jcMediaChannelParticipant, JCMediaChannelParticipant.ChangeParam changeParam) {

        }
        @Override
        public void onMessageReceive(String s, String s1, String s2) {

        }
        @Override
        public void onInviteSipUserResult(int i, boolean b, int i1) {

        }
        @Override
        public void onParticipantVolumeChange(JCMediaChannelParticipant jcMediaChannelParticipant) {

        }
    });
}
```







## 角色设置

加入频道前要先进行角色的设置。其中角色设置包括主播和观众。 角色值可以根据
[JCMediaChannel.CustomRole](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#CUSTOM_ROLE_0)
枚举值进行自定义，例如



```java 
//自定义主播角色，根据CustomState枚举值自定义角色
int ROLE_BROASCASTER = JCMediaChannel.CUSTOM_ROLE_0;
//自定义观众角色，根据CustomState枚举值自定义角色
int ROLE_AUDIENCE = JCMediaChannel.CUSTOM_ROLE_1;
```



调用
[setCustomRole()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#setCustomRole-int-com.juphoon.cloud.JCMediaChannelParticipant-)
设置自己的角色以进入频道。



```java 
// 设置角色，participant(第二个参数） 值为 null 代表设置自身的角色
mediaChannel.setCustomRole(ROLE_BROASCASTER, null);
```







## 加入频道

1.  调用
    [enableUploadAudioStream()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#enableUploadAudioStream-boolean-)
    开启音频流。
    
    
    
    ```java 
    // 1. 开启音频流
    mMediaDeviceChannel.enableUploadAudioStream(true);
    ```
    
    

2.  创建并加入频道，需要传入 `channelIdOrUri` 和
    [JCMediaChannel.JoinParam](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.JoinParam.html)
    。
    
    > 
    > 
    > 
    > 
    >   - `channelIdOrUri` 表示频道 ID 或频道 Uri。
    > 
    >   - `JCMediaChannelJoinParam` 中 `uriMode` 参数设置为 true 时表示传入频道
    >     Uri，设置其他参数时表示传入频道 ID。传入相同的频道 ID 或相同的频道 Uri 的用户会进入同一个频道。
    > 
    > 
    > 
    > ```java 
>     mMediaChannel.join("222", null);
    > ```
    > 
    > 
    > 
    > 

3.  加入频道后收到
    [onJoin()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onJoin-boolean-int-java.lang.String-)
    回调。
    
    
    
    ```java 
    @Override
    public void onJoin(boolean result, @JCMediaChannel MediaChannelReason int reason, String channelId) {
        if (result) {
            // 加入频道成功
        } else {
            // 加入频道失败
        }
    }
    ```
    
    





## 离开频道

调用
[leave()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#leave--)
方法可以离开当前频道。



```java 
mMediaChannel.leave();
```



在多方视频通话中，离开频道还需要调用
[stopVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html#stopVideo--)
移除视频画面。



```java 
mParticipant.stopVideo();
```



离开频道后，自身收到
[onLeave()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onLeave-int-java.lang.String-)
回调，其他成员同时收到
[onParticipantLeft()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onParticipantLeft-com.juphoon.cloud.JCMediaChannelParticipant-)
回调。





## 解散频道

如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。



```java 
// 结束频道
mMediaChannel.stop();
```



在多方视频通话中，离开频道还需要调用
[stopVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html#stopVideo--)
移除视频画面。



```java 
mParticipant.stopVideo();
```



解散频道后，发起结束的成员收到
[onStop()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onStop-boolean-int-)
回调，其他成员同时收到
[onLeave()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onLeave-int-java.lang.String-)
回调。 解散失败原因枚举值请参考
[MediaChannelReason](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#REASON_ALREADY_JOINED)
。



```java 
@Override
public void onStop(boolean result, @JCMediaChannel.MediaChannelReason int reason) {
    // 销毁视频， canvas 为 JCMediaDeviceVideoCanvas 对象实例
    mParticipant.stopVideo();
    canvas = null;
}
```
















