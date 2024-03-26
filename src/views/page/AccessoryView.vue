<template>
  <Header />
  <AccessoryView />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AccessoryView from "@/components/Shoe/Accessory_All.vue";

export default {
  components: {
    Header,
    AccessoryView,
    Footer,
  },
};
</script>
