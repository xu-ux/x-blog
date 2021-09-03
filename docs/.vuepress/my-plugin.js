const readFileList = require('./util/fileUtils')

// https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-back-to-top
// https://vuepress.vuejs.org/zh/plugin/option-api.html
module.exports = (options, ctx) => {
    const { sourceDir, themeConfig, siteConfig } = ctx

    const sidebarData = readFileList(sourceDir)

    console.log(sidebarData)
    // if (sidebarData) {
    //     themeConfig.sidebar = sidebarData
    //     log(chalk.blue('tip ') + chalk.green('add sidebar data. 侧边栏数据成功生成。'))
    // } else {
    //     themeConfig.sidebar = 'auto'
    //     log(chalk.yellow('warning: fail to add sidebar data, switch to "auto". 未能添加侧边栏数据，将切换为“auto”。'))
    // }

    return {
        // ...
    }
}