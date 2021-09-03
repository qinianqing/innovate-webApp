<template>
  <div class="wrapp">
    <slot></slot>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from './footer.vue'
export default {
  name: 'Layout',
  components: {
    'my-footer': Footer
  }

}
</script>

<style lang="scss" scoped>
.wrapp {
  padding-bottom: $footer-height;
}
</style>
