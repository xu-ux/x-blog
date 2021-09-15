<template>
  <div class="footer">
    <template v-if="footer">
      Copyright © {{ footer.createYear }}-{{ new Date().getFullYear() }}
      <span
          v-html="footer.copyrightInfo"
      >
      </span>
    </template>
    <div >{{ yiYan }}</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      yiYan:"世间最美好的事情莫过于睡觉",
    }
  },
  computed: {
    footer () {
      return this.$themeConfig.footer
    }
  },

  mounted () {

    fetch('https://v1.hitokoto.cn?c=i')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.yiYan = `${data.hitokoto} —— 《${data.from}》${data.from_who}`
        })
        .catch(console.error)
  }

}
</script>

<style lang='stylus'>
.footer
  //position absolute
  height 8rem
  padding 2rem 1.5rem 2rem
  text-align center
  line-height: 1.6rem;
  //color #666
  box-sizing border-box
  font-size 0.85rem

</style>