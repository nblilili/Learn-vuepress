(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{595:function(n,e,a){"use strict";a.r(e);var t=a(43),r=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"频道管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频道管理"}},[n._v("#")]),n._v(" 频道管理")]),n._v(" "),a("h2",{attrs:{id:"频道信息查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频道信息查询"}},[n._v("#")]),n._v(" 频道信息查询")]),n._v(" "),a("p",[n._v("如需查询频道相关信息，例如频道名称、是否存在、成员名、成员数，可以调用 query 接口进行查询操作")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("/**\n * 查询频道相关信息，例如是否存在，人数等\n *\n * @param channelId 频道标识\n * @return          返回操作id，与 onQuery 回调中的 operationId 对应\n */\npublic abstract int query(String channelId);\n")])])]),a("p",[n._v("示例代码:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('mediaChannel.query("channelId");\n')])])]),a("p",[n._v("查询操作发起后，UI 通过以下方法监听回调查询的结果：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("/**\n * 查询频道信息结果回调\n *\n * @param operationId 操作id，由 query 接口返回\n * @param result      查询结果，true 表示查询成功，false 表示查询失败\n * @param reason      查询失败原因，当 result 为 false 时该值有效\n * @param queryInfo   查询到的频道信息\n */\npublic void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo);\n")])])]),a("p",[n._v("示例代码:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("public void onQuery(int operationId, boolean result, @JCMediaChannel.MediaChannelReason int reason, JCMediaChannelQueryInfo queryInfo) {\n   // 查询成功\n   if (result) {\n        // 频道标识\n        String channelId = queryInfo.getChannelId();\n        // 频道\n        int number = queryInfo.getNumber();\n        // 频道成员数\n        int clientCount = queryInfo.getClientCount();\n        // 频道成员列表\n        List<String>  members = queryInfo.getMembers();\n   } else {\n        // 查询失败\n   }\n}\n")])])]),a("hr"),n._v(" "),a("h2",{attrs:{id:"频道成员管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频道成员管理"}},[n._v("#")]),n._v(" 频道成员管理")]),n._v(" "),a("h3",{attrs:{id:"获取成员对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取成员对象"}},[n._v("#")]),n._v(" 获取成员对象")]),n._v(" "),a("p",[n._v("通过 userId 获取频道成员对象")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("/**\n *  @brief 获得频道成员\n *  @param userId 用户唯一标识\n *  @return 成员对象\n */\n-(JCMediaChannelParticipant* __nullable)getParticipant:(NSString* __nonnull)userId;\n")])])]),a("hr"),n._v(" "),a("h3",{attrs:{id:"踢出成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#踢出成员"}},[n._v("#")]),n._v(" 踢出成员")]),n._v(" "),a("p",[n._v("调用下面的方法将成员踢出会议")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("/**\n * @brief 将成员踢出会议\n *\n * @param participant 成员\n * @return true表示成功，false表示失败\n */\n-(BOOL)kick:(JCMediaChannelParticipant * __nonnull)participant;\n")])])]),a("p",[n._v("示例代码:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('JCMediaChannelParticipant* participant = [mediaChannel getParticipant:@"userId"];\nif (participant != nil) {\n    [mediaChannel kick:participant];\n}\n')])])]),a("hr"),n._v(" "),a("h3",{attrs:{id:"给其他成员发消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给其他成员发消息"}},[n._v("#")]),n._v(" 给其他成员发消息")]),n._v(" "),a("p",[n._v("如果想在频道中给其他成员发送消息，可以调用下面的接口")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("/**\n * @brief 发送消息\n *\n * @param type 消息类型\n * @param content 消息内容，当 toUserId 不为 nil 时，content 不能大于 4k\n * @param toUserId 接收者id，null则发给频道所有人员\n * @return 返回 true 表示成功，false表示失败\n */\n-(bool)sendMessage:(NSString * __nonnull)type content:(NSString * __nonnull)content toUserId:(NSString * __nullable)toUserId;\n")])])]),a("p",[n._v("其中，消息类型（type）为自定义类型。")]),n._v(" "),a("p",[n._v("示例代码:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('-(void)onJoin:(bool)result reason:(JCMediaChannelReason)reason channelId:(NSString*)channelId {\n    // 发送给所有成员\n    [mediaChannel sendMessage:@"text" content:@"content" toUserId:nil];\n    // 发送给某个成员\n    [mediaChannel sendMessage:@"text" content:@"content" toUserId:@"接收者id"];\n}\n')])])]),a("p",[n._v("当频道中的其他成员收到消息时，会收到 onMessageReceive 回调")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("/**\n * @brief 接收频道消息的回调\n *\n * @param type 消息类型\n * @param content 消息内容\n * @param fromUserId    消息发送成员的userId\n */\n-(void)onMessageReceive:(NSString *)type content:(NSString *)content fromUserId:(NSString *)fromUserId;\n")])])]),a("hr")])}),[],!1,null,null,null);e.default=r.exports}}]);