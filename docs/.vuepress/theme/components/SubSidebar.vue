<script>
import { isActive } from "../util";

export default {
  computed: {
    headers() {
      const headers = (this.$page.headers || []).filter(
        (header) => header.level === 2
      );
      return headers;
    },
  },
  methods: {
    isLinkActive(header, index) {
      var hash = this.$route.hash
      let active = false;
      if (hash)
        active = isActive(this.$route, this.$page.path + "#" + header.slug);
      else if (!index) active = true;
      return active;
    },
  },
  render(h) {
    return h(
      "ul",
      {
        class: { "sub-sidebar-wrapper": true },
        style: { width: (this.$page.headers || []).length > 0 ? "12rem" : "0" },
      },
      [
        ...(this.$page.headers || []).map((header, index) => {
          // console.log(header,index)
          return h(
            "li",
            {
              class: {
                active: this.isLinkActive(header, index),
                [`level-${header.level}`]: true,
              },
              attr: { key: header.title },
            },
            [
              h(
                "router-link",
                {
                  class: { "sidebar-link": true },
                  props: { to: `${this.$page.path}#${header.slug}` },
                },
                header.title
              ),
            ]
          );
        }),
      ]
    );
  },
};
const hashRE = /#.*$/;
function getHash(path) {
  const match = path.match(hashRE);
  if (match) {
    return match[0];
  }
}
</script>

<style lang="stylus" scoped>
.side-bar {
  top: 10rem;
  bottom: 10rem;
  right: 2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.sub-sidebar-wrapper {
  width: 12rem;
  padding-left: 0;
  list-style: none;
  font-size: 15px;

  li {
    margin: 10px 3px;
    cursor: pointer;
    border-left: 1px solid var(--border-color);

    a {
      // padding 0.35rem 1rem 0.35rem 0rem
      color: var(--text-color);
    }

    &:hover {
      a {
        color: #000;
      }
    }

    &.active {
      margin: 10px 0px;
      border-left: 3px solid $accentColor;

      a {
        color: #2c3e50;
      }
    }

    &.level-1 {
      padding-left: 0.4rem;
    }

    &.level-2 {
      padding-left: 0.9rem;
    }

    &.level-3 {
      padding-left: 1.5rem;
      font-weight: 400;
      font-size: 14px;
      opacity: 0.7;
    }
  }
}
</style>

