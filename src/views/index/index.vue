<template>
  <div>
    <div class="contain">
      <div class="logo"></div>
      <div class="location">
        <div class="place">
          <svg-icon
            icon="location"
            class="location-icon"
          ></svg-icon>
          <span class="location-text">{{location}}</span>
        </div>
        <div class="mark">
          <svg-icon
            icon="careful"
            class="careful-icon"
          ></svg-icon>
          <span class="mark-text">{{markText}}</span>
        </div>
      </div>
      <div class="swiper-contain">
        <my-swiper
          :images="images"
          swiperClass="swiper-box"
          imageClass="swiper-image"
        ></my-swiper>
      </div>
      <div class="main-content">
        <my-list
          :formatList="list"
          :offset=30
          :pageSize=10
          :listFunction="listFunction"
        >
          <template v-slot:default="slotProps">
            {{ slotProps.item.topic }}
          </template>
        </my-list>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from '@/utils/baiduMap'
import { getFoodList } from '@/api/food'
export default {
  data () {
    return {
      location: '',
      markText: '当前只开通河南郑州同城快递服务',
      images: [
        'https://cdn-scp.banu.cn/ideas-super-test/ideas/1630047965541-171105486.png',
        'https://cdn-scp.banu.cn/ideas-super-test/ideas/1630047965541-171105486.png',
        'https://cdn-scp.banu.cn/ideas-super-test/ideas/1630047965541-171105486.png'
      ],
      list: [],
      listFunction: this._getFoodList

    }
  },
  created () {
    this.getLocation()
  },
  methods: {
    async getLocation () {
      const BDSdk = new BaiduMap()
      const localMsg = await BDSdk.getLocation()
      this.location = localMsg && localMsg.content ? localMsg.content.address_detail.city : '郑州'
    },
    async _getFoodList (parmas) {
      const result = await getFoodList(parmas)
      return result
    }
  }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
