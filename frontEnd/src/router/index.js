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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    //meta: {requiresAuth: true},
    children:[
      {
        path: 'products-dashboard',
        name: 'dashboardProducts',
        component: () => import('../views/products/CrudProducts.vue')
      },
      {
        path: 'categories-dashboard',
        name: 'dashboardCategories',
        component: () => import('../views/categories/CrudCategories.vue')
      },
      {
        path: 'team',
        name: 'team',
        component: Team
      },
      {
        path: 'products',
        name: 'Listproducts',
        component: () => import('../views/products/ListProducts.vue')
      },
    ] 
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = localStorage.getItem('token');
    if (!token) {
      next({
        path: '/login',
        //query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  }
})
 */

export default router
