import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import {Button} from 'mint-ui'
import router from './router'
import store from './vuex/store'
import Header from './commponents/Header/Header.vue'
import Star from './commponents/star/star.vue'
import i18n from './i18n'
import './validate'
import * as API from '@/api'
import './mock/mock-server'

// 将API对象挂载到Vue的原型对象上
Vue.prototype.$API = API

Vue.config.productionTip = false

Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component(Button.name, Button)  // mt-button

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
