// package
import Vue from 'vue';
import Router from 'vue-router';

// 发赛特页面
const FstHome = () => import('../pages/fst/Home.vue');
const FstIndex = () => import('../pages/fst/index.vue');
// 鹭法页面
const LufaHome = () => import('../pages/lufa/Home.vue');
const LufaIndex = () => import('../pages/lufa/index.vue');

// 公共组件
const Set = () => import('../component/set/index.vue');
const Sell = () => import('../component/Sell/index.vue');
const Usercenter = () => import('../component/usercenter/index.vue');
const PageNotFound = () => import('../component/PageNotFound.vue');

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/fst',
      component: Vue.component('index', FstIndex),
      children: [
        {
          path: '/fst',
          component: Vue.component('Home', FstHome)
        }, {
          path: '/fst/sell',
          component: Vue.component('sell', Sell)
        }, {
          path: '/fst/set',
          component: Vue.component('set', Set)
        }, {
          path: '/fst/usercenter',
          component: Vue.component('usercenter', Usercenter)
        }
      ]
    }, {
      path: '/lufa',
      component: Vue.component('index', LufaIndex),
      children: [
        {
          path: '/lufa',
          component: Vue.component('Home', LufaHome)
        }, {
          path: '/lufa/sell',
          component: Vue.component('sell', Sell)
        }, {
          path: '/lufa/set',
          component: Vue.component('set', Set)
        }, {
          path: '/lufa/usercenter',
          component: Vue.component('usercenter', Usercenter)
        }
      ]
    }, {
      path: '*',
      component: Vue.component('pageNotFound', PageNotFound)
    }
  ],
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

// const limitRouterFunc = (args) => {
//   const { to, next, limitPage } = args;
//   if (limitPage.indexOf(to.path) >= 0) {
//     next();
//   } else {
//     Message({
//       type: 'warning',
//       time: 1000,
//       content: '请先登录~！',
//       next: () => {
//         console.log('然后你要登录呢？');
//       },
//     });
//     next({ path: limitPage[0] });
//   }
// };

// router.beforeEach((to, from, next) => {
//   const isLogin = true;
//   if(!isLogin){
//     limitRouterFunc({
//       to,
//       next,
//       limitPage: ["/login", "/register"]
//     });
//   }
// });

export default router;
