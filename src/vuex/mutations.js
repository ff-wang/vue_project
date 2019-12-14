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
  }
}