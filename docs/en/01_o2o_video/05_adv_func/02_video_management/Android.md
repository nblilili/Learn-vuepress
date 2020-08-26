---
title: Video Management
---
# Video Management

## Video Data Collection Management

### Set the type of camera to turn on

Before video capture settings, you can get the camera list, current
camera, and default camera through the properties and methods in the
JCMediaDevice class, as follows:

``````java
/**
 * Get camera list
 *
 * @return camera list
 */
public abstract List<JCMediaDeviceCamera> getCameras();

/**
 * Current default camera
 *
 * @return current camera
 */
public abstract JCMediaDeviceCamera getCamera();

/**
 * Default camera
 */
public JCMediaDeviceCamera defaultCamera;
``````

Among them, the camera object (JCMediaDeviceCamera) has the following
properties:

``````java
/*Camera id*/
public String cameraId;
/*Camera name*/
public String cameraName;
/*Camera type*/
public @CameraType int cameraType;
``````

CameraType(The types of camera) are as follows:

``````java
/**
 * The camera is not obtained
 */
public static final int CAMERA_NONE = 0;
/**
 * Front camera
 */
public static final int CAMERA_FRONT = 1;
/**
 * Rear camera
 */
public static final int CAMERA_BACK = 2;
/**
 * Unknown  camera
 */
public static final int CAMERA_UNKNOWN = 3;
``````

After obtaining the camera list, you can call the following method to
obtain the camera type in the list:

``````java
/**
 * Get camera type
 *
 * @param cameraIndex camera queue index
 * @return camera type
 */
@CameraType
public abstract int getCameraType(int cameraIndex);
``````

If you want to switch the camera, call the following method to switch
the specified camera:

``````java
/**
 * Switch the camera
 * @param camera camera
 * @return return true/false
 */
public abstract boolean switchCamera(JCMediaDeviceCamera camera);
``````

Sample code:

``````java
JCMediaDeviceCamera item = new JCMediaDeviceCamera();
item.cameraType = JCMediaDevice.CAMERA_FRONT;
List<JCMediaDevice.JCMediaDeviceCamera> cameras = mediaDevice.getCameras();
mediaDevice.defaultCamera = cameras.get(0);
``````

### Set camera capture resolution

You can achieve different video resolutions by customizing camera
acquisition parameters, such as acquisition height, width, and frame
rate.

The camera collection property setting interface is as follows:

``````java
/**
 * Set camera collection property
 * @param width     collection width, default 640
 * @param height    collection height, default 360
 * @param frameRate acquisition frame rate, default 30
 */
public abstract void setCameraProperty(int width, int height, int frameRate);
``````

Sample code:

``````java
// Set camera collection properties
mediaDevice.setCameraProperty(640, 360, 30);
``````

### Set video window angle

Call the following interface to set the video window angle:

``````java
/**
 * Set video window angle
 *
 * @param angle  See @VideoAngle
 */
public abstract void setlVideoAngle(@VideoAngle int angle);
``````

Among them, VideoAngle has the following types:

``````java
/** automatic  */
public static final int VIDEO_ANGLE_AUTO = -1;
/** 0 degrees   */
public static final int VIDEO_ANGLE_0 = 0;
/** 90 degree   */
public static final int VIDEO_ANGLE_90 = 90;
/** 180 degree   */
public static final int VIDEO_ANGLE_180 = 180;
/** 270 degree   */
public static final int VIDEO_ANGLE_270 = 270;
``````

Sample code:

``````java
// Set camera collection properties
mediaDevice.setlVideoAngle(JCMediaDevice.VIDEO_ANGLE_0);
``````

### Set canvas rotation angle

If you want to set the angle of the canvas in Canvas, you need to call
the rotate interface in the JCMediaDeviceVideoCanvas class:

``````java
/**
 * The rotation angle must be a multiple of 90, and the angle represents the angle after rotation with the positive direction of the screen
 *
 * @param angle angle value
 */
