import { createRouter, createWebHashHistory, createMemoryHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/:id',
        name: 'details',
        component: () => import('../views/Details.vue')
    },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})



export default router;