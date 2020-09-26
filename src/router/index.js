import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/landingPage.vue'
import signup from '../views/signupPage.vue'
import dashboard from '../views/dashboard.vue'
import diagnoses from '../views/diagnoseView.vue'
import result from '../views/resultView.vue'
import dashboardApp from '../components/dashboardApp.vue'
import about from '../views/aboutView.vue'

import hello from '../components/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404 PAGE',
    component: hello
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { Auth: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
    meta: { Auth: true }
  },
  {
    path: '/',
    component: dashboard,
     meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: dashboardApp,
        meta: { requiresAuth: true }
      },
      {
        path: 'diagnoses',
        component: diagnoses,
        meta: { requiresAuth: true }
      },
      {
        path: 'result',
        component: result,
        meta: { requiresAuth: true }
      },
      {
        path: 'about',
        component: about,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const Access_me = document.cookie.includes('A_air')
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!Access_me) {
      next({
        path: '/login',
      })
    } else {next()}
  } else {
    next() // make sure to always call next()!
  }

  if (to.matched.some(record => record.meta.Auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (Access_me) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
