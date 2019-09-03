<template>
    <div>
        <div class="songList">
            <backTab></backTab>
            <span>每日推荐的歌曲列表</span>
            <div class="List" v-for="(list,index) in songlist " :key="index">
                <img :src="list.album['picUrl']">
                <!-- <div>播放</div> -->
                <div>{{index}}&nbsp;{{list.name}}</div><div :data-id="list.id" @click=" clickDate($event)">播放</div>

            </div>
            <footBar></footBar>
        </div>

    </div>
</template>
<style scoped>
.List{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    padding: 20px;
    
}
img{
    height: 50%;
    width: 50%;
    margin: 0;
}
</style>

<script>
import footBar from '../components/FooterBuild'
import axios from 'axios'
import backTab from '../components/backPage'
export default {
    listId:'',
    data() {
        return {
            name:'DailyPage',
            songlist:[],
            songUrl:'',
            
            
        }
    },
    components:{
        footBar,backTab
    },
    methods: {
        
        getSong(){
            let self = this
            axios.get('http://127.0.0.1:3000/recommend/songs',{withCredentials: true}).then(function(res){
                self.songlist = res.data['recommend']
                console.log(self.songlist)
            }).catch(function(err){
                console.log(err)
            })
        },
        clickDate(e){
            // console.log(e.target.getAttribute('data-id'))
            this.listId = e.target.getAttribute('data-id')
            console.log(this.listId)
            let self = this
            
            axios.get('http://127.0.0.1:3000/song/url?id='+this.listId).then(function(res){
                console.log(res.data.data[0].url)
                
                self.songUrl = res.data.data[0]['url']
                // this.$router.push({path:res.data.data[0].url})
            }).catch(function(err){
                console.log(err)
            })
            // axios.get('http://127.0.0.1:3000/song/url?id='+list.id)
        }
        // getlogin(){
        //     axios.get('http://127.0.0.1:3000/recommend/resource').then(function(res){
        //         console.log(res.data)
        //     }).catch(function(err){
        //         console.log(err)
        //     })
        // // getSong(){
        // //     axios.get('http://127.0.0.1:3000/recommend/resource').then(function(res){
        // //         console.log(res.data)
        // //     }).catch(function(err){
        // //         console.log(err)
        // //     })
        // // }


    },
    mounted() {
        this.getSong()
        }
    }
        
</script>