public void rotate(int angle)
``````

Among them, the angle needs to be a multiple of 90. After calling this
interface, the local video image displayed on the local end and the
remote video image will rotate the same angle at the same time, but the
screen displayed on the opposite end will not be affected.

For example, if A is set to rotate 90 degrees, the A and B video images
displayed on the A side will rotate 90 degrees at the same time. The
video image on the B side will not change. As shown below:

![../../../../\_images/rotateset.png](../../../../_images/rotateset.png)

Sample code:

``````java
// Set Canvas rotation angle
JCMediaDeviceVideoCanvas canvas = mediaDevice.startCameraVideo(JCMediaDevice.RENDER_FULL_CONTENT));
canvas.rotate(90);
``````

-----

### Raw video data

In the process of video transmission, you can perform image processing
on each frame of video data to achieve beauty mode and other needs.
There are two processingcircumstances:

1. Process before pre-encoding and after video capture which affects
    local preview and peer receiving video.

2. Process after decoding and before rendering which affects the local
    video reception.

Details are as follows:

**Process after video capture and before pre-coding**

Refer to the following steps to implement the original video data
function in your project:

1. Register the video capture callback through
    ZmfVideo.captureAddCallback before initiating the business, and
    implement a callback function of type CaptureCallback in this
    function

2. After successful registration, the JC SDK will call back the
    corresponding parameters of the original video data collected
    through the callback function when each video frame is captured

3. After the user gets the video data, he/she performs parameter
    processing in the callback function according to the needs of the
    scene, and the processed data is returned to the JC SDK through the
    callback function.

Register the video capture callback at first:

``````java
/**
 * add capture data callback
 *
 * @param[in] callback      the callback user data
 *
 * @return                  >= 0 on succeed is handle, otherwise failed.
 */
ZmfVideo.captureAddCallback(CaptureCallback callback);
``````

Callback type description:

``````java
/**
 * The callback to handle video capture data
 *
 * @param[in] captureId        video capture unique name
 * @param[in] iFace            the capture Face @see ZmfVideoFaceType
 * @param[in] iImgAngle        the image rotated angle
 * @param[in] iCaptureOrient   the capturer fixed orient
 * @param[in,out] iWidthHeight the width and height of image,2 length first width second height
 * @param[in,out] data         the image data I420 buffer
 *
 * @return                     if process capturer data should return true, other false
 */
public interface CaptureCallback
{
     boolean onFrame(String captureId, int iFace, int iImgAngle, int iCaptureOrient, int[] iWidthHeight, ByteBuffer data);
}
``````

After registration, the video data collected in each frame can be
processed through the onFrame callback, and the corresponding video data
can be processed.

Sample code:

``````java
public boolean onFrame(String captureId, int iFace, int iImgAngle, int iCaptureOrient, int[] iWidthHeight, ByteBuffer data) {
    System.out.println("video acquisition data processing");
    return true;
}
public void call() {
    //Register callback
    ZmfVideo.captureAddCallback(onFrame);
    //Initiate the call
    call.call("peer number", true, "custom pass-through string");
}
``````

If you want to remove the callback, call the following interface:

``````java
/**
 * remove capture data callback
 *
 * @param[in]  handle       the handle
 *
 * @return                  0 on succeed, otherwise failed.
 */
ZmfVideo.captureRemoveCallback(int handle)
``````

Sample code:

``````java
public void endCall() {
    int handle = ZmfVideo.captureAddCallback(onFrame);
    //Remove callback
    ZmfVideo.captureRemoveCallback(handle);
    //Hang up the call
    call.term(item, JCCall.REASON_NONE, "hang up by yourself");
}
``````

**Process after decoding and before pre-rendering**

Refer to the following steps to implement the original video data
function in your project:

1. Register the video output callback through
    ZmfVideo.renderAddCallback before initiating the business, and
    implement a RenderCallback type callback function in this function

