---
title: Smart Hardware
---
# Smart Hardware

## Media Parameter Setting

### Ways to set parameters

Before initiating a call, you can select different media parameter configuration modes according to the device type to achieve high-quality audio and video call effects.

Juphoon provides different media configuration modes for developers to choose according to different scenarios, and opens media setting parameters for developers to set flexibly. Details are as follows:

``` java
// 360P
public static final int MODE_360P = 0;
// 720P
public static final int MODE_720P = MODE_360P + 1;
// Small smart harware
public static final int MODE_INTELLINGENT_HARDWARE_SMALL = MODE_720P + 1;
// Big smart hardware
public static final int MODE_INTELLINGENT_HARDWARE_LARGE = MODE_INTELLINGENT_HARDWARE_SMALL + 1;
```

Choose one of the phone calls; Smart hardware calls;small smart hardware usually chooses MODE_INTELLINGENT_HARDWARE_SMALL, and big smart hardware usually chooses MODE_INTELLINGENT_HARDWARE_LARGE.

Callback generateByMode selection mode, and the return value is the media configuration parameter

``` java
/**
  * Generate configuration parameters according to modes
  * @param mode
  * @return
  */
public static MediaConfig generateByMode(@Mode int mode);
```

After generating configuration parameters, callback the mediaConfig attribute in the JCCall to set:

``` java
JCManager.shared.call.mediaConfig = JCCall.MediaConfig.generateByMode(JCCall.MediaConfig.MODE_INTELLINGENT_HARDWARE_SMALL);
```

### Parameter details

1. The parameters of MODE_360P mode

| Parameters                | Description       |
| ------------------------- | ----------------- |
| audioEnableCodecs         | AMR               |
| audioAecMode              | AEC_MODE_SDE      |
| audioArsEnable            | Open              |
| audioArsBitrateMin        | 20                |
| audioArsBitrateMax        | 75                |
| audioRed                  | Open              |
| audioRxAnr                | Close             |
| audioRtx                  | Close             |
| audioRxAgc                | Close             |
| audioQosAec               | Open              |
| audioQosAnr               | Open              |
| audioQosAgc               | Open              |
| audioQosVad               | Open              |
| videoEnableCodecs         | H264-SVC;H264;VP8 |
| videoResolutionRecvWidth  | 640               |
| videoResolutionRecvHeight | 360               |
| videoResolutionSendWidth  | 640               |
| videoResolutionSendHeight | 360               |
| videoBitrate              | 800               |
| videoSendFramerate        | 24                |
| videoArsEnable            | Open              |
| videoArsBitrateMin        | 50kpbs            |
| videoArsBitrateMax        | 1500kbps          |
| videoArsFramerateMin      | 1                 |
| videoArsFramerateMax      | 10                |
| videoRedFec               | Open              |
| videoRecvFullScreen       | Open              |
| videoSmallNalu            | Open              |
| videoResolutionControl    | Open              |

1. The parameters of MODE_720P mode

| Parameters                | Description  |
| ------------------------- | ------------ |
| audioAecMode              | AEC_MODE_SDE |
| audioArsEnable            | Open         |
| audioArsBitrateMin        | 20           |
| audioArsBitrateMax        | 75           |
| audioRed                  | Open         |
| audioRxAnr                | Close        |
| audioRtx                  | Close        |
| audioRxAgc                | Close        |
| audioQosAec               | Open         |
| audioQosAnr               | Open         |
| audioQosAgc               | Open         |
| audioQosVad               | Close        |
| videoResolutionRecvWidth  | 1280         |
| videoResolutionRecvHeight | 720          |
| videoResolutionSendWidth  | 1280         |
| videoResolutionSendHeight | 720          |
| videoBitrate              | 100          |
| videoSendFramerate        | 24           |
| videoArsEnable            | Open         |
| videoArsBitrateMin        | 50kpbs       |
| videoArsBitrateMax        | 1500kbps     |
| videoArsFramerateMin      | 1            |
| videoArsFramerateMax      | 30           |
| videoRedFec;              | Open         |
| videoRecvFullScreen       | Open         |
| videoSmallNalu            | Open         |
| videoResolutionControl    | Open         |

1. MODE_INTELLINGENT_HARDWARE_SMALL mode parameters

