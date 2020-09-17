---
title: Channel Management
---
# Channel Management

## Channel information query

If you need to query channel related information, such as channel name,
existence, member name, and number of members, you can call the query
interface for query:

``````csharp
/**
 * Query channel related information, such as existence, number of people, etc.
 *
 * @param channelId Channel ID
 * @return          operationId, corresponding to the operationId in the onQuery callback
 */
public abstract int query(String channelId);
``````

Sample code:

``````csharp
mediaChannel.query("channelId");
``````

After the query operation is initiated, the front-end monitors the
result of the callback query through the following method:

``````csharp
/**
 * The result callback triggers when query channel information
 *
 * @param operationId Returned by query interface
 * @param result      Query result, true/false
 * @param reason      The reason for the query failure; when the result is false, The value is valid
 * @param queryInfo   Queried channel information
 */
public void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo);
``````

Sample code:

``````csharp
public void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo) {
   // Query successful
   if (result) {
        // Channel ID
        String channelId = queryInfo.getChannelId();
        // Channel
        int number = queryInfo.getNumber();
        // The number of channel members
        int clientCount = queryInfo.getClientCount();
        // List of channel members
        List<String>  members = queryInfo.getMembers();
   } else {
        // Query failed
   }
}
``````


## Channel member management

### Access member objects

Obtain the channel member objects by userId:

``````csharp
/// <summary>
/// access channel members
/// </summary>
/// <param name="userId">Unique user ID</param>
/// <returns>memeber object</returns>
public JCMediaChannelParticipant getParticipant(string userId)
``````


### Kick out members

Call the following method to kick a member out of the conference:

``````csharp
/// <summary>
/// Kick a member out of the conference
/// </summary>
/// <param name="participant">participant</param>
/// <returns>true/fals</returns>
public bool kick(JCMediaChannelParticipant participant)
``````

Sample code:

``````csharp
JCMediaChannelParticipant participant = mediaChannel.getParticipant("userId");
if (participant != nil) {
    mediaChannel.kick(participant);
}
``````


### Send messages to other memebers

If you want to send messages to other members in the channel, you can
call the following interface:

``````csharp
/// <summary>
/// Send messages in the channel; when toUserId is not null, content cannot be greater than 4k
/// Send messages
/// </summary>
/// <param name="type">message type</param>
/// <param name="toUserId">the userid of the recipient; if the userid is set to null, it will be sent to all members of the channel</param>
/// <returns>true/false</returns>
public bool sendMessage(string type, string content, string toUserId)
``````

Among them, message type(type) is a custom type.

Sample code:

``````csharp
public void onJoin(bool result, JCMediaChannelReason reason, string channelId) {
    // Send to all members
    mediaChannel.sendMessage("text", "content", null);
    // Send to a member
    mediaChannel.sendMessage("text", "content", "userId");
}
``````

When other members in the channel receive a message, they will receive
the onMessageReceive callback:

``````csharp
/// <summary>
/// This callback triggers when receive channel messages
/// </summary>
/// <param name="type">message type</param>
/// <param name="content">message content</param>
/// <param name="fromUserId">the userId of the sender</param>
void onMessageReceive(string type, string content, string fromUserId);
``````

