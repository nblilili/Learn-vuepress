<template>
  <div class="pagefor800">
    <main class="page" ref="Page">
      <slot name="top" />
      <div class="big-box">
        <div class="page-left" ref="pronbit">
          <!-- tags是this.$page.frontmatter.tags，这是通过vuepress编译markdown文件中的tags生成的标签数组。 -->
          <!-- $site.themeConfig.tags是config.js中配置的tags目录 -->
          <!-- <section class="tags" v-if="this.$site.themeConfig.tags&&tags&&tags.length>0">
          <span class="tagPopup" v-for="tag in tags">
            <router-link :to="'/'+$site.themeConfig.tags+'/?tag='+tag" class="tag">{{tag}}</router-link>
          </span>
          </section>-->
          <!-- <div>{{title}}</div>  -->
          <div class="contentTop">
            <div class="top_search" v-show="topsearch">
              <div class="search_div">
                <div>
                  <input
                    :placeholder="$lang =='cn'?'请输入搜索内容':'Please enter keywords to search'"
                    class="search-query form-control bacinp"
                    v-model="keyword"
                    @keyup.enter="goSearch(keyword)"
                  />
                  <i class="bsearchBtn" @click="goSearch(keyword)"></i>
                </div>
              </div>
            </div>
            <i class="left-menu-btn" @click="clickmenu()"></i>
            <span class="layui-breadcrumb">
              <a v-for="(item,i) in title" :key="item" href="javascript:;">
                {{item}}
                <span v-if="i!=title.length-1" lay-separator>&gt;</span>
              </a>
            </span>
          </div>
          <div style="padding: 2.5rem 2.5rem 0px 2.5rem" v-if="needTags">
            <div class="mbtns">
              <div
                v-for="item in CardName"
                :key="item.name"
                @click="clickTags(item.href,item.name)"
              >
                <router-link :class="item.active?'active':''" :to="item.href">{{item.name}}</router-link>
              </div>
            </div>
          </div>
          <Content class="theme-default-content mcont DocSearch-content"></Content>
          <PageEdit />
          <PageNav v-if="($route.path.indexOf('iOS') <= -1)" v-bind="{ sidebarItems }" />
        </div>
        <div class="clear"></div>
      </div>
      <slot name="bottom" />
    </main>
    <div class="modal_big" :class="showing?'play-second':'play-first'" v-show="showmodal">
      <div id class="layui-layer-content">{{showtext}}</div>
      <span class="layui-layer-setwin"></span>
    </div>
  </div>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import SidebarRight from "@theme/components/SidebarRight.vue";
// import TagsConfig from "../../config/TagsConfig.js";

