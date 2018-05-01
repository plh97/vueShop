import 'lib-flexible';
import Vue from 'vue';
import Vuex from 'vuex';
import Mint, { Swipe, SwipeItem, Lazyload } from 'mint-ui';
// import VConsole from 'vconsole';
import App from './App.vue';
import { currency } from '@/assets/common/currency'
import router from './router';
import Footer from './component/footer';
import Header from './component/header';
import InputNum from './component/InputNum';
import Label from './component/Label';
import Input from './component/Input';
import 'mint-ui/lib/style.css';
import 'peng-component';
import '@/assets/iconfont/iconfont';
import '@/assets/common/common.scss';

Vue.prototype.message = Component.message;

// 注册组件
Vue.component(Swipe.name, Swipe);
Vue.component(Input.name, Input);
Vue.component(Label.name, Label);
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(InputNum.name, InputNum);


Vue.filter('currency', currency)
Vue.use(Lazyload);
Vue.use(Mint);
// var vConsole = new VConsole();



new Vue({
  el: "#app",
  router,
  render: h => h(App)
})

Vue.use(Vuex);