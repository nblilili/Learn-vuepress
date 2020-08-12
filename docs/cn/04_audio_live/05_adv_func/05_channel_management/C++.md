---
title: 频道管理
---
# 频道管理

## 频道信息查询

调用
[query](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#af7ccf465a6ddb05aa4ff22f5f61eab10)
接口查询频道相关信息，例如频道名称、频道是否存在、成员名以及成员数。

``````cpp
JCManager::shared()->mediaChannel->query("channelId");
``````

查询操作发起后，查询的结果通过
[onQuery](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a864db3251f12affc38f7c95c7fdccab1)
回调上报。

``````cpp
void JCManager::onQuery(int operationId, bool result, JCMediaChannelReason reason, JCMediaChannelQueryInfo* queryInfo)
{
    //查询结果
    if (result) {
        //查询到的 channelId
        CString channelId = queryInfo->getChannelId();
        //查询到的成员数
        int number = queryInfo->getClientCount();
    }
}
``````

-----

## 发送消息

如果想在频道中给其他成员发送消息，可以调用
[sendMessage](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#aa67711141ad0883ad8f2dce0ea631b48)
方法。

``````cpp
//最后一个参数为接收者 id，如果为空则会发给频道所有人员
JCManager::shared()->mediaChannel->sendMessage(type, "消息内容", NULL);
``````

其中，type（消息类型）为自定义类型。例如 text、image、file 等类型，在对收到的消息进行解析时消息类型需要保持一致。

当频道中的其他成员收到消息时，会收到
[onMessageReceive](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a6f6b72922ebc576d94f55dc153b1209d)
回调。

``````cpp
void JCManager::onMessageReceive(const char* type, const char* content, const char* fromUserId)
{
    std::stringstream s;
    s << "收到Conf消息 " << fromUserId << " type:" << type << " content:" << JCTool::Utf8ToGB2312(content);
}
``````

## 频道成员管理

### 获取频道成员

调用
[getParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a0fd6477db77a60df91fa615b814ac796)
方法，传入成员的 userId 获取频道成员对象。

``````cpp
JCMediaChannelParticipant* participant = JCManager::shared()->mediaChannel->getParticipant(userId);
``````

-----

### 获取频道所有成员对象

调用
[getParticipants](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a3baccb9d05486fb20ff8d206284f609e)
方法获取频道所有成员对象。

``````cpp
std::list<JCMediaChannelParticipant*>* participants = JCManager::shared()->mediaChannel->getParticipants();
``````

-----

### 踢出成员

调用
[kick](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#aa5ee1e5334beb9ca63a8dc7110aaf6c0)
方法将成员踢出会议。

``````cpp
//获取成员对象
JCMediaChannelParticipant* participant = JCManager::shared()->mediaChannel->getParticipant(userId);
//踢除成员
JCManager::shared()->mediaChannel->kick(participant);
``````
