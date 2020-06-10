<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-29 09:53:34
--> 
<template>
  <div  class="main">
    <img class="banner" src="@/assets/智慧医疗/banner_medical.png" />
    <div>
      <div class="container">
        <div class="title">
          <h1>智慧医院整体解决方案</h1>
          <div class="english-title">Smart Hospital Overall Solution</div>
        </div>
        <div class="business-range" v-for="item in message" :key="item.key">
          <div class="title">
            <span></span>
            {{item.businessTitle}}
          </div>
          <div class="content">
            <p>{{item.bisnessContent}}</p>
          </div>
          <div class="icon" v-for="(itm,index) in item.icon" :key="itm">
            <div class="introduction" v-if="index%2 !==0 && item.businessTitle === '产品特点'">
              <div>
                <p>{{item.content[index].title}}</p>
                <p>{{item.content[index].text}}</p>
              </div>
            </div>
            <img :class="[item.businessTitle === '产品特点' ? 'pro-img' : '']" :src="itm" />
            <div class="introduction" v-if="index%2 ===0 && item.businessTitle === '产品特点'">
              <div>
                <p>{{item.content[index].title}}</p>
                <p>{{item.content[index].text}}</p>
              </div>
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
      message: [
        {
          businessTitle: "总体概述",
          bisnessContent:
            "智慧医院建设思路是基于现代信息技术手段，建立基于一卡通为标志的现代诊疗服务体系。引入多样化支付手段以及全自助、全预约新型服务模式，方便老百姓就医，提升医院的诊疗效率；通过建立以电子病历为核心的临床信息系统，基于医院信息集成平台构建临床数据中心（CDR）和临床决策支持系统，逐步推进临床“智慧医疗”；建立基于指标体系的医院运营管理系统，推进医院的精细化管理。通过医疗协同平台的建设，推动区域范围内院间协作与集团协作，同时引入移动物联技术为辅助，通过多类型移动终端应用，实现方便、快捷的便民、惠民的就医体验，全面推进智慧型医院建设。",
          icon: [],
          key: "1"
        },
        {
          businessTitle: "智慧医院建设蓝图",
          bisnessContent: "",
          icon: [require("@/assets/智慧医疗/smarthos_pic1.png")],
          key: "2"
        },
        {
          businessTitle: "产品特点",
          bisnessContent: "",
          icon: [
            require("@/assets/智慧医疗/smarthos_pic2.png"),
            require("@/assets/智慧医疗/smarthos_pic3.png"),
            require("@/assets/智慧医疗/smarthos_pic4.png"),
            require("@/assets/智慧医疗/smarthos_pic5.png"),
            require("@/assets/智慧医疗/smarthos_pic6.png"),
          ],
          content: [
            {
              title: "以患者为中心 ",
              text: "提升医疗服务质量，改善医患关系，提高运行效率"
            },
            {
              title: "全面智能化",
              text: "运营、医疗、财务、行政、后勤、科教、决策、区域"
            },
            {
              title: "组织关系改造与业务流程优化 ",
              text: " 流程、组织、质量、成本、绩效"
            },
                        {
              title: "全面资源优化 医院资源管理HRP ",
              text: " 医院资源管理HRP — 人、财、物、医疗信息"
            },
            {
              title: "服务管理和决策  ",
              text: "BI 商业智能决策支撑系统"
            }
          ],
          key: "3"
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
padding-top: 50px;  text-align: center;
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
    p {
      text-align: justify;
    }
    .icon {
      //   margin-top: 50px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 20px;
      img {
        height: 592px;
        width: 100%;
      }
      .introduction {
        background:hsla(220, 45%, 63%, 0.2);
        // opacity: 0.2;
        width: 49%;
        div {
          margin: 5% 10% 0;
          p:nth-child(1) {
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(38, 38, 38, 1);
            line-height: 36px;
          }
        }
      }
      .pro-img {
        width: 49%;
        height: 120px;
      }
    }
  }
}
</style>