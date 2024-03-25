<template>
  <div class="row">
    <div class="col small-12 large-12">
      <div class="col-inner">
        <h3 class="describe__h3">
          <span class="describe__h3__span">Mô Tả</span>
        </h3>
      </div>
    </div>
  </div>
  <div class="tab-description">
    <div class="tab-describe">
      <p>{{ product && product.Mo_Ta }}</p>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>