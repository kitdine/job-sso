import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: 'login' },
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
