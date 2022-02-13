import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('f-button', Button)
Vue.component('f-icon', Icon)
Vue.component('f-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})
