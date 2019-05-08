/* eslint-disable eol-last */
/* eslint-disable indent */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// eslint-disable-next-line no-unused-vars

Vue.config.productionTip = false
    // eslint-disable-next-line no-unused-vars

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})