<template>
  <div>
    <input
      class="search-query form-control bacinp"
      :placeholder="$lang=='cn'?'请输入搜索内容':'Please enter keywords to search'"
      v-model="value"
      @keyup.enter="searchData()"
    />
    <i class="bsearchBtn" @click="searchData()"></i>
  </div>
</template>
<script>
import axios from "axios";
import algoliasearch from "algoliasearch";
const client = algoliasearch("BF4RDO0EYD", "4a2857c7afb83b2687a2922aaaf56bcf");
const index = client.initIndex("juphoon");

export default {
  name: "AlgoliaSearchBox",
  props: ["options"],
  data() {
    return {
      value: "",
      Searching: false,
      SearchResults: {}, // 搜索的结果
    };
  },
  watch: {
    $route(newValue) {
      let hash = this.$route.hash.substr(1);
      if (hash) {
        this.value = decodeURI(hash);
        this.searchData();
      }
    },
  },
  created() {
    var _this = this;
  },
  mounted() {
    let hash = this.$route.hash.substr(1);
    console.log(hash);
    if (hash) {
      this.value = decodeURI(hash);
      this.searchData();
    }
  },
  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },
  },
  methods: {
    searchData() {
      let hash = this.$route.hash.substr(1);
      if (this.value) {
        if (this.value && decodeURI(hash) != this.value) {
          this.$router.push({ path: "/" + this.$lang + "/#" + this.value });
          return;
        } else {
          this.$emit("search", 0);
        }
      }
    },
    getSearchData(query, config = {}) {
      let that = this;
      if (!this.Searching) {
        that.$EventBus.$emit("Searching", true);
        index.search(query, config).then((res) => {
          this.Searching = false;
          that.$EventBus.$emit("Searching", false);
          that.$EventBus.$emit("SearchResults", res);
        });
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
@require '../styles/HomeSearch.styl';
</style>
