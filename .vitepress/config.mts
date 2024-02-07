import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/lyf-notes/",
  // title: "lyf-blog",
  description: "学习笔记",
  themeConfig: {
    siteTitle: "lyf-blog",
    logo: "logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "语言",
        link: "/fe/language/01-页面样式小结/页面样式小结",
        activeMatch: "/fe/language/",
      },
      {
        text: "工具使用",
        link: "/fe/工具使用/01-代理/代理",
        activeMatch: "/fe/工具使用/",
      },
      {
        text: "刷题小结",
        link: "/fe/刷题小结/1月",
        activeMatch: "/fe/刷题小结/",
      },
    ],

    sidebar: {
      "/fe/language/": {
        base: "/fe/language/",
        items: [
          {
            text: "开发语言",
            items: [
              {
                text: "01-CSS小结",
                collapsed: false,
                items: [
                  {
                    text: "布局",
                    link: "01-页面样式小结/布局",
                  },
                  {
                    text: "过渡与动画",
                    link: "01-页面样式小结/过渡与动画",
                  },
                  {
                    text: "页面样式小结",
                    link: "01-页面样式小结/页面样式小结",
                  },
                ],
              },
              {
                text: "02-JS小结",
                collapsed: false,
                items: [
                  {
                    text: "encodeURIComponent()",
                    link: "02-JS小结/encodeURIComponent()",
                  },
                ],
              },
              {
                text: "03-TS小结",
                collapsed: false,
                items: [{ text: "定义类型", link: "03-TS小结/定义类型" }],
              },
              {
                text: "04-Vue小结",
                collapsed: false,
                items: [
                  { text: "深入组件", link: "04-Vue小结/深入组件" },
                  { text: "响应式基础", link: "04-Vue小结/响应式基础" },
                ],
              },
              // { text: "Runtime API Examples", link: "/api-examples" },
            ],
          },
        ],
      },

      "/fe/工具使用/": {
        base: "/fe/工具使用/",
        items: [
          {
            text: "01-代理",
            collapsed: false,
            items: [{ text: "whistle", link: "01-代理/代理" }],
          },
          {
            text: "02-浏览器",
            collapsed: false,
            items: [{ text: "debug", link: "02-浏览器debug/浏览器debug" }],
          },
          {
            text: "03-git",
            collapsed: false,
            items: [{ text: "git", link: "03-Git/git" }],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/persist-art/lyf-notes" },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
});
