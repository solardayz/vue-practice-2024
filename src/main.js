import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routerModules from './router/09_modules.js'
import store from './store'
import mixin from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import VueGoodTablePlugin from 'vue-good-table'

import 'sweetalert2/dist/sweetalert2.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apex-chart', VueApexCharts)

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(VueGoodTablePlugin)

new Vue({
  router,
  routerModules,
  store,
  mixin,
  render: (h) => h(App)
}).$mount('#app')
