---
title: 智能硬件
---
# 智能硬件

## 媒体参数设置

### 参数设置方法

发起通话前可以根据设备类型选择不同的媒体参数配置模式，从而达到优质的音视频通话效果。

菊风提供不同的媒体配置模式供开发者根据不同的场景选择，同时开放媒体设置参数供开发者灵活设置。具体如下:

``````java
// 360P
public static final int MODE_360P = 0;
// 720P
public static final int MODE_720P = MODE_360P + 1;
// 小屏智能设备
public static final int MODE_INTELLINGENT_HARDWARE_SMALL = MODE_720P + 1;
// 大屏智能设备
public static final int MODE_INTELLINGENT_HARDWARE_LARGE = MODE_INTELLINGENT_HARDWARE_SMALL + 1;
``````

手机端通话任选其一；

智能硬件通话，小屏智能硬件设备一般选择 MODE\_INTELLINGENT\_HARDWARE\_SMALL 模式，大屏智能硬件设备一般选择
MODE\_INTELLINGENT\_HARDWARE\_LARGE 模式。

调用 generateByMode 选择模式，返回值是媒体配置参数:

``````java
/**
  * 根据模式生成配置参数
  * @param mode
  * @return
  */
public static MediaConfig generateByMode(@Mode int mode);
``````

生成配置参数后调用 JCCall 中的 updateMediaConfig 方法更新媒体参数

``````java
JCCall.MediaConfig mediaConfig = JCCall.MediaConfig.generateByMode(JCCall.MediaConfig.MODE_INTELLINGENT_HARDWARE_SMALL);
JCManager.getInstance().call.updateMediaConfig(mediaConfig);
``````

### 参数详情

1、MODE\_360P 模式的参数

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>参数</p></th>
<th><p>描述</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioEnableCodecs</p></td>
<td><p>AMR</p></td>
</tr>
<tr class="even">
<td><p>audioAecMode</p></td>
<td><p>AEC_MODE_SDE</p></td>
</tr>
<tr class="odd">
<td><p>audioArsEnable</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMin</p></td>
<td><p>20</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMax</p></td>
<td><p>75</p></td>
</tr>
<tr class="even">
<td><p>audioRed</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioRxAnr</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioRtx</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>audioRxAgc</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioQosAec</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAnr</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>audioQosAgc</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioQosVad</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoEnableCodecs</p></td>
<td><p>H264-SVC;H264;VP8</p></td>
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
<td><p>800</p></td>
</tr>
<tr class="even">
<td><p>videoSendFramerate</p></td>
<td><p>24</p></td>
</tr>
<tr class="odd">
<td><p>videoArsEnable</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMin</p></td>
<td><p>50kpbs</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMax</p></td>
<td><p>1500kbps</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMin</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMax</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>videoRedFec</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>videoRecvFullScreen</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoSmallNalu</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionControl</p></td>
<td><p>开启</p></td>
</tr>
</tbody>
</table>

2、MODE\_720P 模式的参数

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>参数</p></th>
<th><p>描述</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioAecMode</p></td>
<td><p>AEC_MODE_SDE</p></td>
</tr>
<tr class="even">
<td><p>audioArsEnable</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMin</p></td>
<td><p>20</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMax</p></td>
<td><p>75</p></td>
</tr>
<tr class="odd">
<td><p>audioRed</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>audioRxAnr</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>audioRtx</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioRxAgc</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAec</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>audioQosAnr</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAgc</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>audioQosVad</p></td>
<td><p>关闭</p></td>
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
<td><p>24</p></td>
</tr>
<tr class="odd">
<td><p>videoArsEnable</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMin</p></td>
<td><p>50kpbs</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMax</p></td>
<td><p>1500kbps</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMin</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMax</p></td>
<td><p>30</p></td>
</tr>
<tr class="even">
<td><p>videoRedFec;</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>videoRecvFullScreen</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoSmallNalu</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionControl</p></td>
<td><p>开启</p></td>
</tr>
</tbody>
</table>

