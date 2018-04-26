/*
 * @Author: liujie
 * @Date:   2018-04-18 11:09:31
 * @Last Modified by: ihoey
 * @Last Modified time: 2018-04-25 11:30:38
 */

import router from './router'
import store from './store'
import storejs from 'store/dist/store.legacy'


storejs.set('login', {
  phone: 13522668495,
  password: 951121
})


router.beforeEach((to, from, next) => {
  let loginParam = storejs.get('login')
  if (loginParam && !store.getters.uid) {
    store.dispatch('loginByPhone', loginParam).then(res => {
      let userInfo = {
        uid: res.profile.userId,
        nickname: res.profile.nickname,
        avatar: res.profile.avatarUrl
      }
      storejs.set('userInfo', userInfo)
    })
  }
  next()
})
router.afterEach(() => {
  // NProgress.done() // finish progress bar
})
