<template>
  <div>
    <div class="top">
      <label id="searchImg" class="iconfont iconfangdajing"></label>
      <input id="searchInput" type="text" placeholder="请输入感兴趣的内容">
      <!--  登录状态和未登录状态 写博客 图片 视频 文章-->
      <div class="box box-move" v-if="showName">未登录</div>
      <div class="box1" v-else>
        <i class="add iconfont iconadd" @click="Cshow = !Cshow"></i>
      </div>
    </div>
    <!--  卡片 -->
    <transition name="slide-fade">
      <div class="card" v-if="Cshow">
        <ul class="liststyle">
          <li>
            <span class="write margin-left iconfont icontianxiexinxi"></span>
            <span class="margin-left-more">写论坛</span>
          </li>
          <li>
            <span class="write margin-left iconfont icontupian"></span>
            <span class="margin-left-more">图片</span>
          </li>
          <li>
            <span class="write margin-left iconfont iconshipin"></span>
            <span class="margin-left-more">视频</span>
          </li>
          <li>
            <span class="write margin-left iconfont iconwenzhang"></span>
            <span class="margin-left-more">文章</span>
          </li>
        </ul>
      </div>
    </transition>
    <!-- 头部 -->
    <div class="header">
      <a href="javascript:;" v-bind:class="{ active: isActive}" @click="show">推荐</a>
      <a href="javascript:;" v-bind:class="{ active: isActive1}" @click="show1">话题</a>
      <a href="javascript:;" v-bind:class="{ active: isActive2}" @click="show2">简介</a>
      <a href="javascript:;" v-bind:class="{ active: isActive3}" @click="show3">新闻</a>
      <a href="javascript:;" v-bind:class="{ active: isActive4}" @click="show4">文化</a>
      <a href="javascript:;" v-bind:class="{ active: isActive5}" @click="show5">选购</a>
    </div>

    <div class="Wheel"></div>
    <!--  底部tabBar -->
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "../common/FooterGuide";
import https from "../https.js";
export default {
  components: {
    FooterGuide
  },
  data() {
    return {
      showName: false,
      Cshow: false,
      isActive: true,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false
    };
  },
  methods: {
    show: function() {
      this.isActive = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    },
    show1: function() {
      this.isActive1 = true;
      this.isActive = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    },
    show2: function() {
      this.isActive = false;
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
      this.isActive4 = false;
    },
    show3: function() {
      this.isActive = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
      this.isActive4 = false;
    },
    show4: function() {
      this.isActive = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive5 = false;
      this.isActive4 = true;
    },
    show5: function() {
      this.isActive = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive5 = true;
      this.isActive4 = false;
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
$all-color: white;
$all1-color: black;
.top {
  width: 100%;
  height: 45px;
  background: $all-color;
  position: relative;
  border-bottom: 1px solid rgb(247, 246, 246);
  input {
    width: 220px;
    height: 26px;
    position: absolute;
    top: 50%;
    margin-top: -14px;
    margin-left: 10px;
    outline: none;
    border: none;
    border-radius: 8px;
    padding-left: 25px;
    background: rgb(218, 214, 214);
    &::-webkit-input-placeholder {
      font-size: 10px;
    }
  }
}
label {
  position: absolute;
  left: 15px;
  top: 13px;
  z-index: 666;
  height: 20px;
}
.iconfont {
  font-size: 18px;
}
.box {
  position: absolute;
  right: 15px;
  top: 12px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(252, 119, 2);
}
.box1 {
  position: absolute;
  right: 20px;
  top: 9px;
}
.add {
  font-size: 25px;
  color: all1-color;
}
.card {
  width: 140px;
  height: 206px;
  background: all1-color;
  position: absolute;
  left: 199px;
  top: 11px;
  margin-top: 40px;
  border-radius: 4px;
  &:before {
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: all1-color;
    position: absolute;
    left: 86%;
    margin-top: -18px;
  }
}
.card {
  ul {
    li {
      width: 100%;
      height: 50px;
      span {
        line-height: 50px;
      }
    }
  }
}
.write {
  color: white;
}
.header {
  width: 100%;
  height: 30px;
  background: $all-color;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: absolute;
  a {
    line-height: 30px;
    flex: 0.5;
    text-align: center;
    font-size: 14px;
    position: relative;
  }
}
.header a.active::after {
  content: " ";
  width: 40px;
  height: 2px;
  background: rgb(252, 119, 2);
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -20px;
}
.header a.active {
  color: rgb(252, 119, 2);
}
.Wheel {
  width: 100%;
  height: 120px;
  background: white;
  position: absolute;
  top: 76px;
  left: 0px;
}
</style>
