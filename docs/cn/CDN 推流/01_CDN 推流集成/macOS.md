---
title:  CDN 推流集成



---

# CDN 推流集成

集成 CDN 推流功能前，请确保您已经集成了基础的多方音视频通话功能。

CDN 推流服务适用于各类音视频直播场景，如企业级音视频会议、赛事、游戏直播、在线教育、娱乐直播等。

CDN 推流集成简单高效，开发者只需调用相关 API 即可将 CDN 推流无缝对接到自己的业务应用中。

## 设置推流地址

如要开启 CDN 推流，需在 加入频道前 进行 CDN 推流地址的设置。推流地址是将音视频流数据推送到的地址，用户通过输入该地址就可以在线观看。推流地址的设置具体为通过 JCMediaChannelJoinParam 对象中的 cdn 属性进行设置。

示例代码

```objective-c
// 设置 CDN 推流地址
JCMediaChannelJoinParam *joinParam = [[JCMediaChannelJoinParam alloc] init];
joinParam.cdn = @"推流地址";
// 加入频道
[mediaChannel join:@"channelId" joinParam:joinParam];
```

## 获取 CDN 推流状态

开启 CDN 推流前需要判断 CDN 的状态，通过 JCMediaChannel 类的 cdnState 属性获取推流器状态。只有 CDN 当前状态不为 JCMediaChannelCdnStateNone 时才可以进行 CDN 推流。其中，CDN 推流状态有以下几种

```objective-c
/// 无法进行CDN推流
JCMediaChannelCdnStateNone,
/// 可以开启CDN推流
JCMediaChannelCdnStateReady,
/// CDN推流中
JCMediaChannelCdnStateRunning,
```

当 CDN 状态发生改变时，会触发 onMediaChannelPropertyChange 回调

```objective-c
/**
 *  @brief 属性变化回调，目前主要关注屏幕共享状态的更新
 *  @param changeParam 变化标识集合
 */
-(void)onMediaChannelPropertyChange:(JCMediaChannelPropChangeParam *)changeParam;
```

## 开启或关闭 CDN 推流

CDN 状态获取后，即可根据 CDN 的状态开启或关闭 CDN 推流，接口如下

```objective-c
/**
 *  @brief              开关Cdn推流
 *  @param enable       是否开启Cdn推流
 *  @param keyInterval  推流关键帧间隔(毫秒)，当 enable 为 true 时有效，-1表示使用默认值(5000毫秒)，有效值需要>=1000
 *  @return             返回 true 表示正常执行调用流程，false 表示调用异常
 *  @warning 在收到 onMediaChannelPropertyChange 回调后检查是否开启
 */
-(bool)enableCdn:(bool)enable keyInterval:(int)keyInterval;
```

示例代码

```objective-c
-(void)onMediaChannelPropertyChange:(JCMediaChannelPropChangeParam *)changeParam {
    if (changeParam.cdnState) {  // CDN 状态变化
       JCMediaChannelCdnState cdnState =  mediaChannel.cdnState;
        // 根据CDN推流状态判断是否开启推流
        if (cdnState == JCMediaChannelCdnStateNone) {
            // 无法使用 CDN 推流
        } else if (cdnState == JCMediaChannelCdnStateReady) {
            // 可以开启 CDN 推流
            [mediaChannel enableCdn:true keyInterval:0];
        } else if (cdnState == JCMediaChannelCdnStateRunning) {
            // CDN 推流中，可以关闭 CDN 推流
            [mediaChannel enableCdn:false keyInterval:0];
        }
    }
}
```

