(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{324:function(t,e,v){t.exports=v.p+"assets/img/questions1.f8ba4022.png"},723:function(t,e,v){"use strict";v.r(e);var _=v(43),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"常见问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),_("p",[_("code",[t._v("登录")])]),t._v(" "),_("ol",[_("li",[t._v("登录时用户名有要求吗？用户名规范是什么？")])]),t._v(" "),_("ul",[_("li",[t._v("用户名为英文数字和’+’ ‘-‘ ‘_’ ‘.’，’-‘ ‘_’ ‘.’不能作为第一个字符，长度不要超过64字符。")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("免鉴权模式下客户如何使用自己的账号体系？")])]),t._v(" "),_("ul",[_("li",[t._v("免鉴权模式下，客户如果想用自己的账号体系，但是又不想将自己的账号作为服务器的账号标识，可以另起一个与自己的账号体系相对应的服务器端的账号标识作为自身的Id，如自身账号体系为手机号:\n150…，服务器端账号体系可以为 ABC 之类的标识符。")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("如何根据登录状态判断是否已经跟服务器连接成功？")])]),t._v(" "),_("ul",[_("li",[t._v("可以通过 JCClient 类里的 onClientStateChange 回调检查登录状态的变化。")])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("code",[t._v("账号查询")])]),t._v(" "),_("p",[t._v("如果遇到查询状态问题，可以先检查服务器地址，确保服务器地址和域保持一致，关于服务器地址的设置参考\n"),_("span",{staticClass:"xref std std-ref"},[t._v("登录环境设置")]),t._v("。")]),t._v(" "),_("hr"),t._v(" "),_("p",[_("code",[t._v("一对一通话")])]),t._v(" "),_("ol",[_("li",[t._v("一对一通话中，对端异常退出（程序被杀，断网）本端多久会挂断？")])]),t._v(" "),_("ul",[_("li",[t._v("20 秒后。对端杀掉，本端 20 秒会挂断，上层会收到 notifyCallItemRemove，reason 是\nterm_by_self，callitem 里的 netstatus 状态为 -3。")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("现在呼叫等待时间是多长？")])]),t._v(" "),_("ul",[_("li",[t._v("信令模式下是 2 分钟。超时后服务器将主动挂断通话。")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("A 呼叫 B，B 此时断网，A 挂断，B 网络恢复，此时 B 会弹出通话界面，并且马上就结束，是什么原因？是否可以避免？")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("产生这个现象的原因是 B 网络恢复后，连续收到建立通话消息和结束通话消息。")])]),t._v(" "),_("li",[_("p",[t._v("A 呼叫 B 时，建立通话消息发送到服务器上，A\n挂断时发送了结束通话消息，不是取消前一个消息（服务器没有取消前一个消息的功能）。这些消息会在服务器上缓存一段时间（60\n秒）。如果 B 在缓冲的时间内网络恢复，则将收到缓存的消息。如果 B 在缓冲时间之外网络恢复，则缓存消息已被删除，B\n不会收到这些消息，也将不会出现弹出通话界面并立刻结束的现象。")])]),t._v(" "),_("li",[_("p",[t._v("一种方式避免产生这个现象，是在收到建立通话消息的时候延迟一段时间（例如 0.5\n秒）再显示通话界面，如果立刻收到结束通话的消息，就不显示通话界面。")])])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("通话状态问题")])]),t._v(" "),_("ul",[_("li",[t._v("调用 call 接口发起通话后，收到来电状态是 pending，调用 answer 接口后，通话状态变为\nconnecting，接通后变为 talking 状态。")])]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[t._v("onCallItemRemove 回调说明")])]),t._v(" "),_("ul",[_("li",[t._v("当收到 onCallItemRemove 回调时，callItem 不一定是当前的通话，可以通过 getCallItems\n方法获得当前所有通话。")])]),t._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[t._v("关于 Mtc_CallDbSetFullScreen(bool) 的使用")])]),t._v(" "),_("ul",[_("li",[t._v("调用该方法会影响 "),_("strong",[t._v("本端视频请求分辨率")]),t._v("，默认设置为 true")])]),t._v(" "),_("p",[t._v("前提条件：")]),t._v(" "),_("blockquote",[_("ol",[_("li",[_("p",[t._v("本端默认请求是 640*360 的分辨率；")])]),t._v(" "),_("li",[_("p",[t._v("本端屏幕分辨率为 360*360。")])])])]),t._v(" "),_("p",[t._v("如果设置为 true，则请求分辨率会被调整为 360*360。")]),t._v(" "),_("p",[t._v("如果设置为 false，则请求分辨率还是以 640*360 进行请求。")]),t._v(" "),_("ol",{attrs:{start:"7"}},[_("li",[t._v("关于 Mtc_CallDbSetAdaptiveAspect(bool)使用")])]),t._v(" "),_("ul",[_("li",[t._v("调用该方法会影响视频 "),_("strong",[t._v("发送分辨率")]),t._v("，默认 false")])]),t._v(" "),_("p",[t._v("前提条件：")]),t._v(" "),_("blockquote",[_("ol",[_("li",[_("p",[t._v("摄像头采集为 1280*720 (16:9)；")])]),t._v(" "),_("li",[_("p",[t._v("协商后需要发送 320*240（4:3）的图像给对方。")])])])]),t._v(" "),_("p",[t._v("如果设置为 true，则发送视频按照摄像头采集的比例（16:9）进行发送（对端收到的视频数据不是按照协商的分辨率）。")]),t._v(" "),_("p",[t._v("如果设置为 false，则发送视频按照协商后需要发送的视频比例（4:3）进行发送（裁剪摄像头采集的图像）。")]),t._v(" "),_("ol",{attrs:{start:"8"}},[_("li",[t._v("自己采集视频数据进行传输（智能设备SDK没有该接口) 只关心数据发送")])]),t._v(" "),_("ul",[_("li",[t._v("可以按照下面的方法进行设定：")])]),t._v(" "),_("blockquote",[_("p",[t._v("startVideoFile - setVideoFileFrame - stopVideoFile")])]),t._v(" "),_("p",[t._v("或者需要用到 Juphoon 的渲染：")]),t._v(" "),_("blockquote",[_("p",[t._v("startVideo(通过 getVideoFileId 获得 videoSource 值) - setVideoFileFrame -\nstopVideo")])]),t._v(" "),_("p",[t._v("支持的格式：")]),t._v(" "),_("blockquote",[_("p",[t._v("I420, IYUV, RGB24, ABGR, ARGB, ARGB444, RGB565, ARGB1555, YUY2, YV12,\nUYVY, MJPG, NV21, NV12, BGRA")])]),t._v(" "),_("p",[t._v("其中，setVideoFileFrame 接口如下")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("/**\n * 逐帧采集视频画面\n *\n * 当为 H264 格式时\n * 1. 如果是关键帧需要将 0x67 0x68 0x41 的数据作为一帧传入\n * 2. 关键帧要以固定间隔传入，例如5秒，否则一开始可能有几秒对端无法显示视频\n *\n * @param data 画面二进制数据\n * @param format   视频像素格式\n * @param width    宽\n * @param height   高\n * @param angle    90 的倍数\n * @param mirror   0 不镜像，1进行左右镜像\n * @param keyFrame 是否为关键帧，针对 format 为 H264\n */\npublic abstract void setVideoFileFrame(byte[] data, @VideoPixelFormat int format, int width, int height, int angle, int mirror, boolean keyFrame);\n")])])]),_("p",[_("strong",[t._v("关于 H264的说明：")])]),t._v(" "),_("p",[t._v("由于媒体底层一开始默认 H264 为关闭状态，所以程序启动的第一次 setVideoFrame 必须在 connecting\n之前有调用，否则会导致对端收不到画面。")]),t._v(" "),_("p",[t._v("解决方案1: 提早调。")]),t._v(" "),_("p",[t._v("解决方案2: SDK初始化成功后调用以下代码")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("mediaDevice.startVideoFile();\nbyte[] buf = new byte[10];\nbuf[0] = 0x5;\nmediaDevice.setVideoFileFrame(buf, JCMediaDevice.H264, 1, 1, 0, 0, false);\nmediaDevice.stopVideoFile();\n")])])]),_("hr"),t._v(" "),_("p",[_("code",[t._v("会议功能需要说明的问题")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("会议总人数上限为 16 人。")])]),t._v(" "),_("li",[_("p",[t._v("由于 CDN 直播，Webrtc，录制等都算会议成员，所以计算人数时需要注意。")])]),t._v(" "),_("li",[_("p",[t._v("加入会议时，同一区域的同一通道 ID，即时AppKey\n不同，也可以互通。其中，区域是国家（地理位置）的概念，域是指服务器的域名，如下图所示：")])])]),t._v(" "),_("p",[_("img",{attrs:{src:v(324),alt:"../../_images/questions1.png"}})]),t._v(" "),_("p",[t._v("如果参会成员不在同一区域，即使通道 ID 相同也不能互通。程序默认区域值为中国。比如，同在中国的用户 A 和 B，在通道 ID\n相同的情况下均可以加入会议。如果另一个成员 C 在国外，那么即时他拥有与 A、B 相同的通道\nID，也不能加入会议。")])])}),[],!1,null,null,null);e.default=l.exports}}]);