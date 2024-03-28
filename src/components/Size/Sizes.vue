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
  import axios from "axios";
  
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
        sizes: [],
        products: [],
        categories: [],
        sizes: [],
        selectedBrandId: null,
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const sizeId = this.$route.params.id;
          const sizesOneResponse = await axios.get(
            `${import.meta.env.VITE_API_URL}/size/show-one/${sizeId}`
          );
          const categoriesResponse = await axios.get(
            `${import.meta.env.VITE_API_URL}/cate/findID`
          );
  
          this.sizes = sizesOneResponse.data;
          this.categories = categoriesResponse.data.data;
          this.products = sizesOneResponse.data.data.products;
          console.log(this.sizes);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  