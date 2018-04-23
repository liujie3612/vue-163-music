/*
 * @Author: ihoey
 * @Date: 2018-04-21 16:16:51
 * @Last Modified by: ihoey
 * @Last Modified time: 2018-04-21 16:18:20
 */

import axios from '@/services';

class CommonService {
  constructor(http) {
    this.http = http;
  }
  suggest(keywords) {
    return this.http.get('/search/suggest', {
      params: {
        keywords
      }
    });
  }
}

export default new CommonService(axios);
