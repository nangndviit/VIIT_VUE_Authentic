<template>
  <LayoutView>
    <div class="container">
      <div class="thanhngang"></div>
      <div class="blogs_news">
        <NewIma />
        <NewCate />
        <NewAll />
        <NewNumber />
      </div>
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from "@/layout/LayoutView.vue";
import NewNumber from "@/components/Blogs/NewNumber.vue";
import NewAll from "@/components/Blogs/NewAll.vue";
import NewCate from "@/components/Blogs/NewCate.vue";
import NewIma from "@/components/Blogs/NewIma.vue";

export default {
  components: {
    LayoutView,
    NewIma,
    NewCate,
    NewAll,
    NewNumber,
  },
};
</script>

<style>
.blogs_news {
  max-width: 80%;
  display: block;
  margin: auto;
}
@media (max-width: 768px) {
  .blogs_news {
    max-width: 100%;
  }
  .new_large_4 {
    display: none;
  }
  .new_large_8 {
    width: 100%;
  }
  .new_large_8_img img,
  .overlay{
    border-radius: 20px;
  }
  .overlay p{
    font-weight: normal;
    line-height: 25px;
    font-size: 18px;
    padding-bottom: 30px;
  }
  .new_all_img{
    width: 25%;
  }
  .new_all_cmt{
    width: 75%;
    font-size: 17px;
  }
  .new_all_cmt p{
    font-weight: normal; 
  }
}
@media (max-width: 430px) {
    .new_large_8_img{
        height: 225px;
    }
    .new_large_8_img img{
        width: 100%;
        height: 100%;
    }
    .overlay p{
        padding-bottom: 15px;
    }
}
</style>
