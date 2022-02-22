---
title: Collapse 折叠面板
---

# Collapse 折叠面板

### 预览

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

### 示例代码

```vue
<template>
  <div class="wrapper">
    <div>
      <f-collapse :selected.sync="selectedTab" single>
        <f-collapse-item title="标题1" name="1">标题1的内容</f-collapse-item>
        <f-collapse-item title="标题2" name="3">标题2的内容</f-collapse-item>
        <f-collapse-item title="标题3" name="2">标题3的内容</f-collapse-item>
      </f-collapse>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectedTab: ['1']
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    margin-top: 10px;
  }
</style>
```

### Attributes

#### Collapse

|   参数   |     说明     |  类型   |   可选值    | 默认值 |
| :------: | :----------: | :-----: | :---------: | :----: |
| selected |    选中项    |  Array  |     --      |   []   |
|  single  | 是否单一展示 | boolean | true、false | false  |

#### CollapseItem

| 参数  | 说明 |  类型  | 可选值 | 默认值 |
| :---: | :--: | :----: | :----: | :----: |
| title | 标题 | String |   --   |   --   |
| name  | 必填 | String |   --   |   --   |
