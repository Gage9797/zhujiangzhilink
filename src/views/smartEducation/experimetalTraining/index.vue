<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 17:16:01
--> 
<template>
  <div class="main">
      <img class="banner" src="@/assets/智慧教育/banner.png">
      <div class="container">
        <div class="title">
          <h1>实验实训</h1>
          <div class="english-title">The Experimental Training</div>
        </div>
        <div class="content">
          <div class="content-left">
            <div class="introduction-top">珠江智联为实验实训室、在线实验实训教学、实验考试提供一体化的解决方案，从实验实训室建设、在线实验实训教学平台的部署安装到实验考试管理平台安装调试，按照标准化实验室管理规范，实现实验教学信息化管理。</div>
            <div class="introduction-bottom">
              <p>物理、化学实验室</p>
              <p>计算机机房</p>
              <p>在线实验实践教学平台</p>
              <p>实验教学与操作考评系统</p>
            </div>
          </div>
          <div style="overflow:hidden">
              <img class="content-right" src="@/assets/智慧教育/train_pic.png">
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
    // height:740px;
  }
  .container {
    width: 1000px;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
    font-family:Microsoft YaHei;
    color:rgba(38,38,38,1);
          img:hover {
        transform: scale(1.2);
        transition: all 0.6s;
      }
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
      height:285px;
      font-size:16px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(38,38,38,1);
      line-height:30px;
      text-align: justify;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #262626;
      font-size: 16px;
      letter-spacing: 1px;
      &-left {
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(38,38,38,1);
        line-height:30px;
        .introduction-top {
          width:474px;
          height:106px;
          font-size:16px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(38,38,38,1);
          line-height:30px;
        }
        .introduction-bottom {
          margin-top: 55px;
          p {
            position: relative;
            margin: 0;
            padding-left: 32px;
            font-size:16px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(38,38,38,1);
            line-height:30px;
            }
          p::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 8px;
            width:10px;
            height:10px;
            background:rgba(38,38,38,1);
            border-radius:50%;
          }
        }
      }
      &-right {
        width:415px;
        height:285px;
      }
    }
  }
</style>