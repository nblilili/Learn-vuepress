module.exports = {
  getSidebarSelectConf(locale, base) {
    if(!base){
      base = "/"
    }
    let cnObj = [{
        title: "平台",
        children: [{
          title: "菊风云平台",
          url: base + "cn/juphoon_platform/"
        }]
      },
      {
        title: "产品",
        children: [{
            title: "一对一语音通话",
            url: base + "cn/00_o2o_audio/"
          },
          {
            title: "一对一视频通话",
            url: base + "cn/01_o2o_video/"
          },
          {
            title: "多方语音通话",
            url: base + "cn/02_mult_audio/"
          },
          {
            title: "多方视频通话",
            url: base + "cn/03_mult_video/"
          },
          {
            title: "语音互动直播",
            url: base + "cn/04_audio_live/"
          },
          {
            title: "视频互动直播",
            url: base + "cn/05_video_live/"
          }
        ]
      },
      {
        title: "扩展功能",
        children: [{
            title: "WebRTC",
            url: base + "cn/WebRTC"
          },
          {
            title: "服务器录制",
            url: base + "/cn/服务器录制"
          },
          {
            title: "屏幕共享",
            url: base + "cn/屏幕共享"
          },
          {
            title: "CDN 推流",
            url: base + "cn/CDN 推流"
          }
        ]
      }
    ];
    if (locale && locale == "cn") {
      return cnObj;
    } else if (locale && locale == "en") {
      return cnObj;
    }
  }
}