| Parameters                 | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| audioEnableCodecs          | AMR                                                          |
| audioAecMode               | AEC_MODE_SDE                                                 |
| audioArsEnable             | Open                                                         |
| audioArsBitrateMin         | 2                                                            |
| audioArsBitrateMax         | 12                                                           |
| audioRed                   | Close                                                        |
| audioRxAnr                 | Close                                                        |
| audioRtx                   | Close                                                        |
| audioRxAgc                 | Close                                                        |
| audioQosAec                | Open                                                         |
| audioQosAnr                | Close                                                        |
| audioQosAgc                | Open                                                         |
| audioQosVad                | Open                                                         |
| videoEnableCodecs          | H264-SVC;H264;VP8                                            |
| videoResolutionRecvWidth;  | 240                                                          |
| videoResolutionRecvHeight; | 240                                                          |
| videoResolutionSendWidth;  | 352                                                          |
| videoResolutionSendHeight; | 288                                                          |
| videoBitrate               | 50                                                           |
| videoSendFramerate         | 10                                                           |
| videoArsEnable             | Open                                                         |
| videoArsBitrateMin         | Depend on specific situations; the whatch uses 128*128 15 frames 10kpbs |
| videoArsBitrateMax         | 200kpbs                                                      |
| videoArsFramerateMin       | 1                                                            |
| videoArsFramerateMax       | 10                                                           |
| videoRedFec                | Close                                                        |
| videoRecvFullScreen        | Close                                                        |
| videoSmallNalu             | Open                                                         |
| videoResolutionControl     | Close                                                        |

1. MODE_INTELLINGENT_HARDWARE_LARGE mode parameters

| Parameters                 | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| audioEnableCodecs          | AMR                                                          |
| audioAecMode               | AEC_MODE_SDE                                                 |
| audioArsEnable             | Open                                                         |
| audioArsBitrateMin         | 2                                                            |
| audioArsBitrateMax         | 12                                                           |
| audioRed                   | Close                                                        |
| audioRxAnr                 | Close                                                        |
| audioRtx                   | Close                                                        |
| audioRxAgc                 | Close                                                        |
| audioQosAec                | Open                                                         |
| audioQosAnr                | Close                                                        |
| audioQosAgc                | Open                                                         |
| audioQosVad                | Open                                                         |
| videoEnableCodecs          | H264-SVC;H264;VP8                                            |
| videoResolutionRecvWidth;  | 640                                                          |
| videoResolutionRecvHeight; | 340                                                          |
| videoResolutionSendWidth;  | 640                                                          |
| videoResolutionSendHeight; | 360                                                          |
| videoBitrate               | 50                                                           |
| videoSendFramerate         | 10                                                           |
| videoArsEnable             | Open                                                         |
| videoArsBitrateMin         | Depend on specific situations; the watch uses 128*128 15 frames 10kpbs |
| videoArsBitrateMax         | 2000kpbs                                                     |
| videoArsFramerateMin       | 1                                                            |
| videoArsFramerateMax       | 10                                                           |
| videoRedFec                | Close                                                        |
| videoRecvFullScreen        | Open                                                         |
| videoSmallNalu             | Open                                                         |
| videoResolutionControl     | Close                                                        |

In addition to selecting the provided mode, developers can also customize media parameters according to the corresponding attributes to meet the needs of different scenarios. The media parameters include audio and video parameters. The instructions are as follows:

``` java
**Audio Parameters**
```

