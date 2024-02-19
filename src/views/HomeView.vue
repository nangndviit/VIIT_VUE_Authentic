<template>
  <main>
    <Header />
    <Slider />
    <Category />
    <!-- Product1 -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Giày chính hãng Nike 2023</h4>
        <p class="thanhp">
          Mẫu giày Nike Jordan 1, Air Force 1, các sản phẩm bóng rổ,… mới nhất 2023 với
          giá cực tốt
        </p>

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
    <!-- Thương hiệu -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Thương Hiệu Nổi Bật</h4>
        <p class="thanhp">Mặt hàng giày các thương hiệu nổi bật</p>

        <div class="bran__list">
          <Brand
            v-for="item in dataBrand"
            :id="item.id"
            :nameBrand="item.nameBrand"
            :image="item.image"
          />
        </div>
      </div>
      <div class="image_res">
        <img
          src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/Jordan7RetroInfraredRelease_Prim-1-2048x648.webp"
          alt=""
        />
      </div>
    </section>
    <!-- Product2 -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Giày Sneaker nổi bật</h4>
        <p class="thanhp">Mặt hàng giày các thương hiệu nổi bật</p>

        <ul class="grid-list">
          <Product1
            v-for="item in dataProduct2"
            :id="item.id"
            :title="item.title"
            :nameProduct="item.nameProduct"
            :image1="item.image1"
            :image2="item.image2"
            :price="item.price"
          />
        </ul>
        <ButtonSeeAll />
        <div class="image_res">
          <img
            src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/Adidas-Yeezy-Slide-2048x648.webp"
            alt=""
          />
        </div>
      </div>
    </section>
    <!-- Product3 -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Yeezy by Kanye West</h4>
        <p class="thanhp">Yeezy 350 và dép Yeezy cho mùa hè 2023</p>

        <ul class="grid-list">
          <Product1
            v-for="item in dataProduct3"
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
      <div class="image_res">
        <img
          src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/off-white-sneakers-belowretail_P-1-2048x648.webp"
          alt=""
        />
      </div>
    </section>
    <!-- phụ kiện -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Phụ kiện</h4>
        <p class="thanhp">Mặt hàng phụ kiện các thương hiệu nổi bật</p>

        <ul class="grid-list">
          <Accessory
            v-for="item in dataAccessory"
            :id="item.id"
            :title="item.title"
            :nameAccessory="item.nameAccessory"
            :image1="item.image1"
            :image2="item.image2"
            :price="item.price"
          />
        </ul>
        <ButtonSeeAll />
      </div>
    </section>
    <!-- tin tức - sự kiện -->
    <section class="section brand" aria-label="brand">
      <div class="container">
        <h4>Tin Tức - Sự Kiện</h4>
        <p class="thanhp">Tin tức phổ biến</p>

        <div class="new__list">
          <New
            v-for="item in dataNew"
            :id="item.id"
            :title="item.title"
            :image="item.image"
          />
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Slider from "@/components/Main/Slider.vue";
import Category from "@/components/Main/Category.vue";
import Product1 from "@/components/Main/Product1.vue";
import Brand from "@/components/Main/Brand.vue";
import Accessory from "@/components/Main/Accessory.vue";
import New from "@/components/Main/New.vue";
import Footer from "@/components/Footer.vue";
import ButtonSeeAll from "@/components/Main/ButtonSeeAll.vue";
import { ref } from "vue";

// data Product1
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

