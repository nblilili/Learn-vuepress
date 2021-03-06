---
title: live interactive video streaming
---
# live interactive video streaming

This guide introduces how to implement live interactive video streaming.
The API call sequence of live interactive vieo streaming is shown in the
figure below:

![../../../../\_images_en/multivideoworkflow.png](../../../../_images_en/multivideoworkflow.png)

## Initialize

Extend the
[JCMediaChannelCallback](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html)
object and
[JCMediaDeviceCallback](/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html)
object, and implement the pure virtual functions in these two objects.

``````cpp
class JCManager : public JCMediaDeviceCallback, public JCMediaChannelCallback
{
public:

    //The callback of MediaChannel state change
    virtual void onMediaChannelStateChange(JCMediaChannelState state, JCMediaChannelState oldState);
    //The callback of channel property change
    virtual void onMediaChannelPropertyChange(JCMediaChannelPropChangeParam propChangeParam);
    //The callback of joining ChannelReason
    virtual void onJoin(bool result, JCMediaChannelReason reason, const char* channelId);
    //The callback of leaving ChannelReason
    virtual void onLeave(JCMediaChannelReason reason, const char* channelId);
    //The callback of channel Stop result
    virtual void onStop(bool result, JCMediaChannelReason reason);
    //The callback of channel Query result
    virtual void onQuery(int operationId, bool result, JCMediaChannelReason reason, JCMediaChannelQueryInfo* queryInfo);
    //The callback of ParticipantJoin
    virtual void onParticipantJoin(JCMediaChannelParticipant* participant);
    //The callback of ParticipantLeft
    virtual void onParticipantLeft(JCMediaChannelParticipant* participant);
    //The callback of ParticipantUpdate
    virtual void onParticipantUpdate(JCMediaChannelParticipant* participant, JCMediaChannelParticipant::ChangeParam changeParam);
    //This callback triggers when messages are received in the channel
    virtual void onMessageReceive(const char* type, const char* content, const char* fromUserId);
    //The callback of InviteSipUserResult
    virtual void onInviteSipUserResult(int operationId, bool result, JCMediaChannelReason reason);
    //The volume change of Participants
    virtual void onParticipantVolumeChange(JCMediaChannelParticipant* participant);

public:
    //mediaDevice object
    JCMediaDevice* mediaDevice;
    //mediaChannel object
    JCMediaChannel* mediaChannel;
};
``````

