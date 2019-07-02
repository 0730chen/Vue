/* eslint-disable indent */
/* eslint-disable eol-last */
import Vue from 'vue'
import Router from 'vue-router'

// import footBar from '../components/FooterBuild.vue'
import homePage from '../page/homepage.vue'
import videoPage from '../page/videoPage.vue'
import myPage from '../page/myPage.vue'
import friendPage from '../page/friendPage.vue'
import accountPage from '../page/accountPage.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: homePage
    }, {
        path: '/video',
        name: 'video',
        component: videoPage
    }, {
        path: '/myPage',
        name: 'myPage',
        component: myPage
    }, {
        path: '/friendPage',
        name: 'friendPage',
        component: friendPage
    }, {
        path: '/accountPage',
        name: 'accountPage',
        component: accountPage
    }]
})