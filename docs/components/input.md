---
title: Input 输入框
---

# Input 输入框

### 预览

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

### 示例代码

```vue
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
  export default {
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
```

### Attributes

|    参数     |     说明     |  类型   |   可选值    | 默认值 |
| :---------: | :----------: | :-----: | :---------: | :----: |
|    value    | 设置默认内容 | String  |     --      |   --   |
|  disabled   | 是否禁用状态 | Boolean | true、false | false  |
|  readonly   | 是否只读状态 | Boolean | true、false | false  |
| placeholder |   提示信息   | String  |     --      |   --   |
|    error    |   错误信息   | String  |     --      |   --   |
