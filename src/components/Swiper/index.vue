<template>
  <van-swipe
    :class="swiperClass"
    :autoplay=autoplay
  >
    <van-swipe-item
      v-for="(image, index) in images"
      :key="index"
      :class="swiperItemClass"
    >
      <img
        v-lazy="image"
        class="item-image"
      />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'my-swiper',
  props: {
    autoplay: {
      type: Number,
      default: 3000
    },
    images: {
      type: Array
    },
    swiperClass: {
      type: String
    },
    imageClass: {
      type: String
    }
  },
  computed: {
    swiperItemClass () {
      if (this.imageClass) {
        return `items ${this.imageClass}`
      } else {
        return 'items'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  width: 100%;
  height: 100%;
}
.item-image {
  width: 100%;
}
</style>
