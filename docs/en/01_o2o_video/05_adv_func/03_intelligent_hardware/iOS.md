---
title: Smart hardware
---
# Smart hardware

## Set Media Parameters

Before initiating a call, you can select different media parameter
configuration modes according to the device type to achieve high-quality
audio and video call effects.

Juphoon provides different media configuration modes for developers to
choose according to different scenarios, and opens media setting
parameters for developers to set flexibly. Details are as follows:

``````objectivec
/// 360P
JCCallMediaConfigMode360P,
/// 720P
JCCallMediaConfigMode720P,
/// Smart hardware scenarios, such as calling with a watch, etc.
JCCallMediaConfigModeIntelligentHardware,
``````

Choose one of the phone calls; Smart hardware calls generally select
JCCallMediaConfigModeIntelligentHardware mode.

Before initiating a call, developers can select a media configuration
mode according to the specific scenario and generate configuration
parameters through the following interface:

``````objectivec
/// Create configuration parameters according to modes
/// @param mode mode
+(JCCallMediaConfig* __nonnull)generateByMode:(JCCallMediaConfigMode)mode;
``````

After generating the configuration parameters, call the mediaConfig
property in JCCall to set:

``````objectivec
JCManager.shared.call.mediaConfig = [JCCallMediaConfig generateByMode:JCCallMediaConfigModeIntelligentHardware];
``````

Among them, the media parameters of the three modes are set as follows:

1、JCCallMediaConfigMode360P mode parameters

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Parameters</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioAecMode</p></td>
<td><p>JCCallAecModeFDE</p></td>
</tr>
<tr class="even">
<td><p>audioArsEnable</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMin</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMax</p></td>
<td><p>76</p></td>
</tr>
<tr class="odd">
<td><p>audioRed</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioRxAnr</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>audioRtx</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioRxAgc</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAec</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioQosAnr</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAgc</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioQosVad</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionRecvWidth</p></td>
<td><p>640</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionRecvHeight</p></td>
<td><p>360</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionSendWidth</p></td>
<td><p>640</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionSendHeight</p></td>
<td><p>360</p></td>
</tr>
<tr class="odd">
<td><p>videoBitrate</p></td>
<td><p>100</p></td>
</tr>
<tr class="even">
<td><p>videoSendFramerate</p></td>
<td><p>30</p></td>
</tr>
<tr class="odd">
<td><p>videoArsEnable</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMin</p></td>
<td><p>30kpbs</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMax</p></td>
<td><p>800kbps</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMin</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMax</p></td>
<td><p>30</p></td>
</tr>
<tr class="even">
<td><p>videoRedFec</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoRecvFullScreen</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>videoSmallNalu</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionControl</p></td>
<td><p>Open</p></td>
</tr>
</tbody>
</table>

2、JCCallMediaConfigMode720P

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Parameters</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioAecMode</p></td>
<td><p>JCCallAecModeFDE</p></td>
</tr>
<tr class="even">
<td><p>audioArsEnable</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMin</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMax</p></td>
<td><p>76</p></td>
</tr>
<tr class="odd">
<td><p>audioRed</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioRxAnr</p></td>
<td><p>Close</p></td>
</tr>
<tr class="odd">
<td><p>audioRtx</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioRxAgc</p></td>
<td><p>Close</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAec</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioQosAnr</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAgc</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioQosVad</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionRecvWidth</p></td>
<td><p>1280</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionRecvHeight</p></td>
<td><p>720</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionSendWidth</p></td>
<td><p>1280</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionSendHeight</p></td>
<td><p>720</p></td>
</tr>
<tr class="odd">
<td><p>videoBitrate</p></td>
<td><p>100</p></td>
</tr>
<tr class="even">
<td><p>videoSendFramerate</p></td>
<td><p>30</p></td>
</tr>
<tr class="odd">
<td><p>videoArsEnable</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMin</p></td>
<td><p>30kpbs</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMax</p></td>
<td><p>2100kbps</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMin</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMax</p></td>
<td><p>30</p></td>
</tr>
<tr class="even">
<td><p>videoRedFec;</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoRecvFullScreen</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>videoSmallNalu</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionControl</p></td>
<td><p>Open</p></td>
</tr>
</tbody>
</table>

