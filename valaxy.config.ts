import { defineValaxyConfig } from 'valaxy'

const nav = [] as any
const sidebar =  [
  {
    text: '开始',
    link: '/start/',
  },
  {
    text: '乐理',
    collapsed: false,
    items: [
      {
        text: '介绍',
        link: '/yueli/',
      }
    ],
  },
]



export default defineValaxyConfig({
  theme: 'press',
  themeConfig: {
    nav,
    sidebar,
    footer: {
      message: 'Powered by <a href="https://valaxy.site">Valaxy</a>',
    },

    editLink: {
      pattern: 'https://github.com/sutiao-liulang-fashi/sutiao-liulang-fashi.github.io/edit/main/docs/:path',
    },
  },
  unocss: {},
})
