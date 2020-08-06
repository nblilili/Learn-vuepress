---
title: 实现一对一视频通话
---
# 实现一对一视频通话

本章将介绍如何实现一对一视频通话，一对一视频通话的 API 调用时序见下图：

![../../../../\_images/1-1workflowandroid.png](../../../../_images/1-1workflowandroid.png)



## 初始化

调用
[JCMediaDevice.create()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaDevice.html#create-com.juphoon.cloud.JCClient-com.juphoon.cloud.JCMediaDeviceCallback-)
和
[JCCall.create()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#create-com.juphoon.cloud.JCClient-com.juphoon.cloud.JCMediaDevice-com.juphoon.cloud.JCCallCallback-)
以初始化实现一对一通话需要的模块



```java 
// 声明对象
JCMediaDevice mMediaDevice;
JCCall mCall;

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
    //2. 通话类
    mCall = JCCall.create(mClient, mMediaDevice, new JCCallCallback() {
        @Override
        public void onCallItemAdd(JCCallItem jcCallItem) {

        }

        @Override
        public void onCallItemRemove(JCCallItem jcCallItem, int i, String s) {

        }

        @Override
        public void onCallItemUpdate(JCCallItem jcCallItem, JCCallItem.ChangeParam changeParam) {

        }

        @Override
        public void onMessageReceive(String s, String s1, JCCallItem jcCallItem) {

        }

        @Override
        public void onMissedCallItem(JCCallItem jcCallItem) {

        }
    });
}
```







## 媒体参数设置

一对一视频通话支持智能硬件设备集成，需要在发起通话前设置媒体参数



```java 
// 根据模式生成配置参数
JCCall.MediaConfig mediaConfig = JCCall.MediaConfig.generateByMode(JCCall.MediaConfig.MODE_INTELLINGENT_HARDWARE_SMALL);
// 更新媒体参数
JCManager.getInstance().call.updateMediaConfig(mediaConfig);
```



菊风提供四种配置模式供开发者选择，并开放相关属性供开发者进行灵活的自定义配置，具体方法请查看
[<span class="std std-ref">媒体参数设置</span>](../../05_adv_func/Android/03_intelligent_hardware.html#android)
。





## 拨打通话

调用
[call()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#call-java.lang.String-boolean-java.lang.String-)
发起视频通话，需要填写的参数有：

  - `userID` 填写对方的用户ID。

  - `isVideo` 选择是否为视频通话， true 表示拨打视频通话， false 表示拨打语音通话。

  - [extraParam()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#call-java.lang.String-boolean-java.lang.String-)
    为自定义透传字符串， 可通过
    [getExtraParam()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#getExtraParam--)
    方法获取该属性。



```java 
// 发起语音呼叫
mCall.call(userID, isVideo, null);
```



拨打通话后，主叫和被叫均会收到新增通话的回调
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallCallback.html#onCallItemAdd-com.juphoon.cloud.JCCallItem-)
，此时通话状态变为
[STATE\_PENDING](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#STATE_PENDING)
。您可以通过重写
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallCallback.html#onCallItemAdd-com.juphoon.cloud.JCCallItem-)
执行逻辑操作。



```java 
@Override
public void onCallItemAdd(JCCallItem item) {
    // 业务逻辑
    if (item.direction == JCCall.DIRECTION_IN) {
        // 如果是被叫
        ...
    }else{
        // 如果是主叫
        ...
    }
}
```



::: tip



如果主叫想取消通话，可以直接转到挂断通话部分。调用挂断接口后，通话状态变为 STATE\_CANCEL。

:::





## 创建本地视频画面

发起通话后，调用
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
类中的
[startSelfVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#startSelfVideo-int-)
方法打开本地视频预览。需要填入参数
[JCMediaDevice.RenderType](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaDevice.html#RENDER_FULL_AUTO)
以选择渲染模式。

示例代码:



```java 
// 1. 发起视频呼叫
mCall.call("222", true, null);
// 2. 获取当前活跃通话
JCCallItem mCallItem = mCall.getActiveCallItem();
// 3. 打开本地视频预览，这里选择的是自适应模式
mCallItem.startSelfVideo(JCMediaDevice.RENDER_FULL_AUTO);
```







## 应答通话

被叫收到
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallCallback.html#onCallItemAdd-com.juphoon.cloud.JCCallItem-)
回调，在回调中调用
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
中的
[getVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#getVideo--)
方法获取 `video` 属性来判断是视频呼入还是语音呼入，从而做出相应的处理。



```java 
@Override
public void onCallItemAdd(JCCallItem item) {
    // 1. 如果是视频呼入且在振铃中
    if (item.getDirection() == JCCall.DIRECTION_IN && item.getVideo()) {
        // 2. 做出相应的处理，如在界面上显示“振铃中”
        ...
    }
}
```



调用
[answer()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#answer-java.lang.String-boolean-java.lang.String-)
接听通话。



```java 
mCall.answer(item, true);
```



通话接听后，通话状态变为 STATE\_CONNECTING。

::: tip



如果被叫要在此时拒绝通话，请调用挂断通话的接口。这种情况下调用挂断后，通话状态变为 STATE\_CANCELED。

:::





## 创建远端视频画面

视频通话中，通常需要看到其他用户。被叫接听通话后，双方将建立连接，此时，主叫和被叫都将会收到通话更新的回调（onCallItemUpdate），通话状态变为
STATE\_TALKING。

调用
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
类中的
[startOtherVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#startOtherVideo-int-)
获取远端视频画面。返回对象为
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaDeviceVideoCanvas.html)。

示例代码:



```java 
@Override
public void onCallItemUpdate(JCCallItem item) {
    // 如果对端在上传视频流（uploadVideoStreamOther）
    // mRemoteCanvas 为 JCMediaDeviceVideoCanvas 对象实例，请在方法前声明。
    if (item.getState() == JCCall.STATE_TALKING && mRemoteCanvas == null && item.getUploadVideoStreamOther()) {
        // 获取远端视频画面，renderId来源JCCallItem对象
        JCMediaDeviceVideoCanvas mRemoteCanvas = item.startOtherVideo(JCMediaDevice.RENDER_FULL_CONTENT);
        ...
    }
}
```







## 挂断通话

主叫或者被叫均可以挂断通话。

1.  调用
    [getActiveCallItem()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#getActiveCallItem--)
    获取当前活跃的通话对象:
    
    
    
    ```java 
    mCall.getActiveCallItem();
    ```
    
    

2.  调用
    [term()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#term-com.juphoon.cloud.JCCallItem-int-java.lang.String-)
    挂断当前活跃通话:
    
    
    
    ```java 
    mCall.term(item, reason, description);
    ```
    
    

示例代码:



```java 
// 1. 获取当前活跃通话
JCCallItem item = mCall.getActiveCallItem();
// 2. 挂断当前活跃通话
mCall.term(item, JCCall.REASON_NONE, null);
```







## 销毁本地和远端视频画面

通话挂断后，收到移除通话的回调
[onCallItemRemove()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallCallback.html#onCallItemRemove-com.juphoon.cloud.JCCallItem-int-java.lang.String-)
，通话状态变为
[STATE\_OK](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#STATE_OK)
，此时您需要分别调用
[stopSelfVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#stopSelfVideo--)
和
[stopOtherVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#stopOtherVideo--)
销毁本地和远端视频画面。

示例代码:



```java 
@Override
public void onCallItemRemove(JCCallItem item, @JCCall.CallReason int reason, String description) {
    // 销毁本地视频画面
    item.stopSelfVideo();
    // 销毁远端视频画面
    item.stopOtherVideo();
}
```







## 待机功耗优化方案

针对手表端 JC SDK 待机功耗的问题，菊风提供对应的解决方案，详细内容参考：
[<span class="std std-ref">待机功耗优化方案</span>](../../05_adv_func/Android/03_intelligent_hardware.html#id5)
。














