import { createRouter, createWebHistory } from 'vue-router'
import { MainRoutes } from '../modules/main/router'
import { DetailsRoutes } from './../modules/details/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...MainRoutes,
    ...DetailsRoutes
  ]
})

export default router
