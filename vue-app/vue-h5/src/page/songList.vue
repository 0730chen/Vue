<template>
    <div>
        <backTab></backTab>
        <div class="imgList">
            <div class="imgurls" v-for="(img,index) in imgurls" :key="index">
                <img class="imgs" :src="img.coverImgUrl" v-show="index==mark">
            </div>
        </div>
        <div class="container">
        <div class="songList" v-for="(songs,index) in songlist" :key="index">
            {{songs.name}}
            <img :src ="songs.coverImgUrl">
        </div>
        </div>
        <footBar></footBar>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.songList{
  flex-grow: 1;

}
.imgList{
    padding: 20px;
}
.imgs{
    width: 80%;
    height: 200px;
}
.imgurls{
    display: flex;
    justify-content: center;
}
img{
    display: block;
    position: relative;
    width: 30%;

}
</style>

<script>
import footBar from '../components/FooterBuild'
import backTab from '../components/backPage'
import axios from 'axios';
export default {
    data() {
        return {
            mark:0,
            name:"songList",
            songlist:[],
            imgurls:[],
        }
    },
    methods: {
        imgList:function(){
            let self = this
            axios.get('http://127.0.0.1:3000/top/playlist',{withCredentials: true}).then(function(res){
                console.log(res.data['playlists'])
                self.songlist = res.data['playlists']
            }).catch(function(err){
                console.log(err)
            })
        },
        lunboimgurl:function(){
            let self = this
            axios.get('http://127.0.0.1:3000/top/playlist/highquality?before=1503639064232&limit=5').then(function(res){
                console.log(res.data)
                self.imgurls = res.data['playlists']
                console.log(self.imgurls)
            }).catch(function(err){
                console.log(err)
            })
        },
        authplay:function(mark){
            this.mark++
            if(this.mark ==4){
                this.mark =0;
            }
            // if(this.mark >=5){
            //     this.mark = 0;
            // }
            // console.log(this.mark)
 
        },
        play:function(){
            setInterval(this.authplay,1000)
        }
    },
    components:{
        footBar,backTab
    },
    mounted() {
        this.imgList()
        this.lunboimgurl()
    },
    created() {
        this.play()
    },
}
</script>
