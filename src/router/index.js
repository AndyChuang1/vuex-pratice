import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Counter from '@/components/Counter'
import APIGetter from '@/components/APIGetter'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/APIGetter',
      name: 'APIGetter',
      component: APIGetter
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
