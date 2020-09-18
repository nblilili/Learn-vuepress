
<template>
  <header class="site-header" v-if="!$page.frontmatter.home">
    <div
      class="container"
      style="background:#fff"
      :class="!$page.frontmatter.home&& !$page.frontmatter.Search?'':'index'"
    >
      <nav class="navbar" :class="$lang =='cn'?'cn':'en'">
        <a class="navbar-brand" :href="`/${$lang}`" style="z-index:999;height:60px">
          <img src="../assets/image/logo_cn.png" v-if="$lang=='cn'"  style="vertical-align: bottom;" />
          <img src="../assets/image/logo_en.png" v-else style="vertical-align: bottom;width:202px" />
        </a>
        <!-- <XRouter  class="navbar-brand" :to="{path:`/${$lang}`}" style="z-index:999">
          <img src="../assets/image/juphoon cloud developer@2x.png" v-if="$lang=='cn'" />
          <img src="../assets/image/2@2x.png" v-else style="height:45px;width:auto" />
        </XRouter>-->
        <div class="nav" :class="showNav?'active':''">
          <div class="nav-item languages">
            <a class="header-line" href="javascript:;">
              <div class="langchange" @click="showlang = !showlang">
                {{langlist.text}}
                <i class="iconfont icon-xiala"></i>
              </div>
            </a>
            <div class="nav-child languagecont" :style="{display:showlang?'block':''}">
              <table>
                <tr v-for="item_lang in langlist.items" :key="item_lang.text">
                  <td>
                    <XRouter :to="{path:item_lang.link}">
                      <div class="nav-tit">{{item_lang.text}}</div>
                    </XRouter>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="nav-cont">
            <div class="nav-item" v-for="(item,index) in re_userLinks" :key="item.text">
              <XRouter :to="{path:item.link}" v-if="!item.items.length">{{item.text}}</XRouter>
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
                        <XRouter :to="{path:items.link}">
                          <div class="nav-tit">{{items.text}}</div>
                        </XRouter>
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
          </div>

          <!-- <div class="nav-item olddoc">
            <a class="header-line this_line" href="/olddoc">切换到老文档中心</a>
          </div> -->
          <div class="nav-btn" v-if="!user_type">
            <div class="nlogin">
              <a
                class="loginBtn"
                :href="$lang=='cn'?'/signin':'/en/signin'"
                v-text="$lang=='cn'?'登录':'Log in'"
              ></a>
              <a
                class="regBtn"
                :href="$lang=='cn'?'/signup':'/en/signup'"
                v-text="$lang=='cn'?'注册':'Sign up'"
              ></a>
            </div>
          </div>
          <!-- v-if="user_type" -->
          <div class="nav-btn" v-if="user_type">
            <div class="more-item">
              <div class="more">
                <div style="float: right;">
                  <i class="iconfont icon-xiala"></i>
                </div>
                <div class="nicheng" title>{{UserInfo.user_name}}</div>
              </div>
              <div class="more-toggle">
                <div class="ylogin_1" v-if="user_type == 'manager'">
                  <a href="/portal/cn/console/apps/admin_index.php">应用管理</a>
                  <a href="/portal/admin/info/account.php">系统管理</a>
                </div>
                <div class="ylogin_2" v-else-if="user_type != 'police'">
                  <a href="/cn/console/">管理控制台</a>
                </div>
                <div class="yl_police" v-if="user_type == 'police'">
                  <a href="/portal/cn/console/my_app/otoDetail.php">数据查询</a>
                </div>
                <a href="javascript:;" @click="log_out()" v-text="$lang=='cn'?'退出':'Log out'"></a>
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
      showlang: false,
      showNav: false,
      re_userLinks: [],
      langlist: "",
    };
  },
  watch: {
    // userLinks(newValue, oldValue) {
    //   this.re_userLinks = newValue;
    // },
    $route(newValue, oldValue) {
      if (window.innerWidth < 800) {
        this.showNav = false;
      }
      this.re_userLinks = (this.nav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
      // let that = this;
      // this.langlist = {
      //   text: that.$lang == "cn" ? "中文" : "EN",
      //   ariaLabel: "Select language",
      //   items: [
      //     { text: "中文", link: "/cn" + that.$route.path.substring(3) },
      //     { text: "EN", link: "/en" + that.$route.path.substring(3) },
      //   ],
      // };
      this.changelangselect();
    },
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
      let that = this;
      const { locales } = this.$site;
      // if (locales && Object.keys(locales).length > 1) {
      //   const currentLink = this.$page.path;
      //   const routes = this.$router.options.routes;
      //   const themeLocales = this.$site.themeConfig.locales || {};
      //   // let langlist = {
      //   //   text: that.$lang == "cn" ? "选择语言" : "Languages",
      //   //   ariaLabel: "Select language",
      //   //   items: [
      //   //     { text: "简体中文", link: "/cn/" + that.$route.path.substring(3) },
      //   //     { text: "English", link: "/en/" + that.$route.path.substring(3) },
      //   //   ],
      //   // };
      //   return [...this.userNav];
      //   // return [...this.userNav, langlist];
      // }
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
  created() {
    let that = this;
    this.re_userLinks = (this.nav || []).map((link) => {
      return Object.assign(resolveNavLinkItem(link), {
        items: (link.items || []).map(resolveNavLinkItem),
      });
    });
    this.changelangselect();
    // console.log(this.langlist);
  },
  mounted() {
    this.$EventBus.$on("changeNav", () => {
      this.showNav = !this.showNav;
    });
    let that = this;
    this.site = this.$site.themeConfig.nav;
    var user_type = localStorage.getItem("user_type");
    this.user_type = user_type;
    axios({
      method: "POST",
      url: "/portal/cn/message/?c=PChoocesql&a=P_return_userinfo",
    })
      .then(function (response) {
        if (response.data.result) {
          that.UserInfo = response.data.info;
          if (!response.data.info.user_name) {
            that.user_type = false;
          }
        }
      })
      .catch(function (error) {
        // console.log(error);
      });
  },
  methods: {
    changelangselect() {
      let that = this;
      let noneStr = that.$route.path.substring(3);
      let items;
      if (
        noneStr.indexOf("/juphoon_platform/") > -1 ||
        noneStr.indexOf("/WebRTC/") > -1 ||
        noneStr.indexOf("/server_recording/") > -1 ||
        noneStr.indexOf("/screen_share/") > -1 ||
        noneStr.indexOf("/CDN_push/") > -1
      ) {
        items = [
          { text: "中文", link: "/cn" + that.$route.path.substring(3) },
          { text: "EN", link: "/en/" },
        ];
      } else {
        items = [
          { text: "中文", link: "/cn" + that.$route.path.substring(3) },
          { text: "EN", link: "/en" + that.$route.path.substring(3) },
        ];
      }
      this.langlist = {
        text: that.$lang == "cn" ? "中文" : "EN",
        ariaLabel: "Select language",
        items: items,
      };
    },
    languageDropdown() {
      let languageDropdown = {
        text: this.$themeLocaleConfig.selectText || "Languages",
        ariaLabel: this.$themeLocaleConfig.ariaLabel || "Select language",
        items: Object.keys(locales).map((path) => {
          const locale = locales[path];
          const text =
            (themeLocales[path] && themeLocales[path].label) || locale.lang;
          let link;
          if (locale.lang === this.$lang) {
            link = currentLink;
          } else {
            link = currentLink.replace(this.$localeConfig.path, path);
            // fallback to homepage
            if (!routes.some((route) => route.path === link)) {
              link = path;
            }
          }
          let realylink =
            this.$site.base.substr(0, this.$site.base.length - 1) + link;
          return { text, link: realylink };
        }),
      };
      return languageDropdown;
    },
    changshowitem(item, index) {
      item.showitem = !item.showitem;
      console.log(JSON.parse(JSON.stringify(this.re_userLinks)));
      this.re_userLinks = JSON.parse(JSON.stringify(this.re_userLinks));
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

<style lang="stylus" scoped>
@import url('../styles/header_footer.styl');
@import url('//at.alicdn.com/t/font_1986404_8fs7crvc73y.css');

.nav-item.languages {
  position: absolute;
}

.en .nav .languages {
  left: 200px;
}

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

  .nav-item.languages {
    position: relative;
    width: 100%;
  }

  .en .nav .languages {
    left: 0px;
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