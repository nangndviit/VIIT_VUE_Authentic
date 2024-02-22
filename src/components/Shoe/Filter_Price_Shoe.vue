<template>
  <form
    method="get"
    action="https://authentic-shoes.com/collections/tat-ca-san-pham-giay-co-san/"
  >
    <div class="price_slider_wrapper">
      <div
        class="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
        style=""
      >
        <div
          class="ui-slider-range ui-corner-all ui-widget-header"
          style="left: 0%; width: 100%"
        ></div>
        <span
          tabindex="0"
          class="ui-slider-handle ui-corner-all ui-state-default"
          style="left: 0%"
        ></span
        ><span
          tabindex="0"
          class="ui-slider-handle ui-corner-all ui-state-default"
          style="left: 100%"
        ></span>
      </div>
      <div class="price_slider_amount" data-step="10">
        <label class="screen-reader-text" for="min_price">Giá thấp nhất</label>
        <input
          type="text"
          id="min_price"
          name="min_price"
          value="0"
          data-min="0"
          placeholder="Giá thấp nhất"
          style="display: none"
        />
        <label class="screen-reader-text" for="max_price">Giá cao nhất</label>
        <input
          type="text"
          id="max_price"
          name="max_price"
          value="490000000"
          data-max="490000000"
          placeholder="Giá cao nhất"
          style="display: none"
        />
        <button type="submit" class="button">Lọc</button>
        <div class="price_label" style="">
          Giá <span class="from">0 ₫</span> —
          <span class="to">490,000,000 ₫</span>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
