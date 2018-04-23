/*
 * @Author: liujie
 * @Date:   2018-04-17 19:19:35
 * @Last Modified by:   liujie
 * @Last Modified time: 2018-04-18 14:43:38
 */
import axios from '@/services';

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
  userDetials(uid) {
    return this.http.get('/user/detail', {
      params: {
        uid
      }
    });
  }
  userInfo() {
    return this.http.get('/user/subcount')
  }
  userSongList(uid) {
    return this.http.get('/user/playlist', {
      params: {
        uid
      }
    })
  }
}

export default new CommonService(axios);
