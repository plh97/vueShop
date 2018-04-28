import Vue from 'vue';
import Vuex from 'vuex';
import fst from './fst.json';
import lufa from './lufa.json';

Vue.use(Vuex);

// 储存总的数据
export default new Vuex.Store({
  state: {
    fst, lufa
  }
});
