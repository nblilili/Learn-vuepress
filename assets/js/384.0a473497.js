(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{774:function(s,a,t){"use strict";t.r(a);var n=t(29),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"频道管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#频道管理"}},[s._v("#")]),s._v(" 频道管理")]),s._v(" "),t("h2",{attrs:{id:"频道信息查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#频道信息查询"}},[s._v("#")]),s._v(" 频道信息查询")]),s._v(" "),t("p",[s._v("如需查询频道相关信息，例如频道名称、是否存在、成员名、成员数，可以调用 query 接口进行查询操作")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 查询频道相关信息，例如是否存在，人数等\n *\n * @param channelId 频道标识\n * @return          返回操作id，与 onQuery 回调中的 operationId 对应\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("query")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" channelId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("示例代码:")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[s._v("mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("query")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"channelId"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("查询操作发起后，UI 通过以下方法监听回调查询的结果。")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 查询频道信息结果回调\n *\n * @param operationId 操作id，由 query 接口返回\n * @param result      查询结果，true 表示查询成功，false 表示查询失败\n * @param reason      查询失败原因，当 result 为 false 时该值有效\n * @param queryInfo   查询到的频道信息\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" operationId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("boolean")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" @JCMediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MediaChannelReason "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" reason"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JCMediaChannelQueryInfo")]),s._v(" queryInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("示例代码:")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" operationId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("boolean")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" @JCMediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MediaChannelReason "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" reason"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JCMediaChannelQueryInfo")]),s._v(" queryInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查询成功")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 频道标识")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" channelId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" queryInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getChannelId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 频道")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" queryInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getNumber")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 频道成员数")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" clientCount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" queryInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClientCount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 频道成员列表")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("  members "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" queryInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMembers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查询失败")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"频道成员管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#频道成员管理"}},[s._v("#")]),s._v(" 频道成员管理")]),s._v(" "),t("h3",{attrs:{id:"获取成员对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取成员对象"}},[s._v("#")]),s._v(" 获取成员对象")]),s._v(" "),t("p",[s._v("通过 userId 获取频道成员对象")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 获取频道内成员")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="userId">用户唯一标识</param>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns>成员对象</returns>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("JCMediaChannelParticipant")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getParticipant")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" userId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h3",{attrs:{id:"踢出成员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#踢出成员"}},[s._v("#")]),s._v(" 踢出成员")]),s._v(" "),t("p",[s._v("调用下面的方法将成员踢出会议")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 踢人")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="participant">成员</param>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns>调用结果</returns>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kick")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JCMediaChannelParticipant")]),s._v(" participant"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("示例代码:")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JCMediaChannelParticipant")]),s._v(" participant "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getParticipant")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userId"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("participant "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" nil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kick")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("participant"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h3",{attrs:{id:"给其他成员发消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给其他成员发消息"}},[s._v("#")]),s._v(" 给其他成员发消息")]),s._v(" "),t("p",[s._v("如果想在频道中给其他成员发送消息，可以调用下面的接口")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 频道中发送消息，当 toUserId 不为 null 时，content 不能大于 4k")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="type">消息类型</param>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="content">消息内容</param>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="toUserId">接收方成员的userid，值为null发送给所有人</param>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns>是否发送成功</returns>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" toUserId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("其中，消息类型（type）为自定义类型。")]),s._v(" "),t("p",[s._v("示例代码:")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onJoin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")])]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JCMediaChannelReason")]),s._v(" reason"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" channelId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送给所有成员")]),s._v("\n    mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"content"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送给某个成员")]),s._v("\n    mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"content"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userId"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("当频道中的其他成员收到消息时，会收到 onMessageReceive 回调")]),s._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 接收频道消息的回调")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="type">消息类型</param>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="content">消息内容</param>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="fromUserId">消息发送成员userId</param>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onMessageReceive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" fromUserId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("hr")])}),[],!1,null,null,null);a.default=e.exports}}]);