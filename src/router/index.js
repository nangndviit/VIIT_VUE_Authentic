import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/index.vue";
import DetailsView from "../views/page/DetailsView.vue";
import ShoeView from "../views/page/ShoeView.vue";
import Search from "../views/page/SearchView.vue";

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
