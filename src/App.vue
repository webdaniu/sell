<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tebItem">商品</div>
      <div class="tebItem">评论</div>
      <div class="tebItem">商家</div>
    </div>
    <div class="content">i am content</div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue';

export default{
  components: {
    'v-header': header
  }
};
</script>

<style rel="stylesheet/stylus" lang="stylus">
  #app
    .tab
      display flex
      height 40px
      line-height 40px
      width 100%
      .tebItem
        flex 1
        text-align center
</style>
