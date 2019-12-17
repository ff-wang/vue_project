import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/shop/shop.vue'
import Goods from '../pages/shop/Goods.vue'
import Ratings from '../pages/shop/Ratings.vue'
import Info from '../pages/shop/Info.vue'
export default[
  {
    path: '/msite',
    component: MSite,
    meta:{isShowFooter:true}
  },
  {
    path: '/search',
    component: Search,
    meta:{isShowFooter:true}
  },
  {
    path: '/order',
    component: Order,
    meta:{isShowFooter:true}
  },
  {
    path: '/profile',
    component: Profile,
    meta:{isShowFooter:true}
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/shop',
    component: Shop,
    children:[
      {
        path: '/shop/goods',
        component: Goods,
      },
      {
        path: '/shop/ratings',
        component: Ratings,
      },
      {
        path: '/shop/info',
        component: Info,
      },
      {
        path: '',
        redirect: '/shop/goods'
      }
    ] 
  },

  {
    path: '/',
    redirect: '/msite'
  }
]