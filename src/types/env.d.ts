/**
 *后台服务的环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
type ServiceEnvType = 'dev' | 'test' | 'prod'

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string
  /** 项目标题 */
  readonly VITE_APP_TITLE: string
  /** 后端服务的环境类型 */
  readonly MODE?: ServiceEnvType
}