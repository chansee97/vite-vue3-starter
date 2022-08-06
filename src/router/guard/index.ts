import type { Router } from 'vue-router';

export function setupRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    next();
  });
  router.afterEach((to) => {});
}
