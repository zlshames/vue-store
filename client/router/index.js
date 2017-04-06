import Vue from 'vue'
import Router from 'vue-router'
import Shop from 'views/Shop'
import About from 'views/About'
import Faq from 'views/Faq'
import Contact from 'views/Contact'
import Checkout from 'views/Checkout'

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
      component: About,
      name: 'about'
    },
    {
      path: '/faq',
      component: Faq,
      name: 'faq'
    },
    {
      path: '/contact',
      component: Contact,
      name: 'contact'
    },
    {
      path: '/checkout',
      component: Checkout,
      name: 'checkout'
    }
  ]
})
