---
title: Realize One-to-One Video Calling
---
# Realize One-to-One Video Calling

This guide introduces how to achieve one-to-one video calling. API call
sequence for one-to-one call is as shown below:

![../../../../\_images/1-1workflowios.png](../../../../_images/1-1workflowios.png)

## Initialize

Call [JCMediaDevice
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:)
and [JCCall
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/create:mediaDevice:callback:)
to initialize the modules needed for one-to-one calling:

``````objectivec
//Initialize
-(bool)initialize {
    // 1. Media class
    JCMediaDevice *mediaDevice = [JCMediaDevice create:client callback:self];
    // 2. Call class
    JCCall *call = [JCCall create:client mediaDevice:mediaDevice callback:self];
    return client.state == JCClientStateLogined;
}
``````

Among them:

- The callback in the JCMediaDevice create is the proxy object of the
    [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html)
    protocol, which is used to notify the upper layer of media device
    related events. Therefore, you need to specify the proxy object of
    callback first, and then implement the JCMediaDeviceCallback in the
    proxy object.

The main methods in the JCMediaDeviceCallback are as follows:

``````objectivec
//Camera changes
-(void)onCameraUpdate;

//Audio output changes
-(void)onAudioOutputTypeChange:(NSString*)audioOutputType;

//Sound interruption recovery
-(void)onAudioInerruptAndResume:(BOOL)interrupt;
``````

- The callback in the JCCall create is a proxy object of the
    JCCallCallback protocol, which is used to notify the upper layer of
    the call-related events. Therefore, you need to specify the proxy
    object of callback first, and then implement JCCallCallback in the
    proxy object.

The main methods in the JCCallCallback are as follows:

``````objectivec
//This callback triggers when the callItem is added
-(void)onCallItemAdd:(JCCallItem* __nonnull)item;

//This callback triggers when the call is removed
-(void)onCallItemRemove:(JCCallItem* __nonnull)item reason:(JCCallReason)reason description:(NSString * __nullable)description;

//The callback of call status update (When the upper layer receives this callback, you can obtain all the information and status of the call according to the JCCallItem object, thereby updating the call related UI)
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam;
``````

## Make a call

To call
[call](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/call:video:extraParam:)
to initiate a video call, the parameters to be filled are:

- `userID` Fill in the user ID of the other party.

- `video` Select whether to call a video call, and true means to make
    a video call, while false means to make a voice call.

- `extraParam` is a custom pass-through string, which can be obtained
    through the extraParam property in the JCCallItem object.

``````objectivec
// Initiate a video call
[call call:@"userID" video:true extraParam:@"custom pass-through string"];
``````

After dialing the call, both the caller and the callee will receive the
callback
[onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
for the new call, and the call status will change to JCCallStatePending
at this time. You can implement the
[onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
method in the upper layer and handle the related logic:

``````objectivec
// Receive a new call callback
-(void)onCallItemAdd:(JCCallItem* __nonnull)item {
    // Business logic
    if (item.direction == JCCallDirectionIn) {
        // If it is an incoming call
        ...
    } else {
        // If it is an outgoing call
        ...
    }
}
``````

::: tip

If the caller wants to cancel the call, he/she can go directly to the
hang up part. After calling the hang up interface, the call status
becomes the JCCallStateCancel.

:::

## Create local and remote video images

After initiating a call, call the
[startSelfVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/startSelfVideo:)
in the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
class to create a local video image. This method returns a
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html)
object. This object is used to render the video to the canvas and manage
the rendering method. (Calling this method will open the camera):

``````objectivec
-(void)onCallItemAdd:(JCCallItem* __nonnull)item {
    if (item.state == JCCallStateTalking && localCanvas == nil && item.uploadVideoStreamSelf) {
        // Create local and remote video images
        JCMediaDeviceVideoCanvas *localCanvas = [item startSelfVideo:JCMediaDeviceRenderFullScreen];
    }
}
``````

## Answer the call

1. After the caller initiates the call successfully, the called party
    will receive the
    [onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
    callback. At this time, the video and direction properties of the
    [JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
    object in the callback can be used to determine whether it is a
    video call or a voice call, so as to make corresponding processing:

    ``````objectivec
    -(void)onCallItemAdd:(JCCallItem* __nonnull)item {
        // If it is a video call and is ringing
        if (item && item.direction == JCCallDirectionIn && item.video) {
            // 2. Make corresponding processing, such as "ringing" on the interface
            ...
        }
    }
    ``````

2. Call
    [answer](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/answer:video:)
    to answer the call, **the video call can be answered by voice or
    video**:

    ``````objectivec
    // Answer the call
    [call answer:item video:true];
    ``````

After the call is answered, the call status changes to
JCCallStateConnecting.

::: tip

If you want to reject the call at this time, you can go directly to the
hang up part. After calling the hang up interface, the call state
becomes JCCallStateCanceled.

:::

## Create remote video images

After the called party answers the call, the two parties will establish
a connection. At this time, both the caller and the called party will
receive the updated callback of the call (onCallItemUpdate), and the
call state will change to the JCCallStateTalking.

Call the
[startOtherVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/startOtherVideo:)
in the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html)
class to create a remote video streaming. This method returns a
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html)
object, which is used to render the video to the canvas and manage the
rendering method:

``````objectivec
-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam {
    JCMediaDeviceVideoCanvas *remoteCanvas;
    // If the peer is uploading a video streaming (uploadVideoStreamOther)
    if (item.state == JCCallStateTalking && remoteCanvas == nil && item.uploadVideoStreamOther) {
        // Remote video rendering
        remoteCanvas = [item startOtherVideo:JCMediaDeviceRenderFullScreen];
    }
}
``````

## Hang up the call

Both the calling party and the called party can hang up the call.

1. First call
    [getActiveCallItem](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/getActiveCallItem)
    to get the currently active call object;

2. After obtaining the current active call object, call
    [term](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/term:reason:description:)
    to hang up the current active call:

    ``````objectivec
    // 1. Get the current active call
    JCCallItem *item = [call getActiveCallItem];
    // 2. Hang up the current active call
    [call term:item reason:JCCallReasonNone description:@"Caller hangs up"];
    ``````

## Destroy local and remote video images

After the call is hung up, the onCallItemRemove callback in
[JCCallCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html)
will be triggered, and the call state will change to JCCallStateOk. At
this time, you need to call the
[stopSelfVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/stopSelfVideo)
and
[stopOtherVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/stopOtherVideo)
methods to destroy the local and remote video images:

``````objectivec
```
 -(void)onCallItemRemove:(JCCallItem* __nonnull)item reason:(JCCallReason)reason description:(NSString * __nullable)description { //The callback of removing the call
// Interface processing
if (localCanvas) {
    // Local video destruction
    [item stopSelfVideo];
}
if (remoteCanvas) {
    // Remote video destruction
    [item stopOtherVideo];
}
}
```
``````
