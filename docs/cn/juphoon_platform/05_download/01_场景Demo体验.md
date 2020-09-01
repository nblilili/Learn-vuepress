---
title:  场景 Demo 体验
---
# 场景 Demo 体验

<template>
    <demo-exp :list="list"/>
</template>

<script>
import DemoExp from '../../../components/DemoExp';
  export default {
    components: {
        DemoExp
    },
    data() {
      return {
      list: [
        {
          img:
            "https://developer.juphoon.com/style/images/document/otovideo/编组 3@2x.png",
          title_img:
            "https://developer.juphoon.com/style/images/document/otovideo/download_juphoonDuo@2x.png",
          title_p: "（菊风云一对一通话）",
          p:
            "多端互通一对一通话，随时随地畅聊，高清面对面视频体验，沟通零距离。",
          web: [
            {
              type: "iOS",
              img:
                "https://developer.juphoon.com/style/images/document/code/JuphoonDuo-ios.png",
            },
            {
              type: "Android",
              img:
                "https://developer.juphoon.com/style/images/document/code/JuphoonDuo-android.png",
            },
          ],
          mobile: [
            {
              type: "iOS",
              url: "https://appadmin.juphoon.com/download.html#JuphoonDuo-ios",
            },
            {
              type: "Android",
              url:
                "https://appadmin.juphoon.com/download.html#JuphoonDuo-android",
            },
          ],
        },
        {
          img:
            "https://developer.juphoon.com/style/images/document/multvideo/编组 6@2x.png",
          title_img:
            "https://developer.juphoon.com/style/images/document/multvideo/download_juphoonRoom@2x.png",
          title_p: "（菊风云多方通话）",
          p:
            "无论是群聊、会议，还是直播，都能轻松使用；一个 API 创建或加入多方通话。",
          web: [
            {
              type: "iOS",
              img:
                "https://developer.juphoon.com/style/images/document/code/JuphoonRoom-ios.png",
            },
            {
              type: "Android",
              img:
                "https://developer.juphoon.com/style/images/document/code/JuphoonRoom-android.png",
            },
            {
              type: "WebRTC",
              url: "https://developer.juphoon.com/webrtc/",
            },
          ],
          mobile: [
            {
              type: "iOS",
              url: "https://appadmin.juphoon.com/download.html#JuphoonRoom-ios",
            },
            {
              type: "Android",
              url:
                "https://appadmin.juphoon.com/download.html#JuphoonRoom-android",
            },
            {
              type: "WebRTC",
              url: "https://developer.juphoon.com/webrtc/",
            },
          ],
        },
        {
          img:
            "https://developer.juphoon.com/style/images/document/audiolive/juphoonLive@2x.png",
          title_img:
            "https://developer.juphoon.com/style/images/document/audiolive/download_juphoonLive@2x.png",
          title_p: "（菊风云互动直播）",
          p:
            "清晰流畅、低延时、高并发的语音视频互动直播，轻松实现主播和观众间的多场景连麦互动。",
          web: [
            {
              type: "iOS",
              img:
                "https://developer.juphoon.com/style/images/document/code/JuphoonLive-ios.png",
            },
            {
              type: "Android",
              img:
                "https://developer.juphoon.com/style/images/document/code/JuphoonLive-android.png",
            }
          ],
          mobile: [
            {
              type: "iOS",
              url: "https://appadmin.juphoon.com/download.html#JuphoonLive-ios",
            },
            {
              type: "Android",
              url:
                "https://appadmin.juphoon.com/download.html#JuphoonLive-android",
            }
          ],
        },
      ],
      }
    },
  }
</script>
