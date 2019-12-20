import Vue from 'vue'
import { reqGoods,reqInfo,reqRatings} from "@/api"
// 商家相关模块数据管理
export default {
  state: { 
    goods:[],
    ratings:[],
    info:{},
    cartFoods:[]
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
        state.cartFoods.push(food)
      }
    },
    reduce_food_count(state,{food}){
      if (food.count>0) {
        food.count--
      }
      if (food.count===0) {
        //如果适量为0，将food从购物车中删除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    },
    clear_cart(state){
      state.cartFoods.forEach(food=>food.count=0)
      state.cartFoods = [] //重置cartFoods
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
  getters: { 
    /* 总数量 */
    totalCount (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
    },
    /* 总价格 */
    totalPrice (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
    },
  }  
}