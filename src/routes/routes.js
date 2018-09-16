import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '~/pages/home/Home.vue';
import About from '~/pages/About.vue';
Vue.use(VueRouter);
const NotFound = { template: '<p>Page not found</p>' };
export default new VueRouter({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/', component: Home
        }, {
            path: '/about', component: About
        }, {
            path: '*', redirect: '/'
        }
    ]
});