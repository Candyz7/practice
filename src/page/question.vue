<template>
  <div class="question">
    <Header title="题库"></Header>
    <div class="question-content">
      <Search @clickSearch="findtltle"></Search>
      <display-data :listData="listData"></display-data>
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
      listData: [
        {
          type: '单选',
          title: '驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？',
          options: [
            {id: 'A', option: '违章行为', answer: false},
            {id: 'B', option: '违法行为', answer: true},
            {id: 'C', option: '过失行为', answer: false},
            {id: 'D', option: '违规行为', answer: false}
          ]
        },
        {
          type: '单选',
          title: '驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？',
          options: [
            {id: 'A', option: '违章行为', answer: false},
            {id: 'B', option: '违法行为', answer: true},
            {id: 'C', option: '过失行为', answer: false},
            {id: 'D', option: '违规行为', answer: false}
          ]
        },
        {
          type: '多选',
          title: '第二个题目',
          options: [
            {id: 'A', option: '违章行为', answer: true},
            {id: 'B', option: '违法行为', answer: false},
            {id: 'C', option: '过失行为', answer: true},
            {id: 'D', option: '违规行为', answer: false}
          ]
        }
      ]
    }
  },
  mounted () {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    findtltle (value) {
      // var _this = this
      let item = this.listData.filter((data) => {
        return data.title.indexOf(value) !== -1
      })
      this.listData = item
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
  height: calc(100vh - 50px);
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
