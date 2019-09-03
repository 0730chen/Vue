<template>
  <div id="app">
    <div class="container">
    <router-view></router-view></div>
    <!-- <img src="./assets/bg.jpg"> -->
    <!-- <first></first> -->
    <!-- <NavBar></NavBar> -->
    <!-- <div id="app-in"> -->
      
      <!-- <first></first> -->
    <!-- </div> -->
    <!-- <v-navbar></v-navbar>
    <router-link to="cpt">跳转到蔡</router-link> -->
    <!-- <router-view></router-view> -->
    
    
    <!-- <div class="box">
     <NavBar></NavBar>
      <router-view>
      <v-navbar :items="items" :showIconOrSrc="showIconOrSrc"></v-navbar></router-view> -->
    <!-- </div> -->
    
  </div>
  
</template>


<script>
import first from './components/first.vue'
import cpt from './components/cpt.vue'
import NavBar from './components/FooterBuild.vue'
import hello from './components/HelloWorld.vue'
console.log(NavBar)
// export default {
//   name: 'App',
//   msg2:'hello',
//   components:{
//     first,cpt,FooterPubli
//   }
// }
 export default{
  name:"app",
  msg2:'hello',
  components:{
   NavBar,
   
  },
  

}
</script>

<style>
body html{
  padding: 0;
  width: 100%;
  height: 100%
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  width: 100%
}

</style>
