import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import 'uno.css'
import '@unocss/reset/tailwind-compat.css'
import '@/styles/index.css'

async function setupApp() {
  // 创建vue实例
  const app = createApp(App)
  // 安装router
  await setupRouter(app)
  // 挂载
  app.mount('#app')
}
setupApp()
