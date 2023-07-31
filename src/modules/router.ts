import type { App } from 'vue'
import NProgress from 'nprogress'
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from 'vue-router/auto'

import { setupLayouts } from 'virtual:generated-layouts'

const { VITE_BASE_URL } = import.meta.env

function setupRouterGuard() {
  const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
    extendRoutes: (routes) => {
      return setupLayouts(routes)
    },
  })

  router.beforeEach((to, from) => {
    if (to.path !== from.path)
      NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
  return router
}

// 安装vue路由
export async function install(app: App) {
  // 添加路由守卫
  const router = setupRouterGuard()
  app.use(router)
  await router.isReady() // https://router.vuejs.org/zh/api/index.html#isready
}
