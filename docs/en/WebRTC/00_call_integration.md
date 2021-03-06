---
title: Call integration

---

# Call integration

## Integrated development

### Call integration process

#### Add the following code in HTML, please refer to the sample page for details

```js
<script src="webrtc.min.js"></script>
```

#### Establish a webpage to connect with Jufengyun

Open connection

```js
var jc = new WebRTC(config, trace);

  trace is an optional trace printing function
  config supports the following formats:
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

| Parameters  | Description                                                  |
| :---------- | ------------------------------------------------------------ |
| url         | WS server or HTTP server address                             |
| id          | Optional web page identifier, randomly generated by default  |
| getsourceid | Optional Chrome screen sharing extension web page            |
| confProps   | Conference related parameters<br/>**Required parameters**<br/>\- roomId Conference number<br/>\- accountName account<br/>\- password Account password<br/>\- AppKey APPKEY <br/><br/>**Optional parameters**<br/>\- regionId Region Id, default "0"<br/>\- mediaType Media type, 0 audio, default 1 video<br/>\- mtcConfPasswordKey optional conference password, default '123456'<br/>\- mtcConfQualityGradeKey conference video size level<br/>\- mtcConfSecurityKey is encrypted transmission<br/>\- mtcConfCompositeModeKey The mixed mode of the received video<br/> \- mtcConfStateKey initial state when joining<br/>\- mtcConfCapacityKey The maximum number of people allowed in the conference |

If the connection is successful, you will receive the onopen callback

```js
onopen(id, config)

   id local id
   config configuration information
           .instanceId is peer (peer Id)
           .iceServers is configured for the media
```

If an error occurs, you will receive the onerror callback

```js
onerror(error)

  error error object

          The connection should be closed and the interface reset
```

#### Call

After the connection is successful, you can make a call and call the following interface

```js
jc.call(configuration, constraints, peer);

   configuration optional standard RTCConfiguration object, can be null,
                  The default is issued by the server (returned by the onopen event)
   constraints standard MediaStreamConstraints object,
                  Refer to update() parameter description
   peer Optional peer Id, ignored during http connection
```

After the call is successful, the peer can receive the oncall callback

```js
oncall(peer)

  Peer Id
```

#### Call connection

After the call is established, the peer can receive the audio and video stream data from the sender through onaddstream

```js
onaddstream(stream, type)

    stream is a standard MediaStream instance,
            Use video/audio tags in HTML to render
    type can be selected as
        -'localvideo', local video
        -'localshare', local share
        -'peervideo', peer video
        -'peeraudio', peer audio
        -'peershare', peer share
        -'peerdata', peer non-media data
```

When the sending end closes sending audio and video, the opposite end will receive the onremovestream callback

```js
onremovestream(stream, type)

   stream is a standard MediaStream instance
   type-'localvideo', local video
           -'localshare', local share
           -'peervideo', peer video
           -'peeraudio', peer audio
           -'peershare', peer share
           -'peerdata', peer non-media data
```

If a member sends a text message in the meeting, other members will receive the text message callback through onconfchat

```js
{"cmd":"onconfchat", "val":{"from":%s, "text":%s}}
    from is the speaker URI
    text is UTF8 encoded text, supports Chinese
```

#### hang up

If you end the call, call the hangup interface

```js
jc.hangup();
```

At this time, the peer will receive the onhangup callback

```js
onhangup()
```

After the meeting, close the connection and call the following interface

```js
jc.close();
jc = null;
```

After the connection is closed, you will receive the onclose callback

```js
onclose()

  The session is closed, you should close the connection and reset the interface
