---
title: 视频管理
---
# 视频管理

## 视频数据采集管理

### 设置要开启的摄像头类型

视频采集设置前，可以通过 JCMediaDevice 类中的属性获取摄像头列表、当前摄像头以及默认摄像头，具体如下：

```objectivec
/// 摄像头列表
NSArray<JCMediaDeviceCamera*> *  __nonnull cameras;

/// 正在使用的摄像头
JCMediaDeviceCamera* __nullable camera;

/// 默认摄像头
JCMediaDeviceCamera* __nullable defaultCamera;
```

其中，摄像头对象（JCMediaDeviceCamera）有以下属性：

```objectivec
/// 摄像头id
NSString* __nonnull cameraId;

/// 摄像头名字
NSString* __nonnull cameraName;

/// 摄像头类型
JCMediaDeviceCameraType cameraType;
```

摄像头类型（JCMediaDeviceCameraType）有以下几种：

```objectivec
JCMediaDeviceCameraTypeNone = 0,
JCMediaDeviceCameraTypeFront = 1,
JCMediaDeviceCameraTypeBack = 2,
JCMediaDeviceCameraTypeUnknown = 3
```

摄像头列表获取后，可以调用下面的方法切换指定的摄像头。

```objectivec
/// 切换指定摄像头
/// @param camera 摄像头
-(bool)switchCamera:(JCMediaDeviceCamera* __nonnull)camera;
```

### 设置摄像头采集分辨率

您可以通过自定义摄像头采集参数实现不同的视频分辨率，如采集的高度、宽度和帧速率。

摄像头采集属性设置接口如下：

```objectivec
/**
 *  @breif 设置摄像头采集属性
 *  @param width 采集宽度，默认640
 *  @param height 采集高度，默认360
 *  @param framerate 帧速率，默认30
 */
- (void)setCameraProperty:(int)width height:(int)height framerate:(int)framerate;
```

### 设置摄像头采集角度

您可以调用下面的接口设置摄像头采集的角度，其中，角度需为 90 的倍数。

```objectivec
/**
 * @breif 指定摄像头采集角度，为90的倍数
 * @param angle 角度
 */
-(void)specifyCameraAngle:(int)angle;
```

### 设置 Canvas 旋转角度

如果想设置Canvas中画布的角度，需要调用 JCMediaDeviceVideoCanvas 类中的 rotate 接口。

```objectivec
/**
 * @brief 旋转角度，必须是90的倍数，该角度表示画面与屏幕正方向旋转后的夹角
 * @param angle 角度值
 */
-(void)rotate:(int)angle;
```

其中，角度需为 90 的倍数。调用该接口后，本端显示的本地视频画面和远端视频画面会同时旋转相同的角度，而对端显示的画面不受影响。

例如 A 设置旋转 90 度，则 A 端显示的 A 和 B 视频画面会同时旋转 90 度。而 B 端的视频画面则不会发生任何改变。如下图所示：

![../../../../\_images/rotateset.png](../../../../_images/rotateset.png)

角度值参考下如下：

```objectivec
/// 窗口与屏幕角度 0
JCMediaDeviceRotateAngle0 = 0,
/// 窗口与屏幕角度 90
JCMediaDeviceRotateAngle90 = 90,
/// 窗口与屏幕角度 180
JCMediaDeviceRotateAngle180 = 180,
/// 窗口与屏幕角度 270
JCMediaDeviceRotateAngle270 = 270,
```

示例代码

```objectivec
// 获取摄像头列表
NSArray<JCMediaDeviceCamera*> * cameras = mediaDevice.cameras;
// 设置要切换的摄像头
[mediaDevice switchCamera:cameras[1]];

// 设置摄像头采集属性
[mediaDevice setCameraProperty:640 height:360 framerate:30];

// 设置Canvas旋转角度
[canvas rotate:90];
```

-----

### 原始视频数据

在视频传输过程中，可以对每帧视频数据进行图像处理，以实现美颜等需求。有以下两种处理时机：

1. 在视频采集后编码前处理；会影响本地预览和对端接收视频。

2. 在解码后渲染前处理；影响本地接收视频。

具体如下：

**视频采集后，编码前处理**

