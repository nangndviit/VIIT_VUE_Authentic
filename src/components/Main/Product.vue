<template>
  <li>
    <router-link class="router_Click" :to="'/products/' + product.ID_SP">
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
          <p>{{ getCategoryName(product.ID_Category) }}</p>
          <a>{{ product.Ten_SP }}</a>
          <bdi>{{ product.Gia_SP }} đ</bdi>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getCategoryName(categoryId) {
      if (Array.isArray(this.categories)) {
        const category = this.categories.find(
          (cat) => cat.ID_Category === categoryId
        );
        return category ? category.Name_Catogory : "Unknown Category";
      } else {
        return "Unknown Category";
      }
    },
  },
};
</script>
