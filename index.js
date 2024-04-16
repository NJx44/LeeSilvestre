import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Inventory from '@/views/Inventory.vue'
import Transactions from '@/views/Transactions.vue'
import Pending from '@/views/Pending.vue'
import Logout from '@/views/Logout.vue'



const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/pending',
    name: 'Pending',
    component: Pending
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
