/*
 * @Author: liujie
 * @Date:   2018-04-17 19:19:35
 * @Last Modified by: ihoey
 * @Last Modified time: 2018-04-25 18:51:41
 */

import axios from '@/services';
import storejs from 'store/dist/store.legacy'
const {
  uid
} = storejs.get('userInfo') || ''

class CommonService {
  constructor(http) {
    this.http = http;
  }
  login(phone, password) {
    return this.http.get('/login/cellphone', {
      params: {
        phone,
        password
      }
    });
  }
  userDetials() {
    return this.http.get('/user/detail', {
      params: {
        uid
      }
    });
  }
  userInfo() {
    return this.http.get('/user/subcount')
  }
  userSongList() {
    return this.http.get('/user/playlist', {
      params: {
        uid
      }
    })
  }
}

export default new CommonService(axios);
