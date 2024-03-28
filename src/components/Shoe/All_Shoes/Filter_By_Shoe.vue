<template>
  <router-link class="router_Click" :to="'/products/kich-thuoc-san-pham/' + size.id">
  <li class="li_fillter_by woocommerce-widget-layered-nav-list__item wc-layered-nav-term">
    <a class="a_fillter_by" rel="nofollow" href="#">{{ size.size_name }}</a>
    <span class="count">({{ size?.products?.length }})</span>
  </li>
</router-link>
</template>

<script>
export default {
  props: {
    size: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.sidebar-inner {
  color: #0a0a0a;
  grid-area: auto;
  line-height: 25.6px;
  margin: 0px 0px 20px;
}

.widget-title {
  color: #0a0a0a;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 1.05;
  text-transform: uppercase;
}

.is-divider {
  margin-top: 0.66em;
  visibility: hidden;
}

.ul_fillter_by {
  box-shadow: #0a0a0a;
  list-style: none;
  margin: 0;
  padding: 0;
}

.li_fillter_by {
  display: flex;
  margin: 0 0 5px;
  padding: 0 15px;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 5px;
}

.li_fillter_by:hover {
  background-color: #fdf0f0;
}

.a_fillter_by {
  font-size: 16px;
  padding: 6px 0;
  left: 0;
}

.count {
  display: block;
  font-size: 12px;
  padding: 6px 0;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .li_fillter_by {
    display: none;
  }
}
</style>
