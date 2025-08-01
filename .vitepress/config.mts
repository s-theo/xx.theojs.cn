import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
import { head, nav, search, sidebar, socialLinks, transformPageData } from './configs'

export default defineConfig({
  // 站点名称
  title: '玄学宝典',

  // 站点语言
  lang: 'zh-Hans',

  // 网站头部
  head,

  // 站点介绍
  description: '玄学宝典 - 中华传统五术书籍(山医命相卜)/传世经典著作',

  // 动态生成 meta 标签和 JSON-LD 数据
  transformPageData,

  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  // 是否将 meta 信息提取为单独的 chunk
  metaChunk: true,

  // 站点地图
  sitemap: { hostname: 'https://xx.theojs.cn' },

  // vue配置
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },

  // vite配置
  vite: {
    // @ts-ignore: 使用 rolldown-vite 时类型不兼容 vite，但运行正常
    plugins: [llmstxt({})]
  },

  // 源目录
  srcDir: 'content',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 主题配置
  themeConfig: {
    // logo
    logo: {
      src: 'https://i.theojs.cn/logo/avatar-mini.webp',
      width: 24,
      height: 24,
      alt: 'avatar',
      fetchpriority: 'high'
    },

    // 社交链接
    socialLinks,

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/s-theo/xx.theojs.cn/edit/main/content/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: {
      text: '最后更新于'
    },

    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',
    skipToContentLabel: '跳转到内容',

    // markdown 外部链接图标
    externalLinkIcon: true,

    // 语言切换
    langMenuLabel: '切换语言',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    //搜索
    search: { provider: 'algolia', options: search },

    // 404
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }
  }
})
