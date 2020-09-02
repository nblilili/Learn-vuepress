---
title: Call Management
---
# Call Management

## Set the number of callers

Before initiating a call, you can set the maximum number of callers
using the maxCallNum and the default is 1. If it is a video call, the
maximum number can only be 1. If it is a voice call, the maximum number
is 2:

``````csharp
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
([mute](http://developer.juphoon.com/portal/reference/V2.1/windows/html/bb1ed5b7-2f76-e89d-f964-328e2b746904.htm))
in the JCCallItem. After turning on mute, another party will not hear
your voice:

``````csharp
/// <summary>
/// Mute, decide to turn on/off the mute state in JCCallItem
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <returns>Return true to indicate the normal execution of call flow, and false to indicate call failed</returns>
public bool mute(JCCallItem item)
``````

### Call recording

You can record during a call. Turning on/off recording depends on the
current recording status (audioRecord). If recording is in progress or
the call is suspended, audio recording cannot be performed. The
recording status can be obtained through the
[<span id="id53" class="problematic">\`JCCallItem\`\_</span>](#id52)
object.

Turn on/off recording interface as follows:

``````csharp
/// <summary>
/// Call recording, decide to turn on/off call holding through the call holding state in the JCCallItem object
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <param name="enable">turn on/off recording  </param>
/// <param name="filePath">recording file path</param>
/// <returns>Return true to indicate the normal execution of call flow, and false to indicate call failed</returns>
public bool audioRecord(JCCallItem item, bool enable, string filePath)
``````

Sample code:

``````csharp
```
JCCallItem item = call.getActiveCallItem();
if (item.audioRecord)
{
    // End recording
    call.audioRecord(item, false, "your filePath");
} else {
    // Create a recording file path
    String filePath; // The absolute path of the recording file, and the SDK will automatically create the recording file
    if (filtPath.Length > 0)
    {
        // Start recording
        call.audioRecord(item, true, filePath);
    }
}
}
```
``````

When the recording is turned on or off, the recording status will be
changed and reported through the onCallItemUpdate callback:

``````csharp
/// <summary>
/// This callback triggers when updating the call status
/// When this callback is received from the upper level, all the information and status of the call can be obtained based on the JCCallItem Object, thereby updating the call-related UI
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <param name="changeParam">update symbol class</param>
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

-----

### Turn on/off call hold

Call the following method to maintain call hold or release call hold of
the call object (this operation cannot be performed when the call object
is held). Turn on/off call hold needs to be based on the call hold
status of
([hold](http://developer.juphoon.com/portal/reference/V2.1/windows/html/dc13e9d5-2842-1b22-5d6d-9a617d321458.htm))
in the JCCallItem object:

``````csharp
/// <summary>
/// Call hold, decide to turn on/off the call hold state in the JCCallItem object
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <returns>Return true to indicate the normal execution of call flow, and false to indicate call failed</returns>
public bool hold(JCCallItem item)
``````

### Switch active call

Call the following method to change the call on hold and the active
call:

``````csharp
/// <summary>
/// Switch active call
/// </summary>
/// <param name="item">JCCallItem object that needs to become active</param>
/// <returns>Return true to indicate the normal execution of call flow, and false to indicate call failed</returns>
public bool becomeActive(JCCallItem item)
``````

Sample code:

``````csharp
//Get active call object
JCCallItem item = call.getActiveCallItem();
call.mute(item);
call.hold(item);
call.becomeActive(item);
``````

### Send messages during a call

Call the following interface to realize the function of sending messages
during a call:

``````csharp
/// <summary>
/// Send data through the channel after the call is established
/// </summary>
/// <param name="item">JCCallItem object that needs to send data</param>
/// <param name="type">Users can customize text message types, like text, xml, etc.</param>
/// <param name="content">text content</param>
/// <returns>return true to indicate the normal execution of the call flow, and false to indicate call failed</returns>
public bool sendMessage(JCCallItem item, string type, string content)
``````

When messages are received during a call, an onMessageReceive callback
is received:

``````csharp
/// <summary>
/// the callback triggers when receiving messages during a call
/// </summary>
/// <param name="type">message type</param>
/// <param name="content">message content</param>
/// <param name="item">JCCallItem object</param>
void onMessageReceive(string type, string content, JCCallItem item);
``````

Sample code:

``````csharp
JCCallItem item = call.getActiveCallItem();
call.sendMessage(item, "text", "message content");
``````

### Related callbacks

During a call, if the call status changes, like turning on/off mute,
turning on/off call hold, switching active status, turning on/off video
streaming, network changes, etc., the callback triggers when updating
the call status:

``````csharp
/// <summary>
/// This callback triggers when updating the call status
/// When this callback is received from the upper level, all the information and status of the call can be obtained based on the JCCallItem Object, thereby updating the call-related UI
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <param name="changeParam">update symbol class</param>
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

For the description of JCCallChangeParam, please refer to the
JCCallItem.h file.

::: tip

The mute state, call hold state, and active state can be obtained
through the
[JCCallItem](http://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm)
object.

:::

Sample code:

``````csharp
public void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam) {
    if (item.mute) { // Turn on mute
        ...
    } else if (item.hold) { // hang up
        ...
    } else if (item.held) { // suspended
        ...
    } else if (item.active) { // active state
        ...
    } else if (item.netStatus) { // normal network statuss
        ...
    }
}
``````

-----
