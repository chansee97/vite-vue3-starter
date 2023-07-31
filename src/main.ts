import { type App, createApp } from 'vue'

import AppVue from './App.vue'
import 'uno.css'
import '@unocss/reset/tailwind-compat.css'
import '@/styles/index.css'

async function setupApp() {
  // 创建vue实例
  const app = createApp(AppVue)
  /* 注册模块 vue-router/Pinia */
  Object.values(
    import.meta.glob<{ install: (app: App) => void }>('./modules/*.ts', {
      eager: true,
    }),
  ).map(i => i.install?.(app))
  // 挂载
  app.mount('#app')
}
setupApp()
