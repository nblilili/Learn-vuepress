const moment = require('moment');
moment.locale("zh-cn");

module.exports = [{
    title: '文档',
    collapsable: false, 
    children: [
      { title: '设置系统', path:'/document/rst/安装/00.设置你的系统.md'},
      { title: '了解 RST', path:'/document/rst/安装/01.了解 RST 文章.md'}
    ]
  }]
  //   '/fronted/': [{
  //   title: '前端',
  //   collapsable: false,
  //   children: [
  //     { title: 'items01', path:'/literature/aaa'},
  //     { title: 'items02', path:'/literature/bbbb'}
  //   ]
  // }],
;