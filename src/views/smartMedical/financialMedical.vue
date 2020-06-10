<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 17:26:06
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/智慧医疗/banner_medical.png" />
    <div class="main">
      <div class="container">
        <div class="title">
          <h1>财政医疗电子票据</h1>
          <div class="english-title">Financial Medical E-bills</div>
        </div>
        <div class="business-range" v-for="item in message" :key="item.key">
          <div class="title">
            <span></span>
            {{item.businessTitle}}
          </div>
          <div class="content" v-if="item.businessTitle === '总体概述'">
            <p>随着医疗行业信息化的发展，充分利用互联网技术，实现以数字信息代替纸质文件、以电子签名代替手工签章，通过电子计算机等电子载体进行票据的开具、存储、传输、接收、归档等，实现了电子票据无纸化的全生命周期管理。</p>
            <p>财政电子票据逐步应用于对开票实时性要求高、开票业务量大的医疗行业。进而大大降低了医院票据管理工作的人力物力，实现了老百姓办事“最多跑一次”的指导方针。</p>
            <p>珠江智联于2019年与国家和广东省财政票据平台承建商-福建博思公司签订协议，成为广东省医疗电子票据服务商，为您提供医疗电子票据一站式服务。</p>
          </div>
          <div class="icon" v-for="itm in item.icon" :key="itm">
            <img :src="itm" />
          </div>
          <div v-if="item.businessTitle === '总体概述'">图示：全国28个省启动了财政电子票据改革，其中26个省采用了财政部统一开发的电子票据系统<span style="opacity:.6">（截止2019年10月）</span></div>
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
            "随着医疗行业信息化的发展，充分利用互联网技术，实现以数字信息代替纸质文件、以电子签名代替手工签章，通过电子计算机等电子载体进行票据的开具、存储、传输、接收、归档等，实现了电子票据无纸化的全生命周期管理。财政电子票据逐步应用于对开票实时性要求高、开票业务量大的医疗行业。进而大大降低了医院票据管理工作的人力物力，实现了老百姓办事“最多跑一次”的指导方针。珠江智联于2019年与国家和广东省财政票据平台承建商-福建博思公司签订协议，成为广东省医疗电子票据服务商，为您提供医疗电子票据一站式服务。",
          icon: [
            require("@/assets/智慧医疗/pic_finnancial_map.png")
          ],
          key: "1"
        },
        {
          businessTitle: "项目建设流程及业务实现",
          bisnessContent:
            "等保 2.0 建设共为五个流程，分别是系统定级、系统备案、建设整改、等级测评和监督检查。在等保中，我司可以全部承接等保方案流程，为客户提供一站式整体解决方案。",
          icon: [require("@/assets/智慧医疗/pic_finnancial_process.png"),require("@/assets/智慧医疗/pic_finnancial_chart1.png")],
          key: "2"
        },
        {
          businessTitle: "产品功能",
          bisnessContent:
            "等保 2.0 建设共为五个流程，分别是系统定级、系统备案、建设整改、等级测评和监督检查。在等保中，我司可以全部承接等保方案流程，为客户提供一站式整体解决方案。",
          icon: [require("@/assets/智慧医疗/pic_finnancial_chart2.png"),require("@/assets/智慧医疗/pic_finnancial_chart3.png"),require("@/assets/智慧医疗/pic_finnancial_chart4.png")],
          key: "3"
        },
        {
          businessTitle: "产品价值",
          bisnessContent:
            "等保 2.0 建设共为五个流程，分别是系统定级、系统备案、建设整改、等级测评和监督检查。在等保中，我司可以全部承接等保方案流程，为客户提供一站式整体解决方案。",
          icon: [require("@/assets/智慧医疗/pic_finnancial_process2.png")],
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
    .content {
      margin-top: 51px;
      text-align: justify;
    }
    p:nth-child(2), p:nth-child(3) {
      margin-top: 50px;
    }
    .icon {
      img{
        width: 100%;
      }
      margin-top: 50px;
      :nth-child(1) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>