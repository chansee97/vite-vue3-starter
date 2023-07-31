import { createRequest } from './request'

const onlineMockURL = 'https://www.fastmock.site/mock/6034dbc0a4ac2d7410f2924dd22630ba/virtuoso'

export const mockRequest = createRequest({ baseURL: onlineMockURL })
