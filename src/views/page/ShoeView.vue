<template>
  <Header />
  <div class="container">
    <div class="thanhngang"></div>
    <ResultsDisplayed v-for="item in dataResults" :id="item.id" :results="item.results" :popularity="item.popularity"
      :rating="item.rating" :date="item.date" :price="item.price" :price_desc="item.price_desc"
      :xem_nhieu="item.xem_nhieu" />
  </div>
  <div class="main_shoe">
    <div class="container">
      <div class="shoe_product">
        <div class="col large-3 hide-for-medium">
          <dwidge class="sidebar-inner">
            <aside class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav">
              <span class="widget-title">Lọc theo</span>
              <div class="is-divider small"></div>
              <ul class="ul_fillter_by woocommerce-widget-layered-nav-list">
                <FilterByShoe v-for="item in dataFilter" :id="item.id" :fillter="item.fillter" :count="item.count" />
              </ul>
            </aside>
            <aside class="widget woocommerce widget_price_filter">
              <span class="widget-title shop-sidebar">Lọc theo giá</span>
              <div class="is-divider small"></div>
            </aside>
          </dwidge>
        </div>
        <div class="col large-9">
          <ul class="grid-list">
            <!-- <Product v-for="item in dataProduct" :id="item.id" :title="item.title" :nameProduct="item.nameProduct"
              :image1="item.image1" :image2="item.image2" :price="item.price" /> -->
          </ul>

          <nav class="woocommerce-pagination">
            <NumberShoe />
          </nav>

          <DescriptionShoe />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ResultsDisplayed from "@/components/Shoe/Results_Displayed_Shoe.vue";
import FilterByShoe from "@/components/Shoe/Filter_By_Shoe.vue";
import NumberShoe from "@/components/Shoe/Number_Shoe.vue";
import DescriptionShoe from "@/components/Shoe/Description_Shoe.vue";
import Product from "@/components/Main/Product.vue";
let dataResults = ref([
  {
    id: "001",
    results: "Hiển thị 1 – 48 của 39541 kết quả",
    popularity: "Thứ tự theo mức độ phổ biến",
    rating: "Thứ tự theo điểm đánh giá",
    date: "Mới nhất",
    price: "Thứ tự theo giá: thấp đến cao",
    price_desc: "Thứ tự theo giá: cao xuống thấp",
    xem_nhieu: "Sản phẩm xem nhiều",
  },
]);
let dataFilter = ref([
  {
    id: "001",
    fillter: "3",
    count: "(1)",
  },
  {
    id: "002",
    fillter: "3.5",
    count: "(1)",
  },
  {
    id: "003",
    fillter: "34",
    count: "(24)",
  },
  {
    id: "004",
    fillter: "35",
    count: "(507)",
  },
  {
    id: "005",
    fillter: "35 1/2",
    count: "(36)",
  },
  {
    id: "006",
    fillter: "35 1/3",
    count: "(25)",
  },
  {
    id: "007",
    fillter: "36",
    count: "(1)",
  },
  {
    id: "008",
    fillter: "38",
    count: "(110)",
  },
  {
    id: "009",
    fillter: "40",
    count: "(1250)",
  },
  {
    id: "0010",
    fillter: "XL",
    count: "(1)",
  },
  {
    id: "011",
    fillter: "XS",
    count: "(12)",
  },
]);
</script>

<style>
.main_shoe {
  background-color: #f7f7f7;
}

.shoe_product {
  width: 100%;
  display: flex;
}

.large-3 {
  flex-basis: 25%;
  max-width: 25%;
  margin-top: 30px;
}

.large-9 {
  flex-basis: 75%;
  max-width: 75%;
  margin-top: 30px;
}

nav {
  display: block;
  width: 100%;
}

@media (max-width: 768px) {
  .main_shoe {
    width: 100%;
  }

  .large-3 {
    display: none;
  }

  .large-9 {
    display: block;
    max-width: 100%;
    left: 0;
  }
}
</style>
