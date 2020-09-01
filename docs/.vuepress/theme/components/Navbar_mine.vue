
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
            <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
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
            <i class="fa fa-bars"></i>
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
    };
  },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },
  mounted() {
    console.log(this.$themeLocaleConfig.algolia)
    console.log(this.$site.themeConfig.algolia)
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

<style lang="styl" scoped>
@import url(../styles/header_footer.styl);
</style>