import type { HeadConfig } from 'vitepress'

const isDevelopment = process.env.NODE_ENV === 'development'
const preUrl = process.env.APP_BASE_PATH || '/' 


export const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href:preUrl +  'favicon.svg' }],
  // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'msapplication-TileImage', content: preUrl + 'favicon.svg' }],
  ['link', { rel: 'apple-touch-icon', href:preUrl +  'favicon.svg' }],
  // ['link', { rel: 'mask-icon',type: 'image/svg+xml', href: preUrl + 'favicon.svg', color: '#3eaf7c' }],
  ['link', { rel: 'manifest', href: preUrl +'manifest.webmanifest' }],
]
