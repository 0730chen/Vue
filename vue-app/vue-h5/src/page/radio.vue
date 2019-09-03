<template>
    <div>
        <backTab></backTab>
        <div class="radio">
            电台页面
        </div>
        <footBar></footBar>
    </div>
</template>
<script>
import footBar from '../components/FooterBuild'
import backTab from '../components/backPage'
export default {
    data(){
        return{
            name:"radio"
        }
    },
    components:{
        footBar,backTab
    }
}
</script>