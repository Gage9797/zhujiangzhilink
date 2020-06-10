<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-29 09:52:24
--> 
<template>
  <div  class="main">
    <img class="banner" src="@/assets/智慧医疗/banner_medical.png" />
    <div class="main">
      <div class="container">
        <div class="title">
          <h1>医共体信息平台</h1>
          <div class="english-title">Medical Community Information Platform</div>
        </div>
        <div class="business-range" v-for="item in message" :key="item.key">
          <div class="title">
            <span></span>
            {{item.businessTitle}}
          </div>
          <div class="content" v-if="item.businessTitle === '总体概述'">
            <p>开展县域医疗卫生共同体信息平台建设，是深化医改的重要步骤和制度创新。有利于调整优化医疗资源结构布局，促进医疗卫生工作重心下移和资源下沉，提升基层服务能力；有利于医疗资源上下贯通，提升医疗服务体系整体效能，更好实施分级诊疗和满足群众健康需求。</p>
            <p>通过完善县乡村医疗卫生信息化建设，强化基层医疗卫生机构信息一体化应用，实现基层医疗机构与县级医院的影像、检验、心电、病历、档案等信息的汇集与共享，同时与远程会诊、双向转诊、帮扶指导等业务进行协同，实现优质医疗资源有效下沉，提升基层医疗机构服务能力，最终形成<strong>"基层首诊、双向转诊、急慢分治、上下联动"</strong>的分级诊疗模式。</p>
          </div>
          <div class="icon" v-for="itm in item.icon" :key="itm">
            <img :src="itm" />
          </div>
          <div v-if="item.businessTitle === '总体架构'">
              <p>{{item.bisnessContent}}</p>
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
            '',
          icon: [
          ],
          key: "1"
        },
        {
          businessTitle: "总体架构",
          bisnessContent:
            "县域医共体信息平台内的信息交换服务总线组件为一体化支撑体系构筑了信息互联互通的基础设施。居民健康卡作为居民在机构内和跨机构接受服务时身份识别和服务信息入口，是推动一体化的核心抓手，结合跨域主索引和电子健康档案库对居民健康服务信息的规范存储和存取控制，是构建县域医共体信息平台的基石。县乡村各级医疗卫生机构的一体化业务应用信息系统通过与区域卫生信息平台相连完成县域内系统互联互通、服务信息共享，形成一体化支撑体系的基础部分。在此基础上，依据县乡村医疗服务协同一体化的业务场景有针对性地建设域内跨机构服务协作、机构与居民互动、主管部门对各机构的监管的协同和管理应用，形成一体化支撑体系的主干部分。在一体化支撑体系主干上，接入域内其它部门系统和域内外互联网相关应用，可以充分整合各类医疗健康服务资源，形成一体化支撑体系的扩展部分。三个部分有机结合，共同组成规范有序、服务完善、高效集成、发展动能十足的县乡村医疗服务一体化信息平台。",
          icon: [require("@/assets/智慧医疗/pic_com_chart.png")],
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
  img {
    width: 100%;
  }
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
      p {
        margin-top: 50px;
      }
    }
    p {
        text-align: justify;
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