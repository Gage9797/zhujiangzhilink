<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 13:04:37
--> 
<template>
  <div class="main">
      <img class="banner" src="@/assets/信息系统集成/banner.png">
      <div class="main">
      <div class="container">
        <div class="title">
          <h1>大数据与云平台解决方案</h1>
          <div class="english-title">Big Data and Cloud Platform Solutions</div>
        </div>
        <div class="content-top">
            珠江智联与拥有大数据分析和云数据中心核心技术的中科曙光合作，为业界提供高性能计算机、通用服务器及存储产品。围绕高端计算机提供软件开发、系统集成与技术服务，为客户提供高水准、自主可控的大数据与云平台解决方案。曙光的硬件产品、解决方案、云计算服务已被广泛应用于政府、能源、互联网、教育、气象、医疗及公共事业等社会各个领域。珠江智联以全面、专业、增值的服务为广大用户提供良好的应用体验。
        </div>
        <div class="content-bottom">
            <img src="@/assets/信息系统集成/data_pic_bg.png">
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    width:100%;
  }
  @media screen and (min-width: 480px) {
//   .main {
//   padding-top: 50px;
// }
}
  .container {
    width: 1000px;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
    font-family:Microsoft YaHei;
    color:rgba(38,38,38,1);
    .chinese-title {
      height:37px;
      font-size:36px;
      font-weight:bold;
      line-height:37px;
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
      &-top {
        width:1000px;
        height:106px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(38,38,38,1);
        line-height:30px;
        text-align: justify;
      }
      &-bottom {
        width:1000px;
        margin-top: 60px;
        img {
            width:100%;
            height:360px;
            background:rgba(247,248,248,1);
            border:1px solid rgba(118,147,203,1);
        }
      }
    }
  }
</style>