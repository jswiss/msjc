import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    incidents: [],
  },
  actions: {
    // eslint-disable-next-line
    LOAD_INCIDENT_LIST: function ({ commit }) {
      axios.get('https://msjc-8912c.firebaseio.com/msjc.json')
        .then((res) => {
          commit('SET_INCIDENT_LIST', { list: res.data['-KpP3ez_zDkgPND3P8IE'] });
        // eslint-disable-next-line
        }, err => console.log(err));
    },
  },
  mutations: {
    SET_INCIDENT_LIST: (state, { list }) => {
      // eslint-disable-next-line
      state.incidents = list;
    },
  },
  getters: {
    allIncidents: state => state.incidents,
    // incidentsByTag: (state, cod) => state.incidents.filter(incident => incident.cod === cod),
  },
  modules: {
  },
});

export default store;
