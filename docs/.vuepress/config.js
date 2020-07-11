const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const path = require('path');
const fs = require('fs');

// .vuepress/config.js
module.exports = {
    title: 'Hello VuePress',
    plugins: pluginConf,
    themeConfig: {
      nav: navConf,
      sidebar: {
        '/guide/': [
          {
            title: "导航",
            collapsable: true,
            children: genSidebarConfig("frontend/javascript/函数", true)
          }
        ],
        '/frontend/': [
          '',
          'javascript/函数/00.定义函数',
          'javascript/函数/01.调用函数'
        ],
        '/': [
          '',        /* / */
        ]
      },
      sidebarDepth: 3
    },
  }


function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}
