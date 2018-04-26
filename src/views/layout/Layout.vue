<template>
  <div class="wrapper">
    <headers></headers>
    <div class="main-container">
      <list></list>
      <contents></contents>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import { Headers, List, Contents, Footers } from './components'

export default {
  name: 'layout',
  components: {
    Headers,
    List,
    Contents,
    Footers
  }
}

</script>
<style>
.wrapper {
  width: 1000px;
  margin: 30px auto 0;
  padding: 0;
  box-shadow: 0px 0px 6px 1px rgb(225, 225, 226);
  border-radius: 6px;
  height: 670px;
}

</style>
