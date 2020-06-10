<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-29 09:53:00
--> 
<template>
  <div  class="main">
    <img class="banner" src="@/assets/智慧医疗/banner_medical.png" />
    <div class="main">
      <div class="container">
        <div>
          <h1>合理用药</h1>
          <div class="english-title">Rational Drug Use</div>
        </div>
        <div class="business-range" v-for="item in message" :key="item.key">
          <div class="title">
            <span></span>
            {{item.businessTitle}}
          </div>
          <div class="content" v-if="item.businessTitle === '总体概述'">
            <p>{{item.bisnessContent}}</p>
          </div>
          <div class="icon" v-for="itm in item.icon" :key="itm">
            <div class="functionList" v-if="item.businessTitle === '产品功能'">
              <div class="left">
                <p>用药实时提醒</p>
                <p>用药查询</p>
                <p>处方点评</p>
                <p>前置审方</p>
                <p>抗菌药统计分析</p>
                <p>电子药历</p>
              </div>
              <div class="right">
                <img :src="itm" />
              </div>
            </div>
            <div v-else>
              <img :src="itm" />
            </div>
          </div>
          <div v-if="item.businessTitle === '总体架构'">
            <p>{{item.bisnessContent}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="title">
        <span></span>
        知识库储备
      </div>
    </div>
    <div class="center-bg">
      <div>
        <img src="@/assets/智慧医疗/pic_durg_knowledge.png">
      </div>
    </div>
    <!-- <img style="width: 100%;margin-top: 20px" src="@/assets/智慧医疗/durg_bg.png" /> -->
    <div class="pic-bottom" v-for="item in photos" :key="item.key">
      <div class="title">
        <span></span>
        {{item.title}}
      </div>
      <div class="img">
        <img :src="item.img" />
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
            "合理用药系统，指一套以现有的经过权威验证的、公认的药物和疾病等的系统知识及相关的用药法律法规等为基础，结合患者的实际临床体征病症，提供完备适用的药物信息、适当的用药剂量、适宜的用药剂型、合适的用药途径、恰当的用药时间等用药建议供医师和药师参考的临床用药决策支持整体解决方案。构建智能完善的临床合理用药决策支持整体解决方案，是我国医疗信息化进入到临床信息化管理及局域医疗卫生服务管理全面发展的阶段后，对临床信息管理的更深层次要求。其最终是为了把控用药的合理性，规范用药诊疗行为，提高医疗卫生资源利用率，减轻患者的经济负担，为患者提供更加优质的医疗服务，深化医院信息化建设。",
          icon: [],
          key: "1"
        },
        {
          businessTitle: "产品功能",
          bisnessContent: "",
          icon: [require("@/assets/智慧医疗/drug_pic.png")],
          key: "2"
        }
      ],
      photos: [
        {
          title: "合理用药流程图",
          img: [require("@/assets/智慧医疗/drug_process1.png")],
          key: "1"
        },
        {
          title: "前置审方流程图",
          img: [require("@/assets/智慧医疗/drug_process2.png")],
          key: "2"
        },
        {
          title: "处方点评流程图",
          img: [require("@/assets/智慧医疗/drug_process3.png")],
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
.title {
    text-align: justify;
    font-size: 26px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(38, 38, 38, 1);
    line-height: 30px;
    position: relative;
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
  }
  .center-bg{
      margin-top: 30px;

height:620px;
// padding-top: 50px;;
// margin: 0 auto;
position: relative;
  background-image: url("../../assets/智慧医疗/pic_durg_bg.png");
  div{
    position: absolute;
    width: 1000px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    img{
      width: 100%;
    }
  }
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
    .content {
      margin-top: 51px;
      text-align: justify;
    }
    p {
      text-align: justify;
    }
    .icon {
      margin-top: 50px;
      .functionList {
        display: flex;
        justify-content: space-between;
        p {
          position: relative;
          margin: 12px 25px 0;
          padding-left: 22px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(38, 38, 38, 1);
          line-height: 30px;
        }
        p::after {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 10px;
          height: 10px;
          background: rgba(38, 38, 38, 1);
          border-radius: 50%;
        }
        .left {
          flex: 1;
          height: 280px;
          margin-right: 8px;;
          background:rgba(243,243,243,1);
        }
        .right {
          height: 280px;
        }
      }
    }
  }
}
.center, .pic-bottom {
  width: 1000px;
  margin: 0 auto;
  padding: 30px;
  div{
      margin-top: 32px;
  }
  img {
    width: 100%;
      margin-top: 40px;
  }
}
</style>