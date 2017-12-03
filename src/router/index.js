import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const All = () => import('../views/All.vue');

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: All },
      { path: '/', redirect: '/' }
    ]
  })
}
