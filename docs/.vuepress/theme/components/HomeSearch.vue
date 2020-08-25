<template>
  <div>
    <div class="all">
      <div class="top_content">
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
              <span data-bind="click:function(){keySearch('语音直播')}">语音直播</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span data-bind="click:function(){keySearch('视频直播')}">视频直播</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span data-bind="click:function(){keySearch('一对一语音')}">一对一语音</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span data-bind="click:function(){keySearch('多方视频')}">多方视频</span>
            </p>
          </div>
        </div>
      </div>
      <div class="pcont" data-bind="visible:isShow()[0]">
        <div class="part part_one">
          <h2>平台</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="pt-img">
                <img src="/style/images/home/developer_pt@2x.png" />
              </div>
              <div class="pt-cont">
                <h3>菊风云平台</h3>
                <div class="pt-mark">
                  <div class="pt-item">
                    <a href="/cn/document/index.php">
                      平台概述
                      <i></i>
                    </a>
                  </div>
                  <div class="pt-item">
                    <a href="/cn/document/key-terms.php">
                      关键术语
                      <i></i>
                    </a>
                  </div>
                  <div class="pt-item">
                    <a href="/cn/document/create-application.php">
                      创建应用
                      <i></i>
                    </a>
                  </div>
                  <div class="pt-item">
                    <a href="/cn/document/portal.php">
                      Portal 说明
                      <i></i>
                    </a>
                  </div>
                  <div class="pt-item">
                    <a href="/cn/document/qualities.php">
                      天塞鹰眼
                      <i></i>
                    </a>
                  </div>
                  <div class="pt-item">
                    <a href="/cn/download/">
                      下载
                      <i></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="part part_two">
          <h2>产品</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="in-item">
                <div class="pt-img">
                  <img src="/style/images/home/developer_1to1 voicecall @2x.png" />
                </div>
                <div class="pt-cont">
                  <h3>
                    <a href="/cn/document/oto_audio/">一对一语音通话</a>
                  </h3>
                  <div class="pt-info">
                    <div>适用场景</div>
                    <div class="ptc-cont">
                      <div>
                        <i></i>私人语聊房
                      </div>
                      <div>
                        <i></i>国际通话
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="in-item">
                <div class="pt-img">
                  <img src="/style/images/home/developer_1to1 videocall @2x.png" />
                </div>
                <div class="pt-cont">
                  <h3>
                    <a href="/cn/document/oto_video/">一对一视频通话</a>
                  </h3>
                  <div class="pt-info">
                    <div class="pt-iother">适用场景</div>
                    <div class="pt-icont ptc-cont">
                      <div>
                        <i></i>一对一视频
                      </div>
                      <div>
                        <i></i>随机匹配视频
                      </div>
                      <div>
                        <i></i>视频监控
                      </div>
                      <div class="clear"></div>
                      <div>
                        <i></i>私教一对一
                      </div>
                      <div>
                        <i></i>智能终端通话
                      </div>
                      <div>
                        <i></i>视频客服
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="in-item">
                <div class="pt-img">
                  <img src="/style/images/home/developer_multi-point voicecall @2x.png" />
                </div>
                <div class="pt-cont">
                  <h3>
                    <a href="/cn/document/mult_audio/">多方语音通话</a>
                  </h3>
                  <div class="pt-info">
                    <div>适用场景</div>
                    <div class="ptc-cont">
                      <div>
                        <i></i>连麦 PK
                      </div>
                      <div>
                        <i></i>多人语聊房
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="in-item">
                <div class="pt-img">
                  <img src="/style/images/home/developer_multi-point videocall @2x.png" />
                </div>
                <div class="pt-cont">
                  <h3>
                    <a href="/cn/document/mult_video/">多方视频通话</a>
                  </h3>
                  <div class="pt-info">
                    <div>适用场景</div>
                    <div class="ptc-cont">
                      <div>
                        <i></i>娱乐直播
                      </div>
                      <div>
                        <i></i>直播课堂
                      </div>
                      <div>
                        <i></i>视频会议
                      </div>
                      <div>
                        <i></i>连麦 PK
                      </div>
                      <div>
                        <i></i>电商导购
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="in-item">
                <div class="pt-img">
                  <img src="/style/images/home/developer_voicelive@2x.png" />
                </div>
                <div class="pt-cont">
                  <h3>
                    <a href="/cn/document/audio_live/">语音互动直播</a>
                  </h3>
                  <div class="pt-info">
                    <div>适用场景</div>
                    <div class="ptc-cont">
                      <div>
                        <i></i>语音直播
                      </div>
                      <div>
                        <i></i>游戏语音
                      </div>
                      <div>
                        <i></i>线上 KTV
                      </div>
                      <div>
                        <i></i>语音聊天室
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="in-item">
                <div class="pt-img">
                  <img src="/style/images/home/developer_videolive@2x.png" />
                </div>
                <div class="pt-cont">
                  <h3>
                    <a href="/cn/document/video_live/">视频互动直播</a>
                  </h3>
                  <div class="pt-info">
                    <div>适用场景</div>
                    <div class="ptc-cont">
                      <div>
                        <i></i>娱乐社交
                      </div>
                      <div>
                        <i></i>直播课堂
                      </div>
                      <div>
                        <i></i>会议直播
                      </div>
                      <div>
                        <i></i>新闻媒体
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="part part_three">
          <h2>扩展功能</h2>
          <div class="part-cont">
            <div class="inner-cont">
              <div class="col-sm-3 in-cont">
                <a href="/cn/document/webrtc/">
                  <img src="/style/images/home/developer_WebRTC@2x.png" />
                  <div class="tit">WebRTC</div>
                </a>
              </div>
              <div class="col-sm-3 in-cont">
                <a href="/cn/document/server_rec/">
                  <img src="/style/images/home/developer_rec@2x.png" />
                  <div class="tit">服务器录制</div>
                </a>
              </div>
              <div class="col-sm-3 in-cont">
                <a href="/cn/document/screen_share/">
                  <img src="/style/images/home/developer_screen sharing@2x.png" />
                  <div class="tit">屏幕共享</div>
                </a>
              </div>
              <div class="col-sm-3 in-cont">
                <a href="/cn/document/cdn/">
                  <img src="/style/images/home/developer_CDN@2x.png" />
                  <div class="tit">CDN 推流</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="part part_four">
          <div class="part-cont">
            <img src="/style/images/home/developer_experience@2x.png" />
            <p>遇到问题，您还可以选择</p>
            <a class="button" href="/portal/cn/bbs/">社区发帖</a>
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
      <div class="pcont secondp" style="display: none;" data-bind="visible:isShow()[1]">
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
          <img src="/style/images/zd@2x.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@require '../styles/HomeSearch.styl';
.all {
  min-width: 100%;
}
</style>