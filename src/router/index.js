import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Project from '../pages/Project.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects/:slug', name: 'project', component: Project, props: true },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
