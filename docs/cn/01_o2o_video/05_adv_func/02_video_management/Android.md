---
title: 视频管理
---
# 视频管理

## 视频数据采集管理

### 设置要开启的摄像头类型

视频采集设置前，可以通过 JCMediaDevice 类中的属性和方法获取摄像头列表、当前摄像头以及默认摄像头，具体如下：

``````java
/**
 * 获取摄像头列表
 *
 * @return 摄像头列表
 */
public abstract List<JCMediaDeviceCamera> getCameras();

/**
 * 当前默认的摄像头
 *
 * @return 当前摄像头
 */
public abstract JCMediaDeviceCamera getCamera();

/**
 * 默认摄像头
 */
public JCMediaDeviceCamera defaultCamera;
``````

其中，摄像头对象（JCMediaDeviceCamera）有以下属性

``````java
/*摄像头id*/
public String cameraId;
/*摄像头名字*/
public String cameraName;
/*摄像头类型*/
public @CameraType int cameraType;
``````

CameraType（摄像头类型）有以下几种

``````java
/**
 * 未获取到摄像头
 */
public static final int CAMERA_NONE = 0;
/**
 * 前置摄像头
 */
public static final int CAMERA_FRONT = 1;
/**
 * 后置摄像头
 */
public static final int CAMERA_BACK = 2;
/**
 * 未知摄像头
 */
public static final int CAMERA_UNKNOWN = 3;
``````

获取摄像头列表后，可以调用下面的方法获得列表中的摄像头类型

``````java
/**
 * 获得摄像头类型
 *
 * @param cameraIndex 摄像头队列索引
 * @return 摄像头类型
 */
@CameraType
public abstract int getCameraType(int cameraIndex);
``````

如果想切换摄像头，调用下面的方法切换指定的摄像头

``````java
/**
 * 切换摄像头
 * @param camera 摄像头
 * @return 成功返回 true，失败返回 false
 */
public abstract boolean switchCamera(JCMediaDeviceCamera camera);
``````

示例代码

``````java
JCMediaDeviceCamera item = new JCMediaDeviceCamera();
item.cameraType = JCMediaDevice.CAMERA_FRONT;
List<JCMediaDevice.JCMediaDeviceCamera> cameras = mediaDevice.getCameras();
mediaDevice.defaultCamera = cameras.get(0);
``````

### 设置摄像头采集分辨率

您可以通过自定义摄像头采集参数实现不同的视频分辨率，如采集的高度、宽度和帧速率。

摄像头采集属性设置接口如下：

``````java
/**
 * 设置摄像头采集属性
 * @param width     采集宽度，默认640
 * @param height    采集高度，默认360
 * @param frameRate 采集帧速率，默认30
 */
public abstract void setCameraProperty(int width, int height, int frameRate);
``````

示例代码

``````java
// 设置摄像头采集属性
mediaDevice.setCameraProperty(640, 360, 30);
``````


### 原始视频数据

在视频传输过程中，可以对每帧视频数据进行图像处理，以实现美颜等需求。有以下两种处理时机：

1、在视频采集后编码前处理；会影响本地预览和对端接收视频。

2、在解码后渲染前处理；影响本地接收视频。

具体如下：

**视频采集后，编码前处理**

参考如下步骤，在你的项目中实现原始视频数据功能：

1.发起业务前通过 ZmfVideo.captureAddCallback 注册视频采集回调，并在该函数中实现一个
CaptureCallback 类型的回调函数

2.成功注册后，JC SDK 会在捕捉到每个视频帧时通过回调函数回调采集到的原始视频数据相对应参数

3.用户拿到视频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给 JC SDK。

首先注册视频采集回调

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

回调类型说明

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

注册后，每帧采集的视频数据通过 onFrame 回调，可以处理对应的视频数据。

示例代码

``````java
public boolean onFrame(String captureId, int iFace, int iImgAngle, int iCaptureOrient, int[] iWidthHeight, ByteBuffer data) {
    System.out.println("视频采集数据处理");
    return true;
}
public void call() {
    //注册回调
    ZmfVideo.captureAddCallback(onFrame);
    //发起呼叫
    call.call("peer number", true, "自定义透传字符串");
}
``````

如果想移除回调，调用下面的接口

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

示例代码

``````java
public void endCall() {
    int handle = ZmfVideo.captureAddCallback(onFrame);
    //移除回调
    ZmfVideo.captureRemoveCallback(handle);
    //挂断通话
    call.term(item, JCCall.REASON_NONE, "自己挂断");
}
``````

**解码后，渲染前处理**

参考如下步骤，在你的项目中实现原始视频数据功能：

1.发起业务前通过 ZmfVideo.renderAddCallback 注册视频输出回调，并在该函数中实现一个 RenderCallback
类型的回调函数

2.成功注册后，JC SDK 会在捕捉到每个视频帧时通过回调函数回调输出的原始视频数据相对应参数

3.用户拿到视频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给JC SDK。

