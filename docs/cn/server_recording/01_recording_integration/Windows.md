---
title:  服务器音视频录制集成




---

# 服务器音视频录制集成

集成服务器音视频录制功能前，请确保您已经集成了基础的多方音视频通话功能。

## 设置录制参数

服务器音频视频录制将录制的文件保存在七牛云上，因此，需要在七牛云注册账号并获取 AccessKey、SecretKey、BucketName、fileKey。

AccessKey、SecretKey、BucketName、fileKey 获取之后，利用 JCMediaChannelRecordParam 对象中的 buildQiniuRecordParam 方法构造七牛录制参数

```csharp
/// <summary>
/// 七牛录制参数构造
/// </summary>
/// <param name="video">是否是视频录制</param>
/// <param name="bucketName">七牛云 bucketName</param>
/// <param name="secretKey">七牛云 secretKey</param>
/// <param name="accessKey">七牛云 accessKey</param>
/// <param name="fileName">录制文件名</param>
/// <returns>录制参数字符串</returns>
public static string buildQiniuRecordParam(bool video, string bucketName, string secretKey, string accessKey, string fileName)
```

录制参数构造之后，在加入频道之前 通过 JCMediaChannelJoinParam 对象中的 JCMediaChannelRecordParam 对象传入录制参数。

其中，JCMediaChannelRecordParam 对象有以下属性

```csharp
/// <summary>
/// 录制字符串参数 buildQiniuRecordParam
/// </summary>
public string recordString;
```

示例代码

```csharp
// 设置录制参数
JCMediaChannel.JoinParam joinParam = new JCMediaChannel.JoinParam();
joinParam.record = new JCMediaChannel.RecordParam();
joinParam.record.recordString = JCMediaChannel.RecordParam.buildQiniuRecordParam(
        true,
        "输入bucketName",
        "输入secretKey",
        "输入accessKey",
        "输入filename"
);
// 加入频道
mediaChannel.join("channelId", joinParam);
```

::: tip

如果进行音频录制，需要将构造方法中的 video 值设为 false。

:::

## 获取录制状态

录制参数设置好后，需要根据目前的录制状态来判断是否启音视频录制。其中录制状态可通过 recordState 属性获得。

录制状态（JCMediaChannelRecordState）有以下几种

```csharp
/// <summary>
/// 无法进行视频录制
/// </summary>
None,
/// <summary>
/// 可以开启视频录制
/// </summary>
Ready,
/// <summary>
/// 视频录制中
/// </summary>
Running
```

录制状态的变化通过 onMediaChannelPropertyChange 回调上报

```csharp
/// <summary>
/// 属性变化回调，目前主要关注屏幕共享和窗口共享状态的更新
/// </summary>
void onMediaChannelPropertyChange(JCMediaChannel.PropChangeParam propChangeParam);
```

## 开启或关闭音视频录制

录制状态获取后，即可根据录制状态调用下面的接口开启或关闭音视频录制

```csharp
/// <summary>
/// 开关视频录制，内部根据当前状态决定是否开启
/// </summary>
/// <param name="enable">是否开启屏幕录制</param>
/// <param name="recordParam">recordParam 录制参数，当 enable 为 true 时，可以更改由 join 时传入的录制参数，不需更改则填 null</param>
/// <returns>返回true表示调用成功，false表示调用失败</returns>
public bool enableRecord(bool enable, RecordParam recordParam)
```

::: tip

recordParam 录制参数，当 enable 为 true 时，可以更改由 join 时传入的录制参数，不需更改则填 nil。

:::

示例代码

```csharp
public void onMediaChannelPropertyChange(JCMediaChannel.PropChangeParam propChangeParam) {
    if (changeParam.recordState) { // 录制状态变化 {
        // 根据音视频录制状态判断是否开启音视频录制
        if (mediaChannel.recordState == JCMediaChannelRecordState.None) {
            // 无法进行音视频录制
        } else if (mediaChannel.recordState == JCMediaChannelRecordState.Ready) {
            // 可以开启音视频录制
            mediaChannel.enableRecord(true, null, null);
        } else if (mediaChannel.recordState == JCMediaChannelRecordState.Running) {
            // 音视频录制中，可以关闭音视频录制
            mediaChannel.enableRecord(false, null, null);
        }
    }
}
```

