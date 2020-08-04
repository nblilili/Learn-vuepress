
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const sidebarUtil = require('./utils/sidebarUtil.js')

module.exports = {
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {},
    '/en/': {},
  },
  themeConfig: {
    locales: {
      '/':  {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: navConf.genNavbar('cn'),
        sidebar: sidebarUtil.getSidebarConf('docs/cn')
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available",
            buttonText: "Refresh"
          }
        },
        nav: navConf.genNavbar('en'),
        algolia: {},
        sidebar: sidebarUtil.getSidebarConf('docs/en'),
      }
    },
  }
}   