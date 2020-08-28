module.exports = {
  getSidebarSelectConf(locale) {
    let cnObj = [{
        title: "平台",
        children: [{
          title: "菊风云平台",
          url: "/" + locale + "/juphoon_platform/"
        }]
      },
      {
        title: "产品",
        children: [{
            title: "一对一语音通话",
            url: "/" + locale + "/00_o2o_audio/"
          },
          {
            title: "一对一视频通话",
            url: "/" + locale + "/01_o2o_video/"
          },
          {
            title: "多方语音通话",
            url: "/" + locale + "/02_mult_audio/"
          },
          {
            title: "多方视频通话",
            url: "/" + locale + "/03_mult_video/"
          },
          {
            title: "语音互动直播",
            url: "/" + locale + "/04_audio_live/"
          },
          {
            title: "视频互动直播",
            url: "/" + locale + "/05_video_live/"
          }
        ]
      },
      {
        title: "扩展功能",
        children: [{
            title: "WebRTC",
            url: "/" + locale + "/WebRTC"
          },
          {
            title: "服务器录制",
            url: "/" + locale + "/服务器录制"
          },
          {
            title: "屏幕共享",
            url: "/" + locale + "/屏幕共享"
          },
          {
            title: "CDN 推流",
            url: "/" + locale + "/CDN 推流"
          }
        ]
      }
    ];
    let enObj = [{
      title: "platform",
      children: [{
        title: "Juphoon Platform",
        url: "/" + locale + "/juphoon_platform/"
      }]
    },
    {
      title: "Product",
      children: [{
          title: "One to One Voice Calling",
          url: "/" + locale + "/00_o2o_audio/"
        },
        {
          title: "One to One Video Calling",
          url: "/" + locale + "/01_o2o_video/"
        },
        {
          title: "Group Voice Calling",
          url: "/" + locale + "/02_mult_audio/"
        },
        {
          title: "Group Video Calling",
          url: "/" + locale + "/03_mult_video/"
        },
        {
          title: "Live Interactive Audio Streaming",
          url: "/" + locale + "/04_audio_live/"
        },
        {
          title: "Live Interactive Video Streaming",
          url: "/" + locale + "/05_video_live/"
        }
      ]
    }
  ];
    if (locale && locale == locale + "") {
      return cnObj;
    } else if (locale && locale == "en") {
      return enObj;
    }
  }
}