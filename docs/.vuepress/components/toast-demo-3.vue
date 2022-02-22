<template>
  <div style="padding-top: 16px">
    <div>
      <f-button @click="onClickButton">弹出提示</f-button>
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
    components: { FButton },
    methods: {
      onClickButton() {
        this.$toast('<strong style="color: #3eaf7c;">加粗带颜色的提示</strong>', {
          enableHtml: true
        })
      }
    }
  }
</script>
