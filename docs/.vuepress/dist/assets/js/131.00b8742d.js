(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{312:function(e,a,n){e.exports=n.p+"assets/img/multivideoworkflow.85fcfb5a.png"},435:function(e,a,n){"use strict";n.r(a);var t=n(43),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实现视频互动直播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现视频互动直播"}},[e._v("#")]),e._v(" 实现视频互动直播")]),e._v(" "),t("p",[e._v("本章将介绍如何实现视频互动直播，视频互动直播的 API 调用时序见下图：")]),e._v(" "),t("p",[t("img",{attrs:{src:n(312),alt:"../../../../_images/multivideoworkflow.png"}})]),e._v(" "),t("h2",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/cb59bc27-6528-9dbf-c996-de857096f847.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDevice.create()"),t("OutboundLink")],1),e._v("\n和\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/03ba7506-bd05-93a0-ddd6-605eea7c7ee6.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannel.create()"),t("OutboundLink")],1),e._v("\n以初始化实现多方通话需要的模块：:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/// 新建类并实现\nclass JCManager : JCClientCallback, JCMediaDeviceCallback,JCMediaChannelCallbac{\n\n    #region JCMediaDeviceCallback\n\n    public void onCameraUpdate(){...}\n\n    public void onAudioOutputTypeChange(string audioOutputType){...}\n\n    #endregion\n\n    #region JCMediaChannelCallback\n    ...\n    /// 实现 JCMediaChannelCallback 中的方法\n    ...\n    #endregion\n\n    /// 声明对象\n    JCMediaDevice mMediaDevice;\n    JCMediaChannel mMediaChannel;\n\n    /// 初始化函数\n    public bool initialize(Context context) {\n\n        /// 1. 媒体类\n        mMediaDevice = JCMediaDevice.create(mClient, this);\n        /// 2. 媒体通道类\n        mMediaChannel = JCMediaChannel.create(client, mediaDevice, this);\n    }\n}\n")])])]),t("h2",{attrs:{id:"角色设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角色设置"}},[e._v("#")]),e._v(" 角色设置")]),e._v(" "),t("p",[e._v("加入频道前要先进行角色的设置。其中角色设置包括主播和观众。 角色值可以根据\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/e8ce33fb-e1af-d33e-f0d8-795a840eae30.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannel.CustomRole"),t("OutboundLink")],1),e._v("\n枚举值进行自定义，例如")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//自定义主播角色\nJCMediaChannelCustomRole ROLE_BROASCASTER = JCMediaChannelConstants.CUSTOM_ROLE_0;\n//自定义观众角色\nJCMediaChannelCustomRole ROLE_AUDIENCE = JCMediaChannelConstants.CUSTOM_ROLE_1;\n")])])]),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/02d30d7f-6906-cea0-9775-a244e2b25e87.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("setCustomRole()"),t("OutboundLink")],1),e._v("\n设置自己的角色以进入频道。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/// 设置角色，participant(第二个参数） 值为 null 代表设置自身的角色\nmediaChannel.setCustomRole(ROLE_BROASCASTER, null);\n")])])]),t("h2",{attrs:{id:"加入频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加入频道"}},[e._v("#")]),e._v(" 加入频道")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/70f2d136-ebf6-12fc-eb1e-2a90622caca7.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("enableUploadAudioStream()"),t("OutboundLink")],1),e._v("\n开启音频流。调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/75fc5ba5-75a9-c704-5bd2-bf011fb8a082.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("enableUploadVideoStream()"),t("OutboundLink")],1),e._v("\n开启视频流。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/// 1. 开启音频流\nmMediaDeviceChannel.enableUploadAudioStream(true);\n/// 2. 开启视频流\nmMediaDeviceChannel.enableUploadVIdeoStream(true);\n")])])])]),e._v(" "),t("li",[t("p",[e._v("创建并加入频道，需要传入 "),t("code",[e._v("channelIdOrUri")]),e._v(" 和\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/af4ac634-bbe3-76e3-d1f8-120213ef2fff.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannel.JoinParam"),t("OutboundLink")],1),e._v("\n。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("p",[t("code",[e._v("channelIdOrUri")]),e._v(" 表示频道 ID 或频道 Uri。")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("JCMediaChannelJoinParam")]),e._v(" 中 "),t("code",[e._v("uriMode")]),e._v(" 参数设置为 true 时表示传入频道\nUri，设置其他参数时表示传入频道 ID。传入相同的频道 ID 或相同的频道 Uri 的用户会进入同一个频道。")]),e._v(" "),t("p",[e._v('mMediaChannel.join("222", null);')])])])])]),e._v(" "),t("li",[t("p",[e._v("加入频道后收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/535cbae7-841e-ca31-32ea-87c1a840eff1.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onJoin()"),t("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("public void onJoin(bool result, JCMediaChannelReason reason, String channelId) {\n    if (result) {\n        /// 加入频道成功\n    } else {\n        /// 加入频道失败\n    }\n}\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"创建本地视频画面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建本地视频画面"}},[e._v("#")]),e._v(" 创建本地视频画面")]),e._v(" "),t("p",[e._v("加入频道后，调用\n"),t("a",{attrs:{href:"#id10"}},[t("span",{staticClass:"problematic",attrs:{id:"id11"}},[e._v("|JCMediaChannel|")])]),e._v(" 中的\n"),t("a",{attrs:{href:"#id12"}},[t("span",{staticClass:"problematic",attrs:{id:"id13"}},[e._v("|getSelfParticipant|")])]),e._v("\n获取频道内自身对象， 然后调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/8ad58616-3028-b8d3-8106-81b8b805c1ea.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n中的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/6243f463-7566-cc48-dd7f-1b29ea2604cb.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("startVideo()"),t("OutboundLink")],1),e._v("\n方法打开本地视频预览。返回对象为\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/6a5b853c-d890-c30e-d236-5728d789ace1.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceVideoCanvas"),t("OutboundLink")],1),e._v("。（调用此方法会打开摄像头）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/// 打开本地视频预览\nmMediaChannel.getSelfParticipant().startVideo(JCMediaDevice.RENDER_FULL_CONTENT, JCMediaChannel.PICTURESIZE_NONE);\n")])])]),t("h2",{attrs:{id:"创建远端视频画面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建远端视频画面"}},[e._v("#")]),e._v(" 创建远端视频画面")]),e._v(" "),t("p",[e._v("加入频道后，调用\n"),t("a",{attrs:{href:"#id14"}},[t("span",{staticClass:"problematic",attrs:{id:"id15"}},[e._v("|JCMediaChannel|")])]),e._v(" 中的\n"),t("a",{attrs:{href:"#id16"}},[t("span",{staticClass:"problematic",attrs:{id:"id17"}},[e._v("|getParticipants|")])]),e._v("\n获取频道内所有成员对象。")]),e._v(" "),t("p",[e._v("然后调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/8ad58616-3028-b8d3-8106-81b8b805c1ea.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n类中的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/6243f463-7566-cc48-dd7f-1b29ea2604cb.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("startVideo()"),t("OutboundLink")],1),e._v("\n获取远端视频画面。返回对象为\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/6a5b853c-d890-c30e-d236-5728d789ace1.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceVideoCanvas"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/6243f463-7566-cc48-dd7f-1b29ea2604cb.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("startVideo()"),t("OutboundLink")],1),e._v("\n方法调用后，还需要调用\n"),t("a",{attrs:{href:"#id18"}},[t("span",{staticClass:"problematic",attrs:{id:"id19"}},[e._v("|JCMediaChannel|")])]),e._v(" 中的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/1a89408a-468e-73b8-6b6c-376811a18dda.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestVideo()"),t("OutboundLink")],1),e._v("\n方法请求频道中其他用户的视频流。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/// 获取所有成员对象\nList<JCMediaChannelParticipant> participants = mMediaChannel.getSelfParticipant();\n/// 调用创建视频画面的方法\nparticipants.get(0).startVideo(JCMediaDevice.RENDER_FULL_CONTENT, JCMediaChannel.PICTURESIZE_NONE);\n/// 请求远端视频流, 此处调用大尺寸视频窗口\nmMediaChannel.requestVideo(participants.get(0), Large);\n")])])]),t("h2",{attrs:{id:"离开频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离开频道"}},[e._v("#")]),e._v(" 离开频道")]),e._v(" "),t("p",[e._v("调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/7f034b94-15ee-8d49-48e3-905fff27f31f.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("leave()"),t("OutboundLink")],1),e._v("\n方法可以离开当前频道。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("mMediaChannel.leave();\n")])])]),t("p",[e._v("在多方视频通话中，离开频道还需要调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/851cc6d3-1b5a-8e26-ce3c-a3c1780936d2.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopVideo()"),t("OutboundLink")],1),e._v("\n移除视频画面。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("mParticipant.stopVideo();\n")])])]),t("p",[e._v("离开频道后，自身收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/f356aba3-ebed-a72c-4e34-02a684925a15.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLeave()"),t("OutboundLink")],1),e._v("\n回调，其他成员同时收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/89a35b12-8c2c-247d-e90c-ebe04f3e4521.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onParticipantLeft()"),t("OutboundLink")],1),e._v("\n回调")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/// 离开频道结果回调\n\npublic void onLeave(JCMediaChannelReason reason, String channelId) {\n    ...\n    /// 销毁视频画面\n    mParticipant.stopVideo();\n}\n")])])]),t("h2",{attrs:{id:"销毁本地和远端视频画面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#销毁本地和远端视频画面"}},[e._v("#")]),e._v(" 销毁本地和远端视频画面")]),e._v(" "),t("p",[e._v("在视频挂断后，调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/8ad58616-3028-b8d3-8106-81b8b805c1ea.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaChannelParticipant"),t("OutboundLink")],1),e._v("\n里的\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/851cc6d3-1b5a-8e26-ce3c-a3c1780936d2.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopVideo()"),t("OutboundLink")],1),e._v("\n销毁本地和远端视频画面。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("mParticipant.stopVideo();\n")])])]),t("h2",{attrs:{id:"解散频道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解散频道"}},[e._v("#")]),e._v(" 解散频道")]),e._v(" "),t("p",[e._v("如果想解散频道，可以调用下面的接口，此时所有成员都将被退出。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("/// 结束频道\nmMediaChannel.stop();\n")])])]),t("p",[e._v("在多方视频通话中，离开频道还需要调用\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/851cc6d3-1b5a-8e26-ce3c-a3c1780936d2.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopVideo()"),t("OutboundLink")],1),e._v("\n移除视频画面。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("mParticipant.stopVideo();\n")])])]),t("p",[e._v("解散频道后，发起结束的成员收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/d3732af7-2770-2d00-e4cb-e8f658da6c48.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onStop()"),t("OutboundLink")],1),e._v("\n回调，其他成员同时收到\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/f356aba3-ebed-a72c-4e34-02a684925a15.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLeave()"),t("OutboundLink")],1),e._v("\n回调。 解散失败原因枚举值请参考\n"),t("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/4481d778-9d4d-43fe-f94d-fdfa690dd939.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("MediaChannelReason"),t("OutboundLink")],1),e._v("\n。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("public void onStop(bool result, JCMediaChannelReason reason) {\n    /// 销毁视频， canvas 为 JCMediaDeviceVideoCanvas 对象实例\n    mParticipant.stopVideo();\n    canvas = null;\n}\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);