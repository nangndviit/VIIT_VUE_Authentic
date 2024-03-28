<template>
  <div>
    <div class="name_search">
      Tìm kiếm:
      <p>{{ $route.query.key }}</p>
    </div>

    <div class="product_search">
      <ul class="grid-list">
        <template v-if="products.length > 0">
          <Product
            v-for="(product) in products"
            :key="product.ID_SP"
            :product="product"
            :categories="categories"
          />
        </template>
        <template v-else>
          <div class="name_Notification">
            <p>Không tìm thấy kết quả tìm kiếm.</p>
          </div>
        </template>
      </ul>
    </div>
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
        let [productsRes, categoriesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/search?key=` + this.$route.query.key),
          axios.get(`${import.meta.env.VITE_API_URL}/cate/getAll`),
        ]);

        this.products = productsRes.data;
        this.categories = categoriesRes.data.data;
      } catch (error) {
        console.error(error);
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

.name_Notification {
  display: flex;
  color: #0a0a0a;
  font-size: 16px;
  justify-content: center;
  align-items: center; 
}

.name_Notification p {
  font-weight: 700;
}
</style>