// data Product2
let dataProduct2 = ref([
  {
    id: "001",
    title: "Giày New Balance",
    nameProduct: "Giày New Balance 530 Retro ‘Running Navy’ MR530SG",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/602070_01.jpg_5d78c325c3334983ab1e1013f42642bc.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-new-balance-530-retro-running-navy-mr530sg-1-768x768.jpg",
    price: 2700000,
  },
  {
    id: "002",
    title: "Giày New Balance",
    nameProduct: "Giày New Balance 530 Retro ‘Running Navy’ MR530SG",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/602070_01.jpg_5d78c325c3334983ab1e1013f42642bc.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-new-balance-530-retro-running-navy-mr530sg-1-768x768.jpg",
    price: 2700000,
  },
  {
    id: "003",
    title: "Giày New Balance",
    nameProduct: "Giày New Balance 530 Retro ‘Running Navy’ MR530SG",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/602070_01.jpg_5d78c325c3334983ab1e1013f42642bc.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-new-balance-530-retro-running-navy-mr530sg-1-768x768.jpg",
    price: 2700000,
  },
  {
    id: "004",
    title: "Giày New Balance",
    nameProduct: "Giày New Balance 530 Retro ‘Running Navy’ MR530SG",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/602070_01.jpg_5d78c325c3334983ab1e1013f42642bc.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-new-balance-530-retro-running-navy-mr530sg-1-768x768.jpg",
    price: 2700000,
  },
  {
    id: "005",
    title: "Giày New Balance",
    nameProduct: "Giày New Balance 530 Retro ‘Running Navy’ MR530SG",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/602070_01.jpg_5d78c325c3334983ab1e1013f42642bc.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-new-balance-530-retro-running-navy-mr530sg-1-768x768.jpg",
    price: 2700000,
  },
  {
    id: "006",
    title: "Giày New Balance",
    nameProduct: "Giày New Balance 530 Retro ‘Running Navy’ MR530SG",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/602070_01.jpg_5d78c325c3334983ab1e1013f42642bc.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-new-balance-530-retro-running-navy-mr530sg-1-768x768.jpg",
    price: 2700000,
  },
  {
    id: "007",
    title: "Giày New Balance",
    nameProduct: "Giày New Balance 530 Retro ‘Running Navy’ MR530SG",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/602070_01.jpg_5d78c325c3334983ab1e1013f42642bc.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-new-balance-530-retro-running-navy-mr530sg-1-768x768.jpg",
    price: 2700000,
  },
  {
    id: "008",
    title: "Giày New Balance",
    nameProduct: "Giày New Balance 530 Retro ‘Running Navy’ MR530SG",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/602070_01.jpg_5d78c325c3334983ab1e1013f42642bc.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/11/giay-new-balance-530-retro-running-navy-mr530sg-1-768x768.jpg",
    price: 2700000,
  },
]);

// data Product3
let dataProduct3 = ref([
  {
    id: "001",
    title: "Dép Yeezy 350",
    nameProduct: "Dép Adidas Yeezy Slide ‘Granite’ ID4132",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-onyx-prod_2672bb63ccc542fea2a7f52d2792d57b.png",
    image2:
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/products/Adidas-Yeezy-Foam-RNNR-Sand-8.jpg?v=1663468333",
    price: 2900000,
  },
  {
    id: "002",
    title: "Dép Yeezy 350",
    nameProduct: "Dép Adidas Yeezy Slide ‘Granite’ ID4132",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-onyx-prod_2672bb63ccc542fea2a7f52d2792d57b.png",
    image2:
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/products/Adidas-Yeezy-Foam-RNNR-Sand-8.jpg?v=1663468333",
    price: 2900000,
  },
  {
    id: "003",
    title: "Dép Yeezy 350",
    nameProduct: "Dép Adidas Yeezy Slide ‘Granite’ ID4132",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-onyx-prod_2672bb63ccc542fea2a7f52d2792d57b.png",
    image2:
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/products/Adidas-Yeezy-Foam-RNNR-Sand-8.jpg?v=1663468333",
    price: 2900000,
  },
  {
    id: "004",
    title: "Dép Yeezy 350",
    nameProduct: "Dép Adidas Yeezy Slide ‘Granite’ ID4132",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-onyx-prod_2672bb63ccc542fea2a7f52d2792d57b.png",
    image2:
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/products/Adidas-Yeezy-Foam-RNNR-Sand-8.jpg?v=1663468333",
    price: 2900000,
  },
  {
    id: "005",
    title: "Dép Yeezy 350",
    nameProduct: "Dép Adidas Yeezy Slide ‘Granite’ ID4132",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-onyx-prod_2672bb63ccc542fea2a7f52d2792d57b.png",
    image2:
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/products/Adidas-Yeezy-Foam-RNNR-Sand-8.jpg?v=1663468333",
    price: 2900000,
  },
  {
    id: "006",
    title: "Dép Yeezy 350",
    nameProduct: "Dép Adidas Yeezy Slide ‘Granite’ ID4132",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-onyx-prod_2672bb63ccc542fea2a7f52d2792d57b.png",
    image2:
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/products/Adidas-Yeezy-Foam-RNNR-Sand-8.jpg?v=1663468333",
    price: 2900000,
  },
  {
    id: "007",
    title: "Dép Yeezy 350",
    nameProduct: "Dép Adidas Yeezy Slide ‘Granite’ ID4132",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-onyx-prod_2672bb63ccc542fea2a7f52d2792d57b.png",
    image2:
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/products/Adidas-Yeezy-Foam-RNNR-Sand-8.jpg?v=1663468333",
    price: 2900000,
  },
  {
    id: "008",
    title: "Dép Yeezy 350",
    nameProduct: "Dép Adidas Yeezy Slide ‘Granite’ ID4132",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/adidas-yeezy-foam-rnnr-onyx-prod_2672bb63ccc542fea2a7f52d2792d57b.png",
    image2:
      "https://cdn.shopify.com/s/files/1/0640/3846/9846/products/Adidas-Yeezy-Foam-RNNR-Sand-8.jpg?v=1663468333",
    price: 2900000,
  },
]);

