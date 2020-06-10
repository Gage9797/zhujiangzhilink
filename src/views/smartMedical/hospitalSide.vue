<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-29 09:51:09
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/智慧医疗/banner_medical.png" />
    <div class="container">
      <div>
        <h1>公立医院绩效考核院端解决方案</h1>
        <div class="english-title">Hospital-side Performance Evaluation Solution for Public Hospitals</div>
      </div>
      <div class="hospital-bottom">
        <div class="title">
          <span></span>
          总体概述
        </div>
      <div class="content">
        <div class="content-left">
          <img src="@/assets/智慧医疗/hospital_pic1.png" />
        </div>
        <div class="content-right">
          <p>珠江智联是广东省公立医院绩效考核服务商。</p>

          <p>国家公立医院绩效考核以数据信息考核为主，必要现场复核为辅，利用“互联网+考核”的方式采集客观考核数据。国家公立医院绩效考核指标体系从医疗质量、运营效率、持续发展、满意度评价4个方面，细化为55个指标，广东省增加4个指标，通过指标这把“尺子”，把国家的导向传递到各省、各市、各县、各家医院及院长、副院长、职能部门、科室以及每一个医务人员。</p>
        </div>
      </div>
      <div class="content">
        <div class="content-left"><p>医院绩效考核提升方案通过搭建数据采集平台、搭建医院绩效考核数据资源中心、搭建绩效内控平台三大服务体系，解决医院的<strong>考前政策解读、指标分析、数据采集、转化、模拟考核以及出具模拟绩效考评报告</strong>等问题。</p></div>
        <div class="content-right">
          <img src="@/assets/智慧医疗/hospital_pic2.png" />
        </div>
      </div>
      <div class="hospital-bottom">
        <div class="title">
          <span></span>区域公立医院绩效考核平台
        </div>
      </div>
      <p class="hospital-gov">《医政医管局2020年工作要点》指出全面实施公立医院绩效考核，发挥指挥棒作用，研究区域医疗服务体系绩效考核办法。作为广东省公立医院绩效考核平台服务商，基于国家级、省级绩效考核平台的建设经验，推出市级与区级绩效考核平台解决方案。目前已在深圳市完成市级公立医院绩效考核平台解决方案的落地。区域公立医院绩效考核平台为卫生管理部门提供科学的绩效考核体系、可管控的绩效考核进度、可追溯的绩效考核数据，决策支持及客观证据。</p>
      <div class="pic"><img src="@/assets/智慧医疗/pic_hospital_chart.png"/></div>
    </div>
    
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  // height:740px;
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
    height: 37px;
    font-size: 14px;
    font-weight: 400;
    line-height: 37px;
    opacity: 0.7;
    // margin-bottom: 60px;
    text-align: center;
  }
  .hospital-bottom {
    margin-top: 49px;
    .title {
      text-align: justify;
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 30px;
      position: relative;
    }
    .title > span {
      display: inline-block;
      margin-right: 26px;
    }
    .title > span::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      border: 3px solid rgba(188, 25, 80, 1);
    }
  }
  .content {
    // height: 285px;
      margin-top: 51px;
    
    text-align: justify;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #262626;
    font-size: 16px;
    letter-spacing: 1px;
    margin-bottom: 20px;
          img:hover {
        transform: scale(1.2);
        transition: all 0.6s;
      }
    p:nth-child(2) {
        margin-top: 40px;
    }
    &-left {
      overflow: hidden;
      padding-top: 30px;
      width: 45%;
      position: relative;
      p {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      img {
        width: 100%;
      }
    }
    &-right {
      overflow: hidden;
      padding-top: 30px;
      width: 45%;
      img {
        width: 100%;
      }
    }
  }
  .hospital-gov {
    text-align: justify;
    padding-top: 50px;;
  }
  .pic {
      margin-top: 60px;
      img {
        width: 100%;
      }
  }
}
</style>