2. After successful registration, the JC SDK will call back the
    corresponding parameters of the original video data output through
    the callback function when each video frame is captured

3. After the user gets the video data, he/she will perform parameter
    processing in the callback function according to the needs of the
    scenario, and the processed data will be returned to the JC SDK
    through the callback function.

Register the video output callback at first:

``````java
/**
 * add render data callback
 *
 * @param[in] callback      the callback user data
 *
 * @return                  >= 0 on succeed is handle, otherwise failed.
 */
ZmfVideo.renderAddCallback(RenderCallback callback);
``````

Callback type description:

``````java
/**
 * The callback to receive video render data
 *
 * @param[in] renderId      video render unique name
 * @param[in] sourceType    video render source type @see ZmfVideoSourceType
 * @param[in] iAngle
 * @param[in] iMirror
 * @param[in] iWidth
 * @param[in] iHeight
 * @param[in] data          I420 render data
 *
 * @return                  if process render data should return true, other false
 *
 * @remarks
 *  if data == null or iWidth <=0 or iHeight <= 0, means the render will close,
 *  so should call onRenderRequestRemove.
 */
public interface RenderCallback
{
     boolean onFrame(String renderId, int sourceType, int iAngle, int iMirror, int iWidth, int iHeight, ByteBuffer data, int timeStampMs);
}
``````

After registration, the decoded video data of each frame can process the
corresponding video data through the onFrame callback.

Sample code:

``````java
public boolean onFrame(String renderId, int sourceType, int iAngle, int iMirror, int iWidth, int iHeight, ByteBuffer data, int timeStampMs) {
    System.out.println("decoded video data processing");
    return true;
}
public void call() {
    //Register callback
    ZmfVideo.renderAddCallback(onFrame);
    //Initiate the call
    call.call("peer number", true, "custom pass-through string");
}
``````

If you want to remove the callback, call the following interface:

``````java
/**
 * remove render data callback
 *
 * @param[in]  handle       the handle
 *
 * @return                  0 on succeed, otherwise failed.
 */
ZmfVideo.renderRemoveCallback(int handle)
``````

Sample code:

``````java
public void endCall() {
    int handle = ZmfVideo.renderAddCallback(onFrame);
    //Remove callback
    ZmfVideo.renderRemoveCallback(handle)
    //Hang up the call
    call.term(item, JCCall.REASON_NONE, "hang up by yourself");
}
``````

### Custom video capture and rendering

Custom video capture and rendering

For video capture/rendering devices that do not support the system’s
standard APIs, or if you want to use the already collected I420 or h264
data, you can start a separate capture/rendering thread and put the
capture/rendering data into the corresponding interface of Juphoon for
subsequent operations.

Refer to the following steps to implement the custom video source
function in your project:

1. Input the data collected/ready to be rendered by the external device
    to the JC SDK through the interface provided by the JC SDK for
    subsequent operations.

2. If you want to stop the data input collected/ready to be rendered by
    the external device, you can call the interface provided by the JC
    SDK to stop the data input.

After successful login and Zmf\_VideoInitialize is initialized
successfully, input the data to be collected/prepared for rendering
through the following interface:

``````java
/**
 * The video capture data entry to ZMF
 *
 * @param[in] captureId     unique name of the video capture               //Identify the external ID
 * @param[in] iCaptureFace the capture face, @see ZmfVideoFaceType         //The orientation of the external video, generally 0
 * @param[in] iImgAngle     the image rotated angle (CW)                   // The rotation angle required for the input external video to stand upright, clockwise is positive, the value range is 0, 90, 180, 270
 * @param[in] iCamAngle     the camera fixed orient                        //External camera fixed angle, same as iImgAngle, value range 0, 90, 180, 270
 * @param[in,out] iWidthHeight the image input size, at least align 4.
 *                             return the cropped height of data           //Image width and height; 0 is wide; 1 is high
 * @param[in] data          the image data buffer                          //Image buffer
 * @param[in] encoderName  the image ecoder type buffer                    //Image encoding type, H264 is h264, others are I420
 */
