---
title:  通话集成


---

# 通话集成

## 集成开发

### 通话集成流程

#### 在 HTML 中添加如下代码，细节请参考样例网页

```js
<script src="webrtc.min.js"></script>
```

#### 建立网页与菊风云连接

打开连接

```js
var jc = new WebRTC(config, trace);

  trace 为可选的跟踪打印函数
  config 支持如下格式:
    {
      'url':"https://ums.justalkcloud.com:18443",
      'confProps': {
          "roomId":"10210311",
          "regionId":"10",
          "mediaType":"1",
          "appKey":"6c****************",
          "accountName": "1111111",
          "password": "1",
          "mtcConfQualityGradeKey":1,
          "mtcConfSecurityKey":0,
          "mtcConfPasswordKey":"123123",
          "mtcConfCompositeModeKey":2,
          "mtcConfStateKey":3,
          "mtcConfCapacityKey":4
        }
      'id':id,
      'getsourceid':'https:/.....'
    }
```

| 参数        | 说明                                                         |
| :---------- | :----------------------------------------------------------- |
| url         | WS 服务器或 HTTP 服务器地址                                  |
| id          | 可选的网页标识,默认随机生成                                  |
| getsourceid | 可选的 Chrome 屏幕共享扩展网页                               |
| confProps   | 会议相关参数<br/>**必要参数**<br/>\- roomId 会议号<br/>\- accountName 账号<br/>\- password 账号密码<br/>\- AppKey APPKEY<br/><br/>**可选参数**<br/>\- regionId 区域 Id, 默认”0”<br/>\- mediaType 媒体类型, 0音频，默认1视频<br/>\- mtcConfPasswordKey 可选的会议密码,默认‘123456’<br/>\- mtcConfQualityGradeKey 会议视频尺寸级别<br/>\- mtcConfSecurityKey 是否加密传输<br/>\- mtcConfCompositeModeKey 收到视频的混合模式<br/>\- mtcConfStateKey 加入时的初始状态<br/>\- mtcConfCapacityKey 会议允许最大人数 |

如果连接成功，则会收到 onopen 回调

```js
onopen(id, config)

   id     本地Id
   config 配置信息
           .instanceId  为peer(对端Id)
           .iceServers  为媒体配置
```

如果发生错误，则会收到 onerror 回调

```js
onerror(error)

  error   错误对象

          应该关闭连接并重置界面
```

#### 呼叫

连接成功后，即可进行呼叫，呼叫调用如下接口

```js
jc.call(configuration, constraints, peer);

   configuration  可选的标准 RTCConfiguration object,可以为null,
                  默认由服务器下发(由onopen事件返回)
   constraints    标准 MediaStreamConstraints object,
                  参考update()参数说明
   peer           可选的对端Id,http连接时被忽略
```

呼叫成功后，对端即可收到 oncall 回调

```js
oncall(peer)

  peer 对端Id
```

#### 通话连接

通话建立后，对端可通过 onaddstream 收到发送端的音视频流数据

```js
onaddstream(stream, type)

    stream  为标准 MediaStream 实例,
            使用HTML中的video/audio标签呈现
    type 可选为
        - 'localvideo', 本地视频
        - 'localshare', 本地共享
        - 'peervideo',  对端视频
        - 'peeraudio',  对端音频
        - 'peershare',  对端共享
        - 'peerdata',   对端非媒体数据
```

当发送端关闭发送音视频时，对端将收到 onremovestream 回调

```js
onremovestream(stream, type)

   stream  为标准 MediaStream 实例
   type    - 'localvideo', 本地视频
           - 'localshare', 本地共享
           - 'peervideo',  对端视频
           - 'peeraudio',  对端音频
           - 'peershare',  对端共享
           - 'peerdata',   对端非媒体数据
```

会议中如有成员发送文本消息，则其他成员将通过 onconfchat 收到文本消息回调

```js
{"cmd":"onconfchat", "val":{"from":%s, "text":%s}}
    from  是发言者URI
    text  是UTF8编码的文本,支持中文
```

#### 挂断

如果结束通话，则调用挂断接口

```js
jc.hangup();
```

此时对端将收到 onhangup 回调

```js
onhangup()
```

会议结束后，关闭连接调用下面的接口

```js
jc.close();
   jc = null;
```

连接关闭后会收到 onclose 回调

