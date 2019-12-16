import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import App from './App.vue'
import 'lib-flexible'
import router from './router'
import store from './vuex/store'
import Header from './commponents/Header/Header.vue'
import Star from './commponents/star/star.vue'

Vue.config.productionTip = false

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  // 根据name属性名称映射对应的中文提示名称
  attributes: {
    phone: '手机号',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码'
  }
})

Vue.component('Header',Header)
Vue.component('Star',Star)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
