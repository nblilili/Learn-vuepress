<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- <vueToTop :type="14" :size="60" :bottom="0" :right="30">1111</vueToTop> -->
    <div class="toTop" v-show="showIcon" style="z-index:999" @click="clicktop()">
      <img src="https://developer.juphoon.com/style/images/zd@2x.png" />
    </div>
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)" />
    <Home v-if="$page.frontmatter.home||$page.frontmatter.Search" />
    <div v-else class="all">
      <!-- 左侧 -->
      <Sidebar
        :isMenuShow="isMenuShow"
        :items="sidebarItems"
        @toggle-sidebar="toggleSidebar"
        @MenuHide="MenuHide"
        @MenuShow="MenuShow"
        v-if="!$page.frontmatter.home"
        :scollpage="scollpage"
      >
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>

      <!-- <Home v-if="$page.frontmatter.home" /> -->
      <!-- <Tags v-else-if="tags" /> -->
      <!-- 主页 -->
      <Page
        ref="Page"
        :sidebar-items="sidebarItems"
        :toggleSidebar="toggleSidebar"
        @addclass="addclass"
        @clickmenu="clickmenu"
      >
        <template #top>
          <slot name="page-top" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
      <div
        class="page-right"
        :style="{height:setright?rightheight:'calc(100vh - 60px)'}"
        ref="pageRight"
        v-if="!$page.frontmatter.home"
      >
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
      </div>
    </div>
  </div>
</template>


<script>
// var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@1.3.1";

// !(function (e, a, t, n, s, i, c) {
//   (e.AlgoliaAnalyticsObject = s),
//     (e[s] =
//       e[s] ||
//       function () {
//         (e[s].queue = e[s].queue || []).push(arguments);
//       }),
//     (i = a.createElement(t)),
//     (c = a.getElementsByTagName(t)[0]),
//     (i.async = 1),
//     (i.src = n),
//     c.parentNode.insertBefore(i, c);
// })(window, document, "script", ALGOLIA_INSIGHTS_SRC, "aa");

// // Initialize library
// aa("init", {
//   appId: "BF4RDO0EYD",
//   apiKey: "d02d64058b08646fc04cf361671ec59c",
// });
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import SidebarRight from "@theme/components/SidebarRight.vue";

// import Tags from "@theme/components/Tags.vue";
import { mapState } from "vuex";
import { resolveSidebarItems } from "../util";

export default {
  name: "Layout",

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    SidebarRight,
    // Tags
  },

  data() {
    return {
      istop: false,
      showIcon: false,
      scrollTop: 0,
      isSidebarOpen: false,
      scollpage: "", // 用于判断滚动
      tags: false,
      isMenuShow: true,
      setright: false,
      rightheight: "",


      defaultTop: 400,
      defaultDuration: 300
    };
  },
  created() {
    // this.checkTags();
  },
  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    console.log(this.$page.frontmatter);
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
    this.$EventBus.$on("pageHeight", (res) => {
      if (res + 60 < window.document.body.offsetHeight) {
        this.setright = true;
        this.rightheight = res + "px";
      } else this.setright = false;
    });
    window.addEventListener("scroll", this.handleScrollx, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScrollx, false);
  },
  methods: {
    handleScrollx() {
      // if (window.pageYOffset > 100) this.istop = false;
      // else this.istop = true;
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      console.log(this.scrollTop);
      this.scrollTop > this.defaultTop
        ? (this.showIcon = true)
        : (this.showIcon = false);
    },
    clicktop() {
      console.log(1);
      // this.istop = true;
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
      window.requestAnimationFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();
      var step = (this.scrollTop / (this.defaultDuration / (1000 / 60))) >> 0;
      var self = this;
      function fn() {
        if (self.scrollTop >= 0) {
          self.scrollTop -= step;
          document.documentElement.scrollTop = document.body.scrollTop =
            self.scrollTop;
          fn.rafTimer = requestAnimationFrame(fn);
        } else {
          document.body.scrollTop = 0;
          cancelAnimationFrame(fn.rafTimer);
        }
      }
      fn.rafTimer = requestAnimationFrame(fn);
    },
    clickmenu() {
      console.log(123123);
      console.log(this.$store.state);
      console.log("mapState", mapState);
      this.isMenuShow = true;
    },
    MenuShow() {
      this.isMenuShow = true;
    },
    MenuHide() {
      this.isMenuShow = false;
      this.$EventBus.$emit("topsearch", false);
    },

    checkTags() {
      let path = this.$route.path;
      let tags = this.$site.themeConfig.nav.filter((v) => v.tags); //判断tags
      console.log(tags);
      if (tags[0].link === path) {
        this.tags = true;
        this.$page.frontmatter.sidebar = false; //tags不需要侧标栏
      } else {
        this.tags = false;
      }
      //判断是否是分类页面
      let type = this.$page.frontmatter.type;

      if (type === "classify") {
        this.type = "classify";
        this.$page.frontmatter.sidebar = false; //tags不需要侧标栏
      } else {
        this.type = "";
      }
      if (this.$page.frontmatter.defaultHome) {
        this.$page.frontmatter.sidebar = false; //主页不需要侧标栏
      }
    },
    addclass(e) {
      console.log(e);
      this.scollpage = e;
    },
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>

<style lang="stylus">
.icon-fanhuidingbu4:before {
  color: transparent;
  background: url('https://developer.juphoon.com/style/images/zd@2x.png');
  background-size: 60px 60px;
}

.page-right {
  overflow-x: hidden;
  background: #fff;
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

@media (max-width: 800px) {
  .page-right {
    display: none;
  }
}
</style>
