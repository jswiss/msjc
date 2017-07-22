import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Incidents from '@/components/Incidents';
import Incident from '@/components/Incident';
import Form from '@/components/Form';
import Auth from '@/components/Auth';
import AuthSuccess from '@/components/AuthSuccess';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/list',
    name: 'Incidents',
    component: Incidents,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  }, {
    path: '/list/:id',
    name: 'Incident',
    component: Incident,
  }, {
    path: '/login',
    name: 'Auth',
    component: Auth,
  }, {
    path: '/login/success',
    name: 'AuthSuccess',
    component: AuthSuccess,
  },
];

export default new Router({ mode: 'history', routes, linkActiveClass: 'is-active' });
