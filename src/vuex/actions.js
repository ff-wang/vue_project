import { reqAddress, reqCategorys, reqShops } from "../api"

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
  }
}