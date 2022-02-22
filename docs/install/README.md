---
title: 安装
---

# 安装

### NPM

```bash
npm i feeling-ui
```

### 使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式

2. 引入 feeling-ui

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

```js
import { Button, ButtonGroup, Icon } from 'feeling-ui'
import 'feeling-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    'f-button': Button,
    'f-icon': Icon
  }
}
```

**完整组件列表和引入方式**

```js
import Vue from 'vue'
import {
  Button,
  Icon,
  ButtonGroup,
  Input,
  Col,
  Row,
  Layout,
  Header,
  Footer,
  Sider,
  Content,
  Toast,
  plugin,
  Tabs,
  TabsHead,
  TabsBody,
  TabsItem,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem
} from 'feeling-ui'

Vue.component('f-button', Button)
Vue.component('f-icon', Icon)
Vue.component('f-button-group', ButtonGroup)
Vue.component('f-input', Input)
Vue.component('f-row', Row)
Vue.component('f-col', Col)
Vue.component('f-layout', Layout)
Vue.component('f-header', Header)
Vue.component('f-sider', Sider)
Vue.component('f-content', Content)
Vue.component('f-footer', Footer)
Vue.use(plugin) // toast 组件的使用方法
Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-head', TabsHead)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)
Vue.component('f-popover', Popover)
Vue.component('f-collapse', Collapse)
Vue.component('f-collapse-item', CollapseItem)
```
