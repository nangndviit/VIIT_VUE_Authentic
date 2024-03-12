<template>
  <main>
    <Header />
    <div class="container">
      <div class="thanhngang"></div>

      <div class="product__main">
        <ProductDescribe :product="selectedProduct" :categories="categories" :brands="brands" />
      </div>

      <div class="describe">
        <FooterDescribe :product="selectedProduct" />
      </div>
    </div>
    <!-- Product1 -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Sản phẩm nổi bật</h4>
        <ul class="grid-list">
          <Product v-for="(product, index) in categories[0]?.products" :key="'nike-shoes' + index" :product="product" :categories="categories" />
        </ul>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Product from "@/components/Main/Product.vue";
import ProductDescribe from "@/components/Details/Product_Describe.vue";
import FooterDescribe from "@/components/Details/Footer_Describe.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  components: {
    Header,
    ProductDescribe,
    FooterDescribe,
    Product,
    Footer,
  },
  data() {
    return {
      products: [],
      categories: [],
      brands: [],
      selectedProductId: null,
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    selectedProduct() {
      let product = {};
      this.categories.forEach(category => {
        const foundProduct = category.products.find(prod => prod.ID_SP === this.selectedProductId);
        if (foundProduct) {
          product = foundProduct;
        }
      });
      return product;
    },
  },
  methods: {
    async fetchData() {
      try {
        const [productsResponse, categoriesResponse, brandsResponse] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/products/index"),
          axios.get("http://127.0.0.1:8000/api/cate/findID"),
          axios.get("http://127.0.0.1:8000/api/brand/index"),
        ]);
        this.products = productsResponse.data;
        this.categories = categoriesResponse.data.data;
        this.brands = brandsResponse.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
