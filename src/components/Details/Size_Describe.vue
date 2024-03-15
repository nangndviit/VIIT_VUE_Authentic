<template>

  <li class="value__label__size__items">
    <div class="variable-item-contents">
      <span class="variable-item-span variable-item-span-button">{{ size.size_name }}</span>
    </div>
  </li>

</template>

<script>
export default {
  props: {
    size: {
      type: Object,
      required: true,
    },
  },
};
</script>