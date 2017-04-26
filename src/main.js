import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'
import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

// 注册组件
let app = Vue.extend(App)

// 实例化路由
let route = new VueRouter()

// 配置路由
route.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

// 注入组件
route.start(app, '#app')

// 默认显示路由
route.go('/goods')
