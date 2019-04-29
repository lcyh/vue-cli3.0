import Util from '@/utils/storage'

const state = {
  access_token: Util.storage('token') || '',
  user_name: Util.storage('userName') || '',
  user_id: Util.storage('userId') || ''
}
export default state
