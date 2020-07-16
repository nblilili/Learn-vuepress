const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs目录
const utils = require('./utils/index.js');
const filehelper = require('./utils/initPage.js');

module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/css/00.定义函数' },
      { text: 'Guide', link: '/css/02.变量作用域'},
      { 
        text: '产品',
        ariaLabel: '产品列表',
        items: [
          { text: '一对一', link: '/audio/' },
          { text: '多方', link: '/video/' }
        ]
      },
    ],
    sidebar: [
      {
        title: 'Group 1',   // required
        path: '/css/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 10,    // optional, defaults to 1
        children: [
          '02.变量作用域.md',
          '03.解构赋值.md',
          ''
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ] // 侧边栏配置
  }
}   