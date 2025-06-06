/// <reference types="vite/client" />
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { Aside, Footer, Links, Notice, Underline, umamiAnalytics } from '@theojs/lumen'
import '@theojs/lumen/style'
import { Aside_Data, Footer_Data } from '../data'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(Aside, { Aside_Data }),
      'home-hero-info-before': () => h(Notice),
      'layout-bottom': () => h(Footer, { Footer_Data })
    })
  },

  enhanceApp: ({ app }) => {
    umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'xx.theojs.cn'
    })
    app.component('Home', Underline)
    app.component('Links', Links)
  }
}