| Parameters         | Type          | Description                                                  |
| ------------------ | ------------- | ------------------------------------------------------------ |
| audioEnableCodecs  | NSString      | Audio codec,with opus、PCMU、PCMA、G729、G722、AAC、AMR、AMR-WB、iLBCThe priority of consultation is arranged in order, and each codec is separated by “;”, pay attention to case |
| audioAecEnable     | bool          | Turn on/off Echo cancellation                                |
| audioAecMode       | JCCallAecMode | Echo cancellation mode; refer to AecMode enumeration value for details |
| audioArsEnable     | bool          | Turn on/off audio ars                                        |
| audioArsBitrateMin | int           | Audio minimum bit rate,kb                                    |
| audioArsBitrateMax | int           | Audio maximum bit rate,kb                                    |
| audioRed           | bool          | Audio red anti-loss pakage increases payload bit rate when it opensClose enhanced anti-pakage ability to save bit rate and reduce power consumptionUsuallyly choose open in unstable network |
| audioRxAnr         | bool          | Generally, the noise suppression can be turned off to reduce the sound dsp processing and reduce the power consumption when the sound quality of the receiving end is good |
| audioRtx           | bool          | RTX retransmission, used together with FEC and NACK, reduces power consumption; and usually choose open when the network is unstable |
| audioRxAgc         | bool          | Automatic gain control of sound in the receiving end sound; if the receiving end sound is too loud or too low, you can try to open |
| audioQosAec        | bool          | Echo cancellation                                            |
| audioQosAnr        | bool          | If the noise at the receiving end is loud, increase the noise suppression level at the transmitting endIf the sound at the receiving end is low, and the suppression level can be reduced or the suppression can be turned off without affecting the sound quality |
| audioQosAgc        | bool          | Automatic gain control of sound at the sender                |
| audioQosVad        | bool          | Silence detection                                            |

**Video Parameters**

| Parameters                | Type     | Description                                                  |
| ------------------------- | -------- | ------------------------------------------------------------ |
| videoEnableCodecs         | NSString | Video codec, with H264-SVC, VP8, VP9, H264, H265, H263The priority of consultation are arrangeded in order |
| videoResolutionRecvWidth  | int      | The width of video receiving                                 |
| videoResolutionRecvHeight | int      | The height of video receiving                                |
| videoResolutionSendWidth  | int      | The width of video sending                                   |
| videoResolutionSendHeight | int      | The heigh of video sending                                   |
| videoBitrate              | int      | The initial video bit rate kb; the initial bit rate affects the definition of the video at the beginningThe initial code rate is set to high to reach the required code rate faster, but the initial code rate must be within the range of arsThe range of 720p ars is generally between 30kbps~4235.4kbps bitrate; the range of 1080p ars is generally between 30kbps~7471.8kbps bitrate |
| videoSendFramerate        | int      | Send frame rate                                              |
| videoArsEnable            | bool     | Turn on/off video ars, that is, automatic video rate control. After turning on, it can ensure the smooth transmission of the coded stream and the full utilization of the channel bandwidth |
| videoArsBitrateMin        | int      | Video minimum bit rate,kb                                    |
| videoArsBitrateMax        | int      | Video maximum bit rate,kb                                    |
| videoArsFramerateMin      | int      | Video minimum frame rate,kb                                  |
| videoArsFramerateMax      | int      | Video maximum frame rate,kb                                  |
| videoRedFec               | bool     | Video supports rfc 2198 voice fec-red. Setting the parameter videoRedFec to true can increase the audio and video anti-loss ability, which is displayed by doubling the payload code rate without increasing the header.For example, after Opus 55kbps doubles the bit rate, the final bit rate reaches 90kbps=55+35;After Opus 10kbps doubles the bit rate, the final bit rate reaches 16kbps=10+6 |
| videoRecvFullScreen       | bool     | Affect the local video request resolution, the default setting is trueAssumptionThe default request on this end is 640*360 resolutionThe local screen resolution is 360*360true:the requested resolution will be adjusted to 360*360false: the request is still 640*360 |
| videoSmallNalu            | bool     | The video data is packaged in SmallNalu mode, and a package contains more data, which reduces the bit rate of the header, thereby reducing power consumption |
| videoResolutionControl    | bool     | Resolution control; open to change the resolution with network fluctuations and close to fix the resolution |

Among them,AecMode has folowing values:

``` java
// Acoustic echo cancellation. Support calls in the hands-free state, which is effective for models with better performance such as iOS and Windows.
public static final int AEC_MODE_AEC = MtcCallDb.EN_MTC_EC_AEC;
// Use the acoustic echo cancellation function provided by the operating system to support calls in the hands-free state. It is valid for most branded phones such as iOS and Android, but some models may not be valid.
public static final int AEC_MODE_OS = MtcCallDb.EN_MTC_EC_OS;
// Acoustic echo suppression, and echo suppression is achieved through half-duplex, usually not recommended.
public static final int AEC_MODE_AES = MtcCallDb.EN_MTC_EC_AES;
// Software adaptive acoustic echo cancellation is effective for most models. But the calculation is slightly larger than that of AEC. SDE tracking delay accuracy is high, FDE can adapt to larger delays.
public static final int AEC_MODE_FDE = MtcCallDb.EN_MTC_EC_AEC_FDE;
// Software adaptive acoustic echo cancellation is effective for most models. But the calculation is slightly larger than that of AEC. SDE tracking delay accuracy is high, FDE can adapt to larger delays.
public static final int AEC_MODE_SDE = MtcCallDb.EN_MTC_EC_AEC_SDE;
```

