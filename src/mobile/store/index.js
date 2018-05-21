// package
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// local
import api from '@/api';
import '@/assets/mock';



Vue.use(Vuex);
Vue.prototype.$ajax = axios;

const company = () => {
  const url = location.pathname;
  if(url.length > 1) {
    return location.pathname.split('/')[1];
  } else {
    return 'fst';
  }
}


// 储存总的数据
export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state () {
    return {
      company: company(),
      home: [],         // 首页1
      list: [],         // 商品列表
      home1: [],        // 首页2
      orderlist: JSON.parse(sessionStorage.getItem(`${company()}_orderlist`)) || {arr:[]},    // 订单列表
      orderTemp: JSON.parse(sessionStorage.getItem(`${company()}_orderTemp`)) || {},    // 缓存要提交的订单
      showWhat: '',     // 展示哪个组件？
      myInfo: JSON.parse(sessionStorage.getItem(`${company()}_myInfo`)) || {},
      selectList: JSON.parse(sessionStorage.getItem(`${company()}_selectList`)) || {arr:[]},
      defaultImg: 'this.src="' + require("@/assets/images/error.jpg") + '"',
    };
  },
  mutations: {
    /**
     * 通用,修改所有state下面的属性
     * @param {object}  arg1 state本身，要修要state,只能在mutations内部修改.
     * @param {object}  arg2 
     * {
     *  stateName: state属性名
     *  stateValue: {
     *    ...
     *  }
     * }
     */
    syncState: (state, data) => {
      state[data.stateName] = Object.assign({}, state[data.stateName], data.stateValue);
    },
    
    // 同步一些数据到 sessionStorage
    syncSession: (state,data) => {
      sessionStorage.setItem(`${state.company}_${data}`,JSON.stringify(state[data])); 
    },

    list: async state => {
      if(state.list.length !== 0) return;
      state.list = await api.getStore({url: `/api/${state.company}list`})
    },

    orderlist: async state => {
      // if(state.orderlist.length !== 0) return;
      // state.orderlist = await api.getOrderlist({url: `api/${state.company}orderlist`})
    },
  }
});
