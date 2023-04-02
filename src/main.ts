import { MotionPlugin } from '@vueuse/motion';
import { registerSW } from 'virtual:pwa-register';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);
registerSW({
  onOfflineReady() {}
});

app.use(router);
app.use(MotionPlugin);

app.mount('#app');