首先注册视频输出回调

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

回调类型说明

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

注册后，每帧解码后的视频数据通过onFrame回调，可以处理对应的视频数据。

示例代码

``````java
public boolean onFrame(String renderId, int sourceType, int iAngle, int iMirror, int iWidth, int iHeight, ByteBuffer data, int timeStampMs) {
    System.out.println("解码后的视频数据处理");
    return true;
}
public void call() {
    //注册回调
    ZmfVideo.renderAddCallback(onFrame);
    //发起呼叫
    call.call("peer number", true, "自定义透传字符串");
}
``````

如果想移除回调，调用下面的接口

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

示例代码

``````java
public void endCall() {
    int handle = ZmfVideo.renderAddCallback(onFrame);
    //移除回调
    ZmfVideo.renderRemoveCallback(handle)
    //挂断通话
    call.term(item, JCCall.REASON_NONE, "自己挂断");
}
``````

### 自定义视频采集和渲染

自定义视频采集和渲染

对于不支持系统标准 API 的视频采集/渲染设备，或者想利用已经采集好的 I420 或 h264
数据，可另起采集/渲染线程，把采集/渲染数据放入
Juphoon 对应的接口中进行后续操作。

参考如下步骤，在你的项目中实现自定义视频源功能：

1.通过JC SDK 提供的接口将外部设备采集/准备渲染的数据输入到 JC SDK 进行后续操作。

2. 如果想停止外部设备采集/准备渲染的数据输入，则调用JC SDK 提供的接口停止数据输入即可。

在登录成功后，Zmf\_VideoInitialize 初始化成功后，把采集/准备渲染的数据通过下面的接口输入；

``````java
/**
 * The video capture data entry to ZMF
 *
 * @param[in] captureId     unique name of the video capture               //标识外部采集的ID
 * @param[in] iCaptureFace the capture face, @see ZmfVideoFaceType         //外部视频的朝向，一般取0
 * @param[in] iImgAngle     the image rotated angle (CW)                   //输入的外部视频正立所需旋转角度，顺时针为正， 取值范围0，90，180，270
 * @param[in] iCamAngle     the camera fixed orient                        //外部镜头固定角度，同iImgAngle，取值范围0，90，180，270
 * @param[in,out] iWidthHeight the image input size, at least align 4.
 *                             return the cropped height of data           //图像宽高，0为宽，1为高
 * @param[in] data          the image data buffer                          //图像buffer
 * @param[in] encoderName  the image ecoder type buffer                    //图像编码类型，H264为h264,其他为I420
 */
static public void onVideoCapture (String captureId, int iCaptureFace,
        int iImgAngle, int iCamAngle, int[] iWidthHeight, ByteBuffer data, String encoderName, int[] encoderCfg)
``````

示例代码

``````java
// 初始化视频设备
android.content.Context activity;
ZmfVideo.initialize(activity);
public void call() {
    //输入分辨率为640*360，编码为I420无需额外旋转的图像
    onVideoCapture("Test",0,0,0,640,360,buf,0);
    //发起通话
    call.call("peer number", true, "自定义透传字符串");
}
``````

采集停止接口

``````java
/**
 * tell ZMF the video capture has stopped
 *
 * @param[in] captureId     unique name of the device
 */
void Zmf_OnVideoCaptureDidStop(const char *captureId);
``````

示例代码

``````java
public void endCall() {
    //停止视频采集
    Zmf_OnVideoCaptureDidStop("Test");
    //挂断通话
    call.term(item, JCCall.REASON_NONE, "自己挂断");
}
``````

如果想在视频渲染端使用自己的渲染方式，则调用下面的接口：

视频数据渲染接口

``````java
/**
 * The video render data entry to ZMF
 *
 * @param[in] renderId      unique name of the render source            //标识渲染的ID
 * @param[in] sourceType    the source type, @see ZmfRenderSource       //渲染源类型，一般为0
 * @param[in] iAngle        the image rotated angle (CW)                //渲染正立所需角度，一般为0 取值范围0，90，180，270
 * @param[in] iMirror       the camera fixed orient                     //渲染镜像类型，一般为0
 * @param[in] iWidth        the image width                             //渲染图像宽
 * @param[in] iHeight       the image height                            //渲染图像高
 * @param[in] data          the image data buffer                       //渲染数据buffer
 */
static public void onRender(String renderId, int sourceType, int iAngle, int iMirror,int iWidth, int iHeight, ByteBuffer data)
``````

示例代码

``````java
// 初始化视频设备
android.content.Context activity;
ZmfVideo.initialize(activity);
public void call() {
    //输入分辨率为640*360，编码为I420无需额外旋转的图像
    onRender("Test",0,0,0,640,360,buf,0);
    //发起呼叫
    call.call("peer number", true, "自定义透传字符串");
}
``````

渲染数据停止接口

