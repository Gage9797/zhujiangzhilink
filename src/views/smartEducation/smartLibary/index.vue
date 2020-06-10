<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 17:16:33
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/智慧教育/banner.png" />
    <div class="container">
      <div class="title">
        <h1>智慧图书馆</h1>
        <div class="english-title">Smart Library</div>
      </div>
      <div
        class="content-top"
      >珠江智联以专业、服务、创新为核心，为图书馆提供全方位解决方案。根据客户的个性化需求，定制化打造极具学校特色的文化服务品牌并保持持续不断的服务创新，引领行业标准。</div>
      <div class="content-bottom">
        <div class="left">
          <div>智慧图书馆智能系统设备配置包括：</div>
          <p>管网系统</p>
          <p>门禁控制器</p>
          <p>自助借还书机</p>
          <p>馆员工作站</p>
          <p>RFID电子标签</p>
          <p>RFID安全门系统</p>
          <p>移动还书箱</p>
          <p>图书馆管理系统软件</p>
          <p>智能监控系统</p>
          <p>紧急呼叫系统</p>
        </div>
        <div class="right">
        <img  src="@/assets/智慧教育/library_pic.png" />
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
  // height: 740px;
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
      height: 46px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 30px;
      text-align: justify;
      letter-spacing: 1px;
    }
    &-bottom {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      .left {
        div {
          margin-bottom: 12px;
        }
        p {
          position: relative;
          margin: 0;
          padding-left: 22px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(38, 38, 38, 1);
          line-height: 31px;
          text-align: justify;
        }
        p::after {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 10px;
          height: 10px;
          background: rgba(38, 38, 38, 1);
          border-radius: 50%;
        }
      }
      .right {
        overflow: hidden;
        width: 487px;
        height: 344px;
      }
    }
  }
}
</style>