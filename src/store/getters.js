
export default {
  getToken: (state) => {
    return state.access_token
  },
  getUserName: (state) => {
    return state.user_name
  },
  getUserId: (state) => {
    return state.user_id
  }
}
