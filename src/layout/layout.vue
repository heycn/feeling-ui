<template>
  <div class="layout" :class="layoutClass">
    <slot />
  </div>
</template>
<script>
  export default {
    name: 'FeelLayout',
    data() {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'FeelSider') {
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>
