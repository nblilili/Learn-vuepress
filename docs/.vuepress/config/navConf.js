const moment = require('moment');

module.exports = [
  { text: '首页', link: '/' },
  { text: 'Guide', link: '/guide/' },
  { text: 'frontend', link: '/frontend/' },
  { text: '文档', items: [
    { text: 'MarkDown', link: '/document/md/' },
    
    { text: 'ReSt', items: [
      { text: '安装', link: '/document/rst/安装/' },
      { text: '语法', link: '/document/rst/语法/' },
      { text: '结构与风格', link: '/document/rst/结构与风格/' },
    ] },
    // { text: 'Ubuntu', link: '/os/ubuntu/' },
    // { text: 'CentOS', link: '/os/centos/' },
  ]},
  // { text: '前端', items: [
  //   { text: 'JavaScript', items: [
  //     { text: '快速入门', link: '/frontend/javascript/快速入门/' },
  //     { text: '函数', link: '/frontend/javascript/函数/' },
  //   ] },
  //   { text: 'Webpack', link: '/frontend/webpack/' },
  //   { text: 'D3', link: '/frontend/d3js/' },
  //   { text: 'Utils', link: '/frontend/utils/' },
  // ]},
  // { text: '后端', items: [
  //   { text: 'Nodejs', link: '/backend/nodejs/' },
  //   { text: 'Koa', link: '/backend/koa/' },
  //   { text: 'MongoDB', link: '/backend/mongodb/' },
  //   { text: 'Nginx', link: '/backend/nginx/' },
  // ]},
  // { text: '开发工具', items: [
  //   { text: 'Git', link: '/tools/git/' },
  //   { text: 'Github', link: '/tools/github/' },
  //   { text: 'VSCode', link: '/tools/vscode/' },
  //   { text: 'Chrome Developer tools', link: '/tools/chrome/' },
  //   { text: 'Bookmark scripts', link: '/tools/bookmark-scripts/' },
  // ]},
  // { text: '更多', items: [
  //   { text: '面试题', link: '/more/interview/' },
  //   { text: '小工具', link: '/more/hodgepodge/' },
  //   { text: 'VuePress1.x 官网', link: 'https://v1.vuepress.vuejs.org/zh/' },
  // ]}
];