3、MODE\_INTELLINGENT\_HARDWARE\_SMALL 模式参数

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>参数</p></th>
<th><p>描述</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioEnableCodecs</p></td>
<td><p>AMR</p></td>
</tr>
<tr class="even">
<td><p>audioAecMode</p></td>
<td><p>AEC_MODE_SDE</p></td>
</tr>
<tr class="odd">
<td><p>audioArsEnable</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMin</p></td>
<td><p>2</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMax</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>audioRed</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>audioRxAnr</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioRtx</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>audioRxAgc</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioQosAec</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAnr</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioQosAgc</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioQosVad</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoEnableCodecs</p></td>
<td><p>H264-SVC;H264;VP8</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionRecvWidth;</p></td>
<td><p>240</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionRecvHeight;</p></td>
<td><p>240</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionSendWidth;</p></td>
<td><p>352</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionSendHeight;</p></td>
<td><p>288</p></td>
</tr>
<tr class="odd">
<td><p>videoBitrate</p></td>
<td><p>50</p></td>
</tr>
<tr class="even">
<td><p>videoSendFramerate</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>videoArsEnable</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMin</p></td>
<td><p>视具体情况，手表以128*128 15帧 10kpbs</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMax</p></td>
<td><p>200kpbs</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMin</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMax</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>videoRedFec</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>videoRecvFullScreen</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>videoSmallNalu</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionControl</p></td>
<td><p>关闭</p></td>
</tr>
</tbody>
</table>

4、MODE\_INTELLINGENT\_HARDWARE\_LARGE 模式参数

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>参数</p></th>
<th><p>描述</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioEnableCodecs</p></td>
<td><p>AMR</p></td>
</tr>
<tr class="even">
<td><p>audioAecMode</p></td>
<td><p>AEC_MODE_SDE</p></td>
</tr>
<tr class="odd">
<td><p>audioArsEnable</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMin</p></td>
<td><p>2</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMax</p></td>
<td><p>12</p></td>
</tr>
<tr class="even">
<td><p>audioRed</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>audioRxAnr</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioRtx</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>audioRxAgc</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioQosAec</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAnr</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="even">
<td><p>audioQosAgc</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>audioQosVad</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoEnableCodecs</p></td>
<td><p>H264-SVC;H264;VP8</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionRecvWidth;</p></td>
<td><p>640</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionRecvHeight;</p></td>
<td><p>340</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionSendWidth;</p></td>
<td><p>640</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionSendHeight;</p></td>
<td><p>360</p></td>
</tr>
<tr class="odd">
<td><p>videoBitrate</p></td>
<td><p>50</p></td>
</tr>
<tr class="even">
<td><p>videoSendFramerate</p></td>
<td><p>10</p></td>
</tr>
<tr class="odd">
<td><p>videoArsEnable</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMin</p></td>
<td><p>视具体情况，手表以128*128 15帧 10kpbs</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMax</p></td>
<td><p>2000kpbs</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMin</p></td>
<td><p>1</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMax</p></td>
<td><p>10</p></td>
</tr>
<tr class="even">
<td><p>videoRedFec</p></td>
<td><p>关闭</p></td>
</tr>
<tr class="odd">
<td><p>videoRecvFullScreen</p></td>
<td><p>开启</p></td>
</tr>
<tr class="even">
<td><p>videoSmallNalu</p></td>
<td><p>开启</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionControl</p></td>
<td><p>关闭</p></td>
</tr>
</tbody>
</table>

除了选择提供的模式外，开发者还可以根据对应的属性对媒体参数进行自定义的设置，以满足不同场景的需求。媒体参数包括音频和视频参数。具体说明如下：

**音频参数**

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>参数</p></th>
<th><p>类型</p></th>
<th><p>描述</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>audioEnableCodecs</p></td>
<td><p>NSString</p></td>
<td><ul>
<li><p>音频编解码，具体有opus、PCMU、PCMA、G729、G722、AAC、AMR、AMR-WB、iLBC</p></li>
<li><p>协商优先级按顺序排列, 每个编解码用”;”间隔, 注意大小写</p></li>
</ul></td>
</tr>
<tr class="even">
<td><p>audioAecEnable</p></td>
<td><p>bool</p></td>
<td><p>是否开启回声消除</p></td>
</tr>
<tr class="odd">
<td><p>audioAecMode</p></td>
<td><p>JCCallAecMode</p></td>
<td><p>回声消除模式，具体参考AecMode枚举值</p></td>
</tr>
<tr class="even">
<td><p>audioArsEnable</p></td>
<td><p>bool</p></td>
<td><p>是否开启音频 ars</p></td>
</tr>
<tr class="odd">
<td><p>audioArsBitrateMin</p></td>
<td><p>int</p></td>
<td><p>音频最小码率，kb</p></td>
</tr>
<tr class="even">
<td><p>audioArsBitrateMax</p></td>
<td><p>int</p></td>
<td><p>音频最大码率，kb</p></td>
</tr>
<tr class="odd">
<td><p>audioRed</p></td>
<td><p>bool</p></td>
<td><ul>
<li><p>语音red抗丢包, 打开会增加payload码率</p></li>
<li><p>关闭增强抗丢包能力节省码率，从而降低功耗</p></li>
<li><p>网络不稳定，一般选择打开</p></li>
</ul></td>
</tr>
<tr class="even">
<td><p>audioRxAnr</p></td>
<td><p>bool</p></td>
<td><p>一般接收端声音质量好可关闭噪声抑制，减少声音dsp处理，降低功耗</p></td>
</tr>
<tr class="odd">
<td><p>audioRtx</p></td>
<td><p>bool</p></td>
<td><p>RTX重传, 同FEC、NACK一起用，降低功耗, 网络不稳定，一般选择打开</p></td>
</tr>
<tr class="even">
<td><p>audioRxAgc</p></td>
<td><p>bool</p></td>
<td><p>接收端声音自动增益控制, 接收端声音过大过小时，可尝试打开</p></td>
</tr>
<tr class="odd">
<td><p>audioQosAec</p></td>
<td><p>bool</p></td>
<td><p>回声消除</p></td>
</tr>
<tr class="even">
<td><p>audioQosAnr</p></td>
<td><p>bool</p></td>
<td><ul>
<li><p>发送端噪声抑制, 接收端声音噪声大，提高抑制等级；</p></li>
<li><p>接收端声音小，可在不影响声音质量情况下降低抑制等级或者关闭抑制</p></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>audioQosAgc</p></td>
<td><p>bool</p></td>
<td><p>发送端声音自动增益控制</p></td>
</tr>
<tr class="even">
<td><p>audioQosVad</p></td>
<td><p>bool</p></td>
<td><p>静音检测</p></td>
</tr>
</tbody>
</table>

