import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ZaiZaiCat-Checkin-Docs/',
  lang: 'zh-CN',
  title: 'ZaiZaiCat Checkin',
  description: '自用每日签到脚本与自动化任务合集文档',
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#1f9a6c' }],
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '快速开始', link: '/guide/quickstart' }
    ],
    sidebar: {
      '/': [
        { text: '项目介绍', link: '/guide/intro' },
        { text: '快速开始', link: '/guide/quickstart' },
        {
          text: '部署方法',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '青龙部署', link: '/guide/deploy-qinglong' },
            { text: '本地/服务器部署', link: '/guide/deploy-local' }
          ]
        },
        {
          text: '配置说明',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '账号配置', link: '/config/token' },
            { text: '推送配置', link: '/config/notification' },
            { text: '环境变量', link: '/config/env' }
          ]
        },
        {
          text: '项目列表',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '概览与状态', link: '/scripts/index' },
            { text: '顺丰速运', link: '/scripts/sf' },
            { text: '恩山论坛', link: '/scripts/enshan' },
            { text: '看雪论坛', link: '/scripts/kanxue' },
            { text: '上海杨浦', link: '/scripts/shyp' },
            { text: '华润通-999 答题', link: '/scripts/huaruntong-999' },
            { text: '华润通-微信版', link: '/scripts/huaruntong-wx' },
            { text: '华润通-Ole', link: '/scripts/huaruntong-ole' },
            { text: '华润通-文体未来荟', link: '/scripts/huaruntong-wentiweilaihui' },
            { text: '华润通-一点万象', link: '/scripts/huaruntong-yidianwanxiang' },
            { text: '鸿星尔克', link: '/scripts/erke' },
            { text: 'WPS Office', link: '/scripts/wps' },
            { text: '什么值得买', link: '/scripts/smzdm' },
            { text: '小米钱包', link: '/scripts/mipay' },
            { text: '上海杨浦-自动抢购', link: '/scripts/shyp-auto-buy' }
          ]
        },
        { text: '目录结构', link: '/guide/structure' },
        { text: '常见问题', link: '/guide/faq' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cat-zaizai/ZaiZaiCat-Checkin' }
    ],
    footer: {
      message: '仅供学习交流，请合理使用。',
      copyright: 'MIT License'
    }
  }
})
