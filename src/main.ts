import { MotionPlugin } from '@vueuse/motion';
import { Image } from 'ant-design-vue';
import { registerSW } from 'virtual:pwa-register';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'ant-design-vue/dist/antd.css';
import './assets/main.css';

const app = createApp(App);
registerSW({
  onOfflineReady() {}
});

app.use(router);
app.use(MotionPlugin);
app.use(Image);

app.mount('#app');
