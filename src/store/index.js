import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    get: axios.get(),
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  },
  modules: {
  },
});

export default store;
