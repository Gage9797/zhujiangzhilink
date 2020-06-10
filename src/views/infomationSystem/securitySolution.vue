<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 11:37:48
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/信息系统集成/banner.png" />
    <div class="main-content">
      <div class="container">
        <div class="title">
          <h1>信息安全解决方案</h1>
          <div class="english-title">Information Security Solutions</div>
        </div>
        <div class="business-range" v-for="item in message" :key="item.key">
          <div class="title">
            <span></span>
            {{item.businessTitle}}
          </div>
          <p class="content">{{item.bisnessContent}}</p>
          <div class="icon" v-for="itm in item.icon" :key="itm">
            <img :src="itm" />
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
      message: [
        {
          businessTitle: "网络安全产品及服务",
          bisnessContent:
            "珠江智联为您提供网络安全等保、防火墙、无线网络、上网行为管理等解决方案，涉及教育、医疗、政企等行业。",
          icon: [
            require("@/assets/信息系统集成/infor_chart1.png"),
            require("@/assets/信息系统集成/infor_chart2.png")
          ],
          key: "1"
        },
        {
          businessTitle: "安全等保2.0业务",
          bisnessContent:
            "等保 2.0 建设共为五个流程，分别是系统定级、系统备案、建设整改、等级测评和监督检查。在等保中，我司可以全部承接等保方案流程，为客户提供一站式整体解决方案。",
          icon: [require("@/assets/信息系统集成/infor_chart3.png")],
          key: "2"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  // margin-bottom: 69px;
  // height: 740px;
}

.container {
  width: 1000px;
  margin: 0 auto;
padding-top: 50px;  
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
  .business-range {
    margin-top: 74px;
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
    .content {
      margin-top: 51px;
      text-align: justify;
    }
    .icon {
      margin-top: 50px;
      :nth-child(1) {
        margin-bottom: 30px;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>