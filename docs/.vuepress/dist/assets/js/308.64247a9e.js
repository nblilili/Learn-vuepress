(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{712:function(a,s,e){"use strict";e.r(s);var t=e(43),i=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"音频管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#音频管理"}},[a._v("#")]),a._v(" 音频管理")]),a._v(" "),e("h2",{attrs:{id:"音频设备管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#音频设备管理"}},[a._v("#")]),a._v(" 音频设备管理")]),a._v(" "),e("h3",{attrs:{id:"当前音频输入输出设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当前音频输入输出设备"}},[a._v("#")]),a._v(" 当前音频输入输出设备")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/// <summary>\n/// 当前输入设备\n/// </summary>\npublic JCMediaDeviceAudio audioInput\n\n/// <summary>\n/// 当前输出设备\n/// </summary>\npublic JCMediaDeviceAudio audioOutput\n")])])]),e("h3",{attrs:{id:"获取音频输入设备列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取音频输入设备列表"}},[a._v("#")]),a._v(" 获取音频输入设备列表")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/// <summary>\n/// 音频输入设备列表\n/// </summary>\npublic List<JCMediaDeviceAudio> audioInputs\n")])])]),e("p",[a._v("其中，JCMediaDeviceAudio 有以下几个变量")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/// <summary>\n/// 名称\n/// </summary>\npublic string audioName\n/// <summary>\n/// id\n/// </summary>\npublic string audioId\n")])])]),e("h3",{attrs:{id:"获取音频输出设备列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取音频输出设备列表"}},[a._v("#")]),a._v(" 获取音频输出设备列表")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/// <summary>\n/// 音频输出设备列表\n/// </summary>\npublic List<JCMediaDeviceAudio> audioOutputs\n")])])]),e("p",[a._v("其中，JCMediaDeviceAudio 有以下几个变量")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/// <summary>\n/// 名称\n/// </summary>\npublic string audioName\n/// <summary>\n/// id\n/// </summary>\npublic string audioId\n")])])]),e("p",[a._v("示例代码:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("// 获取音频输入设备列表\nList<JCMediaDeviceAudio> audioInputDevices = mediaDevice.audioInputs;\n\n// 获取音频输出设备列表\nList<JCMediaDeviceAudio> audioOutputDevices = mediaDevice.audioOutputs;\n")])])]),e("h3",{attrs:{id:"开启-关闭音频设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-关闭音频设备"}},[a._v("#")]),a._v(" 开启/关闭音频设备")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/// <summary>\n/// 启动音频，一般正式开启通话前需要调用此接口\n///</summary>\n///<returns>启动成功失败</returns>\npublic bool startAudio()\n\n/// <summary>\n/// 停止音频，一般在通话结束时调用\n/// </summary>\n/// <returns>停止音频成功失败</returns>\npublic bool stopAudio()\n")])])]),e("h3",{attrs:{id:"获取当前音频输出等级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取当前音频输出等级"}},[a._v("#")]),a._v(" 获取当前音频输出等级")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("/// <summary>\n/// 获取当前输出等级\n/// </summary>\n/// <returns>音频输出等级</returns>\npublic int getSpkLevel()\n")])])]),e("p",[a._v("示例代码:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("// 打开音频\nmediaDevice.startAudio();\n\n// 关闭音频\nmediaDevice.stopAudio();\n\n// 获取当前输出等级\nint level = mediaDevice.getSpkLevel();\n")])])])])}),[],!1,null,null,null);s.default=i.exports}}]);