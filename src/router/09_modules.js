import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/modules/calendar',
    name: 'FullCalendarview',
    component: () =>
      import(
        /* webpackChunkName: "modules", webpackPrefetch:true */ '../views/09_modules/FullCalendarview.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
