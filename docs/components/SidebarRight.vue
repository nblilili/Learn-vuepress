<template>
  <aside class="sidebar-right">
  
    <slot name="top" />

    <SubSidebar class="side-bar" />
    
    <!-- <ModuleTransition>
      <SubSidebar class="side-bar" />
    </ModuleTransition> -->

    <slot name="bottom" />
  </aside>
</template>

<script>
// import ModuleTransition from '@theme/components/ModuleTransition.vue'
import SubSidebar from '@theme/components/SubSidebar.vue'

export default {
  name: 'SidebarRight',

  components: { SubSidebar },

  props: ['items']
}
</script>

<style lang="stylus">
.sidebar-right
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
  .sidebar-right
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
