<template>
  <div id="footer" chrome-app-version="2.0.2">
    <footer class="site-footer" v-if="lang =='cn'">
      <div class="container">
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
    <footer class="site-footer en" v-if="lang =='en'">
      <div class="container en">
        <div class="footer-other">
          <ul class="nav-group" style="text-align: center;">
            <img src="https://developer.juphoon.com/style/images/fangkuai-01.png" alt="1对1视频" />&nbsp;
            <a rel="nofollow" href="https://www.juphoon.com/en/" target="_blank">
              <span style="color:#606060;line-height:24px">&nbsp;&nbsp;Juphoon&nbsp;&nbsp;</span>
            </a>&nbsp;&nbsp;
            <img
              src="https://developer.juphoon.com/style/images/fangkuai-01.png"
              alt="1对1视频"
            />
            <a rel="nofollow" href="https://cloud.juphoon.com/en/" target="_blank">
              <span style="color:#606060;line-height:24px">&nbsp;&nbsp;Juphoon Cloud&nbsp;&nbsp;</span>
            </a>&nbsp;&nbsp;
            <img
              src="https://developer.juphoon.com/style/images/fangkuai-01.png"
              alt="1对1视频"
            />&nbsp;&nbsp;&nbsp;
            <span
              style="color:#606060;line-height:24px"
            >Copyright © 2020 Juphoon System Software Co., Ltd. All rights reserved.</span>
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
      lang: "",
    };
  },
  mounted() {
    this.lang = localStorage.lang||'cn';
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/header_footer.styl';
// .site-footer.en {
// height: 419px;
// }
.container.en {
  .nav-group {
    margin: 20px;
  }
}

@media (max-width: 800px) {
  .site-footer.en {
    height: auto;
  }

  .container.en {
    padding: 0px;
  }
}

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