```

### Conference process control

The conference process control includes commands such as setting the status of members of the conference site, setting member nicknames, CDN streaming and recording, and split screen.

Each member in the venue has 4 states: fixed ID, nickname, role, and status.

among them

| Parameters | Description                                                  |
| :--------- | ------------------------------------------------------------ |
| Fixed ID   | Usually the account name, it is not allowed to be modified, so it is unique |
| Nickname   | Support Chinese, allow dynamic modification                  |
| Status     | Integer type explained by bits<br/>Only when audio and video are turned on and forwarded, other members may receive the corresponding audio and video data<br/>\- 0x1 forward video<br/>\- 0x2 forward audio <br/>\- 0x4 video on<br/>\- 0x8 audio on |
| Role       | Integer explained by bit<br/>Note that only the media sender (0x2) is allowed to set the audio and video on state (0x4<br/>\- 0x2 media sender, which allows to switch local audio and video<br/ >\- 0x4 The state change event of the presenter will be broadcasted.<br/>\- 0x8 The venue owner, there is only the only owner, which is automatically generated and migrated by the venue |

Send control commands to call the following interface

```js
jc.send(text, peer);
peer Optional peer Id, ignored during http connection
text specific instruction protocol, refer to the description below the document
```

#### Member Management Control Instructions

| Instruction content                            | Instruction format                                           |
| :--------------------------------------------- | ------------------------------------------------------------ |
| Set the role of oneself or other members       | **Plain text format**<br/> setrole \<mask\> \<role\> [target]<br/><br/>**JSON format**<br/> {"Cmd":"setrole", "mask":%d, "role":%d, "target":%s} <br />// Parameter description<br/> mask Mask, indicating the bit of operation<br/ > role role, interpreted by bit, set the original status to _ROLE_, then \_ROLE\_ = (\_ROLE\_ & ~mask)<br/>target optional setting object, default is itself |
| Set the state of oneself or other members      | **Plain text format**<br/>setstate \<mask\> \<state\> [target]<br/>- Turn off the audio of id0 (ie member URI or screen URI) Server forwarding<br/>setstate 0x2 0x0 id0<br/>\- Turn off its own audio transmission<br/>setstate 0x8 0x0<br/>\- Turn on its own audio transmission<br/>setstate 0x8 0x8<br/> <br/>**JSON format**<br/>{"cmd":"setstate", "mask":%d, "state":%d, "target":%s}<br/>// Parameter description<br/>mask Mask, representing the bit state of the operation<br/>state state, interpreted by bit, set the original state to \_STATE\_, then \_STATE\_ = (\_STATE\_ & ~mask) <br/>target Optional setting object, default is itself |
| Set the nickname of oneself or other members   | **plain text format**<br/>setnick \<str\> [target]<br/><br/>**JSON format**<br/>{"cmd": "Setnick", "nick":\<str\>, "target":%s}<br/>// Parameter description<br/>str utf8 encoded nickname<br/>target optional setting object, default is itself |
| Set subscription information for other members | **Plain text format**<br/>vsubscribe \<target\> \<state\><br/><br/>**JSON format**<br/>{" cmd”:”vsubscribe”,”target”:”%s”,”state”:%d}<br />// Parameter description<br/>target subscription object<br/>state 0-no subscription, 1-subscription video |
| Kicked out members                             | **Plain text format**<br/>kickuser [target]<br/><br/>**JSON format**<br/>{cmd:"kickuser", "target":"% s”}<br />// Parameter description<br/>target target object uri |


#### Conference attribute control instruction

| Instruction content                           | Instruction format                                           | Parameter description                                        |
| :-------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Set the role of oneself or other members      | **Plain text format**<br/> settitle \<title\><br/><br/>**JSON format**<br/> {"cmd":"settitle" ,"Title":%s} | title utf8 encoded title                                     |
| Set the status of oneself or other members    | **plain text format**<br/>sendtext \<str\> [target]<br/><br/>**JSON format**<br/>{"cmd": "Sendtext", "text":"\<str\>", "target":%s} | str utf8 encoded text<br/>target optional target object, broadcast by default |
| Set the nickname of oneself or other members  | **Plain text format**<br/>publish \<bool\><br/><br/>**JSON format**<br/>{"cmd":"publish" , "Video":<\bool\>} | bool Boolean value, optional true, false, 0, 1               |
| Set subscription information to other members | **Plain text format**<br/>setmergemode \<mergeMode\><br/><br/>**JSON format**<br/>{"cmd":"setmergemode ", "mergeMode":%d} | **mergeMode integer, layout mode**<br/>1. Tile mode, all videos are equally tiled<br/>2. Podium mode, share as a big picture, Other videos are small pictures<br/>3. Lecture mode, sharing is a big picture, the sharer’s video is a small picture, others are not displayed<br/>4. Custom mode, all video layouts are set by the setlayout command<br/> 5. Smart mode, you can use setmergemode_i, setmerge_i to adjust the corresponding parameters |

#### Split screen control instructions

##### Implement custom mode

Before implementing custom mode, you need to ensure that the layout of the received video is in custom mode (@setmergemode 4) to see the effect.

| Command format                                               | Parameter description                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **JSON Format**<br/>{"cmd":"setlayout","layout":[[\<id0\>,\<ps\> x, y, w, h],<br/> ["Id1",0x200, 0.1, 0.1, 1.0, 1.0], …]} | **id0**<br/>Member URI or screen URI<br />ps**<br/ >Video size level 0x100, 0x200, 0x300, 0x400<br/>x,y,w,h: the coordinates and size of the unit [0.0,1.0] |

##### Adjust the layout of smart mode

Before adjusting the layout of smart mode, you need to make sure that the layout of the received video is smart mode (@setmergemode 5) to see the effect.

| Command format                                               | Parameter description                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Plain text format**<br/>`setmergemode_i <mode> <scsMode> [uri]`<br/>For example: set smart mode to "free mode", with screen sharing to "host mode", large screen The default zoom user is qqqq, the command is:<br/>`@setmergemode_i 1 3 [username:qqqq@sample.cloud.justalk.com]` | **mode:Smart split screen mode**<br/>1 freeLayout <br/>2 rectLayout<br/>3 bigSmallX2<br/>4 bigSmallX3<br/>......<br/>11 bigSmallX10<br/>12 bigSmallTop<br/>13 bigSmallBotto<br/> <br/>**scsMode: Smart split screen with screen sharing mode**<br/>1 screen<br/>2 platform<br/>3 platformCover<br/>4 speaker<br/>uri: default size screen Enlarged user uri |


##### Adjust the detailed parameters of the smart mode

| Command format                                               | Parameter description                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Plain text format**<br/>setmerge_i \<width\> \<height\> \<mode\> \<scsMode\> \<fps\> [uri]<br/>For example: set the width to 1600 , The height is 900, the smart mode is "free mode", the screen sharing is "host mode", the number of frames is 24, the default size of the screen is qqqq, the command is:<br/>@setmerge_i 1600 900 1 3 24 [username:qqqq@sample.cloud.justalk.com] | **width** wide<br/>**height** high<br/>**mode** Smart split-screen mode, see setmergemode_i above<br />**scsMode** Smart split screen with screen sharing mode, see above setmergemode_iv<br/>**fps** Frames 1-30<br/>**uri** The default user uri for large and small screens |

For specific instruction information about the smart split screen mode and the detailed parameters of the smart split screen mode, please refer to [Smart Split Screen](https://developer.juphoon.com/cn/document/V2.1/webrtc/integration.php #w_id6).

#### Recording

##### Start recording

| Command format                                               | Parameter description                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **JSON format**<br/>{"cmd":"StartRecord","Video":true,"Storage":<br/>{<br/>"Protocol":"qiniu",<br/ >"AccessKey":"Th2jW*********",<br/>"SecretKey":"Nh***********",<br/>"**BucketName* *":"***",<br/>"FileKey":"1234.mp4",<br/>"SplitFileSize":1024<br/>}<br/>} | Video Whether video conference, true is Video conference<br/>Protocol cloud storage protocol, currently supports Qiniu<br/>AccessKey, SecretKey Qiniu Cloud Personal Center->Key Management View<br/>BucketName Qiniu Cloud storage name<br/>FileKey upload The file name to Qiniu<br/>SplitFileSize How many KBs of the recording file to be split automatically, leave it blank, the default is 500M |

##### Stop recording

| Command format                                               | Parameter description                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **JSON format**<br/>{"cmd":"StopRecord"}<br/>Assuming base64 encoding is eyJjbWQiOiJTdG9wUmVjb3JkIn0= and the conference number is 12345678, the command to stop recording is as follows:<br/>sendtext eyJjbWQiOiJTdG9wUmVj =[username:delivery_12345678@delivery.cloud.justalk.com] | The recorder or pusher is also a confDelivery, the recorder or pusher is also a confDelivery, the recorder or pusher uri is:<br/>[username :delivery_会议号@delivery.cloud.justalk.com] |

::: tip

The default recording resolution is 360P. If you need to modify the recording resolution, you must call the SetVideoLevel interface to modify it.

:::

For detailed instructions on setting the recording resolution and recording file size, please refer to [Modify Recording or Push Stream Resolution](https://developer.juphoon.com/cn/document/V2.1/webrtc/integration.php# w_id8) and [Modify recording file size](https://developer.juphoon.com/cn/document/V2.1/webrtc/integration.php#w_id9).

#### CDN push

| Instruction content | Instruction format                                           |
| :------------------ | ------------------------------------------------------------ |
| Set push address    | **Plain text format**<br/>setpushuri \<uri\><br/>Set push address, if it ends with ‘/’, the current meeting number will be automatically added. <br/>You must set the recorder or pusher before starting "video mixing".<br/>The recorder or pusher is also a confDelivery. You can notify the recorder/streamer to operate the recorder or pusher through the sendtext command. The uri is: [username:delivery_conference number@delivery.cloud.justalk.com]<br/>// Example<br/>Assuming the conference number is 12345678, the command is:<br/>@sendtext @delivery_12345678 setpushuri rtmp ://video-center.alivecdn.com/juphoon11/juphoon?vhost=broadcast.justalkcloud.com [username:delivery_12345678@delivery.cloud.justalk.com] |
| Set push parameters | **Plain text format**<br/>setpushuriparm \<parm\><br/>The final URL of the complete push is equal to: push address + space + push parameters<br/>must be in Set before starting "video mixing"<br/>// Example<br/>Assuming the conference number is 12345678, the instruction is:<br/>@sendtext @delivery_12345678 setpushuriparm socks=192.12.1.2[username:delivery_12345678@delivery.cloud .justalk.com] |
| Start push          | **Plain text format**<br/>startpush<br/>Start push to CDN, and the corresponding webpage viewing address is determined by the CDN service provider.<br/>// Example<br/>Assumption meeting If the number is 12345678, the instruction is:<br/>@sendtext @delivery_12345678 startpush[username:delivery_12345678@delivery.cloud.justalk.com] |
| Stop push           | **Plain text format**<br/>stoppush<br/>// Example<br/>Assuming the conference number is 12345678, the command is:<br/>@sendtext @delivery_12345678 stoppush[username:delivery_12345678 @delivery.cloud.justalk.com] |

Please refer to [Modify Recording or Push Stream Resolution](https://developer.juphoon.com/cn/document/V2.1/webrtc/integration.php#w_id8) for detailed instructions on setting the push streaming resolution.

#### Play

| Command format | Parameter description                                        |
| :------------- | ------------------------------------------------------------ |
| Start playing  | **plain text format**<br/>play [playFile] **JSON format**<br/>{"cmd":"play", "playFile":%s}<br/>will automatically Add the sending role and the corresponding audio sending status.<br/>playFile must be the file path on the machine where ConfDelivery is located. The default playFile.wav |
| Stop playing   | **Plain text format**<br/>stopplay<br/><br/>**JSON format**<br/>{"cmd":"stopPlay"} |

### Conference event subscription

During the meeting, the change of meeting status can be subscribed by sending the subscribe event command subscribe.

```js
Plaintext format
subscribe <hex>

