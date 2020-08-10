---
title: 通话管理
---
# 通话管理

## 通话人数设置

发起通话前可以通过 maxCallNum 属性设置通话的最大人数，默认为 1。如果是视频通话，最大人数只能是 1，如果是语音通话，最大人数为
2。

```java
call.maxCallNum = 1;
```

当通话超过最大人数时：

- 呼出会失败，原因为 JCCallReasonCallOverLimit（超过通话数限制）。

- 收到来电会自动拒绝，原因为 JCCallReasonBusy（忙）。

## 通话过程控制

### 通话静音

您可以通过下面的方法开启或关闭静音，开启关闭静音需要根据 JCCallItem 中的静音状态来决定，静音状态（mute）可通过
[getMute()](http://developer.juphoon.com/portal/reference/android/com/juphoon/cloud/JCCallItem.html#getMute--)
方法获得。静音开启后，对方将听不到您的声音

```java
/**
 * 静音，通过 JCCallItem 对象中的静音状态来决定开启关闭静音
 *
 * @param   item JCCallItem 对象
 * @return  返回 true 表示正常执行调用流程，false 表示调用异常
 */
public abstract boolean mute(JCCallItem item);
```

### 通话录音

可以在通话中进行录音，开启或关闭录音需要根据当前的录音状态（audioRecord）来决定。如果正在录制或者通话被挂起或者挂起的情况下，不能进行音频录制。录音状态（audioRecord）可通过
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
对象中的 getAudioRecord() 方法获得。

开启或关闭录音接口如下

```java
/**
 * 语音通话录音，通过 JCCallItem 对象中的audioRecord状态来决定开启关闭录音
 *
 * @param item      JCCallItem 对象
 * @param enable    开启关闭录音
 * @param filePath  录音文件路径
 * @return          返回 true 表示正常执行调用流程，false 表示调用异常
 */
public abstract boolean audioRecord(JCCallItem item, boolean enable, String filePath);
```

示例代码:

```java
JCCallItem item = call.getCallItems().get(0);
if (item.getAudioRecord()) {
    // 录音结束
    call.audioRecord(item, false, "your filePath");
} else {
    // 创建录音保存文件路径
    String filePath; // 录音文件的绝对路径，SDK会自动创建录音文件
    if (!TextUtils.isEmpty(filePath)) {
        // 开始录音
        call.audioRecord(item, true, filePath);
    }
}
```

开启或关闭录音时，录音状态会发生改变，并通过 onCallItemUpdate 回调上报

```java
/**
 * 通话状态更新回调（当上层收到此回调时，可以根据 JCCallItem 对象获得该通话的所有信息及状态，从而更新该通话相关UI）
 *
 * @param item JCCallItem 对象
 * @param changeParam 更新标识类
 */
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
```

-----

### 开启/关闭呼叫保持

您可以调用下面的方法对通话对象进行呼叫保持或解除呼叫保持，开启或关闭呼叫保持需要根据 JCCallItem
对象中的呼叫保持状态来决定，呼叫保持状态（hold）可通过
[getHold()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#getHold--)
方法获得

```java
/**
 * 呼叫保持，通过 JCCallItem 对象中的呼叫保持状态来决定开启关闭呼叫保持
 * 只针对音频，如果是视频通话则要上层处理视频逻辑
 *
 * @param item  JCCallItem 对象
 * @return      返回 true 表示正常执行调用流程，false 表示调用异常
 */
public abstract boolean hold(JCCallItem item);
```

### 切换活跃通话

调用下面的方法对通话中被保持的对象和活跃的通话对象进行切换

```java
/**
 * 切换活跃通话
 *
 * @param item  需要变为活跃状态的 JCCallItem 对象
 * @return      返回 true 表示正常执行调用流程，false 表示调用异常
 */
public abstract boolean becomeActive(JCCallItem item);
```

### 通话中发送消息

调用下面的接口在通话中实现发消息的功能

```java
/**
 * 通过通话建立的通道发送数据
 *
 * @param item      需要发送数据的 JCCallItem 对象
 * @param type      文本消息类型，用户可以自定义，例如text，xml等
 * @param content   文本内容
 * @return          返回 true 表示正常执行调用流程，false 表示调用异常
 */
public abstract boolean sendMessage(JCCallItem item, String type, String content);
```

当通话中收到消息时，会收到 onMessageReceive 回调

```java
/**
 * 通话中收到消息的回调
 *
 * @param type    消息类型
 * @param content 消息内容
 * @param item    JCCallItem 对象
 */
void onMessageReceive(String type, String content, JCCallItem item);
```

示例代码:

```java
JCCallItem item = call.getActiveCallItem();
call.sendMessage("text", "消息内容", item);
```

-----

### 相关回调

通话过程中，如果通话状态发生了改变，如开启关闭静音、开启关闭通话保持、活跃状态切换、网络变化等，将会收到通话状态更新的回调。

```java
/**
 * 通话状态更新回调（当上层收到此回调时，可以根据 JCCallItem 对象获得该通话的所有信息及状态，从而更新该通话相关UI）
 *
 * @param item           JCCallItem 对象，当 item 为 null 时表示全部更新
 * @param changeParam    更新标识类
 */
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
```

::: tip

静音状态、通话保持状态、活跃状态可通过
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
对象获得。

:::

示例代码:

```java
public void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam) {
    if (item.mute) { // 开启静音
        ...
    } else if (item.hold) { // 挂起通话
        ...
    } else if (item.held) { // 被挂起
        ...
    } else if (item.active) { // 激活状态
        ...
    } else if (item.uploadVideoStreamSelf) { // 本端在上传视频流
        ...
    } else if (item.uploadVideoStreamOther) { // 远端在上传视频流
        ...
    }
}
```
