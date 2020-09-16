(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{374:function(a,t,s){a.exports=s.p+"assets/img/multiaudioworkflow.8b56096a.png"},707:function(a,t,s){"use strict";s.r(t);var n=s(29),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"实现多方语音通话"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现多方语音通话"}},[a._v("#")]),a._v(" 实现多方语音通话")]),a._v(" "),n("p",[a._v("本章将介绍如何实现多方语音通话，多方语音通话的 API 调用时序见下图：")]),a._v(" "),n("p",[n("img",{attrs:{src:s(374),alt:"../../../../_images/multiaudioworkflow.png"}})]),a._v(" "),n("h2",{attrs:{id:"初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),n("p",[a._v("首先继承\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html"}},[a._v("JCMediaChannelCallback")]),a._v("\n对象和\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html"}},[a._v("JCMediaDeviceCallback")]),a._v("\n对象，并实现这两个对象中的纯虚函数。")],1),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JCManager")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" JCMediaDeviceCallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" JCMediaChannelCallback\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//自身状态变化回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onMediaChannelStateChange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JCMediaChannelState state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelState oldState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//频道属性变化回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onMediaChannelPropertyChange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JCMediaChannelPropChangeParam propChangeParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//加入频道结果回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onJoin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelReason reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" channelId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//离开频道结果回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onLeave")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JCMediaChannelReason reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" channelId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//解散频道结果回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelReason reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//查询频道结果回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onQuery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" operationId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelReason reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelQueryInfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" queryInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//新成员加入回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onParticipantJoin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JCMediaChannelParticipant"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" participant"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//成员离开回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onParticipantLeft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JCMediaChannelParticipant"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" participant"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//成员更新回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onParticipantUpdate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JCMediaChannelParticipant"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" participant"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelParticipant"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("ChangeParam changeParam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//频道中收到消息回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onMessageReceive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" fromUserId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//邀请sip成员结果回调")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onInviteSipUserResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" operationId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelReason reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//成员声音变化")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("virtual")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onParticipantVolumeChange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JCMediaChannelParticipant"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" participant"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//媒体设备对象")]),a._v("\n    JCMediaDevice"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" mediaDevice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//媒体通道对象")]),a._v("\n    JCMediaChannel"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" mediaChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),n("p",[a._v("然后调用\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/_j_c_media_device_8h.html#a96a10766264f3c12af531b70cb9c9749"}},[a._v("createJCMediaDevice")]),a._v("\n和\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_8h.html#acaca886fc345f798056ff2b9c2ee11ac"}},[a._v("createJCMediaChannel")]),a._v("\n以初始化多方视频通话需要的模块：")],1),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//初始化")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" JCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("initialize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//1. 媒体类")]),a._v("\n    mediaDevice "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("createJCMediaDevice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//1. 媒体通道类")]),a._v("\n    mediaChannel "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("createJCMediaChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" mediaDevice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("其中：")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("JCMediaDevice create 方法中的 this 为\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_device_callback.html"}},[a._v("JCMediaDeviceCallback")]),a._v("\n的派生类，该类于将媒体设备相关的事件通知给上层。因此需要先创建 JCMediaDeviceCallback\n的派生类，然后在该派生类中实现 JCMediaDeviceCallback\n的纯虚函数。")],1)]),a._v(" "),n("li",[n("p",[a._v("JCMediaChannel create 方法中的 this 为\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html"}},[a._v("JCMediaChannelCallback")]),a._v("\n的派生类，该类用于将频道中的相关事件通知给上层。因此需要先创建 JCMediaChannelCallback\n的派生类，然后在该派生类中实现 JCMediaChannelCallback\n的纯虚函数。")],1)])]),a._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),n("p",[a._v("回调中的对象只能在该回调中使用，不能保存，上层可通过对应的方法获取通话对象。")])]),a._v(" "),n("h2",{attrs:{id:"加入频道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#加入频道"}},[a._v("#")]),a._v(" 加入频道")]),a._v(" "),n("p",[a._v("JC SDK 默认不上传本地音频流，因此如果需要进入会议中就能听到彼此的声音，需要在加入频道前预打开音频流上传的标识:")]),a._v(" "),n("p",[a._v("1. 调用\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a2b08d87b38fe2fd7a394e2786241cc4c"}},[a._v("enableUploadAudioStream")]),a._v("\n开启音频流。")],1),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 开启音频流")]),a._v("\nJCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("shared")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("mediaChannel"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("enableUploadAudioStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),n("p",[a._v("该接口可以在加入频道之前调用，也可以在加入频道之后调用。两者区别具体如下。")]),a._v(" "),n("p",[a._v("如果在加入频道前调用，只是打开或关闭“上传音频”的标识，但不会发送数据，当加入频道成功时会根据 enableUploadAudioStream\n设定的值来确定是否上传音频数据。同时，频道中的其他成员会收到该成员“是否上传音频“的状态变化回调(onParticipantUpdate)。")]),a._v(" "),n("p",[a._v("如果在加入频道后调用，则会开启或者关闭发送本地音频流数据，服务器也会根据 enableUploadAudioStream\n设定的值来确定是否上传音频数据。同时，频道中的其他成员会收到该成员“是否上传音频“的状态变化回调(onParticipantUpdate)。")]),a._v(" "),n("p",[a._v("此外，此方法还可以实现开启或关闭静音的功能。当 enable 值为 false\n，将会停止发送本地音频流，此时您可以听到其他成员的声音，但是其他成员将听不到您的声音，从而实现静音功能。")])]),a._v(" "),n("p",[a._v("由于 SDK 默认上传视频流，因此需要在加入频道前关闭上传视频流的标识以进行语音通话")]),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 关闭视频流上传")]),a._v("\nJCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("shared")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("mediaChannel"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("enableUploadVideoStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[a._v("调用\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#acfdb1da52955cf8b01d95527eb28890b"}},[a._v("join")]),a._v("\n方法加入频道。你需要在该方法中传入如下参数：")],1)]),a._v(" "),n("ul",[n("li",[n("p",[a._v("channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道\nUri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。")])]),a._v(" "),n("li",[n("p",[a._v("joinParam：加入参数，没有则填 NULL。详见\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_join_param.html"}},[a._v("JCMediaChannelJoinParam")]),a._v("\n对象。")],1)])]),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 加入频道")]),a._v("\nJCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("shared")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("mediaChannel"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"频道 ID"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),n("p",[a._v("3. 加入频道后会收到\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a430bd78b28e189ee3c9564ddb7db213d"}},[a._v("onJoin")]),a._v("\n回调。")],1),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 加入频道结果回调")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" JCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onJoin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelReason reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" channelId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//加入成功的逻辑")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//加入失败的逻辑")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"离开频道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#离开频道"}},[a._v("#")]),a._v(" 离开频道")]),a._v(" "),n("p",[a._v("调用\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel.html#a93c19137044fec1568f73f1f6dbfee84"}},[a._v("leave")]),a._v("\n方法离开当前频道。")],1),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[a._v("JCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("shared")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("mediaChannel"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("leave")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),n("p",[a._v("离开频道后，自身收到\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71"}},[a._v("onLeave")]),a._v("\n回调，其他成员同时收到\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a5888058878f3aaa382b3ede94228a6e8"}},[a._v("onParticipantLeft")]),a._v("\n回调。")],1),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 离开频道回调")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" JCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onLeave")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JCMediaChannelReason reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" channelId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//离开频道的逻辑")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"解散频道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解散频道"}},[a._v("#")]),a._v(" 解散频道")]),a._v(" "),n("p",[a._v("如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。")]),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 结束频道")]),a._v("\nJCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("shared")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("mediaChannel"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("stop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),n("p",[a._v("解散频道后，发起结束的成员收到\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a61a1d5a81563d34f80e70541a114a74a"}},[a._v("onStop")]),a._v("\n回调，其他成员同时收到\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/class_j_c_media_channel_callback.html#a18bc4fae89f0d56fb849075f1603ac71"}},[a._v("onLeave")]),a._v("\n回调。 解散失败原因枚举值请参考\n"),n("RouterLink",{attrs:{to:"/portal/reference/V2.1/windows/C++/html/_j_c_media_channel_constants_8h.html#a24a2154e4bb2db63c75b31cd2b021fc3"}},[a._v("JCMediaChannelReason")]),a._v("\n。")],1),a._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" JCManager"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" JCMediaChannelReason reason"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//结束频道的处理逻辑")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("至此，您已经完成基础的多方语音通话功能。")])])}),[],!1,null,null,null);t.default=e.exports}}]);