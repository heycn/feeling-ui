<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'FeelTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'FeelTabsHead') {
          vm.$children.forEach(childeVm => {
            if (childeVm.$options.name === 'FeelTabsItem' && childeVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childeVm)
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {
  }
</style>
