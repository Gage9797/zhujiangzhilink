<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 13:21:14
--> 
<template>
  <div>
      <img class="banner" src="@/assets/信息系统集成/banner.png">
      <div class="main">
      <div class="container">
        <div class="title">
          <h1>弱电智能化工程</h1>
          <div class="english-title">Weak Current Intelligent Engineering</div>
        </div>
        <div class="content-top">
            依托集团公司二十多年积累的技术能力和丰富的项目经历，为住宅、写字楼、酒店、景区、场馆、园区及学校提供整包的智能化工程解决方案，服务内容包括基础的综合布线及各类弱电系统的集成部署、安装和调试等。
        </div>
        <div class="content-bottom">
           <div class="left">
               <div>
                   <p>综合布线系统</p>
                   <p>楼宇自控系统</p>
                   <p>有线电视系统</p>
                   <p>可视对讲系统</p>
                   <p>消防报警系统</p>
                   <p>机房工程系统</p>
                   <p>智能照明系统</p>
                   <p>办公自动化系统</p>
                   <p>视频安防监控系统</p>
               </div>    
               <div>
                   <p>停车场管理系统</p>
                   <p>门禁一卡通系统</p>
                   <p>校园一卡通系统</p>
                   <p>校园管网系统</p>
                   <p>校园安防系统</p>
                   <p>校园信息发布</p>
                   <p>学校机房建设</p>
                   <p>学校多媒体教学、会议</p>
                   <p>网络覆盖系统</p>
               </div>
           </div>
           <div class="right">
           <img  src="@/assets/信息系统集成/engin_pic.png">

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
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    width:100%;
  }
  .main {
  padding-top: 50px;
}
  .container {
    width: 1000px;
    margin: 0 auto;
    // padding-top: 50px;
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
        margin-top: 82px;
        display: flex;
        justify-content: space-between;
        .left {
            display: flex;
            justify-content: space-between;
            flex: 1;
            div {
                flex: 1;
            }
            p {
                margin: 0;
                font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(38,38,38,1);
                line-height:44px;
                text-align: justify;
                padding-left: 20px;;
                position: relative;
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
        .right {
            width: 500px;
            height: 370px;
            padding: 14px 0;
            overflow: hidden;
        }
      }
    }
  }
</style>