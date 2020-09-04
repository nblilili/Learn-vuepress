module.exports = {
  getNavConf(locale, base) {
    if (locale == "cn") {
      return [{
        text: 'FAQ',
        link: '/cn/juphoon_platform/97_FAQ/iOS.html'
      },
      {
        text: '文档中心',
        link: "/" + locale + '/00_o2o_audio/'
      },
      {
        text: '下载',
        link: "/" + locale + '/download/'
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
      }];
    } else if (locale == "en") {
      return [
        {
          text: 'Document Center',
          link: "/" + locale + '/00_o2o_audio/'
        },
        {
          text: '下载',
          link: "/" + locale + '/download/'
        }];
    }
  },
}