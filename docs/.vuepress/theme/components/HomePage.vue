<template>
  <div class="pagination" style="width:100%">
    <div v-if="!small" class="total">
      <span v-text="$lang=='cn'?'一共':'Total'"></span>
      <span style="color:#008AFF;">{{totalCount}}</span>
      <span v-text="$lang=='cn'?'条数据':'Results'"></span>
      <!--  第{{currentPage}}/{{totalPage}}页-->
    </div>
    <div class="paging">
      <span
        class="prev"
        :class="{'disabled':currentPage<=1}"
        :style="{cursor: currentPage<=1?'not-allowed!important':'pointer'}"
        @click="currentPage<=1?'':turn(currentPage-1)"
      >
        <i class="iconfont icon-jiantou-zuo"></i>
      </span>
      <span
        v-for="i in showPageBtn"
        class="num"
        :class="{'active':i==currentPage}"
        v-if="i>0"
        @click="turn(i)"
      >{{i}}</span>
      <span
        v-else-if="i==='-'"
        class="num iconfont icon-more"
        :class="{'icon-d-arrow-left':toPrev}"
        @mouseenter="toPrev=true"
        @mouseleave="toPrev=false"
      ></span>
      <span
        v-else-if="i==='+'"
        class="num iconfont icon-more"
        :class="{'icon-d-arrow-right':toNext}"
        @mouseenter="toNext=true"
        @mouseleave="toNext=false"
      ></span>
      <span
        class="next"
        :class="{'disabled':currentPage>=totalPage}"
        :style="{cursor: currentPage>=totalPage?'not-allowed!important':'pointer'}"
        @click="currentPage>=totalPage?'':turn(currentPage+1)"
      >
        <i class="iconfont icon-jiantou"></i>
      </span>
      <!-- <select v-if="!small" v-model="limitNum" @change="turn(currentPage)">
        <option v-for="item in limitNums" :value="item">{{item}}条/页</option>
      </select>-->
      <div class="after" style="display: inline;">
        <span class="jump">
          {{ $lang == 'cn'?'到第':'Turn to Page'}}
          <input
            type="text"
            autocomplete="off"
            min="1"
            :max="totalPage"
            v-model="goPage"
            @keyup.enter="turn(goPage)"
          />{{ $lang == 'cn'?'页':''}}
          <!-- <button type="button" class="layui-laypage-btn">确定</button> -->
        </span>
        <span class="submit">
          <button
            type="button"
            class="layui-laypage-btn"
            @click="turn(goPage)"
            v-text="$lang=='cn'?'确定':'Skip'"
          ></button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyPagination",
  props: {
    currentPage: {
      //当前页
      type: Number,
      default: 1,
    },
    limit: {
      //每页显示条数
      type: Number,
      default: 10,
    },
    totalCount: {
      //总条数
      type: Number,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
    all: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    currentPage(newValue, oldValue) {
      this.goPage = newValue;
    },
  },
  data() {
    return {
      goPage: "1",
      limitNum: "",
      limitNums: [5, 10, 15, 20, 25, 30],
      toPrev: false,
      toNext: false,
    };
  },
  created: function () {
    this.initLimitNums();
  },
  computed: {
    totalPage() {
      return Math.ceil(this.totalCount / this.limit);
    },
    showPageBtn() {
      let pageNum = Number(this.totalPage),
        index = Number(this.currentPage),
        arr = [];
      if (pageNum <= 9) {
        for (let i = 1; i <= pageNum; i++) {
          arr.push(i);
        }
        return arr;
      }
      if (index < 5) return [1, 2, 3, 4, 5, 6, 7, "+", pageNum];
      if (index >= pageNum - 1)
        return [
          1,
          2,
          "-",
          pageNum - 5,
          pageNum - 4,
          pageNum - 3,
          pageNum - 2,
          pageNum - 1,
          pageNum,
        ];
      if (index === pageNum - 2)
        return [
          1,
          2,
          "-",
          pageNum - 5,
          pageNum - 4,
          pageNum - 3,
          pageNum - 2,
          pageNum - 1,
          pageNum,
        ];
      return [
        1,
        "-",
        index - 2,
        index - 1,
        index,
        index + 1,
        index + 2,
        "+",
        pageNum,
      ];
    },
  },
  methods: {
    initLimitNums() {
      this.limitNum = this.limit;
      //if (this.limitNums.indexOf(this.limit) == -1) {
      if (!this.limitNums.includes(this.limit)) {
        this.limitNums.push(this.limit);
        this.limitNums.sort(function (a, b) {
          return a - b;
        });
      }
    },
    //翻页，显示条数变化
    turn(page) {
      let i = parseInt(Number(page));
      if (i < 1) {
        i = 1;
      } else if (i > this.totalPage) {
        i = this.totalPage;
      }
      if (this.limitNum !== this.limit && this.limitNum !== "") {
        //每页显示条数改变
        let pages = Math.ceil(this.totalCount / this.limitNum);
        if (page > pages) {
          i = pages;
        }
        this.$emit("update:limit", this.limitNum);
      }
      this.$emit("update:currentPage", i);
      this.$emit("turn", i);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import url('//at.alicdn.com/t/font_1986404_olndtqc1n5q.css');

@media (max-width: 800px) {
  .paging {
    top: 35px;
  }

  .after {
    float: right;
  }
}

.pagination {
  position: relative;
}

.paging {
  position: absolute;
  right: 0;
  text-align: right;
  display: inline-block;
  vertical-align: middle;
  margin: 10px 0;
}

.paging span {
  cursor: pointer;
  float: left;
  background: #F6F9FA;
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 50%;
  padding: 0;
  text-align: center;
  color: #68758D;
  margin: 0 3px 10px;
  border: 0;
}

.paging span.num:hover {
  background: #008AFF;
  color: #fff;
}

.paging span.active {
  color: #fff;
  background: #008AFF;
  border-radius: 50%;
  width: 28px;
  height: 28px;
}

.paging .jump {
  width: 100px;
  background: transparent;
}

.paging .jump>input {
  appearance: none;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(226, 226, 226);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(226, 226, 226);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(226, 226, 226);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(226, 226, 226);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(104, 117, 141);
  cursor: text;
  display: inline-block;
  font-weight: 400;
  height: 30px;
  letter-spacing: normal;
  line-height: 30px;
  margin-bottom: 0px;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 0px;
  outline-color: rgb(104, 117, 141);
  outline-style: none;
  outline-width: 0px;
  padding: 0 3px;
  text-align: center;
  width: 40px;
}

.submit {
  width: 46px !important;
  background: transparent !important;
}

.submit>button {
  color: rgb(104, 117, 141);
  font-size: 12px;
  padding: 0 10px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  border-radius: 2px;
  vertical-align: top;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #e2e2e2;
  outline: 0;
}

// text-align: right;
// float: right;
.total {
  font-size: 17px;
  color: #68758D;
  margin: 10px 10px 10px 0;
  max-width: 900px;
  float: left;
}
</style>