**视频参数**

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>参数</p></th>
<th><p>类型</p></th>
<th><p>描述</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>videoEnableCodecs</p></td>
<td><p>NSString</p></td>
<td><ul>
<li><p>视频编解码，具体有 H264-SVC、VP8、VP9、H264、H265、H263</p></li>
<li><p>协商优先级按顺序排列</p></li>
</ul></td>
</tr>
<tr class="even">
<td><p>videoResolutionRecvWidth</p></td>
<td><p>int</p></td>
<td><p>视频接收宽</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionRecvHeight</p></td>
<td><p>int</p></td>
<td><p>视频接收高</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionSendWidth</p></td>
<td><p>int</p></td>
<td><p>视频发送宽</p></td>
</tr>
<tr class="odd">
<td><p>videoResolutionSendHeight</p></td>
<td><p>int</p></td>
<td><p>视频发送高</p></td>
</tr>
<tr class="even">
<td><p>videoBitrate</p></td>
<td><p>int</p></td>
<td><ul>
<li><p>视频初始码率 kb，初始码率影响视频开始的清晰度</p></li>
<li><p>设置高些能更快到达所需码率，初始码率必须在ars范围内</p></li>
<li><p>720p 的 ars 范围一般在 30kbps~4235.4kbps bitrate 之间；1080p 的 ars 范围一般在 30kbps~7471.8kbps bitrate 之间</p></li>
</ul></td>
</tr>
<tr class="odd">
<td><p>videoSendFramerate</p></td>
<td><p>int</p></td>
<td><p>发送帧率</p></td>
</tr>
<tr class="even">
<td><p>videoArsEnable</p></td>
<td><p>bool</p></td>
<td><p>是否开启视频 ars，即视频自动码率控制，开启之后可以保证编码码流的顺利传输和信道带宽的充分利用</p></td>
</tr>
<tr class="odd">
<td><p>videoArsBitrateMin</p></td>
<td><p>int</p></td>
<td><p>视频最小码率，kb</p></td>
</tr>
<tr class="even">
<td><p>videoArsBitrateMax</p></td>
<td><p>int</p></td>
<td><p>视频最大码率，kb</p></td>
</tr>
<tr class="odd">
<td><p>videoArsFramerateMin</p></td>
<td><p>int</p></td>
<td><p>视频最小帧率，kb</p></td>
</tr>
<tr class="even">
<td><p>videoArsFramerateMax</p></td>
<td><p>int</p></td>
<td><p>视频最大帧率，kb</p></td>
</tr>
<tr class="odd">
<td><p>videoRedFec</p></td>
<td><p>bool</p></td>
<td><ul>
<li><p>支持rfc 2198 语音fec-red，增强抗丢包能力，会增加一倍的payload码率，不会增加包头。</p></li>
<li><p>比如Opus 55kbps增加一倍码率后，最终码率达到90kbps=55+35；</p></li>
<li><p>Opus 10kbps增加一倍码率后，最终码率达到16kbps=10+6。</p></li>
</ul></td>
</tr>
<tr class="even">
<td><p>videoRecvFullScreen</p></td>
<td><p>bool</p></td>
<td><p>影响本端视频请求分辨率，默认设置为true</p>
<dl>
<dt>假设条件</dt>
<dd><ul>
<li><ol>
<li><p>本端默认请求是640*360的分辨率</p></li>
</ol></li>
<li><ol start="2">
<li><p>本端屏幕分辨率为360*360</p></li>
</ol></li>
<li><p>true：请求分辨率则会被调整为360*360</p></li>
<li><p>false: 请求还是以640*360进行请求</p></li>
</ul>
</dd>
</dl></td>
</tr>
<tr class="odd">
<td><p>videoSmallNalu</p></td>
<td><p>bool</p></td>
<td><p>视频数据以SmallNalu方式打包, 一个包打包的数据多，减少包头的码率，从而降低功耗</p></td>
</tr>
<tr class="even">
<td><p>videoResolutionControl</p></td>
<td><p>bool</p></td>
<td><p>分辨率控制, 开启则分辨率随网络波动而变化, 关闭则固定分辨率</p></td>
</tr>
</tbody>
</table>