参考如下步骤，在你的项目中实现原始视频数据功能：

1. 发起业务前通过 Zmf\_VideoCaptureAddCallback 注册视频采集回调，并在该函数中实现一个
    ZmfVideoCaptureCallback 类型的回调函数

2. 成功注册后，JC SDK 会在捕捉到每个视频帧时通过回调函数回调采集到的原始视频数据相对应参数

3. 用户拿到视频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给 JC SDK。

首先注册视频采集回调，在登录成功后即可调用。

```objectivec
/** add capture data callback
 * @param[in] pUser     the callback user data
 * @param[in] pfnCb     the callback
 * returns 0 on succeed, otherwise failed
 */
int Zmf_VideoCaptureAddCallback (void *pUser, ZmfVideoCaptureCallback pfnCb)
```

回调类型说明：

```objectivec
/** the callback to receive captured image
 * iImgAngle - iCamOrient equal to device rotate angle.
 * if encoder is NULL, the pixel format of buf must be ZmfPixelFormatI420
 *
 * @param[in] pUser     the user data registered by Zmf_VideoCaptureAddCallback
 * @param[in] captureId the id of captured image
 * @param[in] iFace     the capture Face @see ZmfVideoFaceType
 * @param[in] iImgAngle the image rotated angle (CW)
 * @param[in] iCaptureOrient the capturer fixed orient
 * @param[in,out] iWidth  the image width
 * @param[in,out] iHeight the image height
 * @param[in,out] buf     the image data I420 buffer
 * @param[in,out] encoder capture encoder
 */
 typedef void (*ZmfVideoCaptureCallback)(void* pUser, const char* captureId, int iFace,
                                       int iImgAngle, int iCaptureOrient, int* iWidth, int* iHeight,
                                       unsigned char *buf, ZmfVideoCaptureEncoder* encoder);
```

示例代码

```objectivec
id render; //采集的视频数据对象
void* p = (__bridge void *)render;
static void zmfVideoCaptureCallback(void* pUser, const char* captureId, int iFace,
                                    int iImgAngle, int iCaptureOrient, int* iWidth, int* iHeight,
                                    unsigned char *buf, ZmfVideoCaptureEncoder* encoder) {

    NSLog(@"视频数据处理");
}
- (void)videoCall {
    //注册回调
    Zmf_VideoCaptureAddCallback(p, zmfVideoCaptureCallback);
    //发起呼叫
    [call call:@"对端号码" video:true extraParam:@"自定义透传字符串"];
}
```

注册后，每帧采集的视频数据通过 ZmfVideoCaptureCallback 回调，可以处理对应的视频数据。

如果想移除回调，调用下面的接口。

```objectivec
```

 /** remove capture data callback

* @param[in] pUser     the callback user data
* returns 0 on succeed, otherwise failed
  */
int Zmf_VideoCaptureRemoveCallback (void*pUser)

```
```

示例代码

```objectivec
id render; //采集的视频数据对象
void* p = (__bridge void *)render;
-(void)endCall {
    //移除回调
    Zmf_VideoCaptureRemoveCallback(p);
    //挂断通话
    [call term:item reason:JCCallReasonNone description:@"自己挂断"];
}
```

**解码后，渲染前处理**

参考如下步骤，在你的项目中实现原始视频数据功能：

1. 发起业务前通过 Zmf\_VideoRenderAddCallback 注册视频输出回调，并在该函数中实现一个
    ZmfVideoRenderCallback 类型的回调函数

2. 成功注册后，JC SDK 会在捕捉到每个视频帧时通过回调函数回调输出的原始视频数据相对应参数

3. 用户拿到视频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给JC SDK。

首先注册视频输出回调，在登录成功后即可调用。

```objectivec
/**
 * add render data callback
 *
 * @param[in] pUser      the callback user data
 * @param[in] pfnCb      the callback
 *
 * @return               0 on succeed, otherwise failed.
 */
int Zmf_VideoRenderAddCallback (void *pUser, ZmfVideoRenderCallback pfnCb);
```

回调类型说明：

