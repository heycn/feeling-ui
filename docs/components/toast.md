---
title: Toast 吐司提示
---

# Toast 吐司提示

### this.$toast

#### 预览

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <div>
      <f-button @click="$toast('这是上方的内容')">上方弹出</f-button>
      <f-button @click="$toast('这是中间的内容', { position: 'middle' })">中间弹出</f-button>
      <f-button @click="$toast('这是下方的内容', { position: 'bottom' })">下方弹出</f-button>
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
```

### 设置关闭按钮

#### 预览

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <div>
      <f-button @click="onClickButton">上方弹出</f-button>
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
  export default {
    methods: {
      onClickButton() {
        this.$toast('这是我在学习 Vue 时制作的 UI 库', {
          closeButton: {
            text: '好的'
          }
        })
      }
    }
  }
</script>
```

### 支持传入 HTML

#### 预览

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

#### 示例代码

```vue
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
  export default {
    methods: {
      onClickButton() {
        this.$toast('<strong style="color: #3eaf7c;">加粗带颜色的提示</strong>', {
          enableHtml: true
        })
      }
    }
  }
</script>
```

### Attributes

|    参数     |           说明           |  类型   |                    可选值                    |                默认值                |
| :---------: | :----------------------: | :-----: | :------------------------------------------: | :----------------------------------: |
|   message   | 显示内容，函数第一个参数 | String  |                      --                      |                  --                  |
|   object    |   函数接受的第二个参数   | String  | autoClose, closeButton, enableHtml, position |                  --                  |
|  position   |         设置位置         | String  |             top、middle、bottom              |                middle                |
|  autoClose  |       是否自动关闭       | Boolean |                 true、false                  |                 true                 |
| closeButton |       设置关闭按钮       | Object  |                      --                      | {message:'关闭', callback:undefined} |
| enableHtml  |    是否支持 html 内容    | Boolean |                 true、false                  |                false                 |
