<template>
  <div class="container">
    <div class="thanhngang"></div>
    <ResultsDisplayed />
  </div>
  <div class="main_shoe">
    <div class="container">
      <div class="shoe_product">
        <div class="col large-3 hide-for-medium">
          <dwidge class="sidebar-inner">
            <aside
              class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
            >
              <span class="widget-title">Lọc theo</span>
              <div class="is-divider small"></div>
              <ul class="ul_fillter_by woocommerce-widget-layered-nav-list">
                <FilterByShoe
                  v-for="size in sizes"
                  :key="size.ID_SP"
                  :size="size"
                />
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
          <ul class="grid-list">
            <Product
              v-for="product in products"
              :key="product.ID_SP"
              :product="product"
              :categories="categories"
            />
          </ul>

          <nav class="woocommerce-pagination">
            <NumberShoe />
          </nav>

          <DescriptionShoe />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultsDisplayed from "@/components/Shoe/All_Shoes/Results_Displayed_Shoe.vue";
import FilterByShoe from "@/components/Shoe/All_Shoes/Filter_By_Shoe.vue";
import FilterPriceShoe from "@/components/Shoe/All_Shoes/Filter_Price_Shoe.vue";
import NumberShoe from "@/components/Shoe/All_Shoes/Number_Shoe.vue";
import DescriptionShoe from "@/components/Shoe/All_Shoes/Description_Shoe.vue";
import Product from "@/components/Main/Product.vue";
import axios from 'axios';

export default {
  components: {
    ResultsDisplayed,
    FilterByShoe,
    FilterPriceShoe,
    NumberShoe,
    DescriptionShoe,
    Product,
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
  methods: {
    async fetchData() {
      try {
        const productsResponse = await axios.get(`${import.meta.env.VITE_API_URL}/cate/search?key=giày`);
        const categoriesResponse = await axios.get(`${import.meta.env.VITE_API_URL}/cate/findID`);
        const sizesResponse = await axios.get(`${import.meta.env.VITE_API_URL}/size/show-number`);

        this.products = productsResponse.data;
        this.categories = categoriesResponse.data.data;
        this.sizes = sizesResponse.data;
      } catch (error) {
        console.error(error);
      }
    },
    selectProduct(productId) {
      this.$router.push({ name: 'productDetail', params: { id: productId } });
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