export default {
  components: { PageEdit, PageNav, SidebarRight },
  props: ["sidebarItems", "toggleSidebar"],
  data() {
    return {
      keyword: "",
      addclass: "",
      needTags: false,
      CardName: [],
      title: "",
      keyword: "",
      topsearch: false,
      showmodal: false, // 显示模态框
      showclass: "play-first",
      showtext: "",
      showing: false,
      s_obj: {
        init_class: true,
        show_in: false,
        show_out: false,
      },
    };
  },
  watch: {
    // showmodal() {
    //   if (this.showmodal) {
    //     this.s_obj = {
    //       init_class: false,
    //       show_in: true,
    //       show_out: false,
    //     };
    //   } else {
    //     this.s_obj = {
    //       init_class: false,
    //       show_in: false,
    //       show_out: true,
    //     };
    //   }
    // },
    $route(newValue, oldValue) {
      this.keyword = "";
      let that = this;
      setTimeout(() => {
        this.$nextTick(() => {
          this.$EventBus.$emit("pageHeight", this.$refs.Page.clientHeight);
        });
      }, 0);
      var i = 1;
      var setHight = setInterval(() => {
        set();
      }, 200);
      function set() {
        that.$nextTick(() => {
          that.$EventBus.$emit("pageHeight", that.$refs.Page.clientHeight);
        });
        i++;
        if (i == 5) clearInterval(setHight);
      }
    },
    sidebarItems(newValue, oldValue) {
      this.needTags = false;
      this.checkroute();
      this.checkpath();
    },
  },
  created() {
    this.needTags = false;
    this.checkroute();
  },
  mounted() {
    this.topsearch = true;
    this.checkpath();
    var that = this;
    this.needTags = false;
    this.checkroute();
    setTimeout(() => {
      this.$nextTick(() => {
        this.$EventBus.$emit("pageHeight", this.$refs.Page.clientHeight);
      });
    }, 200);
    this.$EventBus.$on("resetHeight", (res) => {
      var i = 1;
      var setHight = setInterval(() => {
        set();
      }, 200);
      function set() {
        that.$nextTick(() => {
          that.$EventBus.$emit("pageHeight", that.$refs.Page.clientHeight);
        });
        i++;
        if (i == 5) clearInterval(setHight);
      }
    });
    this.$EventBus.$on("topsearch", (res) => {
      this.topsearch = true;
    });
    let hash = this.$route.hash.substr(1);
    if (hash) {
      this.$router.push({ hash: decodeURI(hash) });
    }
  },
  methods: {
    clickTags(value, name) {
      console.log(value, name);
      localStorage.platform = value;
      // if(value == )
      this.showtext =
        this.$lang == "cn"
          ? "您已切换成" + name + "平台"
          : "You have switched to platform" + name;
      // this.showmodal = true;
      this.showmodal = true;
      this.showing = true;
      if (this.showing) {
        this.showing = true;
        setTimeout(() => {
          // this.showmodal = false;
          this.showing = false;
        }, 3000);
      }
      // this.showclass = "play-first";
      // // ?'play-first':'play-second'
      // setTimeout(() => {
      //   this.showclass = "play-second";
      //   // setTimeout(() => {
      //     this.showmodal = false;
      //   // }, 1500);
      // }, 3000);
    },
    goSearch(value) {
      console.log(`/${this.$lang}/#` + value);
      this.$router.push({ path: `/${this.$lang}/#` + value });
    },
    clickmenu() {
      this.topsearch = false;
      this.$EventBus.$emit("changeMenu", true);
    },
    checkpath() {
      let that = this;
      let sidebarItems = this.sidebarItems;
      let path = this.$route.path;
      var targetPath = path;
      function findPath(array, path = []) {
        for (const data of array) {
          path.push(data.title);
          if (!data.children) {
            if (data.path) {
              if (data.path == decodeURI(that.$route.path)) return path;
              if (check_path_0(data.path) == check_path_0(that.$route.path)) {
                if (data.path == that.$route.path) return path;
                if (check_path(data.path) == "iOS.html") return path;
              }
            }
          } else if (data.path && data.path == that.$route.path) return path;
          if (data.children) {
            const findChildren = findPath(data.children, path);
            if (findChildren.length) return findChildren;
          }
          path.pop();
        }
        return [];
      }
      this.title = findPath(sidebarItems);
    },

    checkroute() {
      let that = this;
      var TagsConfig = {};
      var url = this.$route.path;
      if (url.indexOf("/cn/") > -1) {
        TagsConfig = this.$themeConfig.locales["/cn/"].tagConfig;
      } else if (url.indexOf("/en/" > -1)) {
        TagsConfig = this.$themeConfig.locales["/en/"].tagConfig;
      }
      for (let i in TagsConfig) {
        if (url.indexOf(i) > -1) {
          this.needTags = true;
          let array = [];
          TagsConfig[i].forEach((e) => {
            let name = e;
            if (name == "C++") name = "Windows C++";
            else if (name == "Windows") name = "Windows C#";
            array.push({
              name: name,
              active: decodeURI(url).indexOf(e) > -1 ? true : false,
              href: e + ".html",
            });
          });
          this.CardName = array;
        }
      }
      // console.log(JSON.stringify(this.CardName));
      // let changeRoute = JSON.parse(JSON.stringify(this.CardName));
      // console.log(this.$route.path);
      // let path = this.$route.path;
      // console.log(path.substring(path.lastIndexOf("/") + 1));
      // let path_first = path.substring(0, path.lastIndexOf("/") + 1);
      // let path_last = path.substring(path.lastIndexOf("/") + 1);
      // console.log(localStorage.platform);
      // for (let i in JSON.parse(JSON.stringify(this.CardName))) {
      //   console.log(changeRoute[i]);
      //   if (localStorage.platform.indexOf(changeRoute[i].href) > -1) {
      //     console.log(localStorage.platform, path_last, path_first);
      //     this.$router.push({
      //       path: path_first + localStorage.platform,
      //     });
      //   }
      // }
    },
    // handleScrollx() {
    //   let that = this;
    //   if (window.innerWidth > 800) {
    //     if (that.$refs.pronbit.getBoundingClientRect().top > -1) {
    //       that.addclass = "";
    //     } else {
    //       that.addclass = "fixed";
    //     }
    //     that.$emit("addclass", that.addclass);
    //   }
    // },
    // throttle(fn, delay, atleast) {
    //   /**函数节流方法
    //     @param Function fn 延时调用函数
    //     @param Number dalay 延迟多长时间
    //     @param Number atleast 至少多长时间触发一次
    //     @return Function 延迟执行的方法
    //   */
    //   let timer = null;
    //   let previous = null;
    //   return function () {
    //     var now = +new Date();
    //     if (!previous) previous = now;
    //     if (atleast && now - previous > atleast) {
    //       fn();
    //       // 重置上一次开始时间为本次结束时间
    //       previous = now;
    //       clearTimeout(timer);
    //     } else {
    //       clearTimeout(timer);
    //       timer = setTimeout(function () {
    //         fn();
    //         previous = null;
    //       }, delay);
    //     }
    //   };
    // },
  },
};
function check_path_0(data) {
  let str = data;
  let index = str.lastIndexOf("/");
  return (str = str.substr(0, index + 1));
}
function check_path(data) {
  let str = data;
  let index = str.lastIndexOf("/");
  return (str = str.substr(index + 1, str.length));
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';
@require '../styles/HomeSearch.styl';
@import url('//at.alicdn.com/t/font_1986404_olndtqc1n5q.css');

.modal_big {
  transition: all 1s;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(47, 46, 65, 0.9);
  background-size: auto;
  border-bottom-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: none;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  height: 48px;
  left: 37.5%;
  z-index:9999999;
  margin: 0 auto;
  max-width: 500px;
  min-width: 100px;
  padding: 0;
  position: fixed;
  top: 80px;
  width: 25%;
}

.layui-layer-content {
  display: block;
  font-size: 14px;
  font-weight: 400;
  height: 48px;
  line-height: 24px;
  padding-bottom: 12px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 12px;
  position: relative;
  text-align: center;
}

.play-first {
  // animation: myfirst 1.5s;
  height: 0px !important;
}

.play-second {
  // animation: mysecond 1.5s;
  height: 48px;
}

@keyframes myfirst {
  0% {
    opacity: 0;
  }

  0% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
  }
}

