<template>
  <Header />
  <div class="container">
    <div class="thanhngang"></div>
    <ResultsDisplayed />
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
                <!-- Hiển thị danh sách kích thước sản phẩm -->
                <FilterByShoe v-for="size in sizes" :key="size.ID_SP" :size="size" />
              </ul>
            </aside>
            <aside class="widget woocommerce widget_price_filter">
              <span class="widget-title shop-sidebar">Lọc theo giá</span>
              <FilterPriceShoe />
              <div class="is-divider small"></div>
            </aside>
          </dwidge>
        </div>
        <div class="col large-9">
          <!-- Hiển thị danh sách sản phẩm -->
          <ul class="grid-list">
            <ProductAll v-for="(product, index) in products" :key="product.ID_SP" :product="product"
              :categories="categories" />
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

<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ResultsDisplayed from "@/components/Shoe/Results_Displayed_Shoe.vue";
import FilterByShoe from "@/components/Shoe/Filter_By_Shoe.vue";
import FilterPriceShoe from "@/components/Shoe/Filter_Price_Shoe.vue";
import NumberShoe from "@/components/Shoe/Number_Shoe.vue";
import DescriptionShoe from "@/components/Shoe/Description_Shoe.vue";
import ProductAll from "@/components/Main/Product_All.vue";
import axios from "axios";

export default {
  components: {
    Header,
    ResultsDisplayed,
    FilterByShoe,
    FilterPriceShoe,
    NumberShoe,
    DescriptionShoe,
    ProductAll,
    Footer,
  },
  data() {
    return {
      products: [],
      categories: [],
      sizes: [],
      selectedProductId: null,
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    selectedProduct() {
      return this.products.find(product => product.ID_SP === this.selectedProductId) || {};
    },
  },
  methods: {
    async fetchData() {
      try {
        const [productsResponse, sizesResponse, categoriesResponse] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/products/index"),
          axios.get("http://127.0.0.1:8000/api/size/"),
          axios.get("http://127.0.0.1:8000/api/cate/findID"),
        ]);
        this.products = productsResponse.data;
        this.sizes = sizesResponse.data;

        if (Array.isArray(categoriesResponse.data)) {
          this.categories = categoriesResponse.data;
        } else {
          console.error("Categories data is not an array:", categoriesResponse.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.main_shoe {
  background-color: #ffffff;
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
