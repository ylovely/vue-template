/**
 * Here is the entrance of App.
 * You can import some plugins that use very frequently and styles file on here.
 * You can choose element-ui or iView or etc.. UI framework,
 * import and Vue.use(xxx) on here, (don't forget to import the css file),
 * then you can use their components in every SingleFileComponent(SFC).
 * For more details, access the official site and reference.
 * @Author yeeyoung
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
