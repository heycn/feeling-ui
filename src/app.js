import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'

Vue.component('f-button', Button)
Vue.component('f-button-group', ButtonGroup)
Vue.component('f-cascader', Cascader)
Vue.component('f-col', Col)
Vue.component('f-collapse', Collapse)
Vue.component('f-collapse-item', CollapseItem)
Vue.component('f-content', Content)
Vue.component('f-footer', Footer)
Vue.component('f-header', Header)
Vue.component('f-icon', Icon)
Vue.component('f-input', Input)
Vue.component('f-layout', Layout)
Vue.component('f-popover', Popover)
Vue.component('f-row', Row)
Vue.component('f-sider', Sider)
Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-head', TabsHead)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)
Vue.component('f-toast', Toast)
Vue.use(plugin)

import createElement from 'vue'

const h = createElement

new Vue({
  el: '#app',
  data: {
    source: [
      {
        name: '盲盒一',
        children: [
          {
            name: '小猪',
            children: [{ name: '公猪' }, { name: '母猪' }, { name: '小奶猪' }]
          },
          {
            name: '喵咪',
            children: [{ name: '英短' }, { name: '布偶' }, { name: '狸花' }]
          }
        ]
      },
      {
        name: '盲盒二',
        children: [
          {
            name: '旺旺大礼包',
            children: [{ name: '旺旺碎冰冰' }, { name: '旺旺仙贝' }, { name: '旺旺雪饼' }]
          }
        ]
      },
      {
        name: '终极盲盒',
        children: [
          {
            name: '考试大鸭蛋',
            children: [{ name: '爸爸的皮带' }, { name: '妈妈的扫把' }]
          }
        ]
      }
    ]
  },
  created() {},
  methods: {}
})