JSON string format
{"cmd":"subscribe", "mask":<hex>}

  hex event bit collection
    0x1 own state changes, corresponding to onselfstate
    0x2 Other member state changes, corresponding to onactorstate/onactorleave
    0x4 Change of site attributes, corresponding to onconfstate
    0x8 chat message, corresponding to onconfchat
```

You can set the objects and attributes of the subscription before subscribing.

#### Set up subscription

```js
vsubscribe <target> <state>
            //target subscription object
            //state Boolean, 0-means not to subscribe, 1-subscribe to video
```

E.g:

Subscribe to venue members actor

Assuming the actor's uri is [username:actor@sample.cloud.justalk.com], the command is:

```js
vsubscribe [username:actor@sample.cloud.justalk.com] 1
```

Unsubscribe member actor

Assuming the actor's uri is [username:actor@sample.cloud.justalk.com], the command is:

```js
vsubscribe [username:actor@sample.cloud.justalk.com] 0
```

After the subscription is successful, the status change of the subscribed member can be called back:

Other member status change callback

```js
{"cmd":"onactorstate",
 "val":{"id0":{"nick":%s,"role":%d, "state":%d, "subscribe":%d},...}}

    id0 is the member URI, globally unique,
    nick is UTF8 encoded nickname, supports Chinese
    role is the role bit integer:
          0x2-sender
    state is the state bit integer:
            0x1-forward video
            0x2-forward audio
            0x4-open video
            0x8-turn on audio
    subscribe is subscription information
            1-Subscribe to video
