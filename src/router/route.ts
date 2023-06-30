import { BasicLayout } from '../layouts/index'
import type {RouteRecordRaw} from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: BasicLayout,
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
    component: () => import('@/views/inherit-page/404.vue'),
    meta: {
      title: '错误404',
    },
  },
]