<template>
  <div>
    <f-nav :selected.sync="selected">
      <f-nav-item name="home">首页</f-nav-item>
      <f-sub-nav name="about">
        <template slot="title">关于</template>
        <f-nav-item name="culture">企业文化</f-nav-item>
        <f-nav-item name="developers">开发团队</f-nav-item>
        <f-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <f-nav-item name="wechat">微信</f-nav-item>
          <f-nav-item name="qq">QQ</f-nav-item>
          <f-sub-nav name="phone">
            <template slot="title">手机</template>
            <f-nav-item name="cm">移动</f-nav-item>
            <f-nav-item name="cu">联通</f-nav-item>
            <f-nav-item name="cn">电信</f-nav-item>
          </f-sub-nav>
        </f-sub-nav>
      </f-sub-nav>
      <f-nav-item name="hire">招聘</f-nav-item>
    </f-nav>
    <p>你好，我是中文</p>
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
        selected: ['culture']
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
