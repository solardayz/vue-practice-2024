import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routerModules from './router/09_modules.js'
import store from './store'
import mixin from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
Vue.use(VueSweetalert2)

new Vue({
  router,
  routerModules,
  store,
  mixin,
  render: (h) => h(App)
}).$mount('#app')
