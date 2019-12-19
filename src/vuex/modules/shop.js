import Vue from 'vue'
import { reqGoods,reqInfo,reqRatings} from "@/api"
// 商家相关模块数据管理
export default {
  state: { 
    goods:[],
    ratings:[],
    info:{}
  },
  mutations: { 
    receive_goods(state,{goods}){
      state.goods = goods
    },
    receive_ratings(state,{ratings}){
      state.ratings = ratings
    },
    receive_info(state,{info}){
      state.info = info
    },
    add_food_count(state,{food}){
      if (food.count) {
        food.count++
      }else{
        Vue.set(food,'count',1)
      }
    },
    reduce_food_count(state,{food}){
      if (food.count>0) {
        food.count--
      }
    }
   },
  actions: { 
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
    updateFoodCount({commit},{isAdd,food}){
      if (isAdd) {
        commit('add_food_count',{food})
      }else{
        commit('reduce_food_count',{food})
      }
    }
  
   },
  getters: {  }
}