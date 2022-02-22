<template>
  <div>
    <f-nav :selected.sync="selected">
      <f-nav-item name="home">首页</f-nav-item>
      <f-nav-item name="about">关于</f-nav-item>
      <f-nav-item name="hire">招聘</f-nav-item>
    </f-nav>
  </div>
</template>
<script>
  import FNav from './nav/nav.vue'
  import FNavItem from './nav/nav-item.vue'
  import FSubNav from './nav/sub-nav.vue'

  export default {
    name: 'demo',
    components: { FNav, FNavItem, FSubNav },
    data() {
      return {
        selected: ['home']
      }
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
