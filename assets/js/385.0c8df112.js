(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{773:function(t,a,s){"use strict";s.r(a);var n=s(29),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"频道管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频道管理"}},[t._v("#")]),t._v(" 频道管理")]),t._v(" "),s("h2",{attrs:{id:"频道信息查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频道信息查询"}},[t._v("#")]),t._v(" 频道信息查询")]),t._v(" "),s("p",[t._v("如需查询频道相关信息，例如频道名称、是否存在、成员名、成员数，可以调用 query 接口进行查询操作。")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 查询频道相关信息，例如是否存在，人数等\n *\n * @param channelId 频道标识\n * @return          返回操作id，与 onQuery 回调中的 operationId 对应\n */")]),t._v("\npublic abstract "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("示例代码")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("mediaChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channelId"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("查询操作发起后，UI 通过以下方法监听回调查询的结果。")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 查询频道信息结果回调\n *\n * @param operationId 操作id，由 query 接口返回\n * @param result      查询结果，true 表示查询成功，false 表示查询失败\n * @param reason      查询失败原因，当 result 为 false 时该值有效\n * @param queryInfo   查询到的频道信息\n */")]),t._v("\npublic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" operationId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" boolean result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("JCMediaChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MediaChannelReason "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JCMediaChannelQueryInfo queryInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("示例代码")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("public "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" operationId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" boolean result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("JCMediaChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MediaChannelReason "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JCMediaChannelQueryInfo queryInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询成功")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 频道标识")]),t._v("\n        String channelId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queryInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannelId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 频道")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queryInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 频道成员数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" clientCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queryInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClientCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 频道成员列表")]),t._v("\n        List"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  members "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queryInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMembers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询失败")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"频道成员管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频道成员管理"}},[t._v("#")]),t._v(" 频道成员管理")]),t._v(" "),s("h3",{attrs:{id:"获取成员对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取成员对象"}},[t._v("#")]),t._v(" 获取成员对象")]),t._v(" "),s("p",[t._v("通过 userId 获取频道成员对象。")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n *  @brief 获得频道成员\n *  @param userId 用户唯一标识\n *  @return 成员对象\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelParticipant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" __nullable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("getParticipant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" __nonnull"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("userId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"踢出成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#踢出成员"}},[t._v("#")]),t._v(" 踢出成员")]),t._v(" "),s("p",[t._v("调用下面的方法将成员踢出会议。")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief 将成员踢出会议\n *\n * @param participant 成员\n * @return true表示成功，false表示失败\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("kick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelParticipant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" __nonnull"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("示例代码")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("JCMediaChannelParticipant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" participant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel getParticipant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"userId"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("participant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel kick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("participant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"给其他成员发消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#给其他成员发消息"}},[t._v("#")]),t._v(" 给其他成员发消息")]),t._v(" "),s("p",[t._v("如果想在频道中给其他成员发送消息，可以调用下面的接口。")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief 发送消息\n *\n * @param type 消息类型\n * @param content 消息内容，当 toUserId 不为 nil 时，content 不能大于 4k\n * @param toUserId 接收者id，null则发给频道所有人员\n * @return 返回 true 表示成功，false表示失败\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("sendMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" __nonnull"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("type content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" __nonnull"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("content toUserId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" __nullable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("toUserId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("其中，消息类型（type）为自定义类型。")]),t._v(" "),s("p",[t._v("示例代码")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onJoin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("result reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCMediaChannelReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("channelId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送给所有成员")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel sendMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"text"')]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"content"')]),t._v(" toUserId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送给某个成员")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mediaChannel sendMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"text"')]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"content"')]),t._v(" toUserId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"接收者id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当频道中的其他成员收到消息时，会收到 onMessageReceive 回调。")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief 接收频道消息的回调\n *\n * @param type 消息类型\n * @param content 消息内容\n * @param fromUserId    消息发送成员的userId\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onMessageReceive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("type content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("content fromUserId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("fromUserId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("hr")])}),[],!1,null,null,null);a.default=e.exports}}]);