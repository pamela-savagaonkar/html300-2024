// Import necessary functions from Vue Router
import { createRouter, createWebHashHistory } from 'vue-router'; // Use hash history instead of web history

// Import the components that will be routed
import HomePage from './components/HomePage.vue';
import ImagesPage from './components/ImagesPage.vue';
import AccordionPage from './components/AccordionPage.vue';
import GridPage from './components/GridPage.vue';

// Create the router instance and define the routes
const router = createRouter({
  // Use hash mode for GitHub Pages compatibility
  history: createWebHashHistory(),

  // Define the routes
  routes: [
    { path: '/', component: HomePage },         // Route for the homepage
    { path: '/images', component: ImagesPage }, // Route for the images page
    { path: '/accordion', component: AccordionPage }, // Route for the accordion page
    { path: '/grid', component: GridPage }      // Route for the grid layout page
  ]
});

// Export the router instance to be used in the main application
export default router;
