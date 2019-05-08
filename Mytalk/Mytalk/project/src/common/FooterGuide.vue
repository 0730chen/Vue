<template>
    <div>
        <div class="footer">
            <a href="javascript:;" class="homeA"  :class="{on: '/homepage' === $route.path}" @click="goto('/homepage')">
                <div class="img iconfont iconshouyeweixuanzhong"></div>
                <div class="homeTXT">首页</div>
            </a>
            <a href="javascript:;" class="homeA"  :class="{on: '/foundpage' === $route.path}" @click="goto('/foundpage')">
                <div class="img iconfont iconzhinanzhen"></div>
                <div class="homeTXT">发现</div>
            </a>
            <a href="javascript:;" class="homeA"  :class="{on: '/shoppage' === $route.path}" @click="goto('/shoppage')">
                <div class="img iconfont iconicon-test"></div>
                <div class="homeTXT">商城</div>
            </a>
            <a href="javascript:;" class="homeA"  :class="{on: '/myselfpage' === $route.path}" @click="goto('/myselfpage')">
                <div class="img iconfont iconwode"></div>
                <div class="homeTXT">我的</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goto(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style>
    .footer{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 55px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background: white;
        border-top: 1px solid rgb(243, 239, 239)
    }
    .homeA{
        flex: 1;
        text-align: center;
    }
    .img{
        font-size: 27px;
        margin-top: 3px;
    }
    .homeTXT{
        font-size: 14px;
        margin-top: 2px;
    }
    .on{
        color: rgb(255, 94, 0)
    }
</style>
