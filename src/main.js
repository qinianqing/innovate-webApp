import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icons/index'
import { Cell, CellGroup } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
