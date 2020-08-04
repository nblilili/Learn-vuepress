---
title: 通话管理
---
# 通话管理



## 通话人数设置

发起通话前可以通过 maxCallNum 属性设置通话的最大人数，默认为 1。如果是视频通话，最大人数只能是 1，如果是语音通话，最大人数为
2。



```cpp
JCManager::shared()->call->maxCallNum = 1;
```



当通话超过最大数时，呼出会失败，收到来电会自动拒绝。





## 通话过程控制





### 通话静音

调用
[mute](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a62d7c7454fae84422579e3a6275af243)
方法开启或关闭静音，开启关闭静音需要根据 JCCallItem 对象当前的静音状态来决定，静音开启后，对方将听不到您的声音。



```cpp
//获取活跃通话对象
JCCallItem* item = JCManager::shared()->call->getActiveCallItem();
//获取通话对象的静音状态
bool isMute = item->getMute();
    if (item != NULL)
    {
    //开启或关闭静音
            JCManager::shared()->call->mute(item);
    }
```



该方法调用后会触发
[onCallItemUpdate](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18)
回调。



-----



### 开启/关闭呼叫保持

调用
[hold](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#aae536642d3d5c785c2ce7d9275f8653a)
方法对通话对象进行呼叫保持或解除呼叫保持（当通话对象处于被保持状态（即状态为held）时不可以进行此操作），开启或关闭呼叫保持需要根据
JCCallItem 对象当前的呼叫保持状态来决定。



```cpp
//获取活跃通话对象
JCCallItem* item = JCManager::shared()->call->getActiveCallItem();
//获取通话对象的呼叫保持状态
bool isHeld = item->getHold();
if (item != NULL)
    {
    //开启或关闭呼叫保持
            JCManager::shared()->call->hold(item);
    }
```







### 切换活跃通话

调用
[becomeActive](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#ae45d0744f3df39cc2c6dc3bb00bb7354)
方法对通话中被保持的对象和活跃的通话对象进行切换。



```cpp
//获取通话对象列表
std::list<JCCallItem*>* callItems = JCManager::shared()->call->getCallItems();
JCManager::shared()->call->becomeActive(callItems[1]);
```





-----



### 开启/关闭视频流发送

调用
[enableUploadVideoStream](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#adcd6dd97b6737909ae0348a0e714d754)
方法开启或关闭视频流发送，该方法调用后会触发
[onCallItemUpdate](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18)
回调。



```cpp
JCCallItem* item = JCManager::shared()->call->getActiveCallItem();
    if (item != NULL)
    {
            JCManager::shared()->call->enableUploadVideoStream(item);
    }
```



该接口的具体作用机制如下图所示：

![../../../../\_images/enablevideostream.png](../../../../_images/enablevideostream.png)

  - 如果 A 开启发送视频流，则 A 的 item-\>getUploadVideoStreamSelf() 返回值为 true，B 则通过
    item-\>getUploadVideoStreamOther() 方法（此处返回值为 true）判断 A 的视频流发送状态。

  - 如果 A 关闭发送视频流，则 A 的 item-\>getUploadVideoStreamSelf() 返回值为 false，B
    则通过 item-\>getUploadVideoStreamOther() 方法（此处返回值为 false）判断 A
    的视频流发送状态。此时 B 将看不到 A 的画面。



-----



### 相关回调

通话过程中，如果通话状态发生了改变，如开启关闭静音、开启关闭通话保持、活跃状态切换、开启关闭音视频流发送等，均会触发
[onCallItemUpdate](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18)
回调。



```cpp
void JCManager::onCallItemUpdate(JCCallItem* item, JCCallItemChangeParam changeParam)
{
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
```





-----



### 通话录音

可以在通话中进行录音，开启或关闭录音需要根据当前的录音状态来决定。如果正在录制或者通话被挂起或者挂起的情况下，不能进行音频录制。录音状态可通过
[getAudioRecord](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html#ad8b5118a3c06a156e917f59625bcc73d)
方法获取。

调用
[audioRecord](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a058fb76428f0a77f4bbbb8670eec2868)
方法开启或关闭通话录音。



```cpp
void JCSampleDlg::OnBnClickedButton1Callrecordaudio()
{
    JCCallItem* item = JCManager::shared()->call->getActiveCallItem();
    if (item != NULL)
    {
        if (item->getAudioRecord())
        {
            //如果正在录制，则停止音频录制
            JCManager::shared()->call->audioRecord(item, false, "");
        }
        else
        {
            std::string filePath = "录制音频文件保存路径";
            //开始音频录制
            JCManager::shared()->call->audioRecord(item, true, filePath);
        }
    }
}
```



开启或关闭录音时，录音状态会发生改变，并通过
[onCallItemUpdate](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18)
回调上报。



```cpp
void JCManager::onCallItemUpdate(JCCallItem* item, JCCallItemChangeParam changeParam) {
}
```





-----



### 通话中发送消息

调用
[sendMessage](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a94e37abb045b901e1703b7534f4cc379)
方法在通话中实现发消息的功能。



```cpp
JCCallItem* item = JCManager::shared()->call->getActiveCallItem();
JCManager::shared()->call->sendMessage(item, "text", "消息内容");
```



当通话中收到消息时，会收到
[onMessageReceive](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#afb8281abd54bc8c18b77aadfe234a882)
回调。



```cpp
void JCManager::onMessageReceive(const char* type, const char* content, JCCallItem* item)
{
    cout << "收到Call消息 " << item->getDisplayName() << " type:" << type << endl;
}
```















[Next
](01_audio_management.html "音频管理")
[
Previous](index.html "进阶功能集成")



-----



© Copyright 2020 宁波菊风系统软件有限公司



Built with [Sphinx](http://sphinx-doc.org/) using a
[theme](https://github.com/rtfd/sphinx_rtd_theme) provided by [Read the
Docs](https://readthedocs.org).