@keyframes mysecond {
  0% {
    opacity: 1;
  }

  0% {
    opacity: 0.75;
  }

  100% {
    opacity: 0;
  }
}

.page-left .top_search {
  display: none;
}

.contentTop {
  padding-top: 30px;
}

@media (max-width: 800px) {
  .contentTop {
    padding-top: 109px;
  }

  .page-left .top_search {
    display: block;
  }
}

.top_search {
  display: none;
}

.contentTop {
  padding-top: 30px;
}

@media (max-width: 800px) {
  .contentTop {
    padding-top: 109px;
  }

  .top_search {
    display: block;
  }
}

.page {
  // padding-bottom: 2rem;
  display: block;
}

.big-box {
  margin: 40px 0px 0px 10px;
  background: #fff;
}

.page-left {
  margin: 0;
  padding: 0;
  width: 100%;
  float: left;
}

.page-right {
  width: 220px;
  height: calc(100vh - 60px);
  padding: 16px;
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  bottom: 0;
  overflow-y: auto;
  margin-top: 40px;
}

.fixed {
  position: fixed;
}

.clear {
  clear: both;
}

@media screen and (max-width: 800px) {
  .page {
    background: #fff;
  }

  .big-box {
    margin: 60px 0px 0px 0px;
    background: #fff;
  }

  .page-left {
    margin: 0;
    padding: 0;
    width: 100%;
    float: left;
  }

  .page-right {
    display: none;
    margin-top: 56px;
    float: right;
    width: 0px;
    padding: 0 0 0 20px;
    position: relative;
  }
}

// .theme-default-content{
// background: #fff;
// }
a, a:hover, a:focus {
  text-decoration: none;
}

.card {
  margin-bottom: 10px;
}

.mbtns {
  padding: 0px !important;

  div {
    display: inline;
  }
}

.mbtns a.active, .mbtns a.active:hover, .sdkcont .mbtns a.active, .sdkcont .mbtns a.active:hover, .mbtns a:hover {
  background: rgba(0, 138, 255, 1);
  color: #fff;
}

.mbtns a {
  display: inline-block;
  margin-right: 10px;
  height: 40px;
  line-height: 40px;
  padding: 0 19px;
  background: #f6f9fa;
  border-radius: 20px;
  color: #68758d;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
}

.pagefor800 {
  width: calc(100% - 480px);
}

@media (max-width: 800px) {
  .pagefor800 {
    width: 100%;
  }
}
</style>
