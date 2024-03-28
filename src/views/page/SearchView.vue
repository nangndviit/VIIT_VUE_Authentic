<template>
    <LayoutView>
        <div class="container">
            <div class="thanhngang"></div>
            <Search />
        </div>
    </LayoutView>
</template>

<script>
import LayoutView from "@/layout/LayoutView.vue";
import Search from "@/components/Search/Search.vue";

export default {
    components: {
        LayoutView,
        Search,
    },
};
</script>
