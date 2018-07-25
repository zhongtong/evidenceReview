import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/page/homePage'
import tagLibrary from '@/page/tagLibrary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/tagLibrary',
      name: 'tagLibrary',
      component: tagLibrary
    }
  ]
})
