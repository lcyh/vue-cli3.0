import { handleLogout } from '@/api/index'

export default {
  // 登出
//   handler: () => {},
  loginOut ({ commit }) {
    return new Promise((resolve, reject) => {
      handleLogout()
        .then(res => {
          commit('LOGINOUT')
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
