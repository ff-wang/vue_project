<template>
  <div id="app">
    <h1>qqqqqqqqq</h1>
    <button class="btn btn1">按钮1</button>
    <button class="btn btn2">按钮2</button>
    <ul>
      <li :class="{active:navIndex===index}" v-for="(item,index) in 10" :key="index"
        @click="check(index)"
      >
       {{item}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return {
      navIndex:0
    }
  },
  methods:{
    check(index){
      console.log(index);  
      this.navIndex = index
    }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixins.styl'
  $color = pink 
  btnStyle(w, h, bg)
    width w
    height h
    background bg
    border none
  add(a,b)
    return a+b
  h1 
    font-size 40px
    color $color
  .btn1
    width add(100px,50)
    background-color pink 
  .btn2
    btnStyle(200px,200px,skyblue)
  ul 
    li 
     bottom-border-1px($color)
     &.active
      color $color 
      
</style>
