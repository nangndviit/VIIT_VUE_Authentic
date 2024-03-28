<script>
import SizeDescribe from "@/components/Details/Size_Describe.vue";

export default {
  components: {
    SizeDescribe,
  },
  data() {
    return {
      sizes: [],
      categoryName: '',
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async fetchDataFromApi() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/takePounds/` + this.$route.params.ID_SP);
        const data = await response.json();
        this.categoryName = data.data.category.Name_Catogory;
        this.sizes = data.data.sizes;
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    },
  },
  mounted() {
    this.fetchDataFromApi();
  }
}
</script>

<template>
  <div class="product__details">
    <div class="product__details_img">
      <div class="product__details__image">
        <div class="product__details_images">
          <img :src=product.Anh_SP1 alt="">
          <i class="fa-regular fa-heart"></i>
          <div class="btn_img">
            <div class="btn_left">
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div class="btn_right">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="additional-images">
        <img :src="product.Anh_SP2 ? product.Anh_SP2 : 'https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc'" alt="Product Images"/>
        <img :src="product.Anh_SP2 ? product.Anh_SP2 : 'https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc'" alt="Product Images"/>
        <img :src="product.Anh_SP2 ? product.Anh_SP2 : 'https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc'" alt="Product Images"/>
        <img :src="product.Anh_SP2 ? product.Anh_SP2 : 'https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc'" alt="Product Images"/>
      </div>
    </div>


    <div class="product__details__content">
      <div class="product__details__bran">
        <a href="">{{ categoryName }}</a>
      </div>

      <div class="product__details__name">
        <h1>{{ product.Ten_SP }}</h1>
      </div>

      <div class="product__details__price">
        <bdi>{{ product.Gia_SP }} ₫ – {{ product.Gia_SP2 }} ₫</bdi>
      </div>

      <div class="product__details__panel">
        <span class="details__panel">
          Trả sau
          <span class="details__panel__price"> 1.950.000 đ </span>
          x2 kỳ với
        </span>
        <div class="details__action">
          <img src="https://assets.fundiin.vn/merchant/logo_transparent.png" alt="" />
          <div class="details__action__icons">
            <i class="fa-solid fa-question"></i>
          </div>
        </div>
      </div>

      <div class="details__discount">
        <div class="details__discount__icon">
          <div class="details__discount__icons">
            <i class="fa-solid fa-percent"></i>
          </div>
        </div>

        <div class="details__discount__content">
          <span>
            Giảm giá đến
            <strong>50%</strong>
            Khi thanh toán qua Fundiin.

            <a href="#">xem thêm</a>
          </span>
        </div>
      </div>

      <!-- kích thước và cart -->
      <div class="details__size__cart">
        <!-- kích thước -->
        <div class="details__size">
          <table class="detailas__size_item">
            <tbody>
              <tr>
                <th class="label">
                  <label for="">Kích Thước</label>
                </th>
                <td class="value">
                    <SizeDescribe :sizes="sizes" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- cart -->
        <div class="details__cart">
          <div class="detail__cart__icons">
            <i class="fa-solid fa-phone"></i>
          </div>

          <div class="detail__cart__information">
            <h3>Gọi ngay để có giá tốt</h3>
            <p class="information_HN_HCM">
              <strong>Hotline HN : 0984918486 - 0785499555 - 72 Tây Sơn <br />Đống Đa</strong>
            </p>
            <p class="information_HN_HCM">
              <strong>Hotline HCM : 0786665444 - 561 Nguyễn Đình Chiểu Q.3</strong>
            </p>
            <p class="information_TD">Tổng đài hoạt động từ 10h00 - 22h00 mỗi ngày</p>
          </div>
        </div>
        <!-- shopping cart và add và installment -->
        <div class="button__shopping__add">
          <div class="button__shopping">
            <div class="shopping_icons">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="shopping_cmt">
              <p>MUA NGAY</p>
            </div>
          </div>
          <div class="button__add">
            <div class="add_cart">
              <p>THÊM VÀO GIỎ HÀNG</p>
            </div>
            <div class="add_installment">
              <div class="add_installment_icons">
                <i class="fa-solid fa-snowman"></i>
              </div>
              <div class="add_installment_cmt">
                <p class="installment_cmt_1">MUA TRẢ GÓP 0%</p>
                <p class="installment_cmt_2">QUA CÔNG TY TÀI CHÍNH</p>
              </div>
            </div>
          </div>
        </div>

        <div class="product_ccordion">
          <div class="ccordion_item">
            <a href="" class="ccordion_itemss">
              <button class="toggle">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <span class="toggle_name">Hệ Thống Cửa Hàng</span>
            </a>
          </div>

          <div class="ccordion_item">
            <a href="" class="ccordion_itemss">
              <button class="toggle">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <span class="toggle_name">Cam Kết Khách Hàng</span>
            </a>
          </div>

          <div class="ccordion_item">
            <a href="" class="ccordion_itemss">
              <button class="toggle">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <span class="toggle_name">Chính Sách Đổi Trả, Bảo Hành</span>
            </a>
          </div>

          <div class="ccordion_item">
            <a href="" class="ccordion_itemss">
              <button class="toggle">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <span class="toggle_name">Chính Sách Vận Chuyển</span>
            </a>
          </div>

          <div class="ccordion_item">
            <a href="" class="ccordion_itemss">
              <button class="toggle">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <span class="toggle_name">Phương Thức Thanh Toán</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
