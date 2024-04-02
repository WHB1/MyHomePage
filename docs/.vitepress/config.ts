import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'WHB',
  description: 'Whb Blog',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '' },
      { text: '前端技术', link: '' },
      { text: '后端技术', link: '' },
      { text: '中医', link: '' },
      { text: 'DIY', link: '' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'My APIs', link: '' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/WHB1' }],
  },
})
