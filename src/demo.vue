<template>
  <div class="page" style="position: relative">
    <f-date-picker></f-date-picker>
    <p>其他内容</p>
  </div>
</template>
<style>
  .page {
    padding: 100px;
  }
</style>
<script>
  import FDatePicker from './date-picker/date-picker'

  export default {
    name: 'demo',
    components: { FDatePicker },
    data() {
      return {}
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
