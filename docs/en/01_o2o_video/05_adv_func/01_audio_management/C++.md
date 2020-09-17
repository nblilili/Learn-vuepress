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
    a callback function of type ZmfAudioInputCallback in this function.

2. After successful registration, the JC SDK will return to the
    corresponding parameters of the original audio data collected
    through the callback function when the audio data is captured.

3. After the user obtains the audio data, he/she will processes
    parameters in the callback function according to the needs of the
    scenrio, and the processed data is returned to the JC SDK through
    the callback function.

Register the audio input callback at first:

``````cpp
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

``````cpp
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

After the callback registration, the audio data can be processed when
audio data is collected.

Sample code:

``````cpp
static void zmfAudioInputCallback(void* pUser, const char* inputId, int iSampleRateHz, int iChannels,
                                   unsigned char *buf, int len, int *micLevel,
                                   int playDelayMS, int recDelayMS, int clockDrift) {

    cout << "process audio data" << endl;
}
void JCSampleDlg::OnBnClickedButtonCall()
{
    //Register callback
    Zmf_AudioInputAddCallback(void*pUser, zmfAudioInputCallback);
    //Initiate a call
    ...
}
``````

If you want to remove the callback, call the following interface:

``````cpp
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

``````cpp
void JCSampleDlg::OnBnClickedButtonEndCall()
{
    //Remove the callback
    Zmf_AudioInputRemoveCallback(p);
    //Hang up the call
    ...
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

``````cpp
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

``````cpp
static void zmfAudioOutputCallback(void* pUser, const char* outputId, int iSampleRateHz, int iChannels,
                                     unsigned char *buf, int len) {

    cout << "process audio data" << endl;
}
void JCSampleDlg::OnBnClickedButtonCall()
{
    //Register callback
    Zmf_AudioOutputAddCallback(void*pUser, zmfAudioOutputCallback);
    //Initiate a call
    ...
}
``````

If you want to remove the callback, call the following interface:

``````cpp
/**
 * remove fill speak callback
 *
 * @param[in]  pUser        the callback user data
 *
 * @return                  0 on succeed, otherwise failed.
 */
int  Zmf_AudioOutputRemoveCallback  (void *pUser);
``````

Remove callback:

``````cpp
void JCSampleDlg::OnBnClickedButtonEndCall()
{
    //Remove the callback
    Zmf_AudioOutputRemoveCallback(p);
    //Hang up the call
    ...
}
``````


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
receiving a login success callback):

If you need to use your own audio and video device and
Zmf\_AudioInitialize is initialized successfully, operate the audio
device in the following callback function;

The interface of audio device initialization:

``````cpp
/**
 * @brief Initialize Audio module of ZMF(Zero Media Framework).
 * @param  applicationContext For Windows, it can be the handle of the window,
 *                            The notification event will be sent to that window.
 *                            Or it can be callback function of type ZmfEventListenCallback.
 *                            For Android, it must be the Context.
 *                            For iOS, it should be NULL and is ignored.
 * @return                    0 on succeed, otherwise failed.
 */
int Zmf_AudioInitialize(void *applicationContext);
``````

The interface of collecting input data:

``````cpp
/**
    * The audio input data entry to ZMF, each callback will obtain the data.
    * Multiple data will mix in the callback of the jssmme Engine,
    * and the first input will be main channel.
    *
    * @param[in] inputId       unique name of the audio input       //Input device id
    * @param[in] sampleRateHz  the sample rating of the pcm data    //value range: 8000, 16000, 32000, 44100, 48000 depends on the samplimg rate of the external playback device
    * @param[in] iChannels     the channel number of the pcm data   //Value range: 1 or 2
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

``````cpp
//Initialize the audio device
Zmf_AudioInitialize(NULL);
void JCSampleDlg::OnBnClickedButtonCall()
{
    // Input the pcm data fragment with length of 'length', sampling frequency of 16000, and channel number of 1
    Zmf_OnAudioInput("Test",16000,1,pcmdata,length,0,0,0,0);
    //Initiate the call
    ...
}
``````

::: tip

This interface is to input the audio data collected by yourself to the
JC SDK.

:::

The interface of stopping collection:

``````cpp
/**
 * Tell ZMF the audio input has stopped
 *
 * @param[in] inputId       unique name of the device  //Input device id
 */
void Zmf_OnAudioInputDidStop(const char *inputId);
``````

Sample code:

``````cpp
void JCSampleDlg::OnBnClickedButtonEndCall()
{
    //Stop collection
    Zmf_OnAudioInputDidStop("Test");
    //Hang up the call
    ...
}
``````

If you want to use custom playback data at the audio output, call the
following interface:

The interface of playing input data:

``````cpp
/**
 * The outlet which audio output can get data from.
 *
 * @param[in] outputId      unique name of the audio output       ////Output device id
 * @param[in] sampleRateHz  the sample rating of the pcm data     //value range: 8000,
 * @param[in] iChannels     the channel number of the pcm data    //value range: 1 or 2
 * @param[in] buf           the pcm data to be filled             //the data source of the external collection
 * @param[in] len           the pcm data length                   //the buf length of the corresponding data
 */
 void Zmf_OnAudioOutput (const char *outputId, int sampleRateHz, int iChannels, unsigned char *buf, int len);
``````

Sample code:

``````cpp
//Initialize the audio device
Zmf_AudioInitialize(NULL);
void JCSampleDlg::OnBnClickedButtonCall()
{
    // Input the pcm data fragment with length of 'length', sampling frequency of 16000, and channel number of 1
 onInput("Test",16000,1,pcmdata,length,0,0,0,0);
    Zmf_OnAudioOutput("Test",16000,1,buf,length);
    //Initiate a call
    ...
}
``````

::: tip

This interface is to input custom audio output data to JC SDK.

:::

The interface to stop outputting data:

``````cpp
/**
 * tell ZMF the audio output has stopped
 *
 * @param[in] outputId      unique name of the device    ////Output device id
 */
void Zmf_OnAudioOutputDidStop(const char *outputId);
``````

Sample code:

``````cpp
void JCSampleDlg::OnBnClickedButtonEndCall()
{
    //Stop playing data
    Zmf_OnAudioOutputDidStop("Test");
    //Hang up the call
    ...
}
``````

::: tip

In custom audio collection scenarios, developers need to manage the
collection of audio data by themselves. In a custom audio rendering
scene, developers need to manage the playback of audio data themselves.

:::

## Audio Device Management

Audio device management mainly uses the methods in the JCMediaDevice
class, including obtaining audio input, a list of output devices, and
turning on/off audio devices.

### Audio device management

Call
[getAudioInputs](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#ab177fc54d666d727ece18588268fd203)
interface to access the list of audio input devices.

``````cpp
std::list<JCMediaDeviceAudio>* audios = JCManager::shared()->mediaDevice->getAudioInputs();
``````

### Get a list of audio output devices

Call
[getAudioOutputs](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a72ba20f63202cbc61bf2cfc8170045b3)
interface to get a list of audio output devices.

``````cpp
std::list<JCMediaDeviceAudio>* audios = JCManager::shared()->mediaDevice->getAudioOutputs();
``````

### Turn on/off audio devices

Call the
[startAudio](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a3e5dbd693aa7d245377e78cb78902018)
interface to turn on the audio device.

``````cpp
JCManager::shared()->mediaDevice->startAudio();
``````

Call
[stopAudio](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_media_device.html#a007283dc73188577ae32b50849d3d3fd)
interface to turn off the audio device.

``````cpp
JCManager::shared()->mediaDevice->stopAudio();
``````
