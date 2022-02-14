<template>
  <button class="f-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <f-icon class="icon" v-if="icon && !loading" :name="icon" />
    <f-icon class="loading icon" v-if="loading" name="loading"></f-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
  import Icon from './icon.vue'
  export default {
    components: {
      'f-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
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
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

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

    .loading {
      animation: spin 1.5s infinite linear;
    }
  }
</style>
