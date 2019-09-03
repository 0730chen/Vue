<template>
  <div id="app">
    <!-- <img src="./assets/bg.jpg"> -->
  
    <div id="app-in">
      
      <first></first>
    </div>
    <router-link to="cpt">跳转到蔡</router-link>
    <router-view></router-view>
  </div>
</template>


<script>
import first from './components/first'
import cpt from './components/cpt.vue'
export default {
  name: 'App',
  msg2:'hello',
  components:{
    first,cpt
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
