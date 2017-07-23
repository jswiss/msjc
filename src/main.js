// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import navbar from '@/components/Navbar';
import store from './store';
import App from './App';
import router from './router';

import '../node_modules/bulma/bulma.sass';

Vue.config.productionTip = false;

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
  },
}).$mount('#app');
