import { post } from '../utils/axios'

// 获取信息
export function handleLogin (params) {
  return post('/api/session/user/login', params)
}
export function handleLogout (params) {
  return post('/api/session/user/loginOut', params)
}

export function handleGetList (params) {
  return post('/api/selfmediashop/shop/getIdShopNameList', params)
}
