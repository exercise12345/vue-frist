import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import AppIndex from '../components/home/Appindex.vue'
import Home from '../components/Home.vue'
import LibraryIndex from '../pages/library/LibraryIndex.vue'

Vue.use(Router)

export default new Router({
  // 把 Vue 中配置的路由从默认的 hash 模式切换为 History 模式
  mode: 'history',
  routes: [

    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
