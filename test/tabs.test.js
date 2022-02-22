const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-head', TabsHead)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })
  it('接收 selected 属性', done => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <f-tabs selected="third">
      <f-tabs-head>
        <f-tabs-item name="first">周一</f-tabs-item>
        <f-tabs-item name="second">周二</f-tabs-item>
        <f-tabs-item name="third">周三</f-tabs-item>
      </f-tabs-head>
      <f-tabs-body>
        <f-tabs-pane name="first">周一相关资讯</f-tabs-pane>
        <f-tabs-pane name="second">周二相关资讯</f-tabs-pane>
        <f-tabs-pane name="third">周三相关资讯</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[date-name="third"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接收 direction prop', () => {})
})
