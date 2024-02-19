<script setup lang="ts">
defineProps({
  id: String,
  title: String,
  nameProduct: String,
  image1: String,
  image2: String,
  price: Number,
});
</script>
<template>
  <!-- Sản phẩm1-->

  <li :key="id">
    <div class="product-card">
      <RouterLink to="/details" class="route-link">
        <div class="card-banner">
          <div class="like-img">
            <img
              on-click="/detail"
              :src="image1"
              alt="Giày Nike Air Force 1 07 White 315122-11"
            />
          </div>

          <div class="top-img">
            <img
              on-click="/detail"
              :src="image2"
              alt="Giày Nike Air Force 1 07 White 315122-11"
            />
          </div>
          <i class="fa-regular fa-heart"></i>
        </div>

        <div class="card-content">
          <p>{{ title }}</p>
          <a href="#"> {{ nameProduct }} </a>
          <bdi>{{ price }} đ</bdi>
        </div>
      </RouterLink>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
