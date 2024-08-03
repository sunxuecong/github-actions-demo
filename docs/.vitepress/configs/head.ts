import type { HeadConfig } from 'vitepress'

const isDevelopment = process.env.NODE_ENV === 'development'
const preUrl = import.meta.env.APP_BASE_PATH || '/' 
console.log('preUrl',preUrl);


export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'msapplication-TileImage', content: preUrl + '/favicon.ico' }],
  ['meta', { name: 'baidu-site-verification', content: 'codeva-Whjnr38WFE' }],
  ['link', { rel: 'apple-touch-icon', href:preUrl +  '/favicon.ico' }],
  ['link', { rel: 'mask-icon', href: preUrl + 'favicon.ico', color: '#3eaf7c' }],
  ['link', { rel: 'manifest', href: preUrl + 'manifest.webmanifest' }],
  [
    'script',
    { src: isDevelopment ? '' : 'https://hm.baidu.com/hm.js?8092fab2f2adfc7938ba5b8885aef5b4' }
  ]
]
