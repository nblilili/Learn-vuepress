---
title: 频道管理
---
# 频道管理

## 频道信息查询

如需查询频道相关信息，例如频道名称、是否存在、成员名、成员数，可以调用 query 接口进行查询操作

```csharp
/**
 * 查询频道相关信息，例如是否存在，人数等
 *
 * @param channelId 频道标识
 * @return          返回操作id，与 onQuery 回调中的 operationId 对应
 */
public abstract int query(String channelId);
```

示例代码:

```csharp
mediaChannel.query("channelId");
```

查询操作发起后，UI 通过以下方法监听回调查询的结果：

```csharp
/**
 * 查询频道信息结果回调
 *
 * @param operationId 操作id，由 query 接口返回
 * @param result      查询结果，true 表示查询成功，false 表示查询失败
 * @param reason      查询失败原因，当 result 为 false 时该值有效
 * @param queryInfo   查询到的频道信息
 */
public void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo);
```

示例代码:

```csharp
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
        List<String>  members = queryInfo.getMembers();
   } else {
        // 查询失败
   }
}
```

-----

## 频道成员管理

### 获取成员对象

通过 userId 获取频道成员对象

```csharp
/// <summary>
/// 获取频道内成员
/// </summary>
/// <param name="userId">用户唯一标识</param>
/// <returns>成员对象</returns>
public JCMediaChannelParticipant getParticipant(string userId)
```

-----

### 踢出成员

调用下面的方法将成员踢出会议

```csharp
/// <summary>
/// 踢人
/// </summary>
/// <param name="participant">成员</param>
/// <returns>调用结果</returns>
public bool kick(JCMediaChannelParticipant participant)
```

示例代码:

```csharp
JCMediaChannelParticipant participant = mediaChannel.getParticipant("userId");
if (participant != nil) {
    mediaChannel.kick(participant);
}
```

-----

### 给其他成员发消息

如果想在频道中给其他成员发送消息，可以调用下面的接口

```csharp
/// <summary>
/// 频道中发送消息，当 toUserId 不为 null 时，content 不能大于 4k
/// </summary>
/// <param name="type">消息类型</param>
/// <param name="content">消息内容</param>
/// <param name="toUserId">接收方成员的userid，值为null发送给所有人</param>
/// <returns>是否发送成功</returns>
public bool sendMessage(string type, string content, string toUserId)
```

其中，消息类型（type）为自定义类型。

示例代码:

```csharp
public void onJoin(bool result, JCMediaChannelReason reason, string channelId) {
    // 发送给所有成员
    mediaChannel.sendMessage("text", "content", null);
    // 发送给某个成员
    mediaChannel.sendMessage("text", "content", "userId");
}
```

当频道中的其他成员收到消息时，会收到 onMessageReceive 回调

```csharp
/// <summary>
/// 接收频道消息的回调
/// </summary>
/// <param name="type">消息类型</param>
/// <param name="content">消息内容</param>
/// <param name="fromUserId">消息发送成员userId</param>
void onMessageReceive(string type, string content, string fromUserId);
```

-----
