<template>
  <div class="page" style="position: relative">
    <f-date-range-picker :value="d" @input="d = $event" :scope="scope"></f-date-range-picker>
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
  import FDateRangePicker from './date-picker/date-range-picker'

  export default {
    name: 'demo',
    components: { FDatePicker, FDateRangePicker },
    data() {
      return {
        d: [],
        scope: [new Date(1958, 1), new Date(2118, 5)]
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
