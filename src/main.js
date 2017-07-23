// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFlatpickr from 'vue-flatpickr';
import 'vue-flatpickr/theme/dark.css';
import navbar from '@/components/Navbar';
import store from './store';
import App from './App';
import router from './router';

import '../node_modules/bulma/bulma.sass';

Vue.config.productionTip = false;

Vue.use(VueFlatpickr);

/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-fluid">
      <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  store,
  components: {
    navbar,
    App,
    VueFlatpickr,
  },
}).$mount('#app');
