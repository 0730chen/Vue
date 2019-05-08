/* eslint-disable indent */
/* eslint-disable eol-last */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cpt from '@/components/cpt'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/cpt',
        name: 'cpt',
        component: cpt
    }]
})