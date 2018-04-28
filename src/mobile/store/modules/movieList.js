// store/modules/movieList.js
import * as types from '../mutation-types';
import movie from '../../api/movie';

const state = {
  loading: true,
  title: '',
  list: []
};

const getters = {
  loading: state => state.loading,
  list: state => state.list,
  title: state => state.title
};

const actions = {
  // 获取正在上映的电影
  getInTheaters ({ commit }) {
    state.loading = true;
    movie.getInTheatersMovie().then(data => {
      commit(types.MOVIE_LIST, data);
    });
  },
  getInTheaterscoming ({ commit }) {
    state.loading = true;
    movie.getInTheaterscoming().then(data => {
      commit(types.MOVIE_LIST, data);
    });
  },
  // 搜索电影  getInTheaterscoming
  searchMovie ({ commit }, key) {
    state.loading = true;
    movie.searchMovie(key).then(data => {
      commit(types.MOVIE_LIST, data);
    });
  }
};

const mutations = {
  [types.MOVIE_LIST] (state, data) {
    state.title = data.title;
    state.list = data.subjects;
    state.loading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
