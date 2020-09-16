(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1058:function(e,t,n){"use strict";n.r(t);var a=n(29),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[a("code",[e._v("Log in")])]),e._v(" "),a("ol",[a("li",[e._v("Is there a user name required when logging in? What is the\nspecification of user name?")])]),e._v(" "),a("ul",[a("li",[e._v("User name with English numbers and’+’’-‘’_’’.’,’-‘’_’’.’ cannot be\nused as the first character, and the length should not exceed 64\ncharacters.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("How do customers use their own account system in the mode of no\nauthentication?")])]),e._v(" "),a("ul",[a("li",[e._v("In the mode of no authentication, if you want to use their own\naccount system, but do not want to use their account as the account\nidentifier of the server, you can create a server-side account\nidentifier corresponding to their own account system as their own\nId. If your own account system is mobile phone number: 150…, the\nserver-side account system can be an identifier such as ABC.")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("How to judge whether the connection with the server has been\nsuccessful according to the login status?")])]),e._v(" "),a("ul",[a("li",[e._v("You can check the login status changes through the\nonClientStateChange callback in the JCClient class.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("Account query")])]),e._v(" "),a("p",[e._v("If you encounter the problems of query status, you can check the server\naddress at first to ensure that the server address and domain are\nconsistent. For the setting of the server address, refer to\n"),a("span",{staticClass:"xref std std-ref"},[e._v("Login Environment settings")]),e._v(".")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("One-to-one calls")])]),e._v(" "),a("ol",[a("li",[e._v("During a one-to-one call, another party exits abnormally (program\ngets killed, network disconnection). How long will the local end\nhang up?")])]),e._v(" "),a("ul",[a("li",[e._v("After 20 seconds, the peer end is killed and the local end will hang\nup in 20 seconds. The upper layer will receive notifyCallItemRemove.\nThe reason is term_by_self, and the netstatus status in the\ncallitem is -3.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("How long is the call waiting time now?")])]),e._v(" "),a("ul",[a("li",[e._v("2 minutes in signaling mode. If timeout, the server will\nautomatically hang up the call.")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("A calls B, and B is disconnected from the network at this time, then\nA hangs up, and the network of B is restored. At this time, B will\npop up the call interface and end immediately. What is the reason?\nCan it be avoided?")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The reason for this phenomenon is that after the B network is\nrestored, the message of call establishment and the message of\nending call are continuously received.")])]),e._v(" "),a("li",[a("p",[e._v("When A calls B, the messae of call establishment is sent to the\nserver; and when A hangs up, the message of ending call is sent,\ninstead of canceling the previous message (the server does not have\nthe function of canceling the previous message). These messages will\nbe cached on the server for a 60 seconds. If B recovers the network\nwithin the buffer time, it will receive the cached message. If B\nrecovers from the network outside the buffer time, the cached\nmessages have been deleted, B will not receive these messages, and\nthe call interface will not pop up and end immediately.")])]),e._v(" "),a("li",[a("p",[e._v("One way to avoid this phenomenon is to delay the display of the call\ninterface after receiving the message of call establishment for a\nperiod of time (for example, 0.5 seconds).If the message to end the\ncall is received immediately, the call interface will not be\ndisplayed.")])])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("The problems of call status")])]),e._v(" "),a("ul",[a("li",[e._v("After calling the call interface to initiate a call, the status of\nthe incoming call is pending. After calling the answer interface,\nthe call status changes to connecting, and it changes to talking\nstatus after being connected.")])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("The callback description of onCallItemRemove")])]),e._v(" "),a("ul",[a("li",[e._v("When the onCallItemRemove callback is received, the callItem is not\nnecessarily the current call, and all current calls can be obtained\nthrough the getCallItems method.")])]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("About the use of Mtc_CallDbSetFullScreen(bool)")])]),e._v(" "),a("ul",[a("li",[e._v("Calling this method will affect the "),a("strong",[e._v("Local Video Request\nResolution")]),e._v(", and the default setting is true")])]),e._v(" "),a("p",[e._v("Prerequisites:")]),e._v(" "),a("blockquote",[a("ol",[a("li",[a("p",[e._v("The default request on this end is 640*360 resolution;")])]),e._v(" "),a("li",[a("p",[e._v("The local screen resolution is 360*360.")])])])]),e._v(" "),a("p",[e._v("If set to true, the requested resolution will be adjusted to 360*360.")]),e._v(" "),a("p",[e._v("If set to false, the requested resolution is still 640*360.")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("About the use of Mtc_CallDbSetAdaptiveAspect(bool)")])]),e._v(" "),a("ul",[a("li",[e._v("Calling this method will affect the video "),a("strong",[e._v("Sending Resolution")]),e._v(",\nand the default is false")])]),e._v(" "),a("p",[e._v("Prerequisites:")]),e._v(" "),a("blockquote",[a("ol",[a("li",[a("p",[e._v("Camera capture is 1280*720 (16:9);")])]),e._v(" "),a("li",[a("p",[e._v("After consultation, a 320*240 (4:3) image needs to be sent to\nanother party.")])])])]),e._v(" "),a("p",[e._v("If set to true, the video will be sent according to the ratio (16:9)\ncollected by the camera (the video data received by the peer end is not\naccording to the consultated resolution).")]),e._v(" "),a("p",[e._v("If set to false, the video will be sent according to the video ratio\n(4:3) that needs to be sent after conslutation (crop the image collected\nby the camera).")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Your collected video data for transmission (the smart device SDK\ndoes not have this interface and only cares about data transmission)")])]),e._v(" "),a("ul",[a("li",[e._v("You can set as follows:")])]),e._v(" "),a("blockquote",[a("p",[e._v("startVideoFile - setVideoFileFrame - stopVideoFile")]),e._v(" "),a("p",[e._v("Or need to use Juphoon rendering:")]),e._v(" "),a("p",[e._v("startVideo(access videoSource value via getVideoFileId) -\nsetVideoFileFrame - stopVideo")])]),e._v(" "),a("p",[e._v("Supported formats:")]),e._v(" "),a("blockquote",[a("p",[e._v("I420, IYUV, RGB24, ABGR, ARGB, ARGB444, RGB565, ARGB1555, YUY2, YV12,\nUYVY, MJPG, NV21, NV12, BGRA")])]),e._v(" "),a("p",[e._v("Among them, The interface of setVideoFileFrame is as follows:")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * Capture video frame by frame\n *\n * When in H264 format\n * 1. If it is a keyframe, the data of 0x67 0x68 0x41 needs to be passed in as a frame\n * 2. The keyframe should be passed in at a fixed interval, such as 5 seconds, otherwise the video may not be displayed in the peer for a few seconds at the beginning.\n *\n * @param data image binary data\n * @param format   video pixel format\n * @param width    width\n * @param height   height\n * @param angle    multiples of 90\n * @param mirror   0 does not mirror, and 1 mirrors left and right\n * @param keyFrame only need to set key frame in h264 mode\n */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("abstract")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setVideoFileFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@VideoPixelFormat")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" angle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" mirror"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),e._v(" keyFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[a("strong",[e._v("About the description of H264:")])]),e._v(" "),a("p",[e._v("Since the bottom layer of the media defaults to the off state of H264 at\nthe beginning, setVideoFrame must be called before connecting when the\nprogram starts at first, otherwise it will cause the peer end to not\nreceive the image.")]),e._v(" "),a("p",[e._v("Solution 1: Adjust early.")]),e._v(" "),a("p",[e._v("Solution 2: Call the following code after SDK initialization succeeds:")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("mediaDevice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("startVideoFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nbuf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nmediaDevice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setVideoFileFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("JCMediaDevice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("H264"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nmediaDevice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("stopVideoFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("hr"),e._v(" "),a("p",[a("code",[e._v("Problems that need to be explained in the conference function")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The maximum number of participants in the conference is 16.")])]),e._v(" "),a("li",[a("p",[e._v("Since CDN live streaming, Webrtc, recording, etc. are all counted as\nmembers of conferences, you need to pay attention when calculating\nthe number of people.")])]),e._v(" "),a("li",[a("p",[e._v("When joining a meeting, the same channel ID in the same area can\nconnect even if the AppKey is different. Among them, the area means\nthe country (geographical location), and the domain refers to the\ndomain name of the server, as shown in the following figure:")])])]),e._v(" "),a("p",[a("img",{attrs:{src:n(383),alt:"../../_images_en/questions1.png"}})]),e._v(" "),a("p",[e._v("If the participants are not in the same area, they cannot communicate\neven if the channel ID is the same. The default area of the program is\nChina. For example, user A and user B in China can join the conference\nunder the same channel ID. If another member C is abroad, even if he/she\nhas the same channel ID as A and B, he/she cannot join the conference.")])])}),[],!1,null,null,null);t.default=s.exports},383:function(e,t,n){e.exports=n.p+"assets/img/questions1.f8ba4022.png"}}]);