static public void onVideoCapture (String captureId, int iCaptureFace,
        int iImgAngle, int iCamAngle, int[] iWidthHeight, ByteBuffer data, String encoderName, int[] encoderCfg)
``````

Sample code:

``````java
// Initialize the video device
android.content.Context activity;
ZmfVideo.initialize(activity);
public void call() {
    //The input resolution of the image is 640*360 with I420 code, without additional rotation
    onVideoCapture("Test",0,0,0,640,360,buf,0);
    //Initiate a call
    call.call("peer number", true, "custom pass-through string");
}
``````

Collection stop interface:

``````java
/**
 * tell ZMF the video capture has stopped
 *
 * @param[in] captureId     unique name of the device
 */
void Zmf_OnVideoCaptureDidStop(const char *captureId);
``````

Sample code:

``````java
public void endCall() {
    //Stop video capture
    Zmf_OnVideoCaptureDidStop("Test");
    //Hang up the call
    call.term(item, JCCall.REASON_NONE, "hang up by yourself");
}
``````

If you want to use your own rendering method on the video rendering
side, call the following interface:

Video data rendering interface:

``````java
/**
 * The video render data entry to ZMF
 *
 * @param[in] renderId      unique name of the render source            //Identify the rendering ID
 * @param[in] sourceType    the source type, @see ZmfRenderSource       //Render source type, generally 0
 * @param[in] iAngle        the image rotated angle (CW)                //The angle required for rendering upright, generally 0, value range 0, 90, 180, 270
 * @param[in] iMirror       the camera fixed orient                     //Render mirror type, generally 0
 * @param[in] iWidth        the image width                             //Render image width
 * @param[in] iHeight       the image height                            //Render image height
 * @param[in] data          the image data buffer                       //Renderibg data buffer
 */
static public void onRender(String renderId, int sourceType, int iAngle, int iMirror,
                                            int iWidth, int iHeight, ByteBuffer data)
``````

Sample code:

``````java
// Initialize the video device
android.content.Context activity;
ZmfVideo.initialize(activity);
public void call() {
    //The input resolution of the image is 640*360 with I420 code, without additional rotation
    onRender("Test",0,0,0,640,360,buf,0);
    //Initiate the call
    call.call("peer number", true, "custom pass-through string");
}
``````

Render data stop interface:

``````java
//Zmf_OnVideoRender, renderId/sourceType is the same as above, and 0 is passed later.
ZmfVideo.onRender(String renderId, 0, 0, 0, 0, 0, 0, 0);
``````

Sample code:

``````java
public void endCall() {
    //Stop rendering
    ZmfVideo.onRender("Test", 0, 0, 0, 0, 0, 0, 0);
    //Stop rendering
    call.term(item, JCCall.REASON_NONE, "hang up by yourself");
}
``````

-----

## Video Rendering Management

### Create local and remote video images

- Local video rendering

Local video rendering obtains local video objects for UI interface
display by calling the startCameraVideo interface, which opens the
camera:

``````java
/**
 * Obtain video preview object, and you can get video for UI display through this object
 *
 * @param renderType rendering mode
 * @return              JCMediaDeviceVideoCanvas object
 * @see RenderType
 */
public abstract JCMediaDeviceVideoCanvas startCameraVideo(@RenderType int renderType);
``````

Among them, the rendering mode (JCMediaDeviceRender) has the following
three

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>public static final int RENDER_FULL_SCREEN = 0</p></td>
<td><p>Window covering</p></td>
</tr>
<tr class="even">
<td><p>public static final int RENDER_FULL_CONTENT = 1</p></td>
<td><p>The whole image is displayed, there will be black borders, but there will be no black borders when the window is the same as the image ratio</p></td>
</tr>
<tr class="odd">
<td><p>public static final int RENDER_FULL_AUTO = 2</p></td>
<td><p>Adaptive</p></td>
</tr>
</tbody>
</table>

