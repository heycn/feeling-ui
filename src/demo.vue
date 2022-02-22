<template>
  <div style="margin: 20px">
    <f-pager :total-page="20" :current-page="20"></f-pager>
  </div>
</template>
<script>
  import FPager from './pager'

  export default {
    name: 'demo',
    components: { FPager }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: white;
  }
</style>
<style scoped lang="scss"></style>
