<template>
  <div class="container">
    <div class="thanhngang"></div>
    <div class="contact">
      <div class="contact_cmt">
        <div class="contact_cmt_img">
          <img
            src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/272082a52d9bd7c58e8a_63946c68e6714d38b63b68c9f6bd1ce6_2048x2048.webp"
            alt="địa chỉ công ty"
          />
          <div class="contact_cmt_describe">
            <p>
              Authentic Shoes international <br />
              Được thành lập từ năm 2015, là chuỗi bán lẻ Sneaker, Streetwear và
              phụ kiện thời trang chính hãng có thị phần số 1 Việt Nam với số
              lượt truy cập mua hàng tại website authentic-shoes.com lên tới
              trên 10.000 lượt mỗi ngày từ khắp 63 tỉnh thành trên cả nước.
            </p>
          </div>
        </div>
        <div class="contact_cmt_collect">
          <p>TỪ MỘT NHÀ SƯU TẦM SNEAKER</p>
            <div class="cmt_collect">
            <p>
              Biết được nhu cầu của người tiêu dùng Việt Nam luôn tìm kiếm những
              đôi giày chất lượng, nhiều kiểu dáng, màu sắc mang màu sắc riêng
              và quan trọng nhất là chúng phải 100% chính hãng.
              Authentic Shoes
              đã ra đời.
            </p>
            <p>
              Xuất thân là một cửa hàng Online chuyên Order Sneaker của các
              thương hiệu lớn như Nike,
              Adidas hay Puma,
              MLB…. trên thế giới từ Mỹ, Anh Quốc, Pháp, Nhật,…
              Trải qua 4 năm hình thành và phát triển, Authentic Shoes đã giải
              quyết được phần nào mong muốn của người tiêu dùng. Nhưng đương
              nhiên họ không dừng lại ở đó, Sneaker thôi là chưa đủ.
            </p>
        </div>
        </div>
      </div>
      <div class="contact_address">2</div>
    </div>
  </div>
</template>
<script></script>
<style>
.contact {
  width: 100%;
  display: flex;
}
.contact_cmt {
  flex-basis: 50%;
  grid-area: auto;
  line-height: 25.6px;
  padding: 0px 15px 30px;
}
.contact_cmt_img {
  width: 100%;
}
.contact_cmt_img img {
  width: 100%;
  display: inline-block;
  grid-area: auto;
  line-height: 25.6px;
}
.contact_cmt_describe {
  margin-top: 20px;
  grid-area: auto;
}
.contact_cmt_describe p {
  line-height: 25.6px;
}

.contact_cmt_collect {
}

.cmt_collect {
  /* display: flex; */
  /* flex-direction: column; */
}

.contact_cmt_collect p {
  margin-bottom: 20px;
}

.contact_cmt_collect p:last-child {
  margin-bottom: 0;
}

.collect_p {
  color: #ff0000; /* Màu đỏ */
  margin-bottom: 0; /* Loại bỏ margin dưới của phần tử */
}


.contact_address {
  flex-basis: 50%;
  grid-area: auto;
  line-height: 25.6px;
  padding: 0px 15px 30px;
}
</style>