其中，AecMode 有以下值:

``````java
// 声学回声消除。支持在免提状态下的通话，对于iOS和Windows等性能较好的机型有效。
public static final int AEC_MODE_AEC = MtcCallDb.EN_MTC_EC_AEC;
// 使用操作系统提供的声学回声消除功能，支持在免提状态下的通话。对于多数iOS和Android等品牌手机有效，但部分机型可能无效。
public static final int AEC_MODE_OS = MtcCallDb.EN_MTC_EC_OS;
// 声学回声抑制，通过半双工方式实现回声抑制，通常不建议使用。
public static final int AEC_MODE_AES = MtcCallDb.EN_MTC_EC_AES;
// 软件自适应声学回声消除，对于大多数所有机型有效。但计算量比AEC稍大一些。SDE追踪延迟精度高，FDE能适应更大的延迟。
public static final int AEC_MODE_FDE = MtcCallDb.EN_MTC_EC_AEC_FDE;
// 软件自适应声学回声消除，对于大多数所有机型有效。但计算量比AEC稍大一些。SDE追踪延迟精度高，FDE能适应更大的延迟。
public static final int AEC_MODE_SDE = MtcCallDb.EN_MTC_EC_AEC_SDE;
``````

开发者可根据具体的需求自行配置。

示例代码:

``````java
//音频参数
JCCall.MediaConfig mediaConfig = JCCall.MediaConfig.generateByMode(JCCall.MediaConfig.MODE_INTELLINGENT_HARDWARE_LARGE);
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

//视频参数
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

JCManager.getInstance().call.updateMediaConfig(mediaConfig);
``````

## 待机功耗优化方案

### 前提条件

手表已经注册假 push。

### 流程描述

1. 手机呼叫手表，同时通过自身的推送通道下发通知到手表端。

2. 手表端收到通知后，初始化菊风模块并进行登录。

3. 登录成功后，等待服务器呼入。

4. 收到呼入并接听。

5. 通话结束。

6. 销毁菊风模块。

::: tip

1.手机端需要有超时机制来保证在对端收不到来电时能够及时挂掉。

2.手表端收到通知后去登录，登录成功后可能收不到来电，原因是手机端在手表尚未登录前就挂断，此时该通话已变为手表的未接来电，从而不会走呼入流程。

3.注册假 push 后，不需要调用 logout 进行登出，直接销毁菊风模块即可，否则 push 会无效。

:::

### 主叫方

1. 调用菊风接口呼叫被叫方(手表)；

2. 手表厂商通过自己 push 唤起手表。

### 被叫方

被叫方(手表)进行以下操作：

1. 增加创建 JCPush 模块:

    ``````java
    JCPush push = JCPush.create(client);
    ``````

2. 登录成功后向服务器注册个假的push，主要是让服务器认为此用户不是离线状态，这样主叫呼叫就不会被服务器直接拒绝:

    ``````java
    JCPushTemplate pushInfo = new JCPushTemplate();
    pushInfo.initWithMiPush(context.getPackageName(), "随意输入");
    JCManager.getInstance().push.addPushInfo(pushInfo);
    pushInfo.initWithCall(JCPushTemplate.XIAOMI, JCManager.getInstance().client.getUserId(), "呼叫", "0");
    JCManager.getInstance().push.addPushInfo(pushInfo);
    //设置模式，登录成功后、呼叫前或者收到来电前都可以设置
    JCManager.shared.call.mediaConfig = JCCall.MediaConfig.generateByMode(JCCall.MediaConfig.MODE_INTELLINGENT_HARDWARE_SMALL);
    ``````

3. 手表收到厂家自身 push 后调起菊风模块进行初始化、登录等操作，登录成功后就会收到来电；

4. 通话结束后可以 destroy 菊风的模块。
