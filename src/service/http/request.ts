import type { AxiosRequestConfig } from 'axios'
import CreateAxiosInstance from './instance'

/**
 * @description:
 * @param {AxiosRequestConfig} axiosConfig - axios配置
 * @param {Service} backendConfig - 后台字段配置
 * @return {*}
 */
export function createRequest(axiosConfig: AxiosRequestConfig, backendConfig?: Service.BackendResultConfig) {
  const axiosInstance = new CreateAxiosInstance(axiosConfig, backendConfig)
  const { instance } = axiosInstance

  /**
   * @description: 通用请求方法
   * @param {string} url- 请求地址
   * @param {RequestMethod} method - 请求方法
   * @param {any} data - 请求数据体
   * @param {AxiosRequestConfig} config - 请求配置
   * @return {*}
   */
  type RequestMethod = 'get' | 'post' | 'put' | 'delete'
  const request = async (url: string, method: RequestMethod = 'get', data: any, config?: AxiosRequestConfig) => {
    return instance(url, { method, data, ...config })
  }

  /**
   * @description: get请求
   * @param {string} url - 请求地址
   * @return {*}
   */
  const get = (url: string, config?: AxiosRequestConfig) => {
    return instance.get(url, config)
  }

  /**
   * post请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  const post = (url: string, data?: any, config?: AxiosRequestConfig) => {
    return instance.post(url, data, config)
  }

  /**
   * post请求-form格式提交
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  const postForm = (url: string, data?: any, config?: AxiosRequestConfig) => {
    return instance.post(url, data, { ...config, headers: { 'content-type': 'application/x-www-form-urlencoded' } })
  }

  /**
   * Delete请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  const Delete = (url: string, config?: AxiosRequestConfig) => {
    return instance.delete(url, config)
  }

  /**
   * put请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  const put = (url: string, data?: any, config?: AxiosRequestConfig) => {
    return instance.put(url, data, config)
  }

  return {
    request,
    get,
    post,
    postForm,
    Delete,
    put,
  }
}
