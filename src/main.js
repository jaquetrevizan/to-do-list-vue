import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import store from './store/store.js';
import router from './router/router.js';
import VueApexCharts from "vue3-apexcharts";

library.add(faCheck, faXmark, faPen);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component("apex-chart", VueApexCharts);
app.use(VueApexCharts);
app.use(store);
app.use(router);
app.mount('#app');
