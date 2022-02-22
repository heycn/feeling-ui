<template>
  <div class="wrapper">
    <div>
      <f-collapse :selected.sync="selectedTab" single>
        <f-collapse-item title="标题1" name="1">标题1的内容</f-collapse-item>
        <f-collapse-item title="标题2" name="3">标题2的内容</f-collapse-item>
        <f-collapse-item title="标题3" name="2">标题3的内容</f-collapse-item>
      </f-collapse>
    </div>
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'

  export default {
    data() {
      return {
        selectedTab: ['1']
      }
    },
    components: {
      'f-collapse': Collapse,
      'f-collapse-item': CollapseItem
    }
  }
</script>
<style scoped>
  .wrapper {
    margin-top: 10px;
  }
</style>
