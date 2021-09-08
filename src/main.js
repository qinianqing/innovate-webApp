import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from '@/plugins/filter'
// 引入初始化样式
import 'normalize.css/normalize.css'
// 引用vant-ui
import '@/plugins/vant-ui'
// 基础插件引用
import '@/plugins/common'
// 定制主题色
import '@/assets/styles/_theme.scss'
// jsonp跨域处理
import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
