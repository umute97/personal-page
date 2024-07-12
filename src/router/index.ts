import ComingSoonVue from '@/views/ComingSoon.vue'
import HomeVue from '@/views/Home.vue'
import PhotographyVue from '@/views/Photography.vue'
import Showcase from '@/views/Showcase.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'NotFound',
      path: "/:catchAll(.*)",
      redirect: 'Home'
    },
    {
      path: '/showcase',
      name: 'Showcase',
      component: Showcase,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ComingSoonVue,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeVue
    },
    {
      path: '/photography',
      name: 'Photography',
      component: PhotographyVue
    },
  ]
})

export default router
