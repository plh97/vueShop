import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/common/common.scss';
import 'babel-polyfill'

new Vue({
  router,
  render: h=>h(App)
}).$mount(document.querySelector('#app'));
