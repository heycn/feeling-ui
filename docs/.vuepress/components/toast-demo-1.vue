<template>
  <div style="padding-top: 16px">
    <div>
      <f-button @click="$toast('这是上方的内容')">上方弹出</f-button>
      <f-button @click="$toast('这是中间的内容', { position: 'middle' })">中间弹出</f-button>
      <f-button @click="$toast('这是下方的内容', { position: 'bottom' })">下方弹出</f-button>
    </div>
  </div>
</template>
<style>
  .feel-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import FButton from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: { FButton }
  }
</script>
