<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
=======
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/style.css';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Create Vue app and use the router
const app = createApp(App);
app.use(router);
app.mount('#app');

>>>>>>> 60d1931 (Save work before switching branches)
