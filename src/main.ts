import { MotionPlugin } from '@vueuse/motion';
import PrimeVue from 'primevue/config';
import { registerSW } from 'virtual:pwa-register';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "primeicons/primeicons.css";
import 'primevue/resources/primevue.min.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";

import './assets/main.css';

const app = createApp(App);
registerSW({
  onOfflineReady() {}
});

app.use(router);
app.use(MotionPlugin);
app.use(PrimeVue);

app.mount('#app');
