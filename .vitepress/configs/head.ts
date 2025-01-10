import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/avatar.png' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ['meta', { name: 'author', content: 'Theo-Messi' }],
  ['meta', { name: 'copyright', content: 'Theo-Messi' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'description', content: '中华传统五术书籍传世经典著作' }],
  [
    'meta',
    {
      name: 'keywords',
      content: '玄学, 五术, 经典著作, 中华文化, 易经, 风水, 传统文化'
    }
  ],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: '玄学宝典' }],
  ['meta', { name: 'og:title', content: '玄学宝典' }],
  ['meta', { name: 'og:url', content: 'https://xx.theojs.cn/' }],
  ['meta', { name: 'og:image', content: 'https://i.theojs.cn/avatar.png' }],
  ['meta', { name: 'og:description', content: '中华传统五术书籍传世经典著作' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: '玄学宝典' }],
  [
    'meta',
    { name: 'twitter:description', content: '中华传统五术书籍传世经典著作' }
  ],
  [
    'meta',
    { name: 'twitter:image', content: 'https://i.theojs.cn/avatar.png' }
  ],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://xx.theojs.cn/',
        name: '玄学宝典',
        description: '中华传统五术书籍传世经典著作',
        author: { '@type': 'Person', name: 'Theo-Messi' }
      })
    }
  ]
]
