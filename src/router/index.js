import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: 'home' */ '@/views/home')
const Order = () => import(/* webpackChunkName: 'order' */ '@/views/order')
const Center = () => import(/* webpackChunkName: 'center' */ '@/views/center')
const Index = () => import(/* webpackChunkName: 'index' */ '@/views/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/order',
        name: 'order',
        component: Order
      },
      {
        path: '/center',
        name: 'center',
        component: Center
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
