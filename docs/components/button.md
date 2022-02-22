---
title: Button 按钮
---

# Button 按钮

### 预览

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

### 示例代码

```vue
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
  export default {
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
```

### Attributes

|     参数     |      说明       |  类型   |                                    可选值                                    | 默认值 |
| :----------: | :-------------: | :-----: | :--------------------------------------------------------------------------: | :----: |
|     icon     | 设置内置的 icon | String  | settings、like、info、error、left、right、down、download、loading、add、down |   --   |
| iconPosition |    图标位置     | String  |                                 left、right                                  |  left  |
|   loading    |    加载状态     | Boolean |                                 true、false                                  | false  |
