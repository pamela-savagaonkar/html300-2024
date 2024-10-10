// Import necessary functions from Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import the components that will be routed
import HomePage from './components/HomePage.vue';
import ImagesPage from './components/ImagesPage.vue';
import AccordionPage from './components/AccordionPage.vue';
import GridPage from './components/GridPage.vue';

// Create the router instance and define the routes
const router = createRouter({
  // Use the HTML5 history mode for cleaner URLs without hash (#)
  history: createWebHistory(),
  
  // Define the routes
  routes: [
    // Route for the homepage
    { path: '/', component: HomePage },
    
    // Route for the images page
    { path: '/images', component: ImagesPage },
    
    // Route for the accordion page
    { path: '/accordion', component: AccordionPage },
    
    // Route for the grid layout page
    { path: '/grid', component: GridPage }
  ]
});

// Export the router instance to be used in the main application
export default router;
