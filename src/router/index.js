import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import HomeItem from '../views/Home/HomeItme'
import Bookrack from '../views/Home/Bookrack'
import Find from '../views/Home/Find'
import Gengxing from '../views/Home/Gengxing'
import My from '../views/Home/My'
import App from '../views/App'
import Details from '../views/Details'
import Login from '../views/Login'
import Ranking from '../views/Ranking'
import Rigeng from '../views/Rigeng'
import Sort from '../views/Sort'
import Xinzuo from '../views/Xinzuo'
import Search from '../views/Search'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'homeitem',
          component: HomeItem

        },
        {
          path: 'bookrack',
          component: Bookrack
        },
        {
          path: 'find',
          component: Find
        },
        {
          path: 'gengxing',
          component: Gengxing
        },
        {
          path: 'my',
          component: My
        }
        // { path: '/', redirect: 'homeitem' }
      ]
    },
    { path: '/login', component: Login },
    { path: '/ranking', component: Ranking },
    { path: '/rigeng', component: Rigeng },
    { path: '/search', component: Search },
    { path: '/sort', component: Sort },
    { path: '/xinzuo', component: Xinzuo },
    { path: '/app', component: App },
    { path: '/details', component: Details },
    { path: '/', redirect: 'home/homeitem' }
  ]
})

export default router
