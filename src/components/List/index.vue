<template>
  <div>
    <div class="wrapper">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoadList"
          :offset="offset"
          class="content"
        >
          <van-cell
            v-for="(item,index) in list"
            :key="item+index"
            class="list-item"
            :title="index"
          >
            {{item.topic}}
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getFoodList } from '@/api/food'
export default {
  name: 'my-list',
  data () {
    return {
      saleDataList: [],
      list: [],
      isLoading: false,
      loading: false,
      finished: false,
      offset: 30,
      parmas: {
        currentPage: 1,
        pageSize: 10
      },
      pageInfo: {
        currentPage: 1,
        pageSize: 10,
        totalPage: 0,
        totalRecords: 0
      }
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
      this.pageInfo.currentPage = 1
      this.finished = false // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
      this.loading = true
      this.onLoad()
    },
    /**
    *  上拉加载方法
    *  页面打开时初始化会调用onLoad方法 如果想去掉初始化调用使用,给List添加属性immediate-check=false
     */
    async onLoad () {
      // 调用请求数据方法
      this.parmas.currentPage = this.pageInfo.currentPage
      const res = await this._getFoodList()
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
      if ((this.pageInfo.totalPage > this.pageInfo.currentPage) && (this.pageInfo.totalPage !== this.pageInfo.currentPage)) {
        this.pageInfo.currentPage++
        // this.loading = true
        this.onLoad()
      }
    },
    async _getFoodList () {
      const result = await getFoodList({
        page_index: this.parmas.currentPage,
        page_size: this.parmas.pageSize
      })
      return result
    }
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 80px;
}
</style>
