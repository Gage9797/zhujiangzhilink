/*
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-27 12:58:08
 */ 
var deviceWidth
setHtmlFontSize()

if (window.addEventListener) {
  window.addEventListener('resize', function () {
      setHtmlFontSize()
  }, false)
}
function setHtmlFontSize () {
  // 1920是设计稿的宽度，当大于1920时采用1920宽度，比例也是除以19.20
    deviceWidth = document.documentElement.clientWidth > 1440 ? 1440 : document.documentElement.clientWidth
    document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 60 + 'px !important'
    console.log(document.getElementsByTagName("html")[0].style.fontSize)
}