Call
[createJCMediaDevice](/portal/reference/V2.1/windows/C++/html/_j_c_media_device_8h.html#a96a10766264f3c12af531b70cb9c9749)
and
[createJCCall](/portal/reference/V2.1/windows/C++/html/_j_c_call_8h.html#a29320972a659ce8eaf4994576103a62c)
to initialize the modules needed for group video calls:

``````cpp
//Initialize
bool JCManager::initialize()
{
    //1. Media class
    mediaDevice = createJCMediaDevice(client, this);
    //1. mediaChannel class
    mediaChannel = createJCMediaChannel(client, mediaDevice, this);
    return true;
}
``````

Among them:

- This in the JCMediaDevice create method is a derived class of
    [JCMediaDeviceCallback](/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html)
    , which is used to notify the upper layer of media device-related
    events. Therefore, you need to create a derived class of
    JCMediaDeviceCallback, and then implement the pure virtual function
    of JCMediaDeviceCallback in the derived class.

- This in the JCMediaChannel create method is a derived class of
    [JCMediaChannelCallback](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html)
    , which is used to notify related events in the channel to the upper
    layer. Therefore, you need to create a derived class of
    JCMediaChannelCallback, and then implement the pure virtual function
    of JCMediaChannelCallback in the derived class.

::: tip

The object in the callback can only be used in the callback and cannot
be saved. The upper layer can obtain the call object through the
corresponding method.

:::

## Role setting

There are two roles for users in live streaming: the host and audience.
The audience can only see the image of the host and hear the voice of
the host.

Before joining the channel, you must set the role at first. The host
needs to upload the local audio and video streams, but the audience does
not.

The role value can be customized according to the
[JCMediaChannelCustomRole](/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_constants_8h.html#aa5042852bc565ec1e596a7c286ad3c64)
enumeration value, such as:

``````cpp
//Customize the role of the host according to the CustomState enumeration value
JCMediaChannelCustomRole ROLE_BROASCASTER = JCMediaChannelCustomRole0;
//Customize the role of audiences according to the CustomState enumeration value
JCMediaChannelCustomRole ROLE_AUDIENCE = JCMediaChannelCustomRole1;
``````

Call
[setCustomRole](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a7b6b97e8193f2cf7f2819ec3ca49b813)
to set your own role to enter the channel:

``````cpp
// Set the role; the value of participant (the second parameter) is null, which means that you set your own role
JCManager::shared()->mediaChannel->setCustomRole(ROLE_BROASCASTER, NULL);
``````

::: tip

After joining a channel, you can also call the setCustomRole method if
you want to switch user roles.

:::

## Join a channel

Before joining a channel, you need to control the upload of audio and
video streams according to the role of the member.The host needs to
upload the local audio and video streams, but the audience does not.

1. Call
    [enableUploadAudioStream](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a2b08d87b38fe2fd7a394e2786241cc4c)
    to enable the audio stream, and call
    [enableUploadVideoStream](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a2b74210bdc3f25810b901542844aee33)
    to enable the video stream:

    ``````cpp
    //Upload local audio and video streams according to roles
    JCManager::shared()->mediaChannel->enableUploadAudioStream(customRole == ROLE_BROASCASTER);
    JCManager::shared()->mediaChannel->enableUploadVideoStream(customRole == ROLE_BROASCASTER);
    ``````

::: tip

- These two interfaces can be called before joining a channel, or
    after joining a channel.

- If called before joining a channel, **it will only pre-open or close
    the “upload audio and video stream” symbol, but will not send
    data.**. After joining a channel, the server will determine whether
    to upload audio and video data according to the value passed in the
    parameter.

- If the value passed in the enableUploadVideoStream method is false
    before joining a channel, the voice call mode will be automatically
    turned on after joining a channel.

- In addition, call the enableUploadVideoStream method to send local
    video stream data according to whether the camera has been opened.

- After the interface is called, when joining a channel, other members
    in the channel will receive the status change callback
    (onParticipantUpdate) of the member “whether to upload audio and
    video”.

:::

2. After the role is set, call the
    [join](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#acfdb1da52955cf8b01d95527eb28890b)
    method to create and join a channel. You need to pass in the
    following parameters in the method:

      - channelIdOrUri: Channel ID or channel Uri. When uriMode in
        param is set to true, it means channel Uri, and others mean
        channel ID. Users with the same channel ID or Uri will enter
        the same channel.

      - joinParam: Join parameters, if not, fill in NULL. See
        [JCMediaChannelJoinParam](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_join_param.html)
        object for details.

    ``````cpp
    // Join a channel
    JCManager::shared()->mediaChannel->join("channel ID", NULL);
    ``````

3. The
    [onJoin](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a430bd78b28e189ee3c9564ddb7db213d)
    callback triggers after joining the channel:

    ``````cpp
    // The callback of joining ChannelReason
    void JCManager::onJoin(bool result, JCMediaChannelReason reason, const char* channelId)
    {
        if (result) {
        //the logic of successful joining in
        ...
        } else {
        //the logic of failed joining in
        ...
        }
    }
    ``````

## Create local video images

1. After joining the channel, call the
    [getSelfParticipant](http://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#afeb3c17dc9d0827fe27fa189cd0a5c9e)
    method in
    [JCMediaChannel](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html)
    to get the channel object in the channel. This method returns the
    [JCMediaChannelParticipant](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
    object:

    ``````cpp
    // 1. Access the memeber objects in the channel
    JCMediaChannelParticipant* participant = JCManager::shared()->mediaChannel->getSelfParticipant();
    ``````

2. Call the
    [startVideo](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a238fccab8cc09e1ef843a43aad4ffac9)
    method in the
    [JCMediaChannelParticipant](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
    class to open the local video preview. This method will return a
    [JCMediaDeviceVideoCanvas](/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html)
    object, which is used to render the video to the canvas and manage
    the rendering method. (Call this Method will turn on the camera):

    ``````cpp
    // 2. Open local video preview
    JCMediaDeviceVideoCanvas* mConfSelfCanvas;
    if (mediaChannel->getUploadLocalVideo() && mConfSelfCanvas == NULL)
                {
                        if (strlen(JCManager::shared()->mediaDevice->getCamera().cameraId) 0)
                        {
                //Create local and remote video images
                                mConfSelfCanvas = mediaChannel->getSelfParticipant()->startVideo(
                                                mWndConfSelfVideo.m_hWnd,
                                                JCMediaDeviceRenderModeFullContent,
                                                JCMediaChannelPictureSizeLarge);

                        }
                }
    ``````

## Create remote video images

You usually need to see other users during a video call. Obtain all
member objects in the channel through the participants property in
[JCMediaChannel](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html)
.

Call the
[startVideo](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a238fccab8cc09e1ef843a43aad4ffac9)
method in the
[JCMediaChannelParticipant](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
class to set the remote video. Calling this method will return a
[JCMediaDeviceVideoCanvas](/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html)
object, which is used to render the video to the canvas and manage the
rendering method:

``````cpp
//Obtain all member objects in the channel
JCMediaDeviceVideoCanvas* mConfOtherCanvas;
std::list<JCMediaChannelParticipant*>* participants = NULL;
JCMediaChannelParticipant* other = NULL;
participants = mediaChannel->getParticipants();
for (JCMediaChannelParticipant* participant : *participants) {
    if (!participant->isSelf())
    {
        other = participant;
        break;
    }
}
if (other != NULL && other->isVideo())
{
    if (mConfOtherCanvas == NULL)
    {
        //Create remote image
        mConfOtherCanvas = participant->startVideo(
                        mWndConfOtherVideo.m_hWnd,
                        JCMediaDeviceRenderModeFullContent,
                        JCMediaChannelPictureSizeLarge);
    }
}
``````

## Leave a channel

Call the
[leave](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a93c19137044fec1568f73f1f6dbfee84)
method to leave the current channel:

``````cpp
JCManager::shared()->mediaChannel->leave();
``````

After leaving the channel, they receive the
[onLeave](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71)
callback, and other members receive the
[onParticipantLeft](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a5888058878f3aaa382b3ede94228a6e8)
callback at the same time:

``````cpp
// The callback of leaving the channel
void JCManager::onLeave(JCMediaChannelReason reason, const char* channelId);
{
    //The logic of leaving a channel
}
``````

## Destroy local and remote video images

After the video is hung up, call
[stopVideo](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a5076a035465e7f5c307679a6bf60fb8c)
to destroy local and remote video images in
[JCMediaChannelParticipant](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html):

``````cpp
if (!mediaChannel->getUploadLocalVideo() && mConfSelfCanvas != NULL)
{
    //Destroy the local video image
    mediaChannel->getSelfParticipant()->stopVideo();
    mConfSelfCanvas = NULL;
    mWndConfSelfVideo.Invalidate();
}
if (mConfOtherCanvas != NULL)
{
    for (JCMediaChannelParticipant* participant : *participants)
    {
        if (!participant->isSelf())
        {
            //Destroy the local video image
            participant->stopVideo();
        }
    }
    mConfOtherCanvas = NULL;
    mWndConfOtherVideo.Invalidate();
}
``````

## Destroy a channel

If you want to destroy a channel, you can call the following interface,
and all members will be quit:

``````cpp
// End a channel
JCManager::shared()->mediaChannel->stop();
``````

After the channel is stopped, the member that initiated the termination
receives the
[onStop](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a61a1d5a81563d34f80e70541a114a74a)
callback, and other members receive the
[onLeave](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71)
callback at the same time. Please refer to
[JCMediaChannelReason](/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_constants_8h.html#a24a2154e4bb2db63c75b31cd2b021fc3)
for the enumeration value of the reason for failure.

``````cpp
void JCManager::onStop(bool result, JCMediaChannelReason reason)
{
    //The processing logic of ending a channel
}
``````

After stopping the channel, you also need to call
[stopVideo](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a5076a035465e7f5c307679a6bf60fb8c)
in the
[JCMediaChannelParticipant](/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html)
to destroy local and remote video images.
