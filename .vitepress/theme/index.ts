import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { h } from 'vue'

import '@theojs/lumen/theme'

import {
  DocBox,
  DocLinks,
  DocBoxCube,
  Announcement,
  DocAsideLogo,
  HomeUnderline,
  HomeFooter
} from '@theojs/lumen'

import { Aside_Data, Footer_Data } from '../data'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data })
    })
  },
  enhanceApp: ({ app }, ctx) => {
    googleAnalytics({ id: 'G-5SHLV23EGQ' })
    app.component('Home', HomeUnderline)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
  }
}
