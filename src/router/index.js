import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsPage from '../views/Newpage.vue'
import contactView from "../views/contactView.vue"
import OpenView from '@/views/OpenView.vue'
import EmergencyView from '../views/EmergencView.vue'


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
      path: '/openView',
      name: 'openView',
      component: OpenView,
    },
    {
      path: '/emergency',
      name: 'EmergencyView',
      component: EmergencyView,
    }
  ],
})

export default router
