<template>
  <div>
    <div class="all">
      <div class="top_content" style="width:100%">
        <div class="bac">
          <img src="https://developer.juphoon.com/style/images/home/developer_bg@2x.png" />
          <div class="bactxt">
            <h1>开发者中心</h1>
            <div class="bacsearch">
              <input class="form-control bacinp" data-bind="value:key,search_c:c_key" />
              <i class="bsearchBtn" data-bind="search_c:c_key"></i>
            </div>
            <p>
              搜索关键词：
              <span
                data-bind="click:function(){keySearch('语音直播')}"
                @click="keySearch('语音直播')"
              >语音直播</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                data-bind="click:function(){keySearch('视频直播')}"
                @click="keySearch('视频直播')"
              >视频直播</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                data-bind="click:function(){keySearch('一对一语音')}"
                @click="keySearch('一对一语音')"
              >一对一语音</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                data-bind="click:function(){keySearch('多方视频')}"
                @click="keySearch('多方视频')"
              >多方视频</span>
            </p>
          </div>
        </div>
      </div>
      <div class="pcont" data-bind="visible:isShow()[0]">
        <!-- 平台部分 -->
        <div class="part part_one">
          <h2>平台</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="pt-img">
                <img src="https://developer.juphoon.com/style/images/home/developer_pt@2x.png" />
              </div>
              <div class="pt-cont">
                <h3>菊风云平台</h3>
                <div class="pt-mark">
                  <div class="pt-item" v-for="item1 in first_data" :key="item1.title">
                    <a :href="item1.url">
                      {{item1.title}}
                      <i></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 产品部分 -->
        <div class="part part_two">
          <h2>产品</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="in-item" v-for="item2 in second_data" :key="item2.title">
                <div class="pt-img">
                  <img :src="item2.img" />
                </div>
                <div class="pt-cont">
                  <h3>
                    <a :href="item2.url">{{item2.title}}</a>
                  </h3>
                  <div class="pt-info" v-for="item3 in item2.children" :key="item3.title">
                    <div>{{item3.title}}</div>
                    <div class="ptc-cont">
                      <div v-for="item4 in item3.children" :key="item4.title">
                        <i></i>
                        {{item4.title}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 扩展功能 -->
        <div class="part part_three">
          <h2>扩展功能</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="col-sm-3 in-cont" v-for="item_3 in third_data" :key="item_3.title">
                <a :href="item_3.url">
                  <img :src="item_3.img" />
                  <div class="tit">{{item_3.title}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 遇到问题，您还可以选择 -->
        <div class="part part_four">
          <div class="part-cont">
            <img src="https://developer.juphoon.com/style/images/home/developer_experience@2x.png" />
            <p>遇到问题，您还可以选择</p>
            <a class="button" href="https://developer.juphoon.com/portal/cn/bbs/">社区发帖</a>
            <a
              class="contactline"
              href="http://wpa.qq.com/msgrd?v=3&amp;uin=2703650800&amp;site=qq&amp;menu=yes"
              target="_blank"
            >
              联系客服
              <i></i>
            </a>
          </div>
        </div>
      </div>
      <div class="pcont secondp" style="display: block;" data-bind="visible:isShow()[1]">
        <div class="top_search">
          <div class="search_div">
            <input class="form-control bacinp" data-bind="value:key,search_c:c_key" />
            <i class="bsearchBtn" data-bind="search_c:c_key"></i>
          </div>
        </div>
        <div class="spcont">
          <div
            class="group group_one"
            data-bind="visible:(product_list().length>0 || platform_list().length>0 || classify_list().length>0)"
            style
          >
            <div class="part-cont sp-cont">
              <div class="inner-cont">
                <div class="gitem" data-bind="visible:product_list().length>0" style>
                  <span>产品</span>
                  <div class="gi-cont proCont">
                    <!--ko foreach:{data:product_list}-->
                    <span
                      class="gi-item active"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),0)}"
                    >所有</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),0)}"
                    >一对一语音通话</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),0)}"
                    >一对一视频通话</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),0)}"
                    >多方语音通话</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),0)}"
                    >多方视频通话</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),0)}"
                    >语音互动直播</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),0)}"
                    >视频互动直播</span>
                    <!-- /ko -->
                  </div>
                </div>
                <div class="gitem" data-bind="visible:platform_list().length>0" style>
                  <span>平台</span>
                  <div class="gi-cont plaCont">
                    <!--ko foreach:{data:platform_list}-->
                    <span
                      class="gi-item active"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),1)}"
                    >所有</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),1)}"
                    >iOS</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),1)}"
                    >Android</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),1)}"
                    >Windows</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),1)}"
                    >macOS</span>
                    <!-- /ko -->
                  </div>
                </div>
                <div class="gitem" data-bind="visible:classify_list().length>0" style>
                  <span>分类</span>
                  <div class="gi-cont claCont">
                    <!--ko foreach:{data:classify_list}-->
                    <span
                      class="gi-item active"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),2)}"
                    >所有</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),2)}"
                    >平台文档</span>

                    <span
                      class="gi-item"
                      data-bind="text:cname,click:function(){$parent.changeChoose(ename,$index(),2)}"
                    >FAQ</span>
                    <!-- /ko -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group group_two">
            <div class="gcont">
              <!--ko foreach:{data:search_list}-->
              <!-- /ko -->
            </div>
            <div class="search-prompt" data-bind="visible:visible" style="display: none;">
              <div class="title" style="font-size:16px;font-weight:bold">暂无数据</div>
            </div>
            <div id="pages" class="pages"></div>
          </div>
        </div>
        <div class="toTop" style="display: block;">
          <img src="https://developer.juphoon.com/style/images/zd@2x.png" />
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>

<script>
import HomeFooter from "./HomeFooter.vue";
import {
  first_pcont,
  second_pcont,
  third_pcont,
  forth_pcont,
} from "./HomeSearch/config.js";
export default {
  components: { HomeFooter },
  data() {
    return {
      first_data: first_pcont,
      second_data: second_pcont,
      third_data: third_pcont,
      forth_data: forth_pcont,
    };
  },
  mounted() {
    console.log(third_pcont);
  },
  methods: {
    keySearch(str) {
      console.log("str=>", str);
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../.vuepress/theme/styles/HomeSearch.styl';
@require '../.vuepress/theme/styles/header_footer.styl';

blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.all {
  min-width: 100%;
  width: 100%;
  display: block;
}

#footer {
  margin-top: 0px;
}

.footer-other ul {
  padding: 0;
  margin: 0 auto;
}

#footer li {
  float: none;
}

@media (min-width: 800px) {
  .col-sm-3 {
    float: left;
    width: 25%;
  }
}
</style>