/*
 * @Author: liujie
 * @Date:   2018-04-18 11:09:31
 * @Last Modified by:   liujie
 * @Last Modified time: 2018-04-18 15:22:21
 */

import router from './router'
import store from './store'
import storejs from 'store/dist/store.legacy'

router.beforeEach((to, from, next) => {
  // storejs.set('login', { phone: 13581702065, password: 'liujie19900725' })
  let loginParam = storejs.get('login')
  // console.log(loginParam.phone, loginParam.password)
  if (loginParam && !store.getters.uid) {
    store.dispatch('loginByPhone', loginParam).then(res => {
      console.log(res)
      // next({ ...to, replace: true })

    })
  }
  next()
})

router.afterEach(() => {
  // NProgress.done() // finish progress bar
})
