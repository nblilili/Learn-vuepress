module.exports = {
  '/一对一语音通话/': [ 
    './02', 
    './03',
    {
      title: 'Group 1',   // required
      //path: '//',      //可以通过这个 path 来设置 ios。macOS四个平台
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
        './02', 
        './03',
        {
          title: 'Group 1',   // required
          //path: '//',      //可以通过这个 path 来设置 ios。macOS四个平台
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            './02', 
            './03',
          ]
        }
      ]
    }   
  ],
  '/testClass/': [
    '',     
    './02',  
    './03'   /* 上面的内容本来长这个样子，把./03 替换成对象*/
  ],

}