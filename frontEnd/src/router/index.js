import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LoginRegister.vue'
import Team from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Login
  },
  
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/products/dashboard',
    name: 'dashboard',
    component: () => import('../views/products/CrudProducts.vue')
  },
  {
    path: '/products',
    name: 'Listproducts',
    component: () => import('../views/products/ListProducts.vue')
  },
  {
    path: '/categories/dashboard',
    name: 'dashboard',
    component: () => import('../views/categories/CrudCategories.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
