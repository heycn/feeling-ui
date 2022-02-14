import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('f-button', Button)
Vue.component('f-icon', Icon)
Vue.component('f-button-group', ButtonGroup)
Vue.component('f-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  },
  created() {
    setTimeout(() => {
      let event = new Event('change')
      let inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      console.log('hi')
    }, 3000)
  },
  methods: {
    inputChange(e) {
      console.log(e)
    }
  }
})
