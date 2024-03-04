<template>
  <li :key="product.ID_SP" v-if="isNikeCategory(product.ID_Category)">
    <div class="product-card">
      <router-link :to="'/product/details/' + product.ID_SP" class="route-link">
        <div class="card-banner">
          <div class="like-img">
            <img :src="product.Anh_SP1" :alt="product.Ten_SP" />
          </div>
          <div class="top-img">
            <img :src="product.Anh_SP2" :alt="product.Ten_SP" />
          </div>
          <i class="fa-regular fa-heart"></i>
        </div>
        <div class="card-content">
          <p>Giày Nike</p>
          <!-- Hiển thị Name_Category là Giày Nike -->
          <a href="#"> {{ product.Ten_SP }} </a>
          <bdi>{{ product.Gia_SP }} đ</bdi>
        </div>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isNikeCategory(categoryId) {
      return categoryId === 1;
    },
  },
};
</script>
