import Vue from 'vue'
import App from './App.vue'

//引入阿里图标的css样式
import './images/iconfont/font_1488329_p4diznfg8y/iconfont.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
