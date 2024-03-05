<template>
  <li>
    <div class="product-card">
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
        <p>{{ product.ID_Category }}</p>
        <a href="#"> {{ product.Ten_SP }} </a>
        <bdi>{{ product.Gia_SP }} đ</bdi>
      </div>
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
  data() {
    return {
      categories: [],
    };
  },
};
</script>
