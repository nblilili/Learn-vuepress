(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{312:function(e,a,n){e.exports=n.p+"assets/img/multivideoworkflow.85fcfb5a.png"},666:function(e,a,n){"use strict";n.r(a);var t=n(43),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实现互动直播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现互动直播"}},[e._v("#")]),e._v(" 实现互动直播")]),e._v(" "),t("p",[e._v("本章将介绍如何实现互动直播，互动直播的 API 调用时序见下图：")]),e._v(" "),t("p",[t("img",{attrs:{src:n(312),alt:"../../../../_images/multivideoworkflow.png"}})]),e._v(" "),t("h2",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),t("p",[e._v("调用 "),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDevice\ncreate"),t("OutboundLink")],1),e._v("\n和 "),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/create:mediaDevice:callback:",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannel\ncreate"),t("OutboundLink")],1),e._v("\n以初始化实现多方通话需要的模块：:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//初始化\n-(bool)initialize {\n   //1. 媒体类\n   JCMediaDevice *mediaDevice = [JCMediaDevice create:client callback:self];\n   //2. 媒体通道类\n   JCMediaChannel *mediaChannel = [JCMediaChannel create:client mediaDevice:mediaDevice callback:self];\n   return client.state == JCClientStateLogined;\n}\n")])])]),t("p",[e._v("其中：")]),e._v(" "),t("ul",[t("li",[e._v("JCMediaDevice create 方法中的 callback 为\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceCallback"),t("OutboundLink")],1),e._v("\n协议的代理对象，该协议用于将媒体设备相关的事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现\nJCMediaDeviceCallback 的方法。")])]),e._v(" "),t("p",[e._v("JCMediaDeviceCallback 中的主要方法如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//摄像头变化\n-(void)onCameraUpdate;\n\n//音频输出变化\n-(void)onAudioOutputTypeChange:(NSString*)audioOutputType;\n\n//声音中断恢复\n-(void)onAudioInerruptAndResume:(BOOL)interrupt;\n")])])]),t("ul",[t("li",[e._v("JCMediaChannel create 方法中的 callback 为\n"),t("a",{attrs:{href:"#id8"}},[t("span",{staticClass:"problematic",attrs:{id:"id9"}},[e._v("|JCMediaChannelCallback|")])]),e._v("\n协议的代理对象，该协议用于将频道中的相关事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现\nJCMediaChannelCallback 的方法。")])]),e._v(" "),t("p",[e._v("JCMediaChannel 中的主要方法如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//自身状态变化回调\n-(void)onMediaChannelStateChange:(JCMediaChannelState)state oldState:(JCMediaChannelState)oldState;\n\n//加入频道结果回调\n-(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId;\n\n//离开频道结果回调\n-(void)onLeave:(JCMediaChannelReason)reason channelId:(NSString*)channelId;\n\n//解散频道结果回调\n-(void)onStop:(bool)result reason:(JCMediaChannelReason)reason;\n\n//新成员加入回调\n-(void)onParticipantJoin:(JCMediaChannelParticipant*)participant;\n\n//成员离开回调\n-(void)onParticipantLeft:(JCMediaChannelParticipant*)participant;\n\n//成员更新回调\n-(void)onParticipantUpdate:(JCMediaChannelParticipant*)participant participantChangeParam:(JCMediaChannelParticipantChangeParam *)participantChangeParam;\n\n//成员声音变化\n-(void)onParticipantVolumeChange:(JCMediaChannelParticipant*)participant;\n")])])]),t("h2",{attrs:{id:"角色设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角色设置"}},[e._v("#")]),e._v(" 角色设置")]),e._v(" "),t("p",[e._v("直播有两种用户角色：主播和观众。加入频道前要先进行角色的设置。默认的角色为观众。其中主播可以上传本地音视频流，观众只能看到主播的画面、听到主播的声音。")]),e._v(" "),t("p",[e._v("角色值可以根据\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCMediaChannelCustomRole.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelCustomRole"),t("OutboundLink")],1),e._v("\n枚举值进行自定义，例如")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//自定义主播角色\nJCMediaChannelCustomRole ROLE_BROASCASTER = JCMediaChannelCustomRole0;\n//自定义观众角色\nJCMediaChannelCustomRole ROLE_AUDIENCE = JCMediaChannelCustomRole1;\n")])])]),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/setCustomRole:participant:",target:"_blank",rel:"noopener noreferrer"}},[e._v("setCustomRole"),t("OutboundLink")],1),e._v("\n设置自己的角色以进入频道。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 设置角色，participant(第二个参数） 值为 nil 代表设置自身的角色\n[mediaChannel setCustomRole:ROLE_BROASCASTER participant:nil];\n")])])]),t("h2",{attrs:{id:"加入频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加入频道"}},[e._v("#")]),e._v(" 加入频道")]),e._v(" "),t("p",[e._v("加入频道前需根据成员角色进行音视频流上传的控制，语音互动直播中，主播只需要上传本地音频流，观众则不需要。")]),e._v(" "),t("p",[e._v("1. 调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/enableUploadAudioStream:",target:"_blank",rel:"noopener noreferrer"}},[e._v("enableUploadAudioStream"),t("OutboundLink")],1),e._v("\n开启音频流。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("-(void)joinRoom:(JCMediaChannelCustomRole)customRole {\n    //根据角色上传本地音视频流\n    [mediaChannel enableUploadVideoStream:false];\n    [mediaChannel enableUploadAudioStream:customRole == ROLE_BROASCASTER];\n    [mediaChannel enableAudioOutput:true];\n}\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("角色设置后，调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/join:joinParam:",target:"_blank",rel:"noopener noreferrer"}},[e._v("join"),t("OutboundLink")],1),e._v("\n方法创建并加入频道。您需要在该方法中传入如下参数：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("channelIdOrUri：频道 ID 或频道 Uri，当 param 中 uriMode 设置为 true 时表示频道\nUri，其他表示频道 ID。频道 ID 或 Uri 相同的用户会进入同一个频道。")])]),e._v(" "),t("li",[t("p",[e._v("joinParam：加入参数，没有则填 nil。 详见\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannelJoinParam.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelJoinParam"),t("OutboundLink")],1),e._v("\n对象。")]),e._v(" "),t("p",[e._v('[mediaChannel join:@"222" joinParam:nil];')])])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[e._v("加入频道后收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onJoin:reason:channelId:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onJoin"),t("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 加入频道结果回调\n-(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId\n{\n    if (result) {\n      // 加入成功\n    } else {\n      // 加入失败\n    }\n}\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"离开频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离开频道"}},[e._v("#")]),e._v(" 离开频道")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannel.html#//api/name/leave",target:"_blank",rel:"noopener noreferrer"}},[e._v("leave"),t("OutboundLink")],1),e._v("\n方法离开当前频道。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("[mediaChannel leave];\n")])])]),t("p",[e._v("离开频道后，自身收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLeave"),t("OutboundLink")],1),e._v("\n回调，其他成员同时收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onParticipantLeft:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onParticipantLeft"),t("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),t("h2",{attrs:{id:"解散频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解散频道"}},[e._v("#")]),e._v(" 解散频道")]),e._v(" "),t("p",[e._v("如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 结束频道\n[mediaChannel stop];\n")])])]),t("p",[e._v("解散频道后，发起结束的成员收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onStop:reason:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onStop"),t("OutboundLink")],1),e._v("\n回调，其他成员同时收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaChannelCallback.html#//api/name/onLeave:channelId:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLeave"),t("OutboundLink")],1),e._v("\n回调。 解散失败原因枚举值请参考\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCMediaChannelReason.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelReason"),t("OutboundLink")],1),e._v("\n。")]),e._v(" "),t("p",[e._v("解散频道后，同样需要调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaChannelParticipant.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n里的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/stopVideo:",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopVideo"),t("OutboundLink")],1),e._v("\n销毁本地和远端视频画面。")])])}),[],!1,null,null,null);a.default=r.exports}}]);