```js
onclose()

  会话已关,应该关闭连接并重置界面
```

### 会议过程控制

会议过程控制包括 设置会场成员的状态、设置成员昵称、CDN 推流和录制、分屏 等指令。

会场中的每个成员都有4个状态: 固定 ID，昵称，角色，状态。

其中

| 参数    | 说明                                                         |
| :------ | :----------------------------------------------------------- |
| 固定 ID | 通常是账户名，不允许修改，保证唯一                           |
| 昵称    | 支持中文，允许动态修改                                       |
| 状态    | 按位解释的整型<br/>只有开启音视频并转发，其他成员才有可能接收到对应的音视频数据<br/>\- 0x1 转发视频<br/>\- 0x2 转发音频<br/>\- 0x4 视频开启<br/>\- 0x8 音频开启 |
| 角色    | 按位解释的整型<br/>注意只有媒体发送者 ( 0x2 )，才允许设置音视频开启状态 ( 0x4<br/>\- 0x2 媒体发送者，允许开关本地音视频<br/>\- 0x4 演示者，其状态改变事件将被广播<br/>\- 0x8 会场拥有者，只存在唯一拥有者，由会场自动产生和迁移 |

发送控制指令调用下面的接口

```js
jc.send(text, peer);
peer    可选的对端Id,http连接时被忽略
text    具体的指令协议,参考文档下方说明
```

#### 成员管理控制指令

| 指令内容                 | 指令格式                                                     |
| :----------------------- | :----------------------------------------------------------- |
| 设置自身或其他成员角色   | **明文格式**<br/> setrole \<mask\> \<role\> [target]<br/><br/>**JSON 格式**<br/> {“cmd”:”setrole”, “mask”:%d, “role”:%d, “target”:%s} // 参数说明<br/> mask 掩码,表示操作的bit位<br/> role 角色，按位解释，设原状态为_ROLE_，则 \_ROLE\_ = (\_ROLE\_ & ~mask)<br/>target 可选的设置对象，缺省时为自身 |
| 设置自身或其他成员状态   | **明文格式**<br/>setstate \<mask\> \<state\> [target]<br/>- 关闭 id0 (即成员URI或屏幕 URI)的音频的服务器转发<br/>setstate 0x2 0x0 id0<br/>\- 关闭自身的音频发送<br/>setstate 0x8 0x0<br/>\- 打开自身的音频发送<br/>setstate 0x8 0x8<br/><br/>**JSON 格式**<br/>{“cmd”:”setstate”, “mask”:%d, “state”:%d, “target”:%s}<br/>// 参数说明<br/>mask 掩码,表示操作的bit位<br/>state 状态，按位解释，设原状态为 \_STATE\_，则 \_STATE\_ = (\_STATE\_ & ~mask)<br/>target 可选的设置对象，缺省时为自身 |
| 设置自身或其他成员昵称   | **明文格式**<br/>setnick \<str\> [target]<br/><br/>**JSON 格式**<br/>{“cmd”:”setnick”, “nick”:\<str\>, “target”:%s}// 参数说明<br/>str utf8 编码的昵称<br/>target 可选的设置对象，缺省时为自身 |
| 设置对其他成员的订阅信息 | **明文格式**<br/>vsubscribe \<target\> \<state\><br/><br/>**JSON 格式**<br/>{“cmd”:”vsubscribe”,”target”:”%s”,”state”:%d}// 参数说明<br/>target 订阅对象<br/>state 0 - 不订阅，1 - 订阅视频 |
| 踢出成员                 | **明文格式**<br/>kickuser [target]<br/><br/>**JSON 格式**<br/>{cmd:”kickuser”, “target”:”%s”}// 参数说明<br/>target 目标对象uri |


#### 会议属性控制指令

| 指令内容                 | 指令格式                                                     | 参数说明                                                     |
| :----------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| 设置自身或其他成员角色   | **明文格式**<br/> settitle \<title\><br/><br/>**JSON 格式**<br/> {“cmd”:”settitle”,”title”:%s} | title utf8 编码的标题                                        |
| 设置自身或其他成员状态   | **明文格式**<br/>sendtext \<str\> [target]<br/><br/>**JSON 格式**<br/>{“cmd”:”sendtext”, “text”:”\<str\>”, “target”:%s} | str utf8 编码的文本<br/>target 可选的目标对象，缺省时将广播  |
| 设置自身或其他成员昵称   | **明文格式**<br/>publish \<bool\><br/><br/>**JSON 格式**<br/>{”cmd”:”publish”, “video”:<\bool\>} | bool 布尔值，可选为 true,false, 0, 1                         |
| 设置对其他成员的订阅信息 | **明文格式**<br/>setmergemode \<mergeMode\><br/><br/>**JSON 格式**<br/>{”cmd”:”setmergemode”, “mergeMode”:%d} | **mergeMode 整型，布局模式**<br/>1.平铺模式,所有视频均分平铺<br/>2.讲台模式,共享为大图,其他视频为小图<br/>3.演讲模式,共享为大图,共享者视频为小图,其他不显示<br/>4.自定义模式,由 setlayout 指令设置所有视频布局<br/>5.智能模式, 可用 setmergemode_i,setmerge_i 调整相应的参数 |

#### 分屏控制指令

##### 实现自定义模式

实现自定义模式之前，需要确保收到视频的布局为自定义模式(@setmergemode 4)才能看到效果。

| 指令格式                                                     | 参数说明                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| **JSON格式**<br/>{“cmd”:”setlayout”,”layout”:[[\<id0\>,\<ps\> x, y, w, h],<br/>[“id1”,0x200, 0.1, 0.1, 1.0, 1.0], …]} | **id0**<br/>成员 URI 或屏幕 URI<br/>**<br/>ps**<br/>视频尺寸级别 0x100, 0x200, 0x300, 0x400<br/>x,y,w,h：单位[0.0,1.0]的坐标和尺寸 |

##### 调整智能模式的布局

调整智能模式的布局之前，需要确保收到视频的布局为智能模式(@setmergemode 5)才能看到效果。

| 指令格式                                                     | 参数说明                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| **明文格式**<br/>setmergemode_i <mode> <scsMode> [uri]<br/>例如：设置智能模式为“自由模式”，带屏幕共享为“主持人模式”，大小屏放大用户默认为qqqq，则指令为：<br/>@setmergemode_i 1 3 [username:qqqq@sample.cloud.justalk.com] | **mode:智能分屏模式**<br/>1 freeLayout<br/>2 rectLayout<br/>3 bigSmallX2<br/>4 bigSmallX3<br/>......<br/>11 bigSmallX10<br/>12 bigSmallTop<br/>13 bigSmallBotto<br/><br/>**scsMode：智能分屏带屏幕共享模式**<br/>1 screen<br/>2 platform<br/>3 platformCover<br/>4 speaker<br/>uri: 大小屏默认放大的用户 uri |


##### 调整智能模式的详细参数

| 指令格式                                                     | 参数说明                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| **明文格式**<br/>setmerge_i \<width\> \<height\> \<mode\> \<scsMode\> \<fps\> [uri]<br/>例如：设置宽为1600，高为900，智能模式为“自由模式”，带屏幕共享为“主持人模式”，帧数为24帧，大小屏放大用户默认为qqqq则指令为：<br/>@setmerge_i 1600 900 1 3 24 [username:qqqq@sample.cloud.justalk.com] | **width** 宽<br/>**height** 高<br/>**mode** 智能分屏模式，参见上方setmergemode_i<br/>**scsMode** 智能分屏带屏幕共享模式，参见上方setmergemode_iv<br/>**fps** 帧数 1-30<br/>**uri** 大小屏默认放大的用户 uri |

关于智能分屏模式和调整智能分屏模式的详细参数的具体指令信息，请参考 [智能分屏](https://developer.juphoon.com/cn/document/V2.1/webrtc/integration.php#w_id6)。

#### 录制

##### 开始录制

| 指令格式                                                     | 参数说明                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| **JSON格式**<br/>{“cmd”:”StartRecord”,”Video”:true,”Storage”:<br/>{<br/>“Protocol”:”qiniu”,<br/>“AccessKey”:”Th2jW*********”,<br/>“SecretKey”:”Nh***********”,<br/>“**BucketName**”:”***”,<br/>“FileKey”:”1234.mp4”,<br/>“SplitFileSize”:1024<br/>}<br/>} | Video 是否视频会议，true为视频会议<br/>Protocol 云存储协议，目前支持七牛<br/>AccessKey、SecretKey 七牛云个人中心->密钥管理查看<br/>BucketName 七牛云的存储名称<br/>FileKey 上传到七牛的文件名<br/>SplitFileSize 录制文件超过多少 KB 自动分割，不填，默认是500M |

##### 停止录制

| 指令格式                                                     | 参数说明                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| **JSON格式**<br/>{“cmd”:”StopRecord”}<br/>假设 base64编码后为 eyJjbWQiOiJTdG9wUmVjb3JkIn0=，会议号为12345678，则停止录制的命令如下：<br/>sendtext eyJjbWQiOiJTdG9wUmVjb3JkIn0=[username:delivery_12345678@delivery.cloud.justalk.com] | 录制器或推流器也是一个 confDelivery，录制器或推流器也是一个 confDelivery，录制器或推流器 uri 为：<br/>[username:delivery_会议号@delivery.cloud.justalk.com] |

::: tip

录制默认分辨率为 360P，如需修改录制分辨率则要调用 SetVideoLevel 接口进行修改。

:::

关于设置录制分辨率和录指文件大小的详细指令信息请参阅 [修改录制或推流分辨率](https://developer.juphoon.com/cn/document/V2.1/webrtc/integration.php#w_id8) 和 [修改录制文件大小](https://developer.juphoon.com/cn/document/V2.1/webrtc/integration.php#w_id9)。

#### CDN 推流

| 指令内容     | 指令格式                                                     |
| :----------- | :----------------------------------------------------------- |
| 设置推流地址 | **明文格式**<br/>setpushuri \<uri\><br/>设置推流地址，若以’/’结尾，则自动添加当前会议号。<br/>必须在开始“视频混合”前设置<br/>录制器或推流器也是一个 confDelivery，可以通过 sendtext 命令通知录制器/推流器来操作<br/>录制器或推流器 uri 为：[username:delivery_会议号@delivery.cloud.justalk.com]<br/>// 举例<br/>假设会议号为12345678，则指令为：<br/>@sendtext @delivery_12345678 setpushuri rtmp://video-center.alivecdn.com/juphoon11/juphoon?vhost=broadcast.justalkcloud.com [username:delivery_12345678@delivery.cloud.justalk.com] |
| 设置推流参数 | **明文格式**<br/>setpushuriparm \<parm\><br/>最终完全的推流的 URL 等于：推流地址 + 空格 + 推流参数<br/>必须在开始“视频混合”前设置<br/>// 举例<br/>假设会议号为12345678，则指令为：<br/>@sendtext @delivery_12345678 setpushuriparm socks=192.12.1.2[username:delivery_12345678@delivery.cloud.justalk.com] |
| 开始推流     | **明文格式**<br/>startpush<br/>开始向 CDN 推流，相应的网页观看地址由 CDN 服务提供商决定<br/>// 举例<br/>假设会议号为12345678，则指令为：<br/>@sendtext @delivery_12345678 startpush[username:delivery_12345678@delivery.cloud.justalk.com] |
| 停止推流     | **明文格式**<br/>stoppush<br/>// 举例<br/>假设会议号为12345678，则指令为：<br/>@sendtext @delivery_12345678 stoppush[username:delivery_12345678@delivery.cloud.justalk.com] |

关于设置推流分辨率的详细指令信息请参阅 [修改录制或推流分辨率](https://developer.juphoon.com/cn/document/V2.1/webrtc/integration.php#w_id8)。

#### 播放

| 指令格式 | 参数说明                                                     |
| :------- | :----------------------------------------------------------- |
| 开始播放 | **明文格式**<br/>play [playFile] **JSON 格式**<br/>{“cmd”:”play”, “playFile”:%s}<br/>将自动添加发送角色,和相应的音频发送状态.<br/>playFile 必须为 ConfDelivery 所在机器上的文件路径.默认 playFile.wav |
| 停止播放 | **明文格式**<br/>stopplay<br/><br/>**JSON 格式**<br/>{“cmd”:”stopPlay”} |

### 会议事件订阅

会议过程中，会议状态的改变则通过发送订阅事件指令 subscribe 进行订阅。

```js
明文格式
subscribe <hex>

JSON字符串格式
{"cmd":"subscribe", "mask":<hex>}

  hex 事件位集合
    0x1 自身状态改变,   对应 onselfstate
    0x2 其他成员状态改变,对应 onactorstate/onactorleave
    0x4 会场属性改变,   对应 onconfstate
    0x8 聊天信息,       对应 onconfchat
```

订阅前可以设置订阅的对象和属性。

#### 设置订阅

```js
vsubscribe <target> <state>
            //target 订阅对象
            //state  布尔型, 0 - 表示不订阅, 1 - 订阅视频
```

例如：

订阅会场成员 actor

假设 actor 的 uri 为 [username:actor@sample.cloud.justalk.com]，则指令为：

```js
vsubscribe [username:actor@sample.cloud.justalk.com] 1
```

取消订阅会场成员 actor

假设 actor 的 uri 为 [username:actor@sample.cloud.justalk.com]，则指令为：

```js
vsubscribe [username:actor@sample.cloud.justalk.com] 0
```

订阅成功之后即可对订阅成员的状态改变进行回调：

其他成员状态改变回调

```js
{"cmd":"onactorstate",
 "val":{"id0":{"nick":%s,"role":%d, "state":%d, "subscribe":%d},...}}

    id0  是成员URI,全局唯一,
    nick 是UTF8编码的昵称,支持中文
    role 是角色位整型:
          0x2 - 发送者
    state 是状态位整型:
            0x1 - 转发视频
            0x2 - 转发音频
            0x4 - 打开视频
            0x8 - 打开音频
    subscribe 是订阅信息
            1 - 订阅视频
```

自身状态改变回调

```js
{"cmd":"onselfstate", "val":{"nick":%s,"role":%d, "state":%d}}
```

成员离开回调

```js
{"cmd":"onactorleave", "val":["id0","id1",...]}
```

会场属性改变回调

```js
{"cmd":"onconfstate", "val":{"screen":%s, "title":%s, "sharer":%s}}

    screen 是屏幕URI
    title  是UTF8编码的标题,支持中文
    sharer 是屏幕共享者URI
```

协商状态改变回调

只有协商状态为 ‘stable’，才允许更新本地媒体(调用 update/share)

```js
onsignalingstatechange(state)

  state 可选为
      - 'stable'  没有进行协商的稳定状态
      - 'have-local-offer'     协商进行中
      - 'have-remote-offer'    协商进行中
      - 'have-remote-pranswer' 协商进行中
      - 'have-local-pranswer'  协商进行中
```

连接状态改变回调

只要连接状态为 ‘failed’，则将不可恢复的通信中断

```js
oniceconnectionstatechange(state)

  state 可选为
      - 'new' 初始状态
      - 'checking' 探测进行状态
      - 'connected' 成功连接
      - 'completed' 探测结束
      - 'disconnected' 断开连接
      - 'failed' 连接过程已失败,不可恢复
      - 'closed' 关闭连接
```

#### 辅助功能

屏幕共享

实现屏幕共享功能需要以下操作：

Google Chrome 必须安装 [额外扩展][ScreenCapturing]，请参考 [Chrome 屏幕采集扩展[ScreenCapturing\]](https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk) 。

getsourceid 参数必须指定有效的https网址，缺省时需要公网访问能力。

#### 设备控制

##### 动态开关本地媒体

```js
jc.update(constraints)

   constraints  标准 MediaStreamConstraints object,
                按如下格式
                    {
                        "audio":true,
                        "video": {
                            "width": {"max": 640},
                            "height":{"max": 480}
                        }
                    }
                    max 可以限制视频最大尺寸, min 限制最小尺寸
```

##### 动态切换屏幕共享

切换屏幕共享，将自动进行重新协商

```js
jc.share(toggle)

   toggle  是否共享窗口或屏幕
```

发送DTMF

```js
jc.dtmf(tones,duration,inter_tone_gap)

   tones     DMTF的音符,0-9,A-D或a-d,#,*. 忽略无法识别的字符

   duration  可选的每个音符的持续毫秒,不能超过6000或小于70. 默认100ms

   inter_tone_gap   可选的音符间隔,至少为50ms,但应尽可能短. 默认70ms
```

## 参考文件

### 智能模式布局

setmergemode_i 调整智能模式的布局

```js
setmergemode_i <mode> <scsMode> [uri]

         mode: 智能分屏模式 1=freeLayout,2=rectLayout,3=bigSmallX2,4=bigSmallX3....,
                               11=bigSmallX10,12=bigSmallTop,13=bigSmallBottom

         scsMode: 智能分屏带屏幕共享模式 1=screen,2=platform,3=platformCover,4=speaker

         uri: 大小屏默认放大的用户uri
```

::: tip

确保合并模式为智能模式(@setmergemode 5), 否则调用完之后要将模式设置为智能模式后才能看到效果；

没有收到屏幕共享时，模式为mode,当收到屏幕共享时模式会切换成scsMode；

当模式为mode并且mode>=3且<=13时,uri为大小屏设置的默认放大用户；

uri若为空或无效用户，则默认第一个用户为大小屏用户。

:::



智能模式的布局调整样例如下：

#### 自由布局

```js
在没有屏幕共享时

@setmergemode_i 1 4 [username:actor@sample.cloud.justalk.com]
```

![img](../../_images/freelayout.png)

#### 矩形布局

```js
在没有屏幕共享时

@setmergemode_i 2 4 [username:actor@sample.cloud.justalk.com]
```

![img](../../_images/rectangle.png)

#### 大屏X2

```js
在没有屏幕共享时

@setmergemode_i 3 4 [username:actor@sample.cloud.justalk.com]

actor用户显示2倍
```

![img](../../_images/bigscreenX2.png)

#### 大屏X3

```js
在没有屏幕共享时

@setmergemode_i 4 4 [username:actor@sample.cloud.justalk.com]

actor用户显示3倍
```

![img](../../_images/bigscreenX3.png)

#### 小屏底部

```js
在没有屏幕共享时

@setmergemode_i 12 4 [username:actor@sample.cloud.justalk.com]

actor用户显示在顶部，其它用户显示小屏在底部
```

![img](../../_images/smallscreenb.png)

#### 小屏顶部

```js
在没有屏幕共享时

@setmergemode_i 13 4 [username:actor@sample.cloud.justalk.com]

actor用户显示在底部，其它用户显示小屏在顶部
```

![img](../../_images/smallscreent.png)

#### 纯屏幕共享

```js
在收到屏幕共享时

@setmergemode_i 1 1 [username:actor@sample.cloud.justalk.com]
```

![img](../../_images/purescreenshare.png)

#### 屏幕共享小屏底部

```js
在没有屏幕共享时

@setmergemode_i 1 2 [username:actor@sample.cloud.justalk.com]

屏幕共享显示在顶部，其它用户显示小屏在底部
```

![img](../../_images/smallscreenb-1.png)

#### 讲台模式

```js
在没有屏幕共享时

@setmergemode_i 1 3 [username:actor@sample.cloud.justalk.com]

屏幕共享显示在顶部，其它用户显示小屏在底部并且遮盖大屏
```

![img](../../_images/teachermode.png)

#### 主持人模式

```js
在收到屏幕共享时

@setmergemode_i 1 4 [username:actor@sample.cloud.justalk.com]
```

![img](../../_images/hostmode.png)

### 智能模式分辨率

调整智能模式的布局和分辨率

```js
setmerge_i <width> <height> <mode> <scsMode> <fps> [uri]

       width:宽
       height:高
       mode:智能分屏模式 1=freeLayout,2=rectLayout,3=bigSmallX2,4=bigSmallX3....,
                                 11=bigSmallX10,12=bigSmallTop,13=bigSmallBottom
       scsMode:智能分屏带屏幕共享模式 1=screen,2=platform,3=platformCover,4=speaker
       fps:帧数 1-24
       uri: 大小屏默认放大的用户uri
```

将合并模式设置为智能模式，宽和高可以设置任意的，目前实例中暂设为 90P，180P，360P，720P，1080P。

没有收到屏幕共享时，模式为 mode，当收到屏幕共享时模式会切换成 scsMode。

当模式为 mode 并且 mode>=3 且 <=13 时，uri 为大小屏设置的默认放大用户。

uri 若为空或无效用户，则默认第一个用户为大小屏用户。

分辨率设置样例如下：

样例1-1080P

```js
@setmerge_i 1920 1080 1 4 24 [username:actor@sample.cloud.justalk.com]
```

样例2-720P

```js
@setmerge_i 1280 720 1 4 24 [username:actor@sample.cloud.justalk.com]
```

样例3-360P

```js
@setmerge_i 640 360 1 4 24 [username:actor@sample.cloud.justalk.com]
```

样例4-180P

```js
@setmerge_i 320 180 1 4 24 [username:actor@sample.cloud.justalk.com]
```

样例5-90P

```js
@setmerge_i 160 90 1 4 24 [username:actor@sample.cloud.justalk.com]
```

### 修改录制或推流分辨率

修改录制或推流分辨率

```js
json字符串需要base64加密
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":%x}

//MtcConfVideoLevelKey 视频尺寸,由小到到可选值:
                                 0x100即256对应360P
                                 0x200即512对应480P
                                 0x300即768对应720P
                                 0x400即1024对应1080P

录制器或推流器也是一个confDelivery, 可以通过sendtext命令通知录制器/推流器来操作

录制器或推流器uri为[username:delivery_会议号@delivery.cloud.justalk.com]
```

修改录制或推流分辨率为360P

```js
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":0x100}

base64编码后为
eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjB4MTAwfQ==

假设会议号为12345678，则指令为
sendtext eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjB4MTAwfQ== [username:delivery_12345678@delivery.cloud.justalk.com]
```

修改录制或推流分辨率为480P

```js
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":512}

base64编码后为
eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjUxMn0=

假设会议号为12345678，则指令为
sendtext eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjUxMn0= [username:delivery_12345678@delivery.cloud.justalk.com]
```

修改录制分辨率为720P

```js
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":0x300}

base64编码后为
eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjB4MzAwfQ==

假设会议号为12345678，则指令为
sendtext eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjB4MzAwfQ== [username:delivery_12345678@delivery.cloud.justalk.com]
```

修改录制分辨率为1080P

```js
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":1024}

base64编码后为
eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjEwMjR9

假设会议号为12345678，则指令
sendtext eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjEwMjR9 [username:delivery_12345678@delivery.cloud.justalk.com]
```

### 修改录制文件大小

修改录制文件大小为100KB

```js
{"cmd":"StartRecord","Video":true,"Storage":{"Protocol":"qiniu","AccessKey":"Th2jW_jP5VSk-wfdVMy5it1oK4iHa8pv8vBZMhbd","SecretKey":"Nh-_pgXrx9weiq8bkAtJPkrBlV3YP13U0Fx0fT-c","BucketName":"ajianzheng","FileKey":"12345678.mp4","SplitFileSize":100}}

base64编码后为
eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwMH19

假设会议号为12345678，则指令为
sendtext eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwMH19 [username:delivery_12345678@delivery.cloud.justalk.com]
```

修改录制文件大小为1MB

```js
{"cmd":"StartRecord","Video":true,"Storage":{"Protocol":"qiniu","AccessKey":"Th2jW_jP5VSk-wfdVMy5it1oK4iHa8pv8vBZMhbd","SecretKey":"Nh-_pgXrx9weiq8bkAtJPkrBlV3YP13U0Fx0fT-c","BucketName":"ajianzheng","FileKey":"12345678.mp4","SplitFileSize":1024}}

base64编码为
eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwMjR9fQ==

假设会议号为12345678，则指令为
sendtext eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwMjR9fQ== [username:delivery_12345678@delivery.cloud.justalk.com]
```

修改录制文件大小为1GB

```js
{"cmd":"StartRecord","Video":true,"Storage":{"Protocol":"qiniu","AccessKey":"Th2jW_jP5VSk-wfdVMy5it1oK4iHa8pv8vBZMhbd","SecretKey":"Nh-_pgXrx9weiq8bkAtJPkrBlV3YP13U0Fx0fT-c","BucketName":"ajianzheng","FileKey":"12345678.mp4","SplitFileSize":1048576}}

base64编码后为
eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwNDg1NzZ9fQ==

假设会议号为12345678，则指令为
sendtext eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwNDg1NzZ9fQ== [username:delivery_12345678@delivery.cloud.justalk.com]
```

修改录制文件大小为6GB

```js
{"cmd":"StartRecord","Video":true,"Storage":{"Protocol":"qiniu","AccessKey":"Th2jW_jP5VSk-wfdVMy5it1oK4iHa8pv8vBZMhbd","SecretKey":"Nh-_pgXrx9weiq8bkAtJPkrBlV3YP13U0Fx0fT-c","BucketName":"ajianzheng","FileKey":"12345678.mp4","SplitFileSize": 6291456}}

base64编码后为
eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOiA2MjkxNDU2fX0=

假设会议号为12345678，则指令为
sendtext eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOiA2MjkxNDU2fX0= [username:delivery_12345678@delivery.cloud.justalk.com]
```

