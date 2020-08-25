const sidebarConf = require('./config/sidebarConf.js');
const sidebarUtil = require('./utils/sidebarUtil');
const tagsUtil = require('./utils/tagsUtil');
const navConf = require('./config/navConf.js');
const navUtil = require('./utils/navUtil.js');

module.exports = {
  locales: {
    '/en/': {},
    '/cn/': {},
  },
  plugins: [
    ['vuepress-plugin-code-copy', true]
  ],
  host: "0.0.0.0",
  base: '/doc/',
  devServer: {
    proxy: {
      "/portal/cn/message": "http://developer.juphoon.com:8088"
    }
  },
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: "image/x-icon",
      href: `https://developer.juphoon.com/style/images/favicon.ico`
    }]
  ],
  themeConfig: {
    locales: {
      // '/':  {
      //   selectText: '选择语言',
      //   label: '简体中文',
      //   editLinkText: '在 GitHub 上编辑此页',
      //   serviceWorker: {
      //     updatePopup: {
      //       message: "发现新内容可用.",
      //       buttonText: "刷新"
      //     }
      //   },
      //   // 当前 locale 的 algolia docsearch 选项
      //   algolia: {
      //     apiKey: '48aefdd5edf4e5a94a5ffee6f59e5271',
      //     indexName: 'juphoon_developer'
      //   },
      //   nav: navUtil.getNavConf('cn'),
      //   sidebar: sidebarUtil.getSidebarConf('docs/cn/'),
      //   tagConfig: tagsUtil.getTagsConf('docs/cn/')
      // },
      '/cn/':  {
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
        algolia: {
          apiKey: '48aefdd5edf4e5a94a5ffee6f59e5271',
          indexName: 'juphoon_developer'
        },
        nav: navUtil.getNavConf('cn'),
        sidebar: sidebarUtil.getSidebarConf('docs/cn/'),
        tagConfig: tagsUtil.getTagsConf('docs/cn/')
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
        nav: navUtil.getNavConf('en'),
        algolia: {
          apiKey: '48aefdd5edf4e5a94a5ffee6f59e5271',
          indexName: 'juphoon_developer'
        },
        sidebar: sidebarUtil.getSidebarConf('docs/en/'),
        tagConfig: tagsUtil.getTagsConf('docs/en/')
      }
    }
  }
  
}