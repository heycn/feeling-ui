import Vue from 'vue'
import Button from './button'
import Icon from './icon.vue'

Vue.component('f-button', Button)
Vue.component('f-icon', Icon)

new Vue({
  el: '#app'
})
