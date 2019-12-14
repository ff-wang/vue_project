import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from './router'
import store from './vuex/store'
import Header from './commponents/Header/Header.vue'
Vue.config.productionTip = false

Vue.component('Header',Header)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
