(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{310:function(e,n,t){e.exports=t.p+"assets/img/workflow_login_android.bbb7c782.png"},311:function(e,n,t){e.exports=t.p+"assets/img/workflow_logout_android.8ba24019.png"},711:function(e,n,t){"use strict";t.r(n);var r=t(43),o=Object(r.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[e._v("#")]),e._v(" 登录")]),e._v(" "),r("p",[e._v("本章节将介绍如何初始化 SDK 并登录。")]),e._v(" "),r("h2",{attrs:{id:"初始化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[e._v("#")]),e._v(" 初始化")]),e._v(" "),r("p",[e._v("在主线程调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/04eda8ae-87ca-50c7-5b35-97c067466d0c.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient.create()"),r("OutboundLink")],1),e._v("\n，创建\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/a01b672a-1c8a-18a7-b550-727bbcad2f52.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient"),r("OutboundLink")],1),e._v("\n实例对象。传入获取到的 "),r("code",[e._v("appKey")]),e._v(" ，即可初始化\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/a01b672a-1c8a-18a7-b550-727bbcad2f52.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient"),r("OutboundLink")],1),e._v("\n。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('/// JCClient 对象\nJCClient mClient;\n\n/// 初始化函数\npublic bool initialize(Application app) {\n    mClient = JCClient.create(app, "用户 appKey", new JCClientCallback() {\n\n        public void onLogin(bool b, int i) {\n\n        }\n\n        public void onClientStateChange(int i, int i1) {\n\n        }\n    }, null);\n    /// 获取初始化状态（用来判断初始化状态）\n    mInit = mClient.state == JCClientState.Idle;\n    return mInit;\n}\n')])])]),r("h2",{attrs:{id:"发起登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发起登录"}},[e._v("#")]),e._v(" 发起登录")]),e._v(" "),r("p",[e._v("SDK 初始化之后，即可进行登录的集成。登出接口调用流程如下所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(310),alt:"../../../../_images/workflow_login_android.png"}})]),e._v(" "),r("p",[e._v("先创建\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/bf49d392-d1f9-d885-36e5-4af282fdf4b8.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient.LoginParam"),r("OutboundLink")],1),e._v("\n实例以调整登录参数。后调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/62440094-63ab-7aa8-981d-2c2337419914.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("login()"),r("OutboundLink")],1),e._v("\n，发起登录:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('JCClient.LoginParam loginParam = new JCClient.LoginParam();\n/// 1. 设置服务器环境。\nloginParam.serverAddress = "服务器地址";\n/// 2. 发起登录\nmClient.login(userID, password, loginParam);\n')])])]),r("p",[e._v("Note")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("环境设置")]),e._v(" "),r("blockquote",[r("ul",[r("li",[r("p",[e._v("国内环境 "),r("code",[e._v("http:cn.router.justalkcloud.com:8080")]),e._v(" （默认）")])]),e._v(" "),r("li",[r("p",[e._v("国际环境 "),r("code",[e._v("http:intl.router.justalkcloud.com:8080")])])])])])]),e._v(" "),r("li",[r("p",[e._v("userID 不能为空，可由英文、数字和 "),r("code",[e._v("+")]),e._v(" 、 "),r("code",[e._v("-")]),e._v(" 、 "),r("code",[e._v("_")]),e._v(" 、 "),r("code",[e._v(".")]),e._v("\n组成（特殊字符不能作为第一个字符），大小写不敏感，长度不能超过\n64 个字符。")])]),e._v(" "),r("li",[r("p",[e._v("password 不能超过 128 个字符。")])]),e._v(" "),r("li",[r("p",[e._v("调用该接口返回 true 时只代表调用接口成功，并不代表登录成功。登录的结果会通过 onLogin 回调上报。")])])]),e._v(" "),r("p",[e._v("调用接口成功后，首先会触发登录状态改变回调\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/91ac4180-d727-d901-a06b-3ed4a675f4fb.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onClientStateChange()"),r("OutboundLink")],1),e._v("\n。您可以通过重写\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/91ac4180-d727-d901-a06b-3ed4a675f4fb.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onClientStateChange()"),r("OutboundLink")],1),e._v("\n执行逻辑操作。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("public void onClientStateChange(JCClientState state, JCClientState oldState) {\n     if (state == JCClient.STATE_IDLE) { /// 未登录\n       ...\n    } else if (state == JCClient.STATE_LOGINING) { /// 正在登录\n       ...\n    } else if (state == JCClient.STATE_LOGINED) { /// 登录成功\n       ...\n    } else if (state == JCClient.STATE_LOGOUTING) { /// 登出中\n       ...\n    }\n}\n")])])]),r("p",[e._v("之后触发\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/98254a36-6a0c-4495-3254-5dc93cd52f52.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLogin()"),r("OutboundLink")],1),e._v("\n回调。您可以通过重写\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/98254a36-6a0c-4495-3254-5dc93cd52f52.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("onLogin()"),r("OutboundLink")],1),e._v("\n执行逻辑操作。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("public void onLogin(bool result, JCClientReason reason) {\n    if (result) {/// 登录成功\n        ...\n    }\n    if (reason == REASON_AUTH) {/// 账号密码错误\n        ...\n    }\n\n}\n")])])]),r("p",[e._v("登录成功之后，SDK 会自动保持与服务器的连接状态，直到用户主动调用登出接口，或者因为帐号在其他设备登录导致该设备登出。登录成功/失败原因 参考\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/9d6e6243-1b3f-55a6-7d0a-3158812dfc6f.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient.ClientReason"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"登出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#登出"}},[e._v("#")]),e._v(" 登出")]),e._v(" "),r("p",[e._v("登出接口调用流程如下所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(311),alt:"../../../../_images/workflow_logout_android.png"}})]),e._v(" "),r("p",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/4b7a3fd4-f6bf-fc4e-8cf9-78023f69b459.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("logout()"),r("OutboundLink")],1),e._v("\n可以发起登出。更多登出原因参考："),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/html/9d6e6243-1b3f-55a6-7d0a-3158812dfc6f.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCClient.ClientReason"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("public void onLogout(JCClientReason reason) {\n    if (reason == REASON_SERVER_LOGOUT) {/// 强制登出\n        ...\n    }\n}\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);