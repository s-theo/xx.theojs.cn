import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/logo/avatar-mini.webp' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'description', content: '中华传统五术书籍传世经典著作' }],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png',
      sizes: '96x96'
    }
  ],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  ['meta', { name: 'apple-mobile-web-app-title', content: '玄学宝典' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  [
    'meta',
    {
      name: 'keywords',
      content: '玄学, 五术, 经典著作, 中华文化, 易经, 风水, 传统文化'
    }
  ],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: '玄学宝典' }],
  ['meta', { property: 'og:title', content: '玄学宝典' }],
  ['meta', { property: 'og:url', content: 'https://xx.theojs.cn/' }],
  [
    'meta',
    {
      property: 'og:image',
      content: 'https://i.theojs.cn/logo/xx-og.webp'
    }
  ],
  [
    'meta',
    { property: 'og:description', content: '中华传统五术书籍传世经典著作' }
  ],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: '玄学宝典' }],
  [
    'meta',
    { name: 'twitter:description', content: '中华传统五术书籍传世经典著作' }
  ],
  [
    'meta',
    {
      name: 'twitter:image',
      content: 'https://i.theojs.cn/logo/xx-og.webp'
    }
  ],
  [
    'meta',
    {
      name: 'google-site-verification',
      content: 'bOXLe1lrqePxxyksBSbMgqbELMkTX9Q_FkyEuVwTobI'
    }
  ],
  [
    'meta',
    {
      name: 'robots',
      content:
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    }
  ]
]
