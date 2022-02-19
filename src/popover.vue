<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FeelPopover',
    data() {
      return { visible: false }
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        if (this.visible === true) {
          this.$nextTick(() => {
            document.addEventListener( 'click', function x() {
                this.visible = false
                document.removeEventListener('click', x)
              }.bind(this))
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
</style>
