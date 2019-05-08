<template>
  <div class="hello">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <!-- 引用了bootstrap -->
        <button class="btn btn-primary">测试按钮</button> 
        
      </div>
    </div>
  </div>
    <input v-model="msg"><span id="name">{{msg}}</span>
  </div>
</template>

<script>
$(function(){
  console.log('引用jquery')
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '龙母',
      hello:'这是一个Vue页面'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#name{
  color:white;
  font-size: 4.5rem;
  position: absolute;
  left:50%;
  top:50%;
  margin-top:620px;
  margin-left:30px;
}
</style>
