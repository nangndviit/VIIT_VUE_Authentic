<template>
  <LayoutView>
    <Brand />
  </LayoutView>
</template>

<script>
import Brand from "@/components/Brand/Brands.vue";
import LayoutView from "@/layout/LayoutView.vue";
import axios from "axios";

export default {
  components: {
    LayoutView,
    Brand,
  },
};
</script>
