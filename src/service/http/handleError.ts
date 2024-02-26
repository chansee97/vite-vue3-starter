interface httpErrorHandle { text: string, handle?: () => void }
const httpError: Record<number, httpErrorHandle> = {
  400: {
    text: '请求错误(400)',
  },
  401: {
    text: '未授权，请重新登录(401)',
    // 这里可以做清空storage并跳转到登录页的操作
    handle() {},
  },
  403: {
    text: '拒绝访问(403)',
  },
  404: {
    text: '请求出错(404)',
  },
  408: {
    text: '请求超时(408)',
  },
  500: {
    text: '服务器错误(500)',
  },
  501: {
    text: '服务未实现(501)',
  },
  502: {
    text: '网络错误(502)',
  },
  503: {
    text: '服务不可用(503)',
  },
  504: {
    text: '网络超时(504)',
  },
  505: {
    text: 'HTTP版本不受支持(505)',
  },
}

export function handleHttpError(status: number) {
  let tip = `连接出错(${status})!`

  if (httpError[status]) {
    tip = httpError[status].text
    httpError[status].handle && httpError[status].handle?.()
  }

  return tip
}
