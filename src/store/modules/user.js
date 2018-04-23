/*
 * @Author: liujie
 * @Date:   2018-04-16 15:06:33
 * @Last Modified by:   liujie
 * @Last Modified time: 2018-04-18 14:52:41
 */

import storejs from 'store/dist/store.legacy'
import userService from 'service/user';

const user = {
  state: {
    uid: '',
    avatar: '',
    nickname: ''
  },
  mutations: {
    SET_UID: (state, uid) => {
      state.uid = uid
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_NICKNAME: (state, nickname) => {
      state.nickname = nickname
    },
  },
  actions: {
    loginByPhone({ commit }, param) {
      return new Promise((resolve, reject) => {
        userService.login(param.phone, param.password).then((res) => {
          commit('SET_UID', res.profile.userId);
          commit('SET_AVATAR', res.profile.avatarUrl);
          commit('SET_NICKNAME', res.profile.nickname);
        })
      })
    }
  }
}

export default user
