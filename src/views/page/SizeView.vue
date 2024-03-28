<template>
   <LayoutView>
        <Sizes />
        </LayoutView>
</template>

<script>
import LayoutView from "@/layout/LayoutView.vue";
import Sizes from "@/components/Size/Sizes.vue";
import axios from "axios";

export default {
    components: {
        LayoutView,
        Sizes,
    },
};
</script>
