(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{435:function(t,a,s){t.exports=s.p+"assets/img/1-1workflowWindows.94880afd.png"},953:function(t,a,s){"use strict";s.r(a);var e=s(29),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"realize-one-to-one-voice-calling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#realize-one-to-one-voice-calling"}},[t._v("#")]),t._v(" Realize One-to-One Voice Calling")]),t._v(" "),e("p",[t._v("This guide introduces how to implement one-to-one voice calls. The API\ncall sequence of one-to-one voice calls is shown in the figure below:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(435),alt:"../../../../_images_en/1-1workflowWindows.png"}})]),t._v(" "),e("h2",{attrs:{id:"initialize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialize"}},[t._v("#")]),t._v(" Initialize")]),t._v(" "),e("p",[t._v("Call\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/cb59bc27-6528-9dbf-c996-de857096f847.htm"}},[t._v("JCMediaDevice.create()")]),t._v("\nand\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/eef10110-a3f7-b505-26fa-4b9ec1e2b998.htm"}},[t._v("JCCall.create()")]),t._v("\nto initialize the modules needed for one-to-one calling:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Create a new class and implement it")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCManager")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCClientCallback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCMediaDeviceCallback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallCallbac")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token preprocessor property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("region")]),t._v(" JCMediaDeviceCallback")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCameraUpdate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onAudioOutputTypeChange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" audioOutputType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token preprocessor property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endregion")])]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token preprocessor property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("region")]),t._v(" JCCallCallbac")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Implement the methods in JCCallCallbac")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token preprocessor property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endregion")])]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Declare object")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCMediaDevice")]),t._v(" mMediaDevice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCMediaChannel")]),t._v(" mMediaChannel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Initialization function")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 1. Media class")]),t._v("\n        mMediaDevice "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JCMediaDevice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 2. Call class")]),t._v("\n        mCall "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JCCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mMediaDevice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"make-a-call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make-a-call"}},[t._v("#")]),t._v(" Make a call")]),t._v(" "),e("p",[t._v("Call\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/613adf03-d597-8221-86d5-0056c1b4d2a0.htm"}},[t._v("call()")]),t._v("\nto initiate a video call, the parameters that need to be filled are:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("userID")]),t._v(" Fill in the user ID of the other party.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("video")]),t._v(" Select whether to call a video call, and true means to make\na video call, while false means to make a voice call.")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/e0226cbc-1ca1-ef9c-5e8e-d3dc853d618d.htm"}},[t._v("extraParam()")]),t._v("\nis a custom pass-through string, which can be obtained through\nitem.extraParam.")])])]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Initiate a voice call")]),t._v("\nmCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isVideo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extraParam"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("After the call is made, both the caller and the called party will\nreceive the callback\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm"}},[t._v("onCallItemAdd()")]),t._v("\nfor the new call, and the call status will change to\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/2134e734-614d-4a19-f411-5fe1a81d3ccd.htm"}},[t._v("STATE_PENDING")]),t._v("\nat this time. You can perform logical operations by overriding\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm"}},[t._v("onCallItemAdd()")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 1. Initiate a voice call")]),t._v("\nmCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 2. Override callback")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCallItemAdd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Business logic")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("direction "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DIRECTION_IN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If you are the called party")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If you are the caller")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"answer-a-call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#answer-a-call"}},[t._v("#")]),t._v(" Answer a call")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("The called party receives the\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/5e605b62-c8dc-4dde-2480-8fdcbbfc2f48.htm"}},[t._v("onCallItemAdd()")]),t._v("\ncallback, and judges whether it is a video call or a voice call\naccording to the\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/0267696e-79ee-8d46-c086-3c071a2b2b3a.htm"}},[t._v("JCCallItem")]),t._v("\nattribute in the callback, and then makes corresponding processing:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCallItemAdd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 1. If it is an incoming video call and it is ringing")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("direction "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" JCCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DIRECTION_IN "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("video"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// 2. Make corresponding processing, such as "ringing" on the interface')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Call\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/7211e914-c311-4457-4b0e-bc4ef46c7733.htm"}},[t._v("answer()")]),t._v("\nto answer the call:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("mCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("answer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("p",[t._v("After the call is answered, the call status changes to\nSTATE_CONNECTING.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you want to reject the call at this time, please call the interface\nto hang up the call. In this case, after calling hang up, the call state\nchanges to STATE_CANCELED.")])]),t._v(" "),e("h2",{attrs:{id:"hang-up-a-call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hang-up-a-call"}},[t._v("#")]),t._v(" Hang up a call")]),t._v(" "),e("p",[t._v("Both the calling party and the called party can hang up the call.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Call\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/6df31ff9-272f-c7cc-1da6-2755c5aad5e0.htm"}},[t._v("getActiveCallItem()")]),t._v("\nto get the currently active call object:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("mCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveCallItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Call\n"),e("a",{attrs:{href:"/portal/reference/V2.1/windows/html/70758778-1450-172d-8684-3dd2818f2a84.htm"}},[t._v("term()")]),t._v("\nto hang up the current active call:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("mCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("term")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("p",[t._v("Sample code:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 1. Get the current active call")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JCCallItem")]),t._v(" item "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveCallItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 2. Hang up the current active call")]),t._v("\nmCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("term")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JCCall"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REASON_NONE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);