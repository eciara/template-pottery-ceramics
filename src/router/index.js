import { createRouter, createWebHistory } from 'vue-router';

import Home from './../views/HomeView.vue';
import About from './../views/AboutView.vue';
import Portfolio from './../views/PortfolioView.vue';
import Contact from './../views/ContactView.vue';
import NotFoundComponent from './../views/NotFoundComponent.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Home 
  },
  { 
    path: '/about', 
    name: 'about',
    component: About 
  },
  { 
    path: '/portfolio', 
    name: 'portfolio',
    component: Portfolio 
  },
  { 
    path: '/contact', 
    name: 'contact',
    component: Contact 
  },
  { 
    path: '/404', 
    name: '404',
    component: NotFoundComponent 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'nav-link--active',
  routes,
});

export default router;
