(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{313:function(e,a,n){e.exports=n.p+"assets/img/rotateset.2711a380.png"},738:function(e,a,n){"use strict";n.r(a);var i=n(43),t=Object(i.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"视频管理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#视频管理"}},[e._v("#")]),e._v(" 视频管理")]),e._v(" "),i("h2",{attrs:{id:"视频数据采集管理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#视频数据采集管理"}},[e._v("#")]),e._v(" 视频数据采集管理")]),e._v(" "),i("h3",{attrs:{id:"设置要开启的摄像头类型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设置要开启的摄像头类型"}},[e._v("#")]),e._v(" 设置要开启的摄像头类型")]),e._v(" "),i("p",[e._v("视频采集设置前，可以通过 JCMediaDevice 类中的属性获取摄像头列表、当前摄像头以及默认摄像头，具体如下：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/// 摄像头列表\nNSArray<JCMediaDeviceCamera*> *  __nonnull cameras;\n\n/// 正在使用的摄像头\nJCMediaDeviceCamera* __nullable camera;\n\n/// 默认摄像头\nJCMediaDeviceCamera* __nullable defaultCamera;\n")])])]),i("p",[e._v("其中，摄像头对象（JCMediaDeviceCamera）有以下属性")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/// 摄像头id\nNSString* __nonnull cameraId;\n\n/// 摄像头名字\nNSString* __nonnull cameraName;\n\n/// 摄像头类型\nJCMediaDeviceCameraType cameraType;\n")])])]),i("p",[e._v("摄像头类型（JCMediaDeviceCameraType）有以下几种")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("JCMediaDeviceCameraTypeNone = 0,\nJCMediaDeviceCameraTypeFront = 1,\nJCMediaDeviceCameraTypeBack = 2,\nJCMediaDeviceCameraTypeUnknown = 3\n")])])]),i("p",[e._v("摄像头列表获取后，可以调用下面的方法切换指定的摄像头")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/// 切换指定摄像头\n/// @param camera 摄像头\n-(bool)switchCamera:(JCMediaDeviceCamera* __nonnull)camera;\n")])])]),i("h3",{attrs:{id:"设置摄像头采集分辨率"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设置摄像头采集分辨率"}},[e._v("#")]),e._v(" 设置摄像头采集分辨率")]),e._v(" "),i("p",[e._v("您可以通过自定义摄像头采集参数实现不同的视频分辨率，如采集的高度、宽度和帧速率。")]),e._v(" "),i("p",[e._v("摄像头采集属性设置接口如下：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @breif 设置摄像头采集属性\n *  @param width 采集宽度，默认640\n *  @param height 采集高度，默认360\n *  @param framerate 帧速率，默认30\n */\n- (void)setCameraProperty:(int)width height:(int)height framerate:(int)framerate;\n")])])]),i("h3",{attrs:{id:"设置摄像头采集角度"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设置摄像头采集角度"}},[e._v("#")]),e._v(" 设置摄像头采集角度")]),e._v(" "),i("p",[e._v("您可以调用下面的接口设置摄像头采集的角度，其中，角度需为 90 的倍数")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n * @breif 指定摄像头采集角度，为90的倍数\n * @param angle 角度\n */\n-(void)specifyCameraAngle:(int)angle;\n")])])]),i("h3",{attrs:{id:"设置-canvas-旋转角度"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设置-canvas-旋转角度"}},[e._v("#")]),e._v(" 设置 Canvas 旋转角度")]),e._v(" "),i("p",[e._v("如果想设置Canvas中画布的角度，需要调用 JCMediaDeviceVideoCanvas 类中的 rotate 接口")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n * @brief 旋转角度，必须是90的倍数，该角度表示画面与屏幕正方向旋转后的夹角\n * @param angle 角度值\n */\n-(void)rotate:(int)angle;\n")])])]),i("p",[e._v("其中，角度需为 90 的倍数。调用该接口后，本端显示的本地视频画面和远端视频画面会同时旋转相同的角度，而对端显示的画面不受影响。")]),e._v(" "),i("p",[e._v("例如 A 设置旋转 90 度，则 A 端显示的 A 和 B 视频画面会同时旋转 90 度。而 B 端的视频画面则不会发生任何改变。如下图所示：")]),e._v(" "),i("p",[i("img",{attrs:{src:n(313),alt:"../../../../_images/rotateset.png"}})]),e._v(" "),i("p",[e._v("角度值参考下如下")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/// 窗口与屏幕角度 0\nJCMediaDeviceRotateAngle0 = 0,\n/// 窗口与屏幕角度 90\nJCMediaDeviceRotateAngle90 = 90,\n/// 窗口与屏幕角度 180\nJCMediaDeviceRotateAngle180 = 180,\n/// 窗口与屏幕角度 270\nJCMediaDeviceRotateAngle270 = 270,\n")])])]),i("p",[i("strong",[e._v("示例代码")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("// 获取摄像头列表\nNSArray<JCMediaDeviceCamera*> * cameras = mediaDevice.cameras;\n// 设置要切换的摄像头\n[mediaDevice switchCamera:cameras[1]];\n\n// 设置摄像头采集属性\n[mediaDevice setCameraProperty:640 height:360 framerate:30];\n\n// 设置Canvas旋转角度\n[canvas rotate:90];\n")])])]),i("hr"),e._v(" "),i("h3",{attrs:{id:"原始视频数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#原始视频数据"}},[e._v("#")]),e._v(" 原始视频数据")]),e._v(" "),i("p",[e._v("在视频传输过程中，可以对每帧视频数据进行图像处理，以实现美颜等需求。有以下两种处理时机：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("在视频采集后编码前处理；会影响本地预览和对端接收视频。")])]),e._v(" "),i("li",[i("p",[e._v("在解码后渲染前处理；影响本地接收视频。")])])]),e._v(" "),i("p",[e._v("具体如下：")]),e._v(" "),i("p",[i("strong",[e._v("视频采集后，编码前处理")])]),e._v(" "),i("p",[e._v("参考如下步骤，在你的项目中实现原始视频数据功能：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("发起业务前通过 Zmf_VideoCaptureAddCallback 注册视频采集回调，并在该函数中实现一个\nZmfVideoCaptureCallback 类型的回调函数")])]),e._v(" "),i("li",[i("p",[e._v("成功注册后，JC SDK 会在捕捉到每个视频帧时通过回调函数回调采集到的原始视频数据相对应参数")])]),e._v(" "),i("li",[i("p",[e._v("用户拿到视频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给 JC SDK。")])])]),e._v(" "),i("p",[e._v("首先注册视频采集回调，在登录成功后即可调用")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/** add capture data callback\n * @param[in] pUser     the callback user data\n * @param[in] pfnCb     the callback\n * returns 0 on succeed, otherwise failed\n */\nint Zmf_VideoCaptureAddCallback (void *pUser, ZmfVideoCaptureCallback pfnCb)\n")])])]),i("p",[e._v("回调类型说明")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/** the callback to receive captured image\n * iImgAngle - iCamOrient equal to device rotate angle.\n * if encoder is NULL, the pixel format of buf must be ZmfPixelFormatI420\n *\n * @param[in] pUser     the user data registered by Zmf_VideoCaptureAddCallback\n * @param[in] captureId the id of captured image\n * @param[in] iFace     the capture Face @see ZmfVideoFaceType\n * @param[in] iImgAngle the image rotated angle (CW)\n * @param[in] iCaptureOrient the capturer fixed orient\n * @param[in,out] iWidth  the image width\n * @param[in,out] iHeight the image height\n * @param[in,out] buf     the image data I420 buffer\n * @param[in,out] encoder capture encoder\n */\n typedef void (*ZmfVideoCaptureCallback)(void* pUser, const char* captureId, int iFace,\n                                       int iImgAngle, int iCaptureOrient, int* iWidth, int* iHeight,\n                                       unsigned char *buf, ZmfVideoCaptureEncoder* encoder);\n")])])]),i("p",[e._v("示例代码")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('id render; //采集的视频数据对象\nvoid* p = (__bridge void *)render;\nstatic void zmfVideoCaptureCallback(void* pUser, const char* captureId, int iFace,\n                                    int iImgAngle, int iCaptureOrient, int* iWidth, int* iHeight,\n                                    unsigned char *buf, ZmfVideoCaptureEncoder* encoder) {\n\n    NSLog(@"视频数据处理");\n}\n- (void)videoCall {\n    //注册回调\n    Zmf_VideoCaptureAddCallback(p, zmfVideoCaptureCallback);\n    //发起呼叫\n    [call call:@"对端号码" video:true extraParam:@"自定义透传字符串"];\n}\n')])])]),i("p",[e._v("注册后，每帧采集的视频数据通过 ZmfVideoCaptureCallback 回调，可以处理对应的视频数据。")]),e._v(" "),i("p",[e._v("如果想移除回调，调用下面的接口")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v(" /** remove capture data callback\n  * @param[in] pUser     the callback user data\n  * returns 0 on succeed, otherwise failed\n  */\nint Zmf_VideoCaptureRemoveCallback (void *pUser)\n")])])]),i("p",[e._v("示例代码")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('id render; //采集的视频数据对象\nvoid* p = (__bridge void *)render;\n-(void)endCall {\n    //移除回调\n    Zmf_VideoCaptureRemoveCallback(p);\n    //挂断通话\n    [call term:item reason:JCCallReasonNone description:@"自己挂断"];\n}\n')])])]),i("p",[i("strong",[e._v("解码后，渲染前处理")])]),e._v(" "),i("p",[e._v("参考如下步骤，在你的项目中实现原始视频数据功能：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("发起业务前通过 Zmf_VideoRenderAddCallback 注册视频输出回调，并在该函数中实现一个\nZmfVideoRenderCallback 类型的回调函数")])]),e._v(" "),i("li",[i("p",[e._v("成功注册后，JC SDK 会在捕捉到每个视频帧时通过回调函数回调输出的原始视频数据相对应参数")])]),e._v(" "),i("li",[i("p",[e._v("用户拿到视频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给JC SDK。")])])]),e._v(" "),i("p",[e._v("首先注册视频输出回调，在登录成功后即可调用")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n * add render data callback\n *\n * @param[in] pUser      the callback user data\n * @param[in] pfnCb      the callback\n *\n * @return               0 on succeed, otherwise failed.\n */\nint Zmf_VideoRenderAddCallback (void *pUser, ZmfVideoRenderCallback pfnCb);\n")])])]),i("p",[e._v("回调类型说明")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n * The callback to receive video render data\n *\n * @param[in] pUser         the user data registered by Zmf_AddVideoRenderCallback\n * @param[in] renderId      video render unique name\n * @param[in] sourceType    video render source type @see ZmfVideoSourceType\n * @param[in] iAngle the image angle\n * @param[in] iMirror the image mirror type\n * @param[in] iWidth  the image width\n * @param[in] iHeight  the image height\n * @param[in] buf           I420 render data\n *\n * @return                  if process render data should return > 0, other 0\n *\n * @remarks\n *  if buf == 0 or iWidth ==0 or iHeight == 0, means the render will close,\n *  so should call Zmf_OnVideoRenderRequestRemove.\n */\n typedef int  (*ZmfVideoRenderCallback)(void* pUser, const char* renderId, int sourceType, int iAngle,\n                                  int iMirror, int* iWidth, int* iHeight, unsigned char *buf,\n                                  unsigned long timeStamp);\n")])])]),i("p",[e._v("注册后，每帧解码后的视频数据通过 ZmfVideoRenderCallback 回调，可以处理对应的视频数据。")]),e._v(" "),i("p",[e._v("示例代码")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('id render; //解码后的视频数据对象\nvoid* p = (__bridge void *)render;\nstatic void zmfVideoRenderCallback(void* pUser, const char* renderId, int sourceType, int iAngle,\n                                   int iMirror, int* iWidth, int* iHeight, unsigned char *buf,\n                                   unsigned long timeStamp) {\n\n    NSLog(@"视频数据处理");\n}\n- (void)videoCall {\n    //注册回调\n    Zmf_VideoRenderAddCallback(p, zmfVideoRenderCallback);\n    //发起呼叫\n    [call call:@"对端号码" video:true extraParam:@"自定义透传字符串"];\n}\n')])])]),i("p",[e._v("如果想移除回调，调用下面的接口")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n * remove render data callback\n *\n * @param[in] pUser      the callback user data\n * @return               0 on succeed, otherwise failed.\n */\nint Zmf_VideoRenderRemoveCallback (void *pUser)\n")])])]),i("p",[e._v("示例代码")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('id render; //解码后的视频数据对象\nvoid* p = (__bridge void *)render;\n-(void)endCall {\n    //移除回调\n    Zmf_VideoRenderRemoveCallback(p);\n    //挂断通话\n    [call term:item reason:JCCallReasonNone description:@"自己挂断"];\n}\n')])])]),i("h3",{attrs:{id:"自定义视频采集和渲染"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#自定义视频采集和渲染"}},[e._v("#")]),e._v(" 自定义视频采集和渲染")]),e._v(" "),i("p",[e._v("自定义视频采集和渲染")]),e._v(" "),i("p",[e._v("对于不支持系统标准 API 的视频采集/渲染设备，或者想利用已经采集好的 I420 或 h264\n数据，可另起采集/渲染线程，把采集/渲染数据放入\nJuphoon 对应的接口中进行后续操作。")]),e._v(" "),i("p",[e._v("参考如下步骤，在你的项目中实现自定义视频源功能：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("通过 JC SDK 提供的接口将外部设备采集/准备渲染的数据输入到 JC SDK 进行后续操作。")])]),e._v(" "),i("li",[i("p",[e._v("如果想停止外部设备采集/准备渲染的数据输入，则调用 JC SDK 提供的接口停止数据输入即可。")])])]),e._v(" "),i("p",[e._v("自定义视频采集接口如下：")]),e._v(" "),i("p",[e._v("在收到登录成功的回调后以及 Zmf_VideoInitialize 初始化成功后，把采集/准备渲染的数据通过下面的接口输入")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n * The video capture data entry to ZMF\n * iImgAngle - iCamOrient equal to device rotate angle.\n * if encoder is NULL, the pixel format of bufI420 must be ZmfPixelFormatI420\n *\n * @param[in] captureId     unique name of the video capture           //标识外部采集的ID\n * @param[in] iFace         the capture face, @see ZmfVideoFaceType    //外部视频的朝向，一般取0\n * @param[in] iImgAngle     the image rotated angle (CW)               //输入的外部视频正立所需旋转角度，顺时针为正，取值范围0，90，180，270\n * @param[in] iCamAngle     the camera fixed orient                    //外部镜头固定角度，同iImgAngle，取值范围0，90，180，270\n * @param[in,out] iWidth    the image width at least align 4,\n *                          return the cropped width of bufI420.       //输入图像的宽\n * @param[in,out] iHeight   the image height at least align 4.\n *                          return the cropped height of bufI420.      //输入图像的高\n * @param[in] bufI420       the image data                             //输入图像的buffer\n * @param[in,out] encoder   the capture encoder                        //标识输入图像编码格式\n */\n void Zmf_OnVideoCapture(const char *captureId, int iFace, int iImgAngle, int iCamAngle, int *iWidth, int *iHeight, unsigned char *bufI420, ZmfVideoCaptureEncoder* encoder);\n")])])]),i("p",[e._v("示例代码")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('Zmf_VideoInitialize(NULL);\n- (void)videoCall {\n    //输入分辨率为640*360，编码为I420无需额外旋转的图像\n    Zmf_OnVideoCapture("Test",0,0,0,640,360,buf,0);\n    //发起呼叫\n    [call call:@"对端号码" video:true extraParam:@"自定义透传字符串"];\n}\n')])])]),i("p",[e._v("采集停止接口")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n * tell ZMF the video capture has stopped\n *\n * @param[in] captureId     unique name of the device\n */\nvoid Zmf_OnVideoCaptureDidStop(const char *captureId);\n")])])]),i("p",[e._v("示例代码")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('- (void)endCall {\n    //停止采集\n    Zmf_OnVideoCaptureDidStop("Test");\n    //挂断通话\n    [call term:item reason:JCCallReasonNone description:@"自己挂断"];\n}\n')])])]),i("p",[e._v("如果想在视频渲染端使用自己的渲染方式，则调用下面的接口：")]),e._v(" "),i("p",[e._v("视频数据渲染接口")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n * The video render data entry to ZMF\n *\n * @param[in] renderId      unique name of the video render source                //标识渲染的ID\n * @param[in] sourceType    the render source type, @see ZmfVideoSourceType       //渲染源类型，一般为0\n * @param[in] iAngle        the image rotated angle (CW)ZmfVideoCaptureCallback   //渲染正立所需角度，一般为0 取值范围0，90，180，270\n * @param[in] iMirror       the camera fixed orient                               //渲染镜像类型，一般为0\n * @param[in] iWidth        the image width                                       //渲染图像宽\n * @param[in] iHeight       the image height                                      //渲染图像高\n * @param[in] bufI420       the image data I420 buffer                            //渲染数据buffer\n */\n void Zmf_OnVideoRender(const char *renderId, int sourceType, int iAngle, int iMirror, int *iWidth, int *iHeight, unsigned char *bufI420, unsigned long timeStamp);\n")])])]),i("p",[e._v("示例代码")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('Zmf_VideoInitialize(NULL);\n- (void)videoCall {\n    //输入分辨率为640*360，编码为I420无需额外旋转的图像\n    Zmf_OnVideoRender("Test",0,0,0,640,360,buf,0);\n    //发起呼叫\n    [call call:@"对端号码" video:true extraParam:@"自定义透传字符串"];\n}\n')])])]),i("p",[e._v("渲染数据停止接口")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("Zmf_OnVideoRender(const char *renderId, 0, 0, 0, 0, 0, 0, 0);\n")])])]),i("p",[e._v("示例代码")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('- (void)endCall {\n    //停止渲染\n    Zmf_OnVideoRender("Test", 0, 0, 0, 0, 0, 0, 0);\n    //挂断通话\n    [call term:item reason:JCCallReasonNone description:@"自己挂断"];\n}\n')])])]),i("h2",{attrs:{id:"视频渲染管理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#视频渲染管理"}},[e._v("#")]),e._v(" 视频渲染管理")]),e._v(" "),i("h3",{attrs:{id:"创建本地和远端视频画面"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建本地和远端视频画面"}},[e._v("#")]),e._v(" 创建本地和远端视频画面")]),e._v(" "),i("ul",[i("li",[e._v("本地视频渲染")])]),e._v(" "),i("p",[e._v("本地视频渲染通过调用 startCameraVideo 接口获得本地视频对象用于 UI 界面显示，"),i("strong",[e._v("该接口会打开摄像头")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @brief 获得预览视频对象，通过此对象能获得视图用于UI显示\n *  @param type 渲染模式，@ref JCMediaDeviceRender\n *  @return JCMediaDeviceVideoCanvas 对象\n */\n-(JCMediaDeviceVideoCanvas* __nullable)startCameraVideo:(int)type;\n")])])]),i("p",[e._v("其中，渲染模式（JCMediaDeviceRender)有以下三种：")]),e._v(" "),i("table",[i("colgroup",[i("col",{staticStyle:{width:"50%"}}),e._v(" "),i("col",{staticStyle:{width:"50%"}})]),e._v(" "),i("thead",[i("tr",{staticClass:"header"},[i("th",[i("p",[e._v("名称")])]),e._v(" "),i("th",[i("p",[e._v("描述")])])])]),e._v(" "),i("tbody",[i("tr",{staticClass:"odd"},[i("td",[i("p",[e._v("JCMediaDeviceRenderFullScreen = 0")])]),e._v(" "),i("td",[i("p",[e._v("视频图像按比例填充整个渲染区域（裁剪掉超出渲染区域的部分区域）")])])]),e._v(" "),i("tr",{staticClass:"even"},[i("td",[i("p",[e._v("JCMediaDeviceRenderFullContent")])]),e._v(" "),i("td",[i("p",[e._v("视频图像的内容完全呈现到渲染区域（可能会出现黑边，类似放电影的荧幕）")])])]),e._v(" "),i("tr",{staticClass:"odd"},[i("td",[i("p",[e._v("JCMediaDeviceRenderFullAuto")])]),e._v(" "),i("td",[i("p",[e._v("自动")])])])])]),e._v(" "),i("ul",[i("li",[e._v("远端视频渲染")])]),e._v(" "),i("p",[e._v("您可以调用 startVideo 方法获取对端视频对象并进行渲染")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @brief 获得预览视频对象，通过此对象能获得视图用于UI显示\n *  @param videoSource 渲染标识串，比如 JCMediaChannelParticipant JCCallItem 中的 renderId，当videoSource 为 videoFileId 时，内部会调用 startVideoFile\n *  @param type        渲染模式，@ref JCMediaDeviceRender\n *  @return JCMediaDeviceVideoCanvas 对象\n */\n-(JCMediaDeviceVideoCanvas* __nullable)startVideo:(NSString* __nonnull)videoSource renderType:(int)type;\n")])])]),i("p",[i("strong",[e._v("示例代码")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("// 创建本地视频画面对象\nJCMediaDeviceVideoCanvas *local = [mediaDevice startCameraVideo:JCMediaDeviceRenderFullContent];\nlocal.videoView.frame = CGRectMake(0, 0, 100, 100);\n[self.view addSubview:local.videoView];\n\n// 创建远端视频画面对象，renderId来源于通话对象，一对一为JCCallItem对象，多方为JCMediaChannelParticipant对象\nJCMediaDeviceVideoCanvas *remote = [mediaDevice startVideo:renderId renderType:JCMediaDeviceRenderFullContent];\nremote.videoView.frame = CGRectMake(100, 0, 100, 100);\n[self.view addSubview:remote.videoView];\n")])])]),i("hr"),e._v(" "),i("h3",{attrs:{id:"销毁本地和远端视频画面"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#销毁本地和远端视频画面"}},[e._v("#")]),e._v(" 销毁本地和远端视频画面")]),e._v(" "),i("p",[e._v("在视频通话结束或者视频通话中，如果想销毁视频画面，可以调用下面的接口")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @brief 停止视频\n *  @param canvas JCMediaDeviceVideoCanvas 对象，由 startVideo 获得\n */\n-(void)stopVideo:(JCMediaDeviceVideoCanvas* __nonnull)canvas;\n")])])]),i("p",[e._v("示例代码:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("JCMediaDeviceVideoCanvas *localCanvas = [mediaDevice startCameraVideo:JCMediaDeviceRenderFullContent];\nJCMediaDeviceVideoCanvas *remoteCanvas = [mediaDevice startVideo:renderId renderType:JCMediaDeviceRenderFullContent];\nif (localCanvas) {\n    // 移除本地视频\n    [mediaDevice stopVideo:localCanvas];\n    [localCanvas.videoView removeFromSuperview];\n    localCanvas = nil;\n}\nif (remoteCanvas) {\n    // 移除远端视频\n    [mediaDevice stopVideo:remoteCanvas];\n    [remoteCanvas.videoView removeFromSuperview];\n    remoteCanvas = nil;\n}\n")])])]),i("hr"),e._v(" "),i("p",[e._v("渲染控制主要使用到 JCMediaDeviceVideoCanvas 类中的接口。具体如下：")]),e._v(" "),i("h3",{attrs:{id:"更新视频渲染标识"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#更新视频渲染标识"}},[e._v("#")]),e._v(" 更新视频渲染标识")]),e._v(" "),i("p",[e._v("如果想更新视频渲染标识，可以调用下面的接口")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @breif 更新视频渲染标识\n *  @param videoSource 视频源\n *  @return 成功返回 true，失败返回 false\n */\n-(bool)replace:(NSString*)videoSource;\n")])])]),i("h3",{attrs:{id:"暂停渲染"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#暂停渲染"}},[e._v("#")]),e._v(" 暂停渲染")]),e._v(" "),i("p",[e._v("如果想暂停画面的渲染可以调用如下接口：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @brief 暂停渲染\n *  @return 成功返回 true，失败返回 false\n */\n-(void)pause;\n")])])]),i("h3",{attrs:{id:"恢复渲染"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#恢复渲染"}},[e._v("#")]),e._v(" 恢复渲染")]),e._v(" "),i("p",[e._v("如果想对已暂停的画面继续进行渲染，可以调用下面的接口：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @brief 恢复渲染\n *  @return 成功返回 true，失败返回 false\n */\n-(void)resume;\n")])])]),i("h2",{attrs:{id:"视频设备管理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#视频设备管理"}},[e._v("#")]),e._v(" 视频设备管理")]),e._v(" "),i("p",[e._v("视频设备管理主要用到 JCMediaDevice 类中的方法，具体如下：")]),e._v(" "),i("h3",{attrs:{id:"开启关闭摄像头"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#开启关闭摄像头"}},[e._v("#")]),e._v(" 开启关闭摄像头")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @breif 开启摄像头，一般在只需开启摄像头时调用\n *  @return 成功返回 true，失败返回 false\n */\n-(bool)startCamera;\n\n/**\n *  @breif 关闭摄像头，一般和 startCamera 配对使用\n *  @return 成功返回 true，失败返回 false\n */\n-(bool)stopCamera;\n")])])]),i("h3",{attrs:{id:"切换摄像头"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#切换摄像头"}},[e._v("#")]),e._v(" 切换摄像头")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("/**\n *  @breif 切换前后摄像头，内部会根据当前摄像头类型来进行切换\n *  @return 成功返回 true，失败返回 false\n */\n-(bool)switchCamera;\n")])])]),i("p",[i("strong",[e._v("示例代码")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("// 打开摄像头\n[mediaDevice startCamera];\n\n// 关闭摄像头\n[mediaDevice stopCamera];\n\n// 切换摄像头\n[mediaDevice switchCamera];\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);