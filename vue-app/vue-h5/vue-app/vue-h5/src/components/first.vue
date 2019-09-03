<template>
    <div id="first">
        <div id="am">
        <h3>我是</h3>{{author}}
        </div>
        <div id="sec">
        <h3>你是</h3>{{boss}}
        </div>
        <div id="thr">
        <h3>他是</h3>{{didi}}
        </div>
    </div>
    
</template>
<script>
import hello from "./HelloWorld.vue";
console.log(hello)
export default {
    data(){
        return {
            author:'haha',
            boss:'($ _ $)',
            didi:'弟弟'
        }
    }
}
</script>
<style>
#first{
    background-color: blanchedalmond;
    display:flex;
    flex-direction: row;
    
    
}
#sec{
background-color: blanchedalmond;
    border: 10px solid;
    width:200px;
    flex:auto
    
}
#thr{
background-color: blanchedalmond;
    border: 10px solid;
     width:200px;
     flex:auto
    
}
#am{
    background-color: blanchedalmond;
    border: 10px solid;
     width:200px;
     flex:auto
     
}
    
</style>