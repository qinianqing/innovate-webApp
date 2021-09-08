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
          :pageSize=3
          :listFunction="listFunction"
        >
          <template v-slot:title>
            <div class="list-title">
              <div class="line-left"></div>
              <div class="title-middle">{{title}}</div>
              <div class="line-right"></div>
            </div>
          </template>
          <template v-slot:list="slotProps">
            <div class="food-contain">
              <div class="food-image"> <img :src="slotProps.item.picture"> </div>
              <div class="food-text">
                <div class="food-title">{{slotProps.item.title}}</div>
                <div class="price">{{slotProps.item.price | price}}</div>
                <div class="discount-price">{{slotProps.item.discount_price | price}}</div>
                <div class="price-contain">
                  <svg-icon
                    icon="icon_reduce"
                    class="icon-reduce"
                    @click.native="reduce(slotProps.item)"
                    v-show="slotProps.item.status"
                  ></svg-icon>
                  <div
                    v-show="slotProps.item.status"
                    class="food-num"
                  >{{slotProps.item.num}}</div>
                  <svg-icon
                    icon="icon_add"
                    class="icon-add"
                    @click.native="add(slotProps.item)"
                  ></svg-icon>
                </div>
              </div>

            </div>
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
      listFunction: this._getFoodList,
      title: '冷吃炸鸡'
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
      console.log(result)
      result.data.list = result.data.list.map(item => {
        item.num = 0
        item.status = false
        return item
      })
      return result
    },
    add (e) {
      e.num++
      e.status = true
    },
    reduce (e) {
      if (e.num === 0) {
        return
      }
      e.num--
      if (e.num === 0) {
        e.status = false
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
