import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { h } from 'vue'

import '@theojs/lumen/theme'

import { BaziConverter } from './components'
import {
  DocBox,
  DocLinks,
  DocBoxCube,
  Announcement,
  DocAsideLogo,
  HomeUnderline
} from '@theojs/lumen'

import { Aside_Data } from '../data/AsideData'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data })
    })
  },
  enhanceApp: ({ app }, ctx) => {
    googleAnalytics({ id: 'G-5SHLV23EGQ' })
    app.component('Home', HomeUnderline)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('BZ', BaziConverter)
  }
}
