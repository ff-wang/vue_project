<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './commponents/FooterGuide/FooterGuide'
  // import {reqAddress} from './api/'
  export default {
    mounted(){
      // console.log('1111')
      {
        this.$store.dispatch('getAddress')
        this.$store.dispatch('autoLogin')
      }
    },
    components: {
      FooterGuide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
