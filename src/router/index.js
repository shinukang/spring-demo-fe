import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post/list',
      name: 'post-list',
      component: () => import('@/view/post/PostList.vue'),
    },
    {
      path: '/post/create',
      name: 'post-create',
      component: () => import('@/view/post/PostCreate.vue'),
    },
  ],
})

export default router
