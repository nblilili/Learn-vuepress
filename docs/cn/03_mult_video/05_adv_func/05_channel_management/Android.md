---
title: 频道管理
---
# 频道管理

## 频道信息查询

如需查询频道相关信息，例如频道名称、是否存在、成员名、成员数，可以调用 query 接口进行查询操作。

``````java
/**
 * 查询频道相关信息，例如是否存在，人数等
 *
 * @param channelId 频道标识
 * @return          返回操作id，与 onQuery 回调中的 operationId 对应
 */
public abstract int query(String channelId);
``````

示例代码

``````java
mediaChannel.query("channelId");
``````

查询操作发起后，UI 通过以下方法监听回调查询的结果。

``````java
/**
 * 查询频道信息结果回调
 *
 * @param operationId 操作id，由 query 接口返回
 * @param result      查询结果，true 表示查询成功，false 表示查询失败
 * @param reason      查询失败原因，当 result 为 false 时该值有效
 * @param queryInfo   查询到的频道信息
 */
public void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo);
``````

示例代码

``````java
public void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo) {
   // 查询成功
   if (result) {
        // 频道标识
        String channelId = queryInfo.getChannelId();
        // 频道
        int number = queryInfo.getNumber();
        // 频道成员数
        int clientCount = queryInfo.getClientCount();
        // 频道成员列表
        List<String members = queryInfo.getMembers();
   } else {
        // 查询失败
   }
}
``````


## 频道成员管理

### 获取成员对象

通过 userId 获取频道成员对象

``````java
/**
 * 获取频道成员
 *
 * @param userId 用户唯一标识
 * @return 成员对象
 */
public abstract JCMediaChannelParticipant getParticipant(String userId);
``````


### 踢出成员

调用下面的方法将成员踢出会议

``````java
/**
 * 将成员踢出会议
 *
 * @param participant 成员
 * @return true表示成功，false表示失败
 */
public abstract boolean kick(JCMediaChannelParticipant participant);
``````

示例代码

``````java
JCMediaChannelParticipant participant = mediaChannel.getParticipant("userId");
if (participant != nil) {
    mediaChannel.kick(participant);
}
``````


### 给其他成员发消息

如果想在频道中给其他成员发送消息，可以调用下面的接口

``````java
/**
 * 发送消息
 *
 * @param type     消息类型
 * @param content  消息内容，当 toUserId 不为 null 时，content 不能大于 4k
 * @param toUserId 接收者id，null则发给频道所有人员
 * @return true表示成功，false表示失败
 */
public abstract boolean sendMessage(String type, String content, String toUserId);
``````

其中，消息类型（type）为自定义类型。

示例代码

``````java
public void onJoin(boolean result, @JCMediaChannel.MediaChannelReason int reason, String channelId) {
    // 发送给所有成员
    mediaChannel.sendMessage("text", "content", null);
    // 发送给某个成员
    mediaChannel.sendMessage("text", "content", "userId");
}
``````

当频道中的其他成员收到消息时会收到 onMessageReceive 回调

``````java
/**
 * 接收频道消息的回调
 *
 * @param type          消息类型
 * @param content       消息内容
 * @param fromUserId    消息发送成员的userId
 */
public void onMessageReceive(String type, String content, String fromUserId);
``````

## 频道属性设置

在调用 JCMediaChannel 中的 join 函数加入/创建频道前，您可以通过 JoinParam
类来设置频道属性，如频道允许加入的最大人数、推流参数、录制参数等。其默认参数如下所示。

``` java
// 会议最大人数
public int capacity = 16;
// 推流参数
public String cdn = null;
// 录制参数
public RecordParam record = null;
// 密码
public String password = "123456";
// 平滑模式
public boolean smooth = true;
// 会议最大分辨率
@MaxResolution public int maxResolution = MAX_RESOLUTION_360p;
// uri 模式, join 函数的参数为会议 uri
public boolean uriMode = false;
// 心跳间隔
public int heartbeatTime = 20;
// 心跳超时
public int heartbeatTimeout = 60;
// 帧率 1-30, 默认 24
public int framerate = 24;
// 自定义属性
public String customProperty = "";
// 自定义媒体每层参数
public String customVideoResolution = "";
```

### 最大人数设置

您可以通过改变 capacity 参数来调整频道最大人数。

``` java
JCMediaChannel.JoinParam joinParam = new JCMediaChannel.JoinParam();
// 设置最大人数
joinParam.capacity = 6;
// 加入频道
mediaChannel.join("222", joinParam);
```

### 会议最大分辨率设置

您可以通过改变 maxResolution 参数来调整频道最大分辨率。 

``` java
JCMediaChannel.JoinParam joinParam = new JCMediaChannel.JoinParam();
// 设置会议最大分辨率
joinParam.maxResolution = MAX_RESOLUTION_360p;
// 加入频道
mediaChannel.join("222", joinParam);
```

::: tip

菊风默认提供 360p 的最大分辨率，如需设置会议最大分辨率
720p，1080p，您可以通过发送邮件与我们取得联系：marketing@juphoon.com.cn 。

:::