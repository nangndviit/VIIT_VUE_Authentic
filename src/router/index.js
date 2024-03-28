import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView/index.vue";
import DetailsView from "../views/page/DetailsView.vue";
import ShoeView from "../views/page/ShoeView.vue";
import Search from "../views/page/SearchView.vue";
import BlogsView from "../views/page/BlogsView.vue";
import ClotheView from "../views/page/ClotheView.vue";
import AccessoryView from "../views/page/AccessoryView.vue";
import ContactView from "../views/page/ContactView.vue";
import BrandView from "../views/page/BrandView.vue";
import SizeView from "../views/page/SizeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            //trang chủ
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            //chi tiết sản phẩm
            path: "/products/:ID_SP",
            name: "details",
            component: DetailsView,
        },
        {
            //tất cả brands
            path: "/brands/:ID_Brand",
            name: "all-brands",
            component: BrandView,
        },
        
        {
            //tất cả brands
            path: "/products/kich-thuoc-san-pham/:id",
            name: "one-size",
            component: SizeView,
        },
        {
            //tất cả giày
            path: "/products/tat-ca-giay",
            name: "all-shoes",
            component: ShoeView,
        },
        {
            //tất cả quần áo
            path: "/products/tat-ca-quan-ao",
            name: "all-clothes",
            component: ClotheView,
        },
        {
            // tất cả phụ kiện
            path: "/products/tat-ca-phu-kien",
            name: "all-accessory",
            component: AccessoryView,
        },
        {
            // tin tức sự kiện 
            path: "/blogs/news",
            name: "all-news",
            component: BlogsView,
        },
        {
            // liên hệ
            path: "/lien-he",
            name: "contact",
            component: ContactView,
        },
        {
            // tìm kiếm
            path: "/tim-kiem",
            name: "search",
            component: Search,
        },
    ],
});

export default router;
