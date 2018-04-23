<template>
  <div class="search" tabindex="100">
    <span>
      <input type="text" v-model="searchVal" @keyup.enter="search" @input="search" placeholder="搜索音乐，歌手，歌词，用户">
      <i class="iconfont icon-search"></i>
      <ul class="searchList" v-if="Object.keys(searchList).length!=0">
        <li v-if="searchList.songs" class="listTitle">单曲</li>
        <li v-for="e in searchList.songs" :key="e.id">{{ e.name }} - {{ e.artists[0].name }}</li>
        <li v-if="searchList.artists" class="listTitle">歌手</li>
        <li v-for="e in searchList.artists" :key="e.id">{{ e.name }}</li>
        <li v-if="searchList.albums" class="listTitle">专辑</li>
        <li v-for="e in searchList.albums" :key="e.id">{{ e.name }} - {{ e.artist.name }}</li>
        <li v-if="searchList.mvs" class="listTitle">MV</li>
        <li v-for="e in searchList.mvs" :key="e.id">{{ e.name }} - {{ e.artists[0].name }}</li>
        <li v-if="searchList.playlists" class="listTitle">歌单</li>
        <li v-for="e in searchList.playlists" :key="e.id">{{ e.name }}</li>
      </ul>
    </span>
  </div>
</template>
<script>
import searchServices from 'service/search'

export default {
  name: "Search",
  data() {
    return {
      show: false,
      searchVal: '',
      searchList: {
      }
    }
  },
  methods: {
    search() {
      if (!this.searchVal) {
        this.searchList = {}
      }
      searchServices.suggest(this.searchVal).then((res) => {
        if (res.code == 200) {
          this.searchList = res.result || {}
        }
      }).catch((err) => {

      });
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  outline: none;
  display: inline-block;
  margin-top: 18px;
  margin-left: 10px;
  span {
    position: relative;
    input {
      width: 230px;
      height: 25px;
      border: none;
      border-radius: 12px;
      outline: none;
      font-size: 12px;
      line-height: 1;
      padding: 0 30px 0 30px;
      box-sizing: border-box;
      &::-webkit-input-placeholder {
        color: #999;
      }
    }
    i {
      position: absolute;
      left: 8px;
      top: 0.5px;
      color: #b8b8b8;
    }
  }
  .searchList {
    margin-top: 18px;
    list-style: none;
    border-radius: 5px;
    border: 1px solid #c2c2c2;
    box-shadow: 0px 2px 6px 1px rgb(225, 225, 226);
    overflow: hidden;
    .listTitle {
      background-color: #f3f3f3;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      cursor: default;
    }
    li {
      background-color: #fafafa;
      height: 30px;
      width: 228px;
      line-height: 30px;
      font-size: 12px;
      padding-left: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        background-color: #f3f3f3;
      }
    }
  }
}
</style>
