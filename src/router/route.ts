import type { RouteRecordRaw } from 'vue-router'
import layout from '@/layouts/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('~/src/views/home.vue'),
      },
      {
        path: '/testNet',
        name: 'testNet',
        component: () => import('~/src/views/testNet.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/_inner/404.vue'),
    meta: {
      title: '错误404',
    },
  },
]
