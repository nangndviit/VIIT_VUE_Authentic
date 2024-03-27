<template>
  <div class="bran__item">
    <router-link class="router_Click" :to="'/brands/' + brand.ID_Brand">
      <div class="bran__top">
        <div class="bran__image">
          <img :src="brand.Anh_Brand" alt="" />
          <!-- Thay đổi binding image -->
        </div>
      </div>
      <h3 class="bran__name">{{ brand.Name_Brand }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
};
</script>
