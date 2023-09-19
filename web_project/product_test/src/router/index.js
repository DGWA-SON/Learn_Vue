import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Product',
    name: 'Product.list',
    component: () => import('../views/Product/List.vue'),
  },
  {
    path: '/Product/form',
    name: 'Product.form',
    component: () => import('../views/Product/Form.vue'),
  },
  {
    path: '/Product/edit/:id',
    name: 'Product.edit',
    component: () => import('../views/Product/Form.vue'),
  },
  {
    path: '/users',
    name: 'users.list',
    component: () => import('../views/users/List.vue'),
  },
  {
    path: '/users/form',
    name: 'users.form',
    component: () => import('../views/users/Form.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
