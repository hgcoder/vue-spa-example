
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import './style/reset.css'
import 'iview/dist/styles/iview.css'
import './style/coverLib.css'
import store from './store/index'
import router from './router'
import Promise from 'promise-polyfill'
if (!window.Promise) {
  window.Promise = Promise
}
Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