``````java
//Zmf_OnVideoRender，renderId/sourceType同上，后面传0。
ZmfVideo.onRender(String renderId, 0, 0, 0, 0, 0, 0, 0);
``````

示例代码

``````java
public void endCall() {
    //停止渲染
    ZmfVideo.onRender("Test", 0, 0, 0, 0, 0, 0, 0);
    挂断通话
    call.term(item, JCCall.REASON_NONE, "自己挂断");
}
``````


## 视频渲染管理

### 创建本地和远端视频画面

- 本地视频渲染

本地视频渲染通过调用 startCameraVideo 接口获得本地视频对象用于 UI 界面显示，**该接口会打开摄像头**

``````java
/**
 * 获得视频预览对象，通过此对象能获得视频用于UI显示
 *
 * @param renderType    渲染模式
 * @return              JCMediaDeviceVideoCanvas 对象
 * @see RenderType
 */
public abstract JCMediaDeviceVideoCanvas startCameraVideo(@RenderType int renderType);
``````

其中，渲染模式（JCMediaDeviceRender)有以下三种

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>名称</p></th>
<th><p>描述</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>public static final int RENDER_FULL_SCREEN = 0</p></td>
<td><p>铺满窗口</p></td>
</tr>
<tr class="even">
<td><p>public static final int RENDER_FULL_CONTENT = 1</p></td>
<td><p>全图像显示，会有黑边，但在窗口跟图像比例相同的情况下不会有黑边</p></td>
</tr>
<tr class="odd">
<td><p>public static final int RENDER_FULL_AUTO = 2</p></td>
<td><p>自适应</p></td>
</tr>
</tbody>
</table>

- 远端视频渲染

您可以调用 startVideo 方法获取对端视频对象并进行渲染

``````java
/**
 * 获得视频对象，通过此对象能获得视频用于UI显示
 *
 * @param videoSource   渲染标识串，比如 JCMediaChannelParticipant JCCallItem 中的 renderId
 * @param renderType    渲染模式
 * @return              JCMediaDeviceVideoCanvas 对象
 * @see RenderType
 */
public abstract JCMediaDeviceVideoCanvas startVideo(String videoSource, @RenderType int renderType);
``````


示例代码

``````java
// 打开本地视频预览
JCMediaDeviceVideoCanvas localCanvas = mediaDevice.startCameraVideo(JCMediaDevice.RENDER_FULL_CONTENT);
viewGroup.addView(localCanvas.getVideoView(), 0);
// 远端视频渲染，renderId来源于通话对象，一对一为JCCallItem对象，多方为JCMediaChannelParticipant对象
JCMediaDeviceVideoCanvas remoteCanvas = mediaDevice.startVideo(renderId, JCMediaDevice.RENDER_FULL_CONTENT);
viewGroup.addView(remoteCanvas.getVideoView(), 0);
``````


### 销毁本地和远端视频画面

在视频通话结束或者视频通话中，如果想销毁视频画面，可以调用下面的接口

``````java
/**
 * 停止视频
 *
 * @param canvas JCMediaDeviceVideoCanvas 对象，由 startVideo 获得
 */
public abstract void stopVideo(JCMediaDeviceVideoCanvas canvas);
``````

示例代码

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


### 暂停渲染

如果暂停画面的渲染，可以调用下面的接口：

``````java
/**
 * 暂停视频渲染
 */
public void pause();
``````

### 恢复渲染

如果想对已暂停的画面继续进行渲染，可以调用下面的接口。

``````java
/**
 * 继续视频渲染
 */
public void resume();
``````


## 视频设备管理

视频设备管理主要用到 JCMediaDevice 类中的方法，具体如下：

### 获取摄像头列表

``````java
/**
 * 获取摄像头列表
 *
 * @return 摄像头列表
 */
public abstract List<JCMediaDeviceCamera> getCameras();
``````

示例代码

``````java
获取摄像头列表
List<JCMediaDeviceCamera> cameras = mediaDevice.getCameras();
``````

### 获取当前默认的摄像头

``````java
/**
 * 当前默认的摄像头
 *
 * @return 当前摄像头
 */
public abstract JCMediaDeviceCamera getCamera();
``````

示例代码

``````java
获取摄像头列表
JCMediaDeviceCamera camera = mediaDevice.getCamera();
``````

### 开启关闭摄像头

``````java
/**
 * 开启摄像头
 *
 * @return 成功返回 true，失败返回 false
 */
public abstract boolean startCamera();

/**
 * 关闭摄像头
 *
 * @return 成功返回 true，失败返回 false
 */
public abstract boolean stopCamera();
``````

### 切换摄像头

``````java
/**
 * 切换摄像头，内部会根据当前摄像头类型来进行切换
 *
 * @return 成功返回 true，失败返回 false
 */
public abstract boolean switchCamera();
``````

示例代码

``````java
// 打开摄像头
mediaDevice.startCamera();
// 关闭摄像头
mediaDevice.stopCamera();
// 切换摄像头
mediaDevice.switchCamera();
``````
