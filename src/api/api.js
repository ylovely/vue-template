/**
 * Here are the server APIs invoked definition.
 * We recommend you use the axios to access server api.
 * It is conveniently and simple to perform RESTful http requests and responses.
 * You *MUST* send requests by using different http method ('get' for query, 'post' for add, 'put' for update and 'delete' for delete) instead of using different api_urls.
 * Notice it to the server-side developers.
 * @Author yeeyoung
 */
import $axios from './axios'
import API_URLS from './api-url-constant'

export function loginApi(data) {
  return $axios.post(API_URLS.LOGIN)
}

export function fetchUsersApi() {
  return $axios.get(API_URLS.FETCH_OR_CREATE_OR_UPDATE_USERS)
}

export function createUserApi(data) {
  return $axios.post(API_URLS.FETCH_OR_CREATE_OR_UPDATE_USERS, { ...data })
}

export function updateUserApi(data) {
  return $axios.put(API_URLS.FETCH_OR_CREATE_OR_UPDATE_USERS, { ...data })
}

export function deleteUserApi(id) {
  return $axios.delete(API_URLS.FETCH_OR_DELETE_USER.replace(/:id/, id))
}

export function fetchUserApi(id) {
  return $axios.get(API_URLS.FETCH_OR_DELETE_USER.replace(/:id/, id))
}
