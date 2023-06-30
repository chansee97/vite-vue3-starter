import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import type { ProxyOptions } from 'vite'

export function setVitePlugins() {
  const plugins = [
    vue(),
    vueJsx(),
    Unocss(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
  ]
  return plugins
}

export function createViteProxy(
  isOpenProxy: boolean,
  envConfig: ServiceEnvConfig
) {
  if (!isOpenProxy) return undefined

  const proxy: Record<string, string | ProxyOptions> = {
    [envConfig.urlPattern]: {
      target: envConfig.url,
      changeOrigin: true,
      rewrite: (path) =>
        path.replace(new RegExp(`^${envConfig.urlPattern}`), ''),
    },
    [envConfig.secondUrlPattern]: {
      target: envConfig.secondUrl,
      changeOrigin: true,
      rewrite: (path) =>
        path.replace(new RegExp(`^${envConfig.secondUrlPattern}`), ''),
    },
  }

  return proxy
}
