---
title: Channel Management
---
# Channel Management

## Channel Information Query

call
[query](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#af7ccf465a6ddb05aa4ff22f5f61eab10)
interface to query relevant channel information, such as such as channel
name, existence, member name and number of members:

``````cpp
JCManager::shared()->mediaChannel->query("channelId");
``````

After the query is initiated, the result of the query is reported
through the
[onQuery](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a864db3251f12affc38f7c95c7fdccab1)
callback:

``````cpp
void JCManager::onQuery(int operationId, bool result, JCMediaChannelReason reason, JCMediaChannelQueryInfo* queryInfo)
{
    //Query result
    if (result) {
        //Queried channelId
        CString channelId = queryInfo->getChannelId();
        //Queried number of members
        int number = queryInfo->getClientCount();
    }
}
``````

-----

## Send messages

If you want to send messages to other members in the channel, you can
call the
[sendMessage](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#aa67711141ad0883ad8f2dce0ea631b48)
method:

``````cpp
//The last parameter is the receiver id; if it is empty, it will be sent to all members in the channel
JCManager::shared()->mediaChannel->sendMessage(type, "message content", NULL);
``````

Among them, type (message type) is a custom type. For types like text,
image, file, etc., the message type needs to be consistent when parsing
the received message.

When other members in the channel receive the message, they will receive
the
[onMessageReceive](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a6f6b72922ebc576d94f55dc153b1209d)
callback:

``````cpp
void JCManager::onMessageReceive(const char* type, const char* content, const char* fromUserId)
{
    std::stringstream s;
    s << "Conf message received " << fromUserId << " type:" << type << " content:" << JCTool::Utf8ToGB2312(content);
}
``````

## Channel Member Management

### Access channel members

Call the
[getParticipant](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a0fd6477db77a60df91fa615b814ac796)
method and pass in the userId of the member to get the channel member
object:

``````cpp
JCMediaChannelParticipant* participant = JCManager::shared()->mediaChannel->getParticipant(userId);
``````

-----

### Access all member objects of the channel

Call the
[getParticipants](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a3baccb9d05486fb20ff8d206284f609e)
method to get all the member objects of the channel:

``````cpp
std::list<JCMediaChannelParticipant*>* participants = JCManager::shared()->mediaChannel->getParticipants();
``````

-----

### Kick out members

Call the
[kick](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#aa5ee1e5334beb9ca63a8dc7110aaf6c0)
method to kick a member out of the conference:

``````cpp
//Access memeber objects
JCMediaChannelParticipant* participant = JCManager::shared()->mediaChannel->getParticipant(userId);
//Kick out a member
JCManager::shared()->mediaChannel->kick(participant);
``````
