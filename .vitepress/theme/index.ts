import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import {
  Announcement,
  DocAsideLogo,
  DocBox,
  DocBoxCube,
  DocLinks,
  DocPill,
  HomeFooter,
  HomeUnderline,
  ShareButton,
  Twikoo,
  googleAnalytics,
  umamiAnalytics
} from '@theojs/lumen'
import '@theojs/lumen/theme'

import { Aside_Data, Footer_Data, Twikoo_Data } from '../data'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'aside-outline-before': () => h(ShareButton),
      'doc-after': () => h(Twikoo, { Twikoo_Data }),
      'home-hero-info-before': () => h(Announcement),
      'layout-bottom': () => h(HomeFooter, { Footer_Data })
    })
  },
  enhanceApp: ({ app }) => {
    googleAnalytics({ id: 'G-5SHLV23EGQ' })
    umamiAnalytics({
      id: '05d0addd-9215-4b6d-b753-998173044185',
      src: 'https://u.theojs.cn/script.js'
    })
    app.component('Home', HomeUnderline)
    app.component('Pill', DocPill)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
  }
}
