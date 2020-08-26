---
title: Realize live interactive video streaming
---
# Realize live interactive video streaming

This guide introduces how to implement live interactive video streaming.
The API call sequence of live interactive video streaming is shown in
the figure below:

![../../../../\_images/multivideoworkflow.png](../../../../_images/multivideoworkflow.png)

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

## Role setting

Before joining the channel, you must set the role first. The role
setting include the host and audiences. The role value can be customized
according to the
[JCMediaChannel.CustomRole](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#CUSTOM_ROLE_0)
enumeration value, for example:

``````java
//Customize the role of the host according to the CustomState enumeration value
int ROLE_BROASCASTER = JCMediaChannel.CUSTOM_ROLE_0;
//Customize the role of audiences according to the CustomState enumeration value
int ROLE_AUDIENCE = JCMediaChannel.CUSTOM_ROLE_1;
``````

Call
[setCustomRole()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#setCustomRole-int-com.juphoon.cloud.JCMediaChannelParticipant-)
to set your own role to enter the channel:

``````java
// Set the role; the value of participant (the second parameter) is null, which means that you set your own role
mediaChannel.setCustomRole(ROLE_BROASCASTER, null);
``````

## Join a channel

1. Call
    [enableUploadAudioStream()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#enableUploadAudioStream-boolean-)
    to enable the audio stream:

    ``````java
    // 1. Enable the audio stream
    mMediaDeviceChannel.enableUploadAudioStream(true);
    // 2. Turn on the video stream (not for voice)
    mMediaDeviceChannel.enableUploadVIdeoStream(true);
    ``````

2. To create and join a channel, you need to pass in `channelIdOrUri`
    and
    [JCMediaChannel.JoinParam](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.JoinParam.html):

      - `channelIdOrUri` refers to the channel ID or channel Uri.

      - In `JCMediaChannelJoinParam`, the `uriMode` parameter is set
        to true, which means the incoming channel Uri. When other
        parameters are set, it means the incoming channel ID. Users
        who pass in the same channel ID or the same channel Uri will
        enter the same Channel.

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

## Create remote video images

You usually need to see other users during a video call. After joining
the channel, call
[getParticipants()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#getParticipants--)
in
[JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html)
to get all the member objects in the channel.

Call
[startVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html#startVideo-int-int-)
in the
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html)
class to get the remote video image. The returned object is
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaDeviceVideoCanvas.html).

After calling the
[startVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html#startVideo-int-int-)
method, you also need to call the
[requestVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html#requestVideo-com.juphoon.cloud.JCMediaChannelParticipant-int-)
method in
[JCMediaChannel](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannel.html)
to request the video streams of other users in the channel:

``````java
// Access all member objects
List<JCMediaChannelParticipantparticipants = mMediaChannel.getSelfParticipant();
// Call the method of creating a video image
participants.get(0).startVideo(JCMediaDevice.RENDER_FULL_CONTENT, JCMediaChannel.PICTURESIZE_NONE);
// Request remote video stream (call large video window)
mMediaChannel.requestVideo(participants.get(0), PICTURESIZE_LARGE);
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

## Destroy local and remote video images

Call
[stopVideo()](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html#stopVideo--)
in the
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/android/com/juphoon/cloud/JCMediaChannelParticipant.html)
to destroy local and remote video images:

``````java
// The callback of leaving the ChannelReason
@Override
public void onLeave(@JCMediaChannel.MediaChannelReason int reason, String channelId) {
    ...
    // Destroy the video
    mParticipant.stopVideo();
}
``````

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
