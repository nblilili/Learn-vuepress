(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{345:function(e,a,t){e.exports=t.p+"assets/img/enablevideostream.4e8751ac.png"},509:function(e,a,t){"use strict";t.r(a);var r=t(43),l=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"通话管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通话管理"}},[e._v("#")]),e._v(" 通话管理")]),e._v(" "),r("h2",{attrs:{id:"通话人数设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通话人数设置"}},[e._v("#")]),e._v(" 通话人数设置")]),e._v(" "),r("p",[e._v("发起通话前可以通过 maxCallNum 属性设置通话的最大人数，默认为 1。如果是视频通话，最大人数只能是 1，如果是语音通话，最大人数为\n2。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("JCManager::shared()->call->maxCallNum = 1;\n")])])]),r("p",[e._v("当通话超过最大数时，呼出会失败，收到来电会自动拒绝。")]),e._v(" "),r("h2",{attrs:{id:"通话过程控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通话过程控制"}},[e._v("#")]),e._v(" 通话过程控制")]),e._v(" "),r("h3",{attrs:{id:"通话静音"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通话静音"}},[e._v("#")]),e._v(" 通话静音")]),e._v(" "),r("p",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a62d7c7454fae84422579e3a6275af243",target:"_blank",rel:"noopener noreferrer"}},[e._v("mute"),r("OutboundLink")],1),e._v("\n方法开启或关闭静音，开启关闭静音需要根据 JCCallItem 对象当前的静音状态来决定，静音开启后，对方将听不到您的声音")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("//获取活跃通话对象\nJCCallItem* item = JCManager::shared()->call->getActiveCallItem();\n//获取通话对象的静音状态\nbool isMute = item->getMute();\n    if (item != NULL)\n    {\n    //开启或关闭静音\n            JCManager::shared()->call->mute(item);\n    }\n")])])]),r("p",[e._v("该方法调用后会触发\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18",target:"_blank",rel:"noopener noreferrer"}},[e._v("onCallItemUpdate"),r("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"开启-关闭呼叫保持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开启-关闭呼叫保持"}},[e._v("#")]),e._v(" 开启/关闭呼叫保持")]),e._v(" "),r("p",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#aae536642d3d5c785c2ce7d9275f8653a",target:"_blank",rel:"noopener noreferrer"}},[e._v("hold"),r("OutboundLink")],1),e._v("\n方法对通话对象进行呼叫保持或解除呼叫保持（当通话对象处于被保持状态（即状态为held）时不可以进行此操作），开启或关闭呼叫保持需要根据\nJCCallItem 对象当前的呼叫保持状态来决定")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("//获取活跃通话对象\nJCCallItem* item = JCManager::shared()->call->getActiveCallItem();\n//获取通话对象的呼叫保持状态\nbool isHeld = item->getHold();\nif (item != NULL)\n    {\n    //开启或关闭呼叫保持\n            JCManager::shared()->call->hold(item);\n    }\n")])])]),r("h3",{attrs:{id:"切换活跃通话"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#切换活跃通话"}},[e._v("#")]),e._v(" 切换活跃通话")]),e._v(" "),r("p",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#ae45d0744f3df39cc2c6dc3bb00bb7354",target:"_blank",rel:"noopener noreferrer"}},[e._v("becomeActive"),r("OutboundLink")],1),e._v("\n方法对通话中被保持的对象和活跃的通话对象进行切换")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("//获取通话对象列表\nstd::list<JCCallItem*>* callItems = JCManager::shared()->call->getCallItems();\nJCManager::shared()->call->becomeActive(callItems[1]);\n")])])]),r("hr"),e._v(" "),r("h3",{attrs:{id:"开启-关闭视频流发送"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开启-关闭视频流发送"}},[e._v("#")]),e._v(" 开启/关闭视频流发送")]),e._v(" "),r("p",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#adcd6dd97b6737909ae0348a0e714d754",target:"_blank",rel:"noopener noreferrer"}},[e._v("enableUploadVideoStream"),r("OutboundLink")],1),e._v("\n方法开启或关闭视频流发送，该方法调用后会触发\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18",target:"_blank",rel:"noopener noreferrer"}},[e._v("onCallItemUpdate"),r("OutboundLink")],1),e._v("\n回调。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("JCCallItem* item = JCManager::shared()->call->getActiveCallItem();\n    if (item != NULL)\n    {\n            JCManager::shared()->call->enableUploadVideoStream(item);\n    }\n")])])]),r("p",[e._v("该接口的具体作用机制如下图所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:t(345),alt:"../../../../_images/enablevideostream.png"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("如果 A 开启发送视频流，则 A 的 item->getUploadVideoStreamSelf() 返回值为 true，B 则通过\nitem->getUploadVideoStreamOther() 方法（此处返回值为 true）判断 A 的视频流发送状态。")])]),e._v(" "),r("li",[r("p",[e._v("如果 A 关闭发送视频流，则 A 的 item->getUploadVideoStreamSelf() 返回值为 false，B\n则通过 item->getUploadVideoStreamOther() 方法（此处返回值为 false）判断 A\n的视频流发送状态。此时 B 将看不到 A 的画面。")])])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"相关回调"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关回调"}},[e._v("#")]),e._v(" 相关回调")]),e._v(" "),r("p",[e._v("通话过程中，如果通话状态发生了改变，如开启关闭静音、开启关闭通话保持、活跃状态切换、开启关闭音视频流发送等，均会触发\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18",target:"_blank",rel:"noopener noreferrer"}},[e._v("onCallItemUpdate"),r("OutboundLink")],1),e._v("\n回调")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("void JCManager::onCallItemUpdate(JCCallItem* item, JCCallItemChangeParam changeParam)\n{\n    if (changeParam.mute) { // 开启静音\n        ...\n    } else if (changeParam.sate) { // 通话状态变化\n        ...\n    } else if (changeParam.held) { // 被挂起变化\n        ...\n    } else if (changeParam.active) { // 活跃状态变化\n        ...\n    } else if (changeParam.netStatus) { // 网络状态变化\n        ...\n    }\n    ...\n}\n")])])]),r("hr"),e._v(" "),r("h3",{attrs:{id:"通话录音"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通话录音"}},[e._v("#")]),e._v(" 通话录音")]),e._v(" "),r("p",[e._v("可以在通话中进行录音，开启或关闭录音需要根据当前的录音状态来决定。如果正在录制或者通话被挂起或者挂起的情况下，不能进行音频录制。录音状态可通过\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_item.html#ad8b5118a3c06a156e917f59625bcc73d",target:"_blank",rel:"noopener noreferrer"}},[e._v("getAudioRecord"),r("OutboundLink")],1),e._v("\n方法获取。")]),e._v(" "),r("p",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a058fb76428f0a77f4bbbb8670eec2868",target:"_blank",rel:"noopener noreferrer"}},[e._v("audioRecord"),r("OutboundLink")],1),e._v("\n方法开启或关闭通话录音:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('void JCSampleDlg::OnBnClickedButton1Callrecordaudio()\n{\n    JCCallItem* item = JCManager::shared()->call->getActiveCallItem();\n    if (item != NULL)\n    {\n        if (item->getAudioRecord())\n        {\n            //如果正在录制，则停止音频录制\n            JCManager::shared()->call->audioRecord(item, false, "");\n        }\n        else\n        {\n            std::string filePath = "录制音频文件保存路径";\n            //开始音频录制\n            JCManager::shared()->call->audioRecord(item, true, filePath);\n        }\n    }\n}\n')])])]),r("p",[e._v("开启或关闭录音时，录音状态会发生改变，并通过\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#a1ba1c4f09c1f573d9fe2acb5057d6c18",target:"_blank",rel:"noopener noreferrer"}},[e._v("onCallItemUpdate"),r("OutboundLink")],1),e._v("\n回调上报")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("void JCManager::onCallItemUpdate(JCCallItem* item, JCCallItemChangeParam changeParam) {\n}\n")])])]),r("hr"),e._v(" "),r("h3",{attrs:{id:"通话中发送消息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通话中发送消息"}},[e._v("#")]),e._v(" 通话中发送消息")]),e._v(" "),r("p",[e._v("调用\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call.html#a94e37abb045b901e1703b7534f4cc379",target:"_blank",rel:"noopener noreferrer"}},[e._v("sendMessage"),r("OutboundLink")],1),e._v("\n方法在通话中实现发消息的功能")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('JCCallItem* item = JCManager::shared()->call->getActiveCallItem();\nJCManager::shared()->call->sendMessage(item, "text", "消息内容");\n')])])]),r("p",[e._v("当通话中收到消息时，会收到\n"),r("a",{attrs:{href:"https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_call_callback.html#afb8281abd54bc8c18b77aadfe234a882",target:"_blank",rel:"noopener noreferrer"}},[e._v("onMessageReceive"),r("OutboundLink")],1),e._v("\n回调")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('void JCManager::onMessageReceive(const char* type, const char* content, JCCallItem* item)\n{\n    cout << "收到Call消息 " << item->getDisplayName() << " type:" << type << endl;\n}\n')])])])])}),[],!1,null,null,null);a.default=l.exports}}]);