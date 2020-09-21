<template>
  <div class="page">
    <div class="header">
      <a class="nav" :href="`/${lang}/`">
        <img
          src="../assets/image/logo_cn.png"
          v-if="lang=='cn'"
          style="vertical-align: middle;width:300px"
        />
        <img src="../assets/image/logo_en.png" v-else style="vertical-align: middle;width:202px" />
      </a>
    </div>
    <!-- 头部主体 -->
    <div class="content">
      <div class="contLeft">
        <img :src="img.img404" alt />
      </div>
      <div class="contRight">
        <h1 v-if="lang =='cn'">
          哎呀，很抱歉！
          <br />您访问的页面不存在···
        </h1>
        <h1 v-else>
          Ooops！
          <br />The Page You’re Looking For
          <br />Was Not Found
        </h1>
        <div class="button">
          <p>
            <RouterLink :to="`/${lang}/`" v-html="lang=='cn'?'返回首页':'Go Back to Homepage'"></RouterLink>
          </p>
        </div>
      </div>
    </div>
    <!-- 查看文档 -->
    <div class="content cn" style="max-width: 830px;margin-top:0" v-if="lang == 'cn'">
      <h2 class="check_doc">查看文档</h2>
      <div class="part-cont">
        <div class="inner">
          <h1>语音通话</h1>
          <div class="inner_content">
            <img :src="img.Voice_Calling_one" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/00_o2o_audio/">一对一语音通话</RouterLink>
              </span>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.Voice_Calling_group" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/02_mult_audio/">多方语音通话</RouterLink>
              </span>
            </div>
            <div class style="both: clear;"></div>
          </div>
        </div>
      </div>
      <div class="part-cont">
        <div class="inner">
          <h1>视频通话</h1>
          <div class="inner_content">
            <img :src="img.Video_Calling_one" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/01_o2o_video/">一对一视频通话</RouterLink>
              </span>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.Video_Calling_group" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/03_mult_video/">多方视频通话</RouterLink>
              </span>
            </div>
            <div class style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div class="part-cont">
        <div class="inner">
          <h1>互动直播</h1>
          <div class="inner_content">
            <img :src="img.Broadcasting_audio" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/04_audio_live/">语音互动直播</RouterLink>
              </span>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.Broadcasting_video" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/05_video_live/">视频互动直播</RouterLink>
              </span>
            </div>
            <div class style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div class="part-cont">
        <div class="inner">
          <h1>扩展功能</h1>
          <div class="inner_content">
            <img :src="img.function_webrtc" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/WebRTC/">WebRTC</RouterLink>
              </span>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.function_cdn" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/CDN_push/">CDN推流</RouterLink>
              </span>
            </div>
            <div class style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.function_screen" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/screen_share/">屏幕共享</RouterLink>
              </span>
            </div>
            <div class style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.function_rec" alt />
            <div class="title">
              <span>
                <RouterLink to="/cn/server_recording/">服务器录制</RouterLink>
              </span>
            </div>
            <div class style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <!-- Document View -->
    <div class="content en" style="margin-top:0" v-else>
      <h2 class="check_doc">Document View</h2>
      <div class="part-cont">
        <div class="inner">
          <h1>Voice Calling</h1>
          <div class="inner_content">
            <img :src="img.Voice_Calling_one" alt />
            <div class="title">
              <span>
                <RouterLink to="/en/00_o2o_audio/">One-to-One Voice Calling</RouterLink>
              </span>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.Voice_Calling_group" alt />
            <div class="title">
              <span>
                <RouterLink to="/en/02_mult_audio/">Group Voice Calling</RouterLink>
              </span>
            </div>
            <div class style="both: clear;"></div>
          </div>
        </div>
      </div>
      <div class="part-cont">
        <div class="inner">
          <h1>Video Calling</h1>
          <div class="inner_content">
            <img :src="img.Video_Calling_one" alt />
            <div class="title">
              <span>
                <RouterLink to="/en/01_o2o_video/">One-to-One Video Calling</RouterLink>
              </span>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.Video_Calling_group" alt />
            <div class="title">
              <span>
                <RouterLink to="/en/03_mult_video/">Group Video Calling</RouterLink>
              </span>
            </div>
            <div class style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div class="part-cont">
        <div class="inner">
          <h1>Broadcasting</h1>
          <div class="inner_content">
            <img :src="img.Broadcasting_audio" alt />
            <div class="title">
              <span>
                <RouterLink to="/en/04_audio_live/">Live Interactive Audio Streaming</RouterLink>
              </span>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div class="inner_content">
            <img :src="img.Broadcasting_video" alt />
            <div class="title">
              <span>
                <RouterLink to="/en/05_video_live/">Live Interactive Video Streaming</RouterLink>
              </span>
            </div>
            <div class style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <div style="clear:both"></div>
    <HomeFooter style="margin-top:55px" />
  </div>
