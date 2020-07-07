import request from '@/utils/request'
export function fetchStockInfo(query) {
    return request({
    url: '/stock/info',
    method: 'get',
    params: query
  })
}
