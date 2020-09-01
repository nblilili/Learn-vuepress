---
title: Audio Management
---
# Audio Management

## Audio Data Management

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
    ZmfAudio.inputAddCallback before initiating business, and implement
    a callback function of ZmfAudio.InputCallback in this function.

2. After successful registration, the JC SDK will return to the
    corresponding parameters of the original audio data collected
    through the callback function when the audio data is captured.

3. After the user obtains the audio data, he/she will process
    parameters in the callback function according to the needs of the
    scenario, and the processed data is returned to the JC SDK through
    the callback function.

Register the audio input callback at first:

``````java
/**
 * Add audio input data callback
 *
 * @param[in] callback      the callback user data
 *
 * @return                  void.
 */
ZmfAudio.inputAddCallback(ZmfAudio.InputCallback var0);
``````

Callback type description:

``````java
/** The callback to receive audio input data
 * @param[in] inputId         unique name of the audio input
 * @param[in] iSampleRateHz   the sample rate of the pcm data
 * @param[in] iChannels       the channel number of the pcm data
 * @param[in] data             the pcm data
 * @param[in] playDelayMS      the play delay ms
 * @param[in] recDelayMS       the record dely ms
 * @param[in] clockDrift       the clock drift ms
 * @return                     void
 */
public interface InputCallback
{
    void onAudioInputFrame(String inputId, int sampleRateHz, int iChannels, ByteBuffer data, int playDelayMS, int recDelayMS, int clockDrift);
}
``````

Sample code:

``````java
public void onAudioInputFrame(String inputId, int sampleRateHz, int iChannels, ByteBuffer data, int playDelayMS, int recDelayMS, int clockDrift) {
    System.out.println("process captured audio data processing");
}
public void call() {
    //Register callback
    ZmfAudio.inputAddCallback(onAudioInputFrame);
    //Initiate a call
    call.call("peer number", true, "custom pass-through string");
}
``````

After the callback registration, you can process audio data when audio
data is collected.

If you want to remove the callback, call the following interface:

``````java
/**
 * Remove input audio data callback
 *
 * @param[in]  callback      the callback user data
 *
 * @return                  void.
 */
ZmfAudio.inputRemoveCallback(ZmfAudio.InputCallback var0);
``````

Sample code:

``````java
public void endCall() {
    //Remove the callback
    ZmfAudio.inputRemoveCallback(onAudioInputFrame);
    JCCallItem item = call.getCallItems().get(0);
    // Hang up the call
    call.term(item, JCCall.REASON_NONE, "hang up by yourself");
}
``````

- Process after decoding and before playback

Refer to the following steps to implement the original audio data
function in your project:

1. Register the audio output callback through
    ZmfAudio.outputAddCallback before initiating business, and implement
    a callback function of ZmfAudio.OutputCallback in this function.

2. After successful registration, the JC SDK will return to the
    corresponding parameters of the original audio data collected
    through the callback function when the audio data is captured.

3. After the user obtains the audio data, he/she processes parameters
    in the callback function according to the needs of the scenrio, and
    the processed data is returned to the JC SDK through the callback
    function.

Register the audio output callback at first:

``````java
/**
 * add audio output data callback
 *
 * @param[in] callback      the callback user data
 *
 * @return                  >= 0 on succeed is handle, otherwise failed.
 */
ZmfAudio.outputAddCallback(ZmfAudio.OutputCallback var0);
``````

Callback type description:

``````java
/**
 * The callback to receive audio output data
 *
 * @param[in] captureId       audio output unique name
 * @param[in] iSampleRateHz   the sample rate of the pcm data
 * @param[in] iChannels       the channel number of the pcm data
 * @param[in] data            the pcm data
 *
 * @return                    void
 */
public interface OutputCallback
{
    void onAudioOutputFrame(String outputId, int sampleRateHz, int iChannels, ByteBuffer data);
}
``````

After the callback registration, you can process the corresponding audio
data when receive the decoded audio data.

Sample code:

``````java
public void void onAudioOutputFrame(String outputId, int sampleRateHz, int iChannels, ByteBuffer data) {
    System.out.println("process data after audio decoding");
}
public void call() {
    //Register the callback
    ZmfAudio.outputAddCallback(onAudioOutputFrame);
    //Initiate a call
    call.call("peer number", true, "custom pass-through string");
}
``````

If you want to remove the callback, call the following interface:

``````java
/**
 * remove output audio data callback
 *
 * @param[in] callback      the callback user data
 *
 * @return                  void.
 */
ZmfAudio.outputRemoveCallback(ZmfAudio.OutputCallback var0)
``````

Sample code:

