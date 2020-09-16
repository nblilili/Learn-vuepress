(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{549:function(t,e,r){t.exports=r.p+"assets/img/webrtc21.0e427a37.png"},550:function(t,e,r){t.exports=r.p+"assets/img/webrtc9.3e9dc88c.png"},891:function(t,e,r){"use strict";r.r(e);var v=r(29),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"功能简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能简介"}},[t._v("#")]),t._v(" 功能简介")]),t._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("p",[t._v("WebRTC 的优势是在浏览器中集成了媒体引擎，从而不需要另外安装插件或代理程序，可实现免安装使用；但并不是所有的浏览器都能够支持 WebRTC，目前 WebRTC 支持以下浏览器版本：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("平台")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("实现功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("桌上 PC 端")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("Google Chrome 59.0.3071.115 及以上"),v("br"),t._v("Mozilla Firefox 54.0.1 及以上"),v("br"),t._v("Opera 20 及以上"),v("br"),t._v("Safari 11 及以上"),v("br"),t._v("360 7.1.2 及以上（极速模式）")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("移动端")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("Android Google Chrome 29 及以上"),v("br"),t._v("Android Mozilla Firefox 24 及以上"),v("br"),t._v("Android 微信7.0 及以上"),v("br"),t._v("safari 11 及以上，12 以后iPhone只支持safari")])])])]),t._v(" "),v("h2",{attrs:{id:"通讯原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通讯原理"}},[t._v("#")]),t._v(" 通讯原理")]),t._v(" "),v("p",[t._v("SDK Web 端音视频通话是借助 WebRTC 搭建媒体通道，从而实现 Web 端与 ConfDelivery 之间的通信。ConfDelivery 作为一种特殊的终端，可实现 CDN 推流、会议录制、会议跟 WebRTC 对接服务等功能。")]),t._v(" "),v("p",[v("strong",[t._v("WebRTC 通讯原理")])]),t._v(" "),v("p",[v("img",{attrs:{src:r(549),alt:"img"}})]),t._v(" "),v("p",[t._v("- 假设会场已经建立，Browser 创建 WebRTC 对象并通过 WebServer 接入 GW Entry；")]),t._v(" "),v("p",[t._v("- GW Entry 实例化网关 ConfDelivery，并通过 WebServer 透传 Offer/Answer 媒体协商 SDP；")]),t._v(" "),v("p",[t._v("- Browser 和 ConfDelivery 建立连接并完成协商；")]),t._v(" "),v("p",[t._v("- Browser 成功创建并加入或加入已存在的会场。")]),t._v(" "),v("p",[t._v("会议中的控制信息通过 Data-Channel 进行传递。")]),t._v(" "),v("p",[t._v("对于业务上的控制，由于 ConfDelivery 运行在服务器，由 JSMD (会议引擎）负责启动并传递初始配置，所以其他业务上的控制，只能通过特定的控制协议，远程操作 ConfDelivery 完成。")]),t._v(" "),v("p",[v("strong",[t._v("控制协议有两种格式")])]),t._v(" "),v("p",[t._v("以 @ 开头的明文格式，适合手工输入，但无法处理特殊字符，此格式下 ConfDelivery 会自动反馈结果；")]),t._v(" "),v("p",[t._v("BASE64 编码的 JSON 串，适合由代码构造，可以处理特殊字符，但没有反馈机制。")]),t._v(" "),v("p",[t._v("两种格式的控制指令具体运行机制如下图")]),t._v(" "),v("p",[v("img",{attrs:{src:r(550),alt:"img"}})]),t._v(" "),v("p",[t._v("在 @ 开头的明文格式下，Web 端通过发送指令直接作用到目标对象，并通过 ConfDelivery 对目标对象进行相应的处理。")]),t._v(" "),v("p",[t._v("在 BASE64 编码的 JSON 字符串中，通过把会议指令进行加密，直接作用到 WebRTC，并由 WebRTC 对指令进行后续的处理。")]),t._v(" "),v("p",[t._v("两种控制指令的格式说明如下表所示")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("指令格式")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("实现功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("@ 开头的明文格式")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("@ 开头的明文格式之后必须紧跟 ConfDelivery 的短名,然后是指令"),v("br"),t._v("形式如下："),v("br"),t._v("'@'+peer+cmd+param"),v("br"),t._v("peer 为指令发送的目标"),v("br"),t._v("cmd 为指令,大小写不敏感"),v("br"),t._v("param 为相应参数"),v("br"),t._v("举例："),v("br"),t._v("ConfDelivery 的账户 ID 是[username:delivery0121@101055.cloud.justalk.com]，则如下打印的帮助指令都是正确的："),v("br"),t._v("@delivery0121 help"),v("br"),t._v("@delivery0121help"),v("br")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("BASE64 编码的 JSON 格式")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("格式为：{“cmd”:”cmd”,param}"),v("br"),t._v("cmd 为指令, param 为相应参数"),v("br"),t._v("举例："),v("br"),t._v("修改成员昵称的指令："),v("br"),t._v("{“cmd”:”setnick”, “nick”:%s, “target”:%s}")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);