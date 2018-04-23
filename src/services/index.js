/*
 * @Author: liujie
 * @Date:   2018-04-17 19:19:08
 * @Last Modified by: ihoey
 * @Last Modified time: 2018-04-23 10:57:29
 */

import axios from 'axios';
import router from '../router';

const options = {
  baseURL: process.env.BASE_API,
  timeout: 10000
};
const service = axios.create(options);

// respone拦截器
service.interceptors.response.use(
  response => {
    if(response.status == 200) {
      return response.data;
    }
  }, error => {
    return Promise.reject(error)
  }
)

export default service;