```objectivec
/**
 * The callback to receive video render data
 *
 * @param[in] pUser         the user data registered by Zmf_AddVideoRenderCallback
 * @param[in] renderId      video render unique name
 * @param[in] sourceType    video render source type @see ZmfVideoSourceType
 * @param[in] iAngle the image angle
 * @param[in] iMirror the image mirror type
 * @param[in] iWidth  the image width
 * @param[in] iHeight  the image height
 * @param[in] buf           I420 render data
 *
 * @return                  if process render data should return > 0, other 0
 *
 * @remarks
 *  if buf == 0 or iWidth ==0 or iHeight == 0, means the render will close,
 *  so should call Zmf_OnVideoRenderRequestRemove.
 */
 typedef int  (*ZmfVideoRenderCallback)(void* pUser, const char* renderId, int sourceType, int iAngle,
                                  int iMirror, int* iWidth, int* iHeight, unsigned char *buf,
                                  unsigned long timeStamp);
```

注册后，每帧解码后的视频数据通过 ZmfVideoRenderCallback 回调，可以处理对应的视频数据。

示例代码

```objectivec
id render; //解码后的视频数据对象
void* p = (__bridge void *)render;
static void zmfVideoRenderCallback(void* pUser, const char* renderId, int sourceType, int iAngle,
                                   int iMirror, int* iWidth, int* iHeight, unsigned char *buf,
                                   unsigned long timeStamp) {

    NSLog(@"视频数据处理");
}
- (void)videoCall {
    //注册回调
    Zmf_VideoRenderAddCallback(p, zmfVideoRenderCallback);
    //发起呼叫
    [call call:@"对端号码" video:true extraParam:@"自定义透传字符串"];
}
```

如果想移除回调，调用下面的接口。

```objectivec
/**
 * remove render data callback
 *
 * @param[in] pUser      the callback user data
 * @return               0 on succeed, otherwise failed.
 */
int Zmf_VideoRenderRemoveCallback (void *pUser)
```

示例代码

```objectivec
id render; //解码后的视频数据对象
void* p = (__bridge void *)render;
-(void)endCall {
    //移除回调
    Zmf_VideoRenderRemoveCallback(p);
    //挂断通话
    [call term:item reason:JCCallReasonNone description:@"自己挂断"];
}
```

### 自定义视频采集和渲染

对于不支持系统标准 API 的视频采集/渲染设备，或者想利用已经采集好的 I420 或 h264
数据，可另起采集/渲染线程，把采集/渲染数据放入
Juphoon 对应的接口中进行后续操作。

参考如下步骤，在你的项目中实现自定义视频源功能：

1. 通过 JC SDK 提供的接口将外部设备采集/准备渲染的数据输入到 JC SDK 进行后续操作。

2. 如果想停止外部设备采集/准备渲染的数据输入，则调用 JC SDK 提供的接口停止数据输入即可。

自定义视频采集接口如下：

在收到登录成功的回调后以及 Zmf\_VideoInitialize 初始化成功后，把采集/准备渲染的数据通过下面的接口输入。

```objectivec
/**
 * The video capture data entry to ZMF
 * iImgAngle - iCamOrient equal to device rotate angle.
 * if encoder is NULL, the pixel format of bufI420 must be ZmfPixelFormatI420
 *
 * @param[in] captureId     unique name of the video capture           //标识外部采集的ID
 * @param[in] iFace         the capture face, @see ZmfVideoFaceType    //外部视频的朝向，一般取0
 * @param[in] iImgAngle     the image rotated angle (CW)               //输入的外部视频正立所需旋转角度，顺时针为正，取值范围0，90，180，270
 * @param[in] iCamAngle     the camera fixed orient                    //外部镜头固定角度，同iImgAngle，取值范围0，90，180，270
 * @param[in,out] iWidth    the image width at least align 4,
 *                          return the cropped width of bufI420.       //输入图像的宽
 * @param[in,out] iHeight   the image height at least align 4.
 *                          return the cropped height of bufI420.      //输入图像的高
 * @param[in] bufI420       the image data                             //输入图像的buffer
 * @param[in,out] encoder   the capture encoder                        //标识输入图像编码格式
 */
 void Zmf_OnVideoCapture(const char *captureId, int iFace, int iImgAngle, int iCamAngle, int *iWidth, int *iHeight, unsigned char *bufI420, ZmfVideoCaptureEncoder* encoder);
```

