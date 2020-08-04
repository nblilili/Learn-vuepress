(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{323:function(e,a,t){e.exports=t.p+"assets/img/1-1workflowios.fafe6836.png"},473:function(e,a,t){"use strict";t.r(a);var l=t(43),n=Object(l.a)({},(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"实现一对一通话"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#实现一对一通话"}},[e._v("#")]),e._v(" 实现一对一通话")]),e._v(" "),l("p",[e._v("本章将介绍如何实现一对一视频通话，一对一通话的 API 调用时序见下图：")]),e._v(" "),l("p",[l("img",{attrs:{src:t(323),alt:"../../../../_images/1-1workflowios.png"}})]),e._v(" "),l("h2",{attrs:{id:"初始化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),l("p",[e._v("调用 "),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDevice.html#//api/name/create:callback:",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDevice\ncreate"),l("OutboundLink")],1),e._v("\n和 "),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/create:mediaDevice:callback:",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCCall\ncreate"),l("OutboundLink")],1),e._v("\n以初始化实现一对一通话需要的模块")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("//初始化\n-(bool)initialize {\n   //1. 媒体类\n   JCMediaDevice *mediaDevice = [JCMediaDevice create:client callback:self];\n   //2. 通话类\n   JCCall *call = [JCCall create:client mediaDevice:mediaDevice callback:self];\n   return client.state == JCClientStateLogined;\n}\n")])])]),l("p",[e._v("其中：")]),e._v(" "),l("ul",[l("li",[e._v("JCMediaDevice create 方法中的 callback 为\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCMediaDeviceCallback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceCallback"),l("OutboundLink")],1),e._v("\n协议的代理对象，该协议用于将媒体设备相关的事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现\nJCMediaDeviceCallback 的方法。")])]),e._v(" "),l("p",[e._v("JCMediaDeviceCallback 中的主要方法如下")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("//摄像头变化\n-(void)onCameraUpdate;\n\n//音频输出变化\n-(void)onAudioOutputTypeChange:(NSString*)audioOutputType;\n\n//声音中断恢复\n-(void)onAudioInerruptAndResume:(BOOL)interrupt;\n")])])]),l("ul",[l("li",[e._v("JCCall create 方法中的 callback 为\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCCallCallback"),l("OutboundLink")],1),e._v("\n协议的代理对象，该协议用于将通话相关的事件通知给上层。因此需要先指定 callback 的代理对象，然后在该代理对象中实现\nJCCallCallback 的方法。")])]),e._v(" "),l("p",[e._v("JCCallCallback 中的主要方法如下")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("//新增通话回调\n-(void)onCallItemAdd:(JCCallItem* __nonnull)item;\n\n//移除通话\n-(void)onCallItemRemove:(JCCallItem* __nonnull)item reason:(JCCallReason)reason description:(NSString * __nullable)description;\n\n//通话状态更新回调（当上层收到此回调时，可以根据 JCCallItem 对象获得该通话的所有信息及状态，从而更新该通话相关UI）\n-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam;\n")])])]),l("h2",{attrs:{id:"拨打通话"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#拨打通话"}},[e._v("#")]),e._v(" 拨打通话")]),e._v(" "),l("p",[e._v("调用\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/call:video:extraParam:",target:"_blank",rel:"noopener noreferrer"}},[e._v("call"),l("OutboundLink")],1),e._v("\n发起视频通话，需要填写的参数有：")]),e._v(" "),l("ul",[l("li",[l("p",[l("code",[e._v("userID")]),e._v(" 填写对方的用户ID。")])]),e._v(" "),l("li",[l("p",[l("code",[e._v("video")]),e._v(" 选择是否为视频通话， true 表示拨打视频通话， false 表示拨打语音通话。")])]),e._v(" "),l("li",[l("p",[l("code",[e._v("extraParam")]),e._v(" 为自定义透传字符串， 可通过 JCCallItem 对象中的 extraParam 属性获得。")]),e._v(" "),l("p",[e._v('// 发起视频呼叫\n[call call:@"userID" video:true extraParam:@"自定义透传字符串"];')])])]),e._v(" "),l("p",[e._v("拨打通话后，主叫和被叫均会收到新增通话的回调\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onCallItemAdd"),l("OutboundLink")],1),e._v("\n，此时通话状态变为 JCCallStatePending 。您可以在上层实现\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onCallItemAdd"),l("OutboundLink")],1),e._v("\n方法并处理相关的逻辑。")]),e._v(" "),l("p",[e._v("示例代码:")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("// 收到新增通话回调\n-(void)onCallItemAdd:(JCCallItem* __nonnull)item {\n    // 业务逻辑\n    if (item.direction == JCCallDirectionIn) {\n        // 如果是呼入\n        ...\n    } else {\n        // 如果是呼出\n        ...\n    }\n}\n")])])]),l("p",[e._v("Note")]),e._v(" "),l("p",[e._v("如果主叫想取消通话，可以直接转到挂断通话部分。调用挂断接口后，通话状态变为 JCCallStateCancel。")]),e._v(" "),l("h2",{attrs:{id:"创建本地视频画面"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建本地视频画面"}},[e._v("#")]),e._v(" 创建本地视频画面")]),e._v(" "),l("p",[e._v("发起通话后，调用\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCCallItem"),l("OutboundLink")],1),e._v("\n类中的\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/startSelfVideo:",target:"_blank",rel:"noopener noreferrer"}},[e._v("startSelfVideo"),l("OutboundLink")],1),e._v("\n方法创建本地视频画面，该方法会返回一个\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceVideoCanvas"),l("OutboundLink")],1),e._v("\n对象。该对象用于将视频渲染到画布上，并管理渲染的方式。（调用此方法会打开摄像头）")]),e._v(" "),l("p",[e._v("示例代码:")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("-(void)onCallItemAdd:(JCCallItem* __nonnull)item {\n    if (item.state == JCCallStateTalking && localCanvas == nil && item.uploadVideoStreamSelf) {\n        // 创建本地视频画面\n        JCMediaDeviceVideoCanvas *localCanvas = [item startSelfVideo:JCMediaDeviceRenderFullScreen];\n    }\n}\n")])])]),l("h2",{attrs:{id:"应答通话"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#应答通话"}},[e._v("#")]),e._v(" 应答通话")]),e._v(" "),l("ol",[l("li",[e._v("主叫发起呼叫成功后，被叫会收到\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html#//api/name/onCallItemAdd:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onCallItemAdd"),l("OutboundLink")],1),e._v("\n回调，此时可以通过回调中的\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCCallItem"),l("OutboundLink")],1),e._v("\n对象的 video 以及 direction 属性判断是视频呼入还是语音呼入，从而做出相应的处理:")])]),e._v(" "),l("p",[e._v("示例代码:")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("-(void)onCallItemAdd:(JCCallItem* __nonnull)item {\n    // 如果是视频呼入且在振铃中\n    if (item && item.direction == JCCallDirectionIn && item.video) {\n         // 2. 做出相应的处理，如在界面上显示“振铃中”\n         ...\n    }\n}\n")])])]),l("p",[e._v("2. 调用\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/answer:video:",target:"_blank",rel:"noopener noreferrer"}},[e._v("answer"),l("OutboundLink")],1),e._v("\n接听通话，"),l("strong",[e._v("视频通话既可语音应答也可视频应答")])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("// 应答通话\n[call answer:item video:true];\n")])])]),l("p",[e._v("通话应答后，通话状态变为 JCCallStateConnecting。")]),e._v(" "),l("p",[e._v("Note")]),e._v(" "),l("p",[e._v("如果要在此时拒绝通话，可以直接转到挂断通话部分。调用挂断接口后，通话状态变为 JCCallStateCanceled。")]),e._v(" "),l("h2",{attrs:{id:"创建远端视频画面"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建远端视频画面"}},[e._v("#")]),e._v(" 创建远端视频画面")]),e._v(" "),l("p",[e._v("被叫接听通话后，双方将建立连接，此时，主叫和被叫都将会收到通话更新的回调（onCallItemUpdate），通话状态变为\nJCCallStateTalking。")]),e._v(" "),l("p",[e._v("调用\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCCallItem"),l("OutboundLink")],1),e._v("\n类中的\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/startOtherVideo:",target:"_blank",rel:"noopener noreferrer"}},[e._v("startOtherVideo"),l("OutboundLink")],1),e._v("\n方法创建远端视频画面，该方法会返回一个\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCMediaDeviceVideoCanvas.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCMediaDeviceVideoCanvas"),l("OutboundLink")],1),e._v("\n对象，该对象用于将视频渲染到画布上，并管理渲染的方式。")]),e._v(" "),l("p",[e._v("示例代码:")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v("-(void)onCallItemUpdate:(JCCallItem* __nonnull)item changeParam:(JCCallChangeParam * __nullable)changeParam {\n    JCMediaDeviceVideoCanvas *remoteCanvas;\n    // 如果对端在上传视频流（uploadVideoStreamOther）\n    if (item.state == JCCallStateTalking && remoteCanvas == nil && item.uploadVideoStreamOther) {\n        // 创建远端视频画面\n        remoteCanvas = [item startOtherVideo:JCMediaDeviceRenderFullScreen];\n    }\n}\n")])])]),l("h2",{attrs:{id:"挂断通话"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#挂断通话"}},[e._v("#")]),e._v(" 挂断通话")]),e._v(" "),l("p",[e._v("主叫或者被叫均可以挂断通话。")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("首先调用\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/getActiveCallItem",target:"_blank",rel:"noopener noreferrer"}},[e._v("getActiveCallItem"),l("OutboundLink")],1),e._v("\n获取当前活跃的通话对象；")])]),e._v(" "),l("li",[l("p",[e._v("当前活跃通话对象获取后，调用\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCall.html#//api/name/term:reason:description:",target:"_blank",rel:"noopener noreferrer"}},[e._v("term"),l("OutboundLink")],1),e._v("\n挂断当前活跃通话:")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[e._v('// 1. 获取当前活跃通话\nJCCallItem *item = [call getActiveCallItem];\n// 2. 挂断当前活跃通话\n[call term:item reason:JCCallReasonNone description:@"主叫挂断"];\n')])])])])]),e._v(" "),l("h2",{attrs:{id:"销毁本地和远端视频画面"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#销毁本地和远端视频画面"}},[e._v("#")]),e._v(" 销毁本地和远端视频画面")]),e._v(" "),l("p",[e._v("通话挂断后，会触发\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCCallCallback.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCCallCallback"),l("OutboundLink")],1),e._v("\n中的 onCallItemRemove（通话移除回调），通话状态变为 JCCallStateOk，此时您需要调用\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/stopSelfVideo",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopSelfVideo"),l("OutboundLink")],1),e._v("\n和\n"),l("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCCallItem.html#//api/name/stopOtherVideo",target:"_blank",rel:"noopener noreferrer"}},[e._v("stopOtherVideo"),l("OutboundLink")],1),e._v("\n方法销毁本地和远端视频画面。")]),e._v(" "),l("p",[e._v("示例代码:")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(" -(void)onCallItemRemove:(JCCallItem* __nonnull)item reason:(JCCallReason)reason description:(NSString * __nullable)description { //移除通话回调\n    // 界面处理\n    if (localCanvas) {\n        // 本端视频销毁\n        [item stopSelfVideo];\n    }\n    if (remoteCanvas) {\n        // 远端视频销毁\n        [item stopOtherVideo];\n    }\n}\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);