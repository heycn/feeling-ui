module.exports = {
  base: '/feeling-ui/',
  head: [['link', { rel: 'icon', href: 'hero.jpg' }]],
  title: 'FeelingUI',
  description: '一个不太一样的 UI 框架',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/introduce/' },
      { text: 'Vue3 版本', link: 'https://heycn.github.io/flag-ui-website' },
      { text: 'Github', link: 'https://github.com/heycn/feeling-ui' }
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        collapsable: false,
        title: '入门',
        children: ['/introduce/', '/install/']
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/toast',
          '/components/popover',
          '/components/input',
          '/components/tabs',
          '/components/layout',
          '/components/grid',
          '/components/collapse'
        ]
      }
    ]
  }
}
