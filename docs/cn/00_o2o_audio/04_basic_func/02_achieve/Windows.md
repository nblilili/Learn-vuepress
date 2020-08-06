---
title: 实现一对一语音通话
---
# 实现一对一语音通话

本章将介绍如何实现一对一语音通话，一对一语音通话的 API 调用时序见下图：

![../../../../\_images/1-1workflowWindows.png](../../../../_images/1-1workflowWindows.png)



## 初始化

调用
[JCMediaDevice.create()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/cb59bc27-6528-9dbf-c996-de857096f847.htm)
和
[JCCall.create()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/eef10110-a3f7-b505-26fa-4b9ec1e2b998.htm)
以初始化实现一对一通话需要的模块。



```csharp 
/// 声明对象
JCMediaDevice mMediaDevice;
JCCall mCall;

/// 初始化函数
public bool initialize() {

    /// 1. 媒体类
    mMediaDevice = JCMediaDevice.create(mClient, this);
    /// 2. 通话类
    mCall = JCCall.create(mClient, mMediaDevice, this);
}
```



其中：

  - JCMediaDevice create 方法中的 this 为实现
    [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/html/3a00aa12-4e18-cf90-4610-b2c9c63b7a7b.htm)
    接口的对象，用于将媒体设备相关的事件通知给上层。

JCMediaDeviceCallback 中的主要方法如下



```csharp 
//摄像头变化
public void onCameraUpdate()
{
}
//音频输出变化
public void onAudioOutputTypeChange(string audioOutputType)
{
}
```



  - JCCall create 方法中的 this 为实现
    [JCCallCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/html/25bca4ea-ad43-2cbb-42a8-b4e626739711.htm)
    接口的对象，用于将通话相关的事件通知给上层。

JCCallCallback 中的主要方法如下



```csharp 
//新增通话回调
public void onCallItemAdd(JCCallItem item)
{
}
//移除通话
public void onCallItemRemove(JCCallItem item, JCCallReason reason)
{
}
//通话状态更新回调（当上层收到此回调时，可以根据 JCCallItem 对象获得该通话的所有信息及状态，从而更新该通话相关UI）
public void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam)
{
}
//通话中收到消息回调
public void onMessageReceive(string type, string content, JCCallItem item)
{
}
//未接通话回调
public void onMissedCallItem(JCCallItem item)
{
}
```







## 拨打通话

调用
[call()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/613adf03-d597-8221-86d5-0056c1b4d2a0.htm)
发起语音通话，需要填写的参数有：

  - `userID` 填写对方的用户ID。

  - `video` 选择是否为视频通话， true 表示拨打视频通话， false 表示拨打语音通话。

  - [extraParam()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/e0226cbc-1ca1-ef9c-5e8e-d3dc853d618d.htm)
    为自定义透传字符串， 可通过 `item.extraParam` 获取该属性。



```csharp 
/// 发起语音呼叫
mCall.call(userID, isVideo, extraParam);
```



拨打通话后，主叫和被叫均会收到新增通话的回调
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm)
，此时通话状态变为 Pending 。您可以通过重写
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm)
执行逻辑操作。

示例代码:



```csharp 
/// 1. 发起语音通话
mCall.call(userID, false, null);

/// 2. 重写回调

public void onCallItemAdd(JCCallItem item) {
    /// 业务逻辑
    if (item.direction == JCCall.DIRECTION_IN) {
        /// 如果是被叫
        ...
    }else{
        /// 如果是主叫
        ...
    }
}
```



::: tip



如果主叫想取消通话，可以直接转到挂断通话部分。调用挂断接口后，通话状态变为 Cancel。

:::





## 应答通话

1.  被叫收到
    [onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm)
    回调，在回调中根据
    [JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm)
    属性来判断是视频呼入还是语音呼入，从而做出相应的处理。
    
    
    
    ```csharp 
    public void onCallItemAdd(JCCallItem item) {
        /// 1. 如果是语音呼入且在振铃中
        if (item.direction == JCCall.DIRECTION_IN && !item.video) {
            /// 2. 做出相应的处理，如在界面上显示“振铃中”
            ...
        }
    }
    ```
    
    

2.  调用
    [answer()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/7211e914-c311-4457-4b0e-bc4ef46c7733.htm)
    接听通话。
    
    
    
    ```csharp 
    mCall.answer(item, false);
    ```
    
    

通话接听后，通话状态变为 Connecting。

::: tip



如果被叫要在此时拒绝通话，请调用挂断通话的接口。这种情况下调用挂断后，通话状态变为 Canceled。

:::





## 挂断通话

主叫或者被叫均可以挂断通话。

1.  调用
    [getActiveCallItem()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6df31ff9-272f-c7cc-1da6-2755c5aad5e0.htm)
    获取当前活跃的通话对象:
    
    
    
    ```csharp 
    mCall.getActiveCallItem();
    ```
    
    

2.  调用
    [term()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/70758778-1450-172d-8684-3dd2818f2a84.htm)
    挂断当前活跃通话:
    
    
    
    ```csharp 
    mCall.term(item, reason, description);
    ```
    
    

示例代码:



```csharp 
/// 1. 获取当前活跃通话
JCCallItem item = mCall.getActiveCallItem();
/// 2. 挂断当前活跃通话
mCall.term(item, JCCall.REASON_NONE, null);
```
















