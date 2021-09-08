<template>
  <div>
    <slot name="title"></slot>
    <div class="wrapper">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text=""
          @load="onLoadList"
          :offset="offset"
          class="content"
        >
          <van-cell
            v-for="(item,index) in list"
            :key="item+index"
            class="list-item"
          >
            <slot
              name="list"
              :item="item"
            ></slot>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>

export default {
  name: 'my-list',
  props: {
    offset: {
      type: Number
    },
    pageSize: {
      type: Number
    },
    listFunction: {
      type: Function
    }
  },

  data () {
    return {
      isLoading: false,
      loading: false,
      finished: false,
      parmas: {
        currentPage: 1,
        pageSize: this.pageSize
      },
      pageInfo: {
        currentPage: 1,
        pageSize: this.pageSize,
        totalPage: 0,
        totalRecords: 0
      },
      list: []
    }
  },
  created: function () {
    // dom加载完成前渲染，在实例创建完成后被立即调用
    this.parmas.pageSize = this.pageInfo.pageSize
    this.list = []
    this.onLoad()
  },
  methods: {
    /**
    *  下拉刷新方法
     */
    onRefresh () {
      setTimeout(() => {
        this.pageInfo.currentPage = 1
        this.finished = false // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
        this.loading = true
        this.onLoad()
      }, 1000)
    },
    /**
    *  上拉加载方法
    *  页面打开时初始化会调用onLoad方法 如果想去掉初始化调用使用,给List添加属性immediate-check=false
     */
    async onLoad () {
      // 调用请求数据方法
      this.parmas.currentPage = this.pageInfo.currentPage
      const res = await this.listFunction({
        page_index: this.parmas.currentPage,
        page_size: this.parmas.pageSize
      })
      const data = res.data.list
      if (data.length === 0) {
        this.finished = true
        return false
      }
      if (this.pageInfo.currentPage === 1) {
        this.list = data
      } else {
        this.list = this.list.concat(data)
      }
      this.pageInfo.currentPage = res.data.page_index
      this.pageInfo.pageSize = res.data.page_size
      this.pageInfo.totalPage = parseInt(res.data.total / res.data.page_size) + 1
      this.pageInfo.totalRecords = res.data.total
      // 如果列表数据条数>=总条数，不再触发滚动加载
      if (this.list.length >= this.pageInfo.totalRecords) {
        this.finished = true
      }
      this.isLoading = false
      this.loading = false
    },
    async onLoadList () {
      // 滚动加载时触发，list组件定义的方法
      setTimeout(() => {
        if ((this.pageInfo.totalPage > this.pageInfo.currentPage) && (this.pageInfo.totalPage !== this.pageInfo.currentPage)) {
          this.pageInfo.currentPage++
          // this.loading = true
          this.onLoad()
        }
      }, 1000)
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';
.wrapper {
  @include resH-to(big-screens) {
    margin-bottom: 32px;
  }
  margin-bottom: 32px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  .list-item:nth-child(2n + 1) {
    margin-right: 24px;
  }
}
.list-item {
  width: 333.49px;
  background: #eaeaea;
  box-shadow: 0px 6px 12px 0px rgba(232, 232, 232, 0.49);
  margin-bottom: 25px;
  border-radius: 8px;
}
</style>
