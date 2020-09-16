(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1013:function(t,e,a){"use strict";a.r(e);var s=a(29),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"smart-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-hardware"}},[t._v("#")]),t._v(" Smart hardware")]),t._v(" "),a("h2",{attrs:{id:"set-media-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-media-parameters"}},[t._v("#")]),t._v(" Set Media Parameters")]),t._v(" "),a("p",[t._v("Before initiating a call, you can select different media parameter\nconfiguration modes according to the device type to achieve high-quality\naudio and video call effects.")]),t._v(" "),a("p",[t._v("Juphoon provides different media configuration modes for developers to\nchoose according to different scenarios, and opens media setting\nparameters for developers to set flexibly. Details are as follows:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 360P")]),t._v("\nJCCallMediaConfigMode360P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 720P")]),t._v("\nJCCallMediaConfigMode720P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Smart hardware scenarios, such as calling with a watch, etc.")]),t._v("\nJCCallMediaConfigModeIntelligentHardware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("Choose one of the phone calls; Smart hardware calls generally select\nJCCallMediaConfigModeIntelligentHardware mode.")]),t._v(" "),a("p",[t._v("Before initiating a call, developers can select a media configuration\nmode according to the specific scenario and generate configuration\nparameters through the following interface:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Create configuration parameters according to modes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @param mode mode")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCCallMediaConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" __nonnull"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("generateByMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JCCallMediaConfigMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("After generating the configuration parameters, call the mediaConfig\nproperty in JCCall to set:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("JCManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mediaConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("JCCallMediaConfig generateByMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("JCCallMediaConfigModeIntelligentHardware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Among them, the media parameters of the three modes are set as follows:")]),t._v(" "),a("p",[t._v("1、JCCallMediaConfigMode360P mode parameters")]),t._v(" "),a("table",[a("colgroup",[a("col",{staticStyle:{width:"50%"}}),t._v(" "),a("col",{staticStyle:{width:"50%"}})]),t._v(" "),a("thead",[a("tr",{staticClass:"header"},[a("th",[a("p",[t._v("Parameters")])]),t._v(" "),a("th",[a("p",[t._v("Description")])])])]),t._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioAecMode")])]),t._v(" "),a("td",[a("p",[t._v("JCCallAecModeFDE")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioArsEnable")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioArsBitrateMin")])]),t._v(" "),a("td",[a("p",[t._v("20")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioArsBitrateMax")])]),t._v(" "),a("td",[a("p",[t._v("76")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioRed")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioRxAnr")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioRtx")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioRxAgc")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioQosAec")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioQosAnr")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioQosAgc")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioQosVad")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionRecvWidth")])]),t._v(" "),a("td",[a("p",[t._v("640")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionRecvHeight")])]),t._v(" "),a("td",[a("p",[t._v("360")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionSendWidth")])]),t._v(" "),a("td",[a("p",[t._v("640")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionSendHeight")])]),t._v(" "),a("td",[a("p",[t._v("360")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoBitrate")])]),t._v(" "),a("td",[a("p",[t._v("100")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoSendFramerate")])]),t._v(" "),a("td",[a("p",[t._v("30")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsEnable")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsBitrateMin")])]),t._v(" "),a("td",[a("p",[t._v("30kpbs")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsBitrateMax")])]),t._v(" "),a("td",[a("p",[t._v("800kbps")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsFramerateMin")])]),t._v(" "),a("td",[a("p",[t._v("0")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsFramerateMax")])]),t._v(" "),a("td",[a("p",[t._v("30")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoRedFec")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoRecvFullScreen")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoSmallNalu")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionControl")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])])])]),t._v(" "),a("p",[t._v("2、JCCallMediaConfigMode720P")]),t._v(" "),a("table",[a("colgroup",[a("col",{staticStyle:{width:"50%"}}),t._v(" "),a("col",{staticStyle:{width:"50%"}})]),t._v(" "),a("thead",[a("tr",{staticClass:"header"},[a("th",[a("p",[t._v("Parameters")])]),t._v(" "),a("th",[a("p",[t._v("Description")])])])]),t._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioAecMode")])]),t._v(" "),a("td",[a("p",[t._v("JCCallAecModeFDE")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioArsEnable")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioArsBitrateMin")])]),t._v(" "),a("td",[a("p",[t._v("20")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioArsBitrateMax")])]),t._v(" "),a("td",[a("p",[t._v("76")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioRed")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioRxAnr")])]),t._v(" "),a("td",[a("p",[t._v("Close")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioRtx")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioRxAgc")])]),t._v(" "),a("td",[a("p",[t._v("Close")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioQosAec")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioQosAnr")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioQosAgc")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioQosVad")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionRecvWidth")])]),t._v(" "),a("td",[a("p",[t._v("1280")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionRecvHeight")])]),t._v(" "),a("td",[a("p",[t._v("720")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionSendWidth")])]),t._v(" "),a("td",[a("p",[t._v("1280")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionSendHeight")])]),t._v(" "),a("td",[a("p",[t._v("720")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoBitrate")])]),t._v(" "),a("td",[a("p",[t._v("100")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoSendFramerate")])]),t._v(" "),a("td",[a("p",[t._v("30")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsEnable")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsBitrateMin")])]),t._v(" "),a("td",[a("p",[t._v("30kpbs")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsBitrateMax")])]),t._v(" "),a("td",[a("p",[t._v("2100kbps")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsFramerateMin")])]),t._v(" "),a("td",[a("p",[t._v("0")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsFramerateMax")])]),t._v(" "),a("td",[a("p",[t._v("30")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoRedFec;")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoRecvFullScreen")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoSmallNalu")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionControl")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])])])]),t._v(" "),a("p",[t._v("3、JCCallMediaConfigModeIntelligentHardware")]),t._v(" "),a("table",[a("colgroup",[a("col",{staticStyle:{width:"50%"}}),t._v(" "),a("col",{staticStyle:{width:"50%"}})]),t._v(" "),a("thead",[a("tr",{staticClass:"header"},[a("th",[a("p",[t._v("Parameters")])]),t._v(" "),a("th",[a("p",[t._v("Description")])])])]),t._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioAecMode")])]),t._v(" "),a("td",[a("p",[t._v("JCCallAecModeFDE")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioArsEnable")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioArsBitrateMin")])]),t._v(" "),a("td",[a("p",[t._v("5")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioArsBitrateMax")])]),t._v(" "),a("td",[a("p",[t._v("20")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioRed")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioRxAnr")])]),t._v(" "),a("td",[a("p",[t._v("Close")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioRtx")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioRxAgc")])]),t._v(" "),a("td",[a("p",[t._v("Close")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioQosAec")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioQosAnr")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioQosAgc")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioQosVad")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionRecvWidth;")])]),t._v(" "),a("td",[a("p",[t._v("Depending on the specific situation, the watch is usually 128*128")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionRecvHeight;")])]),t._v(" "),a("td",[a("p",[t._v("Depending on the specific situation, the watch is usually 128*128")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionSendWidth;")])]),t._v(" "),a("td",[a("p",[t._v("Depending on the specific situation, the watch is usually 640*360")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionSendHeight;")])]),t._v(" "),a("td",[a("p",[t._v("Depending on the specific situation, the watch is usually 640*360")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoBitrate")])]),t._v(" "),a("td",[a("p",[t._v("30")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoSendFramerate")])]),t._v(" "),a("td",[a("p",[t._v("15")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsEnable")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsBitrateMin")])]),t._v(" "),a("td",[a("p",[t._v("Depending on the specific situation, the watch uses 128*128 15 frames 10kpbs")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsBitrateMax")])]),t._v(" "),a("td",[a("p",[t._v("Depending on the specific situation, the watch uses 128*128 15 frames 75kpbs")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsFramerateMin")])]),t._v(" "),a("td",[a("p",[t._v("0")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsFramerateMax")])]),t._v(" "),a("td",[a("p",[t._v("15")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoRedFec")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoRecvFullScreen")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoSmallNalu")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionControl")])]),t._v(" "),a("td",[a("p",[t._v("Open")])])])])]),t._v(" "),a("p",[t._v("In addition to choosing the media configuration mode provided by\nJuphoon, developers can also customize the media parameters according to\nthe corresponding attributes to meet the needs of different scenarios.\nThe media parameters include audio and video parameters. The\ninstructions are as follows:")]),t._v(" "),a("p",[a("strong",[t._v("Audio Parameters")])]),t._v(" "),a("table",{staticStyle:{width:"99%"}},[a("colgroup",[a("col",{staticStyle:{width:"33%"}}),t._v(" "),a("col",{staticStyle:{width:"33%"}}),t._v(" "),a("col",{staticStyle:{width:"33%"}})]),t._v(" "),a("thead",[a("tr",{staticClass:"header"},[a("th",[a("p",[t._v("Parameters")])]),t._v(" "),a("th",[a("p",[t._v("Type")])]),t._v(" "),a("th",[a("p",[t._v("Description")])])])]),t._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioEnableCodecs")])]),t._v(" "),a("td",[a("p",[t._v("NSString")])]),t._v(" "),a("td",[a("ul",[a("li",[a("p",[t._v("Audio codec,with opus、PCMU、PCMA、G729、G722、AAC、AMR、AMR-WB、iLBC")])]),t._v(" "),a("li",[a("p",[t._v("The priority of consultation is arranged in order, and each codec is separated by “;”, pay attention to case")])])])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioAecEnable")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Turn on/off echo concellation")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioAecMode")])]),t._v(" "),a("td",[a("p",[t._v("JCCallAecMode")])]),t._v(" "),a("td",[a("p",[t._v("Echo cancellation mode; refer to JCCallAecMode enumeration value for details")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioArsEnable")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Turn on/off audio ars")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioArsBitrateMin")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("Audio minimum bit rate,kb")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioArsBitrateMax")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("Audio maximum bit rate,kb")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioRed")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("ul",[a("li",[a("p",[t._v("Audio red anti-loss pakage increases payload bit rate when it opens")])]),t._v(" "),a("li",[a("p",[t._v("Close enhanced anti-pakage ability to save bit rate and reduce power consumption")])]),t._v(" "),a("li",[a("p",[t._v("Usuallyly choose open in unstable network")])])])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioRxAnr")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Generally, the noise suppression can be turned off to reduce the sound dsp processing and reduce the power consumption when the sound quality of the receiving end is good")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioRtx")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("RTX retransmission, used together with FEC and NACK, reduces power consumption; and usually choose open when the network is unstable")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioRxAgc")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Automatic gain control of sound in the receiving end sound; if the receiving end sound is too loud or too low, you can try to open")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioQosAec")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Echo cancellation")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioQosAnr")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("ul",[a("li",[a("p",[t._v("If the noise at the receiving end is loud, increase the noise suppression level at the transmitting end")])]),t._v(" "),a("li",[a("p",[t._v("If the sound at the receiving end is low, and the suppression level can be reduced or the suppression can be turned off without affecting the sound quality")])])])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("audioQosAgc")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Automatic gain control of sound at the sender")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("audioQosVad")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Silence detection")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Video Parameters")])]),t._v(" "),a("table",{staticStyle:{width:"99%"}},[a("colgroup",[a("col",{staticStyle:{width:"33%"}}),t._v(" "),a("col",{staticStyle:{width:"33%"}}),t._v(" "),a("col",{staticStyle:{width:"33%"}})]),t._v(" "),a("thead",[a("tr",{staticClass:"header"},[a("th",[a("p",[t._v("Parameters")])]),t._v(" "),a("th",[a("p",[t._v("Type")])]),t._v(" "),a("th",[a("p",[t._v("Description")])])])]),t._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoEnableCodecs")])]),t._v(" "),a("td",[a("p",[t._v("NSString")])]),t._v(" "),a("td",[a("ul",[a("li",[a("p",[t._v("Video codec, with H264-SVC, VP8, VP9, H264, H265, H263")])]),t._v(" "),a("li",[a("p",[t._v("The priority of consultation are arrangeded in order")])])])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionRecvWidth")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("The width of video receiving")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionRecvHeight")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("The height of video receiving")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionSendWidth")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("The width of video sending")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoResolutionSendHeight")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("The heigh of video sending")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoBitrate")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("ul",[a("li",[a("p",[t._v("The initial video bit rate kb; the initial bit rate affects the definition of the video at the beginning")])]),t._v(" "),a("li",[a("p",[t._v("The initial code rate is set to high to reach the required code rate faster, but the initial code rate must be within the range of ars")])]),t._v(" "),a("li",[a("p",[t._v("The range of 720p ars is generally between 30kbps~4235.4kbps bitrate; the range of 1080p ars is generally between 30kbps~7471.8kbps bitrate")])])])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoSendFramerate")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("Send frame rate")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsEnable")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Turn on/off video ars, that is, automatic video rate control. After turning on, it can ensure the smooth transmission of the coded stream and the full utilization of the channel bandwidth")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsBitrateMin")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("Video minimum bit rate,kb")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsBitrateMax")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("Video maximum bit rate,kb")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoArsFramerateMin")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("Video minimum frame rate,kb")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoArsFramerateMax")])]),t._v(" "),a("td",[a("p",[t._v("int")])]),t._v(" "),a("td",[a("p",[t._v("Video maximum frame rate,kb")])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoRedFec")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("ul",[a("li",[a("p",[t._v("Video supports rfc 2198 voice fec-red. Setting the parameter videoRedFec to true can increase the audio and video anti-loss ability, which is displayed by doubling the payload code rate without increasing the header.")])]),t._v(" "),a("li",[a("p",[t._v("For example, after Opus 55kbps doubles the bit rate, the final bit rate reaches 90kbps=55+35;")])]),t._v(" "),a("li",[a("p",[t._v("After Opus 10kbps doubles the bit rate, the final bit rate reaches 16kbps=10+6")])])])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoRecvFullScreen")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Affect the local video request resolution, the default setting is true")]),t._v(" "),a("dl",[a("dt",[t._v("Assumption")]),t._v(" "),a("dd",[a("ul",[a("li",[a("ol",[a("li",[a("p",[t._v("The default request on this end is 640*360 resolution")])])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("The local screen resolution is 360*360")])])])]),t._v(" "),a("li",[a("p",[t._v("true:the requested resolution will be adjusted to 360*360")])]),t._v(" "),a("li",[a("p",[t._v("false: the request is still 640*360")])])])])])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",[a("p",[t._v("videoSmallNalu")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("The video data is packaged in SmallNalu mode, and a package contains more data, which reduces the bit rate of the header, thereby reducing power consumption")])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",[a("p",[t._v("videoResolutionControl")])]),t._v(" "),a("td",[a("p",[t._v("bool")])]),t._v(" "),a("td",[a("p",[t._v("Resolution control; open to change the resolution with network fluctuations and close to fix the resolution")])])])])]),t._v(" "),a("p",[t._v("Among them,AecMode has folowing values:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Acoustic echo cancellation. Support calls in the hands-free state, which is effective for models with better performance such as iOS and Windows.")]),t._v("\npublic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" AEC_MODE_AEC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MtcCallDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EN_MTC_EC_AEC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the acoustic echo cancellation function provided by the operating system to support calls in the hands-free state. It is valid for most branded phones such as iOS and Android, but some models may not be valid.")]),t._v("\npublic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" AEC_MODE_OS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MtcCallDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EN_MTC_EC_OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Acoustic echo suppression, and echo suppression is achieved through half-duplex, usually not recommended.")]),t._v("\npublic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" AEC_MODE_AES "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MtcCallDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EN_MTC_EC_AES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Software adaptive acoustic echo cancellation is effective for most models. But the calculation is slightly larger than that of AEC. SDE tracking delay accuracy is high, FDE can adapt to larger delays.")]),t._v("\npublic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" AEC_MODE_FDE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MtcCallDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EN_MTC_EC_AEC_FDE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Software adaptive acoustic echo cancellation is effective for most models. But the calculation is slightly larger than that of AEC. SDE tracking delay accuracy is high, FDE can adapt to larger delays.")]),t._v("\npublic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" final "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" AEC_MODE_SDE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MtcCallDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EN_MTC_EC_AEC_SDE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Developers can configure by themselves in accordance with specific\nneeds.")]),t._v(" "),a("p",[t._v("Sample code:")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Audio parameters")]),t._v("\nJCCallMediaConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mediaConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("JCCallMediaConfig new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioEnableCodecs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"opus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioAecMode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JCCallAecModeFDE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioArsEnable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioArsBitrateMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioArsBitrateMin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioRed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioRxAnr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioRtx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioRxAgc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioQosAec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioQosAnr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioQosAgc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioQosVad "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Video parameters")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoEnableCodecs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"H264"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoResolutionRecvWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoResolutionRecvHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoResolutionSendWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoResolutionSendHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoBitrate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoSendFramerate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoArsEnable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoArsBitrateMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoArsBitrateMin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoArsFramerateMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoArsFramerateMin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoRedFec  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoRecvFullScreen  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoSmallNalu  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoResolutionControl  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nJCManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mediaConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mediaConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);