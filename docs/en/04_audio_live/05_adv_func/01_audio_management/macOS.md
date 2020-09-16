---
title: Audio Management
---
# Audio Management

## Audio data management

### Raw audio data

During the audio transmission process, the collected audio data can be
processed to obtain different playback effects. There are two
circumstances for processing.

1. Process after audio collection and before encoding;

2. Process after decoding and before playback when the transmission is
    completed.

Details are as follows:

- Process after audio collection and before encoding

Refer to the following steps to implement the original audio data
function in your project:

1. Register the audio collection callback through
    Zmf\_AudioInputAddCallback before initiating business, and implement
    a callback function of type ZmfAudioInputCallback in this function

2. After successful registration, the JC SDK will return to the
    corresponding parameters of the original audio data collected
    through the callback function when the audio data is captured

3. After the user obtains the audio data, he/she will process
    parameters in the callback function according to the needs of the
    scenrio, and the processed data is returned to the JC SDK through
    the callback function.

Register the audio input callback at first:

``````objectivec
/**
 * add mic data callback
 *
 * @param[in] pUser         the callback user data
 * @param[in] pfnCb         the callback
 *
 * @return                  0 on succeed, otherwise failed.
 */
int Zmf_AudioInputAddCallback(void *pUser, ZmfAudioInputCallback pfnCb);
``````

Callback type description:

``````objectivec
/** The callback to receive audio input data
 *
 * @param[in] pUser  the user data registered by Zmf_AddAudioInputCallback
 * @param[in] inputId       unique name of the audio input
 * @param[in] iSampleRateHz  the sample rating of the pcm data
 * @param[in] iChannels     the channel number of the pcm data
 * @param[in] buf           the pcm data
 * @param[in] len           the pcm data length
 * @param[in,out] micLevel
 * @param[in] playDelayMS   the play delay ms
 * @param[in] recDelayMS    the record dely ms
 * @param[in] clockDrift    the clock drift ms
 */
typedef void (*ZmfAudioInputCallback)(void* pUser, const char* inputId, int iSampleRateHz, int iChannels,
                                   unsigned char *buf, int len, int *micLevel,
                                   int playDelayMS, int recDelayMS, int clockDrift);
``````

After the callback registration, you can process the audio data when
audio data is collected.

Sample code:

``````objectivec
id data; //Collected audio data object
void* p = (__bridge void *)data;
static void zmfAudioInputCallback(void* pUser, const char* inputId, int iSampleRateHz, int iChannels,
                                   unsigned char *buf, int len, int *micLevel,
                                   int playDelayMS, int recDelayMS, int clockDrift) {

    NSLog(@"process audio data");
}
- (void)call {
    //Register callback
    Zmf_AudioInputAddCallback(p, zmfAudioInputCallback);
    //Initiate a call
    [call call:@"Peer number" video:true extraParam:@"custom pass-through string"];
}
``````

If you want to remove the callback, call the following interface:

``````objectivec
/**
 * remove mic data callback
 *
 * @param[in]  pUser        the callback user data
 *
 * @return                  0 on succeed, otherwise failed.
 */
int Zmf_AudioInputRemoveCallback(void *pUser);
``````

Sample code:

``````objectivec
id data; //Collected audio data object
void* p = (__bridge void *)data;
-(void)endCall {
    //Remove the callback
    Zmf_AudioInputRemoveCallback(p);
    //Hang up the call
    [call term:item reason:JCCallReasonNone description:@"hang up by yourself"];
}
``````

- Process after decoding and before playback

Refer to the following steps to implement the original audio data
processing function in your project:

1. Register the audio output callback through
    Zmf\_AudioOutputAddCallback before initiating business, and
    implement a callback function of type ZmfAudioOutputCallback in this
    function.

2. After successful registration, the JC SDK will return to the
    collected original audio data through the callback function when the
    audio data is captured.

3. After the user gets the audio data, he/she will process the audio
    data in the callback function according to the needs of the
    scenario. The processed data is returned to the JC SDK through the
    callback function.

<!-- end list -->

