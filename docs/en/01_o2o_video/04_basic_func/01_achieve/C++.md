---
title: Realize One-to-One Video Calling
---
# Realize One-to-One Video Calling

This guide introduces how to achieve one-to-one video calling. API call
sequence for one-to-one call is as shown below:

![../../../../\_images/1-1workflowios.png](../../../../_images/1-1workflowios.png)

## Initialize

Extend the
[JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html)
object and
[JCCallCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html)
object, and implement the pure virtual functions in these two objects:

``````cpp
class JCManager : public JCMediaDeviceCallback, public JCCallCallback
{
public:
  //This callback triggers when the callItem is added
  virtual void onCallItemAdd(JCCallItem* item);
  //This callback triggers when the callItem is removed
  virtual void onCallItemRemove(JCCallItem* item, JCCallReason reason, const char* description);
  //This callback triggers when the callItem‘s status is updated
  virtual void onCallItemUpdate(JCCallItem* item, JCCallItemChangeParam changeParam);
  //This callback triggers when messages are received
  virtual void onMessageReceive(const char* type, const char* content, JCCallItem* item);
  //This callback triggers when get missed calls
  virtual void onMissedCallItem(JCCallItem* item);
  //This callback triggers when the camera is switched
  virtual void onCameraUpdate();

public:
    //JCMediaDevice object
    JCMediaDevice* mediaDevice;
    //JCCall object
    JCCall* call;
};
``````

::: tip

The object in the callback can only be used in the callback and cannot
be saved. The upper layer can obtain the call object through the
corresponding method.

:::

