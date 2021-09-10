const themeConfig = require("./config/themeConfig.js")
module.exports = {
    // github pages路径
    base: '/x-blog/',
    //title: 'Hello VuePress',
    description: 'Just playing around',
    // 代码行号
    // https://github.com/markdown-it/markdown-it https://www.npmjs.com/search?q=keywords:markdown-it-plugin
    markdown: {
        lineNumbers: true,
    },
    // 插件
    // https://github.com/vuepress/awesome-vuepress
    // https://vuepress.vuejs.org/zh/plugin/
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
            }],
            // https://github.com/dongyuanxin/vuepress-plugin-comment
            // https://github.com/JoeyBling/vuepress-plugin-mygitalk
            // https://xxholly32.github.io/vuepress-plugin-gitalk-maker
            // https://vssue.js.org/zh/guide/vuepress.html

            [
                '@vuepress/last-updated', {
                    /*transformer: (timestamp, lang) => {
                        // 不要忘了安装 moment
                        const moment = require('moment')
                        moment.locale(lang)
                        return moment(timestamp).fromNow()
                        }
                    },*/
                    dateOptions: {
                        timeZone: 'Asia/Shanghai',
                        hour12: false
                    }
                }
            ],
            // https://github.com/vxhly/vuepress-plugin-one-click-copy#readme
            [
                'one-click-copy', {
                    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                        copyMessage: 'Copied successfully!', // default is 'Copied successfully!'
                        toolTipMessage: 'Copy to clipboard', // default is ''Copy to clipboard'
                        duration: 1000, // prompt message display time
                }
            ]
            // https://superbiger.github.io/vuepress-plugin-tabs
            // https://github.com/vxhly/vuepress-plugin-one-click-copy#readme
        ],
    themeConfig
}