- Register the audio output callback at first::

  - /\*\*

    - add fill speak callback

    -
    - @param\[in\] pUser the callback user data

    -
    - @return 0 on succeed, otherwise failed.

        [<span id="id2" class="problematic">\*</span>](#id1)/

    int Zmf\_AudioOutputAddCallback (void
    [<span id="id4" class="problematic">\*</span>](#id3)pUser,
    ZmfAudioOutputCallback pfnCb);

Callback type description:

``````objectivec
/** the callback to get audio output buffer, when Zmf_OnAudioOutput() invoked.
 *
 * @param[in] pUser          the callback user data
 * @param[in] outputId       unique name of the audio output
 * @param[in] iSampleRateHz  the sample rating of the pcm data
 * @param[in] iChannels      the channel number of the pcm data
 * @param[in] buf            the pcm data
 * @param[in] len            the pcm data length
 */

/** the callback to fill audio output buffer
 * @param[in] pUser  the user data registered by Zmf_AudioOutputAddCallback
 */
typedef int  (*ZmfAudioOutputCallback)(void* pUser, const char* outputId, int iSampleRateHz, int iChannels,
                                     unsigned char *buf, int len);
``````

After the callback registration, you can process the corresponding audio
data when receive the decoded audio data.

Sample code:

``````objectivec
static void zmfAudioOutputCallback(void* pUser, const char* outputId, int iSampleRateHz, int iChannels,
                                     unsigned char *buf, int len) {

    NSLog(@"process audio data");
}
id data; //Decoded audio data
void* p = (__bridge void *)data;
- (void)call {
    //Register callback
    Zmf_AudioOutputAddCallback(p, zmfAudioOutputCallback);
    //Initiate business
    [call call:@"Peer number" video:true extraParam:@"custom pass-through string"];
}
``````

If you want to remove the callback, call the following interface:

``````objectivec
/**
 * remove fill speak callback
 *
 * @param[in]  pUser        the callback user data
 *
 * @return                  0 on succeed, otherwise failed.
 */
int  Zmf_AudioOutputRemoveCallback  (void *pUser);
``````

Unregister callback:

``````objectivec
id data; //Decoded audio data
void* p = (__bridge void *)data;
- (void)endCall {
    //Initiate business
    Zmf_AudioOutputRemoveCallback(p);
    //Hang up the call
    [call term:item reason:JCCallReasonNone description:@"hang up by yourself"];
}
``````

-----

### Custom audio capture and rendering

During the real-time audio transmission, the JC SDK will start the
default audio module for audio collection. However, for audio devices
that do not support the system’s standard API, or if you want to use the
audio module you already have for audio collection and pre-transmission
processing, you can start a separate capture/play thread to put the
audio data you collect/need to play into the corresponding interface of
Juphoon to do subsequent operations.

Refer to the following steps to implement the custom audio source
function in your project:

1. Input the playback data collected/customized by the external device
    to the JC SDK through the interface provided by the JC SDK for
    subsequent operations.

2. If you want to stop the input of the playback data
    collected/customized by the external device, you can call the
    interface provided by the JC SDK to stop the data input.

The custom audio collection interface is as follows (be called after
receiving login success callback):

If you need to use your own audio and video equipment and
Zmf\_AudioInitialize is initialized successfully, operate the audio
equipment in the following callback function;

The interface of audio device initialization:

``````objectivec
/**
 * @brief Initialize Audio module of ZMF(Zero Media Framework).
 * @param  applicationContext For Windows, it can be the handle of the window,
 *                            The notification event will be sent to that window.
 *                            Or it can be callback function of type ZmfEventListenCallback.
 *                            For macOS, it must be the Context.
 *                            For iOS, it should be NULL and is ignored.
 * @return                    0 on succeed, otherwise failed.
 */
int Zmf_AudioInitialize(void *applicationContext);
``````

The interface of collecting input data:

``````objectivec
/**
    * The audio input data entry to ZMF, each callback will obtain the data.
    * Multiple data will mix in the callback of the jssmme Engine,
    * and the first input will be main channel.
    *
    * @param[in] inputId       unique name of the audio input       //Input device id
    * @param[in] sampleRateHz  the sample rating of the pcm data    //Value range: 8000, 16000, 32000, 44100 and 48000 depend on the samplimg rate of the external device
    * @param[in] iChannels     the channel number of the pcm data   //value range: 1 or 2
    * @param[in] buf           the pcm data                         //External collection data source
    * @param[in] len           the pcm data length //Corresponding with data length
    * @param[in,out] micLevel                                       //Volume, value range: 0-100, will return the volume value according to the actual input audio
    * @param[in] playDelayMS                                        // Usually 0
    * @param[in] recDelayMS                                         // Usually 0
    * @param[in] clockDrift                                         // Usually 0
    *
    */
    void Zmf_OnAudioInput (const char *inputId, int sampleRateHz, int iChannels, unsigned char *buf, int len, int *micLevel, int playDelayMS, int recDelayMS, int clockDrift);
``````

Sample code:

``````objectivec
//Initialize the audio device
Zmf_AudioInitialize(NULL);
-(void)voiceCall {
    // Input the pcm data fragment with length of 'length', sampling frequency of 16000, and channel number of 1
onInput("Test",16000,1,pcmdata,length,0,0,0,0);
    Zmf_OnAudioInput("Test",16000,1,pcmdata,length,0,0,0,0);
    //Initiate a call
    [call call:@"Peer number" video:true extraParam:@"custom pass-through string"];
}
``````

::: tip

This interface is to input the audio data collected by yourself to the
JC SDK.

:::

The interface of stopping collection:

``````objectivec
/**
 * Tell ZMF the audio input has stopped
 *
 * @param[in] inputId       unique name of the device  //Input device id
 */
void Zmf_OnAudioInputDidStop(const char *inputId);
``````

Sample code:

``````objectivec
-(void)endCall {
    //Stop collection
    Zmf_OnAudioInputDidStop("Test");
    //Hang up the call
    [call term:item reason:JCCallReasonNone description:@"hang up by yourself"];
}
``````

If you want to use custom playback data at the audio output, call the
following interface:

Play data input interface:

``````objectivec
/**
    * The outlet which audio output can get data from.
    *
    * @param[in] outputId      unique name of the audio output       ////Output device id
    * @param[in] sampleRateHz  the sample rating of the pcm data     //Value range: 8000,
    * @param[in] iChannels     the channel number of the pcm data    //Value range: 1 or 2
    * @param[in] buf           the pcm data to be filled             //External collection data source
    * @param[in] len           the pcm data length                   //Corresponding with data length
    */
    void Zmf_OnAudioOutput (const char *outputId, int sampleRateHz, int iChannels, unsigned char *buf, int len);
``````

Sample code:

``````objectivec
//Initialize audio devices
Zmf_AudioInitialize(NULL);
-(void)call {
    // Input the pcm data fragment with length of 'length', sampling frequency of 16000, and channel number of 1
onInput("Test",16000,1,pcmdata,length,0,0,0,0);
    Zmf_OnAudioOutput("Test",16000,1,buf,length);
    //Initiate the call
    [call call:@"Peer number" video:true extraParam:@"custom pass-through string"];
}
``````

::: tip

This interface is to input custom audio output data to JC SDK.

:::

The interface to stop outputting data:

``````objectivec
/**
 * tell ZMF the audio output has stopped
 *
 * @param[in] outputId      unique name of the device    ////Output device id
 */
void Zmf_OnAudioOutputDidStop(const char *outputId);
``````

Sample code:

``````objectivec
-(void)endCall {
    //Stop playing data
    Zmf_OnAudioOutputDidStop("Test");
    //Hang up the call
    [call term:item reason:JCCallReasonNone description:@"hang up by yourself"];
}
``````

::: tip

In custom audio collection scenarios, developers need to manage the
collection of audio data by themselves. In a custom audio rendering
scene, developers need to manage the playback of audio data themselves.

:::

-----

## Audio Device Management

Audio device management mainly uses the methods in the JCMediaDevice
class, as follows:

### Audio device management

Obtain the list of audio input devices and the current audio input
device through the audioInputs attribute and audioInput attribute of the
JCMediaDevice class, and a JCMediaDeviceAudio object will be returned.

``````objectivec
/// A list of audio input devices
NSArray<JCMediaDeviceAudio*>* __nonnull audioInputs;

/// Current audio input device
JCMediaDeviceAudio* __nullable audioInput;
``````

The properties of the JCMediaDeviceAudio object are as follows:

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Type</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Audio device id</p></td>
<td><p>NSString</p></td>
<td><p>audioId</p></td>
</tr>
<tr class="even">
<td><p>Audio device name</p></td>
<td><p>NSString</p></td>
<td><p>audioName</p></td>
</tr>
<tr class="odd">
<td><p>Input or output device</p></td>
<td><p>bool</p></td>
<td><p>input</p></td>
</tr>
</tbody>
</table>

### Get a list of audio output devices

Obtain the audio output device list and the current audio output device
through the audioOutputs attribute and audioOutput attribute of the
JCMediaDevice class:

``````objectivec
/// A list of audio output devices
NSArray<JCMediaDeviceAudio*>* __nonnull audioOutputs;

/// Current audio output device
JCMediaDeviceAudio* __nullable audioOutput;
``````

The properties of the JCMediaDeviceAudio object are as follows:

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Type</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Audio device id</p></td>
<td><p>NSString</p></td>
<td><p>audioId</p></td>
</tr>
<tr class="even">
<td><p>Audio device name</p></td>
<td><p>NSString</p></td>
<td><p>audioName</p></td>
</tr>
<tr class="odd">
<td><p>Input or output device</p></td>
<td><p>bool</p></td>
<td><p>input</p></td>
</tr>
</tbody>
</table>

Sample code:

``````objectivec
// Get a list of audio input devices
NSArray<JCMediaDeviceAudio*>* audioInputDevices = mediaDevice.audioInputs;

// Get a list of audio output devices
NSArray<JCMediaDeviceAudio*>* audioOutputDevices = mediaDevice.audioOutputs;
``````

### Turn on/off audio devices

``````objectivec
/**
 *  @brief Start audio (generally need to call this interface before officially starting a call)
 *  @return return true/ false
 */
-(bool)startAudio;

/**
 *  @brief Stop audio (usually be called at the end of the call)
 *  @return return true/ false
 */
-(bool)stopAudio;
``````

Sample code:

``````objectivec
// Turn on the audio device
[mediaDevice startAudio];
// Turn off the audio device
[mediaDevice stopAudio];
``````
