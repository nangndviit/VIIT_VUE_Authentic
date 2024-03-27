<template>
    <main>
        <Header />
        <Brand />
        <Footer />
    </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Brand from "@/components/Brand/Brands.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
    components: {
        Header,
        Brand,
        Footer,
    },
};
</script>
