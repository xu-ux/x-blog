<template>
  <div class="vuepress-comment-container">
    <Vssue :title="articleTitle"></Vssue>
  </div>
</template>

<script>
export default {
  name: "Comment",
  computed:{
    articleTitle() {
      return this.$page.title
    },
  }
}
</script>

<style lang="stylus">
.vuepress-comment-container
  max-width $contentWidth
  margin 0 auto
</style>