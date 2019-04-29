import Util from '@/utils/storage'
export default {
  SAVE_TOKEN (state, access_token) {
    state.access_token = access_token
  },
  SAVE_NAME (state, user_name) {
    state.user_name = user_name
  },
  SAVE_USERID (state, user_id) {
    state.user_id = user_id
  },
  LOGINOUT (state, res) {
    console.log('LOGOUT-state', res)
    state.access_token = ''
    state.user_name = ''
    state.user_id = ''
    Util.storage('token', null)
    Util.storage('userName', null)
    Util.storage('userId', null)
  }
}
