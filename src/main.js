import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import routetr from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  routetr
}).$mount('#app')
