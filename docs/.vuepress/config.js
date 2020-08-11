const sidebarConf = require('./config/sidebarConf.js');
const sidebarUtil = require('./utils/sidebarUtil');
const tagsUtil = require('./utils/tagsUtil');
const navConf = require('./config/navConf.js');

module.exports = {
  plugins: [['vuepress-plugin-code-copy', true]],
  host:"0.0.0.0",
  base:'/doc/',
  devServer:{
    proxy:{
      "/portal/cn/message":"http://developer.juphoon.com:8088"
    }
  },
  themeConfig: {
    algolia: {
      apiKey: '3a539aab83105f01761a137c61004d85',
      indexName: 'vuepress_doc'
    },
    nav: navConf,
    // sidebar: sidebarConf
    sidebar: sidebarUtil.getSidebarConf('docs/cn/'),
    tagConfig: tagsUtil.getTagsConf('docs/cn/')
  }
}   