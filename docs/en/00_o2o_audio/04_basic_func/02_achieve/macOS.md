---
title: Realize One-to-One Voice Calling
---
# Realize One-to-One Voice Calling

This guide introduces how to implement one-to-one voice calls. The API
call sequence of one-to-one calls is shown in the figure below:

![../../../../\_images_en/1-1workflowios.png](../../../../_images_en/1-1workflowios.png)

## Initialize

Call [JCMediaDevice
create](/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:)
and [JCCall
create](/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/create:mediaDevice:callback:)
to initialize the modules needed for one-to-one calling:

``````objectivec
//Initialize
-(bool)initialize {
    //1. Media class
    JCMediaDevice *mediaDevice = [JCMediaDevice create:client callback:self];
    //2. Call class
    JCCall *call = [JCCall create:client mediaDevice:mediaDevice callback:self];
    return client.state == JCClientStateLogined;
}
``````

Among them:

- The callback in the JCMediaDevice create is the proxy object of the
    [JCMediaDeviceCallback](/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html)
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
    ||JCCallCallback| protocol, which is used to notify the upper layer
    of the call-related events. Therefore, you need to specify the proxy
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

Call
[call](/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/call:video:extraParam:)
to initiate a video call, the parameters that need to be filled are:

- `userID` Fill in the user ID of the other party.

- `video` Select whether to call a video call, and true means to make
    a video call, while false means to make a voice call.

- `extraParam` is a custom pass-through string, which can be obtained
    through the extraParam property in the JCCallItem object.

``````objectivec
// Initiate a voice call
[call call:@"userID" video:false extraParam:@"custom pass-through string"];
``````

After dialing the call, both the caller and the callee will receive the
callback
[onCallItemAdd](/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
for the new call, and the call status will change to JCCallStatePending
at this time. You can implement the
[onCallItemAdd](/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
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

## Answer a call

1. After the caller initiates the call successfully, the called party
    will receive the
    [onCallItemAdd](/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:)
    callback. At this time, the video and direction properties of the
    [JCCallItem](/portal/reference/V2.1/ios/Classes/JCCallItem.html)
    object in the callback can be used to determine whether it is a
    video call or a voice call, so as to make corresponding processing:

    ``````objectivec
    -(void)onCallItemAdd:(JCCallItem* __nonnull)item {
        // 1. If it is an incoming video call and it is ringing
        if (item && item.direction == JCCallDirectionIn && !item.video) {
            // 2. Make corresponding processing, such as "ringing" on the interface
            ...
        }
    }
    ``````

2. Call
    [answer](/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/answer:video:)
    to answer calls, **Voice calls can only be answered by voice**:

    ``````objectivec
    // Answer the call
    [call answer:item video:false];
    ``````

After the call is answered, the call status changes to
JCCallStateConnecting.

::: tip

If you want to reject the call at this time, you can go directly to the
hang up part. After calling the hang up interface, the call state
becomes JCCallStateCanceled.

:::

## Hang up a call

Both the calling party and the called party can hang up the call.

1. First call
    [getActiveCallItem](/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/getActiveCallItem)
    to get the currently active call object.

2. After obtaining the current active call object, call
    [term](/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/term:reason:description:)
    to hang up the current active call:

    ``````objectivec
    // 1. Get the current active call
    JCCallItem *item = [call getActiveCallItem];
    // 2. Hang up the current active call
    [call term:item reason:JCCallReasonNone description:@"the caller hangs up"];
    ``````

After hanging up the call, the onCallItemRemove in JCCallCallback will
be triggered, and the call state will change to JCCallStateOk.
