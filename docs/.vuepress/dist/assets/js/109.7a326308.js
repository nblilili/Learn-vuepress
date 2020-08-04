(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{313:function(e,a,n){e.exports=n.p+"assets/img/rotateset.2711a380.png"},447:function(e,a,n){"use strict";n.r(a);var t=n(43),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"视频管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频管理"}},[e._v("#")]),e._v(" 视频管理")]),e._v(" "),t("h2",{attrs:{id:"视频数据采集管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频数据采集管理"}},[e._v("#")]),e._v(" 视频数据采集管理")]),e._v(" "),t("h3",{attrs:{id:"设置要开启的摄像头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置要开启的摄像头"}},[e._v("#")]),e._v(" 设置要开启的摄像头")]),e._v(" "),t("p",[e._v("视频采集设置前，可以通过 JCMediaDevice 类中的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#af5d7b21bf998890a10bbf4ea5c3984da",target:"_blank",rel:"noopener noreferrer"}},[e._v("getCameras"),t("OutboundLink")],1),e._v("\n方法获取摄像头列表：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("std::list<JCMediaDeviceCamera>* cameras = JCManager::shared()->mediaDevice->getCameras();\n")])])]),t("p",[e._v("摄像头列表获取后，调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a0716deb7c816c605444f2bb3202e9ef5",target:"_blank",rel:"noopener noreferrer"}},[e._v("switchCamera"),t("OutboundLink")],1),e._v("\n方法切换指定的摄像头")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/// 切换指定摄像头\nJCManager::shared()->mediaDevice->switchCamera(cameras[0]);\n")])])]),t("h3",{attrs:{id:"设置摄像头采集分辨率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置摄像头采集分辨率"}},[e._v("#")]),e._v(" 设置摄像头采集分辨率")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a2ec180f6fc51367007b854dd0bc2866b",target:"_blank",rel:"noopener noreferrer"}},[e._v("setCameraProperty"),t("OutboundLink")],1),e._v("\n接口自定义摄像头采集参数，如采集的高度、宽度和帧速率，以实现不同的采集分辨率。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("JCManager::shared()->mediaDevice->setCameraProperty(640, 360, 24);\n")])])]),t("h3",{attrs:{id:"设置-canvas-旋转角度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-canvas-旋转角度"}},[e._v("#")]),e._v(" 设置 Canvas 旋转角度")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html#a44d1073788a9cd3c6620c839eea76ffa",target:"_blank",rel:"noopener noreferrer"}},[e._v("rotate"),t("OutboundLink")],1),e._v("\n接口设置 Canvas 中画布的旋转角度。其中，旋转角度必须是 90 的倍数，该角度表示与屏幕正方向旋转后的夹角")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("JCManager::shared()->mediaDeviceCanvas->rotate(Angle90);\n")])])]),t("p",[e._v("调用该接口后，本端显示的本地视频画面和远端视频画面会同时旋转相同的角度，而对端显示的画面不受影响。")]),e._v(" "),t("p",[e._v("例如 A 设置旋转 90 度，则 A 端显示的 A 和 B 视频画面会同时旋转 90 度。而 B 端的视频画面则不会发生任何改变。如下图所示：")]),e._v(" "),t("p",[t("img",{attrs:{src:n(313),alt:"../../../../_images/rotateset.png"}})]),e._v(" "),t("p",[e._v("角度值参考下如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 窗口与屏幕角度 0\nAngle0 = 0,\n// 窗口与屏幕角度 90\nAngle90 = 90,\n// 窗口与屏幕角度 180\nAngle180 = 180,\n// 窗口与屏幕角度 270\nAngle270 = 270\n")])])]),t("hr"),e._v(" "),t("h2",{attrs:{id:"视频数据管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频数据管理"}},[e._v("#")]),e._v(" 视频数据管理")]),e._v(" "),t("h3",{attrs:{id:"原始视频数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始视频数据"}},[e._v("#")]),e._v(" 原始视频数据")]),e._v(" "),t("p",[e._v("在视频传输过程中，可以对每帧视频数据进行图像处理，以实现美颜等需求。有以下两种处理时机：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("在视频采集后编码前处理；会影响本地预览和对端接收视频。")])]),e._v(" "),t("li",[t("p",[e._v("在解码后渲染前处理；影响本地接收视频。")])])]),e._v(" "),t("p",[e._v("具体如下：")]),e._v(" "),t("p",[t("strong",[e._v("视频采集后，编码前处理")])]),e._v(" "),t("p",[e._v("参考如下步骤，在你的项目中实现原始视频数据功能：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("发起业务前通过 Zmf_VideoCaptureAddCallback 注册视频采集回调，并在该函数中实现一个\nZmfVideoCaptureCallback 类型的回调函数；")])]),e._v(" "),t("li",[t("p",[e._v("成功注册后，JC SDK 会在捕捉到每个视频帧时通过回调函数回调采集到的原始视频数据相对应参数；")])]),e._v(" "),t("li",[t("p",[e._v("用户拿到视频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给 JC SDK。")])])]),e._v(" "),t("p",[e._v("首先注册视频采集回调，在登录成功后即可调用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/** add capture data callback\n * @param[in] pUser     the callback user data\n * @param[in] pfnCb     the callback\n * returns 0 on succeed, otherwise failed\n */\nint Zmf_VideoCaptureAddCallback (void *pUser, ZmfVideoCaptureCallback pfnCb)\n")])])]),t("p",[e._v("回调类型说明")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/** the callback to receive captured image\n * iImgAngle - iCamOrient equal to device rotate angle.\n * if encoder is NULL, the pixel format of buf must be ZmfPixelFormatI420\n *\n * @param[in] pUser     the user data registered by Zmf_VideoCaptureAddCallback\n * @param[in] captureId the id of captured image\n * @param[in] iFace     the capture Face @see ZmfVideoFaceType\n * @param[in] iImgAngle the image rotated angle (CW)\n * @param[in] iCaptureOrient the capturer fixed orient\n * @param[in,out] iWidth  the image width\n * @param[in,out] iHeight the image height\n * @param[in,out] buf     the image data I420 buffer\n * @param[in,out] encoder capture encoder\n */\n typedef void (*ZmfVideoCaptureCallback)(void* pUser, const char* captureId, int iFace,\n                                       int iImgAngle, int iCaptureOrient, int* iWidth, int* iHeight,\n                                       unsigned char *buf, ZmfVideoCaptureEncoder* encoder);\n")])])]),t("p",[e._v("示例代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('static void zmfVideoCaptureCallback(void* pUser, const char* captureId, int iFace,\n                                    int iImgAngle, int iCaptureOrient, int* iWidth, int* iHeight,\n                                    unsigned char *buf, ZmfVideoCaptureEncoder* encoder) {\n\n    cout << "视频数据处理" << endl;\n}\nvoid JCSampleDlg::OnBnClickedButtonCall()\n{\n    //注册回调\n    Zmf_VideoCaptureAddCallback(void*pUser, zmfVideoCaptureCallback);\n    //发起呼叫\n    ...\n}\n')])])]),t("p",[e._v("注册后，每帧采集的视频数据通过 ZmfVideoCaptureCallback 回调，可以处理对应的视频数据。")]),e._v(" "),t("p",[e._v("如果想移除回调，调用下面的接口")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" /** remove capture data callback\n  * @param[in] pUser     the callback user data\n  * returns 0 on succeed, otherwise failed\n  */\nint Zmf_VideoCaptureRemoveCallback (void *pUser)\n")])])]),t("p",[e._v("示例代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("void JCSampleDlg::OnBnClickedButtonEndCall()\n{\n    //移除回调\n    Zmf_VideoCaptureRemoveCallback(p);\n    //挂断通话\n    ...\n}\n")])])]),t("p",[t("strong",[e._v("解码后，渲染前处理")])]),e._v(" "),t("p",[e._v("参考如下步骤，在你的项目中实现原始视频数据功能：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("发起业务前通过 Zmf_VideoRenderAddCallback 注册视频输出回调，并在该函数中实现一个\nZmfVideoRenderCallback 类型的回调函数")])]),e._v(" "),t("li",[t("p",[e._v("成功注册后，JC SDK 会在捕捉到每个视频帧时通过回调函数回调输出的原始视频数据相对应参数")])]),e._v(" "),t("li",[t("p",[e._v("用户拿到视频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给JC SDK。")])])]),e._v(" "),t("p",[e._v("首先注册视频输出回调，在登录成功后即可调用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/**\n * add render data callback\n *\n * @param[in] pUser      the callback user data\n * @param[in] pfnCb      the callback\n *\n * @return               0 on succeed, otherwise failed.\n */\nint Zmf_VideoRenderAddCallback (void *pUser, ZmfVideoRenderCallback pfnCb);\n")])])]),t("p",[e._v("回调类型说明")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/**\n * The callback to receive video render data\n *\n * @param[in] pUser         the user data registered by Zmf_AddVideoRenderCallback\n * @param[in] renderId      video render unique name\n * @param[in] sourceType    video render source type @see ZmfVideoSourceType\n * @param[in] iAngle the image angle\n * @param[in] iMirror the image mirror type\n * @param[in] iWidth  the image width\n * @param[in] iHeight  the image height\n * @param[in] buf           I420 render data\n *\n * @return                  if process render data should return > 0, other 0\n *\n * @remarks\n *  if buf == 0 or iWidth ==0 or iHeight == 0, means the render will close,\n *  so should call Zmf_OnVideoRenderRequestRemove.\n */\n typedef int  (*ZmfVideoRenderCallback)(void* pUser, const char* renderId, int sourceType, int iAngle,\n                                  int iMirror, int* iWidth, int* iHeight, unsigned char *buf,\n                                  unsigned long timeStamp);\n")])])]),t("p",[e._v("注册后，每帧解码后的视频数据通过 ZmfVideoRenderCallback 回调，可以处理对应的视频数据。")]),e._v(" "),t("p",[e._v("示例代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('static void zmfVideoRenderCallback(void* pUser, const char* renderId, int sourceType, int iAngle,\n                                   int iMirror, int* iWidth, int* iHeight, unsigned char *buf,\n                                   unsigned long timeStamp) {\n\n   cout << "视频数据处理" << endl;\n}\nvoid JCSampleDlg::OnBnClickedButtonCall()\n{\n    //注册回调\n    Zmf_VideoRenderAddCallback(void*pUser, zmfVideoRenderCallback);\n    //发起呼叫\n    ...\n}\n')])])]),t("p",[e._v("如果想移除回调，调用下面的接口")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/**\n * remove render data callback\n *\n * @param[in] pUser      the callback user data\n * @return               0 on succeed, otherwise failed.\n */\nint Zmf_VideoRenderRemoveCallback (void *pUser)\n")])])]),t("p",[e._v("示例代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("void JCSampleDlg::OnBnClickedButtonEndCall()\n{\n    //移除回调\n    Zmf_VideoRenderRemoveCallback(p);\n    //挂断通话\n    ...\n}\n")])])]),t("h3",{attrs:{id:"自定义视频采集和渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义视频采集和渲染"}},[e._v("#")]),e._v(" 自定义视频采集和渲染")]),e._v(" "),t("p",[e._v("自定义视频采集和渲染")]),e._v(" "),t("p",[e._v("对于不支持系统标准 API 的视频采集/渲染设备，或者想利用已经采集好的 I420 或 h264\n数据，可另起采集/渲染线程，把采集/渲染数据放入\nJuphoon 对应的接口中进行后续操作。")]),e._v(" "),t("p",[e._v("参考如下步骤，在你的项目中实现自定义视频源功能：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("通过 JC SDK 提供的接口将外部设备采集/准备渲染的数据输入到 JC SDK 进行后续操作。")])]),e._v(" "),t("li",[t("p",[e._v("如果想停止外部设备采集/准备渲染的数据输入，则调用 JC SDK 提供的接口停止数据输入即可。")])])]),e._v(" "),t("p",[e._v("自定义视频采集接口如下：")]),e._v(" "),t("p",[e._v("在收到登录成功的回调后以及 Zmf_VideoInitialize 初始化成功后，把采集/准备渲染的数据通过下面的接口输入")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/**\n * The video capture data entry to ZMF\n * iImgAngle - iCamOrient equal to device rotate angle.\n * if encoder is NULL, the pixel format of bufI420 must be ZmfPixelFormatI420\n *\n * @param[in] captureId     unique name of the video capture           //标识外部采集的ID\n * @param[in] iFace         the capture face, @see ZmfVideoFaceType    //外部视频的朝向，一般取0\n * @param[in] iImgAngle     the image rotated angle (CW)               //输入的外部视频正立所需旋转角度，顺时针为正，取值范围0，90，180，270\n * @param[in] iCamAngle     the camera fixed orient                    //外部镜头固定角度，同iImgAngle，取值范围0，90，180，270\n * @param[in,out] iWidth    the image width at least align 4,\n *                          return the cropped width of bufI420.       //输入图像的宽\n * @param[in,out] iHeight   the image height at least align 4.\n *                          return the cropped height of bufI420.      //输入图像的高\n * @param[in] bufI420       the image data                             //输入图像的buffer\n * @param[in,out] encoder   the capture encoder                        //标识输入图像编码格式\n */\n void Zmf_OnVideoCapture(const char *captureId, int iFace, int iImgAngle, int iCamAngle, int *iWidth, int *iHeight, unsigned char *bufI420, ZmfVideoCaptureEncoder* encoder);\n")])])]),t("p",[e._v("示例代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('Zmf_VideoInitialize(NULL);\nvoid JCSampleDlg::OnBnClickedButtonCall()\n{\n    //输入分辨率为640*360，编码为I420无需额外旋转的图像\n    Zmf_OnVideoCapture("Test",0,0,0,640,360,buf,0);\n    //发起呼叫\n    ...\n}\n')])])]),t("p",[e._v("采集停止接口")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/**\n * tell ZMF the video capture has stopped\n *\n * @param[in] captureId     unique name of the device\n */\nvoid Zmf_OnVideoCaptureDidStop(const char *captureId);\n")])])]),t("p",[e._v("示例代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('void JCSampleDlg::OnBnClickedButtonEndCall()\n{\n    //停止采集\n    Zmf_OnVideoCaptureDidStop("Test");\n    //挂断通话\n    ...\n}\n')])])]),t("p",[e._v("如果想在视频渲染端使用自己的渲染方式，则调用下面的接口：")]),e._v(" "),t("p",[e._v("视频数据渲染接口")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/**\n * The video render data entry to ZMF\n *\n * @param[in] renderId      unique name of the video render source                //标识渲染的ID\n * @param[in] sourceType    the render source type, @see ZmfVideoSourceType       //渲染源类型，一般为0\n * @param[in] iAngle        the image rotated angle (CW)ZmfVideoCaptureCallback   //渲染正立所需角度，一般为0 取值范围0，90，180，270\n * @param[in] iMirror       the camera fixed orient                               //渲染镜像类型，一般为0\n * @param[in] iWidth        the image width                                       //渲染图像宽\n * @param[in] iHeight       the image height                                      //渲染图像高\n * @param[in] bufI420       the image data I420 buffer                            //渲染数据buffer\n */\n void Zmf_OnVideoRender(const char *renderId, int sourceType, int iAngle, int iMirror, int *iWidth, int *iHeight, unsigned char *bufI420, unsigned long timeStamp);\n")])])]),t("p",[e._v("示例代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('Zmf_VideoInitialize(NULL);\nvoid JCSampleDlg::OnBnClickedButtonCall()\n{\n    //输入分辨率为640*360，编码为I420无需额外旋转的图像\n    Zmf_OnVideoRender("Test",0,0,0,640,360,buf,0);\n    //发起呼叫\n    ...\n}\n')])])]),t("p",[e._v("渲染数据停止接口")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Zmf_OnVideoRender(const char *renderId, 0, 0, 0, 0, 0, 0, 0);\n")])])]),t("p",[e._v("示例代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('void JCSampleDlg::OnBnClickedButtonEndCall()\n{\n    //停止渲染\n    Zmf_OnVideoRender("Test", 0, 0, 0, 0, 0, 0, 0);\n    //挂断通话\n    ...\n}\n')])])]),t("h2",{attrs:{id:"视频渲染管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频渲染管理"}},[e._v("#")]),e._v(" 视频渲染管理")]),e._v(" "),t("p",[e._v("渲染管理主要使用到 JCMediaDeviceVideoCanvas 类中的接口。包括更新视频渲染标识、暂停渲染以及恢复渲染。")]),e._v(" "),t("h3",{attrs:{id:"更新视频渲染标识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新视频渲染标识"}},[e._v("#")]),e._v(" 更新视频渲染标识")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html#a0f93d017306b5920f3fdccc00e2074f8",target:"_blank",rel:"noopener noreferrer"}},[e._v("replace"),t("OutboundLink")],1),e._v("\n接口更新视频渲染标识")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("JCManager::shared()->mediaDeviceCanvas->replace(videoSource);\n")])])]),t("h3",{attrs:{id:"暂停渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂停渲染"}},[e._v("#")]),e._v(" 暂停渲染")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html#a799b848e69d56d866ec6ff716882a455",target:"_blank",rel:"noopener noreferrer"}},[e._v("pause"),t("OutboundLink")],1),e._v("\n接口暂停画面的渲染")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("JCManager::shared()->mediaDeviceCanvas->pause();\n")])])]),t("h3",{attrs:{id:"恢复渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复渲染"}},[e._v("#")]),e._v(" 恢复渲染")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html#ac49c80c2eda55f0225f12c3572b938da",target:"_blank",rel:"noopener noreferrer"}},[e._v("resume"),t("OutboundLink")],1),e._v("\n接口恢复已暂停的视频渲染")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("JCManager::shared()->mediaDeviceCanvas->resume();\n")])])]),t("h2",{attrs:{id:"视频设备管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频设备管理"}},[e._v("#")]),e._v(" 视频设备管理")]),e._v(" "),t("p",[e._v("视频设备管理主要用到 JCMediaDevice 类中的方法，具体如下：")]),e._v(" "),t("h3",{attrs:{id:"开启-关闭摄像头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-关闭摄像头"}},[e._v("#")]),e._v(" 开启/关闭摄像头")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a8980c035521b9c5c20afa34fad23293e",target:"_blank",rel:"noopener noreferrer"}},[e._v("startCamera"),t("OutboundLink")],1),e._v("\n接口开启摄像头")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a201fd2352117c7fbdc03ef10837fc701",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopCamera"),t("OutboundLink")],1),e._v("\n接口关闭摄像头")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//开启摄像头\nJCManager::shared()->mediaDevice->startCamera();\n//关闭摄像头\nJCManager::shared()->mediaDevice->stopCamera();\n")])])]),t("h3",{attrs:{id:"获取当前使用的摄像头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取当前使用的摄像头"}},[e._v("#")]),e._v(" 获取当前使用的摄像头")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#acb427f7249ef1e384b1a910c90c31190",target:"_blank",rel:"noopener noreferrer"}},[e._v("getCamera"),t("OutboundLink")],1),e._v("\n接口获取当前使用的摄像头")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("JCMediaDeviceCamera camera = JCManager::shared()->mediaDevice->getCamera();\n")])])]),t("h3",{attrs:{id:"获取窗口列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取窗口列表"}},[e._v("#")]),e._v(" 获取窗口列表")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#aec338b2eea709884722f7c426c924653",target:"_blank",rel:"noopener noreferrer"}},[e._v("getWindows"),t("OutboundLink")],1),e._v("\n接口获取窗口列表")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("std::list<JCMediaDeviceWindow>* windows = JCManager::shared()->mediaDevice->getWindows();\n")])])]),t("h3",{attrs:{id:"获取桌面列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取桌面列表"}},[e._v("#")]),e._v(" 获取桌面列表")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a8cbda493ef14c4b97ff022948bb15bf1",target:"_blank",rel:"noopener noreferrer"}},[e._v("getDesktops"),t("OutboundLink")],1),e._v("\n接口获取桌面列表")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("std::list<JCMediaDeviceWindow>* windows = JCManager::shared()->mediaDevice->getDesktops();\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);