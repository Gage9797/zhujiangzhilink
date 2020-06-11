<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 14:17:42
-->
<template>
  <div class="main">
    <div class="container" :class="[scroll?'nav-show': '']">
      <!-- <div class="logo"> -->
      <img class="logo" src="@/assets/home/logo_top.png" />
      <!-- </div> -->
      <ul class="navigation">
        <router-link :to="{name:'home'}">
        <li class="title" @click="onActive(0)" :class="[isActive[0]?'active':'inactive']">
          首页
        </li>
        </router-link>
        <li
          class="title"
          @mouseover="onShow(1)"
          @mouseout="onHide(1)"
          :class="[isActive[1]?'active':'inactive']"
        >
          智慧医疗
          <div :class="[isShow[1] === false ? 'hide': 'show']">
            <div class="inner-content" @click="onActive(1)">
              <p>
                <router-link
                  :class="[current==='remoteMedical'?'cur-active':'']"
                  :to="{name:'remoteMedical'}"
                >远程医疗</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='hospitalSide'?'cur-active':'']"
                  :to="{name:'hospitalSide'}"
                >公立医院绩效考核院端解决方案</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='financialMedical'?'cur-active':'']"
                  :to="{name:'financialMedical'}"
                >财政医疗电子票据</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='medicalCommunity'?'cur-active':'']"
                  :to="{name:'medicalCommunity'}"
                >医共体信息平台</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='rationalDrug'?'cur-active':'']"
                  :to="{name:'rationalDrug'}"
                >合理用药</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='internetHospital'?'cur-active':'']"
                  :to="{name:'internetHospital'}"
                >互联网医院</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='smartHospital'?'cur-active':'']"
                  :to="{name:'smartHospital'}"
                >智慧医院整体解决方案</router-link>
              </p>
            </div>
          </div>
        </li>
        <li
          class="title"
          @mouseover="onShow(2)"
          @mouseout="onHide(2)"
          :class="[isActive[2]?'active':'inactive']"
        >
          智慧教育
          <div :class="[isShow[2] === false ? 'hide': 'show']">
            <div class="inner-content" @click="onActive(2)">
              <p>
                <router-link
                  :class="[current==='businessIntroduce'?'cur-active':'']"
                  :to="{name:'businessIntroduce'}"
                >业务介绍</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='smartClassroom'?'cur-active':'']"
                  :to="{name:'smartClassroom'}"
                >智慧教室</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='experimetalTraining'?'cur-active':'']"
                  :to="{name:'experimetalTraining'}"
                >实验实训</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='tvClass'?'cur-active':'']"
                  :to="{name:'tvClass'}"
                >广州电视课堂</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='healthEducation'?'cur-active':'']"
                  :to="{name:'healthEducation'}"
                >教育健康</router-link>
              </p>

              <p>
                <router-link
                  :class="[current==='smartLibary'?'cur-active':'']"
                  :to="{name:'smartLibary'}"
                >智慧图书馆</router-link>
              </p>
            </div>
          </div>
        </li>
        <li
          class="title"
          @mouseover="onShow(3)"
          @mouseout="onHide(3)"
          :class="[isActive[3]?'active':'inactive']"
        >
          信息系统集成
          <div :class="[isShow[3] === false ? 'hide': 'show']">
            <div class="inner-content" @click="onActive(3)">
              <p>
                <router-link
                  :class="[current==='weekEngineering'?'cur-active':'']"
                  :to="{name:'weekEngineering'}"
                >
                  <span>弱电智能化工程</span>
                </router-link>
              </p>

              <p>
                <router-link
                  :class="[current==='audioSolution'?'cur-active':'']"
                  :to="{name:'audioSolution'}"
                >音视频系统集成解决方案</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='remoteSolution'?'cur-active':'']"
                  :to="{name:'remoteSolution'}"
                >远程视频会议解决方案</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='securitySolution'?'cur-active':'']"
                  :to="{name:'securitySolution'}"
                >信息安全解决方案</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='bigdataSolution'?'cur-active':'']"
                  :to="{name:'bigdataSolution'}"
                >大数据与云平台解决方案</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='smartTv'?'cur-active':'']"
                  :to="{name:'smartTv'}"
                >智慧电视前端业务</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='smartOffice'?'cur-active':'']"
                  :to="{name:'smartOffice'}"
                >智慧办公</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='smartParty'?'cur-active':'']"
                  :to="{name:'smartParty'}"
                >智慧党建</router-link>
              </p>
            </div>
          </div>
        </li>
        <li
          class="title"
          @mouseover="onShow(4)"
          @mouseout="onHide(4)"
          :class="[isActive[4]?'active':'inactive']"
        >
          投资业务
          <div :class="[isShow[4] === false ? 'hide': 'show']">
            <div class="inner-content" @click="onActive(4)">
              <p>
                <router-link
                  :class="[current==='niukou'?'cur-active':'']"
                  :to="{name:'niukou'}"
                >纽扣互动</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='zhenhao'?'cur-active':'']"
                  :to="{name:'zhenhao'}"
                >臻好看</router-link>
              </p>
            </div>
          </div>
        </li>
        <li
          class="title"
          @mouseover="onShow(5)"
          @mouseout="onHide(5)"
          :class="[isActive[5]?'active':'inactive']"
        >
          <a href="#contact">关于我们</a>
          <div :class="[isShow[5] === false ? 'hide': 'show']">
            <div class="inner-content" @click="onActive(5)">
              <p>
                <!-- <a @click="goProfiler">公司简介</a> -->
                <router-link
                  :class="[current==='profiler'?'cur-active':'']"
                  :to="{path:'/about/about', query: {name: 'profiler'}}"
                >公司简介</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='culture'?'cur-active':'']"
                  :to="{name:'about', query: {name: 'culture'}}"
                >企业文化</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='quali'?'cur-active':'']"
                  :to="{name:'about', query: {name: 'quali'}}"
                >公司资质</router-link>
              </p>
              <p>
                <router-link
                  :class="[current==='contact'?'cur-active':'']"
                  :to="{name:'about', query: {name: 'contact'}}"
                >联系我们</router-link>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: [false, false, false, false, false, false],
      isActive: [true, false, false, false, false, false],
      scroll: true,
      current: ""
    };
  },
  created() {
    if (sessionStorage.getItem("isActive")) {
      var arr = sessionStorage.getItem("isActive");
      this.isActive.forEach((item, index) => {
        if (index == arr) {
          this.$set(this.isActive, index, true);
        } else {
          this.$set(this.isActive, index, false);
        }
      });
    }
    window.addEventListener("beforeunload", () => {
      var i = 0;
      this.isActive.forEach((item, index) => {
        if (item) {
          i = index;
        }
      });
      sessionStorage.setItem("isActive", i);
    });
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    goProfiler() {
      this.$router.push({
        path: '/about/about'
        // query: {
        //   name: 'profiler'
        // }
      })
      // document.querySelector("#profiler").scrollIntoView(true);
    },
    onShow(i) {
      this.isShow.forEach((item, index) => {
        this.$set(this.isShow, index, false);
      });
      this.$set(this.isShow, i, true);
    },
    onHide(i) {
      this.isShow.forEach((item, index) => {
        this.$set(this.isShow, index, false);
      });
    },
    onActive(i) {
      this.isActive.forEach((item, index) => {
        this.$set(this.isActive, index, false);
      });
      this.$set(this.isActive, i, true);
    },
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
    },
    watchrouter() {
      //如果路由有变化，执行的对应的动作
      this.current = this.$route.path.split("/")[2];
      if (this.current === "about") {
        this.current = this.$route.query.name;
      }
      // console.log('route', this.current);
      if (this.$route.query.name === "home") {
        this.onActive(0);
      }
      if (this.$route.query.name === "smartMedical") {
        this.onActive(1);
      }
      if (this.$route.query.name === "smartEducation") {
        this.onActive(2);
      }
      if (this.$route.query.name === "infomationSystem") {
        this.onActive(3);
      }
      if (this.$route.query.name === "project") {
        this.onActive(4);
      }
      if (this.$route.query.name === "about") {
        this.onActive(5);
      }
    }
  },
  watch: {
    $route: "watchrouter"
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}
.router-link-active {
  text-decoration: none;
}
@media screen and (max-width: 480px) {
  .container {
    position: fixed;
    z-index: 9999;
    top: 0;
    // left: 50%;
    // transform: translateX(-50%);
    width: 1000px;
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      // text-align: center;
      flex: 6;
      z-index: 99;
      // margin-left: 100px;;
      // width: 143px;
      height: 39px;
    }
    .navigation {
      z-index: 99;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 130px;
      .active {
        position: relative;
        width: 145px;
        list-style: none;
        font-size: 16px;
        // color: white;
        // border-bottom: 0px solid #bc1950;
        transition: 0.2s all linear;
      }
      .active::before {
        content: "";
        position: absolute;
        top: -3px;
        // left: 100%;
        // margin: 0 auto;
        width: 145px;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        border-bottom: 2px solid #bc1950;
        z-index: 99;
      }
      .inactive {
        width: 145px;
        border-bottom: 0px solid #bc1950;
      }
      // li {
      //   span {
      //     position: relative;
      //   font-size: 16px;
      //   color: white;
      //   transition: 0.2s all linear;
      //   }
      // }
      li {
        position: relative;
        //width: 145px;
        list-style: none;
        font-size: 16px;
        color: white;
        transition: 0.2s all linear;
      }

      li::before {
        content: "";
        position: absolute;
        top: -3px;
        left: 0;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #bc1950;
        transition: 0.2s all linear;
      }

      li:hover::before {
        width: 145px;
        top: -3px;
        left: 50%;
        transform: translateX(-50%);
        transition-delay: 0.1s;
        border-bottom-color: #bc1950;
        z-index: -1;
      }

      li:hover ~ li::before {
        // left: 0;
      }
      .title {
        // font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 78px;
        text-align: center;
        position: relative;
        .inner-content {
          p {
            height: 40px;
            line-height: 40px;
          }
          a {
            position: relative;
            //width: 145px;
            padding: 5px;
            list-style: none;
            font-size: 16px;
            color: white;
            transition: 0.2s all linear;
          }

          a::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            border-bottom: 2px solid #bc1950;
            transition: 0.2s all linear;
          }
          .cur-active {
            color: #bc1950;
          }
          a:hover::before {
            // width: 145px;
            width: 100%;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            transition-delay: 0.1s;
            border-bottom-color: #bc1950;
            z-index: -1;
          }
          a:visited {
            color: #bc1950;
          }
        }
        .active {
          position: relative;
          top: -3px;
          border-bottom: 2px solid #bc1950;
        }
        .active::before {
          content: "";
          position: absolute;
          top: -3px;
          left: 100%;
          width: 0;
          height: 100%;
          border-bottom: 2px solid #bc1950;
        }
      }
      .hide {
        display: none;
      }
      .show {
        // display: flex;
        width: 300px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(58, 57, 57, 0.5);
        z-index: -1;
      }
    }
    .wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(255, 255, 255);
      background: rgba(38, 38, 38, 1);
      opacity: 0.7;
    }
  }
}
@media screen and (min-width: 768px) {
  .container {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
      text-align: center;
      margin-left: 60px;
      z-index: 99;
      // width: 143px;
      height: 39px;
    }
    .navigation {
      z-index: 99;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 130px;
      .active {
        position: relative;
        width: 145px;
        list-style: none;
        font-size: 16px;
        // color: white;
        // border-bottom: 0px solid #bc1950;
        transition: 0.2s all linear;
      }
      .active::before {
        content: "";
        position: absolute;
        top: -3px;
        // left: 100%;
        // margin: 0 auto;
        width: 145px;
        // left: 50%;
        // transform: translateX(-50%);
        height: 100%;
        border-bottom: 2px solid #bc1950;
        z-index: 99;
      }
      .inactive {
        width: 145px;
        border-bottom: 0px solid #bc1950;
      }
      // li {
      //   span {
      //     position: relative;
      //   font-size: 16px;
      //   color: white;
      //   transition: 0.2s all linear;
      //   }
      // }
      li:hover {
        cursor: pointer;
      }
      li {
        position: relative;
        //width: 145px;
        list-style: none;
        font-size: 16px;
        color: white;
        transition: 0.2s all linear;
      }

      li::before {
        content: "";
        position: absolute;
        top: -3px;
        left: 0;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #bc1950;
        transition: 0.2s all linear;
      }

      li:hover::before {
        width: 145px;
        // top: -3px;
        // left: 50%;
        // transform: translateX(-50%);
        transition-delay: 0.1s;
        border-bottom-color: #bc1950;
        z-index: -1;
      }

      // li:hover ~ li::before {
      //   left: 0;
      // }
      .title {
        // font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        line-height: 78px;
        text-align: center;
        position: relative;
        .inner-content {
          p {
            height: 40px;
            line-height: 40px;
          }
          a {
            position: relative;
            //width: 145px;
            padding: 5px;
            list-style: none;
            font-size: 16px;
            color: white;
            transition: 0.2s all linear;
          }

          a::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            border-bottom: 2px solid #bc1950;
            transition: 0.2s all linear;
          }
          .cur-active {
            color: #bc1950;
          }
          a:hover::before {
            // width: 145px;
            width: 100%;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            transition-delay: 0.1s;
            border-bottom-color: #bc1950;
            z-index: -1;
          }
        }
        .active {
          position: relative;
          top: -3px;
          border-bottom: 2px solid #bc1950;
        }
        .active::before {
          content: "";
          position: absolute;
          top: -3px;
          left: 100%;
          width: 0;
          height: 100%;
          border-bottom: 2px solid #bc1950;
        }
      }
      .hide {
        display: none;
      }
      .show {
        // display: flex;
        width: 300px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(58, 57, 57, 0.5);
        z-index: -1;
      }
    }
    .wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      background: red;
    }
  }
  .container:hover {
    // background: red;
    background: rgba(38, 38, 38, 0.7);
    // .wrap {
    //   background: rgb(38, 38, 38);
    //   opacity: 0.7;
    // }
  }
  .nav-show {
    background: rgba(38, 38, 38, 0.7);
  }
}
</style>