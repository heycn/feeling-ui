<template>
  <button class="f-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <f-icon class="icon" v-if="icon && !loading" :name="icon"></f-icon>
    <f-icon class="loading icon" v-if="loading" name="loading"></f-icon>
    <div class="f-button-content">
      <slot />
    </div>
  </button>
</template>

<script>
  import Icon from './icon.vue'
  export default {
    name: 'FeelButton',
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

<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .f-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: $border-color-hover;
    }
    &:active {
      background-color: $button-active-bg;
    }
    &:focus {
      outline: none;
    }
    > .f-button-content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: 0.1em;
    }

    &.icon-right {
      > .f-button-content {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: 0.1em;
      }
    }
    .loading {
      animation: spin 1.5s infinite linear;
    }
  }
</style>
