import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetallePropiedad from '../views/DetallePropiedad.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detalle/:id',
    name: 'detalle',
    component: DetallePropiedad
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
