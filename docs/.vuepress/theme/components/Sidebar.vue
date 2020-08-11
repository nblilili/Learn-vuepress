<template>
  <div>
    <div class="backgrey" :style="{'display':isMenuShow?'block':'none'}" @click="MenuHide"></div>
    <div id="left" class="left" :class="scollpage" :style="{'display':isMenuShow?'block':'none'}">
      <!-- 头部跳转选择 -->

      <div id="left-top" class="left-top">
        <div class="left-top-title_1" @click="showmenu?showmenu=false:showmenu=true">
          <span class="title_name">菊风云平台</span>
          <i class="iconfont" :class="showmenu?'icon-shangla':'icon-xiala'"></i>
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
                <a :href="items.url">{{items.title}}</a>
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
    </div>
  </div>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";
import MenuList from "../../config/sidebarSelect.js";

export default {
  name: "Sidebar",
  components: { SidebarLinks, NavLinks },
  props: ["items", "scollpage", "isMenuShow"],
  data() {
    return {
      showmenu: false,
      menulist: MenuList,
    };
  },
  watch: {
    $route() {
      console.log(123);
      // console.log(this.innerWidth)
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
  mounted() {
    if(window.innerWidth < 800){
      this.$emit("MenuHide");
    }
    console.log(this.$themeConfig);
    window.addEventListener("resize", this.getWidth);
    this.getWidth();
    this.$EventBus.$on("changeMenu", (res) => {
      if(res){
        this.$emit("MenuShow");
      }else{
        this.$emit("MenuHide");
      }
    });
  },
  methods: {
    MenuHide() {
      this.$emit("MenuHide");
    },
    getWidth() {
      if (window.innerWidth > 800) {
        this.$EventBus.$emit("changeMenu", true);
      }else{
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
    }
  }
}

// .sidebar-group {
// li :first-child {
// margin: 20px 0 !important;
// }
// }

// li {
// margin: 20px 0;
// cursor: pointer;
// position: relative;
// font-size: 16px;
// font-weight: 400;
// color: #68758D;
// line-height: 24px;
// display: block;
// }
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
