import type { App } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'
import NProgress from 'nprogress'
import { setupLayouts } from 'virtual:generated-layouts'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

const { VITE_BASE_URL } = import.meta.env

function setupRouterGuard() {
  const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
    routes: setupLayouts(routes),
  })

  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (to.path !== from.path)
      NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })

  if (import.meta.hot) {
    handleHotUpdate(router)
  }
  return router
}

// 安装vue路由
export async function install(app: App) {
  // 添加路由守卫
  const router = setupRouterGuard()
  app.use(router)
  await router.isReady() // https://router.vuejs.org/zh/api/index.html#isready
}
