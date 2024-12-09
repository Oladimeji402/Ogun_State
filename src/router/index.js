import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsPage from '../views/Newpage.vue'
import contactView from "../views/contactView.vue"
import OpenVeiw from '@/views/OpenVeiw.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/newsPage',
      name: 'newsPage',
      component: NewsPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactView,
    },
    {
      path: '/openVeiw',
      name: 'openVeiw',
      component: OpenVeiw,
    }
  ],
})

export default router
