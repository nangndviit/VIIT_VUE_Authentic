<template>
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
                <input type="text" name="key" placeholder="Tìm kiếm..."  v-model="searchQuery" />
                <button class="but-search" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </form>
          </li>

          <li class="navbar-item2">
            <a href="#" class="navbar-link2" data-nav-link
              >GIÀY JORDAN KHÁC <i class="fa-solid fa-chevron-right"></i
            ></a>
          </li>

          <li class="navbar-item2">
            <a href="#" class="navbar-link2" data-nav-link
              >GIÀY SNEAKER <i class="fa-solid fa-chevron-right"></i
            ></a>
          </li>

          <li class="navbar-item2">
            <a href="#" class="navbar-link2" data-nav-link>
              QUẦN ÁO<i class="fa-solid fa-chevron-right"></i
            ></a>
          </li>

          <li class="navbar-item2">
            <a href="#" class="navbar-link2" data-nav-link
              >PHỤ KIỆN<i class="fa-solid fa-chevron-right"></i
            ></a>
          </li>
          <li class="navbar-item2">
            <a href="#" class="navbar-link2" data-nav-link>NEWS</a>
          </li>

          <li class="navbar-item2">
            <a href="#" class="navbar-link2" data-nav-link>LIÊN HỆ</a>
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
              <a href="#" class="navbar-link" data-nav-link>SỰ KIỆN - TIN TỨC</a>
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
              <input type="text" name="key" placeholder="Tìm kiếm..." v-model="searchQuery" />
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
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '', // Khai báo biến searchQuery
            isSearchBarVisible: false
        };
    },
    methods: {
        toggleSearchBar() {
            this.isSearchBarVisible = !this.isSearchBarVisible;
        },
        handleSubmit() {
            // Chuyển hướng đến trang 'tim-kiem' với query parameter 'key' khi người dùng submit form
            this.$router.push({ name: 'tim-kiem', query: { key: this.searchQuery } });
        }
    }
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
