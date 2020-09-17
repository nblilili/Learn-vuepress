---
title: 通话管理
---
# 通话管理

## 通话人数设置

发起通话前可以通过 maxCallNum 属性设置通话的最大人数，默认为 1。如果是视频通话，最大人数只能是 1，如果是语音通话，最大人数为
2。

``````csharp
call.maxCallNum = 1;
``````

当通话超过最大人数时：

- 呼出会失败，原因为 JCCallReasonCallOverLimit（超过通话数限制）。

- 收到来电会自动拒绝，原因为 JCCallReasonBusy（忙）。

## 通话过程控制

### 通话静音

通过下面的方法开启或关闭静音，开启关闭静音需要根据 JCCallItem
中的静音状态（[mute](http://developer.juphoon.com/portal/reference/V2.1/windows/html/bb1ed5b7-2f76-e89d-f964-328e2b746904.htm)）来决定，静音开启后，对方将听不到您的声音

``````csharp
/// <summary>
/// 静音，通过JCCallItem中的静音状态来决定开启关闭
/// </summary>
/// <param name="item">JCCallItem对象</param>
/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>
public bool mute(JCCallItem item)
``````

### 通话录音

可以在通话中进行录音，开启或关闭录音需要根据当前的录音状态（audioRecord）来决定。如果正在录制或者通话被挂起或者挂起的情况下，不能进行音频录制。录音状态可通过
[JCCallItem](http://developer.juphoon.com/portal/reference/ios/Classes/JCCallItem.html)
对象获取。

开启或关闭录音接口如下

``````csharp
/// <summary>
/// 通话录音，通过JCCallItem对象中的呼叫保持状态来决定开启关闭呼叫保持
/// </summary>
/// <param name="item">JCCallItem对象</param>
/// <param name="enable">开启关闭录音</param>
/// <param name="filePath">录音文件路径</param>
/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>
public bool audioRecord(JCCallItem item, bool enable, string filePath)
``````

示例代码

``````csharp
```
JCCallItem item = call.getActiveCallItem();
if (item.audioRecord)
{
    // 录音结束
    call.audioRecord(item, false, "your filePath");
} else {
    // 创建录音文件保存路径
    String filePath; // 录音文件的绝对路径，SDK会自动创建录音文件
    if (filtPath.Length > 0)
    {
        // 开始录音
        call.audioRecord(item, true, filePath);
    }
}
}
```
``````

开启或关闭录音时，录音状态会发生改变，并通过 onCallItemUpdate 回调上报

``````csharp
/// <summary>
/// 通话状态更新回调
/// 当上层收到此回调时，可以根据JCCallItem对象获得该通话所有信息及状态，从而更新通话相关UI
/// </summary>
/// <param name="item">JCCallItem对象</param>
/// <param name="changeParam">更新标识类</param>
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````


### 开启/关闭呼叫保持

调用下面的方法对通话对象进行呼叫保持或解除呼叫保持（当通话对象处于被保持状态（即状态为held）时不可以进行此操作），开启或关闭呼叫保持需要根据
JCCallItem
对象中（[hold](http://developer.juphoon.com/portal/reference/V2.1/windows/html/dc13e9d5-2842-1b22-5d6d-9a617d321458.htm)）的呼叫保持状态来决定

``````csharp
/// <summary>
/// 呼叫保持，通过JCCallItem对象中的呼叫保持状态来决定开启关闭
/// </summary>
/// <param name="item">JCCallItem对象</param>
/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>
public bool hold(JCCallItem item)
``````

### 切换活跃通话

调用下面的方法对通话中被保持的对象和活跃的通话对象进行切换

``````csharp
/// <summary>
/// 切换活跃通话
/// </summary>
/// <param name="item">需要变活跃的JCCallItem对象</param>
/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>
public bool becomeActive(JCCallItem item)
``````

示例代码

``````csharp
//获取活跃通话对象
JCCallItem item = call.getActiveCallItem();
call.mute(item);
call.hold(item);
call.becomeActive(item);
``````

### 通话中发送消息

调用下面的接口在通话中实现发消息的功能

``````csharp
/// <summary>
/// 通过通话建立后的通道发送数据
/// </summary>
/// <param name="item">需要发送数据的JCCallItem对象</param>
/// <param name="type">文本消息类型，用户可以自定义，例如text，xml等</param>
/// <param name="content">文本内容</param>
/// <returns>返回 true 表示正常执行调用流程，false 表示调用异常</returns>
public bool sendMessage(JCCallItem item, string type, string content)
``````

当通话中收到消息时，会收到 onMessageReceive 回调

``````csharp
```
 /// <summary>
 /// 通话中收到消息的回调
 /// </summary>
 /// <param name="type">消息类型</param>
 /// <param name="content">消息内容</param>
 /// <param name="item">JCCallItem对象</param>
void onMessageReceive(string type, string content, JCCallItem item);
```
``````

示例代码

``````csharp
JCCallItem item = call.getActiveCallItem();
call.sendMessage(item, "text", "消息内容");
``````

### 相关回调

通话过程中，如果通话状态发生了改变，如开启关闭静音、开启关闭通话保持、活跃状态切换、开启关闭视频流发送、网络变化等，将会收到通话状态更新的回调

``````csharp
/// <summary>
/// 通话状态更新回调
/// 当上层收到此回调时，可以根据JCCallItem对象获得该通话所有信息及状态，从而更新通话相关UI
/// </summary>
/// <param name="item">JCCallItem对象</param>
/// <param name="changeParam">更新标识类</param>
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

关于 ChangeParam 的说明请参考 JCCallItem.cs 文件。

::: tip

静音状态、通话保持状态、活跃状态可通过
[JCCallItem](http://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm)
对象获得。

:::

示例代码

``````csharp
public void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam) {
    if (item.mute) { // 开启静音
        ...
    } else if (item.hold) { // 挂起通话变化
        ...
    } else if (item.held) { // 被挂起变化
        ...
    } else if (item.active) { // 激活状态变化
        ...
    } else if (item.netStatus) { // 网络状态变化
        ...
    }
}
``````

