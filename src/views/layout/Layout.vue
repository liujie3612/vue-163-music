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
import userService from 'service/user'

export default {
  name: 'layout',
  components: {
    Headers,
    List,
    Contents,
    Footers
  },
  created() {
    this.login()
  },
  methods: {
    login() {
      // userService.login('13581702065','').then((res) => {
      //   console.log(res)
      // })
      // userService.userInfo().then((res) => {
      //   console.log(res)
      // })
    }
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
