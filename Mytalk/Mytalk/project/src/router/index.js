import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../page/homepage.vue'
import foundpage from '../page/foundpage.vue'
import shoppage from '../page/shoppage.vue'
import myselfpage from '../page/myselfpage.vue'

const User = {
    props: ['id'],
    template: '<div>User{{id}}</div>'
}

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/homepage'
        },
        {
            path: '/homepage',
            name: 'homepage',
            component: homepage
        },
        {
            path: '/foundpage',
            name: 'foundpage',
            component: foundpage
        },
        {
            path: '/shoppage',
            name: 'shoppage',
            component: shoppage
        },
        {
            path: '/myselfpage',
            name: 'myselfpage',
            component: myselfpage
        },
        {
            path: '/user/:id',
            component: User,

        },

    ]
})