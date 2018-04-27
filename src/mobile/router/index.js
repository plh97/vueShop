// package
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/mobile/store';
import {
  Message
} from 'peng-component';
import jsonTemp from './jsonTemp';

// 公共组件
const Index = resolve => require(['@/mobile/component'], resolve);
const PageNotFound = resolve => require(['@/mobile/component/PageNotFound'], resolve);

Vue.use(Router);

const company = ['fst','zhuogao','lufa']

const router = new Router({
  routes: [{
    path: '/',
    component: Index
  },
  ...company.map(arr=>jsonTemp({
    company: arr,
  })),
  {
    path: '*',
    component: PageNotFound
  }],
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

const limitRouterFunc = (args) => {
  const { to, next, limitPage } = args;
  if (limitPage.indexOf(to.path) >= 0) {
    next();
  } else {
    Message({
      type: 'warning',
      time: 1000,
      content: '请先登录~！',
      next: () => {
        console.log('然后你要登录呢？');
      },
    });
    next({ path: limitPage[0] });
  }
};

router.beforeEach((to, from, next) => {
  const isLogin = store.state.myInfo.name;
  // const isLogin = true;
  if(!isLogin){
    limitRouterFunc({
      to,
      next,
      limitPage: ["/fst/login", "/fst/register"]
    });
  }else{
    next()
  }
});

export default router;
