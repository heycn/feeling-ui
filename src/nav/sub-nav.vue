<template>
  <div class="f-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="f-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FeelSubNav',
    data() {
      return {
        open: false
      }
    },
    methods: {
      onClick() {
        this.open = !this.open
      }
    }
  }
</script>

<style scoped lang="scss">
  .f-sub-nav {
    position: relative;
    > span {
      padding: 10px 20px;
      display: block;
    }
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid black;
      white-space: nowrap;
    }
  }
  .f-sub-nav .f-sub-nav .f-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
</style>