```

Own state change callback

```js
{"cmd":"onselfstate", "val":{"nick":%s,"role":%d, "state":%d}}
```

Member leave callback

```js
{"cmd":"onactorleave", "val":["id0","id1",...]}
```

Callback for changes in venue properties

```js
{"cmd":"onconfstate", "val":{"screen":%s, "title":%s, "sharer":%s}}

    screen is the screen URI
    title is UTF8 encoded title, supports Chinese
    sharer is the screen sharer URI
```

Negotiation status change callback

Only when the negotiation status is ‘stable’ can the local media be updated (call update/share)

```js
onsignalingstatechange(state)

  state is optional
      -'stable' stable state without negotiation
      -'have-local-offer' negotiation is in progress
      -'have-remote-offer' negotiation is in progress
      -'have-remote-pranswer' negotiation is in progress
      -'have-local-pranswer' negotiation is in progress
```

Connection status change callback

As long as the connection status is ‘failed’, unrecoverable communication will be interrupted

```js
oniceconnectionstatechange(state)

  state is optional
      -'new' initial state
      -'checking' detection status
      -'connected' successfully connected
      -'completed' detection completed
      -'disconnected' disconnected
      -'failed' connection process has failed and cannot be recovered
      -'closed' close the connection
```

#### Accessibility

Screen sharing

The following operations are required to implement the screen sharing function:

Google Chrome must install [Extra Extension][ScreenCapturing], please refer to [Chrome Screen Capturing Extension ScreenCapturing](https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk).

The getsourceid parameter must specify a valid https URL, which requires public network access by default.

#### equipment control

##### Dynamically switch local media

```js
jc.update(constraints)

   constraints standard MediaStreamConstraints object,
                In the following format
                    {
                        "audio":true,
                        "video": {
                            "width": {"max": 640},
                            "height":{"max": 480}
                        }
                    }
                    max can limit the maximum size of the video, min limit the minimum size
