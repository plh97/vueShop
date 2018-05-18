// package
import Vue from 'vue';
import Router from 'vue-router';

// 发赛特页面
const Clock = () => import('../pages/clock/index.vue');
// 鹭法页面
const Music = () => import('../pages/music/index.vue');
// 贪吃蛇页面
const Snake = () => import('../pages/snake/index.vue');
// 2048页面
const _2048 = () => import('../pages/2048/index.vue');
// 公共组件
const PageNotFound = () => import('../component/PageNotFound.vue');

Vue.use(Router);
const router = new Router({
  routes: [{
    path: '/clock',
    component: Vue.component('index', Clock)
  }, {
    path: '/music',
    component: Vue.component('index', Music)
  }, {
    path: '/snake',
    component: Vue.component('index', Snake)
  }, {
    path: '/2048',
    component: Vue.component('index', _2048)
  }, {
    path: '*',
    component: Vue.component('pageNotFound', PageNotFound)
  }],
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;
