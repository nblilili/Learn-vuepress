<template>
  <ul v-if="items.length" class="sidebar-links">
    <li v-for="(item, i) in items" :key="i">
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="i === openGroupIndex"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />
      <SidebarLink v-else :sidebar-depth="sidebarDepth" :item="item" />
    </li>
  </ul>
</template>

<script>
import SidebarGroup from "@theme/components/SidebarGroup.vue";
import SidebarLink from "@theme/components/SidebarLink.vue";
import { isActive } from "../util";

export default {
  name: "SidebarLinks",

  components: { SidebarGroup, SidebarLink },

  props: [
    "items",
    "depth", // depth of current sidebar links
    "sidebarDepth", // depth of headers to be extracted
  ],

  data() {
    return {
      openGroupIndex: 0,
    };
  },

  watch: {
    $route() {
      this.refreshIndex();
    },
  },

  created() {
    this.refreshIndex();
    console.log(this.items, this.openGroupIndex);
  },

  methods: {
    refreshIndex() {
      console.log(this.$route, this.items);
      const index = resolveOpenGroupIndex(this.$route, this.items);
      console.log(index);
      if (index > -1) {
        this.openGroupIndex = index;
      }
    },

    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
    },

    isActive(page) {
      return isActive(this.$route, page.regularPath);
    },
  },
};

function resolveOpenGroupIndex(route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (descendantIsActive(route, item)) {
      console.log(i);
      return i;
    }
  }
  return -1;
}

function descendantIsActive(route, item) {
  if (item.type === "group") {
    return item.children.some((child) => {
      if (child.type === "group") {
        return descendantIsActive(route, child);
      } else {
        let active = child.type === "page" && isActive(route, child.path);
        if (check_path_0(route.path) == check_path_0(child.path)) {
          active = true;
        }
        return active;
        // return  child.type === "page" && isActive(route, child.path);
      }
    });
  }
  return false;
}
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
</script>