```

##### Dynamically switch screen sharing

Switch screen sharing, will automatically renegotiate

```js
jc.share(toggle)

   toggle Whether to share window or screen
```

Send DTMF

```js
jc.dtmf(tones,duration,inter_tone_gap)

   tones DMTF notes, 0-9, A-D or a-d, #, *. Ignore unrecognized characters

   duration The optional duration of each note in milliseconds, cannot exceed 6000 or less than 70. The default is 100ms

   inter_tone_gap Optional note interval, at least 50ms, but should be as short as possible. The default is 70ms
```

## Reference document

### Smart mode layout

setmergemode_i adjust the layout of smart mode

```js
setmergemode_i <mode> <scsMode> [uri]

         mode: Smart split screen mode 1=freeLayout,2=rectLayout,3=bigSmallX2,4=bigSmallX3...,
                               11=bigSmallX10,12=bigSmallTop,13=bigSmallBottom

         scsMode: Smart split screen with screen sharing mode 1=screen,2=platform,3=platformCover,4=speaker

         uri: The user uri that is enlarged by default on the large and small screens
```

::: tip

Make sure that the merge mode is smart mode (@setmergemode 5), otherwise you must set the mode to smart mode after the call to see the effect;

When the screen sharing is not received, the mode is mode, when the screen sharing is received, the mode will be switched to scsMode;

When the mode is mode and mode>=3 and <=13, uri is the default zoom user set by the size screen;

If uri is empty or an invalid user, the default first user is the large screen user.

:::



The layout adjustment sample of the smart mode is as follows:

#### Free layout

```js
When there is no screen sharing

@setmergemode_i 1 4 [username:actor@sample.cloud.justalk.com]
```

![img](../../_images/freelayout.png)

#### Rectangle layout

```js
When there is no screen sharing

@setmergemode_i 2 4 [username:actor@sample.cloud.justalk.com]
```

![img](../../_images/rectangle.png)

#### Big screen X2

```js
When there is no screen sharing

@setmergemode_i 3 4 [username:actor@sample.cloud.justalk.com]

actor user shows 2 times
```

![img](../../_images/bigscreenX2.png)

#### Big screen X3

```js
When there is no screen sharing

