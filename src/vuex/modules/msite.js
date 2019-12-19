import { reqAddress, reqCategorys, reqShops } from "@/api"
// 首页相关模块数据管理
export default {
  state: {
    latitude: 40.10038, // 纬度
    longitude: 116.36867, // 经度
    address: {}, // 地址信息对象
    categorys: [], // 分类数组
    shops: [], //商家数组
   },
  mutations: { 
    receive_address(state,address){
      state.address = address
    },
    receive_categorys(state,categorys){
      state.categorys = categorys
    },
    receive_shops(state,shops){
      state.shops = shops
    },
   },
  actions: { 
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
   },
  getters: {  }
}