import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Category from "@/components/Main/Category.vue";
import Slider from "@/components/Main/Slider.vue";
import New from "@/components/Main/New.vue";
import Brand from "@/components/Main/Brand.vue";
import Product1 from "@/components/Main/Product1.vue";
import Accessory from "@/components/Main/Accessory.vue";
import ProductSneaker from "@/components/Main/Product_Sneaker.vue";
import ProductAdidas from "@/components/Main/Product_Adidas.vue";
import ButtonSeeAll from "@/components/Main/ButtonSeeAll.vue";
import axios from "axios";

// Import constant file
import Constants from "@/ulitis/constants.js";

export default {
  components: {
    Header,
    Slider,
    Category,
    Product1,
    Accessory,
    ProductSneaker,
    ProductAdidas,
    Brand,
    New,
    ButtonSeeAll,
    Footer,
  },
  data() {
    return {  
      nikeProducts: [],
      products: [],
      categories: [],
      brand: [],
      news: [],
    };
  },
  created() {
    this.fetchData();
    this.fetchNikeProducts();
  },
  methods: {
    fetchData() {
      axios
        .all([
          // axios.get(process.env.BASE_URL + 'cate-show'),
          // axios.get(process.env.BASE_URL + 'products'),
          // axios.get(process.env.BASE_URL + 'brand'),
          // axios.get(process.env.BASE_URL + 'events'),

          
          axios.get('http://127.0.0.1:8000/api/products'),
          axios.get('http://127.0.0.1:8000/api/cate-show'),
          axios.get('http://127.0.0.1:8000/api/brand'),
          axios.get('http://127.0.0.1:8000/api/events'),
        ])
        .then(
          axios.spread(
            (productsResponse, categoriesResponse, brandsResponse, newsResponse) => {
              this.products = productsResponse.data;
              this.categories = categoriesResponse.data;
              this.brands = brandsResponse.data;
              this.news = newsResponse.data;
            }
          )
        )
        .catch((error) => {
          console.error(error);
        });
    },
    fetchNikeProducts() {
      axios.get(Constants.NIKE_PRODUCTS_API_URL)
        .then((response) => {
          this.nikeProducts = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
};
