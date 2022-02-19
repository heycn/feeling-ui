<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FeelTabsPane',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', name => {
        this.active = name === this.name
        // 简化为以上代码
        // if (name === this.name) {
        //   this.active = true
        // } else {
        //   this.active = false
        // }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane {
    padding: 1em;
    &.active {
    }
  }
</style>
