<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 13:19:21
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/智慧教育/banner.png" />
    <div class="container">
      <div class="title">
        <h1>智慧教育业务介绍</h1>
        <div class="english-title">Introduction to Smart Education Business</div>
      </div>
      <div class="content">
        <div>
          珠江智联高度聚焦个性化教育领域，一直致力于
          <span>互联网+教育</span>大平台建设。服务涵盖教学/学习应用开发，数字校园建设、信息化技术与教育深度融合/区域教育均衡等领域。
        </div>
        <div class="second">
          <div>
            珠江智联提供涵盖从需求论证、咨询规划、实施建设、平台搭建、资源覆盖、运营服务的
            <span>全流程多维度</span>智慧教育整体解决方案。
          </div>
          <div>珠江智联基于云计算、大数据和互联网新一代信息技术，致力于助力区域/学校实现信息化教育建设目标，提高整体教育信息化水平，实现技术与教育的深度融合，全面激活教学应用与创新，推进区域与教育优质资源均衡公平。凭借自身丰富的项目建设经验，与深信服、华为建立了密切的合作伙伴关系，是其广东地区教育、医疗等行业的核心服务商和金牌代理商。</div>
        </div>
      </div>
      <div class="business-range">
        <div class="title">
          <span></span>业务范畴
        </div>
        <div class="content">
          <div v-for="item in contentImages" :key="item.key">
            <div class="content-image">
            <img  :src="item.src" />
            </div>
            <div class="content-msg">{{item.msg}}</div>
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
          src: require("@/assets/智慧教育/introduce_pic1.png"),
          msg: "智慧教室",
          key: "1"
        },
        {
          src: require("@/assets/智慧教育/introduce_pic2.png"),
          msg: "实验实训",
          key: "2"
        },
        {
          src: require("@/assets/智慧教育/introduce_pic3.png"),
          msg: "教育弱电智能化",
          key: "3"
        },
        {
          src: require("@/assets/智慧教育/introduce_pic4.png"),
          msg: "广州电视课堂",
          key: "4"
        },
        {
          src: require("@/assets/智慧教育/introduce_pic5.png"),
          msg: "教育健康",
          key: "5"
        },
        {
          src: require("@/assets/智慧教育/introduce_pic6.png"),
          msg: "智慧图书馆",
          key: "6"
        },
        {
          src: require("@/assets/智慧教育/introduce_pic7.png"),
          msg: "智慧党建",
          key: "7"
        },
        {
          src: require("@/assets/智慧教育/introduce_pic8.png"),
          msg: "网络安全解决方案",
          key: "8"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  // width: 100%;
  .banner {
    width: 100%;
  }
  .container {
    width: 1000px;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
    font-family: Microsoft YaHei;
    color: rgba(38, 38, 38, 1);
          img:hover {
        transform: scale(1.2);
        transition: all 0.6s;
      }
    .english-title {
      height:37px;
      font-size:14px;
      font-weight:400;
      line-height:37px;
      opacity:0.7;
      margin-bottom: 60px;
    }
    .content {
      // margin-top: 64px;
      width: 1000px;
      height: 196px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 30px;
      text-align: justify;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: #262626;
      font-size: 16px;
      letter-spacing: 1px;
      .second {
        margin-top: 50px;;
      }
      span {
        padding: 0;
        margin: 0;
      letter-spacing: 1px;

        position: relative;
        left: -3px;
        text-align: justify;
        color: #BC1950;
      }
    }
    .business-range {
      margin-top: 112px;
      .title {
        text-align: justify;
        font-size: 26px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(38, 38, 38, 1);
        position: relative;
        line-height: 30px;
      }
      span {
        display: inline-block;
        top: 0;
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 550px;
        &-image {
          overflow: hidden;
          width: 238px;
          height: 214px;
        }
        &-msg {
          margin-bottom: 44px;
          padding-top: 20px;
          width: 238px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(38, 38, 38, 1);
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }
}
</style>