import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routerModules from './router/09_modules.js'
import store from './store'
import mixin from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import { LoadingPlugin } from 'vue-loading-overlay'

import 'sweetalert2/dist/sweetalert2.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'vue-loading-overlay/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(LoadingPlugin)

new Vue({
  router,
  routerModules,
  store,
  mixin,
  render: (h) => h(App)
}).$mount('#app')
