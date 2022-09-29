import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVueIcons } from 'bootstrap-vue'
import titleMixin from './plugins/titleMixin.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.use(BootstrapVueIcons)
Vue.mixin(titleMixin)