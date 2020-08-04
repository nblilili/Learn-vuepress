(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{306:function(e,t,n){e.exports=n.p+"assets/img/ios_login.3a64d080.png"},307:function(e,t,n){e.exports=n.p+"assets/img/ios_logout.e358fc40.png"},709:function(e,t,n){"use strict";n.r(t);var a=n(43),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[e._v("#")]),e._v(" 登录")]),e._v(" "),a("p",[e._v("本章节介绍如何初始化 JC SDK 并登录。")]),e._v(" "),a("h2",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),a("p",[e._v("在主线程调用 "),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCClient.html#//api/name/create:callback:creatParam:",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient\ncreate"),a("OutboundLink")],1),e._v("\n接口创建\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCClient.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient"),a("OutboundLink")],1),e._v("\n实例对象。传入获取到的 "),a("code",[e._v("appKey")]),e._v(" ，即可初始化\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCClient.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Note")]),e._v(" "),a("p",[e._v("由于 JC SDK 功能以模块为基础，且模块实例将被频繁使用，建议使用单例对 JC SDK 中的类进行管理。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('//初始化\n-(bool)initialize {\n   JCClient *client = [JCClient create:"创建应用获取的 AppKey" callback:self creatParam:nil];\n   return client.state == JCClientStateIdle;\n}\n')])])]),a("p",[e._v("其中，callback 为 JCClientCallback 协议的代理对象，该协议用于将 client 的状态变化通知给上层。因此需要先指定\ncallback 的代理对象，然后在该代理对象中实现 JCClientCallback 的方法。")]),e._v(" "),a("p",[e._v("JCClientCallback 中的主要方法如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("//登陆结果回调\n-(void)onLogin:(bool)result reason:(JCClientReason)reason;\n\n//登出回调\n-(void)onLogout:(JCClientReason)reason;\n\n//登陆状态变化通知\n-(void)onClientStateChange:(JCClientState)state oldState:(JCClientState)oldState;\n")])])]),a("p",[e._v("初始化成功后，JCClientState 状态从 JCClientStateNotInit（未初始化） 变为\nJCClientStateIdle（未登录）。")]),e._v(" "),a("h2",{attrs:{id:"发起登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发起登录"}},[e._v("#")]),e._v(" 发起登录")]),e._v(" "),a("p",[e._v("SDK 初始化之后，即可进行登录的集成。")]),e._v(" "),a("p",[e._v("登录接口调用流程如下所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:n(306),alt:"../../../../_images/ios_login.png"}})]),e._v(" "),a("p",[e._v("先创建\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCClientLoginParam.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClientLoginParam"),a("OutboundLink")],1),e._v("\n实例以调整登录参数。后调用\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCClient.html#//api/name/login:password:loginParam:",target:"_blank",rel:"noopener noreferrer"}},[e._v("login"),a("OutboundLink")],1),e._v("\n，发起登录:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('JCClientLoginParam* loginParam = [[JCClientLoginParam alloc] init];\n// 1. 设置服务器环境\nloginParam.serverAddress = @"服务器地址";\n\n// 2. 发起登录\n[client login:userID password:password loginParam:loginParam];\n')])])]),a("p",[e._v("Note")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("环境设置：")]),e._v(" "),a("blockquote",[a("ul",[a("li",[a("p",[e._v("国内环境 "),a("code",[e._v("http:cn.router.justalkcloud.com:8080")]),e._v(" （默认）")])]),e._v(" "),a("li",[a("p",[e._v("国际环境 "),a("code",[e._v("http:intl.router.justalkcloud.com:8080")])])])])])]),e._v(" "),a("li",[a("p",[e._v("userID 不能为空，可由英文、数字和 "),a("code",[e._v("+")]),e._v(" 、 "),a("code",[e._v("-")]),e._v(" 、 "),a("code",[e._v("_")]),e._v(" 、 "),a("code",[e._v(".")]),e._v("\n组成（特殊字符不能作为第一个字符），大小写不敏感，长度不能超过\n64 个字符。")])]),e._v(" "),a("li",[a("p",[e._v("password 不能超过 128 个字符。")])]),e._v(" "),a("li",[a("p",[e._v("调用该接口返回 true 时只代表调用接口成功，并不代表登录成功。登录的结果会通过 onLogin 回调上报。")])])]),e._v(" "),a("p",[e._v("调用发起登录接口成功后，会触发 JCClientCallback 回调中的方法将 client 的状态通知给上层。具体逻辑如下：")]),e._v(" "),a("p",[e._v("首先会触发 JCClientCallback 中的登录状态改变回调\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCClientCallback.html#//api/name/onClientStateChange:oldState:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onClientStateChange"),a("OutboundLink")],1),e._v("\n。您可以在上层实现\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCClientCallback.html#//api/name/onClientStateChange:oldState:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onClientStateChange"),a("OutboundLink")],1),e._v("\n方法并处理相关的逻辑。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-(void)onClientStateChange:(JCClientState)state oldState:(JCClientState)oldState\n{\n    if (state == JCClientStateIdle) { // 未登录\n    ...\n    } else if (state == JCClientStateLogining) { // 登录中\n    ...\n    } else if (state == JCClientStateLogined) {  // 登录成功\n    ...\n    } else if (state == JCClientStateLogouting) {  // 登出中\n    ...\n    }\n}\n")])])]),a("p",[e._v("之后会触发 JCClientCallback 中的\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCClientCallback.html#//api/name/onLogin:reason:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLogin"),a("OutboundLink")],1),e._v("\n回调。您可以在上层实现\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Protocols/JCClientCallback.html#//api/name/onLogin:reason:",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLogin"),a("OutboundLink")],1),e._v("\n方法并处理相关的逻辑。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-(void)onLogin:(bool)result reason:(JCClientReason)reason {\n    if (result) {// 登录成功\n        ...\n    }\n    if (reason == JCClientReasonAuth) {// 账号密码错误\n        ...\n    }\n}\n")])])]),a("p",[e._v("登录成功后，JCClientState 状态从 JCClientStateIdle（未登录）变为\nJCClientStateLogined（登录成功）。SDK\n会自动保持与服务器的连接状态，直到用户主动调用登出接口，或者因为帐号在其他设备登录导致该设备登出。登录成功/失败原因\n参考\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCClientReason.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClientClientReason"),a("OutboundLink")],1),e._v("\n。")]),e._v(" "),a("h2",{attrs:{id:"登出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登出"}},[e._v("#")]),e._v(" 登出")]),e._v(" "),a("p",[e._v("登出接口调用流程如下所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:n(307),alt:"../../../../_images/ios_logout.png"}})]),e._v(" "),a("p",[e._v("调用\n"),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Classes/JCClient.html#//api/name/logout",target:"_blank",rel:"noopener noreferrer"}},[e._v("logout"),a("OutboundLink")],1),e._v("\n可以发起登出，登出后不能进行平台上的各种业务操作")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[client logout];\n")])])]),a("p",[e._v("登出同样会触发登录状态改变(onClientStateChange)回调，之后将通过 onlogout 回调上报登出结果。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-(void)onLogout:(JCClientReason)reason {\n    if (reason == JCClientReasonServerLogout) {// 强制登出\n        ...\n    }\n}\n")])])]),a("p",[e._v("更多登出原因参考："),a("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/ios/Constants/JCClientReason.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClientClientReason"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("登出成功后，JCClientState 状态从 JCClientStateLogined（登录成功） 变为\nJCClientStateIdle（未登录）。")])])}),[],!1,null,null,null);t.default=o.exports}}]);