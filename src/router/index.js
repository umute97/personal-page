import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photography from '../views/Photography.vue'
import ComingSoon from '../views/ComingSoon.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/skillset',
    name: "ComingSoon",
    component: ComingSoon,
  },
  {
    path: '/contact',
    name: "Contact",
    component: Contact,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
