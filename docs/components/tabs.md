---
title: Tabs 标签页
---

# Tabs 标签页

### 预览

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

### 示例代码

```vue
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
  export default {
    data() {
      return {
        selected1: '1',
        selected2: '1'
      }
    }
  }
</script>
```

### Attributes

#### Tabs

|   参数   |   说明   |  类型  | 可选值 | 默认值 |
| :------: | :------: | :----: | :----: | :----: |
| selected | 当前选中 | String |  name  |   --   |

#### TabsHeadItem

|   参数   |     说明     |  类型   |   可选值    | 默认值 |
| :------: | :----------: | :-----: | :---------: | :----: |
|   name   |     必选     | String  |     --      |   --   |
| disabled | 设置是否禁用 | Boolean | true、false | false  |

#### TabsBodyPane

| 参数 | 说明 |  类型  | 可选值 | 默认值 |
| :--: | :--: | :----: | :----: | :----: |
| name | 必选 | String |   --   |   --   |
