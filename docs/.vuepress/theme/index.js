

// Theme API.
module.exports = (themeConfig, ctx) => {
  return {
    extend: '@vuepress/theme-default',

    plugins: [
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
      ]
    ]
  }

}
