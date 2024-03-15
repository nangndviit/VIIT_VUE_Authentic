export default {
    components: {
    },
    data() {
        return {
        };
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        sss() {
            console.log(this.product.data)
        }
    }
}