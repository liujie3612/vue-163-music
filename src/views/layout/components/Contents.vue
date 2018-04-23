<template>
  <div class="contents">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'contents',
  data() {
    return {

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
  components: {},

}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>
