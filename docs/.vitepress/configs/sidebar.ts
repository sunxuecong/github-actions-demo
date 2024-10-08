import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/front/": [
    {
      text: "JavaScript 基础知识",
      collapsed: false,
      items: [
        { text: "原型与原型链详解", link: "/front/javascript/prototypeChain" },
        {
          text: "JavaScript手写代码汇总",
          link: "/front/javascript/handwriting",
        },
        { text: "前端代码规范", link: "/front/javascript/specification" },
      ],
    },
    {
      text: "JavaScript 基础知识",
      collapsed: false,
      items: [
        { text: "数据类型", link: "/front/javascript/types" },
        { text: "引用类型的拷贝", link: "/front/javascript/clone" },
        { text: "类型转换", link: "/front/javascript/conversions" },
        { text: "原型和原型链", link: "/front/javascript/prototype" },
        { text: "继承", link: "/front/javascript/inherit" },
      ],
    },
    {
      text: "ES6 常用知识点",
      link: "/front/es6/",
    },
    {
      text: "TypeScript",
      collapsed: false,
      items: [
        { text: "基础知识", link: "/front/typescript/base" },
        { text: "编译配置", link: "/front/typescript/tsconfig" },
        { text: "类型体操", link: "/front/typescript/challenges" },
      ],
      link: "/front/typescript/base",
    },
    {
      text: "HTML / CSS",
      collapsed: false,
      items: [
        { text: "HTML 理论知识点", link: "/front/html/" },
        { text: "CSS 理论知识点", link: "/front/css/" },
      ],
    },
    { text: " Webpack", link: "/front/webpack/" },
    {
      text: "浏览器与网络",
      collapsed: false,
      items: [
        { text: "浏览器相关知识点", link: "/front/browser/" },
        { text: "TCP", link: "/front/network/tcp" },
        { text: "HTTP", link: "/front/network/http" },
      ],
    },
    {
      text: "Vue",
      collapsed: false,
      items: [
        { text: "Vue2项目迁移Vite", link: "/front/vue/transfer" },
      ],
    },
    {
      text: "React",
      collapsed: false,
      items: [
        { text: "React 基础总结一", link: "/front/react/index" },
      ],
    },
    {
      text: "概念知识点",
      collapsed: false,
      items: [
        { text: "模块化", link: "/front/concept/module" },
        { text: "前端页面渲染方式", link: "/front/concept/page-rendering" },
      ],
    },
    {
      text: "编程题",
      link: "/front/coding/",
    },
  ],
  "/backend/": [
    {
      text: "Node",
      // collapsed: false,
      items: [
        { text: "Node笔记", link: "/backend/node/index" },
        { text: "Package.json详解", link: "/backend/node/pkg" }
      ],
    },
    {
      text: "Nginx",
      // collapsed: false,
      items: [
        { text: "Nginx常用知识", link: "/backend/nginx/index" },
      ],
    },
    {
      text: "Docker",
      // collapsed: false,
      items: [
        { text: "Docker常用知识", link: "/backend/docker/index" },
      ],
    },
  ],

  "/analysis/": [
    {
      text: "React",
      items: [
        { text: "React 18 的新特性", link: "/analysis/react/18" },
        { text: "React 常见面试题", link: "/analysis/react/interview" },
      ],
    },
    {
      text: "工具库",
      // collapsed: false,
      items: [
        { text: "only-allow", link: "/analysis/utils/only-allow" },
        { text: "clsx", link: "/analysis/utils/clsx" },
        { text: "await-to-js", link: "/analysis/utils/await-to-js" },
      ],
    },
  ],
  "/workflow/": [
    {
      text: "常用工具/方法",
      collapsed: false,
      items: [
        { text: "工具库整理", link: "/workflow/utils/library" },
        { text: "常用正则整理", link: "/workflow/utils/regexp" },
        { text: "常用代码片段", link: "/workflow/utils/snippets" },
      ],
    },
    {
      text: "常用库的使用与配置",
      collapsed: false,
      items: [
        { text: "Tailwind CSS", link: "/workflow/library/tailwindcss" },
        { text: "Day.js", link: "/workflow/library/dayjs" },
      ],
    },
    {
      text: "HTML / CSS 相关",
      collapsed: false,
      items: [
        { text: "HTML 技巧", link: "/workflow/html/tricks" },
        { text: "CSS 语法", link: "/workflow/css/spec" },
        { text: "CSS 技巧", link: "/workflow/css/tricks" },
        { text: "Sass 常用技巧", link: "/workflow/sass/" },
      ],
    },
    {
      text: "Vue 相关",
      link: "/workflow/vue/",
    },
    {
      text: "Node 相关",
      // collapsed: false,
      items: [
        { text: "npm 常用命令", link: "/workflow/node/npm" },
        { text: "发布自己的 npm 包", link: "/workflow/node/npmpublish" },
        { text: "优雅的修改node_modules中的依赖库", link: "/workflow/node/nodemodules" }
      ],
    },
    {
      text: "终端相关",
      collapsed: false,
      items: [
        { text: "Zsh 配置", link: "/workflow/terminal/zsh" },
        { text: "命令行工具", link: "/workflow/terminal/toolkit" },
        { text: "Shell 命令", link: "/workflow/terminal/shell" },
      ],
    },
    {
      text: "Git 命令清单",
      collapsed: false,
      items: [{ text: "Git 命令清单", link: "/workflow/git/" }],
    },
  ],
  "/efficiency/": [
    {
      text: "软件推荐与配置",
      // collapsed: false,
      items: [
        { text: "多平台软件", link: "/efficiency/software/cross-platform" },
        { text: "Mac 平台", link: "/efficiency/software/mac" },
        { text: "Windows 平台", link: "/efficiency/software/windows" },
        { text: "浏览器设置与扩展", link: "/efficiency/software/browser" },
        {
          text: "Visual Studio Code 配置",
          link: "/efficiency/software/vscode",
        },
      ],
    },
    { text: "在线工具", link: "/efficiency/online-tools" },
    { text: "书签脚本", link: "/efficiency/bookmark-scripts" },
  ],
  "/pit/": [
    {
      text: "经验心得",
      // collapsed: false,
      items: [
        { text: "npm 踩坑记录", link: "/pit/npm" },
        { text: "第三方库踩坑记录", link: "/pit/library" },
        { text: "PC 踩坑记录", link: "/pit/pc" },
        { text: "H5 踩坑记录", link: "/pit/h5" },
        { text: "微信开发踩坑记录", link: "/pit/wechat" },
      ],
    },
  ],
  "/music/": [
    {
      text: "音乐台",
      // collapsed: false,
      items: [
        { text: "海阔天空", link: "/music/sky" },
        { text: "鼓楼", link: "/music/drumtower" },
        { text: "嘉宾", link: "/music/guest" },
        { text: "ペガサス幻想", link: "/music/tianmasfantasy" },
        { text: "富士山下", link: "/music/fushishanxia" },
        { text: "米兰的小铁匠", link: "/music/xiaotiejiang" },
      ],
    },
  ],
};
