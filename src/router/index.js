import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
// let vm = new Vue({
//   store
// })
let readme = resolve => require(['@/components/readme.vue'], resolve)
let tab = resolve => require(['@/components/tab.vue'], resolve)
let form = resolve => require(['@/components/form.vue'], resolve)
let editor = resolve => require(['@/components/editor.vue'], resolve)
let charts = resolve => require(['@/components/charts.vue'], resolve)
let upload = resolve => require(['@/components/upload.vue'], resolve)
let drag = resolve => require(['@/components/drag.vue'], resolve)
Vue.use(Router)
// 路由配置
let router = new Router({
  routes: [{
    path: '/readme',
    name: 'readme',
    component: readme
  }, {
    path: '/tab',
    name: 'tab',
    component: tab
  }, {
    path: '/form',
    name: 'form',
    component: form
  }, {
    path: '/editor',
    name: 'editor',
    component: editor
  }, {
    path: '/charts',
    name: 'charts',
    component: charts
  }, {
    path: '/upload',
    name: 'upload',
    component: upload
  }, {
    path: '/drag',
    name: 'drag',
    component: drag
  }, {
    path: '*',
    redirect: '/readme'
  }]
})
// 页面更新回调
router.afterEach(toRoute => {
  let path = toRoute.path
  let arr = []
  store.getters.navData.map((index, ele) => {
    if (index.path && (index.path === path)) {
      let obj = {
        name: index.name,
        path: index.path,
        id: index.id
      }
      arr.push(obj)
      return
    }
    if (!index.path) {
      let obj = {}
      index.list.map((index1, ele1) => {
        if (index1.path === path) {
          arr.push({name: index.name, path: ''})
          obj.name = index1.name
          obj.path = index1.path
          obj.id = index1.id
          arr.push(obj)
        }
      })
    }
  })
  store.dispatch({
    type: 'setBreadData',
    d: arr
  })
})
export default router
