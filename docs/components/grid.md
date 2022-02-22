---
title: Grid 栅格布局
---

# Grid 栅格布局

### 24 网格

#### 预览

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div>
    <f-row class="demoRow">
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow">
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow">
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow">
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow {
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

### 设置 gutter

#### 预览

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <f-row class="demoRow" gutter="10">
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow" gutter="10">
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow {
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

### 设置空隙

#### 预览

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <f-row class="demoRow" gutter="10">
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="8" offset="8">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow" gutter="10">
      <f-col span="6" offset="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6" offset="6">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow" gutter="10">
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4" offset="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4" offset="8">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow" gutter="10">
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow {
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

### Attributes

#### Row

|   参数   |   说明   |      类型      |       可选值        | 默认值 |
| :------: | :------: | :------------: | :-----------------: | :----: |
|  gutter  |   间距   | String、Number |         --          |   0    |
| position | 对齐方式 |     String     | left、center、right |  left  |

#### Col

|   参数   |        说明        |      类型      |            可选值            | 默认值 |
| :------: | :----------------: | :------------: | :--------------------------: | :----: |
|   span   |   栅格占据的列数   | String、Number |             1-24             |   --   |
|  offset  | 栅格左侧的间隔格数 | String、Number |             1-24             |   --   |
|   ipad   |  ipad 响应式布局   | Number、Object | span 数字或{span:1;offset:1} |   --   |
| narrowPc |  窄屏幕响应式布局  | Number、Object | span 数字或{span:1;offset:1} |   --   |
|    pc    | 普通电脑响应式布局 | Number、Object | span 数字或{span:1;offset:1} |   --   |
|  widePc  |   宽屏响应式布局   | Number、Object | span 数字或{span:1;offset:1} |   --   |
