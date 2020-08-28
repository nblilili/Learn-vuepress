module.exports = {
  getNavConf(locale) {
    return [{
        text: 'FAQ',
        link: "/" + locale + '/document/V2.1/faq/ios.php'
      },
      {
        text: '文档中心',
        link: "/" + locale + '/00_o2o_audio/'
      },
      {
        text: '下载',
        link: "https://developer.juphoon.com/cn/download/"
      },
      {
        text: '技术支持与服务',
        ariaLabel: '技术支持与服务',
        items: [{
            text: '技术支持社区',
            link: '/portal/' + locale + '/bbs/'
          },
          {
            text: '服务支持',
            link: 'http://cloud.juphoon.com/' + locale + '/service.html'
          }
        ]
      }
    ]
  },

}