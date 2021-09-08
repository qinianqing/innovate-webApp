<template>
  <div>
    <ul class="layout-footer">
      <router-link
        v-for="(tab, index) in tabs"
        :key="'tabs' + index"
        :to="tab.path"
        exact-active-class="active"
        class="item"
        @click.native="change(tab.path)"
      >
        <svg-icon
          :icon="tab.selected? tab.icon + '-hover': tab.icon"
          :className="tab.selected? 'svg-icon-' + tab.icon + '-hover': 'svg-icon-' + tab.icon"
        ></svg-icon>
        <p>{{tab.name}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      tabs: [
        { name: '首页', icon: 'home', path: '/index', selected: false },
        { name: '订单', icon: 'order', path: '/order', selected: false },
        { name: '我的', icon: 'person', path: '/center', selected: false }
      ]
    }
  },

  mounted () {
    const path = this.$route.path
    this.changeIcon(path)
  },

  methods: {
    change (path) {
      this.changeIcon(path)
    },
    changeIcon (path) {
      this.tabs.forEach(item => {
        item.selected = false
        if (item.path === path) {
          item.selected = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './footer.scss';
</style>
