<template>
    <Header />
    <Contact />
    <Footer />
    
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Contact from "@/components/Contact/Contact.vue"
  
  export default {
    components: {
      Header,
      Contact,
      Footer,
    },
    
  };
  </script>