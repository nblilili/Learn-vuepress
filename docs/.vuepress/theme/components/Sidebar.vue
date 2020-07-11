<template>
  <aside class="sidebar">

    <NavLinks />

    <slot name="top" />
    
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items'],

  data() {
    return {
      selected: null,
      options: [
        { value: null, text: '菊风云平台' },
        { value: 'one-2-one', text: '一对一语音通话' },
        { value: 'b', text: ' 一对一视频通话' },
        { value: 'c', text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled'}
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus">
.el-dropdown-link 
    cursor: pointer
    color: #008AFF
    font-size: 12px
  

.el-icon-arrow-down 
    font-size: 12px

.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0

.left-nav 
  margin-top: 9px;
  padding: 18px;


.left-title
  margin: 20px 0;
  cursor: pointer;
  position: relative;

</style>
