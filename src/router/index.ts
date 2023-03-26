import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/randomiser',
      name: 'randomiser',
      component: HomeView
    },
    {
      path: '/itinerary',
      name: 'itinerary',
      component: HomeView
    }
  ]
});

export default router;
