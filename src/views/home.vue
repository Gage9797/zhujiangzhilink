<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-27 10:39:16
--> 
<template>
  <div class="main">
    <div class="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img src="@/assets/home/banner_medical.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/home/banner.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/home/banner-education.png" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="container">
      <div class="bisness-setion">
        <div class="title">
          <h1>业务板块</h1>
          <div class="english-title">Business Section</div>
        </div>
        <div class="content">
          <div>
            <img src="@/assets/home/icon_home_medical.png" />
            <div>智慧医疗</div>
          </div>
          <div>
            <img src="@/assets/home/icon_home_education.png" />
            <div>智慧教育</div>
          </div>
          <div>
            <img src="@/assets/home/icon_home_system.png" />
            <div>信息系统集成</div>
          </div>
          <div>
            <img src="@/assets/home/icon_home_business.png" />
            <div>投资业务</div>
          </div>
        </div>
      </div>
      <div class="our-advantages">
        <div class="title">
          <h1>我们的优势</h1>
          <div class="english-title">Our Advantages</div>
        </div>
      </div>
    </div>
    <div class="advantages-content">
      <div class="advantages-main">
        <div class="icon">
          <img src="@/assets/home/合作.png" />
          <div>合作共赢理念</div>
        </div>
        <div class="icon">
          <img src="@/assets/home/优质.png" />
          <div>优质客户服务</div>
        </div>
        <div class="icon">
          <img src="@/assets/home/资深.png" />
          <div>资深运营团队</div>
        </div>
        <div class="icon">
          <img src="@/assets/home/顶尖.png" />
          <div>顶尖研发技术</div>
        </div>
        <div class="icon">
          <img src="@/assets/home/本地.png" />
          <div>本地知名品牌</div>
        </div>
        <div class="icon">
          <img src="@/assets/home/雄厚.png" />
          <div>雄厚国资背景</div>
        </div>
      </div>
    </div>
    <div class="container-center">
      <div class="industy-information">
        <div class="title">
          <h1>企业资讯</h1>
          <div class="english-title">Industy Information</div>
        </div>
        <div class="content">
          <div class="photo">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <img src="@/assets/home/zixun.png" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/home/企业2.png" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/home/企业3.png" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="text">
            <div>
              <div class="title" @click="function() {$router.push({name:'news1'})}">
                <span></span>珠江数码集团与广州供电局达成战略合作
              </div>
              <div
                class="information"
              >3月8日上午，广州珠江数码集团股份有限公司与中国南方电网广州供电局有限公司在广州国际媒体港举行战略合作签约仪式。广州供电局党委书记、董事长甘霖…</div>
            </div>
            <div>
              <div class="title" @click="function() {$router.push({name:'news2'})}">
                <span></span>珠江智联&锐捷网络渠道合作交流会成功举行
              </div>
              <div
                class="information"
              >珠江智联携手锐捷网络，联合圈内精英，探讨广东商贸地产酒店行业发展动态，整合优质资源，书写合作共赢新篇章！ 2017年10月20日下午，由珠江…</div>
            </div>
            <div>
              <div class="title" @click="function() {$router.push({name:'news3'})}">
                <span></span>珠江数码集团与广州供电局达成战略合作
              </div>
              <div class="information">
                2017年9月20日上午9时，广州珠江数码集团股份有限公司（以下简称：珠江数码，股票代码：
                871828）新三板挂牌敲钟仪式在北京全国中小企业股份转让…
              </div>
            </div>
            <div class="button">
              <router-link :to="{name:'more'}">more</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="cooperatiive-pantner">
        <div class="title">
          <h1>合作伙伴</h1>
          <div class="english-title">Cooperative Partner</div>
        </div>
        <div class="content">
          <a href="https://partner.huawei.com" target="_blank">
            <img src="@/assets/home/huawei.png" />
          </a>
          <a href="http://channel.sugon.com" target="_blank">
            <img src="@/assets/home/中科.png" />
          </a>
          <a href="http://partners.ruijie.com.cn/ " target="_blank">
            <img src="@/assets/home/锐捷.png" />
          </a>
          <a href="http://www.h3c.com/cn/" target="_blank">
            <img src="@/assets/home/h3c.png" />
          </a>
          <a href="http://eunis.unisdigital.com" target="_blank">
            <img src="@/assets/home/ziguang.png" />
          </a>
          <a href="http://www.sundray.com.cn/" target="_blank">
            <img src="@/assets/home/信锐.png" />
          </a>
          <a href="https://www.zwxict.com/" target="_blank">
            <img src="@/assets/home/中兴.png" />
          </a>
          <a href="https://www.qianxin.com/" target="_blank">
            <img src="@/assets/home/奇安信.png" />
          </a>
          <a href="https://www.cisco.com/" target="_blank">
            <img src="@/assets/home/cisco.png" />
          </a>
          <a href="https://www.hillstonenet.com.cn/" target="_blank">
            <img src="@/assets/home/hil.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
