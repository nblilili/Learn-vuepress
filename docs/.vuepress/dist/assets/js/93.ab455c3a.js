(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{317:function(e,a,n){e.exports=n.p+"assets/img/multiaudioworkflow.8b56096a.png"},464:function(e,a,n){"use strict";n.r(a);var r=n(43),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"实现多方语音通话"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现多方语音通话"}},[e._v("#")]),e._v(" 实现多方语音通话")]),e._v(" "),r("p",[e._v("本章将介绍如何实现多方语音通话，多方语音通话的 API 调用时序见下图：")]),e._v(" "),r("p",[r("img",{attrs:{src:n(317),alt:"../../../../_images/multiaudioworkflow.png"}})]),e._v(" "),r("h2",{attrs:{id:"初始化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),r("p",[e._v("首先继承\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelCallback"),r("OutboundLink")],1),e._v("\n对象和\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceCallback"),r("OutboundLink")],1),e._v("\n对象，并实现这两个对象中的纯虚函数。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("class JCManager : public JCMediaDeviceCallback, public JCMediaChannelCallback\n{\npublic:\n\n    //自身状态变化回调\n    virtual void onMediaChannelStateChange(JCMediaChannelState state, JCMediaChannelState oldState);\n    //频道属性变化回调\n    virtual void onMediaChannelPropertyChange(JCMediaChannelPropChangeParam propChangeParam);\n    //加入频道结果回调\n    virtual void onJoin(bool result, JCMediaChannelReason reason, const char* channelId);\n    //离开频道结果回调\n    virtual void onLeave(JCMediaChannelReason reason, const char* channelId);\n    //解散频道结果回调\n    virtual void onStop(bool result, JCMediaChannelReason reason);\n    //查询频道结果回调\n    virtual void onQuery(int operationId, bool result, JCMediaChannelReason reason, JCMediaChannelQueryInfo* queryInfo);\n    //新成员加入回调\n    virtual void onParticipantJoin(JCMediaChannelParticipant* participant);\n    //成员离开回调\n    virtual void onParticipantLeft(JCMediaChannelParticipant* participant);\n    //成员更新回调\n    virtual void onParticipantUpdate(JCMediaChannelParticipant* participant, JCMediaChannelParticipant::ChangeParam changeParam);\n    //频道中收到消息回调\n    virtual void onMessageReceive(const char* type, const char* content, const char* fromUserId);\n    //邀请sip成员结果回调\n    virtual void onInviteSipUserResult(int operationId, bool result, JCMediaChannelReason reason);\n    //成员声音变化\n    virtual void onParticipantVolumeChange(JCMediaChannelParticipant* participant);\n\npublic:\n    //媒体设备对象\n    JCMediaDevice* mediaDevice;\n    //媒体通道对象\n    JCMediaChannel* mediaChannel;\n};\n")])])]),r("p",[e._v("然后调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_device_8h.html#a96a10766264f3c12af531b70cb9c9749",target:"_blank",rel:"noopener noreferrer"}},[e._v("createJCMediaDevice"),r("OutboundLink")],1),e._v("\n和\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_8h.html#acaca886fc345f798056ff2b9c2ee11ac",target:"_blank",rel:"noopener noreferrer"}},[e._v("createJCMediaChannel"),r("OutboundLink")],1),e._v("\n以初始化多方视频通话需要的模块：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("//初始化\nbool JCManager::initialize()\n{\n    //1. 媒体类\n    mediaDevice = createJCMediaDevice(client, this);\n    //1. 媒体通道类\n    mediaChannel = createJCMediaChannel(client, mediaDevice, this);\n    return true;\n}\n")])])]),r("p",[e._v("其中：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("JCMediaDevice create 方法中的 this 为\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceCallback"),r("OutboundLink")],1),e._v("\n的派生类，该类于将媒体设备相关的事件通知给上层。因此需要先创建 JCMediaDeviceCallback\n的派生类，然后在该派生类中实现 JCMediaDeviceCallback\n的纯虚函数。")])]),e._v(" "),r("li",[r("p",[e._v("JCMediaChannel create 方法中的 this 为\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelCallback"),r("OutboundLink")],1),e._v("\n的派生类，该类用于将频道中的相关事件通知给上层。因此需要先创建 JCMediaChannelCallback\n的派生类，然后在该派生类中实现 JCMediaChannelCallback\n的纯虚函数。")])])]),e._v(" "),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("回调中的对象只能在该回调中使用，不能保存，上层可通过对应的方法获取通话对象。")]),e._v(" "),r("h2",{attrs:{id:"加入频道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加入频道"}},[e._v("#")]),e._v(" 加入频道")]),e._v(" "),r("p",[e._v("JC SDK 默认不上传本地音频流，因此如果需要进入会议中就能听到彼此的声音，需要在加入频道前预打开音频流上传的标识:")]),e._v(" "),r("p",[e._v("1. 调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a2b08d87b38fe2fd7a394e2786241cc4c",target:"_blank",rel:"noopener noreferrer"}},[e._v("enableUploadAudioStream"),r("OutboundLink")],1),e._v("\n开启音频流。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("// 开启音频流\nJCManager::shared()->mediaChannel->enableUploadAudioStream(true);\n")])])]),r("p",[e._v("Note")]),e._v(" "),r("p",[e._v("该接口可以在加入频道之前调用，也可以在加入频道之后调用。两者区别具体如下。")]),e._v(" "),r("p",[e._v("如果在加入频道前调用，只是打开或关闭“上传音频”的标识，但不会发送数据，当加入频道成功时会根据 enableUploadAudioStream\n设定的值来确定是否上传音频数据。同时，频道中的其他成员会收到该成员“是否上传音频“的状态变化回调(onParticipantUpdate)。")]),e._v(" "),r("p",[e._v("如果在加入频道后调用，则会开启或者关闭发送本地音频流数据，服务器也会根据 enableUploadAudioStream\n设定的值来确定是否上传音频数据。同时，频道中的其他成员会收到该成员“是否上传音频“的状态变化回调(onParticipantUpdate)。")]),e._v(" "),r("p",[e._v("此外，此方法还可以实现开启或关闭静音的功能。当 enable 值为 false\n，将会停止发送本地音频流，此时您可以听到其他成员的声音，但是其他成员将听不到您的声音，从而实现静音功能。")]),e._v(" "),r("p",[e._v("由于 SDK 默认上传视频流，因此需要在加入频道前关闭上传视频流的标识以进行语音通话")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("// 关闭视频流上传\nJCManager::shared()->mediaChannel->enableUploadVideoStream(false);\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#acfdb1da52955cf8b01d95527eb28890b",target:"_blank",rel:"noopener noreferrer"}},[e._v("join"),r("OutboundLink")],1),e._v("\n方法加入频道。你需要在该方法中传入如下参数：")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道\nUri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。")])]),e._v(" "),r("li",[r("p",[e._v("joinParam：加入参数，没有则填 NULL。详见\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_join_param.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelJoinParam"),r("OutboundLink")],1),e._v("\n对象。")]),e._v(" "),r("p",[e._v('// 加入频道\nJCManager::shared()->mediaChannel->join("频道 ID", NULL);')])])]),e._v(" "),r("p",[e._v("3. 加入频道后会收到\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a430bd78b28e189ee3c9564ddb7db213d",target:"_blank",rel:"noopener noreferrer"}},[e._v("onJoin"),r("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("// 加入频道结果回调\nvoid JCManager::onJoin(bool result, JCMediaChannelReason reason, const char* channelId)\n{\n    if (result) {\n    //加入成功的逻辑\n    ...\n    } else {\n    //加入失败的逻辑\n    ...\n    }\n}\n")])])]),r("h2",{attrs:{id:"离开频道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#离开频道"}},[e._v("#")]),e._v(" 离开频道")]),e._v(" "),r("p",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a93c19137044fec1568f73f1f6dbfee84",target:"_blank",rel:"noopener noreferrer"}},[e._v("leave"),r("OutboundLink")],1),e._v("\n方法离开当前频道。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("JCManager::shared()->mediaChannel->leave();\n")])])]),r("p",[e._v("离开频道后，自身收到\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLeave"),r("OutboundLink")],1),e._v("\n回调，其他成员同时收到\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a5888058878f3aaa382b3ede94228a6e8",target:"_blank",rel:"noopener noreferrer"}},[e._v("onParticipantLeft"),r("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("// 离开频道回调\nvoid JCManager::onLeave(JCMediaChannelReason reason, const char* channelId);\n{\n    //离开频道的逻辑\n}\n")])])]),r("h2",{attrs:{id:"解散频道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解散频道"}},[e._v("#")]),e._v(" 解散频道")]),e._v(" "),r("p",[e._v("如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("// 结束频道\nJCManager::shared()->mediaChannel->stop();\n")])])]),r("p",[e._v("解散频道后，发起结束的成员收到\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a61a1d5a81563d34f80e70541a114a74a",target:"_blank",rel:"noopener noreferrer"}},[e._v("onStop"),r("OutboundLink")],1),e._v("\n回调，其他成员同时收到\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLeave"),r("OutboundLink")],1),e._v("\n回调。 解散失败原因枚举值请参考\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_constants_8h.html#a24a2154e4bb2db63c75b31cd2b021fc3",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelReason"),r("OutboundLink")],1),e._v("\n。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("void JCManager::onStop(bool result, JCMediaChannelReason reason)\n{\n    //结束频道的处理逻辑\n}\n")])])]),r("p",[e._v("至此，您已经完成基础的多方语音通话功能。")])])}),[],!1,null,null,null);a.default=t.exports}}]);