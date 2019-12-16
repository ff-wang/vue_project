import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from './router'
import store from './vuex/store'
import Header from './commponents/Header/Header.vue'
import Star from './commponents/star/star.vue'
import i18n from './i18n'
import './validate'
Vue.config.productionTip = false

Vue.component('Header',Header)
Vue.component('Star',Star)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
