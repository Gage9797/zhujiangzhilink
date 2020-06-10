<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 17:16:20
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/智慧教育/banner.png" />
    <div class="container">
      <div class="title">
        <h1>智慧教室</h1>
        <div class="english-title">Smart Classroom</div>
      </div>
      <div
        class="content-top"
      >珠江智联智慧教室解决方案面向信息化软硬件高度集成，集合物联网、云计算、大数据等技术，构建一种典型的智慧学习环境，开创性地将物联网、智能交互音视频、录播和互动教学等元素有机结合，打造一种新型的教育形式，有别于传统授听课方式。智慧课室运用现代化手段切入整个教学过程，课前学生提前预习，课中学习分组讨论，随时测试，课后教师能快速掌握每位学生学习情况，并进行针对性指导让教学变得简单、高效、智能，有助于开发学生自主思考与学习能力。</div>
      <div class="content-bottom">
        <img src="@/assets/智慧教育/class_pic.png" />
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
  // height: 740px;
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
    height: 37px;
    font-size: 14px;
    font-weight: 400;
    line-height: 37px;
    opacity: 0.7;
    margin-bottom: 60px;
  }
  .content {
    &-top {
      width: 1000px;
      height: 106px;
      font-size: 16px;
      text-align: justify;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 30px;
      letter-spacing: 1px;
    }
    &-bottom {
      margin-top: 84px;
      img {
        width: 100%;
      }
    }
  }
}
</style>