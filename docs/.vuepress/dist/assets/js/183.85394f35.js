(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{548:function(a,e,t){"use strict";t.r(e);var l=t(43),n=Object(l.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"通话管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通话管理"}},[a._v("#")]),a._v(" 通话管理")]),a._v(" "),t("h2",{attrs:{id:"通话人数设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通话人数设置"}},[a._v("#")]),a._v(" 通话人数设置")]),a._v(" "),t("p",[a._v("发起通话前可以通过 maxCallNum 属性设置通话的最大人数，默认为 1。如果是视频通话，最大人数只能是 1，如果是语音通话，最大人数为\n2。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("call.maxCallNum = 1;\n")])])]),t("p",[a._v("当通话超过最大人数时：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("呼出会失败，原因为 JCCallReasonCallOverLimit（超过通话数限制）。")])]),a._v(" "),t("li",[t("p",[a._v("收到来电会自动拒绝，原因为 JCCallReasonBusy（忙）。")])])]),a._v(" "),t("h2",{attrs:{id:"通话过程控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通话过程控制"}},[a._v("#")]),a._v(" 通话过程控制")]),a._v(" "),t("h3",{attrs:{id:"通话静音"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通话静音"}},[a._v("#")]),a._v(" 通话静音")]),a._v(" "),t("p",[a._v("通过下面的方法开启或关闭静音，开启关闭静音需要根据 JCCallItem\n中的静音状态（"),t("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/html/bb1ed5b7-2f76-e89d-f964-328e2b746904.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("mute"),t("OutboundLink")],1),a._v("）来决定，静音开启后，对方将听不到您的声音")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('/// <summary>\n/// 静音，通过JCCallItem中的静音状态来决定开启关闭\n/// </summary>\n/// <param name="item">JCCallItem对象</param>\n/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>\npublic bool mute(JCCallItem item)\n')])])]),t("h3",{attrs:{id:"通话录音"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通话录音"}},[a._v("#")]),a._v(" 通话录音")]),a._v(" "),t("p",[a._v("可以在通话中进行录音，开启或关闭录音需要根据当前的录音状态（audioRecord）来决定。如果正在录制或者通话被挂起或者挂起的情况下，不能进行音频录制。录音状态可通过\n"),t("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/ios/Classes/JCCallItem.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JCCallItem"),t("OutboundLink")],1),a._v("\n对象获取。")]),a._v(" "),t("p",[a._v("开启或关闭录音接口如下")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('/// <summary>\n/// 通话录音，通过JCCallItem对象中的呼叫保持状态来决定开启关闭呼叫保持\n/// </summary>\n/// <param name="item">JCCallItem对象</param>\n/// <param name="enable">开启关闭录音</param>\n/// <param name="filePath">录音文件路径</param>\n/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>\npublic bool audioRecord(JCCallItem item, bool enable, string filePath)\n')])])]),t("p",[a._v("示例代码:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('    JCCallItem item = call.getActiveCallItem();\n    if (item.audioRecord)\n    {\n        // 录音结束\n        call.audioRecord(item, false, "your filePath");\n    } else {\n        // 创建录音文件保存路径\n        String filePath; // 录音文件的绝对路径，SDK会自动创建录音文件\n        if (filtPath.Length > 0)\n        {\n            // 开始录音\n            call.audioRecord(item, true, filePath);\n        }\n    }\n}\n')])])]),t("p",[a._v("开启或关闭录音时，录音状态会发生改变，并通过 onCallItemUpdate 回调上报")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('/// <summary>\n/// 通话状态更新回调\n/// 当上层收到此回调时，可以根据JCCallItem对象获得该通话所有信息及状态，从而更新通话相关UI\n/// </summary>\n/// <param name="item">JCCallItem对象</param>\n/// <param name="changeParam">更新标识类</param>\nvoid onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);\n')])])]),t("hr"),a._v(" "),t("h3",{attrs:{id:"开启-关闭呼叫保持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-关闭呼叫保持"}},[a._v("#")]),a._v(" 开启/关闭呼叫保持")]),a._v(" "),t("p",[a._v("调用下面的方法对通话对象进行呼叫保持或解除呼叫保持（当通话对象处于被保持状态（即状态为held）时不可以进行此操作），开启或关闭呼叫保持需要根据\nJCCallItem\n对象中（"),t("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/html/dc13e9d5-2842-1b22-5d6d-9a617d321458.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("hold"),t("OutboundLink")],1),a._v("）的呼叫保持状态来决定")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('/// <summary>\n/// 呼叫保持，通过JCCallItem对象中的呼叫保持状态来决定开启关闭\n/// </summary>\n/// <param name="item">JCCallItem对象</param>\n/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>\npublic bool hold(JCCallItem item)\n')])])]),t("h3",{attrs:{id:"切换活跃通话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换活跃通话"}},[a._v("#")]),a._v(" 切换活跃通话")]),a._v(" "),t("p",[a._v("调用下面的方法对通话中被保持的对象和活跃的通话对象进行切换")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('/// <summary>\n/// 切换活跃通话\n/// </summary>\n/// <param name="item">需要变活跃的JCCallItem对象</param>\n/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>\npublic bool becomeActive(JCCallItem item)\n')])])]),t("p",[a._v("示例代码")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("//获取活跃通话对象\nJCCallItem item = call.getActiveCallItem();\ncall.mute(item);\ncall.hold(item);\ncall.becomeActive(item);\n")])])]),t("h3",{attrs:{id:"通话中发送消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通话中发送消息"}},[a._v("#")]),a._v(" 通话中发送消息")]),a._v(" "),t("p",[a._v("调用下面的接口在通话中实现发消息的功能")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('/// <summary>\n/// 通过通话建立后的通道发送数据\n/// </summary>\n/// <param name="item">需要发送数据的JCCallItem对象</param>\n/// <param name="type">文本消息类型，用户可以自定义，例如text，xml等</param>\n/// <param name="content">文本内容</param>\n/// <returns>返回 true 表示正常执行调用流程，false 表示调用异常</returns>\npublic bool sendMessage(JCCallItem item, string type, string content)\n')])])]),t("p",[a._v("当通话中收到消息时，会收到 onMessageReceive 回调")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' /// <summary>\n /// 通话中收到消息的回调\n /// </summary>\n /// <param name="type">消息类型</param>\n /// <param name="content">消息内容</param>\n /// <param name="item">JCCallItem对象</param>\nvoid onMessageReceive(string type, string content, JCCallItem item);\n')])])]),t("p",[a._v("示例代码:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('JCCallItem item = call.getActiveCallItem();\ncall.sendMessage(item, "text", "消息内容");\n')])])]),t("h3",{attrs:{id:"相关回调"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关回调"}},[a._v("#")]),a._v(" 相关回调")]),a._v(" "),t("p",[a._v("通话过程中，如果通话状态发生了改变，如开启关闭静音、开启关闭通话保持、活跃状态切换、开启关闭视频流发送、网络变化等，将会收到通话状态更新的回调")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('/// <summary>\n/// 通话状态更新回调\n/// 当上层收到此回调时，可以根据JCCallItem对象获得该通话所有信息及状态，从而更新通话相关UI\n/// </summary>\n/// <param name="item">JCCallItem对象</param>\n/// <param name="changeParam">更新标识类</param>\nvoid onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam);\n')])])]),t("p",[a._v("关于 ChangeParam 的说明请参考 JCCallItem.cs 文件。")]),a._v(" "),t("p",[a._v("Note")]),a._v(" "),t("p",[a._v("静音状态、通话保持状态、活跃状态可通过\n"),t("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("JCCallItem"),t("OutboundLink")],1),a._v("\n对象获得。")]),a._v(" "),t("p",[a._v("示例代码:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("public void onCallItemUpdate(JCCallItem item, JCCallItem.ChangeParam changeParam) {\n    if (item.mute) { // 开启静音\n        ...\n    } else if (item.hold) { // 挂起通话变化\n        ...\n    } else if (item.held) { // 被挂起变化\n        ...\n    } else if (item.active) { // 激活状态变化\n        ...\n    } else if (item.netStatus) { // 网络状态变化\n        ...\n    }\n}\n")])])]),t("hr")])}),[],!1,null,null,null);e.default=n.exports}}]);