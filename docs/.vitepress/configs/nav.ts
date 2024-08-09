import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  // { text: '导航', link: '/nav', activeMatch: '^/nav' },
  {
    text: '前端物语',
    link: '/front/javascript/handwriting',
    // items: [
    //   { text: 'JavaScript 基础知识', link: '/front/javascript/types' },
    //   { text: 'CSS 理论知识点', link: '/front/css/' },
    //   { text: 'ES6 常用知识', link: '/front/es6/' },
    //   {
    //     items: [
    //       { text: 'TypeScript 基础知识', link: '/front/typescript/base' },
    //       { text: 'TypeScript 类型体操', link: '/front/typescript/challenges' }
    //     ]
    //   },
    //   { text: 'Webpack', link: '/front/webpack/' },
    //   { text: '浏览器相关知识', link: '/front/browser/' },
    //   { text: '编程题', link: '/front/coding/' }
    // ],
    activeMatch: '^/front'
  },
  
  { text: '源码阅读', link: '/analysis/react/18', activeMatch: '^/analysis' },
  {
    text: 'Workflow',
    items: [
      {
        // text: '常用工具/方法',
        items: [
          { text: '常用工具库整理', link: '/workflow/utils/library' },
          { text: '常用正则整理', link: '/workflow/utils/regexp' },
          { text: '常用代码片段', link: '/workflow/utils/snippets' }
        ]
      },
      {
        //   text: 'CSS 相关',
        items: [
          { text: 'HTML 语法', link: '/workflow/html/tricks' },
          { text: 'CSS 语法', link: '/workflow/css/spec' },
          { text: 'CSS 奇淫技巧', link: '/workflow/css/tricks' },
          { text: 'Sass 常用技巧', link: '/workflow/sass/' }
        ]
      },
      {
        text: 'Tailwind CSS 使用与配置',
        link: '/workflow/library/tailwindcss'
      },
      {
        text: 'Vue 小技巧',
        link: '/workflow/vue/'
      },
      { text: 'npm 常用命令', link: '/workflow/node/npm' },
      {
        //   text: '终端相关',
        items: [
          { text: 'Zsh 配置', link: '/workflow/terminal/zsh' },
          { text: '命令行工具', link: '/workflow/terminal/toolkit' }
          // { text: 'Shell 命令', link: '/workflow/terminal/shell' },
        ]
      },
      { text: 'Git 相关技巧', link: '/workflow/git/' }
      // { text: 'Git 命令清单', link: '/workflow/git/command' }
    ],
    activeMatch: '^/workflow'
  },
  {
    text: '笔记',
    items: [  
      {
        text: '踩坑记录',
        items: [
          { text: 'npm 踩坑记录', link: '/pit/npm' },
          { text: '第三方库踩坑记录', link: '/pit/library' },
          { text: 'PC 踩坑记录', link: '/pit/pc' },
          { text: 'H5 踩坑记录', link: '/pit/h5' },
          { text: '微信开发踩坑记录', link: '/pit/wechat' }
        ]
      }
    ],
    activeMatch: '^/daily-notes|pit'
  },
  {
    text: '工具软件',
    items: [
      {
        text: '软件推荐与配置',
        items: [
          { text: '多平台软件', link: '/efficiency/software/cross-platform' },
          { text: 'Mac 平台', link: '/efficiency/software/mac' },
          { text: 'Windows 平台', link: '/efficiency/software/windows' },
          { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
          { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
          { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' }
        ]
      },
      { text: '在线工具', link: '/efficiency/online-tools' },
      { text: '书签脚本', link: '/efficiency/bookmark-scripts' }
    ],
    activeMatch: '^/efficiency'
  },
  {
    text: '音乐台',
    link: '/music/song',
    activeMatch: '^/music'
  },
  {
    text: '关于我',
    link: '/cong'
  }
]
