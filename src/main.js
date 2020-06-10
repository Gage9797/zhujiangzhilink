/*
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-26 18:31:49
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'babel-polyfill'
import './utils/index.scss'
// import BaiduMap from 'vue-baidu-map';
// Vue.use(BaiduMap, {
//       /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
//       ak: 'nQSM0T54GYqxyFtaOGqkMV4OVX5NIicd'
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
