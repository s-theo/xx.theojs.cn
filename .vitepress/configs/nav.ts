import type { DefaultTheme } from 'vitepress'

// 导出导航栏配置
export const nav: DefaultTheme.NavItem[] = [
  // 导航栏设置
  { text: '山', link: '山/博山篇', activeMatch: '^/山/' },
  { text: '医', link: '医/八段锦', activeMatch: '^/医/' },
  { text: '命', link: '命/八字基础/生辰八字', activeMatch: '^/命/' },
  { text: '相', link: '相/冰鉴', activeMatch: '^/相/' },
  { text: '卜', link: '卜/毕法赋/毕法赋-上', activeMatch: '^/卜/' },
  { text: '灵宠', link: '灵宠/宠物篇', activeMatch: '^/灵宠/' },
  { text: '相关经典', link: '相关经典/道德经', activeMatch: '^/相关经典/' },
  { text: '提交书籍与纠错', link: '提交书籍与纠错', activeMatch: '^/提交书籍与纠错' },
  { text: '机场推荐评测', link: 'https://doc.theojs.cn/serve/airport/summary' }
]
