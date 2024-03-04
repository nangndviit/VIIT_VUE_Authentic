<template>
  <main>
    <!-- Các phần khác -->

    <Header />
    <Slider />
    <Category />

    <!-- Product Nike -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Giày chính hãng Nike 2023</h4>
        <p class="thanhp">
          Mẫu giày Nike Jordan 1, Air Force 1, các sản phẩm bóng rổ,… mới nhất 2023 với
          giá cực tốt
        </p>

        <ul class="grid-list">
          <Product1
            v-for="product in products"
            :key="product.ID_SP"
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
        <h4>Giày Sneaker nổi bật</h4>
        <p class="thanhp">Mặt hàng giày các thương hiệu nổi bật</p>

        <ul class="grid-list">
          <ProductSneaker
            v-for="product in products"
            :key="product.ID_SP"
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
        <h4>Yeezy by Kanye West</h4>
        <p class="thanhp">Yeezy 350 và dép Yeezy cho mùa hè 2023</p>

        <ul class="grid-list">
          <ProductAdidas
            v-for="product in products"
            :key="product.ID_SP"
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
        <h4>Phụ kiện</h4>
        <p class="thanhp">Mặt hàng phụ kiện các thương hiệu nổi bật</p>

        <ul class="grid-list">
          <Accessory
            v-for="product in products"
            :key="product.ID_SP"
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

    <Footer />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Category from "@/components/Main/Category.vue";
import Slider from "@/components/Main/Slider.vue";
import New from "@/components/Main/New.vue";
import Brand from "@/components/Main/Brand.vue";
import Product1 from "@/components/Main/Product1.vue";
import Accessory from "@/components/Main/Accessory.vue";
import ProductSneaker from "@/components/Main/Product_Sneaker.vue";
import ProductAdidas from "@/components/Main/Product_Adidas.vue";
import ButtonSeeAll from "@/components/Main/ButtonSeeAll.vue";
import axios from "axios";

export default {
  components: {
    Header,
    Slider,
    Category,
    Product1,
    Accessory,
    ProductSneaker,
    ProductAdidas,
    Brand,
    New,
    ButtonSeeAll,
    Footer,
  },
  data() {
    return {
      products: [],
      categories: [],
      brand: [],
      news: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .all([
          axios.get("http://127.0.0.1:8000/api/products"),
          axios.get("http://127.0.0.1:8000/api/cate-show"),
          axios.get("http://127.0.0.1:8000/api/brand"),
          axios.get("http://127.0.0.1:8000/api/events"),
        ])
        .then(
          axios.spread(
            (productsResponse, categoriesResponse, brandsResponse, newsResponse) => {
              this.products = productsResponse.data;
              this.categories = categoriesResponse.data;
              this.brands = brandsResponse.data;
              this.news = newsResponse.data;
            }
          )
        )
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
