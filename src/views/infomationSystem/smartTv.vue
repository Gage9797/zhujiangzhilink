<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 15:07:18
--> 
<template>
  <div>
    <img class="banner" src="@/assets/信息系统集成/banner.png" />
    <div class="main">
      <div class="container">
        <div class="title">
          <h1>智慧电视前端业务</h1>
          <div class="english-title">Smart TV Front-end Business</div>
        </div>
        <div class="content">
          <div>通过前端IP服务器输出4K超高清和其他需要的数字电视信号，同时结合酒店、医院的自办内容需要、宣传需要以及智能系统建设需求，建设一套智慧电视前端系统，为客户提供高清/超高清电视节目、高质量的个性化信息服务、快捷互动服务等功能。</div>
        </div>
        <div class="business-range">
          <div class="title">
            <span></span>案例展示
          </div>
          <div class="business-content">
            <div v-for="item in contentImages" :key="item.key">
              <div class="content-image">
                <div>
                  <img class="img" :src="item.src" />
                </div>
              </div>
              <div class="content-msg">{{item.msg}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentImages: [
        {
          src: require("@/assets/信息系统集成/smarttv_pic1.png"),
          msg: "东塔瑰丽酒店",
          key: "1"
        },
        {
          src: require("@/assets/信息系统集成/smarttv_pic2.png"),
          msg: "广州金万丽酒店",
          key: "2"
        },
        {
          src: require("@/assets/信息系统集成/smarttv_pic3.png"),
          msg: "凯尔卡顿酒店",
          key: "3"
        },
        {
          src: require("@/assets/信息系统集成/smarttv_pic4.png"),
          msg: "凯宾斯基酒店",
          key: "4"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
}
.container {
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  font-family: Microsoft YaHei;
  color: rgba(38, 38, 38, 1);
  .chinese-title {
    height: 37px;
    font-size: 36px;
    font-weight: bold;
    line-height: 37px;
  }
  .english-title {
    height: 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 37px;
    opacity: 0.7;
  }
  .content {
    margin-top: 64px;
    width: 1000px;
    height: 46px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(38, 38, 38, 1);
    line-height: 30px;
    text-align: justify;
  }
  .business-range {
    margin-top: 91px;
    .title {
      text-align: justify;
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 30px;
      position: relative;
    }
    span {
      display: inline-block;
      margin-right: 26px;
    }
    span::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      border: 3px solid rgba(188, 25, 80, 1);
    }
    .business-content {
      margin-top: 51px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      // .business-content-image {
      div {
        width: 230px;
        // height: 200px;
        overflow: hidden;
        img:hover {
          cursor: pointer;
          transform: scale(1.2);
          transition: all 0.6s;
        }
      }

      // }
      .content-msg {
        font-size: 18px;
        padding-top: 30px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(38, 38, 38, 1);
        line-height: 30px;
        text-align: center;
      }
    }
  }
}
</style>