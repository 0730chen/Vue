<template>
    <!--<div class="Footer">
         <div id="find">
             <span>发现</span>
             </div>
         <div id="video">
             <span>视频</span>
             </div>
         <div id="mys">
             <span>我的
             </span>
             </div>
         <div id="friend">
             <span>朋友
             </span>
             </div>
         <div id="account">
             <span>账号
             </span>
             </div>
        
    </div>-->
    <div class="footer">
        
       <div v-for="(item,index) of items" :key="index">
        <!-- <span @click="clickBar">{{item.name}}</span> -->
        <!-- 可以使用对象里面的参数去跳转页面 -->
        <router-link :to="{path:item.path}" >{{item.name}}</router-link>
        
        
        </div>

    </div>
</template>

<style>
.footer{
    display: flex;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    flex-direction: row;
    
}
div{
    flex: 1;
}
    
       


    
    
</style>
<script>
export default {
    name:"footerBar",
    data() {
        return {
           items:[
                  {
                     name:"发现",
                     path:"/",
                     cls:"find", 
                  },
                  {
                      name:"视频",
                      path:"/video",
                       cls:"video",
                  },
                  {
                      name:"我的",
                      path:"myPage",
                        cls:"mys"
                  },{
                      name:"朋友",
                      path:'friendPage',
                      cls:"friend"

                  },{
                      name:"账号",
                      path:"accountPage",
                      cls:"accouunt",

                  }
              ]
        }
    },
    props:{
        // items:{
        //     type:Array,
        //     defalut:function(){
        //     //   items:[
        //     //       {
        //     //          name:"发现",
        //     //          cls:"find", 
        //     //       },
        //     //       {
        //     //           name:"我的",
        //     //            cls:"mys"
        //     //       },
        //     //       {
        //     //           name:"点赞",
        //     //             cls:"good"
        //     //       }
        //     //   ]
        //     }
        },
                
                

    // items:[{
    //     name:"发现",
    //     cls:"find",
        
    // },{
    //     name:"我的",
    //     cls:"mys",
    // },{
    //     name:"点赞",
    //     cls:"good",
    // }],
    methods: {
        clickBar:function(){
            this.$router.push('/'+this.page)
        }
        }
    }


</script>