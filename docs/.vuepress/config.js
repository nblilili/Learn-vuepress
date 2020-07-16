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
    sidebar: {
      '/video/': [
        '',
        '00_overview',
        '01_demo_exp'
      ],
      '/audio/': [
        '',
        '00_overview',
        '01_demo_exp'
      ]
    }
  }
}   