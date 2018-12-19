/**
 * You can export all Vuex store modules here,
 * and you can also define global state, getters, mutations and actions and export them here.
 * @Author yeeyoung
 */
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  showLoading: false
}

const getters = {}

const mutations = {
  updateShowLoading(state, flag) {
    state.showLoading = flag
  }
}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    login,
    user
  }
})
