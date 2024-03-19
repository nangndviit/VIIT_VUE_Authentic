<template>
  <main>
    <Header />
    <div class="container">
      <div class="thanhngang"></div>

      <div class="product__main">
        <Detail :product="product" :size="size" />
      </div>

      <div class="describe">
        <Detailtion :product="product" />
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Product from "@/components/Main/Product.vue";
import Detail from "@/components/Details/Product_Describe.vue";
import Detailtion from "@/components/Details/Detailtion.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  components: {
    Header,
    Detail,
    Detailtion,
    Product,
    Footer,
  },
  data() {
    return {
      product: {},
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
        let res = await axios.get("http://127.0.0.1:8000/api/products/takePounds/" + this.$route.params.ID_SP)
        this.product = res.data.data
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
