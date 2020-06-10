<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 15:39:34
--> 
<template>
  <div class="main">
    <img class="banner" src="@/assets/信息系统集成/banner.png" />
    <div>
      <div class="container">
        <div class="title">
          <h1>音视频系统集成解决方案</h1>
          <div class="english-title">Audio and Video System Integration Solution</div>
        </div>
        <div class="smart-bottom">
          <div class="title">
            <span></span>多媒体解决方案（传统架构方式）
          </div>
          <div class="multimedia">
            <img src="@/assets/信息系统集成/audio_chart.png" />
            <div class="multimedia-top">
              <p>音乐播放器</p>
              <p>话筒</p>
              <p>功放</p>
              <p>音响</p>
              <p>调音台</p>
              <p>处理器</p>
              <p>均衡器</p>
              <p>压限器</p>
              <p>分频器</p>
              <p>反馈抑制器</p>
              <p>各种线材</p>
            </div>
            <div class="multimedia-right">
              <p>拼接墙</p>
              <p>电视机</p>
              <p>投影机</p>
              <p>投影幕</p>
              <p>图像处理器</p>
              <p>信号放大器</p>
              <p>切换器</p>
              <p>RGB矩阵</p>
              <p>AV矩阵</p>
              <p>高清混合矩阵</p>
              <p>各类线材</p>
            </div>
            <div class="multimedia-bottom">
              <p>音响线</p>
              <p>网线</p>
              <p>话筒线</p>
              <p>VGA线</p>
              <p>HDMI线</p>
              <p>接口转换器</p>
            </div>
            <div class="multimedia-left">
              <p>录播服务器</p>
              <p>电子白板</p>
              <p>视频会议设备</p>
              <p>升降器</p>
              <p>灯光系统</p>
              <p>电动窗帘</p>
            </div>
          </div>
          <div class="title">
            <span></span>音视频系统集成解决方案
          </div>
          <div class="audio">
            <div class="img">
              <img src="@/assets/信息系统集成/audio_pic1.png" />
            </div>
            <div>无需IP预览卡，即可实现在iOS和Windows平台控制端实时预览本地接入视频和网络视频，并支持手势拖曳和多点触控等可视化操作。</div>
          </div>
          <div class="audio">
            <div class="img">
              <img src="@/assets/信息系统集成/audio_pic2.png" />
            </div>
            <div>无需传统中控，即可实现第三方设备(串口/红外/IO/ PWM)的集中管理和控制，并无需重复布线，简化系统结构，增强系统可靠性和稳定性。</div>
          </div>
          <div class="audio">
            <div class="img"> 
              <img src="@/assets/信息系统集成/audio_pic3.png" />
            </div>
            <div>无需矩阵+延长器，即可实现音视频信号的切换和长距离传输。</div>
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
  // height: 740px;
  // margin-bottom: 69px;
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
    height: 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 37px;
    opacity: 0.7;
  }
  .smart-cneter {
    margin-top: 57px;
    display: flex;
    justify-content: space-between;
    .left {
      text-align: justify;
      width: 600px;
      height: 75px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 30px;
    }
    .right {
      width: 320px;
      height: 200px;
      background: rgba(103, 103, 173, 1);
      opacity: 0.6;
    }
  }
  .smart-bottom {
    margin-top: 74px;
    .title {
      text-align: justify;
      font-size: 25px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      line-height: 94px;
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
    .multimedia {
      position: relative;
      margin-top: 68px;
      width: 980px;
      height: 600px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      background-color: #fafafa;
      img {
        width: 433px;
        height: 433px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &-top {
        position: absolute;
        left: 40px;
        top: 39px;
      }
      &-right {
        position: absolute;
        right: 40px;
        top: 39px;
      }
      &-bottom {
        position: absolute;
        left: 40px;
        bottom: 39px;
      }
      &-left {
        position: absolute;
        right: 40px;
        bottom: 39px;
      }
      p {
        position: relative;
        margin: 0;
        padding-left: 22px;
        text-align: justify;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(38, 38, 38, 1);
        line-height: 28px !important;
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
    .audio {
      width: 1000px;
      height: 250px;
      background: rgba(243, 243, 243, 1);
      display: flex;
      justify-content: space-around;
      align-items: center;
      .img {
        width: 460px;
        height: 210px;
        margin-right: 49px;
        margin-left: 20px;
        overflow: hidden;
      }
      img:hover {
        transform: scale(1.2);
        transition: all 0.6s;
      }
      div {
        flex: 1;
        line-height: 30px;
        margin-right: 40px;
        text-align: justify;
      }
    }
    :nth-child(4),
    :nth-child(5) {
      margin-bottom: 20px;
    }
  }
}
</style>