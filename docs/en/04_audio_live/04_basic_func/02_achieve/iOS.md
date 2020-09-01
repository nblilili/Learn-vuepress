---
title: Realize Live Interactive Streaming
---
# Realize Live Interactive Streaming

This guide introduces how to implement live interactive streaming. The
API call sequence of live interactive streaming is shown in the figure
below:

![../../../../\_images/multivideoworkflow.png](../../../../_images/multivideoworkflow.png)

## Initialize

Call [JCMediaDevice
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:)
and [JCCall
create](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/create:mediaDevice:callback:)
to initialize modules needed to implement group calls:

``````objectivec
//Initialize
-(bool)initialize {
   //1. Media class
   JCMediaDevice *mediaDevice = [JCMediaDevice create:client callback:self];
   //2. Media channel lass
   JCMediaChannel *mediaChannel = [JCMediaChannel create:client mediaDevice:mediaDevice callback:self];
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

- The callback in the JCMediaChannel create method is the proxy object
    of the
    [JCMediaChannelCallback](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html)
    protocol, which is used to notify the relevant events in the channel
    to the upper layer. Therefore, you need to specify the proxy object
    of the callback first, and then implement the JCMediaChannelCallback
    method in the proxy object.

The main methods in JCMediaChannel are as follows:

``````objectivec
//The callback of MediaChannel state change
-(void)onMediaChannelStateChange:(JCMediaChannelState)state oldState:(JCMediaChannelState)oldState;

//The callback of joining ChannelReason
-(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId;

//The callback of leaving the ChannelReason
-(void)onLeave:(JCMediaChannelReason)reason channelId:(NSString*)channelId;

//The callback of channel Stop result
-(void)onStop:(bool)result reason:(JCMediaChannelReason)reason;

//The callback of ParticipantJoin
-(void)onParticipantJoin:(JCMediaChannelParticipant*)participant;

//The callback of ParticipantLeft
-(void)onParticipantLeft:(JCMediaChannelParticipant*)participant;

//The callback of ParticipantUpdate
-(void)onParticipantUpdate:(JCMediaChannelParticipant*)participant participantChangeParam:(JCMediaChannelParticipantChangeParam *)participantChangeParam;

//The volume change of participants
-(void)onParticipantVolumeChange:(JCMediaChannelParticipant*)participant;
``````

## Role setting

There are two roles for users in live streaming: the host and audience.
The role setting must be done before joining the channel. The host can
upload local audio and video streams, and the audience can only see the
image of the host and hear the voice of the host.

The role value can be customized according to the
[JCMediaChannelCustomRole](https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCMediaChannelCustomRole.html)
enumeration value, such as:

``````objectivec
//Customize the role of the host according to the CustomState enumeration value
JCMediaChannelCustomRole ROLE_BROASCASTER = JCMediaChannelCustomRole0;
//Customize the role of audiences according to the CustomState enumeration value
JCMediaChannelCustomRole ROLE_AUDIENCE = JCMediaChannelCustomRole1;
``````

Call
[setCustomRole](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/setCustomRole:participant:)
to set your own role to enter the channel:

``````objectivec
// Set the role, and the value of participant (the second parameter) is nil, which means setting your own role
[mediaChannel setCustomRole:ROLE_BROASCASTER participant:nil];
``````

## Join a channel

Before joining the channel, you need to control the upload of audio and
video streams according to the role of the member.In the live interactie
voice streaming, the host only needs to upload the local audio stream,
and the audience does not.

1. Enable audio streaming to call
    [enableUploadAudioStream](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadAudioStream:)
    to enable audio streaming:

    ``````objectivec
    -(void)joinRoom:(JCMediaChannelCustomRole)customRole {
        //Upload local audio and video streams according to roles
        [mediaChannel enableUploadVideoStream:false];
        [mediaChannel enableUploadAudioStream:customRole == ROLE_BROASCASTER];
        [mediaChannel enableAudioOutput:true];
    }
    ``````

2. After the role is set, call the
    [join](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/join:joinParam:)
    method to create and join a channel. You need to pass in the
    following parameters in the method:

      - channelIdOrUri: Channel ID or channel Uri. When uriMode in
        param is set to true, it means channel Uri, and others mean
        channel ID. Users with the same channel ID or Uri will enter
        the same channel.

      - joinParam: Join parameters, if not, fill in nil. See
        [JCMediaChannelJoinParam](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannelJoinParam.html)
        object for details.

    ``````objectivec
    [mediaChannel join:@"222" joinParam:nil];
    ``````

3. The
    [onJoin](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onJoin:reason:channelId:)
    callback triggers after joining the channel:

    ``````objectivec
    // The callback of joining ChannelReason
    -(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId
    {
        if (result) {
          // Join successful
        } else {
          // Join failed
        }
    }
    ``````

## Leave a channel

Call the
[leave](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/leave)
method to leave the current channel:

``````objectivec
[mediaChannel leave];
``````

After leaving the channel, they receive the
[onLeave](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:)
callback, and other members receive the
[onParticipantLeft](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onParticipantLeft:)
callback at the same time.

## Destroy a channel

If you want to destroy a channel, you can call the following interface,
and all members will be quit.

``````objectivec
// End a channel
[mediaChannel stop];
``````

After the channel is stopped, the member that initiated the termination
receives the
[onStop](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onStop:reason:)
callback, and other members receive the
[onLeave](https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:)
callback at the same time. Please refer to
[JCMediaChannelReason](https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCMediaChannelReason.html)
for the enumeration value of the reason for failure.

After dstorying the channel, you also need to call
[stopVideo](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/stopVideo:)
in the
[JCMediaChannelParticipant](https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html)
to destroy local and remote video images.
