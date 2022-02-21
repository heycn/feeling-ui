<template>
  <div>
    <f-button>默认按钮</f-button>
    <f-button icon="like">点赞</f-button>
    <f-button :loading="true">加载中</f-button>
    <f-button disabled>不可选中</f-button>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>
  </div>
</template>

<script>
  import Button from '../../../src/button.vue'
  export default {
    components: {
      'f-button': Button
    },
    data() {
      return {
        content: `
        <f-button>默认按钮</f-button>
        <f-button icon="like">点赞</f-button>
        <f-button :loading="true">加载中</f-button>
        <f-button disabled>不可选中</f-button>
        `
      }
    }
  }
</script>
