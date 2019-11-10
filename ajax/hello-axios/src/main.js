import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'


Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs