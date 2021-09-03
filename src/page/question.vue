<template>
  <div class="question">
    <Header title="题库"></Header>
    <Search @clickSearch="findtltle"></Search>
    <div class="question-content">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">
          <display-data :listData="listData"></display-data>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import DisplayData from '../components/displayData.vue'
import Header from '../components/header.vue'
import Search from '../components/search.vue'
export default {
  name: 'question',
  components: { Header, Search, DisplayData },
  data () {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      page: 0,
      pageSize: 15,
      listData: [
        // {
        //   type: '单选',
        //   title: '驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？',
        //   options: [
        //     {id: 'A', option: '违章行为', answer: false},
        //     {id: 'B', option: '违法行为', answer: true},
        //     {id: 'C', option: '过失行为', answer: false},
        //     {id: 'D', option: '违规行为', answer: false}
        //   ]
        // },
        // {
        //   type: '单选',
        //   title: '驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？',
        //   options: [
        //     {id: 'A', option: '违章行为', answer: false},
        //     {id: 'B', option: '违法行为', answer: true},
        //     {id: 'C', option: '过失行为', answer: false},
        //     {id: 'D', option: '违规行为', answer: false}
        //   ]
        // },
        // {
        //   type: '多选',
        //   title: '第二个题目',
        //   options: [
        //     {id: 'A', option: '违章行为', answer: true},
        //     {id: 'B', option: '违法行为', answer: false},
        //     {id: 'C', option: '过失行为', answer: true},
        //     {id: 'D', option: '违规行为', answer: false}
        //   ]
        // }
      ]
    }
  },
  mounted () {
    // this.findtltle('')
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    onRefresh () {
      // 清空列表数据
      this.listData = []
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.page = 0
      this.onLoad()
    },
    onLoad () {
      this.findtltle('')
    },
    async findtltle (value) {
      let vm = this
      if (this.refreshing) {
        this.listData = []
        this.refreshing = false
      }
      let url = 'http://localhost:8080/practice/subject/list?page=' + vm.page + '&pageSize=' + vm.pageSize
      let param = {
        title: value
      }
      console.log(param)
      let res = await vm.$axiosHttp.postHttp(url, param)
      vm.listData = vm.listData.concat(res.list)
      // 加载状态结束
      this.loading = false
      // 数据全部加载完成
      if (vm.listData.length >= res.total) {
        this.finished = true
      }
    }
  }
}
</script>
<style scoped>
.question /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.question /deep/ .van-nav-bar .van-icon{
  color: white;
}
.question /deep/ .van-nav-bar__text{
  color: white;
}
.question /deep/ .van-nav-bar__title{
  color: white;
}
.question-content{
    width: 100%;
  background-color: rgb(241, 241, 241);
  height: calc(100vh - 104px);
  position: absolute;
  overflow: auto;
}
/* .question-search{
  display: flex;
} */
.question /deep/ .van-search{
  flex: 1;
}
/* .question-confirm{
  width: 40px;
  height: 30px;
  background-color: rgb(25, 137, 250);
  margin-top: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.question-box{
    background-color: white;
    margin-top: 3px;
}
.question-type{
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(241, 241, 241);
}
.question-first{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(25, 137, 250);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 0px 10px 0px 10px;
}
.question-next{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(250, 228, 27);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 0px 10px 0px 10px;
}
.question-title{
    flex: 1;
    text-align: left;
    padding-left: 10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>
