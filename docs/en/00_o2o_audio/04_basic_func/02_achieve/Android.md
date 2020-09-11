---
title: Realize One-to-One Voice Calling
---
# Realize One-to-One Voice Calling

This guide introduces how to implement one-to-one voice calls. The API
call sequence of one-to-one voice calls is shown in the figure below:

![../../../../\_images_en/1-1workflowandroid.png](../../../../_images_en/1-1workflowandroid.png)

## Initialize

Call
[JCMediaDevice.create()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaDevice.html#create-com.juphoon.cloud.JCClient-com.juphoon.cloud.JCMediaDeviceCallback-)
and
[JCCall.create()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#create-com.juphoon.cloud.JCClient-com.juphoon.cloud.JCMediaDevice-com.juphoon.cloud.JCCallCallback-)
to initialize the modules needed for one-to-one calling:

``````java
// Declare object
JCMediaDevice mMediaDevice;
JCCall mCall;

// Initialization function
public boolean initialize(Context context) {
    //1. Media class
    mMediaDevice = JCMediaDevice.create(mClient, new JCMediaDeviceCallback() {
        @Override
        public void onCameraUpdate() {

        }
        @Override
        public void onAudioOutputTypeChange(int i) {

        }
        @Override
        public void onRenderReceived(JCMediaDeviceVideoCanvas jcMediaDeviceVideoCanvas) {

        }
        @Override
        public void onRenderStart(JCMediaDeviceVideoCanvas jcMediaDeviceVideoCanvas) {

        }
    });
    //2. Call class
    mCall = JCCall.create(mClient, mMediaDevice, new JCCallCallback() {
        @Override
        public void onCallItemAdd(JCCallItem jcCallItem) {

        }

        @Override
        public void onCallItemRemove(JCCallItem jcCallItem, int i, String s) {

        }

        @Override
        public void onCallItemUpdate(JCCallItem jcCallItem, JCCallItem.ChangeParam changeParam) {

        }

        @Override
        public void onMessageReceive(String s, String s1, JCCallItem jcCallItem) {

        }

        @Override
        public void onMissedCallItem(JCCallItem jcCallItem) {

        }
    });
}
``````

## Make a call

Call
[call()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#call-java.lang.String-boolean-java.lang.String-)
to initiate a video call, the parameters that need to be filled are:

- `userID` Fill in the user ID of the other party.

- `video` Select whether to call a video call, and true means to make
    a video call, while false means to make a voice call.

- [extraParam()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#call-java.lang.String-boolean-java.lang.String-)
    is a custom pass-through string, which can be obtained through the
    [getExtraParam()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#getExtraParam--)
    method.

``````java
// Initiate a voice call
mCall.call(userID, isVideo, extraParam);
``````

After the call is made, both the caller and the called party will
receive the callback
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallCallback.html#onCallItemAdd-com.juphoon.cloud.JCCallItem-)
for the new call, and the call status will change to
[STATE\_PENDING](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#STATE_PENDING)
at this time. You can perform logical operations by overriding
[onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallCallback.html#onCallItemAdd-com.juphoon.cloud.JCCallItem-):

``````java
// 1. Initiate a voice call
mCall.call(userID, false, null);

// 2. Override callback
@Override
public void onCallItemAdd(JCCallItem item) {
    // Business logic
    if (item.direction == JCCall.DIRECTION_IN) {
        // If you are the called party
        ...
    }else{
        // If you are the caller
        ...
    }
}
``````

## Answer a call

1. The called party receives the
    [onCallItemAdd()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallCallback.html#onCallItemAdd-com.juphoon.cloud.JCCallItem-)
    callback, and calls the
    [getVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html#getVideo--)
    in
    [JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCallItem.html)
    in the callback to obtain the video attribute to determine whether
    it is an incoming video call or a voice call, and then make
    corresponding processing:

    ``````java
    @Override
    public void onCallItemAdd(JCCallItem item) {
        // 1. If it is an incoming video call and it is ringing
        if (item.getDirection() == JCCall.DIRECTION_IN && !item.getVideo()) {
            // 2. Make corresponding processing, such as "ringing" on the interface
            ...
        }
    }
    ``````

2. Call
    [answer()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#answer-java.lang.String-boolean-java.lang.String-)
    to answer the call:

    ``````java
    mCall.answer(item, false);
    ``````

After the call is answered, the call status changes to
STATE\_CONNECTING.

::: tip

If you want to reject the call at this time, please call the interface
to hang up the call. In this case, after calling hang up, the call state
changes to STATE\_CANCELED.

:::

## Hang up a call

Both the calling party and the called party can hang up the call.

1. Call
    [getActiveCallItem()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#getActiveCallItem--)
    to get the currently active call object:

    ``````java
    mCall.getActiveCallItem();
    ``````

2. Call
    [term()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#term-com.juphoon.cloud.JCCallItem-int-java.lang.String-)
    to hang up the current active call:

    ``````java
    mCall.term(item, reason, description);
    ``````

Sample code:

``````java
// 1. Get the current active call
JCCallItem item = mCall.getActiveCallItem();
// 2. Hang up the current active call
mCall.term(item, JCCall.REASON_NONE, null);
``````
