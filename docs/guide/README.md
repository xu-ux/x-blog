---
sidebar: auto
description: vuepress相关配置
search:
  - 配置
  - 主题
  - 索引
tags:
  - 配置
  - 主题
  - 索引
meta:
  - name: description
    content: vuepress相关配置
  - name: keywords
    content: [vue, vuepress, blog]
---

# VuePress入门教程 <Badge text="包教包会" type="warning"/>

> VuePress官网：[https://vuepress.vuejs.org/zh/](https://links.jianshu.com/go?to=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2F)

## 介绍

VuePress由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。
 它以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作；享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题；它会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

## 特性

- 为技术文档而优化的内置 Markdown 拓展
- 在 Markdown 文件中使用 Vue 组件的能力
- Vue 驱动的自定义主题系统
- 自动生成 Service Worker
- Google Analytics 集成
- 基于 Git 的 “最后更新时间”
- 多语言支持
- 默认主题包含：
  - 响应式布局
  - 可选的主页
  - 简洁的开箱即用的标题搜索
  - Algolia 搜索
  - 可自定义的导航栏 和 侧边栏
  - 自动生成的 GitHub 链接和页面的编辑链接

*上述都是官网所提供的内容；下面让我们来真正实践下如何快速建立一个技术文档，当然，你熟悉它的操作后，优化成为自己的博客也是不错的选择！本着尤大出品必是精品的原则，相信VuePress未来发展会很不错!*

**本教程目的在于快速搭建技术文档的基本模型，更具体的配置和说明请参考官网配置[https://vuepress.vuejs.org/zh/config/](https://links.jianshu.com/go?to=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Fconfig%2F)，[https://vuepress.vuejs.org/zh/default-theme-config/](https://links.jianshu.com/go?to=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Fdefault-theme-config%2F)**

## 环境搭建

##### 查看nodejs版本

注意：Node.js 版本 >= 8



```undefined
node -v
```

![img](./images/13878898-4fbbbcaf9f5ea3fa.png)

##### 全局安装



```undefined
npm install -g vuepress
```

##### 创建项目目录



```bash
mkdir vuepress-demo
cd vuepress-demo
```

##### 初始化项目，建立并编辑 package.json



```kotlin
npm init -y
```

进入package.json，修改脚本内容



```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

![img](./images/13878898-b6764769e9f2410a.png)

##### 建立基本目录



```ruby
vuepress-demo
├─package.json
├─docs
|  ├─README.md
|  ├─.vuepress
|  |     ├─config.js
|  |     ├─public
|  |     |   └favicon.ico
```

##### 修改配置文件 - config.js



```java
module.exports = {
    title: 'Hello VuePress',
    description: 'Hello, my friend!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}
```

##### 修改README.md

VuePress 提供了对 [YAML front matter](https://links.jianshu.com/go?to=https%3A%2F%2Fjekyllrb.com%2Fdocs%2Ffrontmatter%2F) 开箱即用的支持，我们可以模仿vuepress首页进行如下优化：



```bash
---
home: true
heroImage: /favicon.ico
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present xxxxxx
---
```

##### 运行项目



```undefined
vuepress dev docs
```

运行上述代码，最后会提示预览的网址[http://localhost:8080/](https://links.jianshu.com/go?to=http%3A%2F%2Flocalhost%3A8080%2F)（端口号可根据配置进行修改[https://vuepress.vuejs.org/zh/config/#port](https://links.jianshu.com/go?to=https%3A%2F%2Fvuepress.vuejs.org%2Fzh%2Fconfig%2F%23port)）
 打开网址，我们就可以看到如下画面：

![img](./images/13878898-dfb59b1bd0fbe464.png)



README.md中的内容已完美呈现！

##### 配置导航

首先在docs目录下建立文件



![img](./images/13878898-de12112568938f41.png)



每个文件夹下的README.md就是当前目录的内容；
 让我们通过config.js文件配置相应导航



```css
themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'English', link: '/language/english' }
            ]
          },
          { text: 'External', link: 'https://www.baidu.com' },
        ]
    }
```

为guide文件下的README.md添加内容：



```bash
## This is guide
content...

### title3
content...

### title3-01

## small title
content...
```

运行项目点击导航Guide，或是通过Home页点击“快速上手”会看到如下画面：



![img](./images/13878898-c3d63b16024b3c31.png)



此时我们能够看到guide内容已成功显示，点击Lanuages能看到下拉，点击External会跳转到百度；

##### 配置侧边栏

依旧在config.js文件下的themeConfig属性下添加：



```bash
sidebarDepth: 2,
sidebar: [
  {
    title: 'Guide',
    collapsable: false,
    children: ['/guide/']
  }         
]
```

注：通过 themeConfig.sidebarDepth 来修改它的行为。默认的深度是 1，它将提取到 h2 的标题，设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。

配置好后，运行项目



![img](./images/13878898-2939d56d4adcc775.png)

##### 总结

通过上述操作，本项目已成功完成了技术文档的基本模型，如更个性化的配置可通过官网按需求优化；
 到此，本文结束~

