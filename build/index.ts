import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'

// import { VueRouterAutoImports } from 'unplugin-vue-router'

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
    Layouts(),
    VueRouter({ extensions: ['.vue'], dts: 'src/types/typed-router.d.ts' }),
  ]
  return plugins
}
