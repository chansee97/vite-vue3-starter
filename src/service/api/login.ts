import { mockRequest } from '../http'

interface Itest {
  data: string
}
/* get方法测试 */
export function fetachGet() {
  return mockRequest.get('/getAPI')
}
/* post方法测试 */
export function fetachPost(params: Itest) {
  return mockRequest.post('/postAPI', params)
}
/* delete方法测试 */
export function fetachDelete() {
  return mockRequest.Delete('/deleteAPI')
}
/* put方法测试 */
export function fetachPut(params: Itest) {
  return mockRequest.put('/putAPI', params)
}
