<template>
  <div class="articleInfo-wrap">
    <div class="articleInfo">
      <div class="info">
        <div
          class="author iconfont icon-touxiang"
          title="作者"
          v-if="articleInfo.author"
        >
          <a
            :href="articleInfo.author.href || articleInfo.author.link"
            v-if="
              articleInfo.author.href ||
              (articleInfo.author.link &&
                typeof articleInfo.author.link === 'string')
            "
            target="_blank"
            class="beLink"
            title="作者"
            >{{ articleInfo.author.name }}</a
          >
          <a v-else href="javascript:;">{{
            articleInfo.author.name || articleInfo.author
          }}</a>
        </div>
        <div
          class="date iconfont icon-riqi"
          title="创建时间"
          v-if="articleInfo.date">
          <a href="javascript:;">{{ articleInfo.date }}</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleInfo: {}
    }
  },
  created () {
    this.articleInfo = this.getPageInfo()
  },
  watch: {
    '$route.path' () {
      this.articleInfo = this.getPageInfo()
    }
  },
  methods: {
    getPageInfo () {
      const pageInfo = this.$page

      const author = pageInfo.frontmatter.author || this.$themeConfig.author // 作者
      let date = (pageInfo.frontmatter.date || '').split(' ')[0] // 文章创建时间

      // 获取页面frontmatter的分类（碎片化文章使用）
      const { categories } = this.$frontmatter

      return {
        date,
        author,
        categories
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
@require '../styles/wrapper.styl'

.articleInfo-wrap
  @extend $wrapper
  position relative
  z-index 1
  color #888
  .articleInfo
    overflow hidden
    font-size 0.92rem
    .breadcrumbs
      margin 0
      padding 0
      overflow hidden
      display inline-block
      line-height 2rem
      @media (max-width 960px)
        width 100%
      li
        list-style-type none
        float left
        padding-right 5px
        &:after
          content '/'
          margin-left 5px
          color #999
        &:last-child
          &:after
            content ''
        a
          color #888
          &:before
            font-size 0.92rem
          &:hover
            color $accentColor
        .icon-home
          text-decoration none
    .info
      float right
      line-height 32px
      @media (max-width 960px)
        float left
      div
        float left
        margin-left 20px
        font-size 0.8rem
        @media (max-width 960px)
          margin 0 20px 0 0
        &:before
          margin-right 3px
        a
          color #888
          &:hover
            text-decoration none
        a.beLink
          &:hover
            color $accentColor
            text-decoration underline
</style>
