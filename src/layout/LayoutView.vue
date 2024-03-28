<template>
  <div>
    <header class="header" data-header>
      <div class="container">
        <button class="menu--open" aria-label="toggle manu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
        <button class="menu--close">
          <ion-icon name="close-outline" aria-label="true"></ion-icon>
        </button>

        <!-- logo -->
        <a href="#" class="logo">
          <RouterLink to="/" class="route-link">
            <img
              src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ft-logo.webp"
              alt
            />
          </RouterLink>
        </a>

        <nav class="navbar2" data-navbar>
          <ul class="navbar-list2">
            <li class="sreach">
              <form action="#" @submit.prevent="handleSubmit" method="GET">
                <div class="search-box" :class="{ active: isSearchBarVisible }">
                  <input
                    type="text"
                    name="key"
                    placeholder="Tìm kiếm..."
                    v-model="searchQuery"
                  />
                  <button class="but-search" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </li>

            <li class="navbar-item2">
              <RouterLink to="/products/tat-ca-giay" class="route-link">
                <a href="#" class="navbar-link2" data-nav-link
                  >GIÀY JORDAN KHÁC <i class="fa-solid fa-chevron-right"></i
                ></a>
              </RouterLink>
            </li>

            <li class="navbar-item2">
              <RouterLink to="/products/tat-ca-giay" class="route-link">
                <a href="#" class="navbar-link2" data-nav-link
                  >GIÀY SNEAKER <i class="fa-solid fa-chevron-right"></i
                ></a>
              </RouterLink>
            </li>

            <li class="navbar-item2">
              <RouterLink to="/products/tat-ca-quan-ao" class="route-link">
                <a href="#" class="navbar-link2" data-nav-link>
                  QUẦN ÁO<i class="fa-solid fa-chevron-right"></i
                ></a>
              </RouterLink>
            </li>

            <li class="navbar-item2">
              <RouterLink to="/products/tat-ca-phu-kien" class="route-link">
                <a href="#" class="navbar-link2" data-nav-link
                  >PHỤ KIỆN<i class="fa-solid fa-chevron-right"></i
                ></a>
              </RouterLink>
            </li>
            <li class="navbar-item2">
              <RouterLink to="/blogs/news" class="route-link">
                <a href="#" class="navbar-link2" data-nav-link>NEWS</a>
              </RouterLink>
            </li>

            <li class="navbar-item2">
              <RouterLink to="/lien-he" class="route-link">
                <a href="#" class="navbar-link2" data-nav-link>LIÊN HỆ</a>
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- menu trên cung-->
        <nav class="navbar" data-navbar>
          <ul class="navbar-list">
            <li class="navbar-item">
              <RouterLink to="/" class="route-link">
                <a href="#" class="navbar-link" data-nav-link>TRANG CHỦ</a>
              </RouterLink>
            </li>

            <li class="navbar-item">
              <RouterLink to="/products/tat-ca-giay" class="route-link">
                <a href="#" class="navbar-link" data-nav-link
                  >GIÀY<i class="fa-solid fa-angle-down"></i
                ></a>
              </RouterLink>
            </li>

            <li class="navbar-item">
              <RouterLink to="/products/tat-ca-quan-ao" class="route-link">
                <a href="#" class="navbar-link" data-nav-link
                  >ÁO QUẦN<i class="fa-solid fa-angle-down"></i
                ></a>
              </RouterLink>
            </li>

            <li class="navbar-item">
              <RouterLink to="/products/tat-ca-phu-kien" class="route-link">
                <a href="#" class="navbar-link" data-nav-link
                  >PHỤ KIỆN<i class="fa-solid fa-angle-down"></i
                ></a>
              </RouterLink>
            </li>
            <li class="navbar-item">
              <RouterLink to="/blogs/news" class="route-link">
                <a href="#" class="navbar-link" data-nav-link
                  >SỰ KIỆN - TIN TỨC</a
                >
              </RouterLink>
            </li>

            <li class="navbar-item">
              <RouterLink to="/lien-he" class="route-link">
                <a href="#" class="navbar-link" data-nav-link>LIÊN HỆ</a>
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- tìm kiếm, đăng nhập và shop -->

        <div class="header-actions">
          <div class="search-icon" @click="toggleSearchBar">
            <i class="fas fa-search"></i>
          </div>

          <form @submit.prevent="handleSubmit" method="GET">
            <div class="search-bar" :class="{ active: isSearchBarVisible }">
              <input type="text"  name="key" placeholder="Tìm kiếm..."
                v-model="searchQuery"
              />
              <button class="but-search-iconss" type="submit">
                <i class="fas fa-search"></i>
              </button>
              <button class="btn-closes" @click="toggleSearchBar">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </form>

          <button class="activitithngang"></button>

          <button class="action-btn-cart" aria-label="cart">
            <i class="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer class="footer">
      <div class="footer-top section" id>
        <div class="container">
          <div class="footer-brand">
            <a href="#" class="logo1">
              <img
                src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/ft-logo.webp"
                alt
              />
            </a>

            <p class="footer-text">
              Công Ty TNHH TM và Đầu Tư Quốc Tế Á Châu MST : 0109539054 <br />
              Authentic Shoes - Nhà sưu tầm và phân phối chính hãng các thương
              hiệu thời trang quốc tế hàng đầu Việt Nam
            </p>

            <ul class="contact-list">
              <li>
                <p class="footer-list-title">
                  <b>HỆ THỐNG CỬA HÀNG</b>
                </p>
              </li>
              <li class="contact-item">
                <i class="fa-solid fa-location-dot"></i>
                <a href="#" class="contact-link">
                  Cơ sở 1: 561 Nguyễn Đình Chiểu Phường 2 - Quận 3 - TP. Hồ Chí
                  Minh</a
                >
              </li>

              <li class="contact-item">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+84823184076" class="contact-link">
                  Hotline : 0786665444</a
                >
              </li>
              <li class="contact-item">
                <i class="fa-solid fa-location-dot"></i>
                <a href="#" class="contact-link">
                  Cở sở 2 : 70-72 Tây Sơn - Đống Đa - Hà Nội</a
                >
              </li>

              <li class="contact-item">
                <i class="fa-solid fa-phone"></i>

                <a href="tel:+84823184076" class="contact-link"
                  >Hotline : 0785499555</a
                >
              </li>
              <li class="contact-item">
                <i class="fa-solid fa-envelope"></i>
                <a href="tel:+84823184076" class="contact-link">
                  Service@AutheticShoes.com</a
                >
              </li>
              <li class="contact-item" style="margin-left: 15px">
                <a href="tel:+84823184076" class="contact-link">
                  ĐKKD: 01E8027929 - Cấp ngày: 01/06/2019 - Nơi cấp: Hà Nội</a
                >
              </li>
            </ul>

            <img
              src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-08.png?ID=9bda31ca-31ab-4a2d-b9df-8bced834801e"
              alt
            />
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title2">
                <a href="#">Về Chúng Tôi</a>
              </p>
            </li>

            <li class="contact-item">
              <a href="#" class="contact-link"> Giới Thiệu</a>
            </li>
            <li class="contact-item">
              <a href="#" class="contact-link"> Tuyển Dụng</a>
            </li>

            <li class="contact-item">
              <a href="#" class="contact-link"> Dịch Vụ Spa, Sửa Giày</a>
            </li>
            <li class="contact-item">
              <a href="#" class="contact-link"> Tin Tức - Sự Kiện</a>
            </li>

            <li>
              <p class="footer-list-title2">
                <a href="#">Kết Nối Với Chúng Tôi</a>
              </p>
            </li>
            <ul class="social-list">
              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-tiktok"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>
            </ul>

            <img
              style="margin-top: 10px; line-height: 26px"
              src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/thongbao.png"
              alt
            />
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title2">
                <a href="#">Hỗ Trợ Khách Hàng</a>
              </p>
            </li>

            <li class="contact-item">
              <a href="#" class="contact-link"> Hướng dẫn mua hàng</a>
            </li>
            <li class="contact-item">
              <a href="#" class="contact-link">
                Chính sách đổi trả và bảo hành</a
              >
            </li>

            <li class="contact-item">
              <a href="#" class="contact-link"> Chính sách thanh toán</a>
            </li>
            <li class="contact-item">
              <a href="#" class="contact-link"> Điều khoản trang Web</a>
            </li>
            <li class="contact-item">
              <a href="#" class="contact-link">
                Chính sách bảo về thông tin người tiêu dùng</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            &copy;
            <a href="#" class="copyright-link"
              >Bản quyền thuộc về Authentic Shoes</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "", 
      isSearchBarVisible: false,
    };
  },
  methods: {
    toggleSearchBar() {
      this.isSearchBarVisible = !this.isSearchBarVisible;
    },
    handleSubmit() {
      this.$router.push({ name: "search", query: { key: this.searchQuery } });
    },
  },
};
</script>

<style>
.search-icon {
  font-size: 20px;
  font-weight: 400;
  grid-area: auto;
  line-height: 22px;
  text-align: center;
  padding: 5px;
}

.search-bar {
  display: none;
  position: fixed;
  text-align: center;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(62, 62, 62, 0.782);
  padding: 20px;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.search-bar.active input {
  width: 40%;
  font-size: 16px;
  height: 60px;
  margin-top: 300px;
  text-align: left;
  border: none;
  background-color: hsla(0, 0%, 100%, 0.244);
  border-color: hsla(0, 0%, 100%, 0.09);
  color: #fff;
  border-radius: 99px;
  box-shadow: none;
  color: currentColor;
  transition: width 0.3s ease;
}

.search-bar.active input::placeholder {
  color: #ffffff;
  font-size: 20px;
}

.search-bar.active .btn-closes {
  float: right;
  text-align: center;
  font-size: 30px;
}

.search-bar.active {
  display: block;
}

.but-search-iconss {
  display: inline;
  font-size: 20px;
  color: #fff;
  margin-left: -50px;
}
</style>
