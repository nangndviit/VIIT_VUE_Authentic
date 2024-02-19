<template>
  <!-- phụ kiện -->

  <li>
    <div class="product-card">
      <div class="card-banner">
        <div class="like-img">
          <img :src="image1" alt="Commodo leo sed porta" />
        </div>

        <div class="top-img">
          <img :src="image2" alt="Commodo leo sed porta" />
        </div>

        <i class="fa-regular fa-heart"></i>
      </div>

      <div class="card-content">
        <p>{{ title }}</p>
        <a href=""> {{ nameAccessory }} </a>
        <bdi>{{ price }} <u>đ</u></bdi>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  title: String,
  nameAccessory: String,
  image1: String,
  image2: String,
  price: Number,
});
</script>

<style lang="scss" scoped></style>
