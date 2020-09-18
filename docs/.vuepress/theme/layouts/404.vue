<template>
  <div class="page">
    <div class="header">
      <a class="nav" :href="`/${lang}`">
        <img
          src="../assets/image/logo_cn.png"
          v-if="lang=='cn'"
          style="vertical-align: middle;width:300px"
        />
        <img src="../assets/image/logo_en.png" v-else style="vertical-align: middle;width:202px" />
      </a>
    </div>
    <div class="content">
      <img :src="img.img404" alt />
      <div class="contRight">
        <h1>哎呀，很抱歉！</h1>
        <h1>您访问的页面不存在···</h1>
        <div class="button">
          <p>返回首页</p>
        </div>
      </div>

      <!-- <blockquote>{{ getMsg() }}</blockquote> -->

      <!-- <RouterLink to="/">Take me home.</RouterLink> -->
    </div>
  </div>
</template>

<script>
import img404 from "@theme/assets/image/404@2x.png";
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
];

export default {
  data() {
    return {
      img: {
        img404: img404,
      },
      lang: "",
    };
  },
  mounted() {
    this.lang = localStorage.lang;
    console.log(localStorage.lang);
  },
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
  },
};
</script>

<style lang="stylus" scoped>
.page {
  position: absolute;
  background: #fff;
  height: 100%;
  width: 100%;

  .header {
    position: relative;
    height: 60px;
  }

  .content img {
    width: 300px;
    height: 300px;
    float: left;
  }

  .button {
    width: 200px;
    height: 60px;
    background: #3035FF;
    border-radius: 11px;
    margin-top: 48px;

    p {
      padding: 16px 41px;
      // width: 118px;
      height: 28px;
      font-size: 20px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 28px;
      text-align: ceter;
      margin: 0;
    }
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 100px;

    h1{    
      font-size: 32px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #000000;
      line-height: 45px;
      -webkit-text-stroke: 1px #979797;
      text-stroke: 1px #979797;
    }
  }
  .contRight{
    float: right;
    width: calc(100% - 450px);
  }
}

.nav {
  margin: 0;
  position: relative;
  top: 0;
  padding: 30px 0px 0px 23px !important;
}
</style>
