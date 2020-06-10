<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 16:57:22
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/信息系统集成/banner.png" />
    <div class="main-content">
      <div class="container">
        <div class="title">
          <h1>远程视频会议解决方案</h1>
          <div class="english-title">Remote Video Conferencing Solution</div>
        </div>
        <div class="smart-bottom">
          <div class="title"><span></span>远程视频会议解决方案</div>
          <div>
            <img class="struct-pic" src="@/assets/信息系统集成/video_pic1.png" />
          </div>
          <div class="title"><span></span>远程视频会议架构图</div>
          <div>
            <img class="struct-pic" src="@/assets/信息系统集成/video_pic2.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  // margin-bottom: 69px;
  // height: 740px;
}
.main-content {
  padding-top: 50px;
}
.container {
  width: 1000px;
  margin: 0 auto;
  // padding-top: 50px;
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
  .smart-bottom {
    // :nth-child(1) {
    //   margin-top: 74px;
    // }
    // :nth-child(3) {
    //   margin-top: 135px;
    // }
    .title {
      text-align: justify;
      font-size: 25px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 200px;
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
    .struct-pic {
      // padding-top: 50px;
      width: 1000px;
    }
  }
}
</style>