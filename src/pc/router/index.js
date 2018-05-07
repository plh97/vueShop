// package
import Vue from 'vue';
import Router from 'vue-router';

// 发赛特页面
const Clock = () => import('../pages/clock/index.vue');
// 鹭法页面
const Music = () => import('../pages/music/index.vue');
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
    path: '*',
    component: Vue.component('pageNotFound', PageNotFound)
  }],
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;