@setmergemode_i 4 4 [username:actor@sample.cloud.justalk.com]

actor user display 3 times
```

![img](../../_images/bigscreenX3.png)

#### The bottom of the small screen

```js
When there is no screen sharing

@setmergemode_i 12 4 [username:actor@sample.cloud.justalk.com]

Actor users are displayed at the top, and other users display small screens at the bottom
```

![img](../../_images/smallscreenb.png)

#### Top of small screen

```js
When there is no screen sharing

@setmergemode_i 13 4 [username:actor@sample.cloud.justalk.com]

Actor users are displayed at the bottom, and other users display small screens at the top
```

![img](../../_images/smallscreent.png)

#### Pure screen sharing

```js
When receiving screen sharing

@setmergemode_i 1 1 [username:actor@sample.cloud.justalk.com]
```

![img](../../_images/purescreenshare.png)

#### Screen sharing at the bottom of the small screen

```js
When there is no screen sharing

@setmergemode_i 1 2 [username:actor@sample.cloud.justalk.com]

Screen sharing is displayed at the top, and other users display a small screen at the bottom
```

![img](../../_images/smallscreenb-1.png)

#### Podium Mode

```js
When there is no screen sharing

@setmergemode_i 1 3 [username:actor@sample.cloud.justalk.com]

Screen sharing is displayed at the top, other users display the small screen at the bottom and cover the large screen
```

![img](../../_images/teachermode.png)

#### Moderator Mode

```js
When receiving screen sharing

@setmergemode_i 1 4 [username:actor@sample.cloud.justalk.com]
```

![img](../../_images/hostmode.png)

### Smart mode resolution

Adjust the layout and resolution of Smart Mode

```js
setmerge_i <width> <height> <mode> <scsMode> <fps> [uri]

       width: wide
       height: high
       mode: Smart split screen mode 1=freeLayout, 2=rectLayout, 3=bigSmallX2, 4=bigSmallX3...,
                                 11=bigSmallX10,12=bigSmallTop,13=bigSmallBottom
       scsMode: Smart split screen with screen sharing mode 1=screen,2=platform,3=platformCover,4=speaker
       fps: frame number 1-24
       uri: The user uri that is enlarged by default on the large and small screens
```

Set the merge mode to smart mode, and the width and height can be set arbitrarily. In the current example, it is temporarily set to 90P, 180P, 360P, 720P, 1080P.

When the screen sharing is not received, the mode is mode. When the screen sharing is received, the mode will be switched to scsMode.

When the mode is mode and mode>=3 and <=13, uri is the default zoom user set by the size screen.

If uri is empty or invalid user, the default first user is the large screen user.

The resolution setting example is as follows:

Sample 1-1080P

```js
@setmerge_i 1920 1080 1 4 24 [username:actor@sample.cloud.justalk.com]
```

Sample 2-720P

```js
@setmerge_i 1280 720 1 4 24 [username:actor@sample.cloud.justalk.com]
```

Sample 3-360P

```js
@setmerge_i 640 360 1 4 24 [username:actor@sample.cloud.justalk.com]
```

Sample 4-180P

```js
@setmerge_i 320 180 1 4 24 [username:actor@sample.cloud.justalk.com]
```

Sample 5-90P

```js
@setmerge_i 160 90 1 4 24 [username:actor@sample.cloud.justalk.com]
```

### Modify the recording or streaming resolution

Modify the recording or streaming resolution

```js
json string needs base64 encryption
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":%x}

//MtcConfVideoLevelKey video size, from small to optional:
                                 0x100 means 256 corresponds to 360P
                                 0x200 means 512 corresponds to 480P
                                 0x300 means 768 corresponds to 720P
                                 0x400 or 1024 corresponds to 1080P

The recorder or pusher is also a confDelivery, you can notify the recorder/pusher to operate through the sendtext command

The recorder or pusher uri is [username:delivery_会议号@delivery.cloud.justalk.com]
```

Modify the recording or streaming resolution to 360P

```js
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":0x100}

After base64 encoding
eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjB4MTAwfQ==

Assuming the conference number is 12345678, the instruction is
sendtext eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjB4MTAwfQ== [username:delivery_12345678@delivery.cloud.justalk.com]
```

Modify the recording or streaming resolution to 480P

```js
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":512}

After base64 encoding
eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjUxMn0=

