<template>
  <div class="this-cont">
    <div class="democode">
      <div class="col-sm-6 in-cont" v-for="item in list" :key="item.type">
        <img :src="item.img" />
        <div class="tit">{{item.type}}</div>
        <a class="sdkbtn" v-for="item2 in item.child" :key="item2.type" :href="item2.url">
          <span>{{item2.type}}</span>
        </a>
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.col-sm-6 {
  float: left;
}
.sdkbtn:before {
  text-decoration: none;
}
@media (min-width: 800px) {
  .col-sm-6 {
    width: 100%;
  }
}
</style>