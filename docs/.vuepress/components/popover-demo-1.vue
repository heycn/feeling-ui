<template>
  <div style="padding-top: 16px">
    <f-popover position="left">
      <f-button>左边弹出</f-button>
      <template slot="content">
        <strong style="color: #06f">支持加粗</strong>
      </template>
    </f-popover>
    <f-popover>
      <f-button>上方弹出</f-button>
      <template slot="content">
        <a href="https://www.baidu.com/">支持链接</a>
      </template>
    </f-popover>
    <f-popover position="bottom">
      <f-button>下方弹出</f-button>
      <template slot="content">普通文本</template>
    </f-popover>
    <f-popover position="right">
      <f-button>右边弹出</f-button>
      <template slot="content">普通文本</template>
    </f-popover>
  </div>
</template>

<script>
  import FButton from '../../../src/button'
  import FPopover from '../../../src/popover'
  export default {
    components: { FButton, FPopover }
  }
</script>
<style>
  .feel-popover {
    z-index: 30;
  }
</style>
