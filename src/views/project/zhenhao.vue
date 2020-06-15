<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-29 17:59:03
--> 
<template>
  <div class="main">
    <div class="banner">
      <img src="@/assets/project/banner.jpg" />
    </div>
    <div class="container">
      <div class="industy-information">
        <div class="title">
          <h1>臻好看科技传媒</h1>
          <div class="english-title">Beautiful Technology media</div>
        </div>

        <div class="content">
          <div class="onebox">
            <iframe
              src="//player.bilibili.com/player.html?aid=35155424&amp;cid=61579517&amp;page=1"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
              width="490px"
              height="298px"
            ></iframe>
          </div>
          <div class="text">
            <div>
              <div class="title">
                <span></span>公司简介
              </div>
              <div class="information">
                <p>广州臻好看科技文化传媒有限公司，是广东珠江智联信息科技股份有限公司旗下参股子公司，定位MCN机构，专业的短视频自媒体内容生产平台；</p>
                <p>目前拥有行业知名科技类自媒体“嘿丝科技”，定位泛娱乐化互联网科技数码短视频自媒体；</p>
                <p>为客户提供品牌产品短视频解决方案，通过内容制作及发布到各大媒体平台，实现品牌产品全方位传播及内容电商销售转化</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mall">
          <div class="mall-content">
            <div>
              <img
                src="http://www.zjchilink.com/res/201906/15/7d3b2ba3e65ccb77.png"
                @mouseover.stop="onActive(0)"
                @mouseleave.stop="onHide(0)"
                alt
              />
            </div>
            <div :class="[isActive[0]?'show':'hide']">
              <div
                class="mall_box"
                :class="{active: isActive[0]}"
                @mouseover.stop="onActive(0)"
                @mouseleave.stop="onHide(0)"
              >
                <div>
                  <p class="english">Perfect Products Shopping Mall</p>
                  <p class="chinese">臻有品商城</p>
                </div>
                <div class="arrow_icon">
                  <a href="https://h5.youzan.com/v2/feature/PWhJRW65uU" target="_blank">
                    <img src="http://www.zjchilink.com//tpl/www/images/zjzl/hey_icon_arrow.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mall-content">
            <img
              src="http://www.zjchilink.com/res/201906/15/56d54f3f9a0d47a4.png"
              alt
              @mouseover.stop="onActive(1)"
              @mouseleave.stop="onHide(1)"
            />
            <div :class="[isActive[1]?'show':'hide']">
              <div
                class="mall_box"
                :class="{active: isActive[1]}"
                @mouseover.stop="onActive(1)"
                @mouseleave.stop="onHide(1)"
              >
                <div>
                  <p class="english">Silk Sister Personalized IP</p>
                  <p class="chinese">极具辨识度的美女丝姐团，强有力超吸睛的丝姐IP</p>
                </div>
                <div class="arrow_icon">
                  <a
                    href="https://weibo.com/p/1005056343512594/home?from=page_100505&amp;mod=TAB#place"
                    target="_blank"
                  >
                    <img src="http://www.zjchilink.com//tpl/www/images/zjzl/hey_icon_arrow.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info_data">
      <div class="info_data_box">
        <div class="play_data">
          <p class="num">
            <span>
              150W
              <i>+</i>
            </span>
          </p>
          <p class="info_title">全网粉丝量</p>
        </div>
        <div class="play_data">
          <p class="num">
            <span>
              1.6亿
              <i>+</i>
            </span>
          </p>
          <p class="info_title">总播放量</p>
        </div>
        <div class="play_data">
          <p class="num">
            <span>
              90W
              <i>+</i>
            </span>
          </p>
          <p class="info_title">集均播放量</p>
        </div>
        <div class="ranking_box">
          <p>
            <span class="ranking_title">科技类全网排名最高第</span>
            <span class="num">9</span>
            <span>名</span>
          </p>
          <p class="rank_margin">
            <span class="ranking_title">触电新闻科技自媒体年度第</span>
            <span class="num">9</span>
            <span>名</span>
          </p>
          <p>
            <span class="ranking_title">搜狐科技类自媒体最高第</span>
            <span class="num">1</span>
            <span>名</span>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="aboutUs_box">
        <div class="introduce">
          <div class="matrices">
            <img src="http://www.zjchilink.com/res/201906/15/1be4da649f534a61.png" alt />
            <div class="matrices_cont">
              <div class="matrices_title">栏目矩阵</div>
              <div class="matrice_cont">
                <p>嘿丝测评：数码3C、智能硬件产品测评类栏目;</p>
                <p>嘿丝show：互联网科技资讯分析吐槽类栏目</p>
                <p>嘿丝小玩意：新奇特产品种草类小视频栏目;</p>
                <p>嘿PP：有趣的APP/小程序体验种草类栏目;</p>
                <p>嘿点子：科技数码及技巧、窍门介绍类栏目</p>
              </div>
            </div>
          </div>
          <div class="aboutUs_list">
            <div class="list_item">
              <div>
                <img src="http://www.zjchilink.com/res/201906/15/43bb4e2d2b550518.png" alt />
              </div>
              <div class="list_item_cont">
                <p class="item_title">商业价值</p>
                <div class="item_cont">
                  <p>市场稀缺型内容媒体，未来将打造成国内一流的泛娱乐化互联 网科技媒体</p>
                </div>
              </div>
            </div>
            <div class="list_item middle">
              <div>
                <img src="http://www.zjchilink.com/res/201906/15/7b4e860947ae8418.png" alt />
              </div>
              <div class="list_item_cont">
                <p class="item_title">合作模式</p>
                <div class="item_cont">
                  <p>内容定制广告、定制化栏目、内容电商、线下发布会/活动、 企业宣传片&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                </div>
              </div>
            </div>
            <div class="list_item">
              <div>
                <img src="http://www.zjchilink.com/res/201906/15/8abc97239017a10b.png" alt />
              </div>
              <div class="list_item_cont">
                <p class="item_title">合作客户</p>
                <div class="item_cont">
                  <p>客户包括腾讯、搜狐视频、京东、三星手机、华为、荣耀、360、戴尔电脑、黑鲨手机、国美、爱奇艺、斐讯、北通、坚果投影、Roome、任租客、瑞沃、贝锐、广东省卫健委等</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="platform">
          <img src="http://www.zjchilink.com/res/201906/15/6d263825f54c28f5.png" alt />
          <div class="platform_cont">
            <div>
              <div class="publishing_title">发布平台</div>
              <div class="publishing_cont">
                <p>全网发布，包括腾讯系平台（微信公众号、腾讯视频、腾讯新闻、天天快报、微视）、B站、微博、秒拍、今日头条、西瓜视频、抖音、快手、搜狐视频、触电新闻、优酷、爱奇艺、一点资讯、网易号、百家号、UC大鱼号、A站。</p>
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
      isActive: [false, false]
    };
  },
  methods: {
    onHide(i) {
      this.isActive.forEach((item, index) => {
        this.$set(this.isActive, index, false);
      });
    },
    onActive(i) {
      this.isActive.forEach((item, index) => {
        this.$set(this.isActive, index, false);
      });
      this.$set(this.isActive, i, true);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .banner {
    img {
      width: 100%;
      // height: 740px;
    }
  }
  .container {
    width: 1000px;
    margin: 0 auto;
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
      height: 37px;
      font-size: 14px;
      font-weight: 400;
      line-height: 37px;
      opacity: 0.7;
    }
    .industy-information {
      margin-top: 50px;
    }
    .industy-information {
      // img {
      //   width: 1143px;
      //   height: 311px;
      // }
      .hide {
        position: relative;
        opacity: 0;
        // display: none;
      }
      .show {
        // display: block;
        opacity: 1;
      }
      .content {
        margin-top: 38px;
        display: flex;
        justify-content: space-between;
        text-align: justify;

        img {
          width: 323px;
          height: 170px;
          margin-right: 70px;
        }
        // .photo {
        //   width: 30%;
        // }
        .text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 30px;
          margin-bottom: 55px;
          margin-left: 20px;
          font-size: 14px;
        }
        .title {
          text-align: justify;
          font-size: 25px;
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
        .information {
          padding-top: 43px;
          font-size: 15px;
          letter-spacing: 0.6px;
          line-height: 30px;
          p {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(38, 38, 38, 1);
            line-height: 30px;
            opacity: 0.9;
          }
        }
      }
      .mall {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .mall-content {
          position: relative;
          overflow: hidden;

          .mall_box {
            width: 460px;
            position: absolute;
            left: 15px;
            bottom: -18%;
            background: #fff;
            padding: 20px 30px;
            box-sizing: border-box;
            border-top: 4px solid #bc1950;
            transition: all 0.5s;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .english {
            color: #484848;
            font-size: 16px;
          }
          .chinese {
            color: #8f9396;
            font-size: 14px;
            margin-top: 10px;
          }
          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;
          }
          img:hover {
            transform: scale(1.1);
          }
          .active {
            bottom: 10%;
          }
        }
      }
    }
  }
  .info_data {
    width: 100%;
    background: #f7f7f7;
    .info_data_box {
      width: 80%;
      height: 200px;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .info_data {
        width: 100%;
        background: #f7f7f7;
      }
      .play_data {
        border-right: 2px solid #e8eaeb;
        width: 300px;
        text-align: center;
        .info_title {
          color: #8f9396;
          font-size: 14px;
          margin-top: 10px;
        }
        span {
          font-size: 36px;
          color: #bc1950;
          position: relative;
        }
        i {
          position: absolute;
          top: -15px;
          right: -14px;
          font-size: 22px;
        }
      }
      .ranking_box {
        text-align: right;
        width: 400px;
        .ranking_title {
          display: inline-block;
          width: 220px;
          text-align: justify;
          color: #8f9396;
        }
        .num {
          color: #bc1950;
          font-size: 34px;
          margin: 0 10px 0 15px;
        }
      }
      @media screen and (max-width: 1200px) {
        .play_data {
          border-right: 2px solid #e8eaeb;
          width: 20%;
          text-align: center;
          .info_title {
            color: #8f9396;
            font-size: 14px;
            margin-top: 10px;
          }
          span {
            font-size: 36px;
            color: #bc1950;
            position: relative;
          }
          i {
            position: absolute;
            top: -15px;
            right: -14px;
            font-size: 22px;
          }
        }
        .ranking_box {
          text-align: right;
          width: 400px;
          .ranking_title {
            display: inline-block;
            width: 220px;
            text-align: justify;
            color: #8f9396;
          }
          .num {
            color: #bc1950;
            font-size: 34px;
            margin: 0 10px 0 15px;
          }
        }
      }
    }
  }
  .aboutUs_box {
    width: 1000px;
    margin: auto;
    div {
      box-sizing: border-box;
    }
    .introduce {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .matrices {
        padding-right: 20px;
        position: relative;
        img {
          width: 490px;

          transition: all 0.5s;
        }
      }
      .aboutUs_list {
        display: flex;
        padding-left: 12px;
        flex-direction: column;
        justify-content: space-between;
      }
      .matrices:hover {
        // transform: scale(0);
        .matrices_cont {
          transform: scale(1);
        }
        img {
          transform: scale(0);
        }
      }
      .matrices_cont {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #e1e2e3;
        padding: 90px;
        transform: scale(0);
        transition: all 1s;
        .matrices_title {
          font-size: 16px;
          color: #bc1950;
        }
        .matrice_cont {
          font-size: 14px;
          color: rgba(38, 38, 38, 0.8);
          margin-top: 20px;
          line-height: 25px;
        }
      }
      .list_item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: justify;
        // align-items: center;
        img {
          height: 123px;
        }
        .list_item_cont {
          position: relative;
          padding: 15px;
          background: #f7f7f7;
          height: 123px;
          .item_title {
            font-size: 16px;
            color: #262626;
          }
          p {
            line-height: 18px;
          }
          .item_cont {
            font-size: 10px;
            color: #8f9396;
            margin-top: 15px;
            text-align: justify;
          }
        }
        .list_item_cont:hover {
          // position: relative;
          background-color: rgb(188, 25, 80);
          p {
            color: #fff;
          }
        }
        .middle {
          margin: 16px 0;
        }
      }
    }
    .introduce > div {
      width: 50%;
    }
    .platform {
      position: relative;
      img {
        transition: all 0.5s;
      }
      .platform_cont {
        position: absolute;
        top: 20px;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #e1e2e3;
        transform: scale(0);
        transition: all 1s;
        padding: 80px 100px;
        .publishing_title {
          font-size: 16px;
          color: #bc1950;
        }
        .publishing_cont {
          font-size: 14px;
          color: rgba(38, 38, 38, 0.8);
          margin-top: 20px;
        }
      }
    }
    .platform:hover {
      // transform: scale(0);
      .platform_cont {
        transform: scale(1);
      }
      img {
        transform: scale(0);
      }
    }
  }
}
</style>