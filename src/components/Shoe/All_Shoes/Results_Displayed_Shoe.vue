<template>
  <div class="results__displayed">
    <p class="results">Hiển thị 1 – 48 của 39541 kết quả</p>
    <form class="woocommerce-ordering" method="get">
      <select name="orderby" class="orderby" aria-label="Đơn hàng của cửa hàng">
        <option value="popularity">Thứ tự theo mức độ phổ biến</option>
        <option value="rating">Thứ tự theo điểm đánh giá</option>
        <option value="date">Mới nhất</option>
        <option value="price">Thứ tự theo giá: thấp đến cao</option>
        <option value="price-desc">Thứ tự theo giá: cao xuống thấp</option>
        <option value="xem_nhieu" selected="selected">Sản phẩm xem nhiều</option>
      </select>
      <input type="hidden" name="paged" value="1" />
    </form>
  </div>
</template>

<style>
.results__displayed {
  max-width: 100%;
  display: flex;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 0;
  color: #000;

  font-size: 16px;
}

.results {
  margin: 0 1em 0 auto;
  color: #0a0a0a;
}

.woocommerce-ordering {
  margin-top: -15px;
}

.orderby {
  align-items: center;
  background-color: #ffffff;
  background-position: right 6.984px top 50%;
  background-size: auto 16px;
  border-color: #dddddd;
  border-style: solid;
  border-width: 1px;
  color: #333333;
  display: inline-block;
  height: 40px;
  grid-area: auto;
  line-height: 24.832px;
  margin: 5px 0px;
  padding: 0px 12px 0px 12px;
}

@media (max-width: 768px) {
  .results {
    display: none;
  }

  .woocommerce-ordering {
    width: 100%;
  }

  .orderby {
    margin-left: 200px;
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .woocommerce-ordering {
    width: 100%;
  }

  .orderby {
    margin-left: 70px;
    padding: 0 20px;
  }
}
</style>
