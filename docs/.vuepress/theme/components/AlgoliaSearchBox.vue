<template>
  <form id="search-form" class="algolia-search-wrapper search-box" role="search">
    <input id="algolia-search-input" class="search-query" :placeholder="placeholder" />
  </form>
</template>

<script>
export default {
  name: "AlgoliaSearchBox",

  props: ["options"],

  data() {
    return {
      placeholder: undefined,
    };
  },

  watch: {
    $lang(newValue) {
      this.update(this.options, newValue);
      // this.update(this.options, this.$themeLocaleConfig.lang)
    },

    options(newValue) {
      this.update(newValue, this.$lang);
      // console.log(this.$themeLocaleConfig.lang,this.$lang)
      // this.update(newValue, this.$themeLocaleConfig.lang)
    },
  },

  mounted() {
    this.initialize(this.options, this.$lang);
    this.placeholder = this.$site.themeConfig.searchPlaceholder || "";
  },
  methods: {
    initialize(userOptions, lang) {
      Promise.all([
        import(
          /* webpackChunkName: "docsearch" */ "docsearch.js/dist/cdn/docsearch.min.js"
        ),
        import(
          /* webpackChunkName: "docsearch" */ "docsearch.js/dist/cdn/docsearch.min.css"
        ),
      ]).then(([docsearch]) => {
        docsearch = docsearch.default;
        const { algoliaOptions = {} } = userOptions;
        docsearch(
          Object.assign({}, userOptions, {
            inputSelector: "#algolia-search-input",
            // #697 Make docsearch work well at i18n mode.
            algoliaOptions: Object.assign(
              {
                facetFilters: [`lang:${lang}`].concat(
                  algoliaOptions.facetFilters || []
                ),
              },
              algoliaOptions
            ),
            handleSelected: (input, event, suggestion) => {
              const { pathname, hash } = new URL(suggestion.url);
              const routepath = pathname.replace(this.$site.base, "/");
              const _hash = decodeURIComponent(hash);
              this.$router.push(`${routepath}${_hash}`);
            },
          })
        );
      });
    },

    update(options, lang) {
      this.$el.innerHTML =
        '<input id="algolia-search-input" class="search-query">';
      console.log(1);
      this.initialize(options, lang);
    },
  },
};
</script>

<style lang="stylus" scoped>
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
</style>
