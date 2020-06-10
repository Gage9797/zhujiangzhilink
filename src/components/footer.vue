<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 14:17:51
--> 
<template>
  <div>
    <div class="container">
      <div class="icon">
        <img class="fi-logo" src="@/assets/home/logo_bottom.png" />
      </div>
      <div class="content">
        <div class="pointer">
          <p @click="function() {$router.push({name:'home', query: {name: 'home'}})}">首页</p>
          <p
            @click="function() {$router.push({name:'remoteSolution', query: {name: 'smartMedical'}})}"
          >智慧医疗</p>
          <p @click="function() {$router.push({name:'niukou', query: {name: 'project'}})}">投资业务</p>
        </div>
        <div class="pointer">
          <p
            @click="function() {$router.push({name:'weekEngineering', query: {name: 'infomationSystem'}})}"
          >信息系统集成</p>
          <p
            @click="function() {$router.push({name:'businessIntroduce', query: {name: 'smartEducation'}})}"
          >智慧教育</p>
          <p @click="function() {$router.push({name:'about', query: {name: 'about'}})}">关于我们</p>
        </div>
        <div class="right">
          <p>
            <img class="logo" src="@/assets/home/icon_bottom_number.png" />020-84138253
          </p>
          <p>
            <img class="logo" src="@/assets/home/icon_bottom_location.png" />广州市海珠区琶洲大道中8号广州国际采购中心1219
          </p>
          <p>
            <img class="logo" src="@/assets/home/icon_bottom_web.png" />www.zjchilink.com
          </p>
        </div>
      </div>
      <div class="qrcode">
        <img src="@/assets/home/scan.png" />
        <div>关注微信公众号</div>
      </div>
      <div class="bottom">
        <a rel="nofollow" href="http://www.beian.miit.gov.cn" target="_blank">粤ICP备16037358号</a>
        <span>Copyright@ 2017 广东珠江智联信息科技股份有限公司</span>
        <span>版权所有</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
    .container {
    margin-top: 80px;
    position: relative;
    background-image: url("../assets/home/bg_bottom.png");
    background-size: 100% 100%;
    width: 100%;
    height: 204px;
    display: flex;
    justify-content: space-around;
    .fi-logo {
    // margin-left: -50%;
    img {
      width: 181px;
      height: 187px;
    }
  }
  .icon {
    margin-top: 45px;
    // flex: 1;
    color: white;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    img {
      width: 81px;
      height: 87px;
    }
  }
    .qrcode {
      flex: 3;

      margin-top: 45px;
      margin-left: 99px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      div {
        padding-left: 5px;
      }
      img {
        width: 106px;
        height: 106px;
      }
    }

    .content {
      margin-top: 45px;
      display: flex;
      flex: 6;
      justify-content: space-between;
      align-items: center;
      text-align: justify;
      height: 74px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
      p {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: rgb(224, 53, 53);
        line-height: 30px;
        margin: 0;
      }
      .right {
        p {
          display: flex;
          align-items: center;
        }
        img {
          width: 20px;
          height: 20px;
        }
        .logo {
          width: 22px;
          height: 16px;
          margin-right: 27px;
        }
      }
      .pointer:hover {
        cursor: pointer;
      }
    }
    .bottom {
      position: absolute;
      text-align: center;
      top: 86%;
      left: 50%;
      width: 1440px;
      transform: translate(-50%, -50%);
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 55px;
      span {
        margin-left: 35px;
      }
    }
  }
}
@media screen and (min-width: 480px) {
  .container {
    margin-top: 80px;
    position: relative;
    background-image: url("../assets/home/bg_bottom.png");
    background-size: 100% 100%;
    width: 100%;
    height: 204px;
    display: flex;
    justify-content: space-around;
    .fi-logo {
      width: 81px;
      height: 87px;
      margin-left: 50%;
      img {
        width: 81px;
        height: 87px;
      }
    }
    .icon {
      margin-top: 45px;
      flex: 3;
      color: white;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
    }
    .qrcode {
      flex: 3;

      margin-top: 45px;
      margin-left: 99px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      div {
        padding-left: 5px;
      }
      img {
        width: 106px;
        height: 106px;
      }
    }

    .content {
      margin-top: 45px;
      display: flex;
      flex: 6;
      justify-content: space-between;
      align-items: center;
      text-align: justify;
      height: 74px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
      p {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        margin: 0;
      }
      .right {
        p {
          display: flex;
          align-items: center;
        }
        img {
          width: 20px;
          height: 20px;
        }
        .logo {
          width: 22px;
          height: 16px;
          margin-right: 27px;
        }
      }
      .pointer:hover {
        cursor: pointer;
      }
    }
    .bottom {
      position: absolute;
      text-align: center;
      top: 86%;
      left: 50%;
      width: 1440px;
      transform: translate(-50%, -50%);
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 55px;
      span {
        margin-left: 35px;
      }
    }
  }
}

</style>