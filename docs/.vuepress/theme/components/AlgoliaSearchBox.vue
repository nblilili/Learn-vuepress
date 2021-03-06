<template>
  <form id="search-form" class="algolia-search-wrapper search-box" role="search">
    <input
      id="algolia-search-input"
      class="search-query"
      :placeholder="placeholder"
      @keyup.enter="searchData()"
    />
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
    },

    options(newValue) {
      this.update(newValue, this.$lang);
    },
  },

  mounted() {
    this.initialize(this.options, this.$lang);
    this.placeholder = this.$site.themeConfig.searchPlaceholder || "";
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

<style lang="stylus">
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

.algolia-autocomplete .ds-dropdown-menu {
  // width: 650px;
}

.algolia-autocomplete .algolia-docsearch-suggestion {
}

.algolia-search-wrapper {
  & > span {
    vertical-align: middle;
  }

  .algolia-autocomplete {
    line-height: normal;

    .ds-dropdown-menu {
      background-color: #fff;
      border: 1px solid #999;
      border-radius: 4px;
      font-size: 16px;
      margin: 6px 0 0;
      padding: 4px;
      text-align: left;

      &:before {
        // border-color: #999;
      }

      [class*=ds-dataset-] {
        border: none;
        padding: 0;
      }

      .ds-suggestions {
        margin-top: 0;
      }

      .ds-suggestion {
        border-bottom: 1px solid $borderColor;
      }
    }

    .algolia-docsearch-suggestion--highlight {
      // color: #2c815b;
    }

    .algolia-docsearch-suggestion {
      .algolia-docsearch-suggestion--category-header {
        height: 30px;
        line-height: 30px;
        margin: 0px 0px;
        background: transparent;
        color: #4A4A4A;
        font-size: 14px;

        .algolia-docsearch-suggestion--highlight {
          padding: 0;
          // background: rgba(255, 255, 255, 0.6);
        }
      }

      .algolia-docsearch-suggestion--wrapper {
        line-height 30px
        padding: 0;
      }

      .algolia-docsearch-suggestion--title {
        line-height 30px
        padding: 0;
        font-weight: 600;
        margin-bottom: 0;
        color: $textColor;
      }

      .algolia-docsearch-suggestion--subcategory-column {
        vertical-align: top;
        padding: 5px 7px 5px 5px;

        // border-color: $borderColor;
        // background: #f1f3f5;
        &:after {
          display: none;
        }
      }

      .algolia-docsearch-suggestion--subcategory-column-text {
        // color: #555;
      }
    }

    .algolia-docsearch-footer {
      border-color: $borderColor;
    }

    .ds-cursor .algolia-docsearch-suggestion--content {
      // background-color: #e7edf3 !important;
      color: $textColor;
    }
  }
}

@media (min-width: $MQMobile) {
  .algolia-search-wrapper {
    .algolia-autocomplete {
      .algolia-docsearch-suggestion {
        .algolia-docsearch-suggestion--subcategory-column {
          float: none;
          width: 150px;
          min-width: 150px;
          display: table-cell;
        }

        .algolia-docsearch-suggestion--content {
          float: none;
          display: table-cell;
          width: 100%;
          vertical-align: top;
        }

        .ds-dropdown-menu {
          min-width: 515px !important;
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .algolia-search-wrapper {
    .ds-dropdown-menu {
      min-width: calc(100vw - 4rem) !important;
      max-width: calc(100vw - 4rem) !important;
    }

    .algolia-docsearch-suggestion--wrapper {
      padding: 5px 7px 5px 5px !important;
    }

    .algolia-docsearch-suggestion--subcategory-column {
      padding: 0 !important;
      // background: white !important;
    }

    .algolia-docsearch-suggestion--subcategory-column-text:after {
      content: ' > ';
      font-size: 10px;
      line-height: 14.4px;
      display: inline-block;
      width: 5px;
      margin: -3px 3px 0;
      vertical-align: middle;
    }
  }
}
</style>
