(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{312:function(e,a,n){e.exports=n.p+"assets/img/multivideoworkflow.85fcfb5a.png"},456:function(e,a,n){"use strict";n.r(a);var t=n(43),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实现多方视频通话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现多方视频通话"}},[e._v("#")]),e._v(" 实现多方视频通话")]),e._v(" "),t("p",[e._v("本章介绍如何实现多方视频通话，多方视频通话的 API 调用时序见下图：")]),e._v(" "),t("p",[t("img",{attrs:{src:n(312),alt:"../../../../_images/multivideoworkflow.png"}})]),e._v(" "),t("h2",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),t("p",[e._v("首先继承\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelCallback"),t("OutboundLink")],1),e._v("\n对象和\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceCallback"),t("OutboundLink")],1),e._v("\n对象，并实现这两个对象中的纯虚函数。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("class JCManager : public JCMediaDeviceCallback, public JCMediaChannelCallback\n{\npublic:\n\n    //自身状态变化回调\n    virtual void onMediaChannelStateChange(JCMediaChannelState state, JCMediaChannelState oldState);\n    //频道属性变化回调\n    virtual void onMediaChannelPropertyChange(JCMediaChannelPropChangeParam propChangeParam);\n    //加入频道结果回调\n    virtual void onJoin(bool result, JCMediaChannelReason reason, const char* channelId);\n    //离开频道结果回调\n    virtual void onLeave(JCMediaChannelReason reason, const char* channelId);\n    //解散频道结果回调\n    virtual void onStop(bool result, JCMediaChannelReason reason);\n    //查询频道结果回调\n    virtual void onQuery(int operationId, bool result, JCMediaChannelReason reason, JCMediaChannelQueryInfo* queryInfo);\n    //新成员加入回调\n    virtual void onParticipantJoin(JCMediaChannelParticipant* participant);\n    //成员离开回调\n    virtual void onParticipantLeft(JCMediaChannelParticipant* participant);\n    //成员更新回调\n    virtual void onParticipantUpdate(JCMediaChannelParticipant* participant, JCMediaChannelParticipant::ChangeParam changeParam);\n    //频道中收到消息回调\n    virtual void onMessageReceive(const char* type, const char* content, const char* fromUserId);\n    //邀请sip成员结果回调\n    virtual void onInviteSipUserResult(int operationId, bool result, JCMediaChannelReason reason);\n    //成员声音变化\n    virtual void onParticipantVolumeChange(JCMediaChannelParticipant* participant);\n\npublic:\n    //媒体设备对象\n    JCMediaDevice* mediaDevice;\n    //媒体通道对象\n    JCMediaChannel* mediaChannel;\n};\n")])])]),t("p",[e._v("然后调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_device_8h.html#a96a10766264f3c12af531b70cb9c9749",target:"_blank",rel:"noopener noreferrer"}},[e._v("createJCMediaDevice"),t("OutboundLink")],1),e._v("\n和\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_8h.html#acaca886fc345f798056ff2b9c2ee11ac",target:"_blank",rel:"noopener noreferrer"}},[e._v("createJCMediaChannel"),t("OutboundLink")],1),e._v("\n以初始化多方视频通话需要的模块：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//初始化\nbool JCManager::initialize()\n{\n    //1. 媒体类\n    mediaDevice = createJCMediaDevice(client, this);\n    //1. 媒体通道类\n    mediaChannel = createJCMediaChannel(client, mediaDevice, this);\n    return true;\n}\n")])])]),t("p",[e._v("其中：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("JCMediaDevice create 方法中的 this 为\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceCallback"),t("OutboundLink")],1),e._v("\n的派生类，该类于将媒体设备相关的事件通知给上层。因此需要先创建 JCMediaDeviceCallback\n的派生类，然后在该派生类中实现 JCMediaDeviceCallback\n的纯虚函数。")])]),e._v(" "),t("li",[t("p",[e._v("JCMediaChannel create 方法中的 this 为\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelCallback"),t("OutboundLink")],1),e._v("\n的派生类，该类用于将频道中的相关事件通知给上层。因此需要先创建 JCMediaChannelCallback\n的派生类，然后在该派生类中实现 JCMediaChannelCallback\n的纯虚函数。")])])]),e._v(" "),t("p",[e._v("Note")]),e._v(" "),t("p",[e._v("回调中的对象只能在该回调中使用，不能保存，上层可通过对应的方法获取通话对象。")]),e._v(" "),t("h2",{attrs:{id:"加入频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加入频道"}},[e._v("#")]),e._v(" 加入频道")]),e._v(" "),t("p",[e._v("JC SDK 默认不上传本地音频流，因此如果需要进入会议中就能听到彼此的声音，需要在加入频道前预打开音频流上传的标识:")]),e._v(" "),t("p",[e._v("1. 调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a2b08d87b38fe2fd7a394e2786241cc4c",target:"_blank",rel:"noopener noreferrer"}},[e._v("enableUploadAudioStream"),t("OutboundLink")],1),e._v("\n开启音频流。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 开启音频流\nJCManager::shared()->mediaChannel->enableUploadAudioStream(true);\n")])])]),t("p",[e._v("Note")]),e._v(" "),t("p",[e._v("该接口可以在加入频道之前调用，也可以在加入频道之后调用。两者区别具体如下。")]),e._v(" "),t("p",[e._v("如果在加入频道前调用，只是打开或关闭“上传音频”的标识，但不会发送数据，当加入频道成功时会根据 enableUploadAudioStream\n设定的值来确定是否上传音频数据。同时，频道中的其他成员会收到该成员“是否上传音频“的状态变化回调(onParticipantUpdate)。")]),e._v(" "),t("p",[e._v("如果在加入频道后调用，则会开启或者关闭发送本地音频流数据，服务器也会根据 enableUploadAudioStream\n设定的值来确定是否上传音频数据。同时，频道中的其他成员会收到该成员“是否上传音频“的状态变化回调(onParticipantUpdate)。")]),e._v(" "),t("p",[e._v("此外，此方法还可以实现开启或关闭静音的功能。当 enable 值为 false\n，将会停止发送本地音频流，此时您可以听到其他成员的声音，但是其他成员将听不到您的声音，从而实现静音功能。")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#acfdb1da52955cf8b01d95527eb28890b",target:"_blank",rel:"noopener noreferrer"}},[e._v("join"),t("OutboundLink")],1),e._v("\n方法加入频道。你需要在该方法中传入如下参数：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道\nUri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。")])]),e._v(" "),t("li",[t("p",[e._v("joinParam：加入参数，没有则填 NULL。详见\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_join_param.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelJoinParam"),t("OutboundLink")],1),e._v("\n对象。")]),e._v(" "),t("p",[e._v('// 加入频道\nJCManager::shared()->mediaChannel->join("频道 ID", NULL);')])])]),e._v(" "),t("p",[e._v("3. 加入频道后会收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a430bd78b28e189ee3c9564ddb7db213d",target:"_blank",rel:"noopener noreferrer"}},[e._v("onJoin"),t("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 加入频道结果回调\nvoid JCManager::onJoin(bool result, JCMediaChannelReason reason, const char* channelId)\n{\n    if (result) {\n    //加入成功的逻辑\n    ...\n    } else {\n    //加入失败的逻辑\n    ...\n    }\n}\n")])])]),t("h2",{attrs:{id:"创建本地视频画面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建本地视频画面"}},[e._v("#")]),e._v(" 创建本地视频画面")]),e._v(" "),t("p",[e._v("1. 加入频道后，调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannel"),t("OutboundLink")],1),e._v("\n中的\n"),t("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#afeb3c17dc9d0827fe27fa189cd0a5c9e",target:"_blank",rel:"noopener noreferrer"}},[e._v("getSelfParticipant"),t("OutboundLink")],1),e._v("\n方法获取频道内自身对象。该方法返回\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 1. 获得频道成员自身对象\nJCMediaChannelParticipant* participant = JCManager::shared()->mediaChannel->getSelfParticipant();\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n类中的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a238fccab8cc09e1ef843a43aad4ffac9",target:"_blank",rel:"noopener noreferrer"}},[e._v("startVideo"),t("OutboundLink")],1),e._v("\n方法打开本地视频预览。该方法会返回一个\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceVideoCanvas"),t("OutboundLink")],1),e._v("\n对象，该对象用于将视频渲染到画布上，并管理渲染的方式。（调用此方法会打开摄像头）")])]),e._v(" "),t("p",[e._v("示例代码:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 2. 打开本地视频预览\nJCMediaDeviceVideoCanvas* mConfSelfCanvas;\nif (mediaChannel->getUploadLocalVideo() && mConfSelfCanvas == NULL)\n            {\n                    if (strlen(JCManager::shared()->mediaDevice->getCamera().cameraId) > 0)\n                    {\n            //创建本地视频画面\n                            mConfSelfCanvas = mediaChannel->getSelfParticipant()->startVideo(\n                                            mWndConfSelfVideo.m_hWnd,\n                                            JCMediaDeviceRenderModeFullContent,\n                                            JCMediaChannelPictureSizeLarge);\n\n                    }\n            }\n")])])]),t("h2",{attrs:{id:"创建远端视频画面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建远端视频画面"}},[e._v("#")]),e._v(" 创建远端视频画面")]),e._v(" "),t("p",[e._v("视频通话中，通常需要看到其他用户。通过\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannel"),t("OutboundLink")],1),e._v("\n中的 participants 属性获取频道内所有成员对象。")]),e._v(" "),t("p",[e._v("然后调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n类中的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a238fccab8cc09e1ef843a43aad4ffac9",target:"_blank",rel:"noopener noreferrer"}},[e._v("startVideo"),t("OutboundLink")],1),e._v("\n方法设置远端用户的视图。调用该方法会返回一个\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_video_canvas.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceVideoCanvas"),t("OutboundLink")],1),e._v("\n对象，该对象用于将视频渲染到画布上，并管理渲染的方式。")]),e._v(" "),t("p",[e._v("示例代码:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//取频道内所有成员对象\nJCMediaDeviceVideoCanvas* mConfOtherCanvas;\nstd::list<JCMediaChannelParticipant*>* participants = NULL;\nJCMediaChannelParticipant* other = NULL;\nparticipants = mediaChannel->getParticipants();\nfor (JCMediaChannelParticipant* participant : *participants) {\n    if (!participant->isSelf())\n    {\n        other = participant;\n        break;\n    }\n}\nif (other != NULL && other->isVideo())\n{\n    if (mConfOtherCanvas == NULL)\n    {\n        //创建远端画面\n        mConfOtherCanvas = participant->startVideo(\n                        mWndConfOtherVideo.m_hWnd,\n                        JCMediaDeviceRenderModeFullContent,\n                        JCMediaChannelPictureSizeLarge);\n    }\n}\n")])])]),t("h2",{attrs:{id:"离开频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离开频道"}},[e._v("#")]),e._v(" 离开频道")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a93c19137044fec1568f73f1f6dbfee84",target:"_blank",rel:"noopener noreferrer"}},[e._v("leave"),t("OutboundLink")],1),e._v("\n方法离开当前频道。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("JCManager::shared()->mediaChannel->leave();\n")])])]),t("p",[e._v("离开频道后，自身收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLeave"),t("OutboundLink")],1),e._v("\n回调，其他成员同时收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a5888058878f3aaa382b3ede94228a6e8",target:"_blank",rel:"noopener noreferrer"}},[e._v("onParticipantLeft"),t("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 离开频道回调\nvoid JCManager::onLeave(JCMediaChannelReason reason, const char* channelId);\n{\n    //离开频道的逻辑\n}\n")])])]),t("h2",{attrs:{id:"销毁本地和远端视频画面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#销毁本地和远端视频画面"}},[e._v("#")]),e._v(" 销毁本地和远端视频画面")]),e._v(" "),t("p",[e._v("在视频挂断后，调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n里的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a5076a035465e7f5c307679a6bf60fb8c",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopVideo"),t("OutboundLink")],1),e._v("\n销毁本地和远端视频画面。")]),e._v(" "),t("p",[e._v("示例代码:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("if (!mediaChannel->getUploadLocalVideo() && mConfSelfCanvas != NULL)\n{\n    //销毁本地视频画面\n    mediaChannel->getSelfParticipant()->stopVideo();\n    mConfSelfCanvas = NULL;\n    mWndConfSelfVideo.Invalidate();\n}\nif (mConfOtherCanvas != NULL)\n{\n    for (JCMediaChannelParticipant* participant : *participants)\n    {\n        if (!participant->isSelf())\n        {\n            //销毁远端视频画面\n            participant->stopVideo();\n        }\n    }\n    mConfOtherCanvas = NULL;\n    mWndConfOtherVideo.Invalidate();\n}\n")])])]),t("h2",{attrs:{id:"解散频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解散频道"}},[e._v("#")]),e._v(" 解散频道")]),e._v(" "),t("p",[e._v("如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 结束频道\nJCManager::shared()->mediaChannel->stop();\n")])])]),t("p",[e._v("解散频道后，发起结束的成员收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a61a1d5a81563d34f80e70541a114a74a",target:"_blank",rel:"noopener noreferrer"}},[e._v("onStop"),t("OutboundLink")],1),e._v("\n回调，其他成员同时收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLeave"),t("OutboundLink")],1),e._v("\n回调。 解散失败原因枚举值请参考\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_constants_8h.html#a24a2154e4bb2db63c75b31cd2b021fc3",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelReason"),t("OutboundLink")],1),e._v("\n。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("void JCManager::onStop(bool result, JCMediaChannelReason reason)\n{\n    //结束频道的处理逻辑\n}\n")])])]),t("p",[e._v("解散频道后，同样需要调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n里的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_participant.html#a5076a035465e7f5c307679a6bf60fb8c",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopVideo"),t("OutboundLink")],1),e._v("\n销毁本地和远端视频画面。")]),e._v(" "),t("p",[e._v("至此，您已经完成基础的多方视频通话功能。")])])}),[],!1,null,null,null);a.default=r.exports}}]);