- Remote video rendering

You can call the startVideo method to get the peer video object and
render:

``````java
/**
 * Obtain a video object, through which you can obtain video for UI display
 *
 * @param videoSource rendering identifier string, such as renderId in JCMediaChannelParticipant JCCallItem
 * @param renderType rendering mode
 * @return              JCMediaDeviceVideoCanvas object
 * @see RenderType
 */
public abstract JCMediaDeviceVideoCanvas startVideo(String videoSource, @RenderType int renderType);
``````

-----

Sample code:

``````java
// Open local video preview
JCMediaDeviceVideoCanvas localCanvas = mediaDevice.startCameraVideo(JCMediaDevice.RENDER_FULL_CONTENT);
viewGroup.addView(localCanvas.getVideoView(), 0);
// Remote video rendering; renderId comes from the call object; one-to-one is JCCallItem object, multi-party is JCMediaChannelParticipant object
JCMediaDeviceVideoCanvas remoteCanvas = mediaDevice.startVideo(renderId, JCMediaDevice.RENDER_FULL_CONTENT);
viewGroup.addView(remoteCanvas.getVideoView(), 0);
``````

-----

### Destroy local and remote video images

At the end of a video call or during a video call, if you want to
destroy the video image, you can call the following interface:

``````java
/**
 * Stop video
 *
 * @param canvas JCMediaDeviceVideoCanvas object, obtained by startVideo
 */
public abstract void stopVideo(JCMediaDeviceVideoCanvas canvas);
``````

Sample code:

``````java
JCMediaDeviceVideoCanvas localCanvas = mediaDevice.startCameraVideo(JCMediaDevice.RENDER_FULL_CONTENT);
JCMediaDeviceVideoCanvas remoteCanvas = mediaDevice.startVideo(renderId, JCMediaDevice.RENDER_FULL_CONTENT);
if (localCanvas != null) {
    mContentView.removeView(localCanvas.getVideoView());
    mediaDevice.stopVideo(localCanvas);
    localCanvas = null;

if (remoteCanvas != null) {
    mContentView.removeView(remoteCanvas.getVideoView());
    mediaDevice.stopVideo(remoteCanvas);
    remoteCanvas = null;
}
``````

-----

### Pause rendering

If you pause the rendering of the screen, you can call the following
interface:

``````java
/**
 * Pause video rendering
 */
public void pause();
``````

### Resume rendering

If you want to continue rendering the paused picture, you can call the
following interface:

``````java
/**
 * Continue video rendering
 */
public void resume();
``````

-----

## Video Equipment Management

Video device management mainly uses the methods in the JCMediaDevice
class, as follows:

### Get camera list

``````java
/**
 * Get camera list
 *
 * @return camera list
 */
public abstract List<JCMediaDeviceCamera> getCameras();
``````

Sample code:

``````java
Get camera list
List<JCMediaDeviceCamera> cameras = mediaDevice.getCameras();
``````

Get the current default camera
\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>:

``````java
/**
 * Current default camera
 *
 * @return current camera
 */
public abstract JCMediaDeviceCamera getCamera();
``````

Sample code:

``````java
Get camera list
JCMediaDeviceCamera camera = mediaDevice.getCamera();
``````

### Turn camera on and off

``````java
/**
 * Turn on the camera
 *
 * @return return true/false
 */
public abstract boolean startCamera();

/**
 * Turn off the camera
 *
 * @return return true/false
 */
public abstract boolean stopCamera();
``````

### Switch the camera

``````java
/**
 * Switch the camera,SDK will switch the camera according to the current camera type
 *
 * @return return true/false
 */
public abstract boolean switchCamera();
``````

Sample code:

``````java
// Turn on the camera
mediaDevice.startCamera();
// Turn off the camera
mediaDevice.stopCamera();
// Switch the camera
mediaDevice.switchCamera();
``````
