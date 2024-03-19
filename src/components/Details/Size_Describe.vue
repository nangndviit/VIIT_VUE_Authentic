<template>
  <ul class="value__label__size">
    <li v-for="size in sizes" :key="size.id" class="value__label__size__items">
        <div class="variable-item-contents">
          <span class="variable-item-span variable-item-span-button">{{ size.size_name }}</span>
        </div>
      </li>
</ul>
</template>

<script>
export default {
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
};
</script>
