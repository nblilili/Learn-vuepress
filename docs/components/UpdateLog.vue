<template>
  <div class="cont">
    <div class="mcont apicont demoexp">
      <!-- <div style="padding: 2.5rem 2.5rem 0px 2.5rem"> -->
      <div>
        <div class="mbtns">
          <a
            :class="type == item.type?'active':''"
            v-for="item in CardName"
            :key="item.name"
            href="javascript:void(0);"
            @click="changePlatformDev(item.type)"
          >{{item.name}}</a>
        </div>
        <div class="mbtns" style="width:85px;position: relative">
          <div>
            <div class="year" @click="Yearshow = !Yearshow">
              {{active.year}}
              <i data-v-4dc977d9 class="iconfont icon-xiala"></i>
            </div>
          </div>
          <dl class="layui-anim layui-anim-upbit" v-show="Yearshow">
            <dd
              :class="item == active.year?'active':''"
              v-for="item in YearList"
              :key="item"
              href="javascript:void(0);"
              @click="changeYearDev(item)"
            >{{item}}</dd>
          </dl>
        </div>
      </div>

      <div class="this-cont">
        <h2>{{ platform}} SDK 更新日志</h2>
        <p>{{ platform }} 版 云通讯 SDK 的更新日志和版本说明</p>
        <div class="log sdkc_info">
          <div class="scroll src_div" v-for="item in list" :key="item.id">
            <h3 class="src_tit" data-bind="text:name">{{item.name}}</h3>
            <div v-html="item.up"></div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DemoExp",
  data() {
    return {
      Yearshow: false,
      platform: "",
      i_list: [],
      a_list: [],
      w_list: [],
      m_list: [],
      c_list: [],
      All_P_Year: [], // 所有平台
      YearList: [],

      id_list: [],
      CardName: [
        { name: "iOS", type: 0 },
        { name: "Android", type: 1 },
        { name: "Windows C#", type: 2 },
        { name: "Windows C++", type: 4 },
        { name: "macOS", type: 3},
        // { name: "macOS", type: 3 },
        // { name: "Windows C++", type: 4 },
      ],
      list: [],
      type: "", // 平台类型
      active: {
        year: "2020",
      },
    };
  },
  methods: {
    clicka(item) {
      if (item.url) window.open(item.url, "_blank");
    },
  },
  mounted() {
    let year = this.$route.query.year;
    let platform = this.$route.query.platform;
    let type;
    if (platform == "ios") {
      type = 0;
      this.platform = "iOS";
    } else if (platform == "android") {
      type = 1;
      this.platform = "Android";
    } else if (platform == "twindows") {
      type = 2;
      this.platform = "Windows";
    } else if (platform == "mac") {
      type = 3;
      this.platform = "macOS";
    } else if (platform == "cpp") {
      type = 4;
      this.platform = "C++";
    } else {
      type = 0;
      this.platform = "iOS";
    }
    this.type = type;
    console.log(type)
    this.C_download_sdklist(type);
  },
  methods: {
    C_download_sdklist(type) {
      let that = this;
      let self = this;
      axios({
        method: "POST",
        url: "/portal/cn/message/?c=CDownload&a=C_download_sdklist",
        data: { type: 1 },
      })
        .then(function (response) {
          let data = response.data;
          console.log(data)
          var ios = data.data[0] ? data.data[0].list : "";
          var android = data.data[2] ? data.data[2].list : "";
          var twindows = data.data[1] ? data.data[1].list : "";
          var mac = data.data[3] ? data.data[3].list : "";
          var cpp = data.data[4] ? data.data[4].list : ""; //c++

          var arr = new Array(),
            vbrr = new Array();
          self.i_list = ios;
          self.a_list = android;
          self.w_list = twindows;
          self.m_list = mac;
          self.c_list = cpp;
          self.All_P_Year = {
            ios: Object.keys(ios).reverse(),
            android: Object.keys(android).reverse(),
            twindows: Object.keys(twindows).reverse(),
            mac: Object.keys(mac).reverse(),
            cpp: Object.keys(cpp).reverse(),
          };
          if (type == 0) arr = Object.keys(ios).reverse();
          else if (type == 1) arr = Object.keys(android).reverse();
          else if (type == 2) arr = Object.keys(twindows).reverse();
          else if (type == 3) arr = Object.keys(mac).reverse();
          else if (type == 4) arr = Object.keys(cpp).reverse();
          else arr = Object.keys(ios).reverse();
          that.YearList = arr;
          //   that.C_download_device_sdklist();
          changeYearDev(0, arr[0], type);
          function changeYearDev(index, data, type) {
            var list = [];
            var port = Boolean(window.location.port);
            var urla = port
              ? "https://developer.juphoon.com/portal/cn/downloadsdk/download_sdk.php?filename="
              : "/portal/cn/downloadsdk/download_sdk.php?filename=";
            if (type == 0) {
              list = self.i_list[data];
              var name = list[0].filename;
              var href = urla + name;
              for (var i = 0; i < list.length; i++) {
                list[i].name = "v" + list[i].version + "——" + list[i].utime;
              }
            } else if (type == 1) {
              list = self.a_list[data];
              var name = list[0].filename;
              var href = urla + name;
              for (var i = 0; i < list.length; i++) {
                list[i].name = "v" + list[i].version + "——" + list[i].utime;
              }
            } else if (type == 2) {
              list = self.w_list[data];
              var name = list[0].filename;
              var href = urla + name;
              for (var i = 0; i < list.length; i++) {
                list[i].name = "v" + list[i].version + "——" + list[i].utime;
              }
            } else if (type == 3) {
              list = self.m_list[data];
              var name = list[0].filename;
              var href = urla + name;
              for (var i = 0; i < list.length; i++) {
                list[i].name = "v" + list[i].version + "——" + list[i].utime;
              }
            } else if (type == 4) {
              list = self.c_list[data];
              var name = list[0].filename;
              var href = urla + name;
              for (var i = 0; i < list.length; i++) {
                list[i].name = "v" + list[i].version + "——" + list[i].utime;
              }
            }
            self.list = list;
            self.$EventBus.$emit("resetHeight", true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    changePlatformDev(type) {
      this.type = type;
      if (type == 0) {
        this.platform = "iOS";
        this.YearList = this.All_P_Year.ios;
      } else if (type == 1) {
        this.platform = "Android";
        this.YearList = this.All_P_Year.android;
      } else if (type == 2) {
        this.platform = "Windows";
        this.YearList = this.All_P_Year.twindows;
      } else if (type == 3) {
        this.platform = "macOS";
        this.YearList = this.All_P_Year.mac;
      } else if (type == 4) {
        this.platform = "C++";
        this.YearList = this.All_P_Year.cpp;
      } else {
        this.platform = "iOS";
        this.YearList = this.All_P_Year.ios;
      }
      this.changeYearDev(2020, "", type);
    },
    changeYearDev(index, data, type = this.type) {
      this.Yearshow = false;
      let that = this;
      let self = this;
      self.active.year = index;
      var list = [];
      var port = Boolean(window.location.port);
      if (type == 0) list = self.i_list[index];
      else list = self.a_list[index];

      var name = list[0].filename;
      var href = port
        ? "https://developer.juphoon.com/portal/cn/downloadsdk/download_device_sdk.php?filename=" +
          name +
          "&type=1"
        : "/portal/cn/downloadsdk/download_device_sdk.php?filename=" +
          name +
          "&type=1";
      self.dev_href = href;
      for (var i = 0; i < list.length; i++) {
        list[i].name = "v" + list[i].version + "——" + list[i].utime;
      }
      self.list = list;
      console.log(list);
      self.$EventBus.$emit("resetHeight", true);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import url('//at.alicdn.com/t/font_1986404_8fs7crvc73y.css');

.cont {
  margin: 0 !important;
}

.demoexp .web div {
  width: 150px;
  height: 150px;
  position: absolute;
  left: -20px;
  bottom: 19px;
  display: none;
}

/* .experience .web img,
.demoexp .web img {
  width: 100%;
  height: 100%;
  position: relative;
  left: -20px;
  bottom: 0px;
  display: block;
} */
.col-sm-6 {
  float: left;
}

.sdkbtn:before {
  text-decoration: none;
}

.year {
  cursor: pointer;
  width: 85px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: none;
  font-size: 15px;
  padding-left: 10px;
}

.mbtns dl {
  border-radius: 4px;
  position: absolute;
  left: 0;
  top: 42px;
  padding: 5px 0;
  z-index: 899;
  min-width: 100%;
  border: 1px solid #d2d2d2;
  max-height: 300px;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
}

.mbtns dl dd {
  margin-bottom:0;
  cursor: pointer;
}

.mbtns dl dd, .mbtns dl dt {
  padding: 0 10px;
  line-height: 36px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

dl .active {
  color: #008AFF;
}

@media (min-width: 800px) {
  .col-sm-6 {
    width: 100%;
  }
}
</style>