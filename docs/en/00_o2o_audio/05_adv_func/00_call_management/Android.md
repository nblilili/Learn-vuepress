---
title: Call Management
---
# Call Management

## Set the number of callers

Before initiating a call, you can set the maximum number of callers
using the maxCallNum and the default is 1. If it is a video call, the
maximum number can only be 1. If it is a voice call, the maximum number
is 2:

``````java
call.maxCallNum = 1;
``````

When exceed the maximum number:

- Outgoing calls will fail due to JCCallReasonCallOverLimit (exceed
    maximum number) .

- Incoming calls will be rejected automatically because of the
    JCCallReasonBusy (busy).

## Control call process

### Call mute

You can turn on/off mute by the following method, which depends on the
mute state in JCCallItem. The mute state can be obtained by the
[getMute()](http://developer.juphoon.com/portal/reference/android/com/juphoon/cloud/JCCallItem.html#getMute--)
method. After turning on mute, another party will not hear your voice:

``````java
/**
 * Mute, decide to turn on/off mute through the mute state in the JCCallItem object
 *
 * @param   item JCCallItem object
 * @return  return true to indicate the normal execution of the call flow, and false to indicate call failed
 */
public abstract boolean mute(JCCallItem item);
``````

### Call recording

You can record during a call. Turning on/off recording depends on the
current recording status (audioRecord). If recording is in progress or
the call is suspended, audio recording cannot be performed. The
recording state (audioRecord) can be obtained by the getAudioRecord()
method in the
[JCCallItem](/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
object.

Turn on/off the recording interface as follows:

``````java
/**
 * Voice call recording, decide to turn on/off the recording through the audioRecord state in the JCCallItem object
 *
 * @param item      JCCallItem object
 * @param enable    turn on/off recording
 * @param filePath  recording file path
 * @return          return true to indicate the normal execution of the call flow, and false to indicate call failed
 */
public abstract boolean audioRecord(JCCallItem item, boolean enable, String filePath);
``````

Sample code:

``````java
JCCallItem item = call.getCallItems().get(0);
if (item.getAudioRecord()) {
    // End recording
    call.audioRecord(item, false, "your filePath");
} else {
    // Create a recording file path
    String filePath; // The absolute path of the recording file, and the SDK will automatically create a recording file
    if (!TextUtils.isEmpty(filePath)) {
        // Start recording
        call.audioRecord(item, true, filePath);
    }
}
``````

When the recording is turned on/off, the recording status will be
changed and reported through the onCallItemUpdate callback:

``````java
/**
 * The callback triggers when updating the call status (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call-related UI)
 *
 * @param item JCCallItem object
 * @param changeParam update symbol class
 */
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

-----

### Turn on/off call hold

You can call the following method to maintain call hold or release call
hold on the call object. Turning on/off call hold depends on the call
hold state in the JCCallItem object. The call hold state can be obtained
by the [<span id="id61" class="problematic">\`</span>](#id60)getHold()
\<[https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html\#getHold–](/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#getHold--)\>\`\_method:

``````java
/**
 * Call hold, decide to turn on/off call hold through the call hold state in the JCCallItem object
 * Only for audio, the upper layer needs to handle the video logic if it is a video call
 *
 * @param item  JCCallItem object
 * @return      return true to indicate the normal execution of the call flow, and false to indicate call failed
 */
public abstract boolean hold(JCCallItem item);
``````

### Switch active call

Call the following method to change the call on hold to the active call:

``````java
/**
 * Switch active call
 *
 * @param item  The JCCallItem object that needs to become active
 * @return      return true to indicate the normal execution of the call flow, and false to indicate call failed
 */
public abstract boolean becomeActive(JCCallItem item);
``````

### Send messages during a call

Call the following interface to realize the function of sending messages
during a call:

``````java
/**
 * Send data through the channel established by the call
 *
 * @param item      JCCallItem object that needs to send data
 * @param type      user can customize text message types, like text, xml, etc.
 * @param content   text content
 * @return          return true to indicate the normal execution of the call flow, and false to indicate call failed
 */
public abstract boolean sendMessage(JCCallItem item, String type, String content);
``````

When messages are received during a call, an onMessageReceive callback
will be received:

``````java
/**
 * The callback triggers when receiving messages during a call
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
a callback of updating call status will be triggered:

``````java
/**
 * The callback triggers when updating call status (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call-related UI)
 *
 * @param item           JCCallItem object（the call status of all calls will be updated if the value of item is null）
 * @param changeParam    update symbol class
 */
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

::: tip

The mute state, call hold state and active state can be obtained through
[JCCallItem](/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
object.

:::

Sample code:

``````java
public void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam) {
    if (item.mute) { // Turn on mute
        ...
    } else if (item.hold) { // hang up
        ...
    } else if (item.held) { // suspended
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
