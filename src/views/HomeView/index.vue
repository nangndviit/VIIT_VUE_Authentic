<template>
  <LayoutView>
    <!-- Các phần khác -->
    <Slider />
    <Category />

    <!-- Product Nike -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>{{ categories[0]?.title }}</h4>
        <p class="thanhp">{{ categories[0]?.description }}</p>
        <ul class="grid-list">
          <Product
            v-for="(product, index) in categories[0]?.products"
            :key="'nike-shoes' + index"
            :product="product"
            :categories="categories"
          />
        </ul>
        <ButtonSeeAll />
      </div>
    </section>

    <!-- Thương hiệu -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Thương Hiệu Nổi Bật</h4>
        <p class="thanhp">Mặt hàng giày các thương hiệu nổi bật</p>
        <div class="bran__list">
          <Brand v-for="brand in brands" :key="brand.ID_SP" :brand="brand" />
        </div>
      </div>
      <div class="image_res">
        <img
          src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/Jordan7RetroInfraredRelease_Prim-1-2048x648.webp"
          alt=""
        />
      </div>
    </section>

    <!-- Product Sneaker -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>{{ categories[1]?.title }}</h4>
        <p class="thanhp">{{ categories[1]?.description }}</p>
        <ul class="grid-list">
          <Product
            v-for="(product, index) in categories[1]?.products"
            :key="'nike-shoes' + index"
            :product="product"
            :categories="categories"
          />
        </ul>
        <ButtonSeeAll />
        <div class="image_res">
          <img
            src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/Adidas-Yeezy-Slide-2048x648.webp"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- Product3 Adidas -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>{{ categories[2]?.title }}</h4>
        <p class="thanhp">{{ categories[2]?.description }}</p>
        <ul class="grid-list">
          <Product
            v-for="(product, index) in categories[2]?.products"
            :key="'nike-shoes' + index"
            :product="product"
            :categories="categories"
          />
        </ul>
        <ButtonSeeAll />
      </div>
      <div class="image_res">
        <img
          src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/off-white-sneakers-belowretail_P-1-2048x648.webp"
          alt=""
        />
      </div>
    </section>

    <!-- phụ kiện -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>{{ categories[3]?.title }}</h4>
        <p class="thanhp">{{ categories[3]?.description }}</p>
        <ul class="grid-list">
          <Product
            v-for="(product, index) in categories[3]?.products"
            :key="'nike-shoes' + index"
            :product="product"
            :categories="categories"
          />
        </ul>
        <ButtonSeeAll />
      </div>
    </section>

    <!-- tin tức - sự kiện -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Tin Tức - Sự Kiện</h4>
        <p class="thanhp">Tin tức phổ biến</p>

        <div class="new__list">
          <New v-for="news in news" :key="news.id" :news="news" />
        </div>
      </div>
    </section>
  </LayoutView>
</template>

<script>
import LayoutView from "@/layout/LayoutView.vue";
import Category from "@/components/Main/Category.vue";
import Slider from "@/components/Main/Slider.vue";
import New from "@/components/Main/New.vue";
import Brand from "@/components/Main/Brand.vue";
import Product from "@/components/Main/Product.vue";
import ButtonSeeAll from "@/components/Main/ButtonSeeAll.vue";
import axios from "axios";

export default {
  components: {
    LayoutView,
    Slider,
    Category,
    Product,
    Brand,
    New,
    ButtonSeeAll,
  },
  data() {
    return {
      nikeProducts: [],
      products: [],
      categories: [],
      brands: [],
      news: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      axios
        .all([
          axios.get(`${import.meta.env.VITE_API_URL}/products/index`),
          axios.get(`${import.meta.env.VITE_API_URL}/cate/findID`),
          axios.get(`${import.meta.env.VITE_API_URL}/brand/index`),
          axios.get(`${import.meta.env.VITE_API_URL}/event/index`),
        ])
        .then(
          axios.spread(
            (
              productsResponse,
              categoriesResponse,
              brandsResponse,
              newsResponse
            ) => {
              this.products = productsResponse.data;
              this.categories = categoriesResponse.data.data;
              this.brands = brandsResponse.data;
              this.news = newsResponse.data;
            }
          )
        )
        .catch((error) => {
          console.error(error);
        });
    },
    selectProduct(productId) {
      // Redirect to product detail page with selected product ID
      this.$router.push({ name: "productDetail", params: { id: productId } });
    },
  },
};
</script>
