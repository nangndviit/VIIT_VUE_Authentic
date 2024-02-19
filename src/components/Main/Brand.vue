<template>
  <!-- Thương hiệu -->

  <div class="bran__item">
    <div class="bran__top">
      <div class="bran__image">
        <img :src="image" alt="" />
      </div>
    </div>
    <h3 class="bran__name">{{ nameBrand }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  nameBrand: String,
  image: String,
});
</script>

<style lang="scss" scoped></style>
