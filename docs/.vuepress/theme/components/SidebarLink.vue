<script>
import { isActive, hashRE, groupHeaders } from "../util";
import { map } from "../../config/sidebarSelect";
import TagsConfig from "../../config/TagsConfig"
export default {
  functional: true,

  props: ["item", "sidebarDepth"],

  render(
    h,
    {
      parent: { $page, $site, $route, $themeConfig, $themeLocaleConfig },
      props: { item, sidebarDepth },
    }
  ) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    var selfActive = isActive($route, item.path);
    function check_path_0(data) {
      let str = data;
      let index = str.lastIndexOf("/");
      return (str = str.substr(0, index + 1));
    }
    function check_path(data) {
      let str = data;
      let index = str.lastIndexOf("/");
      return (str = str.substr(index + 1, str.length));
    }
    if (check_path_0($route.path) == check_path_0(item.path)) {
      if (check_path(item.path) == "iOS.html") {
        let array = ["iOS", "Android", "C++", "macOS", "Windows"];
        array.forEach((e) => {
          if (check_path($route.path) == e + ".html") {
            selfActive = true;
          }
        });
      }
    }
    // if (check_path($route.path) == check_path(item.path)) selfActive = true;

    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active =
      item.type === "auto"
        ? selfActive
        : // || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
          selfActive;
    const link =
      item.type === "external"
        ? renderExternal(h, item.path, item.title || item.path)
        : renderLink(h, item.path, item.title || item.path, active);

    const maxDepth = [
      $page.frontmatter.sidebarDepth,
      sidebarDepth,
      $themeLocaleConfig.sidebarDepth,
      $themeConfig.sidebarDepth,
      1,
    ].find((depth) => depth !== undefined);

    const displayAllHeaders =
      $themeLocaleConfig.displayAllHeaders || $themeConfig.displayAllHeaders;

    if (item.type === "auto") {
      return [
        link,
        renderChildren(h, item.children, item.basePath, $route, maxDepth),
      ];
    } else if (
      (active || displayAllHeaders) &&
      item.headers &&
      !hashRE.test(item.path)
    ) {
      const children = groupHeaders(item.headers);
      return [link, renderChildren(h, children, item.path, $route, maxDepth)];
    } else {
      return link;
    }
  },
};

function renderLink(h, to, text, active, level) {
  const component = {
    props: {
      to,
      activeClass: "",
      exactActiveClass: "",
    },
    class: {
      active,
      "sidebar-link": true,
    },
  };

  if (level > 2) {
    component.style = {
      "padding-left": level + "rem",
    };
  }

  return h("RouterLink", component, text);
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null;
  return h(
    "ul",
    { class: "sidebar-sub-headers" },
    children.map((c) => {
      //const active = isActive(route, path + '#' + c.slug)
      return h("li", { class: "sidebar-sub-header" }, [
        //renderLink(h, path + '#' + c.slug, c.title, active, c.level - 1),
        renderChildren(h, c.children, path, route, maxDepth, depth + 1),
      ]);
    })
  );
}

function renderExternal(h, to, text) {
  return h(
    "a",
    {
      attrs: {
        href: to,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      class: {
        "sidebar-link": true,
      },
    },
    [text, h("OutboundLink")]
  );
}
</script>

<style lang="stylus">
.sidebar .sidebar-sub-headers {
  padding-left: 1rem;
  font-size: 0.95em;
}

a.sidebar-link {
  font-size: 1em;
  font-weight: 400;
  display: inline-block;
  color: $textColor;
  border-left: 0.25rem solid transparent;
  // padding 0.35rem 1rem 0.35rem 1.25rem
  line-height: 1.4;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    color: $accentColor;
  }

  &.active {
    font-weight: 500;
    color: $accentColor;
    // border-left-color $accentColor
  }

  .sidebar-group & {
    padding-left: 2rem;
  }

  .sidebar-sub-headers & {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-left: none;

    &.active {
      font-weight: 500;
    }
  }
}
</style>