</template>

<script>
import HomeFooter from "@theme/components/HomeFooter2.vue";

import img404 from "@theme/assets/image/404@2x.png";

import Lz from "@theme/assets/img/lz@2x.png";
import DownLoad from "@theme/assets/img/demo_load@2x.png";
import Voice_Calling_one from "@theme/assets/img/Voice_Calling_one@2x.png";
import Voice_Calling_group from "@theme/assets/img/Voice_Calling_group@2x.png";
import Video_Calling_one from "@theme/assets/img/Video_Calling_one@2x.png";
import Video_Calling_group from "@theme/assets/img/Video_Calling_group@2x.png";
import Broadcasting_audio from "@theme/assets/img/Broadcasting_audio@2x.png";
import Broadcasting_video from "@theme/assets/img/Broadcasting_video@2x.png";

import function_cdn from "@theme/assets/img/function_cdn@2x.png";
import function_rec from "@theme/assets/img/function_rec@2x.png";
import function_screen from "@theme/assets/img/function_screen@2x.png";
import function_webrtc from "@theme/assets/img/function_webrtc@2x.png";
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
];

export default {
  components: {
    HomeFooter,
  },
  data() {
    return {
      img: {
        img404: img404,
        Lz: Lz,
        DownLoad: DownLoad,
        Voice_Calling_one: Voice_Calling_one,
        Voice_Calling_group: Voice_Calling_group,
        Video_Calling_one: Video_Calling_one,
        Video_Calling_group: Video_Calling_group,
        Broadcasting_audio: Broadcasting_audio,
        Broadcasting_video: Broadcasting_video,
        function_cdn: function_cdn,
        function_rec: function_rec,
        function_screen: function_screen,
        function_webrtc: function_webrtc,
        // en_webrtc: en_webrtc,
        // Download_load: Download_load,
        // arrow: arrow,
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
a {
  color: #000;
}

a:hover {
  color: #0056b3;
  text-decoration: none;
}

.page {
  position: absolute;
  background: #fff;
  width: 100%;

  .header {
    position: relative;
    height: 60px;
  }

  .content .contLeft {
    float: left;

    img {
      width: 300px;
      height: 300px;
    }
  }

  .button {
    width: 80%;
    height: 60px;
    background: #3035FF;
    border-radius: 11px;
    margin-top: 48px;

    p {
      padding: 16px 41px;
      font-size: 20px;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 28px;
      text-align: center;
      margin: 0;

      a {
        font-weight: 600;
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .content {
    max-width: 780px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 100px;

    h1 {
      margin: 0;
      line-height: 90px;
      font-size: 32px;
      font-weight: 300;
      color: #000000;
      line-height: 45px;
      -webkit-text-stroke: 1px #979797;
      text-stroke: 1px #979797;
    }
  }

  .contRight {
    float: right;
    padding: 42px 0px 0px 0px;
    // width: calc(100% - 450px);
  }
}

.nav {
  margin: 0;
  position: relative;
  top: 0;
  padding: 30px 0px 0px 23px !important;
}

.part-cont {
  float: left;
  width: 50%;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 25px;

  h1 {
    font-size: 20px !important;
    font-weight: 500 !important;
    color: #000000;
    line-height: 28px;
  }
}

.en .part-cont {
  float: left;
  width: 33%;
}

.en.content {
  max-width: 1180px;
}

.check_doc {
  font-size: 32px;
  margin-top: 40px;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 300;
  color: #000000;
  line-height: 45px;
}

.part-cont:nth-child(2) {
  margin-right: 0;
}

.inner {
  overflow: hidden;
  padding: 36px 28px;
  box-shadow: none;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #DFDFDF;

  h1 {
    margin-bottom: 55px;
  }

  .inner_content {
    margin-top: 27px;

    .title {
      white-space: normal;
      margin-left: 52px;

      span {
        cursor: pointer;
        height: 36px;
        font-size: 17px;
        font-weight: 500;
        color: #000;
        line-height: 36px;
      }
    }

    &>img {
      width: 36px;
      float: left;
      margin-right: 16px;
    }
  }
}

.inner:hover {
  background: #FFFFFF;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  border: 1px solid transparent;
}

@media (max-width: 800px) {
  .page .content {
    margin-top: 50px;
  }

  .part-cont {
    width: 100%;
  }

  .en .part-cont {
    width: 100%;
  }

  .content {
    .contLeft {
      float: none;
      width: 100%;
      text-align: center;

      img {
        display: inline-block;
      }
    }

    .contRight {
      float: none;
      text-align: center;

      .button {
        margin: 0 auto;
        margin-top: 48px;
      }
    }
  }
}
</style>
