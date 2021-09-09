const themeConfig = require("./config/themeConfig.js")
module.exports = {
    // github pages路径
    base: '/x-blog/',
    //title: 'Hello VuePress',
    description: 'Just playing around',
    // 代码行号
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
            // https://vssue.js.org/zh/guide/vuepress.html
            [
                '@vssue/vuepress-plugin-vssue', {
                    // 设置 `platform` 而不是 `api`
                    platform: 'github',
                    // 其他的 Vssue 配置
                    owner: 'xu-ux',
                    repo: 'x-blog',
                    clientId: '466a2d5e1b154e39d7cc',
                    clientSecret: 'b9dfd431510455ec5879be1b64e47b72829f3d86',
                },
            ],
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