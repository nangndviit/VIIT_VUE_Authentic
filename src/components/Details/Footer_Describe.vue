<template>
    <div class="row">
        <div class="col small-12 large-12">
          <div class="col-inner">
            <h3 class="describe__h3">
              <span class="describe__h3__span">Mô Tả</span>
            </h3>
          </div>
        </div>
      </div>

      <div class="tab-description">
        <p>Thương hiệu: {{ Brand }}</p>
        <p>Nhà thiết kế: {{ Designer }}</p>
        <p>Công nghệ: {{ Technology }}</p>
        <p>Màu sắc: {{ Color}}</p>
        <p>Kiểu dáng: {{ Style }}</p>
        <p>Fit size: {{ Size }}</p>
        <p>Mã sản phẩm: {{ MaSP }}</p>
        <div
          class="youtube-embed-wrapper"
          style="position: relative; padding-bottom: 56.25%; height: 0px"
        ></div>
        <p>####</p>
        <h3>
          Lý do gì khiến Nike Wmns Air Jordan 1 Low ‘White Wolf Grey’ trở nên đặc biệt?
        </h3>
        <div class="tab-describe">
          <p>
            <p class="tab_describe_p">Nike Air Jordan 1 Low</p> có thể là đôi giày “hot” ở thời điểm hiện tại khi được lăng xê rộng rãi bởi
            rất nhiều người nổi tiếng, nhất là các rapper nổi tiếng như Travis Scott,
            Drake,v.v. Chỉ vài tháng trước mùa hè, <p class="tab_describe_p">Jordan</p> đã tung ra một số màu sắc đẹp
            nhất trong năm và nó không có dấu hiệu hạ nhiệt khi sold out liên tục. Và đặc
            biệt Nike đã bắt tay với <p class="tab_describe_p">Dior</p> để tạo ra một trong những siêu phẩm đáng mong
            chờ nhất trong năm 2020.
          </p>
          <p>
            Đương nhiên, không phải ai cũng có thể chi trả cho một đôi AJ1 Dior, nên Nike
            đã làm ra bản phối màu “White Wolf Grey” để thỏa mãn những người yêu giày trên
            thế giới với phối màu tương tự bản collab với Dior. Vẫn là một đôi AJ1 với
            những chi tiết quá quen thuộc như chất liệu da cao cấp, Nike Swoosh, hay hình
            Jumpman trên lưỡi gà,v.v. Tuy chỉ sở hữu một phối màu trung tính và không có
            quá nhiều điểm nhấn gì quá đặc biệt, nhưng nó vẫn khiến giới sneakerhead phát
            điên khi cháy hàng liên tục ở mọi nơi nó được bán.
          </p>

          <p>
            Chúng tôi khuyên bạn nên rock đôi giày này cùng quần joggers dày màu xám và một chiếc áo khoác denim có cổ cho
             những ngày đông hay đơn giản là với những chiếc áo phông để thể hiện lên cá tính của mình. Hiện sản phẩm được 
             phân phối trực tiếp tại <p class="tab_describe_p">Authentic Shoes</p>, hãy qua với chúng mình để có những trải nghiệm tốt nhất nhé!
          </p>
          
        </div>
      </div>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  Brand: String,
  Designer: String,
  Technology: String,
  Color: String,
  Style: String,
  Size: String,
  MaSP: String,
});
</script>

<style lang="scss" scoped>

</style>