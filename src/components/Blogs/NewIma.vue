<template>
  <div class="new_hots">
    <div class="new_hots_large">
      <!-- Hiển thị sự kiện lớn -->
      <div class="new_large_8" v-for="event in largeEvents" :key="event.id">
        <div class="new_large_8_img">
          <img :src="event.Anh_Events ? event.Anh_Events : ''" alt="" />
          <div class="overlay">
            <p>{{ event.Ten_Events ? event.Ten_Events : '' }}</p>
          </div>
        </div>
      </div>
      <div class="new_large_4">
         <!-- Hiển thị sự kiện nhỏ phía trên -->
        <div class="new_large_4_above" v-for="event in smallaboveEvents" :key="event.id">
          <div class="new_large_4_img_above">
            <img :src="event.Anh_Events ? event.Anh_Events : ''" alt="" />
            <div class="overlay_lagre_4_above">
              <p>{{ event.Ten_Events ? event.Ten_Events : '' }}</p>
            </div>
          </div>
        </div>
         <!-- Hiển thị sự kiện nhỏ phía dưới -->
        <div class="new_large_4_below" v-for="event in smallbelowEvents" :key="event.id">
          <div class="new_large_4_img_below">
            <img :src="event.Anh_Events ? event.Anh_Events : ''" alt="" />
            <div class="overlay_lagre_4_below">
              <p>{{ event.Ten_Events ? event.Ten_Events : '' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      largeEvents: [],      // Mảng sự kiện lớn
      smallaboveEvents: [],    // Mảng sự kiện nhỏ phía trên
      smallbelowEvents: []     // Mảng sự kiện nhỏ phía dưới
    };
  },
  mounted() {
    this.fetchNewEvents();
  },
  methods: {
    async fetchNewEvents() {
      try {
        // Gọi API để lấy danh sách sự kiện mới nhất
        let response = await axios.get(`${import.meta.env.VITE_API_URL}/event/index`);
        
        // Lấy 3 sự kiện mới nhất
        this.newEvents = response.data.slice(0, 3);
        
        // Chia đều 3 sự kiện vào các mảng
        this.largeEvents = this.newEvents.slice(0, 1);
        this.smallaboveEvents = this.newEvents.slice(1, 2);
        this.smallbelowEvents = this.newEvents.slice(2, 3);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>


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