Assuming the conference number is 12345678, the instruction is
sendtext eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjUxMn0= [username:delivery_12345678@delivery.cloud.justalk.com]
```

Modify the recording resolution to 720P

```js
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":0x300}

After base64 encoding
eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjB4MzAwfQ==

Assuming the conference number is 12345678, the instruction is
sendtext eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjB4MzAwfQ== [username:delivery_12345678@delivery.cloud.justalk.com]
```

Modify the recording resolution to 1080P

```js
{"cmd":"SetVideoLevel","MtcConfVideoLevelKey":1024}

After base64 encoding
eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjEwMjR9

Assuming the conference number is 12345678, the instruction
sendtext eyJjbWQiOiJTZXRWaWRlb0xldmVsIiwiTXRjQ29uZlZpZGVvTGV2ZWxLZXkiOjEwMjR9 [username:delivery_12345678@delivery.cloud.justalk.com]
```

### Modify the recording file size

Modify the recording file size to 100KB

```js
{"cmd":"StartRecord","Video":true,"Storage":{"Protocol":"qiniu","AccessKey":"Th2jW_jP5VSk-wfdVMy5it1oK4iHa8pv8vBZMhbd","SecretKey":"Nh-_pgXrx9kr13weic8bk" "BucketName":"ajianzheng","FileKey":"12345678.mp4","SplitFileSize":100}}

After base64 encoding
eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwMH19

Assuming the conference number is 12345678, the instruction is
sendtext eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwMH19 [username: delivery_12345678@delivery.cloud.justalk.com]
```

Modify the recording file size to 1MB

```js
{"cmd":"StartRecord","Video":true,"Storage":{"Protocol":"qiniu","AccessKey":"Th2jW_jP5VSk-wfdVMy5it1oK4iHa8pv8vBZMhbd","SecretKey":"Nh-_pgXrx9kr13weic8bk" "BucketName":"ajianzheng","FileKey":"12345678.mp4","SplitFileSize":1024}}

base64 encoded as
eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwMjR9fQ ==

Assuming the conference number is 12345678, the instruction is
sendtext eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwMjR9fQ == [username: delivery_12345678@delivery.cloud.justalk.com]
```

Modify the recording file size to 1GB

```js
{"cmd":"StartRecord","Video":true,"Storage":{"Protocol":"qiniu","AccessKey":"Th2jW_jP5VSk-wfdVMy5it1oK4iHa8pv8vBZMhbd","SecretKey":"Nh-_pgXrx9kr13weic8bk" "BucketName":"ajianzheng","FileKey":"12345678.mp4","SplitFileSize":1048576}}

After base64 encoding
eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwNDg1NzZ9fQ ==

Assuming the conference number is 12345678, the instruction is
sendtext eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOjEwNDg1NzZ9fQ == [username: delivery_12345678@delivery.cloud.justalk.com]
```

Modify the recording file size to 6GB

```js
{"cmd":"StartRecord","Video":true,"Storage":{"Protocol":"qiniu","AccessKey":"Th2jW_jP5VSk-wfdVMy5it1oK4iHa8pv8vBZMhbd","SecretKey":"Nh-_pgXrx9kr13weic8bk" "BucketName":"ajianzheng","FileKey":"12345678.mp4","SplitFileSize": 6291456}}

After base64 encoding
eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOiA2MjkxNDU2fX0 =

Assuming the conference number is 12345678, the instruction is
sendtext eyJjbWQiOiJTdGFydFJlY29yZCIsIlZpZGVvIjp0cnVlLCJTdG9yYWdlIjp7IlByb3RvY29sIjoicWluaXUiLCJBY2Nlc3NLZXkiOiJUaDJqV19qUDVWU2std2ZkVk15NWl0MW9LNGlIYThwdjh2QlpNaGJkIiwiU2VjcmV0S2V5IjoiTmgtX3BnWHJ4OXdlaXE4YmtBdEpQa3JCbFYzWVAxM1UwRngwZlQtYyIsIkJ1Y2tldE5hbWUiOiJhamlhbnpoZW5nIiwiRmlsZUtleSI6IjEyMzQ1Njc4Lm1wNCIsIlNwbGl0RmlsZVNpemUiOiA2MjkxNDU2fX0 = [username: delivery_12345678@delivery.cloud.justalk.com]

```