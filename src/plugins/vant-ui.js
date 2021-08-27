/*
 * @Description:
 * @Author: 惜神
 * @Date: 2021-08-22 11:51:13
 */
import Vue from 'vue'
import { Cell, CellGroup, Button, Lazyload, Swipe, SwipeItem } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Swipe)
Vue.use(SwipeItem)
