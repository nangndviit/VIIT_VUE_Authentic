<template>
  <!-- sự kiện -->

  <div class="new__item">
    <div class="new__top">
      <div class="new__image">
        <img :src="image" alt="Hình ảnh tin tức - sự kiện" />
      </div>
    </div>
    <h5 class="new__name">
      <p>
        <b>{{ title }}</b>
      </p>
    </h5>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  title: String,
  image: String,
});
</script>

<style lang="scss" scoped></style>
