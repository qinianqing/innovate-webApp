/*
 * @Description: 百度地图API
 * @Author: 惜神
 * @Date: 2021-08-24 14:32:57
 */
import Vue from 'vue'
const baseUrl = process.env.VUE_APP_BAIDU_URL
const ak = process.env.VUE_APP_BAIDU_AK
class BDSdk {
  constructor() {
    this.baseUrl = baseUrl
    this.ak = ak
  }

  // 当前定位地址
  async getLocation () {
    const url = `${this.baseUrl}/location/ip?ak=${this.ak}&coor=bd09l`
    return (new Vue()).$jsonp(url)
      .then(res => {
        return Promise.resolve(res)
      })
  }
}
export default BDSdk
