---
title: Channel Management
---
# Channel Management

## Channel information query

If you need to query channel related information, such as channel name,
existence, member name, and number of members, you can call the query
interface for query:

``````objectivec
/**
 * Query channel related information, such as existence, number of people, etc.
 *
 * @param channelId Channel ID
 * @return          operationId, corresponding to the operationId in the onQuery callback
 */
public abstract int query(String channelId);
``````

Sample code:

``````objectivec
mediaChannel.query("channelId");
``````

After the query operation is initiated, the front-end monitors the
result of the callback query through the following method:

``````objectivec
/**
 * The result callback triggers when query channel information
 *
 * @param operationId Returned by query interface
 * @param result      Query result, true/false
 * @param reason      The reason for the query failure; when the result is false, the value is valid
 * @param queryInfo   Queried channel information
 */
public void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo);
``````

Sample code:

``````objectivec
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

``````objectivec
/**
 *  @brief access channel members
 *  @param userId unique user ID
 *  @return member objects
 */
-(JCMediaChannelParticipant* __nullable)getParticipant:(NSString* __nonnull)userId;
``````


### Kick out members

Call the following method to kick a member out of the conference:

``````objectivec
/**
 * @brief Kick a member out of the meeting
 *
 * @param participant
 * @return true/false
 */
-(BOOL)kick:(JCMediaChannelParticipant * __nonnull)participant;
``````

Sample code:

``````objectivec
JCMediaChannelParticipant* participant = [mediaChannel getParticipant:@"userId"];
if (participant != nil) {
    [mediaChannel kick:participant];
}
``````


### Send messages to other memebers

If you want to send messages to other members in the channel, you can
call the following interface:

``````objectivec
/**
 * @brief Send messages
 *
 * @param type message type
 * @param content  message content; when toUserId is not null, content cannot be greater than 4k
 * @param toUserId if the userid is set to null, it will be sent to all members of the channel
 * @return true/false
 */
-(bool)sendMessage:(NSString * __nonnull)type content:(NSString * __nonnull)content toUserId:(NSString * __nullable)toUserId;
``````

Among them, message type(type) is a custom type.

Sample code:

``````objectivec
-(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId {
    // Send to all members
    [mediaChannel sendMessage:@"text" content:@"content" toUserId:nil];
    // Send to a member
    [mediaChannel sendMessage:@"text" content:@"content" toUserId:@"userId"];
}
``````

When other members in the channel receive a message, they will receive
the onMessageReceive callback:

``````objectivec
/**
 * This callback triggers when receive channel messages
 *
 * @param type message type
 * @param content message content
 * @param fromUserId    the userId of the sender
 */
-(void)onMessageReceive:(NSString *)type content:(NSString *)content fromUserId:(NSString *)fromUserId;s
``````

