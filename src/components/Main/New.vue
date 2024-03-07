<template>
  <div class="new__item">
    <div class="new__top">
      <div class="new__image">
        <img :src="news.Anh_Events" />
      </div>
    </div>
    <h5 class="new__name">
      <p>
        <b>{{ news.Ten_Events }}</b>
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
