import Vue from 'vue'
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  // localStorage，即本地存储 不清除缓存，登录的状态就会一直保存
  state: {
    user: {
      username: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.sessionStorage.setItem('user', JSON.stringify(user))
    }
  }
})
