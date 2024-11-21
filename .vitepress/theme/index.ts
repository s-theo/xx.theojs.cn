import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import '@theojs/lumen/theme'

import {
  DocBox,
  DocLinks,
  DocBoxCube,
  Announcement,
  DocAsideLogo,
  HomeUnderline,
  HomeFooter,
  ShareButton,
  googleAnalytics,
  umamiAnalytics
} from '@theojs/lumen'

import { Aside_Data, Footer_Data } from '../data'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'aside-outline-before': () => h(ShareButton)
    })
  },
  enhanceApp: ({ app }) => {
    googleAnalytics({ id: 'G-5SHLV23EGQ' })
    umamiAnalytics({
      id: '3c2b0a9b-996b-4885-810a-f7145b9ef16f',
      src: 'https://umami.theojs.cn/script.js'
    })
    app.component('Home', HomeUnderline)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
  }
}
