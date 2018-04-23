import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [{
      name: 'home',
      path: 'home',
      component: _import('home/index'),
    }]
  }]
})
