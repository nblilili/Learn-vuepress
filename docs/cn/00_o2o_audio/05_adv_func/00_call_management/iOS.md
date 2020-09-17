---
title: 通话管理
---
# 通话管理

## 通话人数设置

发起通话前可以通过 maxCallNum 属性设置通话的最大人数，默认为 1。如果是视频通话，最大人数只能是 1，如果是语音通话，最大人数为
2。

``````objectivec
call.maxCallNum = 1;
``````

当通话超过最大人数时：

- 呼出会失败，原因为 JCCallReasonCallOverLimit（超过通话数限制）。

- 收到来电会自动拒绝，原因为 JCCallReasonBusy（忙）。

## 通话过程控制

### 通话静音

通过下面的方法开启或关闭静音，开启关闭静音需要根据 JCCallItem
中的静音状态（[mute](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/mute:)）来决定，静音开启后，对方将听不到您的声音。

``````objectivec
/**
 *  @brief 静音，通过 JCCallItem 对象中的静音状态来决定开启关闭静音
 *  @param item JCCallItem 对象
 *  @return 返回 true 表示正常执行调用流程，false 表示调用异常
 */
-(bool)mute:(JCCallItem* __nonnull)item;
``````

### 通话录音

可以在通话中进行录音，开启或关闭录音需要根据当前的录音状态（audioRecord）来决定。如果正在录制或者通话被挂起或者挂起的情况下，不能进行音频录制。录音状态可通过
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
对象获取。

开启或关闭录音接口如下。

``````objectivec
/**
 * 语音通话录音，通过 JCCallItem 对象中的audioRecord状态来决定开启关闭录音
 *
 * @param item              JCCallItem 对象
 * @param enable            开启关闭录音
 * @param filePath          录音文件路径
 * @return                  返回 true 表示正常执行调用流程，false 表示调用异常
 */
-(bool)audioRecord:(JCCallItem* __nonnull)item enable:(bool)enable filePath:(NSString* __nullable)filePath;
``````

示例代码

``````objectivec
// 语音录制
- (void)audioRecord:(JCCallItem* __nonnull)item {
    if (item.audioRecord) { // 正在录制中
       //可以做录音结束的处理
       [call audioRecord:item enable:false filePath:@"your filePath"];
        ...
    } else { // 未在录制中
        // 创建录音文件
        NSString *filePath; // 录音文件的绝对路径，SDK会自动创建录音文件
        if (filePath != nil) {
           // 开始录音
           [call audioRecord:item enable:true filePath:filePath];
            ...
        } else {
            // 录音失败的处理
        }
    }
}
``````

开启或关闭录音时，录音状态会发生改变，并通过 onCallItemUpdate 回调上报。

``````objectivec
/**
 *  @brief 通话状态更新回调（当上层收到此回调时，可以根据 JCCallItem 对象获得该通话的所有信息及状态，从而更新该通话相关UI）
 *  @param item JCCallItem 对象
 *  @param changeParam 更新标识类
 */
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam;
``````


### 开启/关闭呼叫保持

调用下面的方法对通话对象进行呼叫保持或解除呼叫保持（当通话对象处于被保持状态（即状态为held）时不可以进行此操作），开启或关闭呼叫保持需要根据
JCCallItem
对象中（[hold](http://developer.juphoon.com/portal/reference/ios/Classes/JCCallItem.html#//api/name/hold)）的呼叫保持状态来决定。

``````objectivec
/**
 *  @brief                  呼叫保持，通过 JCCallItem 对象中的呼叫保持状态来决定开启关闭呼叫保持
 *  @param item             JCCallItem 对象
 *  @return                 返回 true 表示正常执行调用流程，false 表示调用异常
 */
-(bool)hold:(JCCallItem* __nonnull)item;
``````

### 切换活跃通话

调用下面的方法对通话中被保持的对象和活跃的通话对象进行切换。

``````objectivec
/**
 *  @brief 切换活跃通话
 *  @param item 需要变为活跃状态的 JCCallItem 对象
 *  @return 返回 true 表示正常执行调用流程，false 表示调用异常
 */
-(bool)becomeActive:(JCCallItem* __nonnull)item;
``````


### 通话中发送消息

调用下面的接口在通话中实现发消息的功能。

``````objectivec
/**
 *  @brief 通过通话建立的通道发送数据
 *  @param item 需要发送数据的 JCCallItem 对象
 *  @param type 文本消息类型，用户可以自定义，例如text、xml等
 *  @param content 消息内容
 *  @return 返回 true 表示正常执行调用流程，false 表示调用异常
 */
-(bool)sendMessage:(JCCallItem * __nonnull)item type:(NSString * __nonnull)type content:(NSString * __nonnull)content;
``````

当通话中收到消息时，会收到 onMessageReceive 回调。

``````objectivec
/**
 *  @brief 通话中收到消息的回调
 *  @param item JCCallItem 对象
 *  @param type 消息类型
 *  @param content 消息内容
 */
-(void)onMessageReceive:(JCCallItem * __nonnull)item type:(NSString * __nonnull)type content:(NSString * __nonnull)content;
``````

示例代码

``````objectivec
[call sendMessage:item type:@"text" content:@"消息内容"];
``````


### 相关回调

通话过程中，如果通话状态发生了改变，如开启关闭静音、开启关闭通话保持、活跃状态切换、网络变化等，将会收到通话状态更新的回调。

``````objectivec
/**
 *  @brief 通话状态更新回调（当上层收到此回调时，可以根据 JCCallItem 对象获得该通话的所有信息及状态，从而更新该通话相关UI）
 *  @param item JCCallItem 对象
 *  @param changeParam 更新标识类
 */
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam;
``````

关于 JCCallChangeParam 的说明请参考 JCCallItem.h 文件。

::: tip

静音状态、通话保持状态、活跃状态可通过
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
对象获得。

:::

示例代码

``````objectivec
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam {
    JCCallItem* callItem = item;
    if (changeParam.mute) { // 开启静音
        ...
    } else if (changeParam.sate) { // 通话状态变化
        ...
    } else if (changeParam.held) { // 被挂起变化
        ...
    } else if (changeParam.active) { // 活跃状态变化
        ...
    } else if (changeParam.netStatus) { // 网络状态变化
        ...
    }
    ...
}
``````

