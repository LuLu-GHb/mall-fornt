import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'
import '@/assets/css/global.css'
// 导入axios
import axios from 'axios';
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http:/127.0.0.1.8888/api/private/v1'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
