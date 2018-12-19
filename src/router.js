/**
 * Here are the routers definition.
 * You can use arrow function to define a route component,
 * it generates a separate chunk (xxx.[hash].js) for this route which is lazy-loaded when the route is visited.
 * @Author yeeyoung
 */
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home')
const Login = () => import('./views/login/Login')
const HelloWorld = () => import('./views/hello-world/HelloWorld')
const User = () => import('./views/user/User')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      redirect: '/index/hello-world',
      children: [
        {
          path: 'hello-world',
          name: 'helloWorld',
          component: HelloWorld
        },
        {
          path: 'users',
          name: 'users',
          component: User
        }
      ]
    }
  ]
})
