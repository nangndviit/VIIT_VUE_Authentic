<template>
  <div class="new__item">
    <div class="new__top">
      <div class="new__image">
        <img :src="news.Anh_Events" alt="Hình ảnh tin tức - sự kiện" />
        <!-- Sửa binding image thành news.image -->
      </div>
    </div>
    <h5 class="new__name">
      <p>
        <b>{{ news.Ten_Events }}</b>
        <!-- Sửa binding title thành news.title -->
      </p>
    </h5>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  news: Object,
});
</script>