示例代码

```objectivec
Zmf_VideoInitialize(NULL);
- (void)videoCall {
    //输入分辨率为640*360，编码为I420无需额外旋转的图像
    Zmf_OnVideoCapture("Test",0,0,0,640,360,buf,0);
    //发起呼叫
    [call call:@"对端号码" video:true extraParam:@"自定义透传字符串"];
}
```

采集停止接口。

```objectivec
/**
 * tell ZMF the video capture has stopped
 *
 * @param[in] captureId     unique name of the device
 */
void Zmf_OnVideoCaptureDidStop(const char *captureId);
```

示例代码

```objectivec
- (void)endCall {
    //停止采集
    Zmf_OnVideoCaptureDidStop("Test");
    //挂断通话
    [call term:item reason:JCCallReasonNone description:@"自己挂断"];
}
```

如果想在视频渲染端使用自己的渲染方式，则调用下面的接口：

视频数据渲染接口。

```objectivec
/**
 * The video render data entry to ZMF
 *
 * @param[in] renderId      unique name of the video render source                //标识渲染的ID
 * @param[in] sourceType    the render source type, @see ZmfVideoSourceType       //渲染源类型，一般为0
 * @param[in] iAngle        the image rotated angle (CW)ZmfVideoCaptureCallback   //渲染正立所需角度，一般为0 取值范围0，90，180，270
 * @param[in] iMirror       the camera fixed orient                               //渲染镜像类型，一般为0
 * @param[in] iWidth        the image width                                       //渲染图像宽
 * @param[in] iHeight       the image height                                      //渲染图像高
 * @param[in] bufI420       the image data I420 buffer                            //渲染数据buffer
 */
 void Zmf_OnVideoRender(const char *renderId, int sourceType, int iAngle, int iMirror, int *iWidth, int *iHeight, unsigned char *bufI420, unsigned long timeStamp);
```

示例代码

```objectivec
Zmf_VideoInitialize(NULL);
- (void)videoCall {
    //输入分辨率为640*360，编码为I420无需额外旋转的图像
    Zmf_OnVideoRender("Test",0,0,0,640,360,buf,0);
    //发起呼叫
    [call call:@"对端号码" video:true extraParam:@"自定义透传字符串"];
}
```

渲染数据停止接口。

```objectivec
Zmf_OnVideoRender(const char *renderId, 0, 0, 0, 0, 0, 0, 0);
```

示例代码

```objectivec
- (void)endCall {
    //停止渲染
    Zmf_OnVideoRender("Test", 0, 0, 0, 0, 0, 0, 0);
    //挂断通话
    [call term:item reason:JCCallReasonNone description:@"自己挂断"];
}
```

## 视频渲染管理

### 创建本地和远端视频画面

- 本地视频渲染

本地视频渲染通过调用 startCameraVideo 接口获得本地视频对象用于 UI 界面显示，**该接口会打开摄像头** 。

```objectivec
/**
 *  @brief 获得预览视频对象，通过此对象能获得视图用于UI显示
 *  @param type 渲染模式，@ref JCMediaDeviceRender
 *  @return JCMediaDeviceVideoCanvas 对象
 */
-(JCMediaDeviceVideoCanvas* __nullable)startCameraVideo:(int)type;
```

其中，渲染模式（JCMediaDeviceRender)有以下三种：

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
<td><p>JCMediaDeviceRenderFullScreen = 0</p></td>
<td><p>视频图像按比例填充整个渲染区域（裁剪掉超出渲染区域的部分区域）</p></td>
</tr>
<tr class="even">
<td><p>JCMediaDeviceRenderFullContent</p></td>
<td><p>视频图像的内容完全呈现到渲染区域（可能会出现黑边，类似放电影的荧幕）</p></td>
</tr>
<tr class="odd">
<td><p>JCMediaDeviceRenderFullAuto</p></td>
<td><p>自动</p></td>
</tr>
</tbody>
</table>

- 远端视频渲染

您可以调用 startVideo 方法获取对端视频对象并进行渲染。

