import axios from 'axios'
import store from '../store/index'
import { Message } from 'element-ui'
import { getConfig } from './config'
import Util from './storage'
import router from '../router'

export function getAuthorization () {
  let token = { Authorization: ` ${store.state.access_token}` }
  // console.log(token);
  return token
}
// axios 配置
// let BASE_URL = process.env.VUE_APP_API_BASE
// axios.defaults.baseURL = BASE_URL
let header = {
  'Content-Type': 'application/json',
  ...getConfig()
}
axios.defaults.timeout = 30000
axios.defaults.credentials = 'include'
axios.defaults.headers = header
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // console.log('http-request', config)
    const token = Util.storage('token')
    if (store.state.access_token && token) {
      config.headers.Authorization = `token ${store.state.access_token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log('http-response', response)
    if (response.status === 200) {
      const { code, data, message } = response.data
      if (code === 0) {
        return Promise.resolve(data)
      } else {
        switch (code) {
          case 199999:
          // 返回 401 清除token信息并跳转到登录页面
            store.dispatch('loginOut')
            // window.location.href = '/#/login';
            Message.error(message)
            router.replace({
              path: '/login',
              query: { redirect: router.currentRoute.fullPath }
            })
            break
          default:
            if (message) {
              Message.error(message)
            }
            break
        }
        return Promise.reject(data)
      }
    } else {
      return Promise.reject(response.data.message)
    }
  },
  error => {
    if (error.response) {
      console.log('http-error.response', error.response)
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.dispatch('loginOut')
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
        default:
          if (error.response.message) {
            Message.error(error.response.message)
          }
          break
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default axios
