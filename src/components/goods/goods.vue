<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type > 0" :class="classMap[item.type]" class="icon"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li class="food-list" v-for="item in goods">
          <!-- 标题-->
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px">
              <div class="icon">
                <!--图片-->
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <!--商品名称-->
                <div class="name">{{food.name}}</div>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="newPrice">¥{{food.price}}</span>
                  <span class="oldPrice" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      this.$http.get('/api/goods').then((responce) => {
        responce = responce.body
        if (responce.errno === ERR_OK) {
          this.goods = responce.data
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background-color #f3f5f7
      .menu-item
        display table
        width 56px
        height 54px
        padding 0 12px
        line-height 14px
        .icon
          display inline-block
          vertical-align middle
          width 12px
          height 13px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display table-cell
          width 56px
          border-1px(rgba(7,17,27,0.1))
          vertical-align middle
          font-size 12px
    .foods-wrapper
      flex 1
      .food-list
        .title
          background-color #f3f5f7
          padding-left 14px
          line-height 26px
          border-left 2px solid #d9dde1
          font-size 12px
          color rgb(147,153,159)
        .food-item
          display flex
          margin 18px
          padding-bottom 18px
          border-1px(rgba(7,17,27,0.1))
          &:last-child
            border-none()
            margin-bottom 0
          .icon
            flex 0 0 57px
            margin-right 10px
            img
              border-radius 4px
          .content
            flex 1
            .name
              line-height 14px
              font-size 14px
              color rgb(7,17,27)
              padding 2px 0 8px 0
            .desc
              line-height 10px
              font-size 10px
              color rgb(147,153,159)
              margin-bottom 8px
            .extra
              line-height 10px
              font-size 10px
              color rgb(147,153,159)
              .count
                margin-right 12px
            .price
              line-height 24px
              .newPrice
                font-size 14px
                color rgb(240,20,20)
                font-weight 700
              .oldPrice
                font-size 10px
                color rgb(147,153,159)
                font-weight 700


</style>
