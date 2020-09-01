---
title: Call Management
---
# Call Management

## Set the number of callers

Before initiating a call, you can set the maximum number of callers
using the maxCallNum and the default is 1. If it is a video call, the
maximum number can only be 1. If it is a voice call, the maximum number
is 2:

``````objectivec
call.maxCallNum = 1;
``````

When exceed the maximum number:

- Outgoing calls will fail due to JCCallReasonCallOverLimit (exceed
    maximum number).

- Incoming calls will be rejected automatically because of the
    JCCallReasonBusy (busy).

## Control call process

### Call mute

Use the following method to turn on/off mute, which depends on the mute
state
([mute](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/mute))
in the JCCallItem. After turning on mute, another party will not hear
your voice:

``````objectivec
/**
 *  @brief Mute, through the mute state in the JCCallItem object to decide to turn mute on and off
 *  @param item JCCallItem object
 *  @return return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
-(bool)mute:(JCCallItem* __nonnull)item;
``````

### Call recording

You can record during a call. Turning on/off recording depends on the
current recording status (audioRecord). If recording is in progress or
the call is suspended, audio recording cannot be performed. The
recording status can be obtained through the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
object.

Turn on/off the recording interface as follows:

``````objectivec
/**
 * Voice call recording, decide to turn on/off recording through the audioRecord state in the JCCallItem object
 *
 * @param item              JCCallItem object
 * @param enable            turn on/off recording
 * @param filePath          recording file path
 * @return                  return true to indicate the normal execution of the call flow, and false to indicate call failed
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
        // Create a recording file
        NSString *filePath; // The absolute path of the recording file, and the SDK will automatically create the recording file
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
 *  @brief The callback triggers when updating call status (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call-related UI)
 *  @param item JCCallItem object
 *  @param changeParam update symbol class
 */
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam;
``````

-----

### Turn on/off call hold

Call the following method to maintain call hold or release call hold for
the call object (this operation cannot be performed when the call object
is held), turn on/off call hold needs to be based on the call hold of
([hold](http://developer.juphoon.com/portal/reference/ios/Classes/JCCallItem.html#//api/name/hold))
in the JCCallItem object:

``````objectivec
/**
 *  @brief                  Call hold, decide to turn on/off call hold hrough the call hold state in the JCCallItem object
 *  @param item             JCCallItem object
 *  @return                 return true to indicate the normal execution of the call flow, and false to indicate call failed
 */
-(bool)hold:(JCCallItem* __nonnull)item;
``````

### Switch active call

Call the following method to change the held call to the active call
during the call:

``````objectivec
/**
 *  @brief Switch active call
 *  @param item object needs to become active JCCallItem object
 *  @return return true to indicate normal execution of the call flow, and false to indicate call failed
 */
-(bool)becomeActive:(JCCallItem* __nonnull)item;
``````

Sample code:

``````objectivec
//Get active call object
JCCallItem *item = [call getActiveCallItem];;
//Turn on/off mute
[call mute:item];
//Turn on/off call hold
[call hold:item];
//Switch active call
[call becomeActive:item];
``````

### Send messages during a call

Call the following interface to realize the function of sending messages
during a call:

``````objectivec
/**
 *  @brief Send data through the channel established by the call
 *  @param item JCCallItem object that needs to send data
 *  @param type the user can customize text message types, like text, xml, etc.
 *  @param content message content
 *  @return return true to indicate normal execution of the call flow, and false to indicate call failed
 */
-(bool)sendMessage:(JCCallItem * __nonnull)item type:(NSString * __nonnull)type content:(NSString * __nonnull)content;
``````

When messages are received during a call, an onMessageReceive callback
is received:

``````objectivec
/**
 *  @brief the callback triggers when receiving messages during a call
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

### Related callbacks

During a call, if the call status changes, such as turning on/off mute,
turning on/off call hold, switching active status, network change, etc.,
the callback will triggers when updating the call status update:

``````objectivec
/**
 *  @brief The callback triggers when updating call status (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call-related UI)
 *  @param item JCCallItem object
 *  @param changeParam update symbol class
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
    } else if (changeParam.sate) { // hang up
        ...
    } else if (changeParam.held) { // suspended
        ...
    } else if (changeParam.active) { // active state
        ...
    } else if (changeParam.netStatus) { // normal network status
        ...
    }
    ...
}
``````

-----
