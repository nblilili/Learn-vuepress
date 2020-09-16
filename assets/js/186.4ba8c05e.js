(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{363:function(t,a,n){t.exports=n.p+"assets/img/multivideoworkflow.85fcfb5a.png"},860:function(t,a,n){"use strict";n.r(a);var s=n(29),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"实现互动直播"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现互动直播"}},[t._v("#")]),t._v(" 实现互动直播")]),t._v(" "),s("p",[t._v("本章将介绍如何实现互动直播，互动直播的 API 调用时序见下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(363),alt:"../../../../_images/multivideoworkflow.png"}})]),t._v(" "),s("h2",{attrs:{id:"初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),s("p",[t._v("调用 "),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:"}},[t._v("JCMediaDevice\ncreate")]),t._v("\n和 "),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/create:mediaDevice:callback:"}},[t._v("JCMediaChannel\ncreate")]),t._v("\n以初始化实现多方通话需要的模块。")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("initialize "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1. 媒体类")]),t._v("\n   JCMediaDevice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mediaDevice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("JCMediaDevice create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("client callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2. 媒体通道类")]),t._v("\n   JCMediaChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mediaChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("JCMediaChannel create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("client mediaDevice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mediaDevice callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCClientStateLogined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中：")]),t._v(" "),s("ul",[s("li",[t._v("JCMediaDevice create 方法中的 callback 为\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html"}},[t._v("JCMediaDeviceCallback")]),t._v("\n协议的代理对象，该协议用于将媒体设备相关的事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现\nJCMediaDeviceCallback 的方法。")],1)]),t._v(" "),s("p",[t._v("JCMediaDeviceCallback 中的主要方法如下")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//摄像头变化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onCameraUpdate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//音频输出变化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onAudioOutputTypeChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("audioOutputType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//声音中断恢复")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onAudioInerruptAndResume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("interrupt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//收到第一帧数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onRenderReceived"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaDeviceVideoCanvas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//渲染开始")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onRenderStart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaDeviceVideoCanvas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("JCMediaChannel create 方法中的 callback 为\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html"}},[t._v("JCMediaChannelCallback")]),t._v("\n协议的代理对象，该协议用于将频道中的相关事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现\nJCMediaChannelCallback 的方法。")],1)]),t._v(" "),s("p",[t._v("JCMediaChannel 中的主要方法如下")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自身状态变化回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onMediaChannelStateChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("state oldState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("oldState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加入频道结果回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onJoin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("result reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//离开频道结果回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onLeave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解散频道结果回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onStop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("result reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//新成员加入回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onParticipantJoin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelParticipant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成员离开回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onParticipantLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelParticipant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成员更新回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onParticipantUpdate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelParticipant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("participant participantChangeParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelParticipantChangeParam "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("participantChangeParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//成员声音变化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onParticipantVolumeChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelParticipant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"角色设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色设置"}},[t._v("#")]),t._v(" 角色设置")]),t._v(" "),s("p",[t._v("直播有两种用户角色：主播和观众。加入频道前要先进行角色的设置。默认的角色为观众。其中主播可以上传本地音视频流，观众只能看到主播的画面、听到主播的声音。")]),t._v(" "),s("p",[t._v("角色值可以根据\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Constants/JCMediaChannelCustomRole.html"}},[t._v("JCMediaChannelCustomRole")]),t._v("\n枚举值进行自定义，例如")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义主播角色")]),t._v("\nJCMediaChannelCustomRole ROLE_BROASCASTER "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JCMediaChannelCustomRole0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义观众角色")]),t._v("\nJCMediaChannelCustomRole ROLE_AUDIENCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JCMediaChannelCustomRole1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/setCustomRole:participant:"}},[t._v("setCustomRole")]),t._v("\n设置自己的角色以进入频道。")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置角色，participant(第二个参数） 值为 nil 代表设置自身的角色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel setCustomRole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ROLE_BROASCASTER participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"加入频道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加入频道"}},[t._v("#")]),t._v(" 加入频道")]),t._v(" "),s("p",[t._v("加入频道前需根据成员角色进行音视频流上传的控制，主播需要上传本地音视频流，观众则不需要。")]),t._v(" "),s("p",[t._v("1. 调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadAudioStream:"}},[t._v("enableUploadAudioStream")]),t._v("\n开启音频流，调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadVideoStream:"}},[t._v("enableUploadVideoStream")]),t._v("\n开启视频流。")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("joinRoom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelCustomRole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("customRole "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据角色上传本地音视频流")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel enableUploadVideoStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("customRole "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ROLE_BROASCASTER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel enableUploadAudioStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("customRole "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ROLE_BROASCASTER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel enableAudioOutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("角色设置后，调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/join:joinParam:"}},[t._v("join")]),t._v("\n方法创建并加入频道。您需要在该方法中传入如下参数：")],1)]),t._v(" "),s("ul",[s("li",[s("p",[t._v("channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道\nUri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。")])]),t._v(" "),s("li",[s("p",[t._v("joinParam：加入参数，没有则填 nil。 详见\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannelJoinParam.html"}},[t._v("JCMediaChannelJoinParam")]),t._v("\n对象。")],1)])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"222"')]),t._v(" joinParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("加入频道后收到\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onJoin:reason:channelId:"}},[t._v("onJoin")]),t._v("\n回调。")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加入频道结果回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onJoin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("result reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("channelId\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加入成功")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加入失败")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"创建本地视频画面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建本地视频画面"}},[t._v("#")]),t._v(" 创建本地视频画面")]),t._v(" "),s("p",[t._v("1. 加入频道后，通过\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html"}},[t._v("JCMediaChannel")]),t._v("\n中的 selfParticipant 属性获取频道内自身对象。")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 获得频道成员自身对象")]),t._v("\nJCMediaChannelParticipant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("participant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mediaChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selfParticipant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html"}},[t._v("JCMediaChannelParticipant")]),t._v("\n类中的\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/startVideo:renderType:"}},[t._v("startVideo")]),t._v("\n方法打开本地视频预览。该方法会返回一个\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html"}},[t._v("JCMediaDeviceVideoCanvas")]),t._v("\n对象，该对象用于将视频渲染到画布上，并管理渲染的方式。（调用此方法会打开摄像头）")],1)]),t._v(" "),s("p",[t._v("示例代码:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 打开本地视频预览")]),t._v("\nJCMediaDeviceVideoCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("localCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("participant startVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("JCMediaDeviceRenderFullScreen pictureSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("JCMediaChannelPictureSizeLarge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"创建远端视频画面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建远端视频画面"}},[t._v("#")]),t._v(" 创建远端视频画面")]),t._v(" "),s("p",[t._v("视频通话中，通常需要看到其他用户。通过\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html"}},[t._v("JCMediaChannel")]),t._v("\n中的 participants 属性获取频道内所有成员对象。")],1),t._v(" "),s("p",[t._v("然后调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html"}},[t._v("JCMediaChannelParticipant")]),t._v("\n类中的\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/startVideo:renderType:"}},[t._v("startVideo")]),t._v("\n方法设置远端用户的视图。调用该方法会返回一个\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html"}},[t._v("JCMediaDeviceVideoCanvas")]),t._v("\n对象，该对象用于将视频渲染到画布上，并管理渲染的方式。")],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/startVideo:renderType:"}},[t._v("startVideo")]),t._v("\n方法调用后，还需要调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html"}},[t._v("JCMediaChannel")]),t._v("\n中的\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/requestVideo:pictureSize:"}},[t._v("requestVideo")]),t._v("\n方法请求频道中其他用户的视频流。")],1),t._v(" "),s("p",[t._v("示例代码:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//取频道内所有成员对象")]),t._v("\nNSArray"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" participants "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mediaChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("participants"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelParticipant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" participant "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" participants"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建远端画面")]),t._v("\n    JCMediaDeviceVideoCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("remoteCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("participant startVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("JCMediaDeviceRenderFullScreen pictureSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("JCMediaChannelPictureSizeLarge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//请求远端视频流")]),t._v("\n    mediaChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("participant pictureSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("JCMediaChannelPictureSizeLarge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"离开频道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#离开频道"}},[t._v("#")]),t._v(" 离开频道")]),t._v(" "),s("p",[t._v("调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/leave"}},[t._v("leave")]),t._v("\n方法离开当前频道。")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel leave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("离开频道后，自身收到\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:"}},[t._v("onLeave")]),t._v("\n回调，其他成员同时收到\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onParticipantLeft:"}},[t._v("onParticipantLeft")]),t._v("\n回调。")],1),t._v(" "),s("h2",{attrs:{id:"销毁本地和远端视频画面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#销毁本地和远端视频画面"}},[t._v("#")]),t._v(" 销毁本地和远端视频画面")]),t._v(" "),s("p",[t._v("在视频挂断后，调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html"}},[t._v("JCMediaChannelParticipant")]),t._v("\n里的\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/stopVideo:"}},[t._v("stopVideo")]),t._v("\n销毁本地和远端视频画面。")],1),t._v(" "),s("p",[t._v("示例代码:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onLeave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("channelId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地视频销毁")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("participant stopVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remoteCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 远端视频销毁")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("participant stopVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"解散频道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解散频道"}},[t._v("#")]),t._v(" 解散频道")]),t._v(" "),s("p",[t._v("如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束频道")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel stop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("解散频道后，发起结束的成员收到\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onStop:reason:"}},[t._v("onStop")]),t._v("\n回调，其他成员同时收到\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:"}},[t._v("onLeave")]),t._v("\n回调。 解散失败原因枚举值请参考\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Constants/JCMediaChannelReason.html"}},[t._v("JCMediaChannelReason")]),t._v("\n。")],1),t._v(" "),s("p",[t._v("解散频道后，同样需要调用\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html"}},[t._v("JCMediaChannelParticipant")]),t._v("\n里的\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/stopVideo:"}},[t._v("stopVideo")]),t._v("\n销毁本地和远端视频画面。")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);