<template>
  <div>
    <f-button>点我</f-button>

    <div>
      <f-cascader :source="source" />
    </div>
  </div>
</template>

<script>
  import button from './button'
  import cascader from '@/cascader/cascader'
  export default {
    name: 'demo',
    components: {
      'f-button': button,
      'f-cascader': cascader
    },
    data() {
      return {
        source: [
          {
            name: '你好',
            children: [{ name: '我好' }, { name: '她好' }, { name: '他好' }]
          },
          {
            name: '食物',
            children: [{ name: '麻辣烫' }, { name: '臭豆腐' }]
          }
        ]
      }
    }
  }
</script>
