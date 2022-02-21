<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <feel-cascader-item
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :sourceItem="item"
    ></feel-cascader-item>
  </div>
</template>

<script>
  export default {
    name: 'FeelCascaderItem',
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .cascaderItem {
    border: 1px solid red;
    margin: 10px;
  }
</style>
