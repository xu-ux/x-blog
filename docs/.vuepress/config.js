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
    plugins: ['@vuepress/back-to-top'],
    themeConfig
}