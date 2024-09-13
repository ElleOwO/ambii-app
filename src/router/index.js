import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Messenger from '../views/Messenger/Messenger.vue'
import MessengerDash from '../views/Messenger/MessengerDash.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/messenger',
    name: 'Messenger',
    component: Messenger,
  },
  {
    path: '/messengerdash',
    name: 'MessengerDash',
    component: MessengerDash,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
