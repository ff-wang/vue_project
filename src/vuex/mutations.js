import Vue from 'vue'
// n个间接更改state的回调函数
export default{
  receive_address(state,address){
    state.address = address
  },
  receive_categorys(state,categorys){
    state.categorys = categorys
  },
  receive_shops(state,shops){
    state.shops = shops
  },
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
    
}