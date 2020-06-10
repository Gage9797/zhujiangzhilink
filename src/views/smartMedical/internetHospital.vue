<template>
  <div class="main">
    <img class="banner" src="@/assets/智慧医疗/banner_medical.png" />
    <div class="main">
      <div class="container">
        <div>
          <h1>互联网医院</h1>
          <div class="english-title">Internet Hospital</div>
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
            <div class="functionList" v-if="item.businessTitle === '优势'">
              <div class="left">
                <p>提高医疗效率，减少等待时间</p>
                <p>利用网络实现远程“求医问药”</p>
                <p>在线开处方，快递送药到家</p>
                <p>采集个人信息，提供个性化服务</p>
                <p>将优质医疗资源“下沉”至基层</p>
                <p>随时交流，高效管理疾病</p>
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
    <div class="pic-bottom" v-for="item in photos1" :key="item.key">
      <div class="title">
        <span></span>
        {{item.title}}
      </div>
      <div class="img">
        <img :src="item.img" />
      </div>
    </div>
    <div class="pic-cen">
      <div class="cen-bottom" v-for="item in photos2" :key="item.key">
        <div class="title">
          <span></span>
          {{item.title}}
        </div>
        <div class="img">
          <img :src="item.img" />
        </div>
      </div>
    </div>
    <div class="pic-bottom" v-for="item in photos3" :key="item.key">
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
            "互联网医院，是对国务院印发的《关于促进“互联网+医疗健康”发展的意见》中提出的允许医疗机构开展部分常见病、慢性病复诊等互联网医疗服务的战略的积极响应。作为医疗服务的一种创新形态，需要以实体医院为支撑，实现线上挂号结算、远程诊疗、咨询服务、配送药物等功能，需要传统医院信息系统以流程为中心转变为以数据驱动的智能服务为中心，以医院为边界转变为跨越时间维度、空间维度的医、药、险、康的一体化服务。珠江智联互联网医院产品围绕“诊前”、“诊中”、“诊后”三个环节和“初诊”、“复诊”、“会诊”、“健康管理”四个业务，提供在线问诊、预约挂号、在线支付、处方流转平台、慢病管理、家庭医生签约等服务，打造医疗健康新模式、新业态。",
          icon: [],
          key: "1"
        },
        {
          businessTitle: "优势",
          bisnessContent: "",
          icon: [require("@/assets/智慧医疗/pic_inter_1.png")],
          key: "2"
        }
      ],
      photos1: [
        {
          title: "系统架构",
          img: [require("@/assets/智慧医疗/pic_inter_chart1.png")],
          key: "3"
        }
      ],
      photos2: [
        {
          title: "系统架构",
          img: [require("@/assets/智慧医疗/pic_inter_process1.png")],
          key: "4"
        }
      ],
      photos3: [
        {
          title: "互联网医院整体业务模型",
          img: [require("@/assets/智慧医疗/pic_inter_chart2.png")],
          key: "5"
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
        .left {
          width: 49%;
          background: rgba(243, 243, 243, 1);
        }
        .right {
          width: 49%;
          img {
            width: 100%;
            height: 100%;
          }
        }
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
      }
    }
  }
}
.pic-cen {
  margin-top: 80px;
  position: relative;
  width: 100%;
  height: 615px;
  background: rgba(243, 243, 243, 1);
}
.center,
.pic-bottom {
  width: 1000px;
  margin: 0 auto;
  div {
    margin-top: 50px;
  }
  .img {
    margin-top: 47px;
    img {
      width: 100%;
    }
  }
}
.cen-bottom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 1000px;
  .img {
      width: 1000px;
    margin-top: 47px;
    img {
      width: 1000px;
    }
  }
}
</style>