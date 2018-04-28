import Vue from 'vue';
import App from './App.vue';
import router from './router';

console.log('pc');

new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount(document.querySelector('#app'));
