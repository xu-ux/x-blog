const nav = require('./nav.js');
const sidebar = require("./sidebar.js")

module.exports = {
    // 导航栏log
    logo: '/img/logoS.png',
    // 导航栏右侧
    nav,
    // 侧边栏
    //sidebar,
    // 目录深度
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: '上次更新',
    // 上 / 下一篇链接


    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/xu-ux/x-blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '仓库',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    //docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
    footer: {
        // 页脚信息
        createYear: 2021, // 博客创建年份
        copyrightInfo:
            'Xu-ux | <a href="https://github.com/xu-ux" target="_blank">GitHub</a>',
    }
}