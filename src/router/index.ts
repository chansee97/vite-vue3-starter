import type { App } from 'vue'
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import { routes } from './route'

const { VITE_BASE_URL } = import.meta.env

function setupRouterGuard() {
  const router = createRouter({
    history: createWebHashHistory(VITE_BASE_URL),
    routes,
  })

  router.beforeEach((_to, _from, next) => {
    next()
  })
  return router
}

// 安装vue路由
export async function setupRouter(app: App) {
  // 添加路由守卫
  const router = setupRouterGuard()
  app.use(router)
  await router.isReady() // https://router.vuejs.org/zh/api/index.html#isready
}
