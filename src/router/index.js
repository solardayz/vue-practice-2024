import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheckboxView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/01_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/02_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/02_event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/02_event/EventKeyView.vue'
      )
  },
  {
    path: '/extra/if',
    name: 'RenderingIfView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/03_extra/RenderingIfView.vue'
      )
  },
  {
    path: '/extra/show',
    name: 'RenderingShowView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/03_extra/RenderingShowView.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'ComputedView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/03_extra/ComputedView.vue'
      )
  },
  {
    path: '/extra/lifecycle',
    name: 'LifecycleHookView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/03_extra/LifecycleHookView.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'WatchView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/03_extra/WatchView.vue'
      )
  },
  {
    path: '/reuse/pagetitle',
    name: 'PageView',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/04_reuse/PageView.vue'
      )
  },
  {
    path: '/reuse/parent',
    name: 'ParentView',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/04_reuse/ParentView.vue'
      )
  },
  {
    path: '/advanced/directive',
    name: 'CustomDirectivetView',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/05_advanced/CustomDirectiveView.vue'
      )
  },
  {
    path: '/advanced/mixin',
    name: 'MixinView',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/05_advanced/MixinView.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
