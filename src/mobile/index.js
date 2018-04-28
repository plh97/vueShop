import 'lib-flexible';
import Vue from 'vue';
import Vuex from 'vuex';
import Mint, { Swipe, SwipeItem, Lazyload } from 'mint-ui';
// import VConsole from 'vconsole';
import App from './App.vue';
import { currency } from '@/assets/common/currency.js'

import router from './router';
import Footer from './component/footer';
import Header from './component/header';
import 'mint-ui/lib/style.css';
import {
  Message
} from 'peng-component';

import '@/assets/iconfont/iconfont.js';
import '@/assets/common/common.scss';

Vue.prototype.message = Message;
// 注册组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);


Vue.filter('currency', currency)

Vue.use(Lazyload);
Vue.use(Mint);
// var vConsole = new VConsole();

Vue.use(Vuex);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
