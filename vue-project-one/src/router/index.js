import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpearmenView from '../views/SpearmenView.vue'
import MenAtArmsView from '../views/MenAtArmsView.vue'
import KnightView from '../views/KnightView.vue'
import UnitShowCase from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/spearmen',
      name: 'spearmen',
      component: SpearmenView

    },
    {
      path: '/MAA',
      name: 'MAA',
      component: MenAtArmsView 
    },
    {
      path: '/Knight',
      name: 'Knight',
      component: KnightView
    },
    {
      path: '/Unit',
      name: 'Unit',
      component: UnitShowCase
    }
    
  ]
})

export default router
