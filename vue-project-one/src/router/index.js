import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpearmenView from '../views/SpearmenView.vue'
import MenAtArmsView from '../views/MenAtArmsView.vue'
import KnightView from '../views/KnightView.vue'
import ArcherView from '../views/ArcherView.vue'
import ArbaletrierView from '../views/ArbaletrierView.vue'
import HandcannoneerView from '../views/HandcannoneerView.vue'
import UnitShowCase from '../views/UnitShowCase.vue'
import UnitCard from '../views/UnitCard.vue'

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
      path: '/Archer',
      name: 'Archer',
      component: ArcherView
    },
    {
      path: '/arbaletrier',
      name: 'arbaletrier',
      component: ArbaletrierView
    },
    {
      path: '/handcannoneer',
      name: 'handcannoneer',
      component: HandcannoneerView
    },
    {
      path: '/unitshowcase',
      name: 'UnitShowCase',
      component: UnitShowCase
    },
    {
      path: '/unit/:id',
      name: 'unit',
      component: UnitCard,
      props: true
    }
    
    
  ]
})

export default router
