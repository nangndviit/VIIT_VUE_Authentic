<template>
    <main>
        <Header />
        <div class="container">
            <div class="thanhngang"></div>
            <Search />
        </div>
        <Footer />
    </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/Search/Search.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
    components: {
        Header,
        Search,
        Footer,
    },
    data() {
        return {};
    },
    computed: {
        methods: {},
    },
};
</script>
