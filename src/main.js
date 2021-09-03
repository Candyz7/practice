// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import http from './common'
import { Form, Field, Button, Icon, NavBar, Toast, Notify, Cell, CellGroup, RadioGroup, Radio, Checkbox, CheckboxGroup, Search, Dialog, List, PullRefresh } from 'vant'
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Notify)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Search)
Vue.use(Dialog)
Vue.use(List)
Vue.use(PullRefresh)
Vue.prototype.$axios = axios
Vue.prototype.$axiosHttp = http

export const eventHub = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
