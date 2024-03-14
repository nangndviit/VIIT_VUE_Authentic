<template>
  <main>
    <Header />
    <div class="container">
      <div class="thanhngang"></div>

      <div class="product__main">
        <ProductDescribe :product="selectedProduct" :categories="categories" :sizes="sizes"  :brands="brands" />
      </div>

      <div class="describe">
        <FooterDescribe :product="product" />
      </div>
    </div>
    <!-- Product1 -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Sản phẩm nổi bật</h4>
          <ul class="grid-list">
          <Product v-for="(product, index) in categories[0]?.products" :key="'nike-shoes' + index" :product="product" 
          :categories="categories" @click="selectProduct(product.ID_SP)" />
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
      sizes: [],
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
        const [categoriesResponse, brandsResponse, sizesResponse] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/cate/findID"),
          axios.get("http://127.0.0.1:8000/api/brand/index"),
          axios.get("http://127.0.0.1:8000/api/size/index"),
          // axios.get("http://127.0.0.1:8000/api/products/show/ID_SP"),
        ]);
        this.categories = categoriesResponse.data.data;
        this.brands = brandsResponse.data;
        this.sizes = sizesResponse.data;
   
        if (this.selectedProductId) {
          const productResponse = await axios.get(`http://127.0.0.1:8000/api/products/show/${this.selectedProductId}`);
          this.products = [productResponse.data];
        }
      } catch (error) {
        console.error(error);
      }
    },
    selectProduct(productId) {
      this.selectedProductId = productId;
      this.fetchData();
    },
  },
};
</script>
