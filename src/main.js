import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用vant-ui
import '@/plugins/vant-ui'
import '@/plugins/common'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
