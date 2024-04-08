import { defineConfig } from 'vitepress'
// import { useSidebar } from 'vitepress/theme'
// import sidebarConfig from './generateSidebar'
// console.log(sidebarConfig, 'sidebarConfig===')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myhp/',
  lang: 'zh-CN', //默认 en-US
  title: 'WHB',
  description: 'Whb Blog',
  srcDir: './src',
  srcExclude: ['**/README.md', '**/TODO.md'],
  cleanUrls: true,
  // head: [['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }]],
  // assetsDir: 'static',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/Blogs/' },
      {
        text: '前端技术',
        items: [
          { text: 'JavaScript', link: '/JavaScript/' },
          { text: 'WebGL', link: '/JavaScript/WebGL/' },
        ],
      },
      // { text: '后端技术', link: '' },
      // { text: '中医', link: '' },
      // { text: 'DIY', link: '' },
      { text: 'Examples', link: '/Examples/markdown-examples' },
    ],

    sidebar: {
      '/Vue/': [
        {
          text: 'Index',
          link: '/Vue/',
        },
      ],
      '/JavaScript/': [
        {
          text: 'JavaScript',
          items: [
            {
              text: 'Index',
              link: '/JavaScript/',
            },
            {
              text: 'data-structure',
              link: '/JavaScript/data-structure',
            },
            {
              text: 'algorithm',
              link: '/JavaScript/algorithm',
            },
          ],
        },
      ],
      '/Blogs/': [
        {
          text: '博客',
          items: [
            // {
            //   text: 'Index',
            //   link: '/Blogs/',
            // },
            {
              text: '2024-4',
              collapsed: true,
              items: [
                {
                  text: 'vitepress个人博客搭建',
                  link: '/Blogs/2024-4/vitepress个人博客搭建',
                },
              ],
            },
          ],
        },
      ],
      '/Examples/': [
        {
          text: 'markdown语法（官方）',
          link: '/Examples/markdown-examples',
        },
        {
          text: 'API-样例(官方)',
          link: '/Examples/api-examples',
        },
        {
          text: '自定义layout-blog样例',
          link: '/Examples/custom-layout',
        },
        {
          text: '国际化',
          link: '/Examples/locales',
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/WHB1' }],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You',
    // },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
  markdown: {
    // https://vitepress.dev/zh/reference/site-config#markdown
    lineNumbers: true, //显示行号
    math: true, //数学方程
    image: {
      lazyLoading: true,
    }, // 默认禁用图片懒加载
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
})
