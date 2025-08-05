import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Layouts from 'vite-plugin-vue-layouts'

export function setVitePlugins() {
  const plugins = [
    // https://github.com/antfu/unocss
    Unocss(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', VueRouterAutoImports, 'pinia', '@vueuse/core'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/types/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
        'src/service/api',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    VueRouter({
      extensions: ['.vue'],
      exclude: ['**/components/*.vue'],
      dts: 'src/types/typed-router.d.ts',
    }),

    vue(),
    vueJsx(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'safari-pinned-tab.png',
      ],
      manifest: {
        name: 'Virtuoso',
        short_name: 'Virtuoso',
        theme_color: '#A3DCC3',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ]
  return plugins
}
