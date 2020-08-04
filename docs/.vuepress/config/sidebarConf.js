module.exports = {
  // '/testClass/': [
  //   '',     /* /foo/ */
  //   '00',  /* /foo/one.html */
  //   '01'   /* /foo/two.html */
  // ],
  '/00_product/': [
    // '/', /* /bar/ */
    ['./00_o2o_audio/00_overview', "平台概述"],
    {
      title: '下载', // required
      children: [{
          title: 'SDK下载', // required
          path: './00_o2o_audio/02_download/Android/00_download',
        },
        {
          title: '场景Demo体验', // required
          path: './00_o2o_audio/02_download/C++/00_download',
        },
        {
          title: 'Demo源码', // required
          path: './00_o2o_audio/02_download/iOS/00_download',
        },
      ]
    },
    ['./00_o2o_audio/02_download/Windows/00_download', "测试一下距离"],
    // './00_o2o_audio/02_download/Android/00_download',
    // './00_o2o_audio/02_download/C++/00_download',
    // './00_o2o_audio/02_download/iOS/00_download',
    // './00_o2o_audio/02_download/macOS/00_download',
    // './00_o2o_audio/02_download/Windows/00_download'
  ],
  '/testClass/': [
    '',
    './01',
    {
      title: 'Group 1', // required
      //path: '//',      //可以通过这个 path 来设置 ios。macOS四个平台
      collapsable: true, // optional, defaults to true
      sidebarDepth: 1, // optional, defaults to 1
      children: [
        './00',
        './01',
        {
          title: 'Group 1', // required
          //path: '//',      //可以通过这个 path 来设置 ios。macOS四个平台
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            './00',
            './01'
          ]
        }
      ]
    }
  ],
  '/testClass2/': [
    '', /* /bar/ */
    '04', /* /bar/three.html */
  ],

  // fallback
  '/一对一语音通话/': [
    '', /* / */
    '02', /* /contact.html */
    '03', /* /about.html */
    '产品概述', /* /about.html */
  ]
}