<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 17:16:44
--> 
<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 17:16:01
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/智慧教育/banner.png" />
    <div class="container">
      <div class="title">
        <h1>广州电视课堂</h1>
        <div class="english-title">Guangzhou TV Class</div>
      </div>
      <div
        class="content-top"
      >珠江智联依托珠江数码，承接广州电视课堂项目，整体方案以满足数字教育资源录制需求为宗旨：整合专业的广播录制技术、领先的教学录制方案设备，辅于专业的场景设计，快速的场地搭建能力，充分考虑电视频道播出的视频质量要求及录制前、中、后期的快速服务响应要求。</div>
      <div class="content-bottom">
        <div>
          <img src="@/assets/智慧教育/tvclass_pic1.png" />
        </div>
        <div>
          <img src="@/assets/智慧教育/tvclass_pic2.png" />
        </div>
        <div>
          <img src="@/assets/智慧教育/tvclass_pic3.png" />
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
  // height:740px;
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
      text-align: justify;
      height: 46px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      letter-spacing: 1px;
      line-height: 30px;
    }
    &-bottom {
      margin-top: 101px;
      display: flex;
      justify-content: space-between;
      div {
        overflow: hidden;
        width: 326px;
        height: 220px;
      }
    }
  }
}
</style>