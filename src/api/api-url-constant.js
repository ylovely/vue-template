/**
 * Here are the SERVER_API urls definition.
 * @note: axios is not support dynamic url, so you can use an prefix ':' to define the dynamic url params, and use the reg express to replace them later where you use the URL.
 * @Author yeeyoung
 */
const API_URLS = {
  LOGIN: '/api/login',
  FETCH_OR_CREATE_OR_UPDATE_USERS: '/api/users',
  FETCH_OR_DELETE_USER: '/api/users/:id'
}

export default API_URLS
