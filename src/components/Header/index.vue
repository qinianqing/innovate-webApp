<template>
  <div class="header">
    <div
      class="header-left"
      :style="{zIndex: zIndex,'background-color':bkColor}"
      @click="goBack()"
    >
      <slot name="h-left">
        <svg-icon icon="arrow-right"></svg-icon>
        <span
          class="left-test"
          v-if="backText"
        >{{backText}}</span>
      </slot>
    </div>
    <div class="header-content">
      <slot name="h-center">
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="header-right">
      <slot name="h-right">
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'my-header',
  props: {
    title: {
      type: String,
      default: ''
    },
    backText: {
      type: String,
      default: '返回'
    },
    back: {
      type: Function
    },
    bkColor: {
      type: String
    },
    hasBack: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    goBack () {
      if (this.back) {
        this.back()
        return
      }
      this.$router.go(-1)
    }

  }

}
</script>

<style lang="scss" scoped>
</style>
