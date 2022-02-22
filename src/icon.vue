<template>
  <svg class="f-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  import './svg.js'

  export default {
    name: 'FeelIcon',
    props: ['name']
  }
</script>
<style lang="scss" scoped>
  .f-icon {
    width: 1em;
    height: 1em;
  }
</style>
