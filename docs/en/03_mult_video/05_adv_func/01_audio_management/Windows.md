---
title: Audio Management
---
# Audio Management

## Audio device management

Current audio input and output devices
\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>\>:

``````csharp
/// <summary>
/// Current input device
/// </summary>
public JCMediaDeviceAudio audioInput

/// <summary>
/// Current output device
/// </summary>
public JCMediaDeviceAudio audioOutput
``````

### Audio device management

``````csharp
/// <summary>
/// Audio input device list
/// </summary>
public List<JCMediaDeviceAudio> audioInputs
``````

Among them, JCMediaDeviceAudio has the following variables:

``````csharp
/// <summary>
/// Name
/// </summary>
public string audioName
/// <summary>
/// ID
/// </summary>
public string audioId
``````

### Get a list of audio output devices

``````csharp
/// <summary>
/// Audio output device list
/// </summary>
public List<JCMediaDeviceAudio> audioOutputs
``````

Among them, JCMediaDeviceAudio has the following variables:

``````csharp
/// <summary>
/// Name
/// </summary>
public string audioName
/// <summary>
/// ID
/// </summary>
public string audioId
``````

Sample code:

``````csharp
// Audio device management
List<JCMediaDeviceAudio> audioInputDevices = mediaDevice.audioInputs;

// Get a list of audio output devices
List<JCMediaDeviceAudio> audioOutputDevices = mediaDevice.audioOutputs;
``````

### Turn on/off audio device

``````csharp
/// <summary>
/// Start audio (generally need to call this interface before officially starting a call)
///</summary>
///<returns>true/false</returns>
public bool startAudio()

/// <summary>
/// Stop audio (usually called at the end of the call)
/// </summary>
/// <returns>true/false</returns>
public bool stopAudio()
``````

### Get the current audio output level

``````csharp
/// <summary>
/// Get the current output leve
/// </summary>
/// <returns>Audio output level</returns>
public int getSpkLevel()
``````

Sample code:

``````csharp
// Turn on audio
mediaDevice.startAudio();

// Turn off audio
mediaDevice.stopAudio();

// Get the current output level
int level = mediaDevice.getSpkLevel();
``````
