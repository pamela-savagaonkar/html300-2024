import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ImagesPage from './components/ImagesPage.vue';
import AccordionPage from './components/AccordionPage.vue';
import GridPage from './components/GridPage.vue';

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(), // Use the HTML5 history mode
  routes: [
    { path: '/', component: HomePage },
    { path: '/images', component: ImagesPage },
    { path: '/accordion', component: AccordionPage },
    { path: '/grid', component: GridPage }
  ]
});

export default router;