Call
[createJCMediaDevice](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_device_8h.html#a96a10766264f3c12af531b70cb9c9749)
and
[createJCCall](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_call_8h.html#a29320972a659ce8eaf4994576103a62c)
to initialize the modules needed for one-to-one calling:

``````cpp
bool JCManager::initialize()
{
  //1. Media class
  mediaDevice = createJCMediaDevice(client, this);
  //2. Call class
  call = createJCCall(client, mediaDevice, this);
  return true;
}
``````

Among them:

- This in the JCMediaDevice create method is a derived class of
    [JCMediaDeviceCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html)
    , which is used to notify the upper layer of media device-related
    events. Therefore, you need to create a derived class of
    JCMediaDeviceCallback, and then implement the pure virtual function
    of JCMediaDeviceCallback in the derived class.

- This in the JCCall create method is a derived class of
    [JCCallCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html),
    which is used to notify call-related events to the upper layer.
    Therefore, you need to create a derived class of JCCallback, and
    then implement the pure virtual function of JCCallCallback in the
    derived class.

## Make a call

To call
[call](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a7b2d614431cb23e82ea18b77deb50549)
to initiate a video call, the parameters to be filled are:

- `userID` Fill in the user ID of the other party.

- `video` Select whether to call a video call, and true means to make
    a video call, while false means to make a voice call.

- `extraParam` is a custom pass-through string, which can be obtained
    through the extraParam property in the JCCallItem object.

``````cpp
// Initiate a video call
void JCSampleDlg::OnBnClickedButtonVideocall()
{
  JCManager::shared()->call->call("userID", true, "custom pass-through string");
}
``````

After making a call, both the caller and the called party will receive
the callback
[onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a2188f777767ca071c145d4a50687ce63)
for the new call, and the call state will change to JCCallStatePending.
You can implement the
[onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a2188f777767ca071c145d4a50687ce63)
method in the upper layer and process related logic:

``````cpp
// Receive a new call callback
void JCManager::onCallItemAdd(JCCallItem* item) {
    // Business logic
    if (item->direction == JCCallDirectionIn) {
        // If it is an incoming call
        ...
    } else {
        // If it is an outgoing call
        ...
    }
}
``````

::: tip

The object in the callback can only be used in the callback and cannot
be saved. The upper layer can obtain the call object through the
corresponding method. If the caller wants to cancel the call, he/she can
go directly to the hang up part. After calling the hang up interface,
the call status becomes the JCCallStateCancel.

:::

## Create local and remote video images

After initiating a call, call the
[startSelfVideo](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html#a16fadea791640b31f32c6075f9233578)
in the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html)
class to create a local video image. This method returns a
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html)
object. This object is used to render the video to the canvas and manage
the rendering method. (Calling this method will open the camera):

``````cpp
void JCManager::onCallItemAdd(JCCallItem* item) {
    JCMediaDeviceVideoCanvas* mCallLocalCanvas;
    if (mCallLocalCanvas == NULL && item->getUploadVideoStreamSelf())
                {
        // Create local and remote video images
        mCallLocalCanvas = item->startSelfVideo((void*)mWndCallLocalVideo.m_hWnd, (JCMediaDeviceRenderMode)JCMediaDeviceRenderModeFullContent);
    }
}
``````

## Answer the call

1. After the caller initiates the call successfully, the called party
    will receive the
    [onCallItemAdd](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a2188f777767ca071c145d4a50687ce63)
    callback. At this time, the getVideo() method and getDirection()
    method in the
    [JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html)
    object in the callback can be used to determine whether it is a
    video call or a voice call. Deal with it accordingly:

    ``````cpp
    void JCManager::onCallItemAdd(JCCallItem* item) {
        // 1. If it is a video call and is ringing
        if (item->getDirection() == JCCallDirectionIn && item->getState() == JCCallStatePending) {
            // 2. Make corresponding processing, such as "ringing" on the interface
             ...
        }
    }
    ``````

2. Call
    [answer](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a8e44cef3051dba33a600042c7a5bf987)
    to answer the call, **the video call can be answered by voice or
    video**:

    ``````cpp
    // Get active calls
    JCCallItem* item = JCManager::shared()->call->getActiveCallItem();
    // Answer the call
    JCManager::shared()->call->answer(item, item->getVideo());
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
[startOtherVideo](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html#ac3ccc64bbb7ebebaa3ca3219b21d4ce9)
in the
[JCCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html)
class to create a remote video streaming. This method returns a
[JCMediaDeviceVideoCanvas](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html)
object, which is used to render the video to the canvas and manage the
rendering method:

``````cpp
void JCManager::onCallItemUpdate(JCCallItem* item, JCCallItemChangeParam changeParam) {
    JCMediaDeviceVideoCanvas *mCallRemoteCanvas;
    // If the peer is uploading a video streaming (uploadVideoStreamOther)
    if (mCallRemoteCanvas == NULL && item->getUploadVideoStreamOther())
    {
      // Remote video rendering
      mCallRemoteCanvas = item->startOtherVideo(mWndCallRemoteVideo.m_hWnd, (JCMediaDeviceRenderMode)JCMediaDeviceRenderModeFullContent);
    }
}
``````

## Hang up the call

Both the calling party and the called party can hang up the call.

1. First call
    [getActiveCallItem](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a4b5e8afc43bd12f877e37a97fec2ff7a)
    to get the currently active call object;

2. After obtaining the current active call object, call
    [term](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a168fd884512bfd5451ffa5fac83c598b)
    to hang up the current active call:

    ``````cpp
    void JCSampleDlg::OnBnClickedButtonTermcall()
    {
      // 1. Get the current active call
      JCCallItem* item = JCManager::shared()->call->getActiveCallItem();
      if (item != NULL)
      {
        // 2. Hang up the current active call
        JCManager::shared()->call->term(item, JCCallReasonNone, "term");
      }
    }
    ``````

## Destroy local and remote video images

After the call is hung up, the onCallItemRemove callback in
[JCCallCallback](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html)
will be triggered, and the call state will change to JCCallStateOk. At
this time, you need to call the
[stopSelfVideo](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html#a8d6f702c5e477f60df2e671e9392ce76)
and
[stopOtherVideo](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html#a1c58b54ed0f4aac1bef8383ede0f7651)
methods to destroy the local and remote video images:

``````cpp
void JCManager::onCallItemRemove(JCCallItem* item, JCCallReason reason, const char* description) { //This callback triggers when the call is removed callback
  // Local video destruction
  if (mCallLocalCanvas != NULL && !item->getUploadVideoStreamSelf())
  {
    item->stopSelfVideo();
    mCallLocalCanvas = NULL;
    mWndCallLocalVideo.Invalidate();
  }
  // Remote video destruction
  if (mCallRemoteCanvas != NULL && !item->getUploadVideoStreamOther())
  {
    item->stopOtherVideo();
    mCallRemoteCanvas = NULL;
    mWndCallRemoteVideo.Invalidate();
  }
}
``````

Now, you have completed the basic function of one-to-one video calling.
