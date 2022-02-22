<template>
  <div class="f-nav-item" :class="{ selected }" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FeelNavItem',
    inject: ['root'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: false
      }
    },
    created() {
      this.root.addItem(this)
    },
    methods: {
      onClick() {
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import 'var';
  .f-nav-item {
    padding: 10px 20px;
    position: relative;
    &.selected {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
  }
  .f-sub-nav .f-nav-item {
    &.selected {
      color: $color;
      &::after {
        display: none;
      }
    }
  }
</style>
