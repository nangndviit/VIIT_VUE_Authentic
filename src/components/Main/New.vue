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
<style>

/* tin tuc su kien */

.new__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.new__item {
  width: 33%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.new__item:nth-child(n+4) {
  display: none; 
}

.new__top {
  width: 100%;
  height: 242px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.new__image {
  width: 99%;
  padding: 4px;
}

.new__image img {
  width: 100%;
  height: 242px;
  border-radius: 10px;
}

.new__name {
  width: 97%;
  text-align: left;
  font-size: 16px;
  color: #0a0a0a;
}

.new__name p {
  padding: 5px;
}
</style>
