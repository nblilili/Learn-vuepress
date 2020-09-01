
<template>
  <header class="site-header">
    <div class="container" style="background:#fff">
      <nav class="navbar">
        <a class="navbar-brand" href="/">
          <img src="../assets/image/juphoon cloud developer@2x.png" />
        </a>
        <div class="nav" :class="showNav?'active':''">
          <div class="nav-item" v-for="(item,index) in userLinks" :key="item.text">
            <!-- <a class="header-line this_line" :href="item.link" v-if="!item.items.length">{{item.text}}</a> -->
            <XRouter :to="{path:item.link}" v-if="!item.items.length">{{item.text}}</XRouter>
            <!-- <router-link :to="item.link" v-if="!item.items.length" >{{item.text}}</router-link> -->
            <div v-if="item.items.length" @click="changshowitem(item,index)">
              <a class="header-line this_line" :href="item.link" v-if="item.items.length">
                {{item.text}}
                <i
                  class="arrow iconfont"
                  :class="item.showitem?'icon-shangla':'icon-xiala'"
                ></i>
              </a>
              <div class="nav-child navChild dev" :style="{'display':item.showitem?'block':''}">
                <table>
                  <tr v-for="(items,index) in item.items" :key="items.text">
                    <td>
                      <a :href="items.link" target="_blank">
                        <div class="nav-tit">{{items.text}}</div>
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="nav-item search" v-if="!$page.frontmatter.home&& !$page.frontmatter.Search">
            <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
            <SearchBox
              v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"
            />
          </div>
          <div class="nav-item olddoc">
            <a class="header-line this_line" href="/olddoc">切换到老文档中心</a>
          </div>
          <div class="nav-btn" v-if="!user_type">
            <div class="nlogin">
              <a class="loginBtn" href="/signin">登录</a>
              <a class="regBtn" href="/signup">注册</a>
            </div>
          </div>
          <div class="nav-btn" v-if="user_type">
            <div class="more-item">
              <div class="more">
                <div style="float: right;">
                  <i class="layui-icon layui-icon-triangle-d"></i>
                </div>
                <div class="nicheng" title>{{UserInfo.user_name}}</div>
              </div>
              <div class="more-toggle">
                <div class="ylogin_1" v-if="user_type == 'manager'">
                  <a href="/portal/cn/// console/apps/admin_index.php">应用管理</a>
                  <a href="/portal/admin/info/account.php">系统管理</a>
                </div>
                <div class="ylogin_2" v-else-if="user_type != 'police'">
                  <a href="/cn/// console/">管理控制台</a>
                </div>
                <div class="yl_police" v-if="user_type == 'police'">
                  <a href="/portal/cn/// console/my_app/otoDetail.php">数据查询</a>
                </div>
                <a href="javascript:;" @click="log_out()">退出</a>
              </div>
            </div>
          </div>
        </div>
        <div class="headerIcon">
          <i
            class="iconfont"
            :class="showNav?'icon-quxiao':'icon-home_shousuo_h_icon'"
            @click="$EventBus.$emit('changeNav')"
          ></i>
        </div>
      </nav>
      <!-- <div class="searchBar">
          <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
          <SearchBox
            v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"
          />
      </div>-->
    </div>
  </header>
</template>

<script>
import axios from "axios";
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import XRouter from "@theme/components/XRouterLink";
import { resolveNavLinkItem } from "../util";
export default {
  name: "NavBar",
  components: {
    AlgoliaSearchBox,
    XRouter,
  },
  data() {
    return {
      site: [],
      UserInfo: {},
      user_type: false,
      switchList: [
        {
          text: "1.0",
          link: "/1.0",
        },
        {
          text: "2.0",
          link: "/2.0",
        },
      ],
      showNav: false,
    };
  },
  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },
    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
    nav() {
      const { locales } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || "Languages",
          ariaLabel: this.$themeLocaleConfig.ariaLabel || "Select language",
          items: Object.keys(locales).map((path) => {
            // console.log(path);
            const locale = locales[path];
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some((route) => route.path === link)) {
                link = path;
              }
            }
            let realylink =
              this.$site.base.substr(0, this.$site.base.length - 1) + link;
            // console.log({ text, link: realylink });
            return { text, link: realylink };
          }),
        };
        // console.log(languageDropdown);
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },
    userLinks() {
      return (this.nav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
    },
  },
  mounted() {
    // console.log(this.$site.base);
    // console.log(this.$lang);
    // console.log(this.$themeLocaleConfig);
    // console.log(this.userLinks);
    this.$EventBus.$on("changeNav", () => {
      this.showNav = !this.showNav;
    });
    let that = this;
    this.site = this.$site.themeConfig.nav;
    var user_type = localStorage.getItem("user_type");
    this.user_type = user_type;
    // console.log("user_type", user_type);
    // if (user_type) {
    axios({
      method: "POST",
      url: "/portal/cn/message/?c=PChoocesql&a=P_return_userinfo",
    })
      .then(function (response) {
        if (response.data.result) {
          that.UserInfo = response.data.info;
        }
      })
      .catch(function (error) {
        // console.log(error);
      });
    // }
  },
  methods: {
    changshowitem(item, index) {
      // item.showitem = !item.showitem;
      // // console.log(this.userLinks);
      // this.userLinks = JSON.parse(JSON.stringify(this.site));
      // // console.log(this.userLinks);
    },
    log_out() {
      var url = "/portal/cn/message/?a=ajax_login_out";
      let user_type = localStorage.getItem("user_type");
      if (user_type == "mail") {
        localStorage.removeItem("app_id");
      }
      axios({
        method: "POST",
        url: url,
      })
        .then(function (response) {
          // console.log(response);
          let data = response.data;
          if (data.message == 0) {
            localStorage.removeItem("newuser");
            localStorage.removeItem("login_time");
            localStorage.removeItem("msgData");
            localStorage.removeItem("msgIsread");
            localStorage.removeItem("user_type");
            localStorage.removeItem("role");
            localStorage.removeItem("auth");
            localStorage.removeItem("app_name");
            localStorage.removeItem("overview");
            window.location.href = "/";
          }
        })
        .catch(function (error) {
          // console.log(error);
        });
    },
  },
};
</script>

<style lang="stylus">
@import url('../styles/header_footer.styl');
// @import url('../assets/css/font/iconfont.css');
@import url('//at.alicdn.com/t/font_1986404_8fs7crvc73y.css');

.nav-item.search {
  margin: 10px;
  font-size: 16px;
  text-align: center;
  position: relative;
  float: left;
}

.searchBar {
  position: fixed;
}

.nav-item.links, .nav-item.olddoc {
  display: none !important;
}

@media (max-width: 800px) {
  .nav-item.search {
    display: none !important;
  }
}

@media (max-width: 1600px) {
  .nav-item.links, .nav-item.olddoc {
    display: none !important;
  }
}

.nav.active {
  display: block;
}

.search-box input {
  cursor: text;
  width: 10rem;
  height: 2rem;
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid #cfd4db;
  border-radius: 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background: #fff url('../assets/img/search.83621669.svg') 0.6rem 0.5rem no-repeat;
  background-size: 1rem;
}

$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;

  a, span, img {
    // display: inline-block;
  }

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: $textColor;
    position: relative;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    // background-color: white;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 1.5rem;
    }

    .site-name {
      width: calc(100vw - 9.4rem);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>