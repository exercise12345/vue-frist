// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 添加ElementUI插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

// 设置反向代理，前端请求默认发送到 http://localhost:8081/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8081/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render是一个方法，自带一个形参createElement，这个参数也是一个方法，是用来创建vue 节点的，也就是html模板的，然后渲染(render)到指定的节点上
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
