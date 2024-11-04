import { createRouter, createWebHistory } from 'vue-router';
import StatisticsPage from '../components/StatisticsPage.vue';
import TodoPage from '../components/TodoPage.vue';

const routes = [
    {
        path: '/',
        name: 'TodoPage',
        component: TodoPage,
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: StatisticsPage,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
