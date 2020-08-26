---
title: Call Management
---
# Call Management

## Set the number of callers

Before initiating a call, you can set the maximum number of people using
the maxCallNum and the default is 1. If it is a video call, the maximum
number of people can only be 1. If it is a voice call, the maximum
number of people is 2:

``````java
call.maxCallNum = 1;
``````

When the call exceeds the maximum number of people:

- Outgoing calls will fail due to JCCallReasonCallOverLimit (exceeded
    call limit).

- The incoming call will be rejected automatically because of the
    JCCallReasonBusy (busy).

## Control call process

### Call mute

You can turn mute on or off by the following methods. Turning mute on or
off depends on the mute state in JCCallItem. The mute state can be
obtained by the
[getMute()](http://developer.juphoon.com/portal/reference/android/com/juphoon/cloud/JCCallItem.html#getMute--)
method. When mute is turned on, the other party will not hear you:

``````java
/**
 * Mute, through the mute state in the JCCallItem object to decide to turn mute on and off
 *
 * @param   item JCCallItem object
 * @return  return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
public abstract boolean mute(JCCallItem item);
``````

### Call recording

You can record during a call. Turning recording on or off depends on the
current recording status (audioRecord). If recording is in progress or
the call is suspended, audio recording cannot be performed. The
recording state (audioRecord) can be obtained by the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
method in the JCCallItem object.

Open or close the recording interface as follows:

``````java
/**
 * Voice call recording, through the audioRecord state in the JCCallItem object to decide to turn on or off the recording
 *
 * @param item      JCCallItem object
 * @param enable    turn recording on and off
 * @param filePath  recording file path
 * @return          return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
public abstract boolean audioRecord(JCCallItem item, boolean enable, String filePath);
``````

Sample code:

``````java
JCCallItem item = call.getCallItems().get(0);
if (item.getAudioRecord()) {
    // End of recording
    call.audioRecord(item, false, "your filePath");
} else {
    // Create a recording file path
    String filePath; // Absolute path of the recording file, the SDK will automatically create the recording file
    if (!TextUtils.isEmpty(filePath)) {
        // Start recording
        call.audioRecord(item, true, filePath);
    }
}
``````

When the recording is turned on or off, the recording status will be
changed and reported through the onCallItemUpdate callback:

``````java
/**
 * The callback of call status update (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call related UI)
 *
 * @param item JCCallItem object
 * @param changeParam update logo class
 */
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

-----

### Turn on/off call hold

You can call the following methods to call hold or release call hold on
the call object. To turn call hold on or off depends on the call hold
state in the JCCallItem object. The call hold state (hold) can be
obtained by the
[getHold()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#getHold--)

``````java
/**
 * Call hold, through the call hold state in the JCCallItem object to decide to turn call hold on and off
 * Only for audio, if it is a video call, the upper layer needs to handle the video logic
 *
 * @param item  JCCallItem object
 * @return      return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
public abstract boolean hold(JCCallItem item);
``````

### Switch active call

Call the following method to switch between the held object and the
active call object during the call:

``````java
/**
 * Switch active call
 *
 * @param item  item needs to become active JCCallItem object object
 * @return      return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
public abstract boolean becomeActive(JCCallItem item);
``````

### Send messages during a call

Call the following interface to realize the function of sending messages
during the call:

``````java
/**
 * Send data through the channel established by the call
 *
 * @param item      JCCallItem object that needs to send data
 * @param type      user can customize text message types, such as text, xml, etc.
 * @param content   text content
 * @return          return true to indicate normal execution of the call flow, and false to indicate abnormal call
 */
public abstract boolean sendMessage(JCCallItem item, String type, String content);
``````

When a message is received during a call, an onMessageReceive callback
is received:

``````java
/**
 * Callback for messages received during a call
 *
 * @param type    message type
 * @param content message content
 * @param item    JCCallItem object
 */
void onMessageReceive(String type, String content, JCCallItem item);
``````

Sample code:

``````java
JCCallItem item = call.getActiveCallItem();
call.sendMessage("text", "message content", item);
``````

-----

### Related callbacks

During a call, if the call status changes, such as turning on/off mute,
turning on/off call hold, active status switching, network change, etc.,
you will receive a callback of call status update.

``````java
/**
 * The callback of call status update (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call related UI)
 *
 * @param item           JCCallItem object,update all when the item is null
 * @param changeParam    update logo class
 */
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

::: tip

The mute state, call hold state, and active state can be obtained
through the JCCallItem object.

:::

Sample code:

``````java
public void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam) {
    if (item.mute) { // Turn on mute
        ...
    } else if (item.hold) { // Hang up the call
        ...
    } else if (item.held) { // Hanged
        ...
    } else if (item.active) { //  active state
        ...
    } else if (item.uploadVideoStreamSelf) { // The local end is uploading a video stream
        ...
    } else if (item.uploadVideoStreamOther) { // The remote end is uploading a video stream
        ...
    }
}
``````
