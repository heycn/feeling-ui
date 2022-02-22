---
title: Popover 弹出框
---

# Popover 弹出框

### 支持 HTML

#### 预览

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 示例代码

```vue
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

<style>
  .feel-popover {
    z-index: 30;
  }
</style>
```

### 支持 hover

#### 预览

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 示例代码

```vue
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
```

### Attributes

|   参数   |             说明             |  类型  |          可选值          | 默认值 |
| :------: | :--------------------------: | :----: | :----------------------: | :----: |
| position | 设置弹出框相对触发区域的位置 | String | left、right、top、bottom |  top   |
| trigger  |         设置触发模式         | String |       click、hover       | click  |
