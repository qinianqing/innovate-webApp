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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location: '郑州',
      markText: '当前只开通河南郑州同城快递服务'
    }
  }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
