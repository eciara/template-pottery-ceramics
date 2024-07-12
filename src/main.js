import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import AnimatedCounter from "vue-animated-counter"

// import { Bootstrap} from 'bootstrap'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';

import '@/assets/scss/style.scss';

/* import font awesome icon component */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("AnimatedCounter", AnimatedCounter)
  .use(router)
  .mount("#app");

// Make BootstrapVue available throughout your project
// app.use(Bootstrap)