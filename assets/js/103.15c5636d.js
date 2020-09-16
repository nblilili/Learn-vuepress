(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1044:function(t,a,n){"use strict";n.r(a);var s=n(29),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"log-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-in"}},[t._v("#")]),t._v(" Log In")]),t._v(" "),s("p",[t._v("This guide introduces how to initialize JC SDK and log in.")]),t._v(" "),s("h2",{attrs:{id:"initialize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize"}},[t._v("#")]),t._v(" Initialize")]),t._v(" "),s("p",[t._v("Call the "),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCClient.html#//api/name/create:callback:creatParam:"}},[t._v("JCClient\ncreate")]),t._v("\ninterface on the main thread to create a\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCClient.html"}},[t._v("JCClient")]),t._v("\ninstance object. Input the obtained "),s("code",[t._v("appKey")]),t._v(" to initialize\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCClient.html"}},[t._v("JCClient")]),t._v("\n.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Since JC SDK functions are based on modules and module instances will be\nfrequently used, it is recommended to use a singleton to manage the\nclasses in the JC SDK.")])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Initialize")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("initialize "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   JCClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("JCClient create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AppKey"')]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" creatParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCClientStateIdle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Among them, callback is the proxy object of the JCClientCallback\nprotocol, which is used to notify the upper layer of the client’s state\nchanges. Therefore, you need to specify the proxy object of callback\nfirst, and then implement the method of JCClientCallback in the proxy\nobject.")]),t._v(" "),s("p",[t._v("The main methods in JCClientCallback are as follows:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Login result callback")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onLogin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("result reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCClientReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Logout callback")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onLogout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCClientReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Login status change notification")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onClientStateChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCClientState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("state oldState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCClientState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("oldState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("After successful initialization, JCClientState state changes from\nJCClientStateNotInit (not initialized) to JCClientStateIdle (not logged\nin).")]),t._v(" "),s("h2",{attrs:{id:"initiate-login"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initiate-login"}},[t._v("#")]),t._v(" Initiate login")]),t._v(" "),s("p",[t._v("After the SDK is initialized, login integration is possible.")]),t._v(" "),s("p",[t._v("The call flow of the login interface is as follows:")]),t._v(" "),s("p",[s("img",{attrs:{src:n(356),alt:"../../../../_images_en/ios_login.png"}})]),t._v(" "),s("p",[t._v("First create a\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCClientLoginParam.html"}},[t._v("JCClientLoginParam")]),t._v("\ninstance to adjust the login parameters. Then call\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCClient.html#//api/name/login:password:loginParam:"}},[t._v("login")]),t._v("\nto initiate login:")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("JCClientLoginParam"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" loginParam "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("JCClientLoginParam alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. Environment settings")]),t._v("\nloginParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serverAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Server address"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. Initiate login")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("client login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("userID password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("password loginParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("loginParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Environment settings:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Domestic environment "),s("code",[t._v("http:cn.router.justalkcloud.com:8080")]),t._v("\n(Default)")])]),t._v(" "),s("li",[s("p",[t._v("International environment\n"),s("code",[t._v("http:intl.router.justalkcloud.com:8080")])])])])]),t._v(" "),s("li",[s("p",[t._v("userID is English, numbers and "),s("code",[t._v("+")]),t._v(" "),s("code",[t._v("-")]),t._v(" "),s("code",[t._v("_")]),t._v(" "),s("code",[t._v(".")]),t._v(" , case-insensitive,\nthe length should not exceed 64 characters, "),s("code",[t._v("-")]),t._v(" "),s("code",[t._v("_")]),t._v(" "),s("code",[t._v(".")]),t._v(" cannot be\nthe first character.")])]),t._v(" "),s("li",[s("p",[t._v("password the length should not exceed 128 characters.")])]),t._v(" "),s("li",[s("p",[t._v("When calling this interface returns true, it only means that the\ninterface is called successfully, not that the login is successful.\nThe result of the login will be reported through the onLogin\ncallback.")])])])]),t._v(" "),s("p",[t._v("After the call to initiate the login interface is successful, the method\nin the JCClientCallback callback will be triggered to notify the upper\nlayer of the status of the client. The specific logic is as follows:")]),t._v(" "),s("p",[t._v("First, the login state change callback\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCClientCallback.html#//api/name/onClientStateChange:oldState:"}},[t._v("onClientStateChange")]),t._v("\nin JCClientCallback will be triggered. You can implement the\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCClientCallback.html#//api/name/onClientStateChange:oldState:"}},[t._v("onClientStateChange")]),t._v("\nmethod in the upper layer and handle the related logic.")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onClientStateChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCClientState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("state oldState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCClientState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("oldState\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCClientStateIdle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Not logged in")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCClientStateLogining"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logging in")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCClientStateLogined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Login successful")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCClientStateLogouting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Then the\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCClientCallback.html#//api/name/onLogin:reason:"}},[t._v("onLogin")]),t._v("\ncallback in JCClientCallback will be triggered. You can implement the\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Protocols/JCClientCallback.html#//api/name/onLogin:reason:"}},[t._v("onLogin")]),t._v("\nmethod in the upper layer and handle the related logic:")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onLogin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("result reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCClientReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Login successful")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCClientReasonAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Account password is wrong")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("After successful login, the JCClientState status changes from\nJCClientStateIdle (not logged in) to JCClientStateLogined (successful\nlogin). The SDK will automatically maintain the connection status with\nthe server until the user actively calls the logout interface, or the\ndevice is logged out, or the account is logged in on another device.\nLogin success/failure reason reference\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Constants/JCClientReason.html"}},[t._v("JCClientClientReason")]),t._v("\n.")],1),t._v(" "),s("h2",{attrs:{id:"log-out"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-out"}},[t._v("#")]),t._v(" Log out")]),t._v(" "),s("p",[t._v("The call flow of the logout interface is as follows:")]),t._v(" "),s("p",[s("img",{attrs:{src:n(357),alt:"../../../../_images_en/ios_logout.png"}})]),t._v(" "),s("p",[t._v("Call\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Classes/JCClient.html#//api/name/logout"}},[t._v("logout")]),t._v("\nto initiate logout, and you cannot carry out various business operations\non the platform after logging out:")],1),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("client logout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Logging out will also trigger a login state change (onClientStateChange)\ncallback, after which the logout result will be reported via the\nonLogout callback:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("onLogout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCClientReason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("reason "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCClientReasonServerLogout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Force logout")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("More logout reason reference:\n"),s("RouterLink",{attrs:{to:"/portal/reference/V2.1/ios/Constants/JCClientReason.html"}},[t._v("JCClientClientReason")])],1),t._v(" "),s("p",[t._v("After logging out successfully, the JCClientState status changes from\nJCClientStateLogined (successful login) to JCClientStateIdle (not logged\nin).")])])}),[],!1,null,null,null);a.default=e.exports},356:function(t,a,n){t.exports=n.p+"assets/img/ios_login.a76da88b.png"},357:function(t,a,n){t.exports=n.p+"assets/img/ios_logout.1ef07138.png"}}]);