<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 15:28:17
--> 
<template>
  <div>
    <img class="banner" src="@/assets/信息系统集成/banner.png" />
    <div class="main">
    <div class="container">
      <div class="title">
        <h1>智慧办公</h1>
        <div class="english-title">Smart Office</div>
      </div>
      <div
        class="content-top"
      >使用智慧大屏书写、讨论，可以帮助使用者轻松捕捉到问题的解决方式以及奇思妙想，让书写及绘画变得更高效自如；构建开放、自由的高效会议平台，帮助激发团队成员创造力，彻底发挥个体的智慧才华，让协作价值最大化。</div>
      <div class="content-bottom">
        <div>
        <img src="@/assets/信息系统集成/office_pic1.png" />

        </div>
        <div>
        <img src="@/assets/信息系统集成/office_pic2.png" />
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
// .main {
//   padding-top: 50px;
// }
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
    height: 37px;
    font-size: 14px;
    font-weight: 400;
    line-height: 37px;
    opacity: 0.7;
  }
  .content {
    &-top {
    padding-top: 37px;
      width: 1000px;
      height: 46px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 30px;
      text-align: justify;
    }
    &-bottom {
      margin-top: 59px;
      display: flex;
      justify-content: space-between;
      div {
        overflow: hidden;
        width: 480px;
        height: 300px;
      }
            img:hover {
        transform: scale(1.2);
        transition: all 0.6s;
      }
    }
  }
}
</style>