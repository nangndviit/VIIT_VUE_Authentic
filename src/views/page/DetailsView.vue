<template>
  <main>
    <Header />
    <div class="container">
      <div class="thanhngang"></div>

      <div class="product__main">
        <ProductDescribe
          v-for="item in dataProductMain"
          :id="item.id"
          :ProductDetailsBran="item.ProductDetailsBran"
          :ProductDetailsName="item.ProductDetailsName"
          :image="item.image"
          :imageFundiin="item.imageFundiin"
          :price1="item.price1"
          :price2="item.price2"
        />
      </div>

      <div class="describe">
        <FooterDescribe
          v-for="item in dataProductFooter"
          :id="item.id"
          :Brand="item.Brand"
          :Designer="item.Designer"
          :Technology="item.Technology"
          :Color="item.Color"
          :Style="item.Style"
          :Size="item.Size"
          :MaSP="item.MaSP"
        />
      </div>
    </div>
    <!-- Product1 -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Sản phẩm nổi bật</h4>

        <ul class="grid-list">
          <Product1
            v-for="item in dataProduct1"
            :id="item.id"
            :title="item.title"
            :nameProduct="item.nameProduct"
            :image1="item.image1"
            :image2="item.image2"
            :price="item.price"
          />
        </ul>
        <ButtonSeeAll />
      </div>
    </section>
    <Footer />
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Product1 from "@/components/Main/Product1.vue";
import ProductDescribe from "@/components/Details/Product_Describe.vue";
import FooterDescribe from "@/components/Details/Footer_Describe.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";

let dataProduct1 = ref([
  {
    id: "001",
    title: "Giày Jordan 1 (2023)",
    nameProduct: "Giày Nike Air Force 1 07 White 315122-11",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
    image2:
      "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
    price: 450000,
  },
  {
    id: "002",
    title: "Giày Jordan 1 (2023)",
    nameProduct: "Giày Nike Air Force 1 07 White 315122-11",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
    image2:
      "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
    price: 450000,
  },
  {
    id: "003",
    title: "Giày Jordan 1 (2023)",
    nameProduct: "Giày Nike Air Force 1 07 White 315122-11",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
    image2:
      "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
    price: 450000,
  },
  {
    id: "004",
    title: "Giày Jordan 1 (2023)",
    nameProduct: "Giày Nike Air Force 1 07 White 315122-11",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
    image2:
      "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
    price: 450000,
  },
  {
    id: "005",
    title: "Giày Jordan 1 (2023)",
    nameProduct: "Giày Nike Air Force 1 07 White 315122-11",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
    image2:
      "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
    price: 450000,
  },
  {
    id: "006",
    title: "Giày Jordan 1 (2023)",
    nameProduct: "Giày Nike Air Force 1 07 White 315122-11",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
    image2:
      "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
    price: 450000,
  },
  {
    id: "007",
    title: "Giày Jordan 1 (2023)",
    nameProduct: "Giày Nike Air Force 1 07 White 315122-11",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
    image2:
      "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
    price: 450000,
  },
  {
    id: "008",
    title: "Giày Jordan 1 (2023)",
    nameProduct: "Giày Nike Air Force 1 07 White 315122-11",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/776547_01.jpg_79fdea599edb49e4ace83698f93f26e1.jpeg",
    image2:
      "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-4.jpg",
    price: 450000,
  },
]);

let dataProductMain = ref([
  {
    id: "001",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/34534534_42c66f7f6ba2417896b4f1aaefe7d28b.jpg",
    ProductDetailsBran: "Air Jordan 1 Low",
    ProductDetailsName: "Giày Nike Air Jordan 1 Low ‘Panda’ DC0774-101",
    price1: "3,900,000",
    price2: "4,500,000",
    imageFundiin: "https://assets.fundiin.vn/merchant/logo_transparent.png",
  },
]);

let dataProductFooter = ref([
  {
    id: "001",
    Brand: "Nike",
    Designer: "Peter Moore",
    Technology: "Air",
    Color: "White/ Wolf Grey/ Aluminum",
    Style: "Giày bóng rổ",
    Size: "True to size hoặc up 0.5 size",
    MaSP: "DC0774-105",
  },
]);
</script>
