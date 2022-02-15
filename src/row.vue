<template>
  <div class="row" :style="rowStyle">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'FeelRow',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    components: {
      rowStyle() {
        let { gutter } = this
        return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    margin: 0 -10px;
  }
</style>