3、JCCallMediaConfigModeIntelligentHardware

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Parameters</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioAecMode</p></td>
<td><p>JCCallAecModeFDE</p></td>
</tr>
<tr class="even">
<td><p>audioArsEnable</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMin</p></td>
<td><p>5</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMax</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>audioRed</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioRxAnr</p></td>
<td><p>Close</p></td>
</tr>
<tr class="odd">
<td><p>audioRtx</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioRxAgc</p></td>
<td><p>Close</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAec</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioQosAnr</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAgc</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>audioQosVad</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionRecvWidth;</p></td>
<td><p>Depending on the specific situation, the watch is usually 128*128</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionRecvHeight;</p></td>
<td><p>Depending on the specific situation, the watch is usually 128*128</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionSendWidth;</p></td>
<td><p>Depending on the specific situation, the watch is usually 640*360</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionSendHeight;</p></td>
<td><p>Depending on the specific situation, the watch is usually 640*360</p></td>
</tr>
<tr class="odd">
<td><p>videoBitrate</p></td>
<td><p>30</p></td>
</tr>
<tr class="even">
<td><p>videoSendFramerate</p></td>
<td><p>15</p></td>
</tr>
<tr class="odd">
<td><p>videoArsEnable</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMin</p></td>
<td><p>Depending on the specific situation, the watch uses 128*128 15 frames 10kpbs</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMax</p></td>
<td><p>Depending on the specific situation, the watch uses 128*128 15 frames 75kpbs</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMin</p></td>
<td><p>0</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMax</p></td>
<td><p>15</p></td>
</tr>
<tr class="even">
<td><p>videoRedFec</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoRecvFullScreen</p></td>
<td><p>Open</p></td>
</tr>
<tr class="even">
<td><p>videoSmallNalu</p></td>
<td><p>Open</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionControl</p></td>
<td><p>Open</p></td>
</tr>
</tbody>
</table>

In addition to choosing the media configuration mode provided by
Juphoon, developers can also customize the media parameters according to
the corresponding attributes to meet the needs of different scenarios.
The media parameters include audio and video parameters. The
instructions are as follows:

**Audio Parameters**

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Parameters</p></th>
<th><p>Type</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioEnableCodecs</p></td>
<td><p>NSString</p></td>
<td><ul>
<li><p>Audio codec,with opus、PCMU、PCMA、G729、G722、AAC、AMR、AMR-WB、iLBC</p></li>
<li><p>The priority of consultation is arranged in order, and each codec is separated by “;”, pay attention to case</p></li>
</ul></td>
</tr>
<tr class="even">
<td><p>audioAecEnable</p></td>
<td><p>bool</p></td>
<td><p>Turn on/off echo concellation</p></td>
</tr>
<tr class="odd">
<td><p>audioAecMode</p></td>
<td><p>JCCallAecMode</p></td>
<td><p>Echo cancellation mode; refer to JCCallAecMode enumeration value for details</p></td>
</tr>
<tr class="even">
<td><p>audioArsEnable</p></td>
<td><p>bool</p></td>
<td><p>Turn on/off audio ars</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMin</p></td>
<td><p>int</p></td>
<td><p>Audio minimum bit rate,kb</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMax</p></td>
<td><p>int</p></td>
<td><p>Audio maximum bit rate,kb</p></td>
</tr>
<tr class="odd">
<td><p>audioRed</p></td>
<td><p>bool</p></td>
<td><ul>
<li><p>Audio red anti-loss pakage increases payload bit rate when it opens</p></li>
<li><p>Close enhanced anti-pakage ability to save bit rate and reduce power consumption</p></li>
<li><p>Usuallyly choose open in unstable network</p></li>
</ul></td>
</tr>
<tr class="even">
<td><p>audioRxAnr</p></td>
<td><p>bool</p></td>
<td><p>Generally, the noise suppression can be turned off to reduce the sound dsp processing and reduce the power consumption when the sound quality of the receiving end is good</p></td>
</tr>
<tr class="odd">
<td><p>audioRtx</p></td>
<td><p>bool</p></td>
<td><p>RTX retransmission, used together with FEC and NACK, reduces power consumption; and usually choose open when the network is unstable</p></td>
</tr>
<tr class="even">
<td><p>audioRxAgc</p></td>
<td><p>bool</p></td>
<td><p>Automatic gain control of sound in the receiving end sound; if the receiving end sound is too loud or too low, you can try to open</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAec</p></td>
<td><p>bool</p></td>
<td><p>Echo cancellation</p></td>
</tr>
<tr class="even">
<td><p>audioQosAnr</p></td>
<td><p>bool</p></td>
<td><ul>
<li><p>If the noise at the receiving end is loud, increase the noise suppression level at the transmitting end</p></li>
<li><p>If the sound at the receiving end is low, and the suppression level can be reduced or the suppression can be turned off without affecting the sound quality</p></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>audioQosAgc</p></td>
<td><p>bool</p></td>
<td><p>Automatic gain control of sound at the sender</p></td>
</tr>
<tr class="even">
<td><p>audioQosVad</p></td>
<td><p>bool</p></td>
<td><p>Silence detection</p></td>
</tr>
</tbody>
</table>

