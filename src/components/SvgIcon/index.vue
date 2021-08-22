<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
  >
    <use xlink:href="symbolName" />
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require: true
    },
    class: {
      type: String,
      default: ''
    }
  },
  computed: {
    symbolName () {
      return `#icon-${this.icon}`
    },
    svgClass () {
      if (this.class) {
        return `svg-icon${this.class}`
      } else {
        return 'svg-icon'
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.svg-class {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
