(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{471:function(a,n,e){"use strict";e.r(n);var t=e(43),i=Object(t.a)({},(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"音频管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#音频管理"}},[a._v("#")]),a._v(" 音频管理")]),a._v(" "),e("h2",{attrs:{id:"音频数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#音频数据管理"}},[a._v("#")]),a._v(" 音频数据管理")]),a._v(" "),e("h3",{attrs:{id:"原始音频数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原始音频数据"}},[a._v("#")]),a._v(" 原始音频数据")]),a._v(" "),e("p",[a._v("在音频传输过程中，可以对采集的音频数据进行处理，以获取不同的播放效果。有两个时机可以进行处理。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("在音频采集之后，编码之前进行处理；")])]),a._v(" "),e("li",[e("p",[a._v("在传输完成，解码后播放前进行处理。")])])]),a._v(" "),e("p",[a._v("具体如下：")]),a._v(" "),e("ul",[e("li",[a._v("音频采集之后，编码之前的处理")])]),a._v(" "),e("p",[a._v("参考如下步骤，在你的项目中实现原始音频数据功能：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("发起业务前通过 Zmf_AudioInputAddCallback 注册音频采集回调，并在该函数中实现一个\nZmfAudioInputCallback 类型的回调函数")])]),a._v(" "),e("li",[e("p",[a._v("成功注册后，JC SDK 会在捕捉到音频数据时通过回调函数回调采集到的原始音频数据相对应参数")])])]),a._v(" "),e("p",[a._v("3.用户拿到音频数据后，根据场景需要自行在回调函数中进行参数处理，处理后数据通过该回调函数返回给JC SDK。")]),a._v(" "),e("p",[a._v("首先注册音频输入回调")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * add mic data callback\n *\n * @param[in] pUser         the callback user data\n * @param[in] pfnCb         the callback\n *\n * @return                  0 on succeed, otherwise failed.\n */\nint Zmf_AudioInputAddCallback(void *pUser, ZmfAudioInputCallback pfnCb);\n")])])]),e("p",[a._v("回调类型说明:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/** the callback to receive audio input data\n *\n * @param[in] pUser  the user data registered by Zmf_AddAudioInputCallback\n * @param[in] inputId       unique name of the audio input\n * @param[in] iSampleRateHz  the sample rating of the pcm data\n * @param[in] iChannels     the channel number of the pcm data\n * @param[in] buf           the pcm data\n * @param[in] len           the pcm data length\n * @param[in,out] micLevel\n * @param[in] playDelayMS   the play delay ms\n * @param[in] recDelayMS    the record dely ms\n * @param[in] clockDrift    the clock drift ms\n */\ntypedef void (*ZmfAudioInputCallback)(void* pUser, const char* inputId, int iSampleRateHz, int iChannels,\n                                   unsigned char *buf, int len, int *micLevel,\n                                   int playDelayMS, int recDelayMS, int clockDrift);\n")])])]),e("p",[a._v("回调注册后，当有音频数据采集进来时，可以对音频数据进行处理。")]),a._v(" "),e("p",[a._v("示例代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('static void zmfAudioInputCallback(void* pUser, const char* inputId, int iSampleRateHz, int iChannels,\n                                   unsigned char *buf, int len, int *micLevel,\n                                   int playDelayMS, int recDelayMS, int clockDrift) {\n\n    cout << "音频数据处理" << endl;\n}\nvoid JCSampleDlg::OnBnClickedButtonCall()\n{\n    //注册回调\n    Zmf_AudioInputAddCallback(void*pUser, zmfAudioInputCallback);\n    //发起呼叫\n    ...\n}\n')])])]),e("p",[a._v("如果想移除回调，调用下面的接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * remove mic data callback\n *\n * @param[in]  pUser        the callback user data\n *\n * @return                  0 on succeed, otherwise failed.\n */\nint Zmf_AudioInputRemoveCallback(void *pUser);\n")])])]),e("p",[a._v("示例代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("void JCSampleDlg::OnBnClickedButtonEndCall()\n{\n    //移除回调\n    Zmf_AudioInputRemoveCallback(p);\n    //挂断通话\n    ...\n}\n")])])]),e("ul",[e("li",[a._v("解码后播放前的处理")])]),a._v(" "),e("p",[a._v("参考如下步骤，在你的项目中实现原始音频数据处理功能：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("发起业务前通过 Zmf_AudioOutputAddCallback 注册音频输出回调，并在该函数中实现一个\nZmfAudioOutputCallback 类型的回调函数。")])]),a._v(" "),e("li",[e("p",[a._v("成功注册后，JC SDK 会在捕捉到音频数据时通过回调函数回调采集到的原始音频数据。")])]),a._v(" "),e("li",[e("p",[a._v("用户拿到音频数据后，根据场景需要自行在回调函数中进行音频数据的处理，处理后的数据通过该回调函数返回给 JC SDK。")])])]),a._v(" "),e("p",[a._v("首先注册音频输出回调")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * add fill speak callback\n *\n * @param[in]  pUser        the callback user data\n *\n * @return                  0 on succeed, otherwise failed.\n */\nint  Zmf_AudioOutputAddCallback     (void *pUser, ZmfAudioOutputCallback pfnCb);\n")])])]),e("p",[a._v("回调类型说明")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/** the callback to get audio output buffer, when Zmf_OnAudioOutput() invoked.\n *\n * @param[in] pUser          the callback user data\n * @param[in] outputId       unique name of the audio output\n * @param[in] iSampleRateHz  the sample rating of the pcm data\n * @param[in] iChannels      the channel number of the pcm data\n * @param[in] buf            the pcm data\n * @param[in] len            the pcm data length\n */\n\n/** the callback to fill audio output buffer\n * @param[in] pUser  the user data registered by Zmf_AudioOutputAddCallback\n */\ntypedef int  (*ZmfAudioOutputCallback)(void* pUser, const char* outputId, int iSampleRateHz, int iChannels,\n                                     unsigned char *buf, int len);\n")])])]),e("p",[a._v("回调注册后，当有解码后的音频数据进来时，可以进行对应的音频数据处理。")]),a._v(" "),e("p",[a._v("示例代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('static void zmfAudioOutputCallback(void* pUser, const char* outputId, int iSampleRateHz, int iChannels,\n                                     unsigned char *buf, int len) {\n\n    cout << "音频数据处理" << endl;\n}\nvoid JCSampleDlg::OnBnClickedButtonCall()\n{\n    //注册回调\n    Zmf_AudioOutputAddCallback(void*pUser, zmfAudioOutputCallback);\n    //发起呼叫\n    ...\n}\n')])])]),e("p",[a._v("如果想移除回调，调用下面的接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * remove fill speak callback\n *\n * @param[in]  pUser        the callback user data\n *\n * @return                  0 on succeed, otherwise failed.\n */\nint  Zmf_AudioOutputRemoveCallback  (void *pUser);\n")])])]),e("p",[a._v("取消注册回调")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("void JCSampleDlg::OnBnClickedButtonEndCall()\n{\n    //取消注册回调\n    Zmf_AudioOutputRemoveCallback(p);\n    //挂断通话\n    ...\n}\n")])])]),e("hr"),a._v(" "),e("h3",{attrs:{id:"自定义音频采集和渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义音频采集和渲染"}},[a._v("#")]),a._v(" 自定义音频采集和渲染")]),a._v(" "),e("p",[a._v("在实时音频传输过程中，JC SDK 会启动默认的音频模块进行音频采集。但是对于不支持系统标准 API\n的音频设备，或者想利用自己已经拥有的音频模块进行音频的采集和传输前处理时，可另起采集/播放线程，把自己采集/需要播放的音频数据放入\nJuphoon 对应的接口中进行后续操作。")]),a._v(" "),e("p",[a._v("参考如下步骤，在你的项目中实现自定义音频源功能：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("通过 JC SDK 提供的接口将外部设备采集/自定义的播放数据输入到 JC SDK 进行后续操作。")])]),a._v(" "),e("li",[e("p",[a._v("如果想停止外部设备采集/自定义的播放数据的输入，则调用 JC SDK 提供的接口停止数据输入即可。")])])]),a._v(" "),e("p",[a._v("自定义音频采集接口如下（在收到登录成功的回调后调用）：")]),a._v(" "),e("p",[a._v("若需要使用自己的音视频设备并且 Zmf_AudioInitialize 初始化成功，在下面的回调函数中操作音频设备；")]),a._v(" "),e("p",[a._v("音频设备初始化接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * @brief Initialize Audio module of ZMF(Zero Media Framework).\n * @param  applicationContext For Windows, it can be the handle of the window,\n *                            The notification event will be sent to that window.\n *                            Or it can be callback function of type ZmfEventListenCallback.\n *                            For Android, it must be the Context.\n *                            For iOS, it should be NULL and is ignored.\n * @return                    0 on succeed, otherwise failed.\n */\nint Zmf_AudioInitialize(void *applicationContext);\n")])])]),e("p",[a._v("采集数据输入接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * The audio input data entry to ZMF, each callback will obtain the data.\n * Multiple data will mix in the callback of the jssmme Engine,\n * and the first input will be main channel.\n *\n * @param[in] inputId       unique name of the audio input       //输入设备id\n * @param[in] sampleRateHz  the sample rating of the pcm data    //外部采样率 取值范围：8000，16000，32000，44100，48000取决于外部\n * @param[in] iChannels     the channel number of the pcm data   //通道数量 取值范围：1或2\n * @param[in] buf           the pcm data                         //外部采集数据源\n * @param[in] len           the pcm data length                  //对应数据长度\n * @param[in,out] micLevel                                       //音量，取值范围：0-100，会根据实际输入音频返回音量值\n * @param[in] playDelayMS                                        //播放时延 通常取0\n * @param[in] recDelayMS                                         //采集时延 通常取0\n * @param[in] clockDrift                                         //时钟漂移 通常取0\n *\n */\n void Zmf_OnAudioInput (const char *inputId, int sampleRateHz, int iChannels, unsigned char *buf, int len, int *micLevel, int playDelayMS, int recDelayMS, int clockDrift);\n")])])]),e("p",[a._v("示例代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('//初始化音频设备\nZmf_AudioInitialize(NULL);\nvoid JCSampleDlg::OnBnClickedButtonCall()\n{\n    // 输入长度为length，采样频率16000，通道数为1的pcm数据片段\n    Zmf_OnAudioInput("Test",16000,1,pcmdata,length,0,0,0,0);\n    //发起呼叫\n    ...\n}\n')])])]),e("p",[a._v("Note")]),a._v(" "),e("p",[a._v("此接口为将自己采集的音频数据输入到 JC SDK。")]),a._v(" "),e("p",[a._v("采集停止接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * tell ZMF the audio input has stopped\n *\n * @param[in] inputId       unique name of the device  //输入设备id\n */\nvoid Zmf_OnAudioInputDidStop(const char *inputId);\n")])])]),e("p",[a._v("示例代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('void JCSampleDlg::OnBnClickedButtonEndCall()\n{\n    //停止采集\n    Zmf_OnAudioInputDidStop("Test");\n    //挂断通话\n    ...\n}\n')])])]),e("p",[a._v("如果想在音频输出端使用自定义的播放数据，则调用下面的接口：")]),a._v(" "),e("p",[a._v("播放数据输入接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * The outlet which audio output can get data from.\n *\n * @param[in] outputId      unique name of the audio output       //输出设备id\n * @param[in] sampleRateHz  the sample rating of the pcm data     //采样率  取值范围：8000，16000，32000，44100，48000取决于外部\n * @param[in] iChannels     the channel number of the pcm data    //通道数量 取值范围：1或2\n * @param[in] buf           the pcm data to be filled             //外部采集数据源\n * @param[in] len           the pcm data length                   //对应数据buf长度\n */\n void Zmf_OnAudioOutput (const char *outputId, int sampleRateHz, int iChannels, unsigned char *buf, int len);\n")])])]),e("p",[a._v("示例代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('//初始化音频设备\nZmf_AudioInitialize(NULL);\nvoid JCSampleDlg::OnBnClickedButtonCall()\n{\n    // 输入长度为length，采样频率16000，通道数为1的pcm数据片段\n    Zmf_OnAudioOutput("Test",16000,1,buf,length);\n    //发起呼叫\n    ...\n}\n')])])]),e("p",[a._v("Note")]),a._v(" "),e("p",[a._v("此接口为将自定义音频输出数据输入到 JC SDK。")]),a._v(" "),e("p",[a._v("播放数据停止接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/**\n * tell ZMF the audio output has stopped\n *\n * @param[in] outputId      unique name of the device    //输出设备id\n */\nvoid Zmf_OnAudioOutputDidStop(const char *outputId);\n")])])]),e("p",[a._v("示例代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('void JCSampleDlg::OnBnClickedButtonEndCall()\n{\n    //停止播放数据\n    Zmf_OnAudioOutputDidStop("Test");\n    //挂断通话\n    ...\n}\n')])])]),e("p",[a._v("Note")]),a._v(" "),e("p",[a._v("在自定义音频采集场景中，开发者需要自行管理音频数据的采集。在自定义音频渲染场景中，开发者需要自行管理音频数据的播放。")]),a._v(" "),e("h2",{attrs:{id:"音频设备管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#音频设备管理"}},[a._v("#")]),a._v(" 音频设备管理")]),a._v(" "),e("p",[a._v("音频设备管理主要用到 JCMediaDevice 类中的方法，包括获取音频输入、输出设备列表、开启/关闭音频设备。")]),a._v(" "),e("h3",{attrs:{id:"获取音频输入设备列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取音频输入设备列表"}},[a._v("#")]),a._v(" 获取音频输入设备列表")]),a._v(" "),e("p",[a._v("调用\n"),e("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#ab177fc54d666d727ece18588268fd203",target:"_blank",rel:"noopener noreferrer"}},[a._v("getAudioInputs"),e("OutboundLink")],1),a._v("\n接口获取音频输入设备列表")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("std::list<JCMediaDeviceAudio>* audios = JCManager::shared()->mediaDevice->getAudioInputs();\n")])])]),e("h3",{attrs:{id:"获取音频输出设备列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取音频输出设备列表"}},[a._v("#")]),a._v(" 获取音频输出设备列表")]),a._v(" "),e("p",[a._v("调用\n"),e("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a72ba20f63202cbc61bf2cfc8170045b3",target:"_blank",rel:"noopener noreferrer"}},[a._v("getAudioOutputs"),e("OutboundLink")],1),a._v("\n接口获取音频输出设备列表")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("std::list<JCMediaDeviceAudio>* audios = JCManager::shared()->mediaDevice->getAudioOutputs();\n")])])]),e("h3",{attrs:{id:"开启-关闭音频设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-关闭音频设备"}},[a._v("#")]),a._v(" 开启/关闭音频设备")]),a._v(" "),e("p",[a._v("调用\n"),e("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a3e5dbd693aa7d245377e78cb78902018",target:"_blank",rel:"noopener noreferrer"}},[a._v("startAudio"),e("OutboundLink")],1),a._v("\n接口开启音频设备")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("JCManager::shared()->mediaDevice->startAudio();\n")])])]),e("p",[a._v("调用\n"),e("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a007283dc73188577ae32b50849d3d3fd",target:"_blank",rel:"noopener noreferrer"}},[a._v("stopAudio"),e("OutboundLink")],1),a._v("\n接口关闭音频设备")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("JCManager::shared()->mediaDevice->stopAudio();\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);