// data thuong hieu
let dataBrand = ref([
  {
    id: "001",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "002",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "003",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "004",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "005",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "006",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "007",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "008",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "009",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "0010",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "0011",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
  {
    id: "0012",
    nameBrand: "Adidas",
    image: "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/IE0586.webp",
  },
]);

// data phụ kiện
let dataAccessory = ref([
  {
    id: "001",
    title: "Kính Gucci",
    nameAccessory: "Kính Gucci Glasses Black GG09130-001",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/kinh-gucci-glasses-black-gg09130-photoaidcom-2x-ai-zoom.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/04/kinh-gucci-glasses-black-gg09130-001-4.jpg",
    price: 6900000,
  },
  {
    id: "002",
    title: "Kính Gucci",
    nameAccessory: "Kính Gucci Glasses Black GG09130-001",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/kinh-gucci-glasses-black-gg09130-photoaidcom-2x-ai-zoom.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/04/kinh-gucci-glasses-black-gg09130-001-4.jpg",
    price: 6900000,
  },
  {
    id: "003",
    title: "Kính Gucci",
    nameAccessory: "Kính Gucci Glasses Black GG09130-001",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/kinh-gucci-glasses-black-gg09130-photoaidcom-2x-ai-zoom.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/04/kinh-gucci-glasses-black-gg09130-001-4.jpg",
    price: 6900000,
  },
  {
    id: "004",
    title: "Kính Gucci",
    nameAccessory: "Kính Gucci Glasses Black GG09130-001",
    image1:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2023/09/kinh-gucci-glasses-black-gg09130-photoaidcom-2x-ai-zoom.png",
    image2:
      "https://sneakerdaily.vn/wp-content/uploads/2022/04/kinh-gucci-glasses-black-gg09130-001-4.jpg",
    price: 6900000,
  },
]);

// data tin tuc su kien
let dataNew = ref([
  {
    id: "01",
    title: "Tương lai của những đôi sneaker được tạo bởi AI sẽ đi về đâu?",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-4-6.png",
  },
  {
    id: "02",
    title: "Tương lai của những đôi sneaker được tạo bởi AI sẽ đi về đâu?",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-4-6.png",
  },
  {
    id: "03",
    title: "Tương lai của những đôi sneaker được tạo bởi AI sẽ đi về đâu?",
    image:
      "https://cdn.authentic-shoes.com/wp-content/uploads/2024/01/Thiet-ke-chua-co-ten-4-6.png",
  },
]);
</script>
