import { resolve } from 'node:path'
import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import { setVitePlugins } from './vite.plugins'

// https://vitejs.dev/config/
export default defineConfig(({ _command, mode }: ConfigEnv) => {
  // 在开发环境下 command 的值为 serve 生产环境下为 build

  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, __dirname, '') as unknown as ImportMetaEnv

  return {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
    },
    build: {
      reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
    },
    plugins: setVitePlugins(),
  }
})
