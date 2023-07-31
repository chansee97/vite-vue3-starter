import type { App } from 'vue'

export function install(app: App) {
  const pinia = createPinia()
  app.use(pinia)
}
