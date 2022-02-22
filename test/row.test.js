const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })
  it('接收 gutter 属性', done => {
    Vue.component('f-row', Row)
    Vue.component('f-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <f-row gutter="20">
        <f-col span="12"></f-col>
        <f-col span="12"></f-col>
      </f-row>
      `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginRight).to.equal('-10px')
      expect(getComputedStyle(row).marginLeft).to.equal('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.equal('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: { align: 'left' }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-start')
    div.remove()
    vm.$destroy()
  })
})
