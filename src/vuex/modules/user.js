import { reqAutoLogin} from "@/api"
export default {
  state: { 
    user:{}, //用户信息对象
    token:localStorage.getItem('token_key')||'', //当前用户登录的标记
  },
  mutations: {  
    receive_user(state,{user}){
      state.user = user
    },
    receive_token(state,{token}){
      state.token = token
    },
    reset_token(state){
      state.token = ''
    },
    reset_user(state){
      state.user = {}
    },
  },
  actions: { 
    //保存用户
  saveUser({commit},user){
    const token = user.token
    //将token保存到local
    localStorage.setItem('token_key',token)
    delete user.token // 删除user内部的token
    //将token保存到state
    commit('receive_token',{token})
    //将user保存到state
    commit('receive_user',{user})
  },
  //发请求自动登录
  async autoLogin({commit,state}){
    if (state.token&&!state.user._id) {
      if (state.token && !state.user._id) { // 必须要有token且没有user信息
        // 发送自动登陆的请求
        const result = await reqAutoLogin()
        if (result.code===0) {
          const user = result.data  // 没有token
          commit('receive_user', {user})
        }
      }
    }
  },
  logout({commit}){
    localStorage.removeItem('token_key')
    commit('reset_token')
    commit('reset_user')
  },
   },
  getters: {  }
}