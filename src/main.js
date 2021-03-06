// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Promise from 'promise-polyfill';
require('es6-promise').polyfill();
// import 'promise-polyfill/src/polyfill';
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import {$axios} from './utils/index.js'
import VueCookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';

Vue.prototype.$axios = $axios;

Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
