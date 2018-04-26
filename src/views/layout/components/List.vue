<template>
  <div class="list">
    <ul v-for="x in listData" class="list-title" :key="x.id" v-if="x.list.length">
      <span>{{x.title}}</span>
      <li v-for="y in x.list" class="list-item" :key="y.id">{{y.text}}</li>
    </ul>
  </div>
</template>
<script>
import userServices from 'service/user'

export default {
  name: 'list',
  data() {
    return {
      listData: [{
        id: 1,
        title: '推荐',
        list: [{
          id: 1,
          icon: '',
          text: '发现音乐',
          url: ''
        },
        {
          id: 2,
          icon: '',
          text: '私人FM',
          url: ''
        },
        {
          id: 3,
          icon: '',
          text: 'MV',
          url: ''
        },
        {
          id: 4,
          icon: '',
          text: '朋友',
          url: ''
        }]
      },
      {
        id: 2,
        title: '我的音乐',
        list: [{
          id: 1,
          icon: '',
          text: '我的MV',
          url: ''
        }]
      }, {
        id: 3,
        title: '创建的歌单',
        list: []
      }, {
        id: 4,
        title: '收藏的音乐',
        list: []
      }]
    }
  },
  created() {
  },
  mounted() {
    this.getPlaylist()
  },
  watch: {
  },
  computed: {
  },
  methods: {
    getPlaylist() {
      userServices.userSongList().then((res) => {
        if (res.code == 200) {
          res.playlist.map((e, i) => {
            if (e.subscribed) {
              this.listData[3].list.push({ id: i, text: e.name })
            } else {
              this.listData[2].list.push({ id: i, text: e.name })
            }
          })
        }
      }).catch((err) => {

      });
    }
  },
  components: {},

}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.list {
  width: 200px;
  height: 465px;
  overflow-y: scroll;
  background-color: #f6f6f6;
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 10px;
    background-color: #f5f5f7;
  }
  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #e1e1e2;
    background-color: #ababab;
  }
  .list-title {
    span {
      display: block;
      width: 100%;
      height: 24px;
      line-height: 24px;
      padding-left: 10px;
      font-size: 12px;
      color: #777777;
    }
  }
  li {
    list-style: none;
    font-size: 13px;
    color: #333;
    height: 34px;
    line-height: 34px;
    padding-left: 40px;
    padding-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
}
</style>
