<!--
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 14:27:09
--> 
<template>
  <div>
    <img class="banner" src="@/assets/信息系统集成/banner.png" />
    <div class="main">
      <div class="container">
        <div class="title">
          <h1>智慧党建</h1>
          <div class="english-title">Smart Party Building</div>
        </div>
        <div class="smart-cneter">
          <div
            class="left"
          >运用“党建+”思维，致力于打造“互联网+”的党建新模式，将智慧党建云平台向指尖移动端延伸，实现新时代党建工作信息化、标准化、智能化，将党务工作台账数字化，打通基层党建工作最后一公里。</div>
          
          <div  class="right">
            <img src="@/assets/信息系统集成/spb_pic1.png" />
          </div>
        </div>
        <div class="smart-bottom">
          <div class="title">
            <span></span>业务架构图
          </div>
          <div>
            <img class="struct-pic" src="@/assets/信息系统集成/spb_chart.png" />
          </div>
          <div class="title">
            <span></span>产品功能
          </div>
          <div>
            <div class="party_product_box">
              <div class="party_product_list">
                <div>
                  <img src="http://www.zjchilink.com/res/201903/30/33c94dd31a18b87a.png" alt />
                </div>
                <div class="party_product_cont">
                  <div class="party_product_list_title">信息管理功能</div>
                  <div>
                    <p>实现一键式建站功能，为全省各级党组织和地方党的工作部门迅速地开辟网络党建宣传阵地。</p>
                  </div>
                </div>
              </div>
              <div class="party_product_list">
                <div>
                  <img src="http://www.zjchilink.com/res/201903/30/68932fd5ca015b1c.png" alt />
                </div>
                <div class="party_product_cont">
                  <div class="party_product_list_title">党组织管理功能</div>
                  <div>
                    <p>组织信息管理模块通过建立党员信息库，实现快速对党员的数据集中化管理。</p>
                  </div>
                </div>
              </div>
              <div class="party_product_list">
                <div>
                  <img src="http://www.zjchilink.com/res/201903/30/dae231ab593df12b.png" alt />
                </div>
                <div class="party_product_cont">
                  <div class="party_product_list_title">党务管理功能</div>
                  <div>
                    <p>党内事务的日常工作，从基层到党委的工作都能实现线上全覆盖。实现了无纸化的线上办公。</p>
                  </div>
                </div>
              </div>
              <div class="party_product_list">
                <div>
                  <img src="http://www.zjchilink.com/res/201903/30/9ac983a6458ccacd.png" alt />
                </div>
                <div class="party_product_cont">
                  <div class="party_product_list_title">学习教育功能</div>
                  <div>
                    <p>基于无线互联网的移动学习方案，强调“随时、随地、随身” 的碎片式学习。实现机关党员随时随地便捷地进行学习与交流。</p>
                  </div>
                </div>
              </div>
              <div class="party_product_list">
                <div>
                  <img src="http://www.zjchilink.com/res/201903/30/2dfdcce7d746e21e.png" alt />
                </div>
                <div class="party_product_cont">
                  <div class="party_product_list_title">决策分析功能</div>
                  <div>
                    <p>通过多维度数据采集、精细化分析，以大数据形式实现党组织和党员的全程跟踪和精细管理，为决策提供基础数据支持，优化科学决策。</p>
                  </div>
                </div>
              </div>
            </div>
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
      opacity: 0.9;
      overflow: hidden;
    }
    img {
            width: 320px;
      height: 200px;
      background: rgba(103, 103, 173, 1);
    }
          img:hover {
        transform: scale(1.2);
        transition: all 0.6s;
      }
  }
  .smart-bottom {
    .title {
      margin-top: 60px;
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
    .struct-pic {
      width: 1000px;
    }
    .party_product_box {
      // margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
    }
    .party_product_list {
      text-align: justify;
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: 33px;
      box-sizing: border-box;
      .party_product_cont {
        color: #262626;
        font-size: 16px;
        padding-left: 10px;
        line-height: 30px;
        box-sizing: border-box;
      }
      .party_product_list_title {
        color: #262626;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 20px;
      }
    }
  }
}
</style>