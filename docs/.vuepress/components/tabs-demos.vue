<template>
  <div style="margin-top: 10px">
    <div>
      <f-tabs :selected="selected1">
        <f-tabs-head>
          <f-tabs-item name="1">标题一</f-tabs-item>
          <f-tabs-item name="2">标题二</f-tabs-item>
        </f-tabs-head>
        <f-tabs-body>
          <f-tabs-pane name="1">内容1</f-tabs-pane>
          <f-tabs-pane name="2">内容2</f-tabs-pane>
        </f-tabs-body>
      </f-tabs>
    </div>

    <div style="margin-top: 20px">
      <f-tabs :selected="selected2">
        <f-tabs-head>
          <f-tabs-item name="1">标题一</f-tabs-item>
          <f-tabs-item disabled name="2">禁用标题</f-tabs-item>
          <f-tabs-item name="3">标题三</f-tabs-item>
        </f-tabs-head>
        <f-tabs-body>
          <f-tabs-pane name="1">内容1</f-tabs-pane>
          <f-tabs-pane name="2">内容2</f-tabs-pane>
          <f-tabs-pane name="3">内容3</f-tabs-pane>
        </f-tabs-body>
      </f-tabs>
    </div>
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabsHead from '../../../src/tabs-head'
  import TabsBody from '../../../src/tabs-body'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'

  export default {
    data() {
      return {
        selected1: '1',
        selected2: '1'
      }
    },
    components: {
      'f-tabs': Tabs,
      'f-tabs-head': TabsHead,
      'f-tabs-body': TabsBody,
      'f-tabs-item': TabsItem,
      'f-tabs-pane': TabsPane
    }
  }
</script>
