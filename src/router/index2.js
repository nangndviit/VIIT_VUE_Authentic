import { createRouter, createWebHistory } from "vue-router";

const HomeView = resolve => {
    require.ensure(['../views/HomeView/index.vue'], () => {
        resolve(require('../views/HomeView/index.vue'))
    })
}

const DetailsView = resolve => {
    require.ensure(['../views/page/DetailsView.vue'], () => {
        resolve(require('../views/page/DetailsView.vue'))
    })
}
const ShoeView = resolve => {
    require.ensure(['../views/page/ShoeView.vue'], () => {
        resolve(require('../views/page/ShoeView.vue'))
    })
}
const Search = resolve => {
    require.ensure(['../views/page/SearchView.vue'], () => {
        resolve(require('../views/page/SearchView.vue'))
    })
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/products/:ID_SP",
            name: "details",
            component: DetailsView,
        },
        {
            path: "/products/tat-ca-giay",
            name: "all-shoes",
            component: ShoeView,
        },
        {
            path: "/tim-kiem",
            name: "tim-kiem",
            component: Search,
        },
    ],
});

export default router;
