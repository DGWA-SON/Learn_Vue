import { createRouter, createWebHistory } from 'vue-router'
import LearningRes from '../components/learning-res/LearningRes.vue';
import AddingRes from '../components/learning-res/AddingRes.vue';

const routes = [
  {
    path: '/',
    name: 'LearningRes',
    component: LearningRes
  },
  {
    path: '/addingres',
    name: 'AddingRes',
    component: AddingRes
  },
  {
    path: '/edit/:id',
    name: 'EditRes',
    component: () => import('../components/learning-res/EditRes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
