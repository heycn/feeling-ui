<template>
  <div class="wrapper">
    <div>
      <f-button>默认按钮</f-button>
      <f-button icon="like">点赞</f-button>
      <f-button :loading="loading" @click="loading = !loading">加载中</f-button>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/button'

  export default {
    components: { 'f-button': Button },
    data() {
      return {
        loading: true
      }
    }
  }
</script>
<style>
  div.wrapper {
    margin-top: 10px;
  }
</style>
