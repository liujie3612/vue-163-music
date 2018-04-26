<template>
  <div class="personal-info">
    <div @click="clickHandle">
      <img class="avatar" :src="userInfo.avatar || defaultAvatar" alt="个人中心" title="个人中心">
      <i class="icon" title="个人中心"></i>
    </div>
    <div class="info" :class="{ hide: !userInfo.avatar || hide }">
      <div class="info-head">
        <div class="avatar-name"><img :src="userInfo.avatar || defaultAvatar" alt="">{{ userInfo.nickname }}</div>
        <ul class="count">
          <li>
            <p>{{ userDetail.eventCount }}</p>动态</li>
          <li>
            <p>{{ userDetail.followeds }}</p>关注</li>
          <li>
            <p>{{ userDetail.follows }}</p>粉丝</li>
        </ul>
        <ul class="other">
          <li>
            <a href="https://music.163.com/#/member" target="_blank">
              VIP会员
              <i class="iconfont icon-jiantouarrow483"></i>
            </a>
          </li>
          <li>个人信息设置
            <i class="iconfont icon-jiantouarrow483"></i>
          </li>
          <li>绑定社交账号
            <i class="iconfont icon-jiantouarrow483"></i>
          </li>
          <li @click="logout">退出登录
            <i class="iconfont icon-jiantouarrow483"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="login" v-show="loginFlag"></div>
  </div>
</template>
<script>
import storejs from 'store/dist/store.legacy'
import userServices from 'service/user'
const userInfo = storejs.get('userInfo')

export default {
  name: "personal-info",
  data() {
    return {
      hide: true,
      defaultAvatar: 'http://s4.music.126.net/style/web2/img/default/default_avatar_40.jpg',
      userInfo: userInfo || {},
      userDetail: {},
      loginFlag: false
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    clickHandle() {
      this.hide = !this.hide

    },
    logout() {
      storejs.remove('login')
      storejs.remove('userInfo')
      Object.keys(this.userInfo).forEach(e => userInfo[e] = '')
    },
    getUserInfo() {
      userServices.userDetials().then((res) => {
        if (res.code == 200) {
          this.userDetail.followeds = res.profile.followeds
          this.userDetail.eventCount = res.profile.eventCount
          this.userDetail.follows = res.profile.follows
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  },
  computed: {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
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
    margin-top: 17px;
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
    top: 23px;
    right: 10px;
    &:active {
      border-top-color: #666;
    }
  }
  .info {
    height: 265px;
    width: 250px;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 0px 2px 6px 1px #e1e1e2;
    position: absolute;
    right: 20px;
    top: 60px;
    .info-head {
      height: 123px;
      padding: 20px 0;
      border-bottom: 1px solid #ededed;
      font-size: 14px;
      .avatar-name {
        padding: 0 20px;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
      }
      .count {
        list-style: none;
        padding: 18px 20px;
        @include clearfix;
        li {
          float: left;
          width: calc(100% / 3);
          font-size: 12px;
          color: #555555;
          padding-left: 5px;
          &:not(:last-child) {
            border-right: 1px solid #e1e1e1;
          }
          p {
            font-size: 13px;
            font-weight: 600;
            color: #000000;
          }
        }
      }
      .other {
        list-style: none;
        li {
          height: 32px;
          line-height: 32px;
          padding: 0 20px;
          position: relative;
          color: #555555;
          font-size: 12px;
          cursor: pointer;
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
          .iconfont {
            position: absolute;
            top: 50px;
            margin-top: -20%;
            color: silver;
            font-size: 13px;
            right: 10px;
            transform: rotate(-90deg);
          }
          &:nth-child(1) {
            margin-top: 4px;
          }
          &:nth-child(4) {
            height: 38px;
            line-height: 38px;
            margin-top: 4px;
            border-top: 1px solid #ededed;
          }
          &:hover {
            background-color: #ebebeb;
          }
        }
      }
    }
  }
  .login{
    width: 350px;
    height: 500px;
  }
  .hide {
    display: none;
  }
}
</style>
