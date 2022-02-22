<template>
  <div>
    <div class="easy">
      <f-input placeholder="请输入内容"></f-input>
      <f-input value="默认文本"></f-input>
      <f-input disabled value="禁用状态"></f-input>
    </div>
    <div class="error">
      <f-input error="请输入正确内容！"></f-input>
    </div>
    <div class="bindDate">
      <f-input v-model="value"></f-input>
      <span>支持数据绑定: {{ value }}</span>
    </div>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components: { 'f-input': Input },
    data() {
      return {
        value: '输入试试'
      }
    }
  }
</script>
<style lang="scss">
  div.easy {
    margin-top: 10px;
    margin-bottom: 8px;
    > input {
      margin-top: 8px;
    }
  }

  div.bindDate {
    margin-top: 8px;
    height: 64px;
  }
</style>
