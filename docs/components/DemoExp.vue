<template>
  <div class="cont">
    <div class="mcont apicont demoexp">
      <div class="this-cont">
        <div class="exp-item" v-for="item in list" :key="item.p">
          <div class="exp-img">
            <img :src="item.img" />
          </div>
          <div class="exp-tit">
            <img :src="item.title_img" />
            {{item.title_p}}
          </div>
          <p>{{item.p}}</p>
          <div class="web">
            <a v-for="item2 in item.web" :key="item2.type" @click="clicka(item2)">
              {{item2.type}}
              <i></i>
              <div v-if="!item2.url">
                <img :src="item2.img" />
              </div>
            </a>
          </div>
          <div class="mobile">
            <a v-for="item3 in item.mobile" :key="item3.type" :href="item3.url" target="_blank">
              {{item3.type}}
              <i></i>
            </a>
          </div>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
export default {
  name: "DemoExp",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    clicka(item) {
      if (item.url) window.open(item.url, "_blank");
    },
  },
};
</script>

<style>
.demoexp .web div {
  width: 150px;
  height: 150px;
  position: absolute;
  left: -20px;
  bottom: 19px;
  display: none;
}
/* .experience .web img,
.demoexp .web img {
  width: 100%;
  height: 100%;
  position: relative;
  left: -20px;
  bottom: 0px;
  display: block;
} */
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