``````java
public void endCall() {
    //Remove the callback
    ZmfAudio.outputRemoveCallback(onAudioOutputFrame);
    JCCallItem item = call.getCallItems().get(0);
    //Hang up the call
    call.term(item, JCCall.REASON_NONE, "hang up by yourself");
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

The custom audio capture interface is as follows (call after receiving
login success callback):

If you need to use your own audio and video device and
Zmf\_AudioInitialize is initialized successfully, operate the audio
device in the following callback function;

The interface of collecting input data:

``````java
/**
 * The audio input data entry to ZMF
 *
 * @param[in] inputId       unique name of the audio input                       //Input device id
 * @param[in] sampleRateHz  the sample rating of the pcm data                    //value range: 8000, 16000, 32000, 44100 and 48000 depends on the external device)
 * @param[in] iChannels     the channel number of the pcm data                   //value range: 1 or 2
 * @param[in] data          the pcm data                                         //External collection data source
 * @param[in] playDelayMS   playout delay in ms                                  // Usually 0
 * @param[in] recDelayMS    record delay in ms                                   // Usually 0
 * @param[in] clockDrift    clock drift between playout and record timestamp //usually 0
 *
 */
static public void onInput (String inputId, int sampleRateHz, int iChannels, ByteBuffer data,
                                                     int playDelayMS, int recDelayMS, int clockDrift)
``````

::: tip

This interface is to input the audio data collected by yourself to the
JC SDK.

:::

Sample code:

``````java
//Initialize the audio device
android.content.Context activity;
ZmfAudio.initialize(activity);
public void call() {
    // Input the pcm data fragment with length of 'length', sampling frequency of 16000, and channel number of 1("Test",16000,1,pcmdata,length,0,0,0,0);
    onInput("Test",16000,1,pcmdata,length,0,0,0,0);
    //Initiate a call
    call.call("peer number", true, "custom pass-through string");
}
``````

The interface of stopping collection:

``````java
/**
 * Tell ZMF the audio input has stopped
 *
 * @param[in] inputId       unique name of the device              ////Output device id
 */
static public void onInputDidStop(String inputId)
``````

Sample code:

``````java
public void endCall() {
    //Stop collection
    onInputDidStop("Test");
    //Hang up the call
    call.term(item, JCCall.REASON_NONE, "hang up by yourself");
}
``````

If you want to use custom playback data at the audio output, call the
following interface:

The interface of playing input data:

``````java
**
 * The outlet which audio output can get data from.
 *
 * @param[in] outputId      unique name of the audio output       //Output device id
 * @param[in] sampleRateHz  the sample rating of the pcm data     //value range: 8000, 16000, 32000, 44100 and 48000 depends on the external device)
 * @param[in] iChannels     the channel number of the pcm data    //value range: 1 or 2
 * @param[in] data          the pcm data to be filled             //External collection data source
 */
static public void onOutput (String outputId, int sampleRateHz, int iChannels, ByteBuffer data);
``````

::: tip

This interface is to input custom audio output data to JC SDK.

:::

Sample code:

``````java
//Initialize the audio device
android.content.Context activity;
ZmfAudio.initialize(activity);
public void call() {
    // Input the pcm data fragment with length of 'length', sampling frequency of 16000, and channel number of 1("Test",16000,1,pcmdata,length,0,0,0,0);
    onOutput("Test",16000,1,buf,length);
    //Initiate a call
    call.call("peer number", true, "custom pass-through string");
}
``````

The interface to stop outputting data:

``````java
/**
 * tell ZMF the audio output has stopped
 *
 * @param[in] outputId       unique name of the device         //Output device id
 */
static public void onOutputDidStop(String outputId)
``````

::: tip

In custom audio collection scenarios, developers need to manage the
collection of audio data by themselves. In a custom audio rendering
scene, developers need to manage the playback of audio data themselves.

:::

Sample code:

``````java
public void endCall() {
    //Stop playing data, which can be called during or at the end of business
    onOutputDidStop("Test");
    //Hang up the call
    call.term(item, JCCall.REASON_NONE, "hang up by yourself");
}
``````

-----

## Audio Device Management

Audio device management mainly uses the methods in the JCMediaDevice
class, as follows:

### Get audio route type

``````java
/**
 * Audio route type
 *
 * @return Audio route type
 */
public abstract int getAudioRouteType();
``````

The audio output type (AudioRouteType) has the following:

``````java
/** handset  */
public static final int AUDIO_ROUTE_RECEIVER = 0;
/** speaker  */
public static final int AUDIO_ROUTE_SPEAKER = 1;
/** Wired headset */
public static final int AUDIO_ROUTE_HEADSET = 2;
/** Bluetooth earphone */
public static final int AUDIO_ROUTE_BLUETOOTH = 3;
``````

### Turn on/off the speaker

``````java
/**
 * Turn on/off the speaker
 *
 * @param enable Turn on/off
 */
public abstract void enableSpeaker(boolean enable);
``````

### Turn on/off audio devices

``````java
/**
 * Start audio (generally need to call this interface before starting a call)
 *
 * @return return true/false
 */
public abstract boolean startAudio();

/**
 * Stop audio (usually be called at the end of the call)
 *
 * @return return true/false
 */
public abstract boolean stopAudio();
``````

Sample code:

``````java
// Turn on the speaker
mediaDevice.enableSpeaker(true);
// Turn on the audio device
mediaDevice.startAudio();
// Turn off the audio device
mediaDevice.stopAudio();
``````
