<template>
  <div class="new_hots">
    <div class="new_hots_large">
      <div class="new_large_8">
        <div class="new_large_8_img">
          <img
            src="https://cdn.authentic-shoes.com/wp-content/uploads/2024/03/Thiet-ke-chua-co-ten-29-3.png"
            alt=""
          />
          <div class="overlay">
            <p>5 “huyền thoại” Nike Panda Dunk khuấy đảo giới sneakerhead</p>
          </div>
        </div>
      </div>
      <div class="new_large_4">
        <div class="new_large_4_above">
          <div class="new_large_4_img_above">
            <img
              src="https://cdn.authentic-shoes.com/wp-content/uploads/2024/03/Thiet-ke-chua-co-ten-17-3.png"
              alt=""
            />
            <div class="overlay_lagre_4_above">
              <p>BLACKPINK “chinh phục” mọi phong cách với BST giày hiệu</p>
            </div>
          </div>
        </div>
        <div class="new_large_4_below">
          <div class="new_large_4_img_below">
            <img
              src="https://cdn.authentic-shoes.com/wp-content/uploads/2024/03/Thiet-ke-chua-co-ten-13-2.png"
              alt=""
            />
            <div class="overlay_lagre_4_below">
              <p>Vẻ đẹp tiện lợi: Giày slip-on – Cho cuộc sống năng động</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.new_hots {
    display: flex;
    justify-content: center;
}

.new_hots_large {
  display: flex;
}

.new_large_8 {
  float: left;
  width: 65%;
  height: auto;
}

.new_large_8_img {
    width: 100%;
    height: 440px; 
}
.new_large_8_img img{
    width: 100%;
    height: 100%;
    object-fit: cover; 
    overflow: hidden;
    border-radius: 20px 0 0 20px;
}

.overlay{
    border-radius: 0 0 0 20px;
}
.new_large_4_img_above img{
    border-radius: 0 20px 0 0;
}

.new_large_4_img_below img,
.overlay_lagre_4_below {
    border-radius: 0 0 20px 0;
}

.new_large_8_img,
.new_large_4_img_below,
.new_large_4_img_above {
  position: relative;
}

.new_large_4 {
  width: 35%;
  margin-left: 10px;
}


.new_large_4_img_below{
    padding-top: 10px;
}

.new_large_4_img_above img,
.new_large_4_img_below img {
    width: 100%;
    object-fit: cover; 
    overflow: hidden;
    height: 215px;
}
.overlay,
.overlay_lagre_4_above,
.overlay_lagre_4_below {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgb(0, 0, 0), transparent);
  color: white;
  font-weight: 700;
  padding: 10px;
  text-align: left;
}
.overlay p {
  color: #ffffff;
  font-size: 26px;
  grid-area: auto;
  line-height: 41.6px;
  margin: 0px 0px 5px;
}
.overlay_lagre_4 p {
  font-size: 17px;
  grid-area: auto;
  line-height: 27.2px;
  margin: 0px 0px 5px;
}
</style>
