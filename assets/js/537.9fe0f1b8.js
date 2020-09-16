(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{1018:function(e,t,n){"use strict";n.r(t);var a=n(29),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"glossary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("AppKey"),n("br"),e._v("\nAppKey is the unique identification of the application in the\nJuphoon Cloud platform, which is similar to the application ID and\nobtained by creating an application on the platform.")])]),e._v(" "),n("li",[n("p",[e._v("Domain"),n("br"),e._v("\nWhen creating an application, multiple applications created in the\nsame console account belong to the same domain. Applications in the\nsame domain can communicate with each other. Therefore, people who\nuse applications under the same account can communicate with each\nother even if their AppKey is different. For example, from A user\nlogged in by one application can call a user logged in by another\napplication.")])]),e._v(" "),n("li",[n("p",[e._v("No authentication"),n("br"),e._v("\nNo authentication mode means that the account is generated by the\nuser, and no password verification is required to log in to the\nJuphoon Cloud platform.")])]),e._v(" "),n("li",[n("p",[e._v("JC SDK"),n("br"),e._v("\nJC SDK is a functional development kit rendered by Juphoon,\nproviding real-time communication scenarios such as voice calls,\nvideo calls, live interactive audio streaming, live interactiv video\nstreaming, and IM. JC SDK supports operating system platforms such\nas iOS, Android, Windows, and macOS.")])]),e._v(" "),n("li",[n("p",[e._v("Console"),n("br"),e._v("\nThe console is a platform for application creation and management\nprovided by Juphoon for users. After registering an account, users\ncan create applications through the console, obtain AppKey, check\nthe domain and domain ID of the application, call duration, ringing\nrate, success rate, etc.")])]),e._v(" "),n("li",[n("p",[e._v("SDK keywords"),n("br"),e._v("\nThe JC SDK implements functions such as audio and video calls or\nlive streaming through API methods and event callbacks.")])]),e._v(" "),n("li",[n("p",[e._v("Method"),n("br"),e._v("\nThe interface provided by the SDK can be called by the client-side\nto implement specific functions.")])]),e._v(" "),n("li",[n("p",[e._v("Callback"),n("br"),e._v("\nIndicate feedbacks from the SDK to the client-side after certain\nevents occur.")])]),e._v(" "),n("li",[n("p",[e._v("Channel"),n("br"),e._v("\nChannel is similar to the concept of a room and users join in the\nsame channel can make one-to-one or group audio and video calls. You\ncan call the API to create a channel. The channel is automatically\ncreated when the first user joins, and the channel is automatically\ndestroyed when the last user leaves without maintenance.")])]),e._v(" "),n("li",[n("p",[e._v("Audio and video streaming"),n("br"),e._v("\nRefers to an object containing audio and video data. In calls and\nlive streaming, users can send local audio and video streams and\nsubscribe to other users’ audio and video streams.")])]),e._v(" "),n("li",[n("p",[e._v("Subscription"),n("br"),e._v("\nAfter users join the channel, they can receive audio and video\nstreams published by other users in the channel, that is,\nsubscription streams.")])]),e._v(" "),n("li",[n("p",[e._v("Live streaming"),n("br"),e._v("\nA type of channel mode. There are two roles in the live streaming\nmode: one is host, and the other is audiences. Live streaming refers\nto broadcasting live performances through applications and the\nInternet. The viewers is called the audiences, and the performer is\ncalled the host.")])]),e._v(" "),n("li",[n("p",[e._v("Host"),n("br"),e._v("\nUsers who can send and receive audio and video streams in live\nchannels.")])]),e._v(" "),n("li",[n("p",[e._v("Audience"),n("br"),e._v("\nUsers who can only receive audio and video streams in the live\nchannel.")])]),e._v(" "),n("li",[n("p",[e._v("Co-hosting"),n("br"),e._v("\nIn live streaming, the audience interacts with the host through\nco-hosting.")])]),e._v(" "),n("li",[n("p",[e._v("Frame rate"),n("br"),e._v("\nFrame rate is the frequency (rate) at which bitmap images called\nframes continuously appear on the display. Simply put, the frame\nrate is the number of pictures taken by the camera per second. The\nhigher the number of frames, the smoother the picture. The smaller\nthe frame rate, the more jumpy the picture.")])]),e._v(" "),n("li",[n("p",[e._v("Bit rate"),n("br"),e._v("\nBit rate means the number of bits transmitted per second. That is,\nthe amount of data transmitted per unit time of the video. Usually\nin bit/s. The bit rate directly affects the viewing experience of\nthe video. The higher the bit rate, the higher the definition. But\nat the same time, occupy too much bandwidth and is prone to\ncongestion.")])]),e._v(" "),n("li",[n("p",[e._v("Resolution rate"),n("br"),e._v("\nResolution is a concept that represents the fineness of a plane\nimage. It is usually measured by the number of horizontal and\nvertical points, expressed in the form of the number of horizontal\npoints × the number of vertical points. In a fixed plane, the higher\nthe resolution, the more points that can be used, and the more\ndetailed the image. The resolution rate affects the image size: the\nhigher the resolution, the larger the image; the lower the\nresolution, the smaller the image.")])]),e._v(" "),n("li",[n("p",[e._v("Heartbeat"),n("br"),e._v("\nA way to keep alive on the conference terminal and the server is to\nsend and return heartbeat packets to the peer terminal regularly.")])]),e._v(" "),n("li",[n("p",[e._v("Heartbeat duration"),n("br"),e._v("\nHeartbeat duration refers to how often heartbeat packets are sent.")])]),e._v(" "),n("li",[n("p",[e._v("Heartbeat timeout"),n("br"),e._v("\nHeartbeat timeout refers to the timeout period (thinking that the\nother party has left) without receiving a heartbeat packet.")])]),e._v(" "),n("li",[n("p",[e._v("CDN push"),n("br"),e._v("\nThe process of publishing a video stream to the CDN (Content\nDelivery Network) is called CDN push, and users can watch it online\nthrough a web browser.")]),e._v(" "),n("p",[e._v("CDN is equivalent to a layer of intelligent virtual network on the\nbasis of the existing Internet formed by placing node servers\neverywhere in the network. CDNs redirect user requests to the\nservice node which is closest to the user, aiming at making the user\naccess the needed nearby content to solve the congestion of the\nInternet network and improve the response speed of users visiting\nthe website.")])]),e._v(" "),n("li",[n("p",[e._v("Recording"),n("br"),e._v("\nRecording during audio and video calls and saving the video stream\nas a file to provide users with a review.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);