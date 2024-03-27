<template>
  <div class="container">
    <div class="thanhngang"></div>
    <div class="contact">
      <div class="contact_cmt">
        <div class="contact_cmt_img">
          <img
            src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/272082a52d9bd7c58e8a_63946c68e6714d38b63b68c9f6bd1ce6_2048x2048.webp"
            alt="dia-chi-cong-ty"
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
          <h2>Từ một nhà sưu tầm Sneaker</h2>
          <div class="cmt_collect">
            <p>
              Biết được nhu cầu của người tiêu dùng Việt Nam luôn tìm kiếm những
              đôi giày chất lượng, nhiều kiểu dáng, màu sắc mang màu sắc riêng
              và quan trọng nhất là chúng phải 100% chính hãng.
              <span>Authentic Shoes</span>
              đã ra đời.
            </p>
            <p>
              Xuất thân là một cửa hàng Online chuyên Order Sneaker của các
              thương hiệu lớn như <span>Nike</span>, <span>Adidas</span> hay
              <span>Puma</span>, <span>MLB</span>…. trên thế giới từ Mỹ, Anh
              Quốc, Pháp, Nhật,… Trải qua 4 năm hình thành và phát triển,
              Authentic Shoes đã giải quyết được phần nào mong muốn của người
              tiêu dùng. Nhưng đương nhiên họ không dừng lại ở đó, Sneaker thôi
              là chưa đủ.
            </p>
          </div>
        </div>
        <div class="cmt_address">
          <p>Tầng 4 số 70-72 Tây Sơn, Quận Đống Đa, Hà Nội, Việt Nam</p>
          <p>Phone: (098) 491 8486 – Fax: (098) 491 8486</p>
          <p>Tổng đài mua hàng: 0913576123</p>
          <p>Tổng đài CSKH: 0984918486</p>
          <p>Thời gian làm việc tổng đài CSKH: 8:30 – 17h30 (Thứ 2 – Thứ 7)</p>
        </div>
      </div>
      <div class="contact_address">
        <div class="address_inner">
          <div class="address_title">
            <p>
              <strong>ĐỊA CHỈ TRỤ SỞ:</strong>
              &nbsp; Tầng 4 72 Tây Sơn Đống Đa
            </p>
          </div>
          <div class="address_title">
            <p>
              <strong>SỐ ĐIỆN THOẠI:</strong>
              <a class="title_a"> &nbsp; 078 5499555</a>
            </p>
          </div>
          <div class="address_title">
            <p>
              <strong>EMAIL:</strong>
              <a class="title_a"> &nbsp; Service@AutheticShoes.com</a>
            </p>
          </div>
          <div class="address_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7448.97421468407!2d105.826496!3d21.013187000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7f037dbee7%3A0x7906b02759e4c04c!2zNzIgUC4gVMOieSBTxqFuLCBRdWFuZyBUcnVuZywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1711507399035!5m2!1svi!2sus"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
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
  padding: 0 5px 30px 0;
  font-size: 16px;
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
  line-height: 25.6px;
}
.contact_cmt_collect {
  padding-bottom: 2%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.205);
}
.contact_cmt_collect h2 {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 25.6px;
  padding: 10px 0;
}
.cmt_collect {
  margin-left: 10px;
  line-height: 25.6px;
}
.cmt_collect p {
  color: #0a0a0a;
  display: list-item;
  grid-area: auto;
  line-height: 25.6px;
  margin: 0px 0px 9.6px 5px;
  text-align: left;
}
.cmt_collect p span {
  color: red;
  display: inline;
}
.cmt_address {
  padding-top: 5%;
}
.cmt_address p {
  grid-area: auto;
  line-height: 25.6px;
  margin: 0px 0px 20px;
}

.contact_address {
  flex-basis: 50%;
  grid-area: auto;
  line-height: 25.6px;
  padding: 0px 15px 30px;
}
.address_title strong {
    white-space: nowrap;
}
.address_title p {
  display: flex;
  color: #0a0a0a;
  grid-area: auto;
  line-height: 25.6px;
  margin: 0px 0px 20.8px;
  white-space: nowrap;
}
.title_a {
  font-size: 14.4px;
  color: red;
}

.cmt_collect p span:hover,
.title_a:hover {
  color: #0a0a0a;
}
.address_inner {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1 0 auto;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.address_map {
  z-index: 0;
  height: 100%;
  width: 100%;
  padding: 0px;
  border-width: 0px;
  margin: 0px;
  left: 0px;
  margin-top: 5%;
  margin-bottom: 10%;
}
.address_map iframe {
  z-index: -1;
  width: 100%;
  height: 400px;
  top: 0px;
  left: 0px;
  opacity: 100;
}

@media only screen and (max-width: 650px) {
  .contact {
    flex-direction: column;
  }
  .contact_cmt{
    padding: 0 5px;
  }
}
</style>