```objectivec
/**
 *  @brief 获得预览视频对象，通过此对象能获得视图用于UI显示
 *  @param videoSource 渲染标识串，比如 JCMediaChannelParticipant JCCallItem 中的 renderId，当videoSource 为 videoFileId 时，内部会调用 startVideoFile
 *  @param type        渲染模式，@ref JCMediaDeviceRender
 *  @return JCMediaDeviceVideoCanvas 对象
 */
-(JCMediaDeviceVideoCanvas* __nullable)startVideo:(NSString* __nonnull)videoSource renderType:(int)type;
```

示例代码

```objectivec
// 创建本地视频画面对象
JCMediaDeviceVideoCanvas *local = [mediaDevice startCameraVideo:JCMediaDeviceRenderFullContent];
local.videoView.frame = CGRectMake(0, 0, 100, 100);
[self.view addSubview:local.videoView];

// 创建远端视频画面对象，renderId来源于通话对象，一对一为JCCallItem对象，多方为JCMediaChannelParticipant对象
JCMediaDeviceVideoCanvas *remote = [mediaDevice startVideo:renderId renderType:JCMediaDeviceRenderFullContent];
remote.videoView.frame = CGRectMake(100, 0, 100, 100);
[self.view addSubview:remote.videoView];
```

-----

### 销毁本地和远端视频画面

在视频通话结束或者视频通话中，如果想销毁视频画面，可以调用下面的接口。

```objectivec
/**
 *  @brief 停止视频
 *  @param canvas JCMediaDeviceVideoCanvas 对象，由 startVideo 获得
 */
-(void)stopVideo:(JCMediaDeviceVideoCanvas* __nonnull)canvas;
```

示例代码

```objectivec
JCMediaDeviceVideoCanvas *localCanvas = [mediaDevice startCameraVideo:JCMediaDeviceRenderFullContent];
JCMediaDeviceVideoCanvas *remoteCanvas = [mediaDevice startVideo:renderId renderType:JCMediaDeviceRenderFullContent];
if (localCanvas) {
    // 移除本地视频
    [mediaDevice stopVideo:localCanvas];
    [localCanvas.videoView removeFromSuperview];
    localCanvas = nil;
}
if (remoteCanvas) {
    // 移除远端视频
    [mediaDevice stopVideo:remoteCanvas];
    [remoteCanvas.videoView removeFromSuperview];
    remoteCanvas = nil;
}
```

-----

渲染控制主要使用到 JCMediaDeviceVideoCanvas 类中的接口。具体如下：

### 更新视频渲染标识

如果想更新视频渲染标识，可以调用下面的接口。

```objectivec
/**
 *  @breif 更新视频渲染标识
 *  @param videoSource 视频源
 *  @return 成功返回 true，失败返回 false
 */
-(bool)replace:(NSString*)videoSource;
```

### 暂停渲染

如果想暂停画面的渲染可以调用如下接口。

```objectivec
/**
 *  @brief 暂停渲染
 *  @return 成功返回 true，失败返回 false
 */
-(void)pause;
```

### 恢复渲染

如果想对已暂停的画面继续进行渲染，可以调用下面的接口。

```objectivec
/**
 *  @brief 恢复渲染
 *  @return 成功返回 true，失败返回 false
 */
-(void)resume;
```

## 视频设备管理

视频设备管理主要用到 JCMediaDevice 类中的方法，具体如下：

### 开启关闭摄像头

```objectivec
/**
 *  @breif 开启摄像头，一般在只需开启摄像头时调用
 *  @return 成功返回 true，失败返回 false
 */
-(bool)startCamera;

/**
 *  @breif 关闭摄像头，一般和 startCamera 配对使用
 *  @return 成功返回 true，失败返回 false
 */
-(bool)stopCamera;
```

### 切换摄像头

```objectivec
/**
 *  @breif 切换前后摄像头，内部会根据当前摄像头类型来进行切换
 *  @return 成功返回 true，失败返回 false
 */
-(bool)switchCamera;
```

示例代码

```objectivec
// 打开摄像头
[mediaDevice startCamera];

// 关闭摄像头
[mediaDevice stopCamera];

// 切换摄像头
[mediaDevice switchCamera];
```
