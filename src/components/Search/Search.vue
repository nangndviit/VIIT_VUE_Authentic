<template>
  <div class="name_search">
    Tìm kiếm:
    <p>{{ $route.query.key }}</p>
  </div>

  <div class="product_search">
    <ul class="grid-list">
        <!-- <Product v-for="(product) in products" :key="product.ID_SP" :product="product"
              :categories="categories" /> -->
      <Product
        v-for="(product, index) in products"
        :key="$route.query.key + index"
        :product="product"
        :categories="categories"
      />
    </ul>
  </div>
</template>

<script>
import Product from "@/components/Main/Product.vue";
import axios from "axios";

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      categories: [],
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        let res = await axios.get(
          "http://127.0.0.1:8000/api/search?key=" + this.$route.query.key,
          "http://127.0.0.1:8000/api/cate/findID" + this.$route.query.key,
        );
        this.products = res.data;
      } catch (error) {
        // console.error(error);
      }
    },
  },
};
</script>

<style>
.name_search {
  display: flex;
  color: #0a0a0a;
  font-size: 20px;
  grid-area: auto;
  line-height: 32px;
  margin: 0px 0px 26px;
}

.name_search p {
  font-weight: 700;
}
</style>
