/*global Vue*/
import Router from 'vue-router'
import Home from '@/page/Home'
import IndexSearch from '@/components/IndexSearch'
import OrderSearch from '@/components/OrderSearch'
import IndustryNav from '@/components/IndustryNav'

Vue.use(Router)

module.exports = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
          {
              path: '/',
              name: 'IndexSearch',
              component: IndexSearch,
          },
          {
              path: '/order',
              name: 'OrderSearch',
              component: OrderSearch,
          },
          {
              path: '/industry',
              name: 'IndustryNav',
              component: IndustryNav,
          }
      ]
    }
  ]
})
