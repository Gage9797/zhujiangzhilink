<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 13:06:29
--> 
<template>
  <div id="app">
      <navigation></navigation>
      <router-view></router-view>
      <foo></foo>
      <div v-if="scroll" class="backup" @click="backTop">
        <img src="http://www.zjchilink.com/tpl/www/images/to-top.png" style="width:60px;" />
      </div>
  </div>
</template>

<script>
import navigation from "./components/nav";
// import foo from "./components/footer";
import "babel-polyfill";
export default {
  name: "app",
  components: {
    navigation,
    foo: () => {
      return import("./components/footer");
    }
  },
  data() {
    return {
      scroll: false
    };
  },
  mounted() {
    var h = document.body.clientWidth; //获得bai屏幕宽度
document.getElementsByTagName('body').style.zoom=1920/h;
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 78) {
        that.scroll = true;
      } else {
        that.scroll = false;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  // text-align: center;
  color: #2c3e50;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(38, 38, 38, 1);
  overflow: hidden;
  // h1 {
  //   font-size: 34px;
  //   text-align: center;
  //   letter-spacing: 5px;
  // }
  .router-link-active {
    text-decoration: none;
  }
  @media screen and (max-width: 1200px) {
    // .main {
    //   width: 1000px;
    // }
    zoom: .84;
    width: 100%;
    margin: 0 auto;
    overflow: scroll;
    .backup {
      width: 1000px;
      position: fixed;
      bottom: 3%;
      left: 88%;
      // right: 3%;
    }
  }
      .backup {
      width: 1000px;
      position: fixed;
      bottom: 3%;
      left: 88%;
      // right: 3%;
    }
  // @media screen and (max-width: 1200px) {
  //   .backup {
  //     position: fixed;
  //     bottom: 3%;
  //     right: 3%;
  //     cursor:pointer;
  //   }
  //   overflow: scroll;
  // }
}
</style>
