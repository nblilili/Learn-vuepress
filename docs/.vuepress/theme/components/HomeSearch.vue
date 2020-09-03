<template>
  <div>
    <div class="all">
      <div class="top_content" v-if="!showsearch" style="width:100%">
        <div class="bac">
          <img src="https://developer.juphoon.com/style/images/home/developer_bg@2x.png" />
          <div class="bactxt">
            <h1>开发者中心</h1>
            <div class="bacsearch">
              <input
                class="form-control bacinp"
                v-model="keyword"
                @keyup.enter="keySearch(keyword)"
              />
              <i class="bsearchBtn" data-bind="search_c:c_key" @click="keySearch(keyword)"></i>
            </div>
            <p>
              搜索关键词：
              <span @click="keySearch('语音直播')">语音直播</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span @click="keySearch('视频直播')">视频直播</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span @click="keySearch('一对一语音')">一对一语音</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span @click="keySearch('多方视频')">多方视频</span>
            </p>
          </div>
        </div>
      </div>
      <div class="pcont" v-if="!showsearch">
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
                  <div class="pt-info" v-for="item3 in item2.children" :key="item3.title">
                    <div>{{item3.title}}</div>
                    <div class="ptc-cont">
                      <div v-for="item4 in item3.children" :key="item4.title">
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
      <div class="pcont secondp" v-if="showsearch">
        <div class="top_search">
          <div class="search_div">
            <!-- <input class="form-control bacinp" data-bind="value:key,search_c:c_key" /> -->
            <HomeAlgolia :options="algolia" :keyword="keyword" />
            <!-- <i class="bsearchBtn" data-bind="search_c:c_key"></i> -->
          </div>
        </div>
        <div class="spcont">
          <div
            class="group group_one"
            data-bind="visible:(product_list().length>0 || platform_list().length>0 || classify_list().length>0)"
            style
          >
            <div class="part-cont sp-cont">
              <div class="inner-cont">
                <div class="gitem" data-bind="visible:product_list().length>0" style>
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
                <div class="gitem" data-bind="visible:platform_list().length>0" style>
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
                <div class="gitem" data-bind="visible:classify_list().length>0" style>
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
            <div class="gcont">
              <!--ko foreach:{data:search_list}-->
              <div class="gc-item" v-for="item_list in product_list" :key="item_list.objectID">
                <a
                  target="_blank"
                  @click="count(this);"
                  style="display: block;"
                  :href="item_list.url"
                  id="263"
                >
                  <div class="gtit" data-bind="html:title">
                    <!-- <span v-html="changecolor(item_list.anchor)"></span> -->
                    <span
                      v-for="(hierarchy,index) in item_list.hierarchy"
                      v-if="hierarchy"
                      v-html="index=='lvl0'?changecolor(hierarchy):' > '+changecolor(hierarchy)"
                    ></span>
                  </div>
                  <p
                    v-html="item_list.content?changecolor(item_list.content):changecolor(item_list.anchor)"
                  ></p>
                </a>
              </div>
              <!-- /ko -->
            </div>
            <div
              class="search-prompt"
              data-bind="visible:visible"
              :style="{display: !!page.totalCount?'none':'block'}"
            >
              <div class="title" style="font-size:16px;font-weight:bold">暂无数据</div>
            </div>
            <div class="search_pages">
              <!-- <div class="searchTxt" data-bind="visible:searchShow()" style>
                一共
                <span style="color:#008AFF;" data-bind="text:searchNum">15</span> 条数据
              </div>-->
              <!-- 分页 -->
              <HomePage
                v-if="page.totalCount>0"
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
    <HomeFooter />
  </div>
</template>
<script>
import HomeFooter from "@theme/components/HomeFooter.vue";
import HomeAlgolia from "@theme/components/HomeAlgolia.vue";
import HomePage from "@theme/components/HomePage.vue";
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
      first_data: first_pcont,
      second_data: second_pcont,
      third_data: third_pcont,
      forth_data: forth_pcont,
      showsearch: false, // 是否显示搜索结果界面
      aligola_list: [], // 所有数据
      aligola_list_slot: [], // 分类数据
      product_list: [], // 显示的数据
      keyword: "", // 搜索的关键字
      page: {
        currentPage: 1, //当前页码
        limit: 10, //每页显示条数
        totalCount: 0, //总页数
      },

      pro_list: [
        "所有",
        "一对一语音通话",
        "一对一视频通话",
        "多方语音通话",
        "多方视频通话",
        "语音互动直播",
        "视频互动直播",
      ],
      platform_list: ["所有", "iOS", "Android", "Windows", "macOS"],
      classify_list: ["所有", "平台文档", "FAQ"],
      active: {
        pro: "所有",
        pla: "所有",
        class: "所有",
      },
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
        this.keyword = decodeURI(hash);
      } else this.showsearch = false;
    },
  },
  mounted() {
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
  },
  methods: {
    // 三种点击事件
    sortpro(res) {
      this.active.pro = res;
      this.sortfunction();
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
        this.aligola_list_slot = array;
        this.product_list = this.pageDataFn(1, 10, this.aligola_list_slot);
      }
    },
    //重新获取数据
    getTableData(page) {
      this.product_list = this.pageDataFn(page, 10, this.aligola_list_slot);
    },
    // 改变颜色
    changecolor(Str) {
      let newstr = Str;
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
      this.product_list = this.pageDataFn(1, 10, this.aligola_list); // 展示数据
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