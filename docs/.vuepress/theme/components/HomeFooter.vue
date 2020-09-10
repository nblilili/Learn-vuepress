<template>
  <div id="footer" chrome-app-version="2.0.2">
    <footer class="site-footer" :style="{height}">
      <div class="container" :style="{padding}">
        <div class="footer-other">
          <ul class="nav-group" style="width:92%;text-align: center;">
            <li>
              <img src="https://developer.juphoon.com/style/images/fangkuai-01.png" alt="1对1视频" />&nbsp;
              <a rel="nofollow" href="http://www.juphoon.com/" target="_blank">
                <span style="color:#606060;line-height:24px">&nbsp;&nbsp;Juphoon&nbsp;&nbsp;</span>
              </a>&nbsp;&nbsp;
              <img
                src="https://developer.juphoon.com/style/images/fangkuai-01.png"
                alt="1对1视频"
              />
              <a rel="nofollow" href="http://cloud.juphoon.com/" target="_blank">
                <span style="color:#606060;line-height:24px">&nbsp;&nbsp;Juphoon Cloud&nbsp;&nbsp;</span>
              </a>&nbsp;&nbsp;
              <img
                src="https://developer.juphoon.com/style/images/fangkuai-01.png"
                alt="1对1视频"
              />&nbsp;&nbsp;&nbsp;
              <span style="color:#606060;line-height:24px">
                Copyright © 2020 宁波菊风系统软件有限公司 |
                <a
                  target="_blank"
                  href="http://www.beian.miit.gov.cn/"
                  style="color:#606060;display:inline-block;text-decoration:none;height:20px;line-height:20px;"
                >浙ICP备15019097号-4</a> | ICP证：浙B1.B2-20150544
              </span>
              <br />
              <div style="margin:10px auto;" v-if="$lang =='cn'">
                <a
                  target="_blank"
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33020902000186"
                  style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
                >
                  <img
                    src="https://developer.juphoon.com/style/images/police.png"
                    style="float:left;"
                  />
                  <span
                    style="height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#777;font-size: 14px;"
                  >浙公网安备 33020902000186号</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: "auto",
      padding: "auto",
    };
  },
  watch: {
    $lang(newValue) {
      console.log(newValue)
      this.height = newValue == "cn" ? "auto" : "419px";
      this.padding = newValue == "cn" ? "auto" : "165px";
      console.log(this.height,this.padding)
    },
  },
  created() {
    this.height = this.$lang == "cn" ? "auto" : "419px";
    this.padding = this.$lang == "cn" ? "auto" : "165px";
  },
  mounted() {
    this.height = this.$lang == "cn" ? "auto" : "419px";
    this.padding = this.$lang == "cn" ? "auto" : "165px";
  },
};
</script>

<style lang="stylus" scoped>
#footer {
  margin-top: 0px;
}

.footer-other ul {
  padding: 0;
  margin: 0 auto;
}

#footer li {
  float: none;
  list-style-type: none;
}
</style>