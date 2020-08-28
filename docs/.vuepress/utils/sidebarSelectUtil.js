module.exports = {
  getSidebarSelectConf(locale, base) {
    if(!base){
      base = "/"
    }
    let cnObj = [{
        title: "平台",
        children: [{
          title: "菊风云平台",
          url: base + locale + "/juphoon_platform/"
        }]
      },
      {
        title: "产品",
        children: [{
            title: "一对一语音通话",
            url: base + locale + "/00_o2o_audio/"
          },
          {
            title: "一对一视频通话",
            url: base + locale + "/01_o2o_video/"
          },
          {
            title: "多方语音通话",
            url: base + locale + "/02_mult_audio/"
          },
          {
            title: "多方视频通话",
            url: base + locale + "/03_mult_video/"
          },
          {
            title: "语音互动直播",
            url: base + locale + "/04_audio_live/"
          },
          {
            title: "视频互动直播",
            url: base + locale + "/05_video_live/"
          }
        ]
      },
      {
        title: "扩展功能",
        children: [{
            title: "WebRTC",
            url: base + locale + "/WebRTC"
          },
          {
            title: "服务器录制",
            url: base + locale + "/服务器录制"
          },
          {
            title: "屏幕共享",
            url: base + locale + "/屏幕共享"
          },
          {
            title: "CDN 推流",
            url: base + locale + "/CDN 推流"
          }
        ]
      }
    ];
    let enObj = [{
      title: "平台",
      children: [{
        title: "菊风云平台",
        url: base + locale + "/juphoon_platform/"
      }]
    },
    {
      title: "产品",
      children: [{
          title: "一对一语音通话",
          url: base + locale + "/00_o2o_audio/"
        },
        {
          title: "一对一视频通话",
          url: base + locale + "/01_o2o_video/"
        },
        {
          title: "多方语音通话",
          url: base + locale + "/02_mult_audio/"
        },
        {
          title: "多方视频通话",
          url: base + locale + "/03_mult_video/"
        },
        {
          title: "语音互动直播",
          url: base + locale + "/04_audio_live/"
        },
        {
          title: "视频互动直播",
          url: base + locale + "/05_video_live/"
        }
      ]
    },
    {
      title: "扩展功能",
      children: [{
          title: "WebRTC",
          url: base + locale + "/WebRTC"
        },
        {
          title: "服务器录制",
          url: base + "/cn/服务器录制"
        },
        {
          title: "屏幕共享",
          url: base + locale + "/屏幕共享"
        },
        {
          title: "CDN 推流",
          url: base + locale + "/CDN 推流"
        }
      ]
    }
  ];
    if (locale && locale == locale + "") {
      return cnObj;
    } else if (locale && locale == "en") {
      return cnObj;
    }
  }
}