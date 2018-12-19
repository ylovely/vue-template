/**
 * Here is the user module of the store, it defines and export namespaced state, getters, mutations, actions.
 * We recommend to mange all the app status in store instead of defines in data props of component.
 * @Author yeeyoung
 */
import { fetchUsersApi, createUserApi, updateUserApi } from '@/api'

const state = {
  users: [],
  userDetail: {}
}

const getters = {}

const mutations = {
  updateUsers(state, users) {
    state.users = users
  },
  updateUserDetail(state, userDetail) {
    state.userDetail = userDetail
  }
}

const actions = {
  async fetchUsers({ commit }) {
    try {
      const { data: users } = await fetchUsersApi()
      commit('updateUsers', users)
    } catch (e) {
      // deal with the error!!! you can use Alert or Message (or others) component with UI framework to show the error message to people.
      // Remember, every async method MUST has error handler!!!
      // Message.error(e)  or
      // Alert.error('fetch users failed!')
    }
  },
  async createUser({ state, commit }, data) {
    try {
      const { data: user } = await createUserApi(data)
      commit('updateUsers', [...state.users, user])
    } catch (e) {
      // Message.error(e)
    }
  },
  async updateUser({ state, commit }, { user, index }) {
    try {
      const { data: updatedUser } = await updateUserApi(user)
      const temp = [...state.users]
      temp.splice(index, 1, updatedUser)
      commit('updateUsers', temp)
    } catch (e) {
      // Message.error(e)
    }
  },
  async deleteUser({ state, commit }, { id, index }) {
    try {
      await updateUserApi(id)
      const temp = [...state.users]
      temp.splice(index, 1)
      commit('updateUsers', temp)
    } catch (e) {
      // Message.error(e)
    }
  },
  async fetchUserDetail({ state, commit }, id) {
    try {
      const { data: userDetail } = await updateUserApi(id)
      commit('updateUserDetail', userDetail)
    } catch (e) {
      // Message.error(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
