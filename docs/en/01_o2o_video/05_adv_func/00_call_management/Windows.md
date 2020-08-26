---
title: Call Management
---
# Call Management

## Set the number of callers

Before initiating a call, you can set the maximum number of people using
the maxCallNum and the default is 1. If it is a video call, the maximum
number of people can only be 1. If it is a voice call, the maximum
number of people is 2:

``````csharp
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
JCCallItem([mute](http://developer.juphoon.com/portal/reference/V2.1/windows/html/bb1ed5b7-2f76-e89d-f964-328e2b746904.htm)).
After mute is turned on, the other party will not hear your voice:

``````csharp
/// <summary>
/// Mute(decide to turn on or off by the mute state in JCCallItem)
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <returns>Return true to indicate normal execution of call flow, and false to indicate abnormal call</returns>
public bool mute(JCCallItem item)
``````

### Call recording

You can record during a call. Turning recording on or off depends on the
current recording status (audioRecord). If recording is in progress or
the call is suspended, audio recording cannot be performed. The
recording status can be obtained through the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm)
object.

Open or close the recording interface as follows:

``````csharp
/// <summary>
/// Call recording (decide to turn on and off call holding through the call holding state in the JCCallItem object)
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <param name="enable">turn recording on and off</param>
/// <param name="filePath">recording file path</param>
/// <returns>Return true to indicate normal execution of call flow, and false to indicate abnormal call</returns>
public bool audioRecord(JCCallItem item, bool enable, string filePath)
``````

Sample code:

``````csharp
```
JCCallItem item = call.getActiveCallItem();
if (item.audioRecord)
{
    // End of recording
    call.audioRecord(item, false, "your filePath");
} else {
    // Create recording file save path
    String filePath; // Absolute path of the recording file, the SDK will automatically create the recording file
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
/// This callback triggers when the callItem‘s status is updated
/// When this callback is received from the upper level, all the information and status of the call can be obtained based on the JCCallItem Object, thereby updating the call-related UI
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <param name="changeParam">update logo class</param>
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

-----

### Turn on/off call hold

Call the following method to call hold or release call hold of the call
object (this operation cannot be performed when the call object is held
(ie, the state is held)), open or close call hold needs to be based on
the call hold status of the JCCallItem object
([hold](http://developer.juphoon.com/portal/reference/V2.1/windows/html/dc13e9d5-2842-1b22-5d6d-9a617d321458.htm))
Call on hold:

``````csharp
/// <summary>
/// Call hold (decide to open or close by the call hold state in the JCCallItem object)
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <returns>Return true to indicate normal execution of call flow, and false to indicate abnormal call</returns>
public bool hold(JCCallItem item)
``````

### Switch active call

Call the following method to switch between the held object and the
active call object during the call:

``````csharp
/// <summary>
/// Switch active call
/// </summary>
/// <param name="item">JCCallItem objects that need to become active</param>
/// <returns>Return true to indicate normal execution of call flow, and false to indicate abnormal call</returns>
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
during the call:

``````csharp
/// <summary>
/// Send data through the channel after the call is established
/// </summary>
/// <param name="item">JCCallItem object that needs to send data</param>
/// <param name="type">Users can customize text message types, such as text, xml, etc.</param>
/// <param name="content">text content</param>
/// <returns>return true to indicate normal execution of the call flow, and false to indicate abnormal call</returns>
public bool sendMessage(JCCallItem item, string type, string content)
``````

When a message is received during a call, an onMessageReceive callback
is received:

``````csharp
/// <summary>
/// Callback for messages received during a call
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

During a call, if the call status changes, such as turning on/off mute,
turning on/off call hold, active status switching, turning on/off video
streaming, network changes, etc., you will receive a callback to update
the call status:

``````csharp
/// <summary>
/// This callback triggers when the callItem‘s status is updated
/// When this callback is received from the upper level, all the information and status of the call can be obtained based on the JCCallItem Object, thereby updating the call-related UI
/// </summary>
/// <param name="item">JCCallItem object</param>
/// <param name="changeParam">update logo class</param>
void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);
``````

For the description of JCCallChangeParam, please refer to the
JCCallItem.h file.

::: tip

The mute state, call hold state, and active state can be obtained
through the JCCallItem object.

:::

Sample code:

``````csharp
public void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam) {
    if (item.mute) { // Turn on mute
        ...
    } else if (item.hold) { // Hang up the call
        ...
    } else if (item.held) { // When held changed
        ...
    } else if (item.active) { //  active state
        ...
    } else if (item.netStatus) { // When network status changed
        ...
    }
}
``````

-----
