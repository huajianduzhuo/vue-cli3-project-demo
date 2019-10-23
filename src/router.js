import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/inputtip',
      name: 'inputtip',
      component: () => import(/* webpackChunkName: "about" */ './views/InputTips.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
    }
  ]
})
