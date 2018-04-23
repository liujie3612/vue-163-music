<template>
  <div class="personal-info">
    <div @click="hide=!hide">
      <img class="avatar" :src="avatar" alt="个人中心" title="个人中心">
      <i class="icon" title="个人中心"></i>
    </div>
    <div class="info" :class="{ hide:hide }">
      <!-- <div class="info-head">
        <img :src="avatar" alt="">{{ name }}
        <ul>
          <li>动态</li>
          <li>动态</li>
          <li>动态</li>
        </ul>
      </div> -->
    </div>
  </div>
</template>
<script>

export default {
  name: "personal-info",
  data() {
    return {
      hide: true,
      name: 'ihoey',
      avatar: this.$store.getters.avatar || "http://s4.music.126.net/style/web2/img/default/default_avatar_40.jpg"
    }
  },
  created() {

  }
}
</script>
<style lang="scss" scoped>
.personal-info {
  position: absolute;
  right: 0;
  top: 0;
  width: 65px;
  height: 60px;
  border-left: 1px solid #952914;
  .avatar {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-top: 25px;
    margin-left: 16px;
    opacity: 0.95;
  }
  .icon {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
    margin-top: 5px;
    position: absolute;
    bottom: 18px;
    right: 10px;
    &:active {
      border-top-color: #666;
    }
  }
  .info {
    width: 265px;
    height: 250px;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 0px 2px 6px 1px rgb(225, 225, 226);
    position: absolute;
    right: 20px;
    top: 60px;
  }
  .hide {
    display: none;
  }
}
</style>
