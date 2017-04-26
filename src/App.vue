<template>
  <div>
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tebItem">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tebItem">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tebItem">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default{
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((responce) => {
        responce = responce.body
        if (responce.errno === ERR_OK) {
          this.seller = responce.data
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import "common/stylus/mixin.styl"
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tebItem
      flex 1
      text-align center
      a
        display block
        color rgb(77, 85, 93)
        font-size 28px
        &.v-link-active
          color rgb(240, 20, 20)
</style>
