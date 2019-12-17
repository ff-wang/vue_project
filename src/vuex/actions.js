import { reqAddress, reqCategorys, reqShops ,reqAutoLogin,reqGoods,reqInfo,reqRatings} from "../api"

//直接更新state的回调函数
export default {
  async getAddress({commit,state}){
    const {longitude,latitude} = state
    //发异步请求
    const result = await reqAddress(longitude,latitude)
    //请求成功，提交给mutations
    if (result.code===0) {
      const address = result.data
      commit('receive_address',address)
    }
  },
  async getCategorys({commit}){
    //发异步请求
    const result = await reqCategorys()
    //请求成功，提交给mutations
    if (result.code===0) {
      const categorys = result.data
      commit('receive_categorys',categorys)
    }
  },
  async getShops({commit,state}){
    const {longitude,latitude} = state
    //发异步请求
    const result = await reqShops(longitude,latitude)
    //请求成功，提交给mutations
    if (result.code===0) {
      const shops = result.data
      commit('receive_shops',shops)
    }
  },
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
  async getShopGoods({commit},cb){
    const result = await reqGoods()
    if (result.code===0) {
      const goods = result.data
      commit('receive_goods',{goods})
      typeof cb==='function' && cb()
    }
  },
  async getShopRatings({commit},cb){
    const result = await reqRatings()
    if (result.code===0) {
      const ratings = result.data
      commit('receive_ratings',{ratings})
      typeof cb==='function' && cb()
    }
  },
  async getShopInfo({commit},cb){
    const result = await reqInfo()
    if (result.code===0) {
      const info = result.data
      commit('receive_info',{info})
      typeof cb==='function' && cb()
    }
  },
}