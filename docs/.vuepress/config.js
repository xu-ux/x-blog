const themeConfig = require("./config/themeConfig.js")
module.exports = {
    // github pages路径
    base:'/x-blog/',
    //title: 'Hello VuePress',
    description: 'Just playing around',
    // 代码行号
    markdown: {
        lineNumbers: true,
    },
    // 插件
    plugins:
        [
            '@vuepress/back-to-top',
            require('./my-plugin.js'),
            // https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html
            ["vuepress-plugin-auto-sidebar", {
                sidebarDepth: 2,
                ignore: [
                    {
                        menu: "/images.assets/",
                        regex: "image-*"
                    }
                ]
            }]
        ],
    themeConfig
}