<template>
    <Header />
    <Clothe />
    <Footer />
    
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Clothe from "@/components/Shoe/Clothe_All.vue"
  
  export default {
    components: {
      Header,
      Clothe,
      Footer,
    },
    
  };
  </script>
  