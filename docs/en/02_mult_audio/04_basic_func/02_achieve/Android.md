---
title: Realize group voice calling
---
# Realize group voice calling

This guide introduces how to implement group voice calling. The API call
sequence of group voice calling is shown in the figure below:

![../../../../\_images/multiaudioworkflow.png](../../../../_images/multiaudioworkflow.png)

## Initialize

Call
[JCMediaDevice.create()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaDevice.html#create-com.juphoon.cloud.JCClient-com.juphoon.cloud.JCMediaDeviceCallback-)
and
[JCCall.create()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCCall.html#create-com.juphoon.cloud.JCClient-com.juphoon.cloud.JCMediaDevice-com.juphoon.cloud.JCCallCallback-)
to initialize Modules needed to implement group calling:

``````java
// Declare object
JCMediaDevice mMediaDevice;
JCMediaChannel mMediaChannel;

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
    // 2. Media channel lass
    mMediaChannel = JCMediaChannel.create(client, mediaDevice, new JCMediaChannelCallback() {
        @Override
        public void onMediaChannelStateChange(int i, int i1) {

        }
        @Override
        public void onMediaChannelPropertyChange(JCMediaChannel.PropChangeParam propChangeParam) {

        }
        @Override
        public void onJoin(boolean b, int i, String s) {

        }
        @Override
        public void onLeave(int i, String s) {

        }
        @Override
        public void onStop(boolean b, int i) {

        }
        @Override
        public void onQuery(int i, boolean b, int i1, JCMediaChannelQueryInfo jcMediaChannelQueryInfo) {

        }
        @Override
        public void onParticipantJoin(JCMediaChannelParticipant jcMediaChannelParticipant) {

        }
        @Override
        public void onParticipantLeft(JCMediaChannelParticipant jcMediaChannelParticipant) {

        }
        @Override
        public void onParticipantUpdate(JCMediaChannelParticipant jcMediaChannelParticipant, JCMediaChannelParticipant.ChangeParam changeParam) {

        }
        @Override
        public void onMessageReceive(String s, String s1, String s2) {

        }
        @Override
        public void onInviteSipUserResult(int i, boolean b, int i1) {

        }
        @Override
        public void onParticipantVolumeChange(JCMediaChannelParticipant jcMediaChannelParticipant) {

        }
    });
}
``````

## Join a channel

1. Call
    [enableUploadAudioStream()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#enableUploadAudioStream-boolean-)
    to enable audio streaming:

    ``````java
    // 1. Enable the audio stream
    mMediaDeviceChannel.enableUploadAudioStream(true);
    ``````

2. To create and join a channel, you need to pass in `channelIdOrUri`
    and
    [JCMediaChannel.JoinParam](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.JoinParam.html):

      - `channelIdOrUri` refers to the channel ID or channel Uri.

      - In `JCMediaChannelJoinParam`, when the `uriMode` parameter is
        set to true, it means the incoming channel Uri. When other
        parameters are set, it means the incoming channel ID. Users
        who pass in the same channel ID or the same channel Uri will
        enter the same Channel:

        ``````java
        mMediaChannel.join("222", null);
        ``````

3. The
    [onJoin()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onJoin-boolean-int-java.lang.String-)
    callback triggers after joining the channel:

    ``````java
    @Override
    public void onJoin(boolean result, @JCMediaChannel MediaChannelReason int reason, String channelId) {
        if (result) {
            // Join the channel successfully
        } else {
            // Join the channel failed
        }
    }
    ``````

## Leave a channel

Call the
[leave()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#leave--)
method to leave the current channel:

``````java
mMediaChannel.leave();
``````

In a group video call, you need to call
[stopVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html#stopVideo--)
to remove the video image when leaving the channel:

``````java
mParticipant.stopVideo();
``````

After leaving the channel, they receive the
[onLeave()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onLeave-int-java.lang.String-)
callback, and other members receive the
[onParticipantLeft()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onParticipantLeft-com.juphoon.cloud.JCMediaChannelParticipant-)
callback at the same time.

## Destroy a channel

If you want to destroy a channel, you can call the following interface,
and all members will be quit:

``````java
// End a channel
mMediaChannel.stop();
``````

In a group video call, you need to call
[stopVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html#stopVideo--)
to remove the video image when leaving the channel:

``````java
mParticipant.stopVideo();
``````

After the channel is stopped, the member who initiated the termination
receives the
[onStop()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onStop-boolean-int-)
callback, and other members also receive the
[onLeave()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelCallback.html#onLeave-int-java.lang.String-)
callback. Please refer to
[MediaChannelReason](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#REASON_ALREADY_JOINED)
for the enumeration value of the reason for failure:

``````java
@Override
public void onStop(boolean result, @JCMediaChannel.MediaChannelReason int reason) {
    //Destroy the video, canvas is the instance of JCMediaDeviceVideoCanvas object
    mParticipant.stopVideo();
    canvas = null;
}
``````
