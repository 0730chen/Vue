<template>
  
        
        <div id="container">
            <div id="nav"></div>
        <div id="news">
            
            <div id="article">经济</div>

        </div>
        <div id="games">
           
            <div id="article2">体育</div>
            </div>
        <div id="money">
            <div id="article3">游戏</div>
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
#app{
    height:100%;
    width:100%;
    overflow: hidden;
}
#container{
    width:100%;
    height:600px;
    display: flex;
    flex-direction: column;
}
#nav{
    height:50px;
    width:100%;
    padding:0;
    margin:0;
    background:white;
}
#news{
    height:100px;
    width:99%;
    border:1px solid white;
    flex:1;
    display: inline-flex;
    
}
#games{
    width:99%;
    height:auto;
    border:1px solid #cccccc;
    flex:1;
}
#money{
    width:99%;
   
    border:1px solid #cccccc;
    
    flex:1;
    display: inline-flex;
    bottom: 50px;
    flex-direction: row-reverse;
}
#article{
   
    height:50%;
    width:100%;
    border: 1px solid #cccccc;
    top:50%;
    transform: translateY(50%);
    
    
}
#article:hover{
    border:1px solid tomato;
}
#article2{
    height:50%;
    width: 100%;
    border: 1px solid #cccccc;
    margin:0 auto;
    top:50%;
    transform: translateY(50%)
}
#article2:hover{
    border:1px solid tomato;
}
#article3{
    height:50%;
    width:100%;
    border: 1px solid #cccccc;
    top:50%;
    transform: translateY(50%)
    
}
#article3:hover{
    border:1px solid tomato;
}

</style>
