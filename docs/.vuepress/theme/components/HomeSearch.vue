<template>
  <div>
    <div class="all">
      <div class="top_content" v-if="!showsearch" style="width:100%">
        <div class="bac">
          <img src="https://developer.juphoon.com/style/images/home/developer_bg@2x.png" />
          <div class="bactxt">
            <h1 v-if="$lang=='cn'?true:false">开发者中心</h1>
            <h1 class="en_h1" v-if="$lang=='en'?true:false">Developer Center</h1>
            <h2
              class="en_h2"
              v-if="$lang=='en'?true:false"
            >Explore how to build your real-time voice and video services with our easily embedded SDK</h2>
            <div class="bacsearch">
              <input
                class="form-control bacinp"
                :placeholder="$lang=='cn'?'':'Please enter keywords to search' "
                v-model="value"
                @keyup.enter="keySearch(value)"
              />
              <i class="bsearchBtn" @click="keySearch(value)"></i>
            </div>
            <p v-if="$lang=='cn'?true:false">
              搜索关键词：
              <span @click="keySearch('语音直播')">语音直播</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span @click="keySearch('视频直播')">视频直播</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span @click="keySearch('一对一语音')">一对一语音</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span @click="keySearch('多方视频')">多方视频</span>
            </p>
          </div>
        </div>
      </div>
      <div class="pcont cn" v-if="!showsearch && $lang=='cn'">
        <!-- 平台部分 -->
        <div class="part part_one">
          <h2>平台</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="pt-img">
                <img src="https://developer.juphoon.com/style/images/home/developer_pt@2x.png" />
              </div>
              <div class="pt-cont">
                <h3>菊风云平台</h3>
                <div class="pt-mark">
                  <div class="pt-item" v-for="item1 in first_data" :key="item1.title">
                    <a :href="item1.url">
                      {{item1.title}}
                      <i></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 产品部分 -->
        <div class="part part_two">
          <h2>产品</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="in-item" v-for="item2 in second_data" :key="item2.title">
                <div class="pt-img">
                  <img :src="item2.img" />
                </div>
                <div class="pt-cont">
                  <h3>
                    <a :href="item2.url">{{item2.title}}</a>
                  </h3>
                  <div class="pt-info" v-for="item3 in item2.children||[]" :key="item3.title">
                    <div>{{item3.title}}</div>
                    <div class="ptc-cont">
                      <div v-for="item4 in item3.children||[]" :key="item4.title">
                        <i></i>
                        {{item4.title}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 扩展功能 -->
        <div class="part part_three">
          <h2>扩展功能</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="col-sm-3 in-cont" v-for="item_3 in third_data" :key="item_3.title">
                <a :href="item_3.url">
                  <img :src="item_3.img" />
                  <div class="tit">{{item_3.title}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 遇到问题，您还可以选择 -->
        <div class="part part_four">
          <div class="part-cont">
            <img src="https://developer.juphoon.com/style/images/home/developer_experience@2x.png" />
            <p>遇到问题，您还可以选择</p>
            <a class="button" href="https://developer.juphoon.com/portal/cn/bbs/">社区发帖</a>
            <a
              class="contactline"
              href="http://wpa.qq.com/msgrd?v=3&amp;uin=2703650800&amp;site=qq&amp;menu=yes"
              target="_blank"
            >
              联系客服
              <i></i>
            </a>
          </div>
        </div>
      </div>
      <div class="pcont en" v-if="!showsearch && $lang=='en'">
        <!-- 产品部分 -->
        <div class="part part_two">
          <h2>Products</h2>
          <!-- Voice Calling -->
          <div class="part-cont">
            <div class="inner">
              <h1>Voice Calling</h1>
              <div class="inner_content">
                <img :src="img.Voice_Calling_one" alt />
                <div class="title">
                  <span @click="clickPath('path')">One-to-One Voice Calling</span>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Quick Start
                    <img :src="img.Lz" alt />
                  </router-link>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Demo Source Code
                    <img :src="img.DownLoad" alt />
                  </router-link>
                </div>
                <div style="clear:both"></div>
              </div>
              <div class="inner_content">
                <img :src="img.Voice_Calling_group" alt />
                <div class="title">
                  <span @click="clickPath('path')">Group Voice Calling</span>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Quick Start
                    <img :src="img.Lz" alt />
                  </router-link>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Demo Source Code
                    <img :src="img.DownLoad" alt />
                  </router-link>
                </div>
                <div style="clear:both"></div>
              </div>
            </div>
          </div>
          <!-- Video Calling -->
          <div class="part-cont">
            <div class="inner">
              <h1>Video Calling</h1>
              <div class="inner_content">
                <img :src="img.Video_Calling_one" alt />
                <div class="title">
                  <span @click="clickPath('path')">One-to-One Video Calling</span>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Quick Start
                    <img :src="img.Lz" alt />
                  </router-link>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Demo Source Code
                    <img :src="img.DownLoad" alt />
                  </router-link>
                </div>
                <div style="clear:both"></div>
              </div>
              <div class="inner_content">
                <img :src="img.Video_Calling_group" alt />
                <div class="title">
                  <span @click="clickPath('path')">Group Video Calling</span>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Quick Start
                    <img :src="img.Lz" alt />
                  </router-link>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Demo Source Code
                    <img :src="img.DownLoad" alt />
                  </router-link>
                </div>
                <div style="clear:both"></div>
              </div>
            </div>
          </div>
          <!-- Broadcasting -->
          <div class="part-cont">
            <div class="inner">
              <h1>Broadcasting</h1>
              <div class="inner_content">
                <img :src="img.Broadcasting_audio" alt />
                <div class="title">
                  <span @click="clickPath('path')">Live Interactive Audio Streaming</span>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Quick Start
                    <img :src="img.Lz" alt />
                  </router-link>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Demo Source Code
                    <img :src="img.DownLoad" alt />
                  </router-link>
                </div>
                <div style="clear:both"></div>
              </div>
              <div class="inner_content">
                <img :src="img.Broadcasting_video" alt />
                <div class="title">
                  <span @click="clickPath('path')">Live Interactive Video Streaming</span>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Quick Start
                    <img :src="img.Lz" alt />
                  </router-link>
                  <router-link to="home" target="_blank" v-if="!width800">
                    Demo Source Code
                    <img :src="img.DownLoad" alt />
                  </router-link>
                </div>
                <div style="clear:both"></div>
              </div>
            </div>
          </div>
          <div style="clear:both"></div>
        </div>
        <!-- 扩展功能 -->
        <div class="part part_three">
          <h2>SDK Download</h2>
          <div style="display: table;margin:0 auto">
            <a class="part-cont" :href="SDK_Download.ios">
              <div class="inner">
                <img :src="img.en_ios" alt />
                <h1>iOS</h1>
                <img :src="img.Download_load" alt />
              </div>
            </a>
            <a class="part-cont" :href="SDK_Download.twindows">
              <div class="inner">
                <img :src="img.en_windows" alt />
                <h1>Windows C#</h1>
                <img :src="img.Download_load" alt />
              </div>
            </a>
            <a class="part-cont" :href="SDK_Download.mac">
              <div class="inner">
                <img :src="img.en_macos" alt />
                <h1>macOS</h1>
                <img :src="img.Download_load" alt />
              </div>
            </a>
            <div style="clear:both"></div>
            <a class="part-cont" :href="SDK_Download.android">
              <div class="inner">
                <img :src="img.en_android" alt />
                <h1>Android</h1>
                <img :src="img.Download_load" alt />
              </div>
            </a>
            <a class="part-cont" :href="SDK_Download.app">
              <div class="inner">
                <img :src="img.en_windowsC" alt />
                <h1>Windows C++</h1>
                <img :src="img.Download_load" alt />
              </div>
            </a>
            <a class="part-cont" :href="SDK_Download.WebRTC" target="_blank">
              <div class="inner">
                <img :src="img.en_webrtc" alt />
                <h1>WebRTC</h1>
                <img :src="img.arrow" alt />
              </div>
            </a>

            <div style="clear:both"></div>
          </div>
        </div>
        <div class="part part_four">
          <div class="talk-back">
            <h3>Meet problems?</h3>
            <p>You can also contact our customer service.</p>
            <a href="https://developer.juphoon.com/en/signup" target="_blank" class="signUp">
              Get started for free >
              <span class="blink">_</span>
            </a>
            <a href="/en/talk-to-us.html" target="_blank" class="contactUs">Contact us</a>
          </div>
        </div>
      </div>
      <div class="pcont secondp cn" v-if="showsearch &&$lang =='cn'">
        <div class="top_search">
          <div class="search_div">
            <HomeAlgolia ref="HomeAlgolia" :options="algolia" :keyword="keyword" />
          </div>
        </div>
        <div class="spcont">
          <div class="group group_one">
            <div class="part-cont sp-cont">
              <div class="inner-cont">
                <div class="gitem">
                  <span>产品</span>
                  <div class="gi-cont proCont">
                    <span
                      v-for="item in pro_list"
                      class="gi-item"
                      :class="active.pro == item?'active':''"
                      @click="sortpro(item)"
                    >{{item}}</span>
                  </div>
                </div>
                <div class="gitem">
                  <span>平台</span>
                  <div class="gi-cont plaCont">
                    <span
                      v-for="item in platform_list"
                      class="gi-item"
                      :class="active.pla == item?'active':''"
                      @click="sortpla(item)"
                    >{{item}}</span>
                  </div>
                </div>
                <div class="gitem">
                  <span>分类</span>
                  <div class="gi-cont claCont">
                    <span
                      v-for="item in classify_list"
                      class="gi-item"
                      :class="active.class == item?'active':''"
                      @click="sortclass(item)"
                    >{{item}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group group_two" style="padding-top:40px">
            <div class="gcont" v-show="!Searching">
              <div class="gc-item" v-for="item_list in product_list" :key="item_list.objectID">
                <a
                  target="_blank"
                  @click="count(this);"
                  style="display: block;"
                  :href="item_list.url"
                  id="263"
                >
                  <div class="gtit">
                    <span
                      v-for="(hierarchy,index) in item_list.hierarchy"
                      v-if="hierarchy"
                      v-html="index=='lvl0'?item_list._highlightResult.hierarchy[index].value:' > '+item_list._highlightResult.hierarchy[index].value"
                    ></span>
                  </div>
                  <p
                    v-html="item_list.content? item_list._highlightResult.content.value:changecolor(item_list.anchor)"
                  ></p>
                </a>
              </div>
            </div>
            <div
              class="search-prompt"
              :style="{display: page.totalCount>0 || Searching?'none':'block'}"
            >
              <div class="title" style="font-size:16px;font-weight:bold">暂无数据</div>
            </div>
            <div class="search-prompt" :style="{display: Searching?'block':'none'}">
              <div class="title" style="font-size:16px;font-weight:bold">搜索中... ...</div>
            </div>
            <div class="search_pages">
              <HomePage
                v-if="page.totalCount>0&&!Searching"
                :currentPage.sync="page.currentPage"
                :limit.sync="page.limit"
                :totalCount="page.totalCount"
                @turn="getTableData"
                @update="getTableData"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 英文页面 -->
      <div class="pcont secondp en" v-if="showsearch &&$lang =='en'">
        <div class="top_content" style="width:100%">
          <div class="bac">
            <img src="https://developer.juphoon.com/style/images/home/developer_bg@2x.png" />
            <div class="bactxt">
              <h1 class="en_h1">Developer Center</h1>
              <h2
                class="en_h2"
              >Explore how to build your real-time voice and video services with our easily embedded SDK</h2>
              <div class="bacsearch">
                <HomeAlgolia ref="HomeAlgolia" :options="algolia" :keyword="keyword" />
              </div>
            </div>
          </div>
        </div>
        <div class="spcont">
          <div class="group group_one" style="padding: 0px 10px 0;">
            <div class="part-cont sp-cont">
              <div class="inner-cont">
                <div class="gitem" style>
                  <span>Products</span>
                  <div class="gi-cont proCont">
                    <span
                      v-for="item in pro_list"
                      class="gi-item"
                      :class="active.pro == item?'active':''"
                      @click="sortpro(item)"
                    >{{item}}</span>
                  </div>
                </div>
                <div class="gitem" style>
                  <span>Platforms</span>
                  <div class="gi-cont plaCont">
                    <span
                      v-for="item in platform_list"
                      class="gi-item"
                      :class="active.pla == item?'active':''"
                      @click="sortpla(item)"
                    >{{item}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group group_two" style="padding-top:40px">
            <div class="gcont" v-show="!Searching">
              <div class="gc-item" v-for="item_list in product_list" :key="item_list.objectID">
                <a
                  target="_blank"
                  @click="count(this);"
                  style="display: block;"
                  :href="item_list.url"
                  id="263"
                >
                  <div class="gtit">
                    <span
                      v-for="(hierarchy,index) in item_list.hierarchy"
                      v-if="hierarchy"
                      v-html="index=='lvl0'?item_list._highlightResult.hierarchy[index].value:' > '+item_list._highlightResult.hierarchy[index].value"
                    ></span>
                  </div>
                  <p
                    v-html="item_list.content? item_list._highlightResult.content.value:changecolor(item_list.anchor)"
                  ></p>
                </a>
              </div>
              <!-- /ko -->
            </div>
            <div
              class="search-prompt"
              :style="{display: page.totalCount>0 || Searching?'none':'block'}"
            >
              <div class="title" style="font-size:16px;font-weight:bold">暂无数据</div>
            </div>
            <div class="search-prompt" :style="{display: Searching?'block':'none'}">
              <div class="title" style="font-size:16px;font-weight:bold">搜索中... ...</div>
            </div>
            <div class="search_pages">
              <HomePage
                v-if="page.totalCount>0&&!Searching"
                :currentPage.sync="page.currentPage"
                :limit.sync="page.limit"
                :totalCount="page.totalCount"
                @turn="getTableData"
                @update="getTableData"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeFooter v-if="!showsearch" />
  </div>
</template>
<script>
import algoliasearch from "algoliasearch/lite";

import axios from "axios";

import HomeFooter from "@theme/components/HomeFooter.vue";
import HomeAlgolia from "@theme/components/HomeAlgolia.vue";
import HomePage from "@theme/components/HomePage.vue";
import Lz from "@theme/assets/img/lz@2x.png";
import DownLoad from "@theme/assets/img/demo_load@2x.png";
import Voice_Calling_one from "@theme/assets/img/Voice_Calling_one@2x.png";
import Voice_Calling_group from "@theme/assets/img/Voice_Calling_group@2x.png";
import Video_Calling_one from "@theme/assets/img/Video_Calling_one@2x.png";
import Video_Calling_group from "@theme/assets/img/Video_Calling_group@2x.png";
import Broadcasting_audio from "@theme/assets/img/Broadcasting_audio@2x.png";
import Broadcasting_video from "@theme/assets/img/Broadcasting_video@2x.png";

import en_ios from "@theme/assets/img/en_ios@2x.png";
import en_windows from "@theme/assets/img/en_windowsC#@2x.png";
import en_macos from "@theme/assets/img/en_macos@2x.png";
import en_android from "@theme/assets/img/en_android@2x.png";
import en_windowsC from "@theme/assets/img/en_windowsC++@2x.png";
import en_webrtc from "@theme/assets/img/en_webrtc@2x.png";
import Download_load from "@theme/assets/img/SDK Download_load@2x.png";
import arrow from "@theme/assets/img/arrow@2x.png";
import {
  first_pcont,
  second_pcont,
  third_pcont,
  forth_pcont,
} from "@theme/components/HomeSearch/config.js";
export default {
  components: { HomeFooter, HomeAlgolia, HomePage },
  data() {
    return {
      searchClient: algoliasearch(
        "BF4RDO0EYD",
        "4a2857c7afb83b2687a2922aaaf56bcf"
      ),
      img: {
        Lz: Lz,
        DownLoad: DownLoad,
        Voice_Calling_one: Voice_Calling_one,
        Voice_Calling_group: Voice_Calling_group,
        Video_Calling_one: Video_Calling_one,
        Video_Calling_group: Video_Calling_group,
        Broadcasting_audio: Broadcasting_audio,
        Broadcasting_video: Broadcasting_video,
        en_ios: en_ios,
        en_windows: en_windows,
        en_macos: en_macos,
        en_android: en_android,
        en_windowsC: en_windowsC,
        en_webrtc: en_webrtc,
        Download_load: Download_load,
        arrow: arrow,
      },
      SDK_Download: {
        ios: "",
        android: "",
        twindows: "",
        mac: "",
        app: "",
        WebRTC: "https://developer.juphoon.com/webrtc2.0/web/",
      },
      width800: false,
      first_data: first_pcont,
      second_data: second_pcont,
      third_data: third_pcont,
      forth_data: forth_pcont,
      showsearch: false, // 是否显示搜索结果界面
      aligola_list: [], // 所有数据
      aligola_list_slot: [], // 分类数据
      product_list: [], // 显示的数据
      value: "", //
      keyword: "", // 搜索的关键字
      page: {
        currentPage: 1, //当前页码
        limit: 20, //每页显示条数
        totalCount: 0, //总页数
      },
      Searching: false, // 搜索中
      pro_list: [], // 产品分类
      platform_list: [],
      classify_list: ["所有", "平台文档", "FAQ"],
      active: {},
    };
  },
  created() {
    this.pro_list =
      this.$lang == "cn"
        ? [
            "所有",
            "一对一语音通话",
            "一对一视频通话",
            "多方语音通话",
            "多方视频通话",
            "语音互动直播",
            "视频互动直播",
          ]
        : [
            "All",
            "One-to-One Voice Calling",
            "Group Voice Calling",
            "One-to-One Video Calling",
            "Group Video Calling",
            "Live Interactive Audio Streaming",
            "Live Interactive Video Streaming",
          ];
    this.platform_list =
      this.$lang == "cn"
        ? ["所有", "iOS", "Android", "Windows", "macOS"]
        : ["All", "iOS", "Android", "Windows", "macOS"];

    this.active =
      this.$lang == "cn"
        ? {
            pro: "所有",
            pla: "所有",
            class: "所有",
          }
        : {
            pro: "All",
            pla: "All",
            class: "All",
          };
  },
  computed: {
    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },
  },
  watch: {
    $route(newValue, oldValue) {
      let hash = this.$route.hash.substr(1);
      if (hash) {
        this.showsearch = true;
        this.keyword = hash;
      }
    },
  },
  mounted() {
    console.log(this.$lang);
    let that = this;
    let hash = this.$route.hash.substr(1);
    if (hash) {
      this.showsearch = true;
      this.keyword = hash;
    }
    that.$EventBus.$on("SearchResults", (res) => {
      console.log(res);
      that.showlist(res);
    });
    that.$EventBus.$on("Searching", (res) => {
      that.Searching = res;
    });
    // window.addEventListener("resize", this.screenWidth(), true);
    window.onresize = () => {
      this.screenWidth();
    };
    this.get_log_version_dev();
  },
  // destroyed() {
  //   window.removeEventListener("resize", this.screenWidth(), true);
  // },
  methods: {
    screenWidth() {
      if (window.innerWidth < 800) this.width800 = true;
      else this.width800 = false;
    },
    clickPath() {
      console.log("tiaozhuan ");
    },
    get_log_version_dev() {
      let that = this;
      axios({
        method: "POST",
        url: "/portal/cn/message/?c=CDownload&a=C_download_sdklist",
        data: { type: 1 },
      })
        .then(function (response) {
          var data = response.data;
          var ios = data.data[0] ? data.data[0].list : "";
          var android = data.data[2] ? data.data[2].list : "";
          var twindows = data.data[1] ? data.data[1].list : "";
          var mac = data.data[3] ? data.data[3].list : "";
          var app = data.data[4] ? data.data[4].list : "";
          thisArr(ios, 0, 0);
          thisArr(android, 1, 0);
          thisArr(twindows, 2, 0);
          thisArr(mac, 3, 0);
          thisArr(app, 4, 0);
        })
        .catch(function (error) {
          console.log(error);
        });

      function thisArr(arr, index, type) {
        var arrs = Object.keys(arr);
        var last = arrs[arrs.length - 1];
        var last_list = arr[last];
        var version = last_list[0].version;
        if (type == 0) {
          var urla =
            "https://developer.juphoon.com/portal/cn/downloadsdk/download_sdk.php?filename=";
          var href = urla + last_list[0].filename;
          if (index == 0) that.SDK_Download.ios = href;
          else if (index == 1) that.SDK_Download.android = href;
          else if (index == 2) that.SDK_Download.twindows = href;
          else if (index == 3) that.SDK_Download.mac = href;
          else if (index == 4) that.SDK_Download.app = href;
        }
      }
    },
    // 三种点击事件
    sortpro(res) {
      this.active.pro = res;
      console.log(res);
      this.$refs.HomeAlgolia.getSearchData(this.keyword, {
        // tagFilters: res == "所有" ? [] : [res],
        clickAnalytics: true,
        getRankingInfo: true,
        analytics: false,
        enableABTest: false,
        hitsPerPage: 20,
        attributesToRetrieve: "*",
        attributesToSnippet: "*:20",
        snippetEllipsisText: "…",
        responseFields: "*",
        maxValuesPerFacet: 100,
        page: 0,
        facets: ["*", "lang", "tags"],
        facetFilters: [
          ["lang:" + this.$lang + ""],
          ["tags:" + (res == "所有" ? "All" : res)],
        ],
      });
      // this.sortfunction();
    },
    sortpla(res) {
      this.active.pla = res;
      this.sortfunction();
    },
    sortclass(res) {
      this.active.class = res;
      this.sortfunction();
    },

    // 三种点击事件的实际操作（还没写）
    sortfunction() {
      if (
        this.active.pro == "所有" &&
        this.active.pla == "所有" &&
        this.active.class == "所有"
      ) {
        this.aligola_list_slot = this.aligola_list;
        this.product_list = this.pageDataFn(1, 10, this.aligola_list_slot);
        console.log(this.aligola_list);
        console.log(this.product_list);
      } else {
        let newarray = this.aligola_list;
        let array = [];
        if (this.active.pro != "所有") {
          let thisarray = [];
          if (array.length != 0) {
            thisarray = array;
            array = [];
          } else thisarray = newarray;
          thisarray.map((item) => {
            if (item.hierarchy.lvl0 == this.active.pro) array.push(item);
          });
        }
        if (this.active.pla != "所有") {
          let thisarray = [];
          if (array.length != 0) {
            thisarray = array;
            array = [];
          } else thisarray = newarray;
          thisarray.map((item) => {
            if (item.url.indexOf(this.active.pla) > -1) array.push(item);
          });
        }
        if (this.active.class != "所有") {
          let thisarray = [];
          if (array.length != 0) {
            thisarray = array;
            array = [];
          } else thisarray = newarray;

          thisarray.map((item) => {
            if (this.active.class == "平台文档") {
              if (item.url.indexOf("FAQ") > -1) {
              } else array.push(item);
            } else {
              if (item.url.indexOf("FAQ") > -1) array.push(item);
            }
          });
        }
        console.log(array);
        console.log(this.aligola_list);

        this.aligola_list_slot = array;
        this.product_list = this.pageDataFn(1, 10, this.aligola_list_slot);
      }
    },
    //重新获取数据
    getTableData(page) {
      this.$refs.HomeAlgolia.getSearchData(this.keyword, {
        clickAnalytics: true,
        getRankingInfo: true,
        analytics: false,
        enableABTest: false,
        hitsPerPage: 20,
        attributesToRetrieve: "*",
        attributesToSnippet: "*:20",
        snippetEllipsisText: "…",
        responseFields: "*",
        maxValuesPerFacet: 100,
        page: this.page.currentPage - 1,
        facets: ["*", "lang"],
        facetFilters: [["lang:" + this.$lang + ""]],
      });
      // this.product_list = this.pageDataFn(page, 10, this.aligola_list_slot);
    },
    // 改变颜色
    changecolor(Str) {
      let strlist = "";
      for (let l = 0; l < Str.length; l++) {
        let str = "";
        let this_str = "";
        for (let i = 0; i < this.keyword.length; i++) {
          let item = this.keyword[i];
          let reg = new RegExp("(" + item + ")", "gi");
          if (
            this_str.length <
            Str[l].replace(reg, "<font color='#008AFF'><b>$1</b></font>").length
          ) {
            this_str = Str[l].replace(
              reg,
              "<font color='#008AFF'><b>$1</b></font>"
            );
          }
        }
        strlist += this_str;
      }
      return strlist;
      // let newstr = Str;
      // let reg = new RegExp("(" + this.keyword + ")", "gi");
      // newstr = newstr.replace(reg, "<font color='#008AFF'><b>$1</b></font>");
      // return newstr;
      // }
    },
    count(res) {
      // 计算点击量
      console.log(res);
    },
    showlist(data) {
      this.aligola_list = JSON.parse(JSON.stringify(data.hits)); //记录原始数据
      this.aligola_list_slot = this.aligola_list; //点击的第一下现在是原始数据

      // nbHits: 312;
      // nbPages: 32;
      // page: 1;
      this.page = {
        currentPage: data.page + 1, //当前页码
        limit: data.hitsPerPage, //每页显示条数
        totalCount: data.nbHits, //总页数
      };
      this.product_list = JSON.parse(JSON.stringify(data.hits));
      // this.product_list = this.pageDataFn(1, 10, this.aligola_list); // 展示数据
    },
    keySearch(str) {
      console.log("str=>", str);
      this.showsearch = true;
      this.$router.push({ hash: str });
    },
    pageDataFn(number, pageSize, data) {
      this.page.currentPage = number;
      this.page.limit = pageSize;
      this.page.totalCount = data.length;
      let pagedata = [],
        start = pageSize * number - pageSize,
        end = pageSize * number;
      end = end > data.length ? data.length : end;
      for (let i = start; i < end; i++) {
        pagedata.push(data[i]);
      }
      return pagedata;
    },
  },
};
</script>
<style lang="stylus" scoped>
@require '../styles/HomeSearch.styl';
@require '../styles/header_footer.styl';

.bactxt {
  h1 {
    height: 42px;
    font-size: 30px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 42px;
  }

  .en_h1 {
    margin-bottom: 4px;
  }

  h2 {
    text-align: center;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 21px;
  }

  .en_h2 {
    margin-bottom: 28px;
  }

  #bacinp::-webkit-input-placeholder, #bacinp::-moz-placeholder, #bacinp:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
}

.en {
  margin-top: 20px;

  .gi-cont {
    margin-left: 116px;
  }

  .part_two {
    height: 444px;
    width: 95%;
    max-width: 1163px;
    margin: 0 auto;

    .part-cont {
      float: left;
      width: 33.33%;

      .inner {
        overflow: hidden;
        padding: 36px 28px;
        box-shadow: none;
        background: #FFFFFF;
        border-radius: 20px;
        border: 1px solid #DFDFDF;

        h1 {
          margin-bottom: 55px;
          height: 28px;
          font-size: 20px;
          font-weight: 500;
          color: #000000;
          line-height: 28px;
        }

        .inner_content {
          margin-top: 27px;

          >img {
            width: 36px;
            float: left;
            margin-right: 16px;
          }

          .title {
            white-space: nowrap;

            >span {
              height: 36px;
              font-size: 17px;
              font-weight: 500;
              color: #000000;
              line-height: 36px;
            }

            a {
              margin-top: 13px;
              margin-left: 52px;
              height: 21px;
              font-size: 15px;
              font-weight: 300;
              color: #000000;
              line-height: 25px;
              display: none;

              img {
                width: 20px;
                font-size: 20px;
              }
            }

            a:hover {
              color: #008AFF;
            }
          }

          .title:hover>span {
            color: #008AFF;
          }

          .title:hover a {
            display: block;
            opacity: 1;
            transform: translate(0, 0);
          }
        }
      }

      .inner:hover {
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);
        border: 1px solid transparent;
      }
    }
  }

  .part_three {
    width: 95%;
    max-width: 1163px;
    margin: 0 auto;

    .part-cont {
      float: left;
      width: 33.33%;

      .inner {
        min-width: 240px;
        overflow: hidden;
        padding: 24px;
        box-shadow: none;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #DFDFDF;

        img:first-child {
          margin-right: 16px;
          float: left;
          width: 36px;
        }

        h1 {
          float: left;
          white-space: nowrap;
          height: 36px;
          // font-size: 20px;
          // font-weight: 500;
          // color: #000000;
          line-height: 36px;
          width: 100px;
          font-size: 15px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
        }

        img:last-child {
          float: right;
          width: 30px;
          margin: 3px 0px;
        }
      }

      .inner:hover {
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);
        border: 1px solid transparent;
      }
    }
  }

  .part_four {
    background: none;
    padding: 0;
    position: relative;
    top: 140px;

    a {
      height: 50px;
      border-radius: 11px;
      font-size: 22px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 500;
      line-height: 50px;
      display: inline-block;
      margin-top: 5px;
    }

    .talk-back {
      background: url('../assets/img/meetproblems@2x.png') no-repeat;
      background-size: 100% 100%;
      max-width: 1075px;
      margin: 0 auto;
      position: relative;
      // top: 100px;
      box-sizing: border-box;
      padding: 30px;
      padding-bottom: 50px;

      h3, p {
        margin: 0;
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 45px;
      }

      h3 {
        margin-top: 30px;
      }

      .signUp {
        width: 281px;
        background: #3035FF;
        color: rgba(255, 255, 255, 1);
      }

      /* 下划线闪烁 */
      @keyframes blink {
        0% {
          opacity: 1;
        }

        50% {
          opacity: 1;
        }

        50.01% {
          opacity: 0;
        }

        100% {
          opacity: 0;
        }
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }

        50% {
          opacity: 1;
        }

        50.01% {
          opacity: 0;
        }

        100% {
          opacity: 0;
        }
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }

        50% {
          opacity: 1;
        }

        50.01% {
          opacity: 0;
        }

        100% {
          opacity: 0;
        }
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }

        50% {
          opacity: 1;
        }

        50.01% {
          opacity: 0;
        }

        100% {
          opacity: 0;
        }
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }

        50% {
          opacity: 1;
        }

        50.01% {
          opacity: 0;
        }

        100% {
          opacity: 0;
        }
      }

      .blink {
        color: #ffffff;
        font-size: 22px;
        font-weight: bolder;
        position: absolute;
        animation: blink 1s linear infinite;
        /* 其它浏览器兼容性前缀 */
        -webkit-animation: blink 1s linear infinite;
        -moz-animation: blink 1s linear infinite;
        -ms-animation: blink 1s linear infinite;
        -o-animation: blink 1s linear infinite;
      }

      .contactUs {
        width: 173px;
        background: linear-gradient(153deg, rgba(233, 245, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
        color: rgba(22, 149, 255, 1);
        margin-left: 24px;
      }
    }
  }
}

@media (max-width: 800px) {
  .en {
    .part_two {
      height: auto;

      .part-cont {
        width: 100%;

        .inner {
          .inner_content {
            .title {
              .title:hover>span {
                color: #008AFF;
              }

              .title a {
                display: none !important;
              }
            }
          }
        }

        .inner:hover {
          box-shadow: none;
          border: 1px solid #DFDFDF;
        }
      }
    }
  }

  .en .part_three .part-cont {
    width: 100%;
  }

  .en .gi-cont {
    margin-left: 82px;
  }
}

.top_search {
  display: block !important;
}

blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.all {
  min-width: 100%;
  width: 100%;
  display: block;
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
}

@media (min-width: 800px) {
  .col-sm-3 {
    float: left;
    width: 25%;
  }
}

@media (max-width: 800px) {
  .search_pages {
    padding: 30px 0 100px;
  }
}
</style>