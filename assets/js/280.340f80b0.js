(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{615:function(t,a,s){"use strict";s.r(a);var n=s(29),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通话管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通话管理"}},[t._v("#")]),t._v(" 通话管理")]),t._v(" "),s("h2",{attrs:{id:"通话人数设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通话人数设置"}},[t._v("#")]),t._v(" 通话人数设置")]),t._v(" "),s("p",[t._v("发起通话前可以通过 maxCallNum 属性设置通话的最大人数，默认为 1。如果是视频通话，最大人数只能是 1，如果是语音通话，最大人数为\n2。")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxCallNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当通话超过最大人数时：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("呼出会失败，原因为 JCCallReasonCallOverLimit（超过通话数限制）。")])]),t._v(" "),s("li",[s("p",[t._v("收到来电会自动拒绝，原因为 JCCallReasonBusy（忙）。")])])]),t._v(" "),s("h2",{attrs:{id:"通话过程控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通话过程控制"}},[t._v("#")]),t._v(" 通话过程控制")]),t._v(" "),s("h3",{attrs:{id:"通话静音"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通话静音"}},[t._v("#")]),t._v(" 通话静音")]),t._v(" "),s("p",[t._v("通过下面的方法开启或关闭静音，开启关闭静音需要根据 JCCallItem\n中的静音状态（"),s("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/html/bb1ed5b7-2f76-e89d-f964-328e2b746904.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mute"),s("OutboundLink")],1),t._v("）来决定，静音开启后，对方将听不到您的声音")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 静音，通过JCCallItem中的静音状态来决定开启关闭")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="item">JCCallItem对象</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"通话录音"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通话录音"}},[t._v("#")]),t._v(" 通话录音")]),t._v(" "),s("p",[t._v("可以在通话中进行录音，开启或关闭录音需要根据当前的录音状态（audioRecord）来决定。如果正在录制或者通话被挂起或者挂起的情况下，不能进行音频录制。录音状态可通过\n"),s("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/ios/Classes/JCCallItem.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JCCallItem"),s("OutboundLink")],1),t._v("\n对象获取。")]),t._v(" "),s("p",[t._v("开启或关闭录音接口如下")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 通话录音，通过JCCallItem对象中的呼叫保持状态来决定开启关闭呼叫保持")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="item">JCCallItem对象</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="enable">开启关闭录音</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="filePath">录音文件路径</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("audioRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" enable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" filePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例代码:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("```\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveCallItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 录音结束")]),t._v("\n    call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("audioRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your filePath"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建录音文件保存路径")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" filePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 录音文件的绝对路径，SDK会自动创建录音文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filtPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始录音")]),t._v("\n        call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("audioRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n```\n")])])]),s("p",[t._v("开启或关闭录音时，录音状态会发生改变，并通过 onCallItemUpdate 回调上报")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 通话状态更新回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 当上层收到此回调时，可以根据JCCallItem对象获得该通话所有信息及状态，从而更新通话相关UI")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="item">JCCallItem对象</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="changeParam">更新标识类</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCallItemUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeParam")]),t._v(" changeParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"开启-关闭呼叫保持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启-关闭呼叫保持"}},[t._v("#")]),t._v(" 开启/关闭呼叫保持")]),t._v(" "),s("p",[t._v("调用下面的方法对通话对象进行呼叫保持或解除呼叫保持（当通话对象处于被保持状态（即状态为held）时不可以进行此操作），开启或关闭呼叫保持需要根据\nJCCallItem\n对象中（"),s("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/html/dc13e9d5-2842-1b22-5d6d-9a617d321458.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("hold"),s("OutboundLink")],1),t._v("）的呼叫保持状态来决定")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 呼叫保持，通过JCCallItem对象中的呼叫保持状态来决定开启关闭")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="item">JCCallItem对象</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"切换活跃通话"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换活跃通话"}},[t._v("#")]),t._v(" 切换活跃通话")]),t._v(" "),s("p",[t._v("调用下面的方法对通话中被保持的对象和活跃的通话对象进行切换")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 切换活跃通话")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="item">需要变活跃的JCCallItem对象</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <returns>返回true表示正常执行调用流程，false表示调用异常</returns>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("becomeActive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例代码")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取活跃通话对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveCallItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("becomeActive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"通话中发送消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通话中发送消息"}},[t._v("#")]),t._v(" 通话中发送消息")]),t._v(" "),s("p",[t._v("调用下面的接口在通话中实现发消息的功能")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 通过通话建立后的通道发送数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="item">需要发送数据的JCCallItem对象</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="type">文本消息类型，用户可以自定义，例如text，xml等</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="content">文本内容</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <returns>返回 true 表示正常执行调用流程，false 表示调用异常</returns>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("当通话中收到消息时，会收到 onMessageReceive 回调")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("```\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 通话中收到消息的回调")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="type">消息类型</param>')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="content">消息内容</param>')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="item">JCCallItem对象</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMessageReceive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n```\n")])])]),s("p",[t._v("示例代码:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveCallItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"消息内容"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"相关回调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关回调"}},[t._v("#")]),t._v(" 相关回调")]),t._v(" "),s("p",[t._v("通话过程中，如果通话状态发生了改变，如开启关闭静音、开启关闭通话保持、活跃状态切换、开启关闭视频流发送、网络变化等，将会收到通话状态更新的回调")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 通话状态更新回调")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 当上层收到此回调时，可以根据JCCallItem对象获得该通话所有信息及状态，从而更新通话相关UI")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="item">JCCallItem对象</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <param name="changeParam">更新标识类</param>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCallItemUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeParam")]),t._v(" changeParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("关于 ChangeParam 的说明请参考 JCCallItem.cs 文件。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("静音状态、通话保持状态、活跃状态可通过\n"),s("a",{attrs:{href:"http://developer.juphoon.com/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("JCCallItem"),s("OutboundLink")],1),t._v("\n对象获得。")])]),t._v(" "),s("p",[t._v("示例代码:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCallItemUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeParam")]),t._v(" changeParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启静音")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂起通话变化")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("held"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被挂起变化")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 激活状态变化")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netStatus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网络状态变化")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr")])}),[],!1,null,null,null);a.default=e.exports}}]);