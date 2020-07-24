
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const sidebarUtil = require('./utils/sidebarUtil.js')

module.exports = {
  themeConfig: {
    nav: navConf,
    sidebar: sidebarUtil.getSidebarConf('docs/00_product/')
  }
}   