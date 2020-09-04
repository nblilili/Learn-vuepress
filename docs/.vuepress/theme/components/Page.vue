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
                    placeholder="请输入搜索内容"
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
              <router-link
                :class="item.active?'active':''"
                v-for="item in CardName"
                :key="item.name"
                :to="item.href"
              >{{item.name}}</router-link>
            </div>
          </div>
          <Content class="theme-default-content mcont DocSearch-content"></Content>
          <!-- <Content slot-key="head" /> -->
          <PageEdit />
          <PageNav v-if="($route.path.indexOf('iOS') <= -1)" v-bind="{ sidebarItems }" />
        </div>
        <!-- <div class="page-right">
        <SidebarRight
          :items="sidebarItems"
          @toggle-sidebar="toggleSidebar"
          v-if="!$page.frontmatter.home"
          :class="addclass"
        >
          <template #top>
            <slot name="sidebar-top" />
          </template>
          <template #bottom>
            <slot name="sidebar-bottom" />
          </template>
        </SidebarRight>
        </div>-->
        <div class="clear"></div>
      </div>
      <slot name="bottom" />
    </main>
    <!-- <div class="page-right">
      <SidebarRight
        :items="sidebarItems"
        @toggle-sidebar="toggleSidebar"
        v-if="!$page.frontmatter.home"
        :class="addclass"
      >
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </SidebarRight>
    </div>-->
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
      addclass: "",
      needTags: false,
      CardName: [],
      title: "",
      keyword: "",
      topsearch: false,
    };
  },
  watch: {
    $route(newValue, oldValue) {
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
    setTimeout(() => {
      this.$nextTick(() => {
        this.$EventBus.$emit("pageHeight", this.$refs.Page.clientHeight);
      });
    }, 200);
    this.$EventBus.$on("topsearch", (res) => {
      this.topsearch = true;
    });
  },
  methods: {
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
              href: e,
            });
          });
          this.CardName = array;
        }
      }
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
@import url('//at.alicdn.com/t/font_1986404_olndtqc1n5q.css');

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

// .fixed {
// position: fixed;
// }
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
