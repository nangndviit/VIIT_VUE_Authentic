<template>
  <div class="bran__item">
    <div class="bran__top">
      <div class="bran__image">
        <img :src="brand.Anh_Brand" alt="" />
        <!-- Thay đổi binding image -->
      </div>
    </div>
    <h3 class="bran__name">{{ brand.Name_Brand }}</h3>
    <!-- Thay đổi binding nameBrand -->
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
