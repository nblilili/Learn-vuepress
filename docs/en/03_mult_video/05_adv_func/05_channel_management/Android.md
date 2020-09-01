---
title: Channel Management
---
# Channel Management

## Channel Information Query

If you need to query channel related information, such as channel name,
existence, member name, and number of members, you can call the query
interface for query:

``````java
/**
 * Query channel related information, such as existence, number of people, etc.
 *
 * @param channelId Channel ID
 * @return          operationId, corresponding to the operationId in the onQuery callback
 */
public abstract int query(String channelId);
``````

Sample code:

``````java
mediaChannel.query("channelId");
``````

After the query is initiated, the front-end monitors the result of the
callback query through the following method:

``````java
/**
 * The result callback triggers when query channel information
 *
 * @param operationId Returned by query interface
 * @param result      Query result, true/false
 * @param reason      The reason for the query failure; when result is false, the value is valid
 * @param queryInfo   Queried channel information
 */
public void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo);
``````

Sample code:

``````java
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

-----

## Channel Member Management

### Access member objects

Access channel member object via userId:

``````java
/**
 * Access channel members
 *
 * @param userId unique user ID
 * @return member objects
 */
public abstract JCMediaChannelParticipant getParticipant(String userId);
``````

-----

### Kick out memebers

Call the following method to kick a member out of the meeting:

``````java
/**
 * Kick a member out of the conference
 *
 * @param participant
 * @return true/false
 */
public abstract boolean kick(JCMediaChannelParticipant participant);
``````

Sample code:

``````java
JCMediaChannelParticipant participant = mediaChannel.getParticipant("userId");
if (participant != nil) {
    mediaChannel.kick(participant);
}
``````

-----

### Send messages to other memebers

If you want to send messages to other members in the channel, you can
call the following interface:

``````java
/**
 * Send messages
 *
 * @param type     message type
 * @param content  message content; when toUserId is not null, content cannot be greater than 4k
 * @param toUserId receiver id; null is sent to all channel members
 * @return true/false
 */
public abstract boolean sendMessage(String type, String content, String toUserId);
``````

Among them, message type(type) is a custom type.

Sample code:

``````java
public void onJoin(boolean result, @JCMediaChannel.MediaChannelReason int reason, String channelId) {
    // Send to all members
    mediaChannel.sendMessage("text", "content", null);
    // Send to a member
    mediaChannel.sendMessage("text", "content", "userId");
}
``````

When other members in the channel receive a message, they will receive
the onMessageReceive callback:

``````java
/**
 * The callback triggers when receive channel messages
 *
 * @param type          message type
 * @param content       message content
 * @param fromUserId    the userId of the sender
 */
public void onMessageReceive(String type, String content, String fromUserId);
``````

-----
