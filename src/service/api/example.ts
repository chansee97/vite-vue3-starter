import { mockRequest } from '../http'

interface Itest {
  data: string
}

/* get方法测试 */
export function fetchGet() {
  return mockRequest.get('/getAPI')
}
/* post方法测试 */
export function fetchPost(params: Itest) {
  return mockRequest.post('/postAPI', params)
}
/* PostForm方法测试 */
export function fetchPostForm(params: Itest) {
  return mockRequest.postForm('/postFormAPI', params)
}
/* delete方法测试 */
export function fetchDelete() {
  return mockRequest.Delete('/deleteAPI')
}
/* put方法测试 */
export function fetchPut(params: Itest) {
  return mockRequest.put('/putAPI', params)
}
