/**
 * There is the global axios configuration.
 * You can config the baseUrl, header information and etc here.
 * You can do something before request is sent and do something with response data in the interceptors,
 * like validating authorization and updating the global Loading component's status.
 * @Author yeeyoung
 */
import axios from 'axios'
import router from '@/router'
import store from '@/store'

const $axios = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:8080' : 'http://127.0.0.1:3000'
})

const AUTH = 'Authorization'

$axios.interceptors.request.use(config => {
  // Do something before request is sent, like validating the auth token...
  const auth = sessionStorage.getItem(AUTH)
  if (auth) {
    config.headers[AUTH] = auth
    store.commit('updateShowLoading', true)
    return config
  } else {
    router.replace('/login')
  }
}, error => {
  store.commit('updateShowLoading', false)
  return Promise.reject(error)
})

$axios.interceptors.response.use(response => {
  // Do something with response data
  store.commit('updateShowLoading', false)
  return response
}, error => {
  store.commit('updateShowLoading', false)
  return Promise.reject(error)
})

export default $axios
