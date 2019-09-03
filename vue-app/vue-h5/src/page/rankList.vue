<template>
    <div>
        <div class="rankList">
            <backTab></backTab>
            <div v-for="(song,index) in rankList" :key="index">
                <div class="songList">
                    <img class="rankImg" v-bind:src="song.coverImgUrl" alt="排行"><span class="updata">{{song.updateFrequency}}</span><span>{{song.name}}</span>
                </div>
                <div class="block"></div>
            </div>
        </div>
        <footBar></footBar>
    </div>
</template>
<style scoped>
.updata{
    position: absolute;
    width: 100px;
    height: 50px;
    z-index: 10;
    left: 0;
    color:aliceblue;
    text-align: center;
    transform: translateY(80px)
}
.songList{
    height: 100px;
    width: 345px;
    display: flex;
}
.rankImg {
    height: 100px;
    width: 100px;
}
span{
    position: absolute;
    width:170px;
    height: 50px;
    text-align: center;
    left: 30%;
    transform: translateY(50px)
}
.block{
    display: block;
    width: 100%;
    height: 20px;
    color: aliceblue;
}
.rankList{
    top: 0;
    transform: translateY(-10px)
}
.back{
    top:-31px;
    left:-7px;
}

</style>


<script>
import axios from 'axios'
import footBar from '../components/FooterBuild'
import backTab from '../components/backPage'
export default {
    // rankList:'',
    data() {
        return {
        name:"ranklist",
        rankList:[],
        // that:''
        }
    },
    methods: {
        getData(){
            let self = this
            axios.get('http://127.0.0.1:3000/toplist').then(function(res){
                
                console.log(res.data)
                self.rankList = res.data['list']
                // self.rankList = res.data.playlist['tracks']
                // console.log(rankList)
                //  this.rankList.append(res.data.playlist['tracks'])
                //  console.log(this.rankList)
                // this.rankList = res.data.playlist['tracks']
                // console.log(this.rankList)
            }).catch(function(error){
                console.log(error)
            })
        }
    },
    created() {
        this.getData()
    },
    components:{
        footBar,backTab
    }
}
</script>