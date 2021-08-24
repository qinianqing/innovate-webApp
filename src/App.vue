<template>
  <div id="app">
    <transition :name="direction">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      direction: ''
    }
  }
}
</script>

<style lang="scss">
</style>
