import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../pages/Checkout.vue')
  },
  {
    path: '/checkout/:orderId',
    name: 'CheckoutSuccess',
    component: () => import('../pages/CheckoutSuccess.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../pages/Orders.vue')
  },
  {
    path: '/orders/:id',
    name: 'Order',
    component: () => import('../pages/Order.vue'),
    props: true
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../pages/Privacy.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../pages/Shop.vue')
  },
  {
    path: '/shop/:category',
    name: 'Category',
    component: () => import('../pages/ShopCategory.vue'),
    props: true
  },
  {
    path: '/shop/:category/:product',
    name: 'Product',
    component: () => import('../pages/ShopProduct.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
