---
title: Call Management
---
# Call Management

## Set the number of callers

Before initiating a call, you can set the maximum number of people using
the maxCallNum and the default is 1. If it is a video call, the maximum
number of people can only be 1. If it is a voice call, the maximum
number of people is 2:

``````objectivec
call.maxCallNum = 1;
``````

When the call exceeds the maximum number of people:

- Outgoing calls will fail due to JCCallReasonCallOverLimit (exceeded
    call limit).

- The incoming call will be rejected automatically because of the
    JCCallReasonBusy (busy).

## Control call process

### Call mute

Use the following methods to turn mute on or off. Turning mute on and
off depends on the mute state in
JCCallItem([mute](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/mute:)).
After mute is turned on, the other party will not hear your voice.

``````objectivec
/**
 *  @brief Mute, through the mute state in the JCCallItem object to decide to turn mute on and off
 *  @param item JCCallItem object
 *  @return return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
-(bool)mute:(JCCallItem* __nonnull)item;
``````

### Call recording

Use the following methods to turn mute on or off. Turning mute on and
off depends on the mute state in
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
. After mute is turned on, the other party will not hear your voice.

Open or close the recording interface as follows:

``````objectivec
/**
 * Voice call recording, through the audioRecord state in the JCCallItem object to decide to turn on or off the recording
 *
 * @param item              JCCallItem object
 * @param enable            turn recording on and off
 * @param filePath          recording file path
 * @return                  return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
-(bool)audioRecord:(JCCallItem* __nonnull)item enable:(bool)enable filePath:(NSString* __nullable)filePath;
``````

Sample code:

``````objectivec
// Voice recording
- (void)audioRecord:(JCCallItem* __nonnull)item {
    if (item.audioRecord) { // Recording
        //Process the end of recording
        [call audioRecord:item enable:false filePath:@"your filePath"];
            ...
    } else { // Not recording
        // Create recording file
        NSString *filePath; // Absolute path of the recording file, the SDK will automatically create the recording file
        if (filePath != nil) {
            // Start recording
            [call audioRecord:item enable:true filePath:filePath];
            ...
        } else {
            // Handling recording failure
        }
    }
}
``````

When the recording is turned on or off, the recording status will be
changed and reported through the onCallItemUpdate callback:

``````objectivec
/**
 *  @brief The callback of call status update (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call related UI)
 *  @param item JCCallItem object
 *  @param changeParam update logo class
 */
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam;
``````

-----

### Turn on/off call hold

Call the following method to call hold or release call hold for the call
object (this operation cannot be performed when the call object is held
(ie, the state is held)), open or close call hold needs to be based on
the JCCallItem object
([hold](http://developer.juphoon.com/portal/reference/ios/Classes/JCCallItem.html#//api/name/hold))
Call on hold

``````objectivec
/**
 *  @brief                  Call hold, through the call hold state in the JCCallItem object to decide to turn call hold on and off
 *  @param item             JCCallItem object
 *  @return                 return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
-(bool)hold:(JCCallItem* __nonnull)item;
``````

### Switch active call

Call the following method to switch between the held object and the
active call object during the call:

``````objectivec
/**
 *  @brief Switch active call
 *  @param item item needs to become active JCCallItem object object
 *  @return return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
-(bool)becomeActive:(JCCallItem* __nonnull)item;
``````

-----

### Send messages during a call

Call the following interface to realize the function of sending messages
during the call:

``````objectivec
/**
 *  @brief Send data through the channel established by the call
 *  @param item JCCallItem object that needs to send data
 *  @param type the user can customize text message types, such as text, xml, etc.
 *  @param content message content
 *  @return return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
-(bool)sendMessage:(JCCallItem * __nonnull)item type:(NSString * __nonnull)type content:(NSString * __nonnull)content;
``````

When a message is received during a call, an onMessageReceive callback
is received:

``````objectivec
/**
 *  @brief Callback for messages received during a call
 *  @param item JCCallItem object
 *  @param type message type
 *  @param content message content
 */
-(void)onMessageReceive:(JCCallItem * __nonnull)item type:(NSString * __nonnull)type content:(NSString * __nonnull)content;
``````

Sample code:

``````objectivec
[call sendMessage:item type:@"text" content:@"message content"];
``````

-----

### Related callbacks

During a call, if the call status changes, such as turning on/off mute,
turning on/off call hold, active status switching, network change, etc.,
you will receive a callback of call status update:

``````objectivec
/**
 *  @brief The callback of call status update (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call related UI)
 *  @param item JCCallItem object
 *  @param changeParam update logo class
 */
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam;
``````

For the description of JCCallChangeParam, please refer to the
JCCallItem.h file.

::: tip

The mute state, call hold state, and active state can be obtained
through the JCCallItem object.

:::

Sample code:

``````objectivec
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam {
    JCCallItem* callItem = item;
    if (changeParam.mute) { // Turn on mute
        ...
    } else if (changeParam.sate) { // When call status changed
        ...
    } else if (changeParam.held) { // When held changed
        ...
    } else if (changeParam.active) { // When active state changed
        ...
    } else if (changeParam.netStatus) { // When network status changed
        ...
    }
    ...
}
``````

-----
