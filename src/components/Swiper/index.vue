<template>
  <div>
    <van-swipe
      :autoplay="autoplay"
      :with="swiperWidth"
      :height="swiperHeight"
    >
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          v-lazy="image"
          class="item-images"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'my-swiper',
  props: {
    autoplay: {
      type: String,
      default: '3000'
    },
    images: {
      type: Array
    },
    swiperWidth: {
      type: String
    },
    swiperHeight: {
      type: String
    },
    swiperItemWidth: {
      type: String
    },
    swiperItemHeight: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.item-images {
  width: 100%;
  height: 100%;
}
</style>
