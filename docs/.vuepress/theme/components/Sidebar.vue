<template>
  <div>
    <div class="backgrey" :style="{'display':isMenuShow?'block':'none'}" @click="MenuHide"></div>
    <div id="left" class="left" :class="scollpage" :style="{'display':isMenuShow?'block':'none'}">
      <!-- 头部跳转选择 -->
      <div id="left-top" class="left-top">
        <div
          class="left-top-title_1"
          tabindex="0"
          @click="showmenu?showmenu=false:showmenu=true"
          @blur="hidemenu()"
          style="overflow:hidden"
        >
          <!-- showmenu?showmenu=false:showmenu=true -->
          <span class="title_name">{{MenuName}}</span>
          <i
            class="iconfont"
            :class="showmenu?'icon-shangla':'icon-xiala'"
            style="position: absolute;top: 0;"
          ></i>
        </div>
        <div class="left-top-menu" v-show="showmenu">
          <div v-for="(item,index) in menulist" :key="item.title">
            <div class="left-top-title_2">{{item.title}}</div>
            <div class="left-top-title-menu">
              <div
                class="left-top-title_3"
                v-for="(items,index) in item.children"
                :key="items.title"
              >
                <XRouter :to="{path:items.url}">{{items.title}}</XRouter>
                <!-- <a :href="items.url">{{items.title}}</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 左侧导航 -->
      <div class="silder-dev">
        <slot name="top" />
        <SidebarLinks :depth="0" :items="items" />
        <slot name="bottom" />
      </div>
      <div class="left-line" v-if="needfriend"></div>
      <div
        id="left-about"
        class="left-about"
        style="margin-top: 9px;padding: 18px;"
        v-if="needfriend"
      >
        <div
          class="left-title left-title_1 abline"
          @click="showselect=!showselect"
          :class="showselect?'act':''"
        >
          相关链接
          <i class="iconfont" :class="showmenu?'icon-shangla':'icon-xiala'"></i>
          <div class="left-title-menu">
            <div class="left-title left-title_2">
              <a href="/cn/juphoon_platform/03_console_description/01_注册登录.html">控制台说明</a>
            </div>
            <div class="left-title left-title_2">
              <a href="/cn/juphoon_platform/04_TianSai_eagle_eyes/01_天塞鹰眼概览.html">天塞鹰眼</a>
            </div>
            <div class="left-title left-title_2">
              <a href="https://developer.juphoon.com/portal/cn/bbs/" target="_blank">技术支持社区</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";
import MenuList from "../../config/sidebarSelect.js";
import XRouter from "@theme/components/XRouterLink";

export default {
  name: "Sidebar",
  components: { SidebarLinks, NavLinks, XRouter },
  props: ["items", "scollpage", "isMenuShow"],
  data() {
    return {
      MenuName: "",
      showmenu: false,
      showselect: false,
      menulist: [],
      needfriend: false,
    };
  },
  watch: {
    $route(newValue, oldValue) {
      let sidebarSelect;
      this.needfriend = false;
      var url = this.$route.path;
      if (url.indexOf("/cn/") > -1)
        sidebarSelect = this.$themeConfig.locales["/cn/"].sidebarSelect;
      else if (url.indexOf("/en/" > -1))
        sidebarSelect = this.$themeConfig.locales["/en/"].sidebarSelect;
      this.menulist = sidebarSelect;
      this.setMenuList(sidebarSelect);
      if (window.innerWidth < 800) this.$emit("MenuHide");
      if (window.innerWidth < 800) {
        this.$emit("MenuHide");
      }
    },
    items(newValue, oldValue) {},
    scollpage(newValue, oldValue) {},
  },
  destroyed() {
    window.removeEventListener("resize", this.getWidth);
  },
  created() {
    let sidebarSelect;
    var url = this.$route.path;
    if (url.indexOf("/cn/") > -1) {
      sidebarSelect = this.$themeConfig.locales["/cn/"].sidebarSelect;
    } else if (url.indexOf("/en/" > -1)) {
      sidebarSelect = this.$themeConfig.locales["/en/"].sidebarSelect;
    }
    this.menulist = sidebarSelect;
    this.setMenuList(sidebarSelect);
  },
  mounted() {
    window.addEventListener("resize", this.getWidth);
    this.getWidth();
    this.$EventBus.$on("changeMenu", (res) => {
      if (res) this.$emit("MenuShow");
      else this.$emit("MenuHide");
    });
    if (window.innerWidth < 800) {
      this.$emit("MenuHide");
    }
  },
  methods: {
    hidemenu() {
      setTimeout(() => {
        this.showmenu = false;
      }, 300);
    },
    setMenuList(menulist) {
      let that = this;
      menulist.forEach((item) => {
        if (item.children) {
          setSildertitle(item.children);
        }
      });
      var url = this.$route.path;
      if (url.indexOf("/cn/") > -1) {
        needfriend(menulist[1].children);
      } else if (url.indexOf("/en/" > -1)) {
      }
      // });
      // if (menulist[1].children) {
      //   needfriend(menulist[1].children);
      // }
      function needfriend(data) {
        data.forEach((item) => {
          let this_url = item.url.substr(4);
          if (decodeURI(that.$route.path).indexOf(decodeURI(this_url)) > -1) {
            that.needfriend = true;
            return;
          }
        });
      }
      function setSildertitle(data) {
        data.forEach((item) => {
          let this_url = item.url.substr(4);
          if (decodeURI(that.$route.path).indexOf(decodeURI(this_url)) > -1) {
            that.MenuName = item.title;
            return;
          }
        });
      }
    },
    MenuHide() {
      this.$emit("MenuHide");
    },
    getWidth() {
      if (window.innerWidth > 800) {
        this.$EventBus.$emit("changeMenu", true);
      } else {
        this.$EventBus.$emit("changeMenu", false);
      }
    },
  },
};
</script>

<style lang="stylus">
@import url('../styles/document.styl');

.sidebar-sub-headers {
  display: none;
}

.silder-dev {
  ul {
    margin-top: 9px;
    padding: 18px;

    li {
      margin: 20px 0;
      cursor: pointer;
      position: relative;
      font-size: 16px;
      font-weight: 400;
      color: #68758D;
      line-height: 24px;
      display: block;

      ul {
        margin-top: 0px;
        padding: 0px;
      }
    }

    li :last-child {
      margin-bottom: 0;

      ul {
        margin-top: 0px;
        padding: 0px;

        li {
          padding: 0px;

          ul {
            margin-top: 0px;
            padding: 0px;

            li {
              display: none;
              padding: 0px;
            }
          }
        }
      }
    }
  }
}

.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  & > .sidebar-links {
    padding: 1.5rem 0;

    & > li > a.sidebar-link {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    .nav-links {
      display: block;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    & > .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
