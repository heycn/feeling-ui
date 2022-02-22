<template>
  <div>
    <f-row class="demoRow">
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow">
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow">
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow">
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
  </div>
</template>
<script>
  import Row from '../../../src/row'
  import Col from '../../../src/col'
  export default {
    components: {
      'f-row': Row,
      'f-col': Col
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow {
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
