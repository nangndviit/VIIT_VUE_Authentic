<template>
  <Header />
  <Shoe />
  <Footer />
  
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Shoe from "@/components/Shoe/Shoe_All.vue"

export default {
  components: {
    Header,
    Shoe,
    Footer,
  },
  
};
</script>

