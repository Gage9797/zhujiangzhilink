<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 17:16:11
--> 
<template>
  <div  class="main">
    <img class="banner" src="@/assets/智慧教育/banner.png" />
    <div class="container">
      <div class="title">
        <h1>教育健康</h1>
        <div class="english-title">Health Education</div>
      </div>
      <div class="content-top">
        <p>校园智能健管系统，采用智能系统，按照校-家-医一体化结构，具备六大功能模块，实现八类健管项目，建立健康学校品牌。</p>
        <p>系统围绕着校园的卫生健康管理，以师生的持续健康发育为核心目标，主要综合采用智能生理检测终端，物联网技术，远程视频问诊系统健康数据趋势分析模型，信息交互等多种智能技术。</p>
        <p>系统集成日常传染病监测模块，周期健康生理检测模块，学生健康发育监测模块，校健康环境管理模块，校-医远程视频医疗问诊模块，校-家健康互助互动模块等多个功能模块。</p>
        <p>系统通过日体温筛查，月基础生理指标检测，年度生理发育状态监测，年度校健康环境测评，微信互动家长，远程视频医疗兜底等多项健管服务，实现为师生打造一个适宜学生健康发育，健康学习，健康生活的健康校园的良好目标。</p>
      </div>
      <div class="content-bottom">
        <img src="@/assets/智慧教育/education_chart1.png" />
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
      height: 286px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 30px;
      letter-spacing: 1px;
      p {
        text-align: justify;
        margin-bottom: 30px;
      }
    }
    &-bottom {
      margin-top: 94px;
      img {
        width: 1000px;
        height: 550px;
      }
    }
  }
}
</style>