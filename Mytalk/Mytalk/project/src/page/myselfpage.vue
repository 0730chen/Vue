<template>
    <div>
        <div id="nav2">
        <p id="name">头像</p>
        </div>
    <div id="message">
        <div id="xiaoxi">消息</div>
        <div id="shoucang">收藏</div>
        <div id="use">使用手册</div>
        <div id="online">在线</div>
        <div id="set">设置</div>
    </div>
        <FooterGuide></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from '../common/FooterGuide'
export default {
     components:{
       FooterGuide
    },
}
</script>

<style>
 #nav2{
     width:80%;
     height:70px;
    border-radius: 10px;
     background-color:tomato;
     margin:0 auto;
     transform: translateY(100%)
 }
 #name{
     top:50%;
     transform: translateY(100%)
 }
 #message{
     width:80%;
     height:500px;
     
     border:1px solid tomato;
     margin:0 auto;
     border-radius: 10px;
     transform: translateY(75px)
 }
 #xiaoxi{
     border:10px solid rgb(153, 51, 68);
     background-color:rgb(153, 51, 68);
     border-radius: 10px;
     transform: translateY(10px)
    
 }
 #shoucang{
     background-color:rgb(153, 51, 68);
     border:10px solid rgb(153, 51, 68);
     border-radius: 10px;
     transform: translateY(50px)
 }
 #use{
      
      border:10px solid rgb(153, 51, 68);
      background-color:rgb(153, 51, 68);
     border-radius: 10px;
     transform: translateY(100px)
 }
 #online{
      background-color:rgb(153, 51, 68);
     border:10px solid rgb(153, 51, 68);
     border-radius: 10px;
     transform: translateY(150px)
 }
 #set{
      background-color:rgb(153, 51, 68);
     border:10px solid rgb(153, 51, 68);
     border-radius: 10px;
     transform: translateY(200px)
 }
</style>
