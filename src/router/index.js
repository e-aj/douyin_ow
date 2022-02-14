import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import('../views/home/Home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: import('../views/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: import('../views/about.vue')
      },
      {
        path: '/news',
        name: 'news',
        component: import('../views/news.vue')
      },
      {
        path: '/business',
        name: 'business',
        component: import('../views/business.vue')
      },
      {
        path: '/cooperation',
        name: 'cooperation',
        component: import('../views/cooperation.vue')
      },
      {
        path: '/details',
        name: 'details',
        component: import('../views/details.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
