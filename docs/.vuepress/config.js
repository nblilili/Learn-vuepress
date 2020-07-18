const sidebarConf = require('./config/sidebarConf.js');

module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/css/00.定义函数' },
      { text: 'Guide', link: '/css/02.变量作用域'},
      { 
        text: '产品',
        ariaLabel: '产品列表',
        items: [
          { text: '一对一', link: '/一对一语音通话/' },
          { text: '多方', link: '/testClass/' }
        ]
      },
    ],
    sidebar: sidebarConf
  }
}   