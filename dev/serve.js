import Vue from 'vue';
import Dev from './serve.vue';
import 'w3-css/3/w3.css';
import 'w3-css/4/w3mobile.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
