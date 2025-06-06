import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  // 图标优先加载
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/logo/avatar-mini.webp' }],
  ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],

  // 通用元信息
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: '玄学宝典' }],
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'description', content: '中华传统五术书籍传世经典著作' }],

  // Open Graph 元信息
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: '玄学宝典' }],

  // Twitter 卡片信息
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

  // SEO 相关设置
  ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
  ['meta', { name: 'google-site-verification', content: 'bOXLe1lrqePxxyksBSbMgqbELMkTX9Q_FkyEuVwTobI' }]
]
