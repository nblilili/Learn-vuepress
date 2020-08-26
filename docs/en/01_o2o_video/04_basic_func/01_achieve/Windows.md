---
title: Realize One-to-One Video Calling
---
# Realize One-to-One Video Calling

This guide introduces how to achieve one-to-one video calling. API call
sequence for one-to-one call is as shown below:

![../../../../\_images/1-1workflowWindows.png](../../../../_images/1-1workflowWindows.png)

## Initialize

Call
[JCMediaDevice.create()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/cb59bc27-6528-9dbf-c996-de857096f847.htm)
and
[JCCall.create()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/eef10110-a3f7-b505-26fa-4b9ec1e2b998.htm)
to initialize the modules needed for one-to-one calling:

``````csharp
/// Create a new class and implement it
class JCManager : JCClientCallback, JCMediaDeviceCallback,JCCallCallbac{

    #region JCMediaDeviceCallback

    public void onCameraUpdate(){...}

    public void onAudioOutputTypeChange(string audioOutputType){...}

    #endregion

    #region JCCallCallbac
    ...
    /// Implement the methods in JCCallCallbac
    ...
    #endregion

    /// Declare object
    JCMediaDevice mMediaDevice;
    JCMediaChannel mMediaChannel;

    /// Initialization function
    public bool initialize(Context context) {

        /// 1. Media class
        mMediaDevice = JCMediaDevice.create(mClient, this);
        /// 2. Call class
        mCall = JCCall.create(mClient, mMediaDevice, this);
    }
}
``````

## Make a call

To call
[call()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/613adf03-d597-8221-86d5-0056c1b4d2a0.htm)
to initiate a video call, the parameters to be filled are:

- `userID` Fill in the user ID of the other party.

- `video` Select whether to call a video call, and true means to make
    a video call, while false means to make a voice call.

- [extraParam()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/e0226cbc-1ca1-ef9c-5e8e-d3dc853d618d.htm)
    is a custom pass-through string, which can be obtained through
    item.extraParam.

``````csharp
/// Initiate a voice call
mCall.call(userID, isVideo, null);
``````

After the call is made, both the caller and the called party will
receive the callback
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm)
for the new call, and the call status will change to
[STATE\_PENDING](https://developer.juphoon.com/portal/reference/V2.1/windows/html/2134e734-614d-4a19-f411-5fe1a81d3ccd.htm)
at this time. You can perform logical operations by overriding
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm):

``````csharp
public void onCallItemAdd(JCCallItem item) {
    /// Business logic
    if (item.direction == JCCall.DIRECTION_IN) {
        /// If you are the called party
        ...
    }else{
        /// If you are the caller
        ...
    }
}
``````

## Create local and remote video images

After initiating a call, call the
[startSelfVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/d399b6b1-b822-b6aa-de75-f35d6815e93b.htm)
in the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm)
class to open the local video preview. You need to fill in the parameter
[JCMediaDevice.RenderType](https://developer.juphoon.com/portal/reference/V2.1/windows/html/44604552-33eb-5a81-6b10-6c512d127a4b.htm)
to select the rendering mode:

``````csharp
/// 1. Initiate a video call
mCall.call("222", true, null);
/// 2. Get the current active call
JCCallItem mCallItem = mCall.getActiveCallItem();
/// 3. Open the local video preview (the adaptive mode)
mCallItem.startSelfVideo(JCMediaDevice.RENDER_FULL_AUTO);
``````

## Answer the call

The called party receives the
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm)
callback, and judges whether it is a video call or a voice call
according to the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm)
attribute in the callback, and then makes corresponding processing:

``````csharp
public void onCallItemAdd(JCCallItem item) {
    /// 1. If it is a video call and is ringing
    if (item.direction == JCCall.DIRECTION_IN && item.video) {
        /// 2. Make corresponding processing, such as "ringing" on the interface
        ...
    }
}
``````

Call
[answer()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/7211e914-c311-4457-4b0e-bc4ef46c7733.htm)
to answer the call:

``````csharp
mCall.answer(item, true);
``````

After the call is answered, the call status changes to
STATE\_CONNECTING.

::: tip

If you want to reject the call at this time, please call the interface
to hang up the call. In this case, after calling hang up, the call state
changes to STATE\_CANCELED.

:::

## Create remote video images

After the called party answers the call, the two parties will establish
a connection. At this time, both the caller and the called party will
receive the call update callback (onCallItemUpdate), and the call status
will change to STATE\_TALKING.

Call
[startOtherVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/a4bdbd97-6a97-002f-9c9e-6e4774e4e708.htm)
in the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm)
class to get the remote video image. The returned object is
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6a5b853c-d890-c30e-d236-5728d789ace1.htm):

``````csharp
public void onCallItemUpdate(JCCallItem item) {
    /// If the peer is uploading a video streaming (uploadVideoStreamOther)
    /// mRemoteCanvas is a JCMediaDeviceVideoCanvas object instance; please declare it before the method
    if (item.state == JCCall.STATE_TALKING && mRemoteCanvas == null && item.getUploadVideoStreamOther()) {
        /// Get remote video image, renderId comes from the JCCallItem object
        JCMediaDeviceVideoCanvas mRemoteCanvas = item.startOtherVideo(JCMediaDevice.RENDER_FULL_CONTENT);
        ...
    }
}
``````

## Hang up the call

Both the calling party and the called party can hang up the call.

1. Call
    [getActiveCallItem()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/6df31ff9-272f-c7cc-1da6-2755c5aad5e0.htm)
    to get the currently active call object:

    ``````csharp
    mCall.getActiveCallItem();
    ``````

2. Call
    [term()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/70758778-1450-172d-8684-3dd2818f2a84.htm)
    to hang up the current active call:

    ``````csharp
    mCall.term(item, reason, description);
    ``````

Sample code:

``````csharp
/// 1. Get the current active call
JCCallItem item = mCall.getActiveCallItem();
/// 2. Hang up the current active call
mCall.term(item, JCCall.REASON_NONE, null);
``````

## Destroy local and remote video images

After the call is hung up, you receive the callback
[onCallItemRemove()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/c6de8b41-37d7-a303-7761-0a3bc1caf18b.htm)
to remove the call, and the call state changes to STATE\_OK. At this
time, you need to call
[stopSelfVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/d51a3870-b54f-5149-3b9a-a1d017721d00.htm)
and
[stopOtherVideo()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/4cc26d8d-a4d4-1b2c-8917-b5ed4e048a28.htm)
to destroy the local and remote video images:

``````csharp
public void onCallItemRemove(JCCallItem item, JCCallReason reason, String description) {
    /// Destroy the local video image
    item.stopSelfVideo();
    /// Destroy the local video image
    item.stopOtherVideo();
}
``````