Developers can configure by themselves in accordance with specific needs.

Sample code:

``` java
//Audio parameters
MediaConfig mediaConfig = new MediaConfig();
mediaConfig.audioEnableCodecs = "opus";
mediaConfig.audioAecMode = JCCall.MediaConfig.AEC_MODE_FDE;
mediaConfig.audioArsEnable = true;
mediaConfig.audioArsBitrateMax = 20;
mediaConfig.audioArsBitrateMin = 5;
mediaConfig.audioRed = true;
mediaConfig.audioRxAnr = false;
mediaConfig.audioRtx = true;
mediaConfig.audioRxAgc = false;
mediaConfig.audioQosAec = true;
mediaConfig.audioQosAnr = true;
mediaConfig.audioQosAgc = true;
mediaConfig.audioQosVad = true;

//Video parameters
mediaConfig.videoEnableCodecs = "H264";
mediaConfig.videoResolutionRecvWidth = 128;
mediaConfig.videoResolutionRecvHeight = 128;
mediaConfig.videoResolutionSendWidth = 640;
mediaConfig.videoResolutionSendHeight = 360;
mediaConfig.videoBitrate = 30;
mediaConfig.videoSendFramerate = 15;
mediaConfig.videoArsEnable = true;
mediaConfig.videoArsBitrateMax = 75;
mediaConfig.videoArsBitrateMin = 10;
mediaConfig.videoArsFramerateMax = 15;
mediaConfig.videoArsFramerateMin = 0;
mediaConfig.videoRedFec  = true;
mediaConfig.videoRecvFullScreen  = true;
mediaConfig.videoSmallNalu  = true;
mediaConfig.videoResolutionControl  = true;

JCManager.shared.call.mediaConfig = mediaConfig;
```

## Standby Power Optimization Solution

### Prerequisites

The watch has registered fake push.

### Procedure description

1. The mobile phone calls the watch, and at the same time sends a
    notification to the watch through its own push channel.

2. After the watch receives the notification, Initialize the Juphoon
    module and log in.

3. After successful Login, wait for the server to call in.

4. Receive an incoming call and answer it.

5. Call ended.

6. Destroy the Juphoon module.

::: tip

1.The mobile phone needs to have a timeout mechanism to ensure that it
can hang up in time when another party does not receive an incoming
call.

2.If you cannot receive the call after the successful login, it may be
because the mobile phone hangs up before the watch is logged in. At this
time, the call has become a missed call from the watch, causing the call
not go through the calling process.

3.After registering fake push, you don’t need to call logout to log out,
just destroy the Juphoon module directly, otherwise the push will be
invalid.

:::

### Calling party

1. the Juphoon interface to call the called party (watch);

2. The watch manufacturer activates the watch by push.

### The called party

The called party (watch) performs the following operations:

1. Add to create JCPush module:

    ``````java
    JCPush push = JCPush.create(client);
    ``````

2. After successful Login , register a fake push with the server,
    mainly to make the server think that the user is not offline, so
    that the calling call will not be directly rejected by the server:

    ``````java
    JCPushTemplate pushInfo = new JCPushTemplate();
    pushInfo.initWithMiPush(context.getPackageName(), "free to input");
    JCManager.getInstance().push.addPushInfo(pushInfo);s
    pushInfo.initWithCall(JCPushTemplate.XIAOMI, JCManager.getInstance().client.getUserId(), "call", "0");
    JCManager.getInstance().push.addPushInfo(pushInfo);
    //set mode after successful login or before receicve a call
    JCManager.shared.call.mediaConfig = JCCall.MediaConfig.generateByMode(JCCall.MediaConfig.MODE_INTELLINGENT_HARDWARE_SMALL);
    ``````

3. After the watch receives the push from the manufacturer itself, it
    will activate the Juphoon module to perform operations such as
    Initialization and login, and the call will be received after
    successful Login;

4. After call ended, you can destory the Juphoon module.
