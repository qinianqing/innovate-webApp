/*
 * @Description:请求封装
 * @Author: 惜神
 * @Date: 2021-08-24 14:38:40
 */

import HttpRequest from './axios'
const baseUrl = process.env.VUE_APP_BASE_URL

const axios = new HttpRequest(baseUrl)

export default axios
