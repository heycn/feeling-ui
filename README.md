# Feeling UI - 一个不太一样的 UI 框架

## 安装

使用本框架前，请在 CSS 中开启 border-box

```css
* {
  box-sizing: border-box;
}
```

## 开发

```bash
# 开发预览
npm start

# 单元测试(只测一次)
npm run test

# 运行一次，每次保存都会测试，但是 window 上有 BUG
npm run dev-test
```

介绍
这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

开始使用
添加 CSS 样式 使用本框架前，请在 CSS 中开启 border-box
*,*::before,*::after{box-sizing: border-box;}
IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
IE 15 及以上浏览器都支持此样式。

安装 feeling
npm i --save feeling-ui
引入 feeling
import {Button, ButtonGroup, Icon} from 'feeling-ui'
import 'feeling-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    'f-button': Button,
    'f-icon': Icon
  }
}
引入 svg symbols
<script src="//at.alicdn.com/t/font_3179847_hqhrap5ffw.js"></script>
