<template>
  <div style="padding-top: 16px">
    <f-popover position="left" trigger="hover">
      <f-button>左边提示</f-button>
      <template slot="content"> 提示内容 </template>
    </f-popover>
    <f-popover trigger="hover">
      <f-button>上方提示</f-button>
      <template slot="content"> 提示内容 </template>
    </f-popover>
    <f-popover position="bottom" trigger="hover">
      <f-button>下方提示</f-button>
      <template slot="content"> 提示内容 </template>
    </f-popover>
    <f-popover position="right" trigger="hover">
      <f-button>右边提示</f-button>
      <template slot="content"> 提示内容 </template>
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
