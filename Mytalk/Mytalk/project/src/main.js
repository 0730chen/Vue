// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/main.css'
import './assets/Iconfont/iconfont.css'
import axios from 'axios'   //引用axios
import ElementUI from 'element-ui' //引用element-ui
import 'element-ui/lib/theme-chalk/index.css';
import QS from 'qs'

Vue.config.productionTip = false

Vue.prototype.$axios = axios  //引用axios
Vue.prototype.qs = QS

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
