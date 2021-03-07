import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'layouts-generated'
import generatedRoutes from 'pages-generated';
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
