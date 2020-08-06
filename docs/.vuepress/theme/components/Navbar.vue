
<template>
  <div>
    <header class="site-header">
      <div class="container">
        <nav class="navbar">
          <a class="navbar-brand" href="/">
            <img src="../assets/image/juphoon cloud developer@2x.png" />
          </a>
          <div class="nav">
            <div class="nav-item" v-for="(item,index) in site" :key="item.text">
              <a class="header-line this_line" :href="item.link" v-if="!item.items">{{item.text}}</a>
              <div v-if="item.items">
                <a class="header-line this_line" :href="item.link" v-if="item.items">
                  {{item.text}}
                  <i class="arrow fa fa-angle-down"></i>
                </a>
                <div class="nav-child navChild dev">
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
            <div
              class="links"
              style="margin: 0 20px;
              font-size: 16px;
              text-align: center;
              position: relative;
              float: left;"
            >
              <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
              <SearchBox
                v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"
              />
            </div>
            <div class="nav-item">
              <!-- <a class="header-line this_line" href="/olddoc">切换到老文档中心</a> -->
              <div>
                <a class="header-line this_line">
                  切换到老文档中心
                  <i class="arrow fa fa-angle-down"></i>
                </a>
                <div class="nav-child navChild dev">
                  <table>
                    <tr v-for="(item2,index) in switchList" :key="item2.text">
                      <td>
                        <a :href="item2.link" target="_blank">
                          <div class="nav-tit">{{item2.text}}</div>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="nav-btn" v-if="!user_type">
              <div class="nlogin">
                <a class="loginBtn" href="/signin">登录</a>
                <a class="regBtn" href="/signup">注册</a>
              </div>
            </div>
          </div>
          <div class="nav-btn" v-if="user_type">
            <div class="more-item">
              <div class="more">
                <div style="float: right;">
                  <i class="layui-icon layui-icon-triangle-d"></i>
                </div>
                <div class="nicheng" title>{{UserInfo.company}}</div>
              </div>
              <div class="more-toggle">
                <div class="ylogin_1" v-if="user_type == 'manager'">
                  <a href="/portal/cn/console/apps/admin_index.php">应用管理</a>
                  <a href="/portal/admin/info/account.php">系统管理</a>
                </div>
                <div class="ylogin_2" v-if="user_type != 'police'">
                  <a href="/cn/console/">管理控制台</a>
                </div>
                <div class="yl_police" v-if="user_type == 'police'">
                  <a href="/portal/cn/console/my_app/otoDetail.php">数据查询</a>
                </div>
                <a href="javascript:;" onclick="log_out()">退出</a>
              </div>
            </div>
          </div>
          <div class="headerIcon">
            <i class="iconfont icon-home_shousuo_h_icon"></i>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
import AlgoliaSearchBox from "@AlgoliaSearchBox";
export default {
  name: "NavBar",
  components: {
    AlgoliaSearchBox,
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

      // linksWrapMaxWidth:null
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
  },
  mounted() {
    // const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    // const NAVBAR_VERTICAL_PADDING =
    //   parseInt(css(this.$el, "paddingLeft")) +
    //   parseInt(css(this.$el, "paddingRight"));
    // const handleLinksWrapWidth = () => {
    //   if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
    //     this.linksWrapMaxWidth = null;
    //   } else {
    //     this.linksWrapMaxWidth =
    //       this.$el.offsetWidth -
    //       NAVBAR_VERTICAL_PADDING -
    //       ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
    //   }
    // };
    // handleLinksWrapWidth();
    // window.addEventListener("resize", handleLinksWrapWidth, false);

    console.log(this.$themeLocaleConfig.algolia);
    console.log(this.$site.themeConfig.algolia);
    let that = this;
    this.site = this.$site.themeConfig.nav;
    var user_type = localStorage.getItem("user_type");
    this.user_type = user_type;
    console.log("user_type", user_type);
    if (user_type) {
      axios({
        method: "POST",
        url: "/portal/cn/message/?c=POverview&a=getUserInfo",
      })
        .then(function (response) {
          console.log(response);
          if (response.data.result) {
            console.log(response.data.data);
            that.UserInfo = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  methods: {
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
          console.log(response);
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
          console.log(error);
        });
    },
  },
};
</script>

<style lang="stylus">
@import url('../styles/header_footer.styl');
@import url('../assets/css/font/iconfont.css');

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