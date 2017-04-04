import Vue from 'vue'
import Router from 'vue-router'
import Shop from '../views/Shop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Shop,
      name: 'shop'
    },
    {
      path: '/about',
      component: Shop,
      name: 'about'
    },
    {
      path: '/faq',
      component: Shop,
      name: 'faq'
    },
    {
      path: '/contact',
      component: Shop,
      name: 'contact'
    }
  ]
})
