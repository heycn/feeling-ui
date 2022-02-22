<template>
  <div class="f-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'FeelButtonGroup',
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`f-group-button 的子元素应该全是 f-button ，但你写的是${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'helper';
  .f-button-group {
    display: inline-flex;

    > .f-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:first-child {
        border-radius: $border-radius 0 0 $border-radius;
      }

      &:last-child {
        border-radius: 0 $border-radius $border-radius 0;
      }

      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
