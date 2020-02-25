import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import business from '@/components/business'
import scase from '@/components/scase'
import course from '@/components/course'
import aboutUs from '@/components/aboutUs'
import fileDetail from '@/components/file_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/scase',
      name: 'scase',
      component: scase
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/fileDetail',
      name: 'fileDetail',
      component: fileDetail
    }
  ]
})
