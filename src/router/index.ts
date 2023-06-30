import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
import { setupRouterGuard } from './guard'
import { BasicLayout } from '../layouts/index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: 'home',
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('~/src/views/home.vue'),
      },
      {
        path: 'testNet',
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

const { VITE_HASH_ROUTE = 'N', VITE_BASE_URL } = import.meta.env
export const router = createRouter({
  history:
    VITE_HASH_ROUTE === 'Y'
      ? createWebHashHistory(VITE_BASE_URL)
      : createWebHistory(VITE_BASE_URL),
  routes,
})
// 安装vue路由
export async function setupRouter(app: App) {
  // 添加路由守卫
  setupRouterGuard(router)
  app.use(router)
  await router.isReady() //https://router.vuejs.org/zh/api/index.html#isready
}
