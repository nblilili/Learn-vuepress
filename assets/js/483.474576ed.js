(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{917:function(a,s,t){"use strict";t.r(s);var n=t(29),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"服务器音视频录制集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器音视频录制集成"}},[a._v("#")]),a._v(" 服务器音视频录制集成")]),a._v(" "),t("p",[a._v("集成服务器音视频录制功能前，请确保您已经集成了基础的多方音视频通话功能。")]),a._v(" "),t("h2",{attrs:{id:"设置录制参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置录制参数"}},[a._v("#")]),a._v(" 设置录制参数")]),a._v(" "),t("p",[a._v("服务器音频视频录制将录制的文件保存在七牛云上，因此，需要在七牛云注册账号并获取 AccessKey、SecretKey、BucketName、fileKey。")]),a._v(" "),t("p",[a._v("AccessKey、SecretKey、BucketName、fileKey 获取之后，利用 JCMediaChannelRecordParam 对象中的 buildQiniuRecordParam 方法构造七牛录制参数")]),a._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// 七牛录制参数构造")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// </summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <param name="video">是否是视频录制</param>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <param name="bucketName">七牛云 bucketName</param>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <param name="secretKey">七牛云 secretKey</param>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <param name="accessKey">七牛云 accessKey</param>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <param name="fileName">录制文件名</param>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <returns>录制参数字符串</returns>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("buildQiniuRecordParam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")])]),a._v(" video"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")])]),a._v(" bucketName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")])]),a._v(" secretKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")])]),a._v(" accessKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")])]),a._v(" fileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("录制参数构造之后，在加入频道之前 通过 JCMediaChannelJoinParam 对象中的 JCMediaChannelRecordParam 对象传入录制参数。")]),a._v(" "),t("p",[a._v("其中，JCMediaChannelRecordParam 对象有以下属性")]),a._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// 录制字符串参数 buildQiniuRecordParam")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// </summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")])]),a._v(" recordString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("示例代码")]),a._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 设置录制参数")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JCMediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("JoinParam")]),a._v(" joinParam "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[a._v("JCMediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("JoinParam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\njoinParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("record "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[a._v("JCMediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("RecordParam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\njoinParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("record"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("recordString "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" JCMediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("RecordParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("buildQiniuRecordParam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"输入bucketName"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"输入secretKey"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"输入accessKey"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"输入filename"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 加入频道")]),a._v("\nmediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"channelId"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" joinParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("如果进行音频录制，需要将构造方法中的 video 值设为 false。")])]),a._v(" "),t("h2",{attrs:{id:"获取录制状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取录制状态"}},[a._v("#")]),a._v(" 获取录制状态")]),a._v(" "),t("p",[a._v("录制参数设置好后，需要根据目前的录制状态来判断是否启音视频录制。其中录制状态可通过 recordState 属性获得。")]),a._v(" "),t("p",[a._v("录制状态（JCMediaChannelRecordState）有以下几种")]),a._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// 无法进行视频录制")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// </summary>")]),a._v("\nNone"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// 可以开启视频录制")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// </summary>")]),a._v("\nReady"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// 视频录制中")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// </summary>")]),a._v("\nRunning\n")])])]),t("p",[a._v("录制状态的变化通过 onMediaChannelPropertyChange 回调上报")]),a._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// 属性变化回调，目前主要关注屏幕共享和窗口共享状态的更新")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// </summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("onMediaChannelPropertyChange")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JCMediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("PropChangeParam")]),a._v(" propChangeParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"开启或关闭音视频录制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启或关闭音视频录制"}},[a._v("#")]),a._v(" 开启或关闭音视频录制")]),a._v(" "),t("p",[a._v("录制状态获取后，即可根据录制状态调用下面的接口开启或关闭音视频录制")]),a._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// 开关视频录制，内部根据当前状态决定是否开启")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// </summary>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <param name="enable">是否开启屏幕录制</param>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <param name="recordParam">recordParam 录制参数，当 enable 为 true 时，可以更改由 join 时传入的录制参数，不需更改则填 null</param>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/// <returns>返回true表示调用成功，false表示调用失败</returns>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("enableRecord")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")])]),a._v(" enable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RecordParam")]),a._v(" recordParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("recordParam 录制参数，当 enable 为 true 时，可以更改由 join 时传入的录制参数，不需更改则填 nil。")])]),a._v(" "),t("p",[a._v("示例代码")]),a._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("onMediaChannelPropertyChange")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JCMediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("PropChangeParam")]),a._v(" propChangeParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("changeParam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("recordState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 录制状态变化 {")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 根据音视频录制状态判断是否开启音视频录制")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("recordState "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" JCMediaChannelRecordState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("None"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 无法进行音视频录制")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("recordState "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" JCMediaChannelRecordState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Ready"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 可以开启音视频录制")]),a._v("\n            mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("enableRecord")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("recordState "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" JCMediaChannelRecordState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 音视频录制中，可以关闭音视频录制")]),a._v("\n            mediaChannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("enableRecord")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);