**Video Parameters**

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Parameters</p></th>
<th><p>Type</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>videoEnableCodecs</p></td>
<td><p>NSString</p></td>
<td><ul>
<li><p>Video codec, with H264-SVC, VP8, VP9, H264, H265, H263</p></li>
<li><p>The priority of consultation are arrangeded in order</p></li>
</ul></td>
</tr>
<tr class="even">
<td><p>videoResolutionRecvWidth</p></td>
<td><p>int</p></td>
<td><p>The width of video receiving</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionRecvHeight</p></td>
<td><p>int</p></td>
<td><p>The height of video receiving</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionSendWidth</p></td>
<td><p>int</p></td>
<td><p>The width of video sending</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionSendHeight</p></td>
<td><p>int</p></td>
<td><p>The heigh of video sending</p></td>
</tr>
<tr class="even">
<td><p>videoBitrate</p></td>
<td><p>int</p></td>
<td><ul>
<li><p>The initial video bit rate kb; the initial bit rate affects the definition of the video at the beginning</p></li>
<li><p>The initial code rate is set to high to reach the required code rate faster, but the initial code rate must be within the range of ars</p></li>
<li><p>The range of 720p ars is generally between 30kbps~4235.4kbps bitrate; the range of 1080p ars is generally between 30kbps~7471.8kbps bitrate</p></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>videoSendFramerate</p></td>
<td><p>int</p></td>
<td><p>Send frame rate</p></td>
</tr>
<tr class="even">
<td><p>videoArsEnable</p></td>
<td><p>bool</p></td>
<td><p>Turn on/off video ars, that is, automatic video rate control. After turning on, it can ensure the smooth transmission of the coded stream and the full utilization of the channel bandwidth</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMin</p></td>
<td><p>int</p></td>
<td><p>Video minimum bit rate,kb</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMax</p></td>
<td><p>int</p></td>
<td><p>Video maximum bit rate,kb</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMin</p></td>
<td><p>int</p></td>
<td><p>Video minimum frame rate,kb</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMax</p></td>
<td><p>int</p></td>
<td><p>Video maximum frame rate,kb</p></td>
</tr>
<tr class="odd">
<td><p>videoRedFec</p></td>
<td><p>bool</p></td>
<td><ul>
<li><p>Video supports rfc 2198 voice fec-red. Setting the parameter videoRedFec to true can increase the audio and video anti-loss ability, which is displayed by doubling the payload code rate without increasing the header.</p></li>
<li><p>For example, after Opus 55kbps doubles the bit rate, the final bit rate reaches 90kbps=55+35;</p></li>
<li><p>After Opus 10kbps doubles the bit rate, the final bit rate reaches 16kbps=10+6</p></li>
</ul></td>
</tr>
<tr class="even">
<td><p>videoRecvFullScreen</p></td>
<td><p>bool</p></td>
<td><p>Affect the local video request resolution, the default setting is true</p>
<dl>
<dt>Assumption</dt>
<dd><ul>
<li><ol>
<li><p>The default request on this end is 640*360 resolution</p></li>
</ol></li>
<li><ol start="2">
<li><p>The local screen resolution is 360*360</p></li>
</ol></li>
<li><p>true:the requested resolution will be adjusted to 360*360</p></li>
<li><p>false: the request is still 640*360</p></li>
</ul>
</dd>
</dl></td>
</tr>
<tr class="odd">
<td><p>videoSmallNalu</p></td>
<td><p>bool</p></td>
<td><p>The video data is packaged in SmallNalu mode, and a package contains more data, which reduces the bit rate of the header, thereby reducing power consumption</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionControl</p></td>
<td><p>bool</p></td>
<td><p>Resolution control; open to change the resolution with network fluctuations and close to fix the resolution</p></td>
</tr>
</tbody>
</table>

Among them,AecMode has folowing values:

``````objectivec
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
``````

Developers can configure by themselves in accordance with specific
needs.

Sample code:

``````objectivec
//Audio parameters
JCCallMediaConfig* mediaConfig = [JCCallMediaConfig new];
mediaConfig.audioEnableCodecs = @"opus";
mediaConfig.audioAecMode = JCCallAecModeFDE;
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
mediaConfig.videoEnableCodecs = @"H264";
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
``````
