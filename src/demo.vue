<template>
  <div>
    <f-slides class="wrapper" width="300px" height="200px" :selected.sync="selected">
      <f-slides-item name="1">
        <div class="box">1</div>
      </f-slides-item>
      <f-slides-item name="2">
        <div class="box">2</div>
      </f-slides-item>
      <f-slides-item name="3">
        <div class="box">3</div>
      </f-slides-item>
    </f-slides>
  </div>
</template>
<script>
  import FSlides from './slides'
  import FSlidesItem from './slides-item'

  export default {
    name: 'demo',
    components: { FSlides, FSlidesItem },
    data() {
      return {
        selected: undefined
      }
    },
    created() {}
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .wrapper {
    margin: 40px;
  }
  .box {
    width: 100%;
    height: 350px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>
