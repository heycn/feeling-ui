<template>
  <div style="margin: 20px">
    <f-pager :total-page="10" :current-page.sync="currentPage"></f-pager>
  </div>
</template>
<script>
  import FPager from './pager'

  export default {
    name: 'demo',
    components: { FPager },
    data() {
      return {
        currentPage: 1
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
  body {
    background: white;
  }
</style>
<style scoped lang="scss"></style>
