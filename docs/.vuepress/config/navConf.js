
module.exports = {
  genNavbar(language){
    return [
      { 
        text: '产品',
        ariaLabel: '产品列表',
        items: [
          { text: '菊风云平台', link: '/'+ language + '/juphoon_platform/' },
          { text: '一对一语音', link: '/'+ language + '/00_o2o_audio/' },
          { text: '一对一视频', link: '/'+ language + '/01_o2o_video/' },
          { text: '多方语音', link: '/'+ language + '/02_mult_audio/' },
          { text: '多方视频', link: '/'+ language + '/03_mult_video/' },
          { text: '语音直播', link: '/'+ language + '/04_audio_live/' },
          { text: '视频直播', link: '/'+ language + '/05_video_live/' },
        ]
      },
      { text: '测试', link: '/一对一语音通话/'},
    ]
  }
}  

