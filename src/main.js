import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routerModules from './router/09_modules.js'
import store from './store'
import mixin from './mixins'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

Vue.config.productionTip = false

new Vue({
  router,
  routerModules,
  store,
  mixin,
  render: (h) => h(App)
}).$mount('#app')
