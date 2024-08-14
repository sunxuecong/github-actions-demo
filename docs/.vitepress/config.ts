import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig, PageData } from 'vitepress'

import { head, nav, sidebar, algolia } from './configs'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'zh-CN',
  // 网址左上角标题
  title: 'Sain-notes',
  description: 'Sain Sun的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,
  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    // 左上角标题
    // siteTitle: 'Hello World',
    logo: '/logo.svg',
    // 顶部菜单
    nav,
    // 左侧菜单
    sidebar,

    // 右侧页面导航（大纲）
    outline: {
      level: 'deep',
      label: '本页目录',
    },

    // 右上角社交信息
    socialLinks: [{ icon: 'github', link: 'https://github.com/sunxuecong' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Sain Sun',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    /* Algolia DocSearch 配置 */
    algolia,

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },

  // /* 生成站点地图 */
  // transformHtml: (_, id, { pageData }) => {
  //   if (!/[\\/]404\.html$/.test(id))
  //     links.push({
  //       url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
  //       lastmod: pageData.lastUpdated,
  //     })
  // },
  // buildEnd: async ({ outDir }) => {
  //   const sitemap = new SitemapStream({ hostname: 'https://notes.fe-mm.com/' })
  //   const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
  //   sitemap.pipe(writeStream)
  //   links.forEach((link) => sitemap.write(link))
  //   sitemap.end()
  //   await new Promise((r) => writeStream.on('finish', r))
  // },
})
