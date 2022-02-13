<template>
  <button class="f-button" :class="{ [`icon-${iconPosition}`]: true }">
    <f-icon v-if="icon" :name="icon" />
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          // return value !== 'left' && value !== 'right' ? false : true
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss">
  .f-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle; /* 解决 align-items: center; 带来的对不齐 */

    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }

    /* 默认 icon 在左边 */
    > .icon {
      order: 1;
      margin-right: 0.3em;
      margin-left: 0;
    }
    > .content {
      order: 2;
    }

    /* 设置 icon-position 为 right 时，icon 在右边*/
    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: 0.3em;
      }
      > .content {
        order: 1;
      }
    }
  }
</style>
