import Vue from 'vue'
// import App from './App.vue'
import Default from './layouts/default.vue'

Vue.config.productionTip = false

//引入基础样式
import './assets/css/base.css';

import './assets/css/hui.css';
//引入字体比例控制
import './assets/font/font.js';

//引入路由配置
import router from './plugins/router.js';

// 引入拦截器的配置
import axios from './plugins/axios.js';

//扩展Vue实例属性
import {baseUrl} from './config/base.js';
Vue.prototype.$baseUrl = baseUrl;

//安装全局过滤器
import filters from './filters';
Object.keys(filters).map(key => Vue.filter(key,filters[key]))
let vm = new Vue({
  // render: h => h(App),
  data:{
	  bNav:true,
	  bFoot:true,
	  bLoading:true
  },
  render: h => h(Default),
  router
}).$mount('#app')

export default vm;