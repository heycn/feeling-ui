---
title: Layout 布局
---

# Layout 布局

### 布局一

#### 预览

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <f-layout style="color: #fff; text-align: center; margin-bottom: 50px">
      <f-header style="height: 50px; background: #a2aec8">header</f-header>
      <f-content style="height: 100px; background: #5e7297">content</f-content>
      <f-footer style="height: 50px; background: #a2aec8">footer</f-footer>
    </f-layout>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
```

### 布局二

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px; text-align: center">
    <f-layout style="color: #fff; overflow: hidden; margin-bottom: 50px">
      <f-header style="height: 50px; background: #4d6d94"> header </f-header>
      <f-layout>
        <f-sider style="height: 100px; background: #5d7da5; width: 200px"> sider </f-sider>
        <f-content style="height: 100px; background: #5c82b1"> content </f-content>
      </f-layout>
      <f-footer style="height: 50px; background: #4d6d94"> footer </f-footer>
    </f-layout>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
```

### 布局三

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <f-layout style="color: #fff; overflow: hidden; text-align: center; margin-bottom: 50px">
      <f-sider style="background: #3f5169; width: 200px"> sider </f-sider>
      <f-layout>
        <f-header style="height: 50px; background: #e4d9bb"> header </f-header>
        <f-content style="height: 100px; background: #f6c487"> content </f-content>
        <f-footer style="height: 50px; background: #e4d9bb"> footer </f-footer>
      </f-layout>
    </f-layout>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
```