export default {
  data() {
    return {
      swiperOptions: {
        // 所有配置均为可选（同Swiper配置）
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        centeredSlides: true,
        autoplay: 4000,
        speed: 800,
        lazyLoading : true,
        loop: true,
        direction: "horizontal",
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }

        // Some Swiper option/callback...
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  //   /deep/ .swiper-pagination  .swiper-pagination-bullet {
  //   margin: 0 8px;
  //   color: white !important;
  // }
  // overflow: scroll;
  .advantages-content {
    margin-top: 80px;
    height: 282px;
    width: 100%;
    background-image: url("../assets/home/fuwu_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .advantages-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1000px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 150px;
          height: 150px;
        }
        div {
          font-size: 18px;
          color: white;
        }
      }
    }
  }
  /deep/ .swiper-pagination .swiper-pagination-bullet-active {
    opacity: 1;
    background: white !important;
    width: 30px !important;
    height: 10px;
    border-radius: 5px;
  }
  .banner {
    img {
      width: 100%;
      // height: 740px;
    }

    /deep/ .swiper-container-horizontal .swiper-pagination-bullets {
      left: 42%;
      bottom: 3%;
      // color: white !important;
      // background-color: white;
      /* width: 30px; */
    }
    /deep/ .swiper-pagination-bullet-active {
      opacity: 1;
      background: #bc1950;
    }
    /deep/ span.swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      opacity: 1;
      margin-left: 10px;
      background-color: white;
    }
    /deep/ .swiper-slide img {
      width: 100%;
      height: 100%;
    }
  }
  .container,
  .container-center {
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
      height: 37px;
      font-size: 14px;
      font-weight: 400;
      line-height: 37px;
      opacity: 0.7;
    }
    .our-advantages,
    .industy-information,
    .cooperatiive-pantner {
      margin-top: 80px;
    }
    .bisness-setion {
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        img {
          width: 150px;
          height: 150px;
        }
        div {
          margin-top: 37px;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(38, 38, 38, 1);
          line-height: 30px;
          text-align: center;
        }
      }
    }
    .our-advantages {
      .content {
        img {
          width: 100%;
          height: 282px;
        }
      }
    }
    .industy-information {
      // img {
      //   width: 1143px;
      //   height: 311px;
      // }
      .content {
        margin-top: 38px;
        display: flex;
        justify-content: space-between;
        text-align: justify;
        // img {
        //   width: 500px;
        //   height: 325px;
        // }
        .button {
          width: 100%;
          height: 26px;
          display: flex;
          justify-content: flex-end;
          a {
            color: #bc1950;
            border: 1px solid #bc1950;
            padding: 1px 17px;
            border-radius: 20px;
          }
          a:active {
            transform: scale(0.9);
          }
        }
        .photo {
          width: 400px;
          height: 305px;
          img {
            width: 100%;
            height: 305px;
          }
        }
        .text {
          flex: 3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 33px;
          font-size: 14px;
        }
        /deep/ swiper-slide swiper-slide-active {
          width: 500px;
          overflow: hidden;
        }
        /deep/ .swiper-container-horizontal > .swiper-pagination-bullets {
          left: 34%;
          bottom: 10%;
          color: white !important;
          opacity: 1;
        }
        /deep/ .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 1;
          margin-left: 10px;
          background-color: white;
        }
        .swiper-container {
          width: 400px;
          height: 325px;
        }
        .title {
          text-align: justify;
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: 600;
          color: rgba(38, 38, 38, 1);
          line-height: 30px;
          position: relative;
          span {
            display: inline-block;
            margin-right: 19px;
            padding-left: 10px;
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
        .title:hover,
        .title:active {
          color: #bc1950;
          cursor: pointer;
        }
        .information {
          margin-left: 29px;
          margin-top: 1px;
        }
      }
    }
    .cooperatiive-pantner {
      // img {
      //   width: 1055px;
      //   height: 259px;
      // }
      .content {
        height: 259px;
        display: flex;
        margin-top: 41px;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }
      a {
        width: 18%;
        img {
          width: 100%;
        }
      }
      
          img:hover {
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
          }
    }
  }
  .container-center {
    padding-top: 0;
  }
  
}
</style>