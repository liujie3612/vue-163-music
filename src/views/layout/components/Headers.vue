<template>
  <div class="headers" name="header">
    <div class="logo">
      <router-link to="/home"><img :src="logo" alt="logo" class="logo" width="136"></router-link>
    </div>
    <div class="control">
      <span class="func" @click="$router.go(-1)"><img :src="arrow" class="pre" width="14"></span>
      <span class="func" @click="$router.go(1)"><img :src="arrow" class="next" width="14"></span>
    </div>
    <search></search>
    <div class="personal">
      <personal-info></personal-info>
    </div>
  </div>
</template>
<script>
import logo from 'assets/logo/logo.svg';
import arrow from 'assets/arrow.svg'
import Search from './Search';
import personalInfo from './personalInfo';
export default {
  name: 'headers',
  data() {
    return {
      logo,
      arrow
    }
  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  computed: {

  },
  methods: {

  },
  components: {
    Search,
    personalInfo
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.headers {
  height: 60px;
  background: #b92500; // background: #B52811;
  border-radius: 6px 6px 0 0;
  position: relative;
  .logo {
    margin: 9px 0 0 10px;
    float: left;
  }
  .control {
    float: left;
    margin-left: 70px;
    .func {
      display: block;
      width: 28px;
      height: 28px;
      text-align: center;
      margin-top: 17px;
      float: left;
      border: 1px solid #9f1a0e;
      cursor: pointer;
      img {
        max-height: 100%;
        position: relative;
      }
      .pre {
        transform: rotate(-180deg);
        left: 3px;
        top: 5px;
      }
      .next {
        left: -3px;
        top: 5.5px;
      }
    }
    > :first-child {
      border-right: 1px solid #861d09;
      border-radius: 3px 0 0 3px;
    }
    > :last-child {
      border-left: none;
      border-radius: 0 3px 3px 0;
    }
  }
}
</style>
