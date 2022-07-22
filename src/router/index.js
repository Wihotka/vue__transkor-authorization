import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/InfoView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/info',
    name: 'info',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/InfoView.vue'),
  },
  {
    path: '/contract',
    name: 'contract',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/ContractView.vue'),
  },
  {
    path: '/key',
    name: 'key',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/KeyView.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/ProjectsView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: { layout: 'auth' },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  onAuthStateChanged(auth, user => {
    const requireAuth = to.matched.some(record => record.meta.auth);
    if (requireAuth && !user) {
      next('/login');
    } else {
      if (to.fullPath === '/login' && user) {
        next('/info');
      } else if (to.fullPath === '/') {
        next('/info');
      } else {
        next();
      }
    }
  });
});

export default router;
