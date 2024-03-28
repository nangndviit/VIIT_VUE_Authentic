<template>
  <div class="blog_new">
    <div class="news_all" v-for="event in events" :key="event.id">
      <div class="new_all_img">
        <img :src="event.Anh_Events" alt="" />
      </div>
      <div class="new_all_cmt">
        <p>{{ event.Ten_Events }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        let [eventsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/event/index`),
        ]);
        this.events = eventsRes.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style>
.blog_new {
  background-position: 50% 50%;
  flex: 1 0 auto;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
}
.news_all {
  display: flex;
  margin: 30px 0;
  position: relative;
  width: 100%;
}
.new_all_img {
  width: 40%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.new_all_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.new_all_cmt {
  width: 60%;
  display: flex;
  position: relative;
  left: 20px;
}
.new_all_cmt p {
  color: #0a0a0a;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  grid-area: auto;
  line-height: 26px;
  margin: 2px 0px;
  text-align: left;
}
.is-divider {
  height: 2px;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}
</style>
