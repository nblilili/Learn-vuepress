---
title: 实现一对一通话
---
# 实现一对一通话

本章将介绍如何实现一对一视频通话，一对一通话的 API 调用时序见下图：

![../../../../\_images/1-1workflowios.png](../../../../_images/1-1workflowios.png)

## 初始化

调用 [JCMediaDevice
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:)
和 [JCCall
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/create:mediaDevice:callback:)
以初始化实现一对一通话需要的模块。

``````objectivec
//初始化
-(bool)initialize {
    //1. 媒体类
    JCMediaDevice *mediaDevice = [JCMediaDevice create:client callback:self];
    //2. 通话类
    JCCall *call = [JCCall create:client mediaDevice:mediaDevice callback:self];
    return client.state == JCClientStateLogined;
}
``````

其中：

- JCMediaDevice create 方法中的 callback 为
    [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html)
    协议的代理对象，该协议用于将媒体设备相关的事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现
    JCMediaDeviceCallback 的方法。

JCMediaDeviceCallback 中的主要方法如下。

``````objectivec
//摄像头变化
-(void)onCameraUpdate;

//音频输出变化
-(void)onAudioOutputTypeChange:(NSString*)audioOutputType;

//声音中断恢复
-(void)onAudioInerruptAndResume:(BOOL)interrupt;
``````

- JCCall create 方法中的 callback 为
    [JCCallCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html)
    协议的代理对象，该协议用于将通话相关的事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现
    JCCallCallback 的方法。

JCCallCallback 中的主要方法如下。

``````objectivec
//新增通话回调
-(void)onCallItemAdd:(JCCallItem* __nonnull)item;

//移除通话
-(void)onCallItemRemove:(JCCallItem* __nonnull)item reason:(JCCallReason)reason description:(NSString * __nullable)description;

//通话状态更新回调（当上层收到此回调时，可以根据 JCCallItem 对象获得该通话的所有信息及状态，从而更新该通话相关UI）
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam;
``````

## 媒体参数设置

一对一视频通话支持智能硬件设备集成，需要在发起通话前设置媒体参数:

``````objectivec
// 根据模式生成配置参数
JCCallMediaConfig *mediaConfig = [JCCallMediaConfig generateByMode:JCCallMediaConfigModeIntelligentHardware];
// 设置媒体参数
JCManager.shared.call.mediaConfig = mediaConfig;
``````

菊风提供三种配置模式供开发者选择，并开放相关属性供开发者进行灵活的自定义配置，具体方法请查看
[<span class="std std-ref">媒体参数设置</span>](../../05_adv_func/iOS/03_intelligent_hardware.html#ios)
。

## 拨打通话

调用
[call](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/call:video:extraParam:)
发起视频通话，需要填写的参数有：

- `userID` 填写对方的用户ID。

- `video` 选择是否为视频通话， true 表示拨打视频通话， false 表示拨打语音通话。

- `extraParam` 为自定义透传字符串， 可通过 JCCallItem 对象中的 extraParam 属性获得。

``````objectivec
// 发起视频呼叫
[call call:@"userID" video:true extraParam:@"自定义透传字符串"];
``````

拨打通话后，主叫和被叫均会收到新增通话的回调
[onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
，此时通话状态变为 JCCallStatePending 。您可以在上层实现
[onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
方法并处理相关的逻辑。

示例代码:

``````objectivec
// 收到新增通话回调
-(void)onCallItemAdd:(JCCallItem* __nonnull)item {
    // 业务逻辑
    if (item.direction == JCCallDirectionIn) {
        // 如果是呼入
        ...
    } else {
        // 如果是呼出
        ...
    }
}
``````

::: tip

如果主叫想取消通话，可以直接转到挂断通话部分。调用挂断接口后，通话状态变为 JCCallStateCancel。

:::

## 创建本地视频画面

发起通话后，调用
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
类中的
[startSelfVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/startSelfVideo:)
方法创建本地视频画面，该方法会返回一个
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html)
对象。该对象用于将视频渲染到画布上，并管理渲染的方式。（调用此方法会打开摄像头）

示例代码:

``````objectivec
-(void)onCallItemAdd:(JCCallItem* __nonnull)item {
    if (item.state == JCCallStateTalking && localCanvas == nil && item.uploadVideoStreamSelf) {
        // 创建本地视频画面
        JCMediaDeviceVideoCanvas *localCanvas = [item startSelfVideo:JCMediaDeviceRenderFullScreen];
    }
}
``````

## 应答通话

1. 主叫发起呼叫成功后，被叫会收到
    [onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
    回调，此时可以通过回调中的
    [JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
    对象的 video 以及 direction 属性判断是视频呼入还是语音呼入，从而做出相应的处理:

示例代码:

``````objectivec
-(void)onCallItemAdd:(JCCallItem* __nonnull)item {
    // 如果是视频呼入且在振铃中
    if (item && item.direction == JCCallDirectionIn && item.video) {
         // 2. 做出相应的处理，如在界面上显示“振铃中”
         ...
    }
}
``````

2\. 调用
[answer](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/answer:video:)
接听通话，**视频通话既可语音应答也可视频应答**

``````objectivec
// 应答通话
[call answer:item video:true];
``````

通话应答后，通话状态变为 JCCallStateConnecting。

::: tip

如果被叫要在此时拒绝通话，可以直接转到挂断通话部分。调用挂断接口后，通话状态变为 JCCallStateCanceled。

:::

## 创建远端视频画面

被叫接听通话后，双方将建立连接，此时，主叫和被叫都将会收到通话更新的回调（onCallItemUpdate），通话状态变为
JCCallStateTalking。

调用
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
类中的
[startOtherVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/startOtherVideo:)
方法创建远端视频画面，该方法会返回一个
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html)
对象，该对象用于将视频渲染到画布上，并管理渲染的方式。

示例代码:

``````objectivec
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam {
    JCMediaDeviceVideoCanvas *remoteCanvas;
    // 如果对端在上传视频流（uploadVideoStreamOther）
    if (item.state == JCCallStateTalking && remoteCanvas == nil && item.uploadVideoStreamOther) {
        // 创建远端视频画面
        remoteCanvas = [item startOtherVideo:JCMediaDeviceRenderFullScreen];
    }
}
``````

## 挂断通话

主叫或者被叫均可以挂断通话。

1. 首先调用
    [getActiveCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/getActiveCallItem)
    获取当前活跃的通话对象；

2. 当前活跃通话对象获取后，调用
    [term](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/term:reason:description:)
    挂断当前活跃通话:

    ``````objectivec
    // 1. 获取当前活跃通话
    JCCallItem *item = [call getActiveCallItem];
    // 2. 挂断当前活跃通话
    [call term:item reason:JCCallReasonNone description:@"主叫挂断"];
    ``````

## 销毁本地和远端视频画面

通话挂断后，会触发
[JCCallCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html)
中的 onCallItemRemove （通话移除回调），通话状态变为 JCCallStateOk，此时您需要调用
[stopSelfVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/stopSelfVideo)
和
[stopOtherVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/stopOtherVideo)
方法销毁本地和远端视频画面。

示例代码:

``````objectivec
-(void)onCallItemRemove:(JCCallItem* __nonnull)item reason:(JCCallReason)reason description:(NSString * __nullable)description { //移除通话回调
    // 界面处理
    if (localCanvas) {
        // 本端视频销毁
        [item stopSelfVideo];
    }
    if (remoteCanvas) {
        // 远端视频销毁
        [item stopOtherVideo];
    }
}
``````
