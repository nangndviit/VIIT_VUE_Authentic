<template>
   <LayoutView>
    <div class="container">
      <div class="thanhngang"></div>

      <div class="product__main">
        <Detail :product="product" :size="size" />
      </div>

      <div class="describe">
        <Detailtion :product="product" />
      </div>
    </div>
   </LayoutView>
</template>

<script>
import LayoutView from "@/layout/LayoutView.vue";
import Detail from "@/components/Details/Product_Describe.vue";
import Detailtion from "@/components/Details/Detailtion.vue";
import Product from "@/components/Main/Product.vue";

export default {
  components: {
    Product,
    LayoutView,
    Detail,
    Detailtion,
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
        let res = await axios.get(`${import.meta.env.VITE_API_URL}/products/takePounds/` + this.$route.params.ID_SP)
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
