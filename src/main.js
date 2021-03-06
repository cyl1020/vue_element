import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/rem'
import './assets/css/resize.css'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import './utils/directives';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')