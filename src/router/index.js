import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView/index.vue";
import DetailsView from "../views/page/DetailsView.vue";
import ShoeView from "../views/page/ShoeView.vue";
import Search from "../views/page/SearchView.vue";
import BlogsView from "../views/page/BlogsView.vue";
import ClotheView from "../views/page/ClotheView.vue";
import AccessoryView from "../views/page/AccessoryView.vue";
import ContactView from "../views/page/ContactView.vue";

const router = createRouter({
    history: createWebHistory(),
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
            path: "/products/tat-ca-quan-ao",
            name: "all-clothes",
            component: ClotheView,
        },
        {
            path: "/products/tat-ca-phu-kien",
            name: "all-accessory",
            component: AccessoryView,
        },
        {
            path: "/blogs/news",
            name: "all-news",
            component: BlogsView,
        },
        {
            path: "/lien-he",
            name: "lien-he",
            component: ContactView,
        },
        {
            path: "/tim-kiem",
            name: "tim-kiem",
            component: Search,
        },
    ],
});

export default router;
