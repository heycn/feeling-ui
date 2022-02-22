const expect = chai.expect
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
  it('存在.', () => {
    expect(Collapse).to.exist
  })
  it('接收 selected 属性', done => {
    Vue.component('f-collapse', Collapse)
    Vue.component('f-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <f-collapse :selected="selectedTab">
      <f-collapse-item title="标题1" name="1"><span id="content-1">1</span></f-collapse-item>
      <f-collapse-item title="标题2" name="2"><span id="content-2">2</span></f-collapse-item>
      <f-collapse-item title="标题3" name="3"><span id="content-3">3</span></f-collapse-item>
    </f-collapse>
    `
    const vm = new Vue({
      el: div,
      data() {
        return {
          selectedTab: ['1', '2']
        }
      }
    })
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
    })
  })

  it('接收 single 属性', done => {
    Vue.component('f-collapse', Collapse)
    Vue.component('f-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <f-collapse :selected="selectedTab" single>
      <f-collapse-item title="标题1" name="1"><span id="content-1">1</span></f-collapse-item>
      <f-collapse-item title="标题2" name="2"><span id="content-2">2</span></f-collapse-item>
      <f-collapse-item title="标题3" name="3"><span id="content-3">3</span></f-collapse-item>
    </f-collapse>
    `
    const vm = new Vue({
      el: div,
      data() {
        return {
          selectedTab: ['1']
        }
      }
    })
    vm.$nextTick(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(() => {
        expect(vm.$el.querySelector('#content-1')).to.not.exist
        expect(vm.$el.querySelector('#content-2')).to.exist
        done()
      })
    })
  })

  it('触发 update:selected 事件', done => {
    Vue.component('f-collapse', Collapse)
    Vue.component('f-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <f-collapse :selected="selectedTab" @update:selected="onSelect">
      <f-collapse-item title="标题1" name="1"><span id="content-1">1</span></f-collapse-item>
      <f-collapse-item title="标题2" name="2"><span id="content-2">2</span></f-collapse-item>
      <f-collapse-item title="标题3" name="3"><span id="content-3">3</span></f-collapse-item>
    </f-collapse>
    `
    const callback = sinon.fake()
    const vm = new Vue({
      el: div,
      data() {
        return {
          selectedTab: ['1']
        }
      },
      methods: {
        onSelect: callback
      }
    })
    setTimeout(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(() => {
        expect(callback).to.have.been.called
        done()
      })
    })
  })
})
