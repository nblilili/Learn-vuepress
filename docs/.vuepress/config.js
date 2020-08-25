const sidebarConf = require('./config/sidebarConf.js');
const sidebarUtil = require('./utils/sidebarUtil');
const tagsUtil = require('./utils/tagsUtil');
const navConf = require('./config/navConf.js');
const navUtil = require('./utils/navUtil.js');

module.exports = {
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
    algolia: {
      apiKey: '48aefdd5edf4e5a94a5ffee6f59e5271',
      indexName: 'juphoon_developer'
    },
    // nav: navUtil.getNavConf('cn'),
    nav: navUtil.getNavConf('cn'),
    // sidebar: sidebarConf
    sidebar: sidebarUtil.getSidebarConf('docs/cn/'),
    tagConfig: tagsUtil.getTagsConf('docs/cn/')
  }
}