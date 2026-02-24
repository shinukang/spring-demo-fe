import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post/create',
      name: 'post-create',
      component: () => import('@/view/post/PostCreate.vue'),
    },
    {
      path: '/post/list',
      name: 'post-list',
      component: () => import('@/view/post/PostList.vue'),
    },
    {
      path: '/post/read/:postId',
      name: 'post-read',
      component: () => import('@/view/post/PostRead.vue'),
    },
  ],
})

export default router
