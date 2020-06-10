<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-29 09:49:51
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/智慧医疗/banner_medical.png" />
    <div class="main">
      <div class="container">
        <div class="title">
          <h1>远程医疗</h1>
          <div class="english-title">Telemedicine</div>
        </div>
        <div class="business-range" v-for="item in message" :key="item.key">
          <div class="title">
            <span></span>
            {{item.businessTitle}}
          </div>
          <p class="content">{{item.bisnessContent}}</p>
          <p class="content">{{item.bisnessContent2}}</p>
          <div class="icon" v-for="itm in item.icon" :key="itm">
            <img :src="itm" />
          </div>
          <div v-if="item.businessTitle==='项目建设流程及建设效果'" class="photo">
            <div>
              <img src="@/assets/智慧医疗/telemedicine_pic2.png" />
            </div>
            <div>
              <img src="@/assets/智慧医疗/telemedicine_pic3.png" />
            </div>
            <div>
              <img src="@/assets/智慧医疗/telemedicine_pic4.png" />
            </div>
            <div>
              <img src="@/assets/智慧医疗/telemedicine_pic5.png" />
            </div>
            <div>
              <img src="@/assets/智慧医疗/telemedicine_pic6.png" />
            </div>
            <div>
              <img src="@/assets/智慧医疗/telemedicine_pic7.png" />
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
            "广东省远程医疗平台，是由广东省卫健委组织建设的省域远程医疗协作网络，目前已经完成了省级远程医疗平台、远程医疗网络建设、在20家省级医院、56家县级医院完成了远程医疗网络接入建设，更是通过粤东西北乡镇远程医疗建设，将1000多家乡镇卫生院接入省远程医疗网络。实现了WEB端、移动端的远程医疗接入，诊疗资料的上传，健康监测数据的同步等。",
          bisnessContent2:
            "目前，广东省远程医疗平台已经成为省内远程医疗业务的能力输出平台。能够满足医联体/医共体远程医疗业务需求、应急医疗远程业务需求、单体医院接入省平台等多业务场景的业务及技术要求。",
          icon: [require("@/assets/智慧医疗/telemedicine_pic1.png")],
          key: "1"
        },
        {
          businessTitle: "项目建设流程及建设效果",
          bisnessContent: "",
          icon: [require("@/assets/智慧医疗/telemedicine_process.png")],
          key: "2"
        },
        {
          businessTitle: "产品功能",
          bisnessContent: "",
          icon: [
            require("@/assets/智慧医疗/telemedicine_chart1.png"),
            require("@/assets/智慧医疗/telemedicine_chart2.png")
          ],
          key: "3"
        },
        {
          businessTitle: "产品价值",
          bisnessContent: "",
          icon: [require("@/assets/智慧医疗/telemedicine_process3.png")],
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
  // margin-bottom: 69px;
  // height: 740px;
}

.container {
  img {
    width: 100%;
  }
  width: 1000px;
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
  font-family: Microsoft YaHei;
  color: rgba(38, 38, 38, 1);
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
    .photo {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      div {
        width: 30%;
        margin-top: 45px;
        overflow: hidden;
      }
      img:hover {
        transform: scale(1.2);
        transition: all 0.6s;
      }
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
      letter-spacing: 1px;
    }
    .icon {
      margin-top: 50px;
      :nth-child(1) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>