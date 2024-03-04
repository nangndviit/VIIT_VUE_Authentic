import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailsView from '@/views/page/DetailsView.vue'
import ShoeView from '@/views/page/ShoeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/chi-tiet-san-pham',
      name: 'details',
      component: DetailsView
    },
    {
      path: '/product/tat-ca-giay',
      name: 'giay',
      component: ShoeView
    }
  ]
})

export default router
