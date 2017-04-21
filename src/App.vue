<template>
  <div>
    <v-header></v-header>
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

  export default{
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
    border-1px(rgba(7,17,27,0.1))
    .tebItem
      flex 1
      text-align center
      a
        display block
        color rgb(77,85,93)
        font-size 28px
        &.v-link-active
          color rgb(240,20,20)
</style>
