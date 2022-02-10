import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import('../views/home/Home.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: import('../views/about.vue')
      },
      {
        path: '/news',
        name: 'news